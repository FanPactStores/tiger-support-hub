import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fanpact.jpg";
import logoSec from "@/assets/logo-sec.png";
import logoBigten from "@/assets/logo-bigten.png";
import logoBig12 from "@/assets/logo-big12.png";
import logoAcc from "@/assets/logo-acc.png";
import logoBigeast from "@/assets/logo-bigeast.png";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { schools, getSchoolsByConference, getShortName, conferenceOrder } from "@/data/schools";
import {
  ShoppingBag,
  TrendingUp,
  BarChart3,
  ArrowRight,
  Laptop,
  Home,
  UtensilsCrossed,
  Dog,
  Dumbbell,
  Newspaper,
  Trophy,
  ChevronDown,
} from "lucide-react";

const conferences = [
  { name: "SEC", logo: logoSec, key: "SEC" },
  { name: "Big Ten", logo: logoBigten, key: "Big Ten" },
  { name: "Big 12", logo: logoBig12, key: "Big 12" },
  { name: "ACC", logo: logoAcc, key: "ACC" },
  { name: "Group of Five", logo: logoG5, key: "Big East" },
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
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=300&h=200&fit=crop",
  },
  {
    title: "Transfer Portal Updates",
    source: "Bleacher Report",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=200&fit=crop",
  },
];

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);
  const totalGenerated = 18450;
  const schoolsByConference = getSchoolsByConference();

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
              <Trophy className="w-5 h-5 text-primary" />
              Select Your School
              <ChevronDown className="w-4 h-4" />
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

      {/* Disclaimer Banner */}
      <div className="bg-dark py-2 px-4 text-center">
        <p className="text-xs text-secondary/70 font-body">
          We donate 50% of net earnings from qualifying purchases to support student-athletes at participating universities. Thank you for shopping with purpose!{" "}
          <Link to="/disclaimer" className="text-primary hover:text-gold-dark font-semibold underline underline-offset-2">
            [Full Disclaimer ↓]
          </Link>
        </p>
      </div>

      {/* Select Your School By Conference — with actual schools listed */}
      <section id="conferences" className="py-14 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center text-foreground mb-10">
            Select Your School <span className="text-primary">By Conference</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {conferences.map((conf) => {
              const confSchools = schoolsByConference[conf.key] || [];
              return (
                <div
                  key={conf.name}
                  className="bg-card border border-border rounded-lg p-5 transition-all duration-200 hover:shadow-lg hover:border-primary gold-glow-hover"
                >
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <img
                      src={conf.logo}
                      alt={`${conf.name} conference logo`}
                      className="w-16 h-16 object-contain"
                    />
                    <h3 className="font-display font-bold text-lg text-card-foreground">
                      {conf.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {confSchools.length} school{confSchools.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="border-t border-border pt-3 space-y-1 max-h-48 overflow-y-auto">
                    {confSchools.map((school) => (
                      <Link
                        key={school.id}
                        to={school.id === "missouri" ? "/mizzou" : school.id === "indiana" ? "/indiana" : "#"}
                        className="flex items-center gap-2 px-2 py-1 text-xs text-foreground/70 hover:text-primary hover:bg-primary/5 rounded transition-colors"
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: school.primaryColor }}
                        />
                        <span className="truncate">{getShortName(school.name)}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            More schools launching soon <ArrowRight className="w-3 h-3 inline" />
          </p>
          <p className="text-center text-xs text-muted-foreground/70 mt-3 max-w-2xl mx-auto italic">
            Unofficial Fan Support Site — Not affiliated with, endorsed by, or officially operated by any university, athletic department, NIL collective, conference, or the NCAA.{" "}
            <Link to="/disclaimer" className="text-primary hover:text-gold-dark font-semibold not-italic underline underline-offset-2">
              Full Disclaimer
            </Link>
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

      {/* How FanPact Works */}
      <section id="how-it-works" className="relative py-14 overflow-hidden bg-gradient-to-br from-rose-500 via-fuchsia-500 via-violet-500 to-sky-500">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8">
            How <span className="text-yellow-100">FanPact</span> Works
          </h2>

          <div className="inline-block bg-white/15 backdrop-blur-sm border-2 border-white/30 rounded-xl px-10 py-6 mb-10">
            <div className="text-4xl sm:text-5xl font-display font-black text-white animate-count-up">
              ${totalGenerated.toLocaleString()}
            </div>
            <p className="text-white/80 text-sm mt-1">FanPact Fans Have Generated</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: ShoppingBag, step: "1", title: "Shop Goods", desc: "Browse everyday products from top brands — apparel, tech, gear, and more." },
              { icon: TrendingUp, step: "2", title: "80% Profits Shared", desc: "Most of every dollar earned goes directly to your school's NIL collective." },
              { icon: BarChart3, step: "3", title: "Track Your Impact", desc: "See exactly how your purchases support student-athletes via your dashboard." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold text-yellow-100 uppercase tracking-wider">Step {item.step}</span>
                <h3 className="font-display font-bold text-lg text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
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
