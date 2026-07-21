import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { mizzouCategories } from "@/data/mizzouCategoryData";
import { indianaCategories } from "@/data/indianaCategoryData";
import { butlerCategories } from "@/data/butlerCategoryData";

const bySchool = {
  missouri: mizzouCategories,
  mizzou: mizzouCategories,
  indiana: indianaCategories,
  butler: butlerCategories,
} as const;

export default defineTool({
  name: "search_products",
  title: "Search products",
  description:
    "Search products in a FanPact storefront by keyword. Optionally filter by category slug. Returns up to 25 matches with NIL contribution amounts.",
  inputSchema: {
    school: z.enum(["missouri", "mizzou", "indiana", "butler"]).describe("Storefront to search."),
    query: z.string().describe("Keyword to match against product name or brand."),
    category: z.string().optional().describe("Optional category slug to restrict the search."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ school, query, category }) => {
    const cats = bySchool[school];
    const q = query.trim().toLowerCase();
    const pool = category ? cats.filter((c) => c.slug === category) : cats;
    const matches: any[] = [];
    for (const c of pool) {
      for (const p of c.products) {
        if (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
        ) {
          matches.push({
            id: p.id,
            name: p.name,
            brand: p.brand,
            isNameBrand: p.isNameBrand,
            price: p.price,
            nilContribution: p.nilDonation,
            rating: p.rating,
            reviews: p.reviews,
            category: c.slug,
            subcategory: p.subcategory,
          });
          if (matches.length >= 25) break;
        }
      }
      if (matches.length >= 25) break;
    }
    return {
      content: [{ type: "text", text: JSON.stringify(matches, null, 2) }],
      structuredContent: { school, query, count: matches.length, products: matches },
    };
  },
});
