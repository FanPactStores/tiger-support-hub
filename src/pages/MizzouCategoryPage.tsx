import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getCategoryBySlug, allCategories } from "@/data/mizzouCategoryData";
import type { CategoryProduct } from "@/data/mizzouCategoryData";
import MizzouFooter from "@/components/mizzou/MizzouFooter";
import { MizzouDisclaimerBanner } from "@/components/mizzou/MizzouDisclaimerBanner";
import { useCart } from "@/contexts/CartContext";
import {
  Menu, X, ShoppingCart, ChevronDown, ChevronRight, Star, SlidersHorizontal,
  Search, ArrowLeft, Grid3X3, List,
} from "lucide-react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import fanpactPennantMark from "@/assets/fanpact-pennant-mark.png";

const MZ_GOLD = "#F1B82D";
const MZ_BLACK = "#000000";

const shopCategories = [
  { label: "Electronics", href: "/mizzou/category/electronics" },
  { label: "Fashion & Apparel", href: "/mizzou/category/fashion" },
  { label: "Home & Garden", href: "/mizzou/category/home" },
  { label: "Beauty & Personal Care", href: "/mizzou/category/beauty" },
  { label: "Sports & Outdoors", href: "/mizzou/category/sports" },
  { label: "Toys & Games", href: "/mizzou/category/toys" },
  { label: "Food & Grocery", href: "/mizzou/category/food" },
  { label: "Pet Supplies", href: "/mizzou/category/pets" },
  { label: "Automotive", href: "/mizzou/category/automotive" },
  { label: "Health & Wellness", href: "/mizzou/category/health" },
  { label: "Jewelry & Watches", href: "/mizzou/category/jewelry" },
  { label: "Merchandise", href: "/mizzou/category/merchandise" },
];

export default function MizzouCategoryPage() {
  const { slug, subcategory: subSlug } = useParams<{ slug: string; subcategory?: string }>();
  const category = getCategoryBySlug(slug || "");
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [gridView, setGridView] = useState(true);

  const activeSubcategory = subSlug || "all";

  const toggleFilter = (filterKey: string, option: string) => {
    setActiveFilters((prev) => {
      const current = prev[filterKey] || [];
      if (current.includes(option)) {
        return { ...prev, [filterKey]: current.filter((o) => o !== option) };
      }
      return { ...prev, [filterKey]: [...current, option] };
    });
  };

  const clearFilters = () => setActiveFilters({});

  const filteredProducts = useMemo(() => {
    if (!category) return [];
    let items = [...category.products];

    // Sort name-brands first always
    items.sort((a, b) => (b.isNameBrand ? 1 : 0) - (a.isNameBrand ? 1 : 0));

    // Subcategory filter
    if (activeSubcategory !== "all") {
      items = items.filter((p) => p.subcategory === activeSubcategory);
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      );
    }

    // Active filters
    for (const [key, values] of Object.entries(activeFilters)) {
      if (values.length === 0) continue;
      if (key === "brand") {
        items = items.filter((p) => values.includes(p.brand));
      }
      if (key === "rating") {
        const minStars = values.includes("4★ & Up") ? 4 : values.includes("3★ & Up") ? 3 : 0;
        if (minStars > 0) items = items.filter((p) => p.rating >= minStars);
      }
    }

    // Sort
    if (sortBy === "price-low") items.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") items.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") items.sort((a, b) => b.rating - a.rating);
    if (sortBy === "reviews") items.sort((a, b) => b.reviews - a.reviews);

    return items;
  }, [category, activeSubcategory, searchQuery, activeFilters, sortBy]);

  const totalActiveFilters = Object.values(activeFilters).reduce((s, a) => s + a.length, 0);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Category Not Found</h1>
          <Link to="/mizzou" className="underline" style={{ color: MZ_GOLD }}>Back to Store</Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          fill={i < Math.floor(rating) ? MZ_GOLD : "transparent"}
          stroke={i < Math.floor(rating) ? MZ_GOLD : "#9ca3af"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── TOP BAR ──────────────────────────────────── */}
      <header className="border-b border-border/30" style={{ backgroundColor: MZ_BLACK }}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/mizzou" className="flex items-center gap-2">
              <img src={fanpactPennantMark} alt="FanPact" className="h-8 w-auto" />
              <div>
                <span className="font-bold text-lg text-white tracking-tight">FanPact</span>
                <span className="text-xs ml-1.5 font-medium px-1.5 py-0.5 rounded" style={{ backgroundColor: MZ_GOLD, color: MZ_BLACK }}>Missouri</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={`Search ${category.name}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2"
                style={{ ["--tw-ring-color" as string]: `${MZ_GOLD}80` }}
              />
            </div>
          </div>

          <Link to="/mizzou/cart" className="relative text-white hover:opacity-80 transition-opacity">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center" style={{ backgroundColor: MZ_GOLD, color: MZ_BLACK }}>
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* ── CATEGORY NAV BAR ─────────────────────────── */}
      <div className="hidden md:block border-b border-border/50" style={{ backgroundColor: `${MZ_BLACK}f2` }}>
        <div className="container mx-auto px-4 py-1.5">
          <div className="flex items-center justify-center gap-1 flex-wrap">
            {shopCategories.map((cat) => (
              <Link
                key={cat.label}
                to={cat.href}
                className={`text-[11px] font-medium px-2.5 py-1 rounded transition-colors ${
                  cat.href.endsWith(slug || "")
                    ? "text-black font-bold"
                    : "text-white/70 hover:text-white"
                }`}
                style={cat.href.endsWith(slug || "") ? { backgroundColor: MZ_GOLD, color: MZ_BLACK } : {}}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── BREADCRUMB ───────────────────────────────── */}
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/mizzou" className="hover:underline">Store</Link>
          <ChevronRight className="w-3 h-3" />
          {activeSubcategory !== "all" ? (
            <>
              <Link to={`/mizzou/category/${slug}`} className="hover:underline">{category.name}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="font-medium text-foreground">
                {category.subcategories.find((s) => s.slug === activeSubcategory)?.label}
              </span>
            </>
          ) : (
            <span className="font-medium text-foreground">{category.name}</span>
          )}
        </nav>
      </div>

      {/* ── HEADER ───────────────────────────────────── */}
      <div className="container mx-auto px-4 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{category.name}</h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-xl">{category.description}</p>
          </div>
          <Link
            to="/mizzou"
            className="hidden md:flex items-center gap-1.5 text-sm font-medium hover:underline"
            style={{ color: MZ_GOLD }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Store
          </Link>
        </div>
      </div>

      {/* ── SUBCATEGORY PILLS ────────────────────────── */}
      <div className="container mx-auto px-4 pb-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Link
            to={`/mizzou/category/${slug}`}
            className={`shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${
              activeSubcategory === "all"
                ? "text-black border-transparent"
                : "text-foreground border-border hover:border-foreground/40"
            }`}
            style={activeSubcategory === "all" ? { backgroundColor: MZ_GOLD, color: MZ_BLACK } : {}}
          >
            All {category.name}
          </Link>
          {category.subcategories.map((sub) => (
            <Link
              key={sub.slug}
              to={`/mizzou/category/${slug}/${sub.slug}`}
              className={`shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${
                activeSubcategory === sub.slug
                  ? "text-black border-transparent"
                  : "text-foreground border-border hover:border-foreground/40"
              }`}
              style={activeSubcategory === sub.slug ? { backgroundColor: MZ_GOLD, color: MZ_BLACK } : {}}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT AREA ────────────────────────── */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex gap-6">
          {/* ── SIDEBAR FILTERS (desktop) ────────────── */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-4 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </h3>
                {totalActiveFilters > 0 && (
                  <button onClick={clearFilters} className="text-[11px] font-medium hover:underline" style={{ color: MZ_GOLD }}>
                    Clear all
                  </button>
                )}
              </div>

              {category.filters.map((filter) => (
                <div key={filter.key}>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">{filter.label}</h4>
                  <div className="space-y-1.5">
                    {filter.options.map((opt) => {
                      const active = (activeFilters[filter.key] || []).includes(opt);
                      return (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={active}
                            onChange={() => toggleFilter(filter.key, opt)}
                            className="w-3.5 h-3.5 rounded border-border accent-current"
                            style={{ accentColor: MZ_GOLD }}
                          />
                          <span className={`text-xs ${active ? "font-semibold text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                            {opt}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* ── PRODUCT GRID ─────────────────────────── */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">{filteredProducts.length}</strong> products
              </span>
              <div className="flex items-center gap-2">
                {/* Mobile filter toggle */}
                <button
                  className="lg:hidden flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border"
                  onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" /> Filters
                  {totalActiveFilters > 0 && (
                    <span className="w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center" style={{ backgroundColor: MZ_GOLD, color: MZ_BLACK }}>
                      {totalActiveFilters}
                    </span>
                  )}
                </button>

                {/* Grid / List view */}
                <div className="hidden sm:flex items-center border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setGridView(true)}
                    className={`p-1.5 ${gridView ? "bg-foreground/10" : ""}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setGridView(false)}
                    className={`p-1.5 ${!gridView ? "bg-foreground/10" : ""}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border">
                    Sort <ChevronDown className="w-3 h-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel className="text-[10px]">Sort By</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {[
                      { val: "featured", label: "Featured" },
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

            {/* Mobile filter panel */}
            {mobileSidebarOpen && (
              <div className="lg:hidden mb-4 p-4 border border-border rounded-lg bg-card space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold">Filters</h3>
                  <div className="flex items-center gap-3">
                    {totalActiveFilters > 0 && (
                      <button onClick={clearFilters} className="text-[11px] font-medium" style={{ color: MZ_GOLD }}>
                        Clear all
                      </button>
                    )}
                    <button onClick={() => setMobileSidebarOpen(false)}>
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {category.filters.map((filter) => (
                  <div key={filter.key}>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-2">{filter.label}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {filter.options.map((opt) => {
                        const active = (activeFilters[filter.key] || []).includes(opt);
                        return (
                          <button
                            key={opt}
                            onClick={() => toggleFilter(filter.key, opt)}
                            className={`text-[11px] font-medium px-2.5 py-1 rounded-full border transition-colors ${
                              active ? "border-transparent" : "border-border"
                            }`}
                            style={active ? { backgroundColor: MZ_GOLD, color: MZ_BLACK } : {}}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-sm">No products match your current filters.</p>
                <button onClick={clearFilters} className="text-sm font-medium mt-2 hover:underline" style={{ color: MZ_GOLD }}>
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className={gridView
                ? "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4"
                : "flex flex-col gap-3"
              }>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    gridView={gridView}
                    renderStars={renderStars}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── NIL BANNER ───────────────────────────────── */}
      <div className="border-t border-border" style={{ backgroundColor: MZ_BLACK }}>
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-white/60 text-xs mb-1">Every purchase supports</p>
          <p className="text-lg font-bold text-white">
            600+ Missouri Athletes across 20 Sports
          </p>
          <p className="text-xs mt-1" style={{ color: MZ_GOLD }}>~3.5% of every order goes directly to Mizzou NIL</p>
        </div>
      </div>

      <MizzouFooter />
    </div>
  );
}

/* ── PRODUCT CARD ──────────────────────────────────────── */
function ProductCard({
  product,
  gridView,
  renderStars,
}: {
  product: CategoryProduct;
  gridView: boolean;
  renderStars: (r: number) => JSX.Element;
}) {
  if (!gridView) {
    // List view
    return (
      <div className="flex gap-4 p-3 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
        <div className="w-28 h-28 shrink-0 rounded-md overflow-hidden bg-secondary">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{product.brand}</p>
              <h3 className="text-sm font-semibold leading-tight line-clamp-2">{product.name}</h3>
            </div>
            {product.isNameBrand && (
              <span className="shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: `${MZ_GOLD}20`, color: MZ_GOLD }}>
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
            <p className="text-[10px] font-semibold mt-0.5" style={{ color: MZ_GOLD }}>
              FanPact NIL Contribution: ${product.nilDonation.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div className="group rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300">
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
            style={{ backgroundColor: MZ_GOLD, color: MZ_BLACK }}
          >
            Name Brand
          </span>
        )}
      </div>
      <div className="p-3">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{product.brand}</p>
        <h3 className="text-xs font-semibold leading-tight line-clamp-2 mt-0.5 mb-1.5">{product.name}</h3>
        <div className="flex items-center gap-1.5 mb-2">
          {renderStars(product.rating)}
          <span className="text-[10px] text-muted-foreground">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="mb-2.5">
          <span className="text-base font-bold">${product.price.toFixed(2)}</span>
          <p className="text-[9px] font-semibold mt-0.5" style={{ color: MZ_GOLD }}>
            FanPact NIL Contribution: ${product.nilDonation.toFixed(2)}
          </p>
        </div>
        <button
          className="w-full text-xs font-semibold py-2 rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
          style={{ backgroundColor: MZ_GOLD, color: MZ_BLACK }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
