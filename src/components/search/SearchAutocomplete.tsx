import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight, Star, TrendingUp, X } from "lucide-react";
import { searchProducts, searchCategories, highlightMatch } from "@/lib/productSearch";
import type { SearchResult, CategorySuggestion } from "@/lib/productSearch";
import type { CategoryData } from "@/data/mizzouCategoryData";

interface SearchAutocompleteProps {
  categories: CategoryData[];
  schoolPrefix: string; // "/mizzou" or "/indiana"
  accentColor: string;
  accentTextColor?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  buttonStyle?: React.CSSProperties;
}

const TRENDING = ["Wireless Earbuds", "Nike", "Pet Supplies", "Air Fryer", "Vitamins"];

export default function SearchAutocomplete({
  categories,
  schoolPrefix,
  accentColor,
  accentTextColor = "#fff",
  placeholder = "Search 50,000+ products...",
  className = "",
  inputClassName = "",
  buttonClassName = "",
  buttonStyle,
}: SearchAutocompleteProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [catSuggestions, setCatSuggestions] = useState<CategorySuggestion[]>([]);
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  // Debounced search
  const doSearch = useCallback(
    (q: string) => {
      if (q.trim().length < 1) {
        setResults([]);
        setCatSuggestions([]);
        return;
      }
      const productResults = searchProducts(categories, q, { limit: 6 });
      const categoryResults = searchCategories(categories, q);
      setResults(productResults);
      setCatSuggestions(categoryResults);
      setSelectedIdx(-1);
    },
    [categories]
  );

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => doSearch(query), 120);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, doSearch]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const goToResults = (q?: string) => {
    const searchQ = q || query;
    if (searchQ.trim()) {
      navigate(`${schoolPrefix}/search?q=${encodeURIComponent(searchQ.trim())}`);
      setIsOpen(false);
      setQuery("");
    }
  };

  const goToProduct = (result: SearchResult) => {
    const sub = result.product.subcategory;
    navigate(`${schoolPrefix}/category/${result.categorySlug}/${sub}`);
    setIsOpen(false);
    setQuery("");
  };

  const goToCategory = (slug: string) => {
    navigate(`${schoolPrefix}/category/${slug}`);
    setIsOpen(false);
    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalItems = catSuggestions.length + results.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.min(prev + 1, totalItems - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIdx >= 0 && selectedIdx < catSuggestions.length) {
        goToCategory(catSuggestions[selectedIdx].slug);
      } else if (selectedIdx >= catSuggestions.length) {
        goToProduct(results[selectedIdx - catSuggestions.length]);
      } else {
        goToResults();
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const hasContent = query.trim().length > 0 && (results.length > 0 || catSuggestions.length > 0);
  const showTrending = isOpen && query.trim().length === 0;
  const showResults = isOpen && hasContent;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`w-full pl-12 pr-32 py-4 bg-white rounded-xl text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all shadow-lg text-sm md:text-base ${inputClassName}`}
          autoComplete="off"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); inputRef.current?.focus(); }}
            className="absolute right-24 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <button
          onClick={() => goToResults()}
          className={`absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 font-bold text-sm rounded-lg transition-opacity hover:opacity-90 active:scale-[0.97] ${buttonClassName}`}
          style={buttonStyle || { backgroundColor: accentColor, color: accentTextColor }}
        >
          Search
        </button>
      </div>

      {/* ── DROPDOWN ─────────────────────────────── */}
      {(showTrending || showResults) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200">
          {/* Trending (empty query) */}
          {showTrending && (
            <div className="p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                <TrendingUp className="w-3 h-3" /> Trending Searches
              </p>
              <div className="flex flex-wrap gap-1.5">
                {TRENDING.map((term) => (
                  <button
                    key={term}
                    onClick={() => { setQuery(term); setIsOpen(true); }}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Category suggestions */}
          {showResults && catSuggestions.length > 0 && (
            <div className="px-4 pt-3 pb-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Categories</p>
              {catSuggestions.map((cat, i) => (
                <button
                  key={cat.slug}
                  onClick={() => goToCategory(cat.slug)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${
                    selectedIdx === i ? "bg-gray-100" : "hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-gray-400" />
                    <HighlightedText text={cat.name} query={query} />
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          )}

          {/* Product results */}
          {showResults && results.length > 0 && (
            <div className="px-4 pt-2 pb-3">
              {catSuggestions.length > 0 && <div className="border-t border-gray-100 mb-2" />}
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Products</p>
              {results.map((result, i) => {
                const globalIdx = catSuggestions.length + i;
                return (
                  <button
                    key={result.product.id}
                    onClick={() => goToProduct(result)}
                    className={`w-full text-left px-2 py-2 rounded-lg transition-colors flex items-center gap-3 group ${
                      selectedIdx === globalIdx ? "bg-gray-100" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-100 shrink-0">
                      <img src={result.product.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 line-clamp-1">
                        <HighlightedText text={result.product.name} query={query} />
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-500">{result.product.brand}</span>
                        <span className="text-[10px] text-gray-300">•</span>
                        <div className="flex items-center gap-0.5">
                          <Star className="w-2.5 h-2.5" fill={accentColor} stroke={accentColor} />
                          <span className="text-[10px] text-gray-500">{result.product.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-bold text-gray-900">${result.product.price.toFixed(2)}</p>
                      <p className="text-[9px] font-medium" style={{ color: accentColor }}>
                        NIL: ${result.product.nilDonation.toFixed(2)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* View all results link */}
          {showResults && (
            <button
              onClick={() => goToResults()}
              className="w-full px-4 py-3 text-sm font-semibold text-center border-t border-gray-100 transition-colors hover:bg-gray-50 flex items-center justify-center gap-2"
              style={{ color: accentColor }}
            >
              View all results for "{query}"
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  const parts = highlightMatch(text, query);
  return (
    <span>
      {parts.map((part, i) =>
        part.highlighted ? (
          <mark key={i} className="bg-yellow-200/60 text-inherit rounded-sm px-0.5">{part.text}</mark>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </span>
  );
}
