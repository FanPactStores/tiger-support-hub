import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-stadium.jpg";
import { products, calculateDonation } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ShoppingBag, TrendingUp, BarChart3, ArrowRight, Star } from "lucide-react";

const conferences = [
  { name: "SEC", schools: 16, featured: true },
  { name: "Big Ten", schools: 18, featured: false },
  { name: "Big 12", schools: 16, featured: false },
  { name: "ACC", schools: 18, featured: false },
  { name: "Pac-12", schools: 8, featured: false },
  { name: "AAC", schools: 14, featured: false },
];

const HomePage = () => {
  const featuredProducts = products.slice(0, 8);
  const totalDonated = 127450;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Mizzou Tigers stadium packed with fans"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-secondary mb-4 leading-tight">
            Shop Everyday Goods,{" "}
            <span className="text-primary text-gold-glow">Empower Mizzou Athletics</span>
          </h1>
          <p className="text-lg sm:text-xl text-secondary/80 mb-8 font-body">
            80% of net operating earnings go directly back to student-athletes through NIL collectives.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 gold-glow-hover hover:bg-gold-dark"
          >
            Browse Mizzou Storefront
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-dark py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center text-secondary mb-12">
            How <span className="text-primary">FanPact</span> Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: ShoppingBag, step: "1", title: "Shop Goods", desc: "Browse everyday products from top brands — apparel, tech, gear, and more." },
              { icon: TrendingUp, step: "2", title: "80% Profits Shared", desc: "Most of every dollar earned goes directly to your school's NIL collective." },
              { icon: BarChart3, step: "3", title: "Track Your Impact", desc: "See exactly how your purchases support student-athletes via your dashboard." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {item.step}</span>
                <h3 className="font-display font-bold text-xl text-secondary mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Selector */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-3">
            Choose Your <span className="text-primary">School</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10">Select your conference to find your team's storefront.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {conferences.map((conf) => (
              <Link
                key={conf.name}
                to={conf.name === "SEC" ? "/schools" : "#"}
                className={`relative bg-card border rounded-lg p-6 text-center transition-all duration-200 hover:shadow-lg gold-glow-hover ${
                  conf.featured ? "border-primary ring-2 ring-primary/20" : "border-border"
                }`}
              >
                {conf.featured && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Featured
                  </span>
                )}
                <h3 className="font-display font-bold text-xl text-card-foreground">{conf.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{conf.schools} schools</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground">
              Latest <span className="text-primary">Arrivals</span>
            </h2>
            <Link to="/shop" className="text-sm font-semibold text-primary hover:text-gold-dark transition-colors flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Tracker */}
      <section className="bg-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-secondary mb-3">
            Fan <span className="text-primary">Impact</span> Tracker
          </h2>
          <p className="text-muted-foreground mb-8">See how fans like you are making a difference.</p>

          <div className="max-w-2xl mx-auto">
            <div className="text-5xl font-display font-black text-primary text-gold-glow mb-2 animate-count-up">
              ${totalDonated.toLocaleString()}
            </div>
            <p className="text-secondary text-sm mb-6">Donated to Mizzou NIL Collective</p>

            {/* Progress bar */}
            <div className="bg-dark-muted rounded-full h-4 overflow-hidden mb-8">
              <div
                className="h-full bg-gradient-to-r from-gold-dark to-primary rounded-full transition-all duration-1000"
                style={{ width: "64%" }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "2,340", label: "Active Fans" },
                { stat: "8,910", label: "Products Sold" },
                { stat: "42", label: "Athletes Supported" },
              ].map((item) => (
                <div key={item.label} className="bg-dark-surface rounded-lg p-5 border border-dark-muted">
                  <div className="text-2xl font-display font-bold text-primary">{item.stat}</div>
                  <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <blockquote className="mt-12 max-w-xl mx-auto">
            <p className="text-secondary italic text-lg leading-relaxed">
              "FanPact makes it easy for our fans to directly support our program. Every purchase counts."
            </p>
            <cite className="text-primary text-sm font-semibold mt-3 block not-italic">
              — Mizzou Student-Athlete
            </cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
