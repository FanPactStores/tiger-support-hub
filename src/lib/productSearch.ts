/**
 * Client-side fuzzy product search engine.
 * Scores results by relevance across name, brand, and subcategory fields.
 * Supports prefix matching, token matching, and fuzzy matching.
 */

import type { CategoryProduct, CategoryData } from "@/data/mizzouCategoryData";

export interface SearchResult {
  product: CategoryProduct;
  categorySlug: string;
  categoryName: string;
  score: number;
  matchedField: "name" | "brand" | "subcategory";
}

export interface CategorySuggestion {
  slug: string;
  name: string;
  matchScore: number;
}

/** Normalise a string for matching */
function norm(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
}

/** Simple edit-distance (Levenshtein) capped at maxDist for perf */
function editDistance(a: string, b: string, maxDist = 2): number {
  if (Math.abs(a.length - b.length) > maxDist) return maxDist + 1;
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    let rowMin = Infinity;
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      rowMin = Math.min(rowMin, dp[i][j]);
    }
    if (rowMin > maxDist) return maxDist + 1;
  }
  return dp[m][n];
}

/** Score a single field against query tokens. Higher = better match. */
function scoreField(fieldValue: string, queryTokens: string[], fullQuery: string): number {
  const normalised = norm(fieldValue);
  let score = 0;

  // Exact full-query match
  if (normalised === fullQuery) return 100;

  // Full query is a substring (e.g. "sony wh" in "sony wh-1000xm5")
  if (normalised.includes(fullQuery)) score += 60;

  // Prefix match on the field
  if (normalised.startsWith(fullQuery)) score += 20;

  const fieldTokens = normalised.split(/\s+/);

  for (const qt of queryTokens) {
    // Exact token match
    if (fieldTokens.some((ft) => ft === qt)) {
      score += 30;
      continue;
    }
    // Prefix token match (typing "son" matches "sony")
    if (fieldTokens.some((ft) => ft.startsWith(qt))) {
      score += 20;
      continue;
    }
    // Substring token match
    if (normalised.includes(qt)) {
      score += 12;
      continue;
    }
    // Fuzzy match (1-edit distance)
    if (qt.length >= 3 && fieldTokens.some((ft) => editDistance(qt, ft) <= 1)) {
      score += 8;
      continue;
    }
    // Fuzzy match (2-edit distance, longer tokens)
    if (qt.length >= 5 && fieldTokens.some((ft) => editDistance(qt, ft) <= 2)) {
      score += 4;
    }
  }

  return score;
}

/** Search products across all categories */
export function searchProducts(
  categories: CategoryData[],
  query: string,
  options?: { limit?: number; minScore?: number }
): SearchResult[] {
  const limit = options?.limit ?? 50;
  const minScore = options?.minScore ?? 4;
  const fullQuery = norm(query);
  if (fullQuery.length < 1) return [];

  const queryTokens = fullQuery.split(/\s+/).filter(Boolean);
  const results: SearchResult[] = [];

  for (const cat of categories) {
    for (const product of cat.products) {
      const nameScore = scoreField(product.name, queryTokens, fullQuery) * 1.5; // name weight
      const brandScore = scoreField(product.brand, queryTokens, fullQuery) * 1.3;
      const subScore = scoreField(
        product.subcategory.replace(/-/g, " "),
        queryTokens,
        fullQuery
      );

      const bestScore = Math.max(nameScore, brandScore, subScore);
      const matchedField: "name" | "brand" | "subcategory" =
        bestScore === nameScore ? "name" : bestScore === brandScore ? "brand" : "subcategory";

      // Boost name-brand products slightly
      const brandBoost = product.isNameBrand ? 2 : 0;
      const totalScore = bestScore + brandBoost;

      if (totalScore >= minScore) {
        results.push({
          product,
          categorySlug: cat.slug,
          categoryName: cat.name,
          score: totalScore,
          matchedField,
        });
      }
    }
  }

  // Sort by score descending, then by name brand, then by reviews
  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.product.isNameBrand !== a.product.isNameBrand)
      return b.product.isNameBrand ? 1 : -1;
    return b.product.reviews - a.product.reviews;
  });

  return results.slice(0, limit);
}

/** Get category suggestions matching a query */
export function searchCategories(
  categories: CategoryData[],
  query: string
): CategorySuggestion[] {
  const fullQuery = norm(query);
  if (fullQuery.length < 1) return [];
  const tokens = fullQuery.split(/\s+/).filter(Boolean);

  const results: CategorySuggestion[] = [];
  for (const cat of categories) {
    const score = scoreField(cat.name, tokens, fullQuery);
    // Also check subcategory labels
    let subScore = 0;
    for (const sub of cat.subcategories) {
      subScore = Math.max(subScore, scoreField(sub.label, tokens, fullQuery));
    }
    const best = Math.max(score, subScore * 0.8);
    if (best >= 8) {
      results.push({ slug: cat.slug, name: cat.name, matchScore: best });
    }
  }
  results.sort((a, b) => b.matchScore - a.matchScore);
  return results.slice(0, 5);
}

/** Highlight matched text portions */
export function highlightMatch(text: string, query: string): { text: string; highlighted: boolean }[] {
  if (!query.trim()) return [{ text, highlighted: false }];
  const normalQuery = query.toLowerCase().trim();
  const lowerText = text.toLowerCase();
  const idx = lowerText.indexOf(normalQuery);
  if (idx === -1) {
    // Try matching individual tokens
    const tokens = normalQuery.split(/\s+/);
    for (const token of tokens) {
      const tIdx = lowerText.indexOf(token);
      if (tIdx !== -1) {
        return [
          { text: text.slice(0, tIdx), highlighted: false },
          { text: text.slice(tIdx, tIdx + token.length), highlighted: true },
          { text: text.slice(tIdx + token.length), highlighted: false },
        ].filter((s) => s.text.length > 0);
      }
    }
    return [{ text, highlighted: false }];
  }
  return [
    { text: text.slice(0, idx), highlighted: false },
    { text: text.slice(idx, idx + normalQuery.length), highlighted: true },
    { text: text.slice(idx + normalQuery.length), highlighted: false },
  ].filter((s) => s.text.length > 0);
}
