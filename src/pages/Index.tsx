import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fanpact.jpg";
import logoSec from "@/assets/logo-sec.png";
import logoBigten from "@/assets/logo-bigten.png";
import logoBig12 from "@/assets/logo-big12.png";
import logoAcc from "@/assets/logo-acc.png";
import logoBigeast from "@/assets/logo-bigeast.png";
import { getSchoolsByConference, getShortName } from "@/data/schools";
import {
  ShoppingBag,
  Heart,
  BarChart3,
  Trophy,
  ChevronDown,
  Package,
  Users,
  TrendingUp,
  Search,
  Smartphone,
  Home,
  UtensilsCrossed,
  Sparkles,
  Dog,
  Dumbbell,
  Car,
  Wrench,
  Briefcase,
  Baby,
  Shirt,
  Gamepad2,
  DollarSign,
} from "lucide-react";

import catElectronics from "@/assets/cat-electronics.jpg";
import catHomeLiving from "@/assets/cat-home-living.jpg";
import catKitchenDining from "@/assets/cat-kitchen-dining.jpg";
import catBeautyCare from "@/assets/cat-beauty-care.jpg";
import catPetSupplies from "@/assets/cat-pet-supplies.jpg";
import catFitnessOutdoor from "@/assets/cat-fitness-outdoor.jpg";
import catAutoAccessories from "@/assets/cat-auto-accessories.jpg";
import catToolsImprovement from "@/assets/cat-tools-improvement.jpg";
import catOfficeSchool from "@/assets/cat-office-school.jpg";
import catBabyKids from "@/assets/cat-baby-kids.jpg";
import catApparel from "@/assets/cat-apparel.jpg";
import catToysHobby from "@/assets/cat-toys-hobby.jpg";

import productEarbuds from "@/assets/product-earbuds.jpg";
import productMonitor from "@/assets/product-monitor.jpg";
import productSunglasses from "@/assets/product-sunglasses.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";

const conferences = [
  { name: "SEC", logo: logoSec, key: "SEC" },
  { name: "Big Ten", logo: logoBigten, key: "Big Ten" },
  { name: "Big 12", logo: logoBig12, key: "Big 12" },
  { name: "ACC", logo: logoAcc, key: "ACC" },
  { name: "Big East", logo: logoBigeast, key: "Big East" },
];

const categoryGrid = [
  { name: "Electronics", icon: Smartphone, image: catElectronics },
  { name: "Home & Living", icon: Home, image: catHomeLiving },
  { name: "Kitchen & Dining", icon: UtensilsCrossed, image: catKitchenDining },
  { name: "Beauty & Personal Care", icon: Sparkles, image: catBeautyCare },
  { name: "Pet Supplies", icon: Dog, image: catPetSupplies },
  { name: "Fitness & Outdoor", icon: Dumbbell, image: catFitnessOutdoor },
  { name: "Auto Accessories", icon: Car, image: catAutoAccessories },
  { name: "Office & School", icon: Briefcase, image: catOfficeSchool },
  { name: "Baby & Kids", icon: Baby, image: catBabyKids },
  { name: "Apparel", icon: Shirt, image: catApparel },
  { name: "Toys & Hobby", icon: Gamepad2, image: catToysHobby },
];

const featuredProducts = [
  { name: "Wireless Earbuds", brand: "Top Rated", price: "$29.99", nilContribution: "$1.50", image: productEarbuds },
  { name: "Air Fryer", brand: "Kitchen Essential", price: "$89.99", nilContribution: "$4.50", image: productMonitor },
  { name: "Pet Bed", brand: "Cozy Living", price: "$34.99", nilContribution: "$1.75", image: productSunglasses },
  { name: "Bluetooth Speaker", brand: "Top Rated", price: "$49.99", nilContribution: "$2.50", image: productHeadphones },
  { name: "Phone Mount", brand: "Auto Essentials", price: "$15.99", nilContribution: "$0.80", image: productEarbuds },
  { name: "Storage Organizer", brand: "Home Solutions", price: "$39.99", nilContribution: "$2.00", image: productMonitor },
  { name: "Resistance Bands", brand: "Fitness Gear", price: "$19.99", nilContribution: "$1.00", image: productSunglasses },
  { name: "Kitchen Storage Set", brand: "Organization", price: "$24.99", nilContribution: "$1.25", image: productHeadphones },
];

const HomePage = () => {
  const schoolsByConference = getSchoolsByConference();
  const [nilCounter, setNilCounter] = useState(312750);

  useEffect(() => {
    const interval = setInterval(() => {
      setNilCounter(prev => prev + Math.floor(Math.random() * 20) + 8);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="College sports stadium packed with fans"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/60 to-dark/35" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-secondary mb-5 leading-tight uppercase tracking-tight">
            Where Every Purchase Powers{" "}
            <span className="text-primary text-gold-glow">Your College Sports Teams & NIL</span>
          </h1>
          <p className="text-base sm:text-lg text-secondary/80 mb-3 font-body max-w-2xl mx-auto">
            Choose your school and shop everyday products that support student-athletes.
          </p>
          <p className="text-sm sm:text-base text-secondary/60 mb-8 font-body max-w-2xl mx-auto">
            You're not spending more — just switching where you shop.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="flex items-center bg-secondary rounded-lg shadow-lg overflow-hidden">
              <Search className="w-5 h-5 text-muted-foreground ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Search products across all schools..."
                className="flex-1 h-14 px-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button className="h-14 px-6 bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors shrink-0">
                Search
              </button>
            </div>
          </div>

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
              href="#shop-categories"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-secondary text-secondary font-display font-bold text-base px-8 py-4 rounded-lg transition-all duration-300 hover:bg-secondary/10"
            >
              <ShoppingBag className="w-5 h-5" />
              Shop Categories
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-dark py-5 border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {[
              { icon: ShoppingBag, text: "Shop Everyday Products" },
              { icon: Users, text: "Support Student-Athletes" },
              { icon: BarChart3, text: "Track Your Impact" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-semibold text-secondary/90">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-dark/90 py-2 px-4 text-center">
        <p className="text-xs text-secondary/60 font-body">
          We donate 50% of net earnings from qualifying purchases to support student-athletes at participating universities.{" "}
          <Link to="/disclaimer" className="text-primary hover:text-gold-dark font-semibold underline underline-offset-2">
            Full Disclaimer
          </Link>
        </p>
      </div>

      {/* ===== SECTION 2: CATEGORY NAVIGATION ===== */}
      <section id="shop-categories" className="py-14 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
              Shop by <span className="text-primary">Category</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Browse everyday products across all categories — select your school to start supporting athletes.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {categoryGrid.map((cat) => (
              <a
                key={cat.name}
                href="#conferences"
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square border-2 border-transparent hover:border-primary/40"
              >
                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop
                  </p>
                  <p className="text-sm font-bold text-white leading-tight drop-shadow-md">
                    {cat.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: FEATURED PRODUCTS ===== */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
              Featured <span className="text-primary">Products</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Everyday items you already buy — now each purchase supports student-athletes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
            {featuredProducts.map((product, i) => (
              <a key={i} href="#conferences" className="group bg-card rounded-xl border border-border hover:border-primary/30 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-square overflow-hidden bg-muted flex items-center justify-center p-4">
                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</p>
                  <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                      {product.nilContribution} NIL
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: NIL IMPACT TRACKER ===== */}
      <section className="py-14 lg:py-20 bg-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-secondary mb-3">
            Community <span className="text-primary">Impact</span>
          </h2>
          <p className="text-secondary/70 mb-10 max-w-2xl mx-auto">
            FanPact fans are powering NIL opportunities for student-athletes across the country.
          </p>

          <div className="max-w-lg mx-auto mb-12 bg-secondary/10 backdrop-blur-sm rounded-2xl p-10 border border-secondary/20 shadow-2xl">
            <p className="text-secondary/60 text-xs uppercase tracking-[0.2em] mb-3">Total NIL generated</p>
            <p className="text-6xl md:text-7xl font-display font-bold text-primary mb-3 leading-none">
              ${nilCounter.toLocaleString()}
            </p>
            <p className="text-secondary/80 text-lg">for student-athletes through everyday purchases.</p>
          </div>

          <div className="grid grid-cols-3 gap-8 text-secondary max-w-2xl mx-auto">
            <div className="bg-secondary/5 rounded-xl p-5 border border-secondary/10">
              <p className="text-3xl font-display font-bold text-primary">1,060+</p>
              <p className="text-secondary/60 text-sm mt-1">Athletes Supported</p>
            </div>
            <div className="bg-secondary/5 rounded-xl p-5 border border-secondary/10">
              <p className="text-3xl font-display font-bold text-primary">50K+</p>
              <p className="text-secondary/60 text-sm mt-1">Products Available</p>
            </div>
            <div className="bg-secondary/5 rounded-xl p-5 border border-secondary/10">
              <p className="text-3xl font-display font-bold text-primary">83K+</p>
              <p className="text-secondary/60 text-sm mt-1">Active Fans</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: HOW FANPACT WORKS ===== */}
      <section id="how-it-works" className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-10">
            How <span className="text-primary">FanPact</span> Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Package, step: "1", title: "Select Your School", desc: "Choose your university to enter its dedicated storefront." },
              { icon: ShoppingBag, step: "2", title: "Shop Everyday Products", desc: "Browse thousands of products from trusted brands — tech, home, fitness, and more." },
              { icon: TrendingUp, step: "3", title: "Support Student-Athletes", desc: "A portion of every purchase funds NIL opportunities for your school's athletes." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {item.step}</span>
                <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: SCHOOL SELECTION (CONFERENCES) ===== */}
      <section id="conferences" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center text-foreground mb-3">
            Select Your School <span className="text-primary">By Conference</span>
          </h2>
          <p className="text-center text-sm text-muted-foreground mb-10 max-w-lg mx-auto">
            Pick your school to enter its dedicated storefront.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {conferences.map((conf) => {
              const confSchools = schoolsByConference[conf.key] || [];
              return (
                <div
                  key={conf.name}
                  className="bg-card border border-border rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:border-primary gold-glow-hover"
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
                  <div className="border-t border-border pt-3 space-y-0.5 max-h-52 overflow-y-auto">
                    {confSchools.map((school) => (
                      <Link
                        key={school.id}
                        to={school.id === "missouri" ? "/mizzou" : school.id === "indiana" ? "/indiana" : "#"}
                        className="flex items-center gap-2 px-2 py-1.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 rounded transition-colors"
                      >
                        <span
                          className="w-3 h-3 rounded-full shrink-0 border border-border"
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
          <p className="text-center text-sm text-muted-foreground mt-8">
            More schools launching soon →
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-display font-bold text-foreground mb-2">Ready to make an impact?</h3>
          <p className="text-muted-foreground mb-6">You're not spending more — just switching where you shop.</p>
          <a
            href="#conferences"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 gold-glow-hover hover:bg-gold-dark"
          >
            <Trophy className="w-5 h-5" />
            Select Your School
          </a>
        </div>
      </section>

      {/* Unofficial disclaimer */}
      <div className="bg-secondary border-t border-border py-4 px-4 text-center">
        <p className="text-xs text-muted-foreground/70 max-w-2xl mx-auto italic">
          Unofficial Fan Support Site — Not affiliated with, endorsed by, or officially operated by any university, athletic department, NIL collective, conference, or the NCAA.{" "}
          <Link to="/disclaimer" className="text-primary hover:text-gold-dark font-semibold not-italic underline underline-offset-2">
            Full Disclaimer
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
