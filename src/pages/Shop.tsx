import { useState, useMemo } from "react";
import { products, categories, brands, calculateDonation } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { SlidersHorizontal, X } from "lucide-react";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [mizzouOnly, setMizzouOnly] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== "All") result = result.filter((p) => p.category === selectedCategory);
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (selectedBrands.length) result = result.filter((p) => selectedBrands.includes(p.brand));
    if (mizzouOnly) result = result.filter((p) => p.isMizzouBranded);

    // Sponsored items first
    result.sort((a, b) => (b.isSponsored ? 1 : 0) - (a.isSponsored ? 1 : 0));

    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategory, priceRange, selectedBrands, mizzouOnly, sortBy]);

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-3">Category</h3>
        <div className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-3">Price Range</h3>
        <Slider
          min={0}
          max={300}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-2"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-3">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <Checkbox
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <span className="text-sm text-foreground">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Mizzou Only */}
      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            checked={mizzouOnly}
            onCheckedChange={(checked) => setMizzouOnly(checked === true)}
          />
          <span className="text-sm font-semibold text-foreground">Mizzou-Branded Only</span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Page header */}
      <div className="bg-dark py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-display font-bold text-secondary">
            Shop <span className="text-primary">Mizzou</span> Storefront
          </h1>
          <p className="text-muted-foreground text-sm mt-2">Every purchase supports Mizzou student-athletes.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                {filtered.length} product{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="flex items-center gap-3">
                <button
                  className="lg:hidden flex items-center gap-1 text-sm text-foreground border border-border rounded-lg px-3 py-2"
                  onClick={() => setFiltersOpen(true)}
                >
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-border rounded-lg px-3 py-2 bg-background text-foreground"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Sponsored banner */}
            {filtered.some((p) => p.isSponsored) && (
              <div className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-3 mb-6">
                <p className="text-xs font-semibold text-primary">✦ Featured by Learfield Partner — Top selections curated for Mizzou fans</p>
              </div>
            )}

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setPriceRange([0, 300]);
                    setSelectedBrands([]);
                    setMizzouOnly(false);
                  }}
                  className="mt-4 text-primary font-semibold text-sm hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-dark/60" onClick={() => setFiltersOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-background p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-bold text-lg">Filters</h2>
              <button onClick={() => setFiltersOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
