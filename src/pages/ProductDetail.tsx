import { useParams, Link, useNavigate } from "react-router-dom";
import { getCategoryBySlug as getMizzouCategory, allCategories as mizzouCategories } from "@/data/mizzouCategoryData";
import { getCategoryBySlug as getIndianaCategory, allCategories as indianaCategories } from "@/data/indianaCategoryData";
import { getProductSpecifications } from "@/data/productSpecifications";
import { useCart } from "@/contexts/CartContext";
import {
  ChevronRight, Star, ShoppingCart, ArrowLeft, Truck, ShieldCheck, RotateCcw, Package,
} from "lucide-react";
import fanpactPennantMark from "@/assets/fanpact-pennant-mark.png";
import { useState } from "react";

interface ProductDetailProps {
  school: "mizzou" | "indiana";
}

const SCHOOL_CONFIG = {
  mizzou: {
    accent: "#F1B82D",
    accentFg: "#000000",
    headerBg: "#000000",
    label: "Missouri",
    homePath: "/mizzou",
    cartPath: "/mizzou/cart",
    categoryBase: "/mizzou/category",
    getCategory: getMizzouCategory,
    allCategories: mizzouCategories,
  },
  indiana: {
    accent: "#990000",
    accentFg: "#FFFFFF",
    headerBg: "#990000",
    label: "Indiana",
    homePath: "/indiana",
    cartPath: "/indiana/cart",
    categoryBase: "/indiana/category",
    getCategory: getIndianaCategory,
    allCategories: indianaCategories,
  },
};

export default function ProductDetail({ school }: ProductDetailProps) {
  const { slug, productId } = useParams<{ slug: string; productId: string }>();
  const navigate = useNavigate();
  const { totalItems, addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"specs" | "description" | "shipping">("description");

  const config = SCHOOL_CONFIG[school];
  const category = config.getCategory(slug || "");
  const product = category?.products.find((p) => p.id === productId);

  if (!category || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
          <Link to={config.homePath} className="underline" style={{ color: config.accent }}>
            Back to Store
          </Link>
        </div>
      </div>
    );
  }

  const specs = getProductSpecifications(product.name, product.brand, product.price, product.subcategory, category.slug);
  const nilDonation = Math.round(0.5 * (product.price * 0.25) * 100) / 100;

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          fill={i < Math.floor(rating) ? config.accent : "transparent"}
          stroke={i < Math.floor(rating) ? config.accent : "#9ca3af"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );

  // Find related products (same subcategory, different id)
  const relatedProducts = category.products
    .filter((p) => p.subcategory === product.subcategory && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/30" style={{ backgroundColor: config.headerBg }}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to={config.homePath} className="flex items-center gap-2">
            <img src={fanpactPennantMark} alt="FanPact" className="h-8 w-auto" />
            <div>
              <span className="font-bold text-lg text-white tracking-tight">FanPact</span>
              <span
                className="text-xs ml-1.5 font-medium px-1.5 py-0.5 rounded"
                style={
                  school === "mizzou"
                    ? { backgroundColor: config.accent, color: config.accentFg }
                    : { backgroundColor: "white", color: config.accent }
                }
              >
                {config.label}
              </span>
            </div>
          </Link>
          <Link to={config.cartPath} className="relative text-white hover:opacity-80 transition-opacity">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center"
                style={
                  school === "mizzou"
                    ? { backgroundColor: config.accent, color: config.accentFg }
                    : { backgroundColor: "#fde047", color: config.accent }
                }
              >
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
          <Link to={config.homePath} className="hover:underline">Store</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`${config.categoryBase}/${slug}`} className="hover:underline">{category.name}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-medium text-foreground line-clamp-1">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden bg-secondary border border-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.isNameBrand && (
              <span
                className="absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-lg"
                style={{ backgroundColor: config.accent, color: config.accentFg }}
              >
                Name Brand
              </span>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</p>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3">{product.name}</h1>

            <div className="flex items-center gap-3 mb-4">
              {renderStars(product.rating)}
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            <div className="mb-4">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              <p className="text-sm font-semibold mt-1" style={{ color: config.accent }}>
                FanPact NIL Contribution: ${nilDonation.toFixed(2)}
              </p>
            </div>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{specs.description}</p>

            {/* Highlights */}
            <div className="mb-6">
              <h3 className="text-sm font-bold mb-2">Highlights</h3>
              <ul className="space-y-1.5">
                {specs.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: config.accent }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-sm font-bold hover:bg-secondary transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-2 text-sm font-semibold border-x border-border">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-sm font-bold hover:bg-secondary transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, category: slug || "" });
                  }
                }}
                className="flex-1 text-sm font-bold py-3 rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{ backgroundColor: config.accent, color: config.accentFg }}
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 border-t border-border pt-4">
              {[
                { icon: Truck, label: "Free Shipping", sub: "Orders $35+" },
                { icon: ShieldCheck, label: "Secure Payment", sub: "SSL encrypted" },
                { icon: RotateCcw, label: "Easy Returns", sub: "30-day policy" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="text-center">
                  <Icon className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                  <p className="text-[10px] font-bold">{label}</p>
                  <p className="text-[9px] text-muted-foreground">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs: Description / Specs / Shipping */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex gap-6 border-b border-border mb-6">
            {(["description", "specs", "shipping"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-semibold capitalize transition-colors border-b-2 -mb-px ${
                  activeTab === tab
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                }`}
                style={activeTab === tab ? { borderBottomColor: config.accent } : {}}
              >
                {tab === "specs" ? "Specifications" : tab}
              </button>
            ))}
          </div>

          {activeTab === "description" && (
            <div className="max-w-3xl">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{specs.description}</p>
              <h3 className="text-sm font-bold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {specs.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Package className="w-4 h-4 shrink-0 mt-0.5" style={{ color: config.accent }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="max-w-2xl">
              <div className="rounded-lg border border-border overflow-hidden">
                {specs.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center text-sm ${i % 2 === 0 ? "bg-secondary/50" : "bg-background"}`}
                  >
                    <span className="w-40 shrink-0 font-semibold px-4 py-3 text-foreground">{spec.label}</span>
                    <span className="px-4 py-3 text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="max-w-2xl space-y-4">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 shrink-0 mt-0.5" style={{ color: config.accent }} />
                <div>
                  <p className="text-sm font-semibold">Free Standard Shipping</p>
                  <p className="text-xs text-muted-foreground">On orders over $35. Delivered in 5–7 business days.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 shrink-0 mt-0.5" style={{ color: config.accent }} />
                <div>
                  <p className="text-sm font-semibold">Express Shipping Available</p>
                  <p className="text-xs text-muted-foreground">2–3 business days for $9.99.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="w-5 h-5 shrink-0 mt-0.5" style={{ color: config.accent }} />
                <div>
                  <p className="text-sm font-semibold">30-Day Returns</p>
                  <p className="text-xs text-muted-foreground">Not satisfied? Return within 30 days for a full refund.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 border-t border-border pt-8">
            <h2 className="text-lg font-bold mb-4">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`${config.categoryBase}/${slug}/product/${rp.id}`}
                  className="group rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img src={rp.image} alt={rp.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase">{rp.brand}</p>
                    <h3 className="text-xs font-semibold leading-tight line-clamp-2 mt-0.5 mb-1">{rp.name}</h3>
                    <span className="text-sm font-bold">${rp.price.toFixed(2)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white/60 py-8">
        <div className="container mx-auto px-4 text-center text-xs">
          <p className="mb-2">© {new Date().getFullYear()} FanPact — Shop everyday products. Support student-athletes.</p>
          <p>Not affiliated with or endorsed by {config.label === "Missouri" ? "the University of Missouri" : "Indiana University"}.</p>
        </div>
      </footer>
    </div>
  );
}
