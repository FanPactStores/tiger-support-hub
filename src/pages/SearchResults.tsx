import { useState, useMemo } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { searchProducts, highlightMatch } from "@/lib/productSearch";
import type { SearchResult } from "@/lib/productSearch";
import type { CategoryData, CategoryProduct } from "@/data/mizzouCategoryData";
import { allCategories as mizzouCategories } from "@/data/mizzouCategoryData";
import { allCategories as indianaCategories } from "@/data/indianaCategoryData";
import { useCart } from "@/contexts/CartContext";
import SearchAutocomplete from "@/components/search/SearchAutocomplete";
import {
  Search, ShoppingCart, ChevronDown, Star, SlidersHorizontal, Grid3X3, List, X, ArrowLeft, Menu,
} from "lucide-react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import fanpactPennantMark from "@/assets/fanpact-pennant-mark.png";

interface SearchResultsProps {
  school: "mizzou" | "indiana";
}

const SCHOOLS = {
  mizzou: {
    name: "Missouri",
    prefix: "/mizzou",
    accent: "#F1B82D",
    accentText: "#000",
    bgDark: "#000000",
    categories: mizzouCategories,
  },
  indiana: {
    name: "Indiana",
    prefix: "/indiana",
    accent: "#990000",
    accentText: "#fff",
    bgDark: "#990000",
    categories: indianaCategories,
  },
};

export default function SearchResults({ school }: SearchResultsProps) {
  const config = SCHOOLS[school];
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const { totalItems } = useCart();
  const [sortBy, setSortBy] = useState("relevance");
  const [gridView, setGridView] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterBrandType, setFilterBrandType] = useState<string>("all");

  const allResults = useMemo(
    () => searchProducts(config.categories, initialQuery, { limit: 100 }),
    [config.categories, initialQuery]
  );

  const filteredResults = useMemo(() => {
    let items = [...allResults];
    if (filterCategory !== "all") {
      items = items.filter((r) => r.categorySlug === filterCategory);
    }
    if (filterBrandType === "name-brand") {
      items = items.filter((r) => r.product.isNameBrand);
    } else if (filterBrandType === "value") {
      items = items.filter((r) => !r.product.isNameBrand);
    }
    if (sortBy === "price-low") items.sort((a, b) => a.product.price - b.product.price);
    if (sortBy === "price-high") items.sort((a, b) => b.product.price - a.product.price);
    if (sortBy === "rating") items.sort((a, b) => b.product.rating - a.product.rating);
    if (sortBy === "reviews") items.sort((a, b) => b.product.reviews - a.product.reviews);
    return items;
  }, [allResults, filterCategory, filterBrandType, sortBy]);

  // Get unique categories from results for filter
  const resultCategories = useMemo(() => {
    const map = new Map<string, string>();
    allResults.forEach((r) => map.set(r.categorySlug, r.categoryName));
    return Array.from(map.entries());
  }, [allResults]);

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          fill={i < Math.floor(rating) ? config.accent : "transparent"}
          stroke={i < Math.floor(rating) ? config.accent : "#9ca3af"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── HEADER ─────────────────────────────────── */}
      <header className="border-b border-border/30" style={{ backgroundColor: config.bgDark }}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link to={config.prefix} className="flex items-center gap-2 shrink-0">
            <img src={fanpactPennantMark} alt="FanPact" className="h-8 w-auto" />
            <span className="font-bold text-lg text-white tracking-tight hidden sm:inline">FanPact</span>
            <span
              className="text-xs font-medium px-1.5 py-0.5 rounded"
              style={school === "mizzou"
                ? { backgroundColor: config.accent, color: config.accentText }
                : { backgroundColor: "#fff", color: config.accent }
              }
            >
              {config.name}
            </span>
          </Link>

          <div className="flex-1 max-w-2xl">
            <SearchAutocomplete
              categories={config.categories}
              schoolPrefix={config.prefix}
              accentColor={config.accent}
              accentTextColor={config.accentText}
              placeholder={`Search products...`}
              inputClassName="!py-2.5 !text-sm !shadow-none"
              buttonStyle={{ backgroundColor: config.accent, color: config.accentText }}
            />
          </div>

          <Link
            to={school === "mizzou" ? "/mizzou/cart" : "/cart"}
            className="relative text-white hover:opacity-80 transition-opacity shrink-0"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center"
                style={{ backgroundColor: config.accent, color: config.accentText }}
              >
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* ── RESULTS ────────────────────────────────── */}
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
          <Link to={config.prefix} className="hover:underline">Store</Link>
          <span>/</span>
          <span className="font-medium text-foreground">Search results</span>
        </nav>

        <h1 className="text-xl md:text-2xl font-bold mb-1">
          {allResults.length > 0
            ? <>Results for "<span style={{ color: config.accent }}>{initialQuery}</span>"</>
            : <>No results for "{initialQuery}"</>
          }
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          {allResults.length} product{allResults.length !== 1 ? "s" : ""} found
        </p>

        <div className="flex gap-6">
          {/* ── SIDEBAR ──────────────────────────────── */}
          <aside className="hidden lg:block w-52 shrink-0">
            <div className="sticky top-4 space-y-5">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-2">Category</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setFilterCategory("all")}
                    className={`block w-full text-left text-xs px-2 py-1.5 rounded transition-colors ${
                      filterCategory === "all" ? "font-bold" : "text-muted-foreground hover:text-foreground"
                    }`}
                    style={filterCategory === "all" ? { color: config.accent } : {}}
                  >
                    All Categories ({allResults.length})
                  </button>
                  {resultCategories.map(([slug, name]) => {
                    const count = allResults.filter((r) => r.categorySlug === slug).length;
                    return (
                      <button
                        key={slug}
                        onClick={() => setFilterCategory(slug)}
                        className={`block w-full text-left text-xs px-2 py-1.5 rounded transition-colors ${
                          filterCategory === slug ? "font-bold" : "text-muted-foreground hover:text-foreground"
                        }`}
                        style={filterCategory === slug ? { color: config.accent } : {}}
                      >
                        {name} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider mb-2">Brand Type</h3>
                <div className="space-y-1">
                  {[
                    { val: "all", label: "All" },
                    { val: "name-brand", label: "Name Brands" },
                    { val: "value", label: "Value Brands" },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setFilterBrandType(opt.val)}
                      className={`block w-full text-left text-xs px-2 py-1.5 rounded transition-colors ${
                        filterBrandType === opt.val ? "font-bold" : "text-muted-foreground hover:text-foreground"
                      }`}
                      style={filterBrandType === opt.val ? { color: config.accent } : {}}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ── GRID ─────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">{filteredResults.length}</strong> products
              </span>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden">
                  <button onClick={() => setGridView(true)} className={`p-1.5 ${gridView ? "bg-foreground/10" : ""}`}>
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button onClick={() => setGridView(false)} className={`p-1.5 ${!gridView ? "bg-foreground/10" : ""}`}>
                    <List className="w-4 h-4" />
                  </button>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border">
                    Sort <ChevronDown className="w-3 h-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel className="text-[10px]">Sort By</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {[
                      { val: "relevance", label: "Most Relevant" },
                      { val: "price-low", label: "Price: Low to High" },
                      { val: "price-high", label: "Price: High to Low" },
                      { val: "rating", label: "Highest Rated" },
                      { val: "reviews", label: "Most Reviews" },
                    ].map((o) => (
                      <DropdownMenuItem
                        key={o.val}
                        onClick={() => setSortBy(o.val)}
                        className={sortBy === o.val ? "font-bold" : ""}
                      >
                        {o.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {filteredResults.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground text-sm mb-2">No products match your search.</p>
                <p className="text-xs text-muted-foreground mb-4">Try a different term or browse our categories.</p>
                <Link
                  to={config.prefix}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: config.accent }}
                >
                  Browse All Categories
                </Link>
              </div>
            ) : (
              <div className={gridView
                ? "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4"
                : "flex flex-col gap-3"
              }>
                {filteredResults.map((result) => (
                  <ResultCard
                    key={result.product.id}
                    result={result}
                    gridView={gridView}
                    renderStars={renderStars}
                    accent={config.accent}
                    accentText={config.accentText}
                    schoolPrefix={config.prefix}
                    query={initialQuery}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────── */}
      <footer className="bg-gray-900 text-white/60 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-xs">
          <p className="mb-2">© {new Date().getFullYear()} FanPact — Shop everyday products. Support student-athletes.</p>
          <p>Not affiliated with or endorsed by {config.name === "Missouri" ? "the University of Missouri" : "Indiana University"}.</p>
        </div>
      </footer>
    </div>
  );
}

function ResultCard({
  result,
  gridView,
  renderStars,
  accent,
  accentText,
  schoolPrefix,
  query,
}: {
  result: SearchResult;
  gridView: boolean;
  renderStars: (r: number) => JSX.Element;
  accent: string;
  accentText: string;
  schoolPrefix: string;
  query: string;
}) {
  const product = result.product;
  const linkTo = `${schoolPrefix}/category/${result.categorySlug}/${product.subcategory}`;

  const HighlightedName = () => {
    const parts = highlightMatch(product.name, query);
    return (
      <>
        {parts.map((p, i) =>
          p.highlighted ? (
            <mark key={i} className="bg-yellow-200/60 text-inherit rounded-sm">{p.text}</mark>
          ) : (
            <span key={i}>{p.text}</span>
          )
        )}
      </>
    );
  };

  if (!gridView) {
    return (
      <Link to={linkTo} className="flex gap-4 p-3 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
        <div className="w-28 h-28 shrink-0 rounded-md overflow-hidden bg-secondary">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{product.brand}</p>
              <h3 className="text-sm font-semibold leading-tight line-clamp-2"><HighlightedName /></h3>
            </div>
            {product.isNameBrand && (
              <span className="shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: `${accent}20`, color: accent }}>
                Name Brand
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1">
            {renderStars(product.rating)}
            <span className="text-[10px] text-muted-foreground">({product.reviews.toLocaleString()})</span>
          </div>
          <div className="mt-2">
            <span className="text-base font-bold">${product.price.toFixed(2)}</span>
            <p className="text-[10px] font-semibold mt-0.5" style={{ color: accent }}>
              FanPact NIL Contribution: ${product.nilDonation.toFixed(2)}
            </p>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1">in {result.categoryName}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={linkTo} className="group rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.isNameBrand && (
          <span
            className="absolute top-2 left-2 text-[9px] font-bold px-1.5 py-0.5 rounded"
            style={{ backgroundColor: accent, color: accentText }}
          >
            Name Brand
          </span>
        )}
      </div>
      <div className="p-3">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{product.brand}</p>
        <h3 className="text-xs font-semibold leading-tight line-clamp-2 mt-0.5 mb-1.5"><HighlightedName /></h3>
        <div className="flex items-center gap-1.5 mb-2">
          {renderStars(product.rating)}
          <span className="text-[10px] text-muted-foreground">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-base font-bold">${product.price.toFixed(2)}</span>
          <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full" style={{ backgroundColor: `${accent}15`, color: accent }}>
            NIL: ${product.nilDonation.toFixed(2)}
          </span>
        </div>
        <p className="text-[9px] text-muted-foreground mb-2">in {result.categoryName}</p>
      </div>
    </Link>
  );
}
