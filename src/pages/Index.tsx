import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fanpact.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import {
  ShoppingBag,
  TrendingUp,
  BarChart3,
  ArrowRight,
  Star,
  Laptop,
  Home,
  UtensilsCrossed,
  Dog,
  Dumbbell,
  ChevronDown,
  ChevronUp,
  Newspaper,
} from "lucide-react";

const conferences = [
  {
    name: "SEC",
    featured: true,
    schools: [
      { name: "Mizzou Tigers", slug: "mizzou", featured: true },
      { name: "Alabama Crimson Tide", slug: "alabama", featured: false },
      { name: "Georgia Bulldogs", slug: "georgia", featured: false },
      { name: "Texas Longhorns", slug: "texas", featured: false },
      { name: "Florida Gators", slug: "florida", featured: false },
    ],
  },
  {
    name: "Big Ten",
    featured: false,
    schools: [
      { name: "Ohio State Buckeyes", slug: "osu", featured: false },
      { name: "Michigan Wolverines", slug: "michigan", featured: false },
    ],
  },
  {
    name: "Big 12",
    featured: false,
    schools: [
      { name: "Kansas Jayhawks", slug: "kansas", featured: false },
    ],
  },
  {
    name: "ACC",
    featured: false,
    schools: [
      { name: "Clemson Tigers", slug: "clemson", featured: false },
    ],
  },
  {
    name: "Group of Five",
    featured: false,
    schools: [],
  },
];

const productCategories = [
  { name: "Electronics", icon: Laptop },
  { name: "Home & Living", icon: Home },
  { name: "Kitchen & Dining", icon: UtensilsCrossed },
  { name: "Pet Supplies", icon: Dog },
  { name: "Fitness & Outdoor", icon: Dumbbell },
];

const headlines = [
  {
    title: "Big Ten Football Playoff Picture",
    source: "ESPN",
    time: "1 hour ago",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300&h=200&fit=crop",
  },
  {
    title: "SEC Basketball Power Rankings",
    source: "Yahoo Sports",
    time: "1 hour ago",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=200&fit=crop",
  },
  {
    title: "Top NIL Boosters for 2026",
    source: "CBS Sports",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1461896836934-bd45ba8c0e78?w=300&h=200&fit=crop",
  },
  {
    title: "Transfer Portal Updates",
    source: "Bleacher Report",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=300&h=200&fit=crop",
  },
];

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);
  const totalGenerated = 18450;
  const [expandedConf, setExpandedConf] = useState<string | null>("SEC");

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="College sports stadium packed with fans"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/50 to-dark/30" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          {/* NCAA Badge */}
          <div className="inline-flex items-center gap-2 bg-dark/60 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2 mb-6">
            <span className="text-primary text-sm">⚡</span>
            <span className="text-sm font-semibold text-secondary tracking-wide">NCAA • NIL Commerce Platform</span>
            <span className="text-primary text-sm">⚡</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-secondary mb-5 leading-tight uppercase tracking-tight">
            Where Every Purchase Powers{" "}
            <span className="text-primary text-gold-glow">Your College Sports Teams & NIL</span>
          </h1>
          <p className="text-base sm:text-lg text-secondary/80 mb-8 font-body max-w-2xl mx-auto">
            Choose Your School and Start Supporting Athletes Through Everyday Shopping. Every Purchase Contributes to NIL Opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#conferences"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground font-display font-bold text-base px-8 py-4 rounded-lg transition-all duration-300 hover:bg-secondary/90 shadow-lg"
            >
              <span className="text-primary">🎓</span>
              Select Your School
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-secondary text-secondary font-display font-bold text-base px-8 py-4 rounded-lg transition-all duration-300 hover:bg-secondary/10"
            >
              How FanPact Works
            </a>
          </div>
        </div>
      </section>

      {/* Select Your School By Conference */}
      <section id="conferences" className="py-14 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center text-foreground mb-10">
            Select Your School <span className="text-primary">By Conference</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {conferences.map((conf) => (
              <div key={conf.name} className="flex flex-col">
                <button
                  onClick={() =>
                    setExpandedConf(expandedConf === conf.name ? null : conf.name)
                  }
                  className={`relative bg-card border rounded-lg p-5 text-center transition-all duration-200 hover:shadow-lg gold-glow-hover ${
                    conf.featured
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border"
                  } ${expandedConf === conf.name ? "ring-2 ring-primary/30" : ""}`}
                >
                  {conf.featured && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap">
                      <Star className="w-3 h-3" /> Featured
                    </span>
                  )}
                  <h3 className="font-display font-bold text-xl text-card-foreground">
                    {conf.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {conf.schools.length} school{conf.schools.length !== 1 ? "s" : ""}
                  </p>
                  <span className="mt-2 inline-block text-primary">
                    {expandedConf === conf.name ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Expanded school list */}
          {expandedConf && (
            <div className="mt-6 max-w-4xl mx-auto bg-card border border-border rounded-lg p-6 animate-fade-in-up">
              <h3 className="font-display font-bold text-lg text-card-foreground mb-4">
                {expandedConf} Schools
              </h3>
              {conferences.find((c) => c.name === expandedConf)?.schools.length === 0 ? (
                <p className="text-sm text-muted-foreground">Coming soon — more schools launching shortly.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {conferences
                    .find((c) => c.name === expandedConf)
                    ?.schools.map((school) => (
                      <Link
                        key={school.slug}
                        to={school.featured ? "/shop" : "#"}
                        className={`flex items-center justify-between gap-3 rounded-lg border p-4 transition-all duration-200 ${
                          school.featured
                            ? "border-primary bg-primary/5 hover:bg-primary/10 hover:shadow-md"
                            : "border-border opacity-60"
                        }`}
                      >
                        <div>
                          <span className="font-display font-bold text-sm text-card-foreground">
                            {school.name}
                          </span>
                          {school.featured && (
                            <span className="ml-2 text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-bold">
                              Beta Partner
                            </span>
                          )}
                          {!school.featured && (
                            <span className="ml-2 text-[10px] text-muted-foreground">Coming Soon</span>
                          )}
                        </div>
                        {school.featured && (
                          <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                        )}
                      </Link>
                    ))}
                </div>
              )}
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground mt-6">
            More schools launching soon <ArrowRight className="w-3 h-3 inline" />
          </p>
        </div>
      </section>

      {/* Shop the Products You Already Buy */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center text-foreground mb-10">
            Shop the Products <span className="text-primary">You Already Buy</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {productCategories.map((cat) => (
              <Link
                key={cat.name}
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                className="bg-card border border-border rounded-lg p-5 text-center transition-all duration-200 hover:shadow-lg hover:border-primary gold-glow-hover group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-display font-bold text-sm text-card-foreground">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            FanPact carries thousands of everyday consumer products available through your school's storefront.
          </p>
        </div>
      </section>

      {/* How FanPact Works */}
      <section id="how-it-works" className="bg-dark py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-secondary mb-8">
            How <span className="text-primary">FanPact</span> Works
          </h2>

          <div className="inline-block bg-dark-surface border-2 border-primary rounded-xl px-10 py-6 mb-10">
            <div className="text-4xl sm:text-5xl font-display font-black text-primary text-gold-glow animate-count-up">
              ${totalGenerated.toLocaleString()}
            </div>
            <p className="text-secondary text-sm mt-1">FanPact Fans Have Generated</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: ShoppingBag, step: "1", title: "Shop Goods", desc: "Browse everyday products from top brands — apparel, tech, gear, and more." },
              { icon: TrendingUp, step: "2", title: "80% Profits Shared", desc: "Most of every dollar earned goes directly to your school's NIL collective." },
              { icon: BarChart3, step: "3", title: "Track Your Impact", desc: "See exactly how your purchases support student-athletes via your dashboard." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {item.step}</span>
                <h3 className="font-display font-bold text-lg text-secondary mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest College Sports Headlines */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center text-foreground mb-10">
            Latest College <span className="text-primary">Sports Headlines</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {headlines.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-display font-bold text-sm text-card-foreground leading-snug mb-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Newspaper className="w-3 h-3" />
                    <span className="font-semibold">{item.source}</span>
                    <span>·</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
              Featured <span className="text-primary">Products</span>
            </h2>
            <Link
              to="/shop"
              className="text-sm font-semibold text-primary hover:text-gold-dark transition-colors flex items-center gap-1"
            >
              See More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <a
            href="#conferences"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 gold-glow-hover hover:bg-gold-dark"
          >
            Select Your School
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
