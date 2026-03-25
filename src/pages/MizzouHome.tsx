import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MizzouFooter from "@/components/mizzou/MizzouFooter";
import { MizzouDisclaimerBanner } from "@/components/mizzou/MizzouDisclaimerBanner";
import SearchAutocomplete from "@/components/search/SearchAutocomplete";
import { allCategories as mizzouSearchCategories } from "@/data/mizzouCategoryData";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  ShoppingBag,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  Truck,
  Shield,
  Heart,
  ArrowRight,
  Star,
  Award,
  Users,
  DollarSign,
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
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import fanpactPennantMark from "@/assets/fanpact-pennant-mark.png";
import heroStadium from "@/assets/hero-mizzou-stadium.jpg";
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

import categoryElectronics from "@/assets/category-electronics.jpg";
import categoryPets from "@/assets/category-pets.jpg";
import categoryHome from "@/assets/category-home.jpg";
import categorySports from "@/assets/category-sports.jpg";
import categoryAutomotive from "@/assets/category-automotive.jpg";
import categoryFood from "@/assets/category-food.jpg";

import productEarbuds from "@/assets/product-earbuds.jpg";
import productMonitor from "@/assets/product-monitor.jpg";
import productSunglasses from "@/assets/product-sunglasses.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";

import newsFootball from "@/assets/news-mizzou-football.jpg";
import newsBasketball from "@/assets/news-mizzou-basketball.jpg";
import newsVolleyball from "@/assets/news-mizzou-volleyball.jpg";
import newsTrack from "@/assets/news-mizzou-track.jpg";

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

const navTabs = [
  { label: "Shop", href: "#shop-categories", primary: true },
  { label: "Teams", href: "#teams", primary: false },
  { label: "Athletes", href: "#athletes", primary: false },
  { label: "NIL Impact", href: "#nil-impact", primary: true },
  { label: "News & Blogs", href: "#news", primary: false },
  { label: "Sponsors", href: "/mizzou/sponsors", primary: false },
];

const categoryGrid = [
  { name: "Electronics", icon: Smartphone, image: catElectronics, link: "/mizzou/category/electronics" },
  { name: "Home & Living", icon: Home, image: catHomeLiving, link: "/mizzou/category/home" },
  { name: "Kitchen & Dining", icon: UtensilsCrossed, image: catKitchenDining, link: "/mizzou/category/food" },
  { name: "Beauty & Personal Care", icon: Sparkles, image: catBeautyCare, link: "/mizzou/category/beauty" },
  { name: "Pet Supplies", icon: Dog, image: catPetSupplies, link: "/mizzou/category/pets" },
  { name: "Fitness & Outdoor", icon: Dumbbell, image: catFitnessOutdoor, link: "/mizzou/category/sports" },
  { name: "Auto Accessories", icon: Car, image: catAutoAccessories, link: "/mizzou/category/automotive" },
  { name: "Tools & Home Improvement", icon: Wrench, image: catToolsImprovement, link: "/mizzou/category/health" },
  { name: "Office & School", icon: Briefcase, image: catOfficeSchool, link: "/mizzou/category/home" },
  { name: "Baby & Kids", icon: Baby, image: catBabyKids, link: "/mizzou/category/toys" },
  { name: "Apparel", icon: Shirt, image: catApparel, link: "/mizzou/category/fashion" },
  { name: "Toys & Hobby", icon: Gamepad2, image: catToysHobby, link: "/mizzou/category/toys" },
];

const featuredProducts = [
  { name: "Wireless Earbuds", brand: "Top Rated", price: "$29.99", image: productEarbuds, link: "/mizzou/category/electronics" },
  { name: "Air Fryer", brand: "Kitchen Essential", price: "$89.99", image: productMonitor, link: "/mizzou/category/food" },
  { name: "Pet Bed", brand: "Cozy Living", price: "$34.99", image: productSunglasses, link: "/mizzou/category/pets" },
  { name: "Kitchen Storage Set", brand: "Organization", price: "$24.99", image: productHeadphones, link: "/mizzou/category/home" },
  { name: "Phone Mount", brand: "Auto Essentials", price: "$15.99", image: productEarbuds, link: "/mizzou/category/automotive" },
  { name: "Bluetooth Speaker", brand: "Top Rated", price: "$49.99", image: productHeadphones, link: "/mizzou/category/electronics" },
  { name: "Resistance Bands", brand: "Fitness Gear", price: "$19.99", image: productSunglasses, link: "/mizzou/category/sports" },
  { name: "Storage Organizer", brand: "Home Solutions", price: "$39.99", image: productMonitor, link: "/mizzou/category/home" },
];

const popularFanCategories = [
  { name: "Kitchen Essentials", products: 240, link: "/mizzou/category/food", image: categoryFood },
  { name: "Pet Supplies", products: 180, link: "/mizzou/category/pets", image: categoryPets },
  { name: "Home Organization", products: 310, link: "/mizzou/category/home", image: categoryHome },
  { name: "Fitness Gear", products: 195, link: "/mizzou/category/sports", image: categorySports },
  { name: "Car Accessories", products: 150, link: "/mizzou/category/automotive", image: categoryAutomotive },
  { name: "Electronics Accessories", products: 420, link: "/mizzou/category/electronics", image: categoryElectronics },
];

const mizzouNews = [
  { image: newsFootball, title: "Tigers Roll to Dominant SEC Victory Behind Record Rushing Attack", date: "March 15, 2026", category: "Football" },
  { image: newsBasketball, title: "Mizzou Basketball Clinches Top-4 Seed in SEC Tournament", date: "March 12, 2026", category: "Basketball" },
  { image: newsVolleyball, title: "Tiger Volleyball Earns Program-Best NCAA Tournament Seed", date: "March 10, 2026", category: "Volleyball" },
  { image: newsTrack, title: "Mizzou Track Star Breaks School Record at SEC Indoor Championships", date: "March 8, 2026", category: "Track & Field" },
];

const MizzouHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Shop");
  const { totalItems } = useCart();
  const [nilCounter, setNilCounter] = useState(127450);

  useEffect(() => {
    const interval = setInterval(() => {
      setNilCounter(prev => prev + Math.floor(Math.random() * 15) + 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top bar */}
        <div className="bg-background border-b border-border shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Link to="/" className="flex items-center">
                  <img src={fanpactPennantMark} alt="FanPact pennant" className="h-10 lg:h-14 w-auto object-contain" />
                </Link>
                <Link to="/mizzou" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <span className="font-display text-xl lg:text-2xl tracking-wide" style={{ color: MZ_GOLD }}>
                    MISSOURI
                  </span>
                  <div
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-lg"
                    style={{ backgroundColor: MZ_GOLD, color: MZ_BLACK }}
                  >
                    MU
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 px-4 py-2 font-bold text-base transition-colors" style={{ color: MZ_GOLD }}>
                      <ShoppingBag className="w-4 h-4" />
                      Shop <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-background border-border">
                    <DropdownMenuLabel className="text-xs uppercase tracking-wider" style={{ color: MZ_GOLD }}>Categories</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {shopCategories.map((cat) => (
                      <DropdownMenuItem key={cat.label} asChild>
                        <Link to={cat.href} className="cursor-pointer">{cat.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link to="/mizzou/rewards" className="px-3 py-2 font-medium transition-colors hover:opacity-70" style={{ color: MZ_GOLD }}>
                  Rewards
                </Link>

                {/* De-emphasized nav items */}
                {["Teams", "Athletes", "Sponsors"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 text-sm transition-colors cursor-pointer hover:opacity-70 text-muted-foreground/50"
                    title="Coming Soon"
                  >
                    {item}
                  </span>
                ))}
              </nav>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Search className="w-5 h-5" />
                </Button>
                <Link to="/mizzou/cart">
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 text-xs rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: MZ_GOLD, color: MZ_BLACK }}>
                        {totalItems}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>

              {/* Mobile */}
              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: MZ_GOLD }}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="hidden md:block" style={{ backgroundColor: MZ_BLACK }}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-0">
              {navTabs.map((tab) => (
                <a
                  key={tab.label}
                  href={tab.href}
                  onClick={() => setActiveTab(tab.label)}
                  className={`px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all border-b-2 ${
                    activeTab === tab.label
                      ? "text-white border-b-2 bg-white/10"
                      : tab.primary
                        ? "text-white/90 border-transparent hover:text-white hover:bg-white/5"
                        : "text-white/40 border-transparent hover:text-white/60 hover:bg-white/5 text-xs"
                  }`}
                  style={activeTab === tab.label ? { borderBottomColor: MZ_GOLD } : undefined}
                >
                  {tab.label}
                  {!tab.primary && tab.label !== "NIL Impact" && (
                    <span className="ml-1.5 text-[9px] uppercase" style={{ color: `${MZ_GOLD}99` }}>Soon</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Banner */}
        <div className="hidden md:block border-b border-border/50" style={{ backgroundColor: `${MZ_BLACK}f2` }}>
          <div className="container mx-auto px-4 py-1.5">
            <div className="flex items-center justify-center gap-1 flex-wrap">
              {shopCategories.map((cat, i) => (
                <Link key={cat.label} to={cat.href} className="text-xs text-white/70 hover:transition-colors whitespace-nowrap px-2 py-0.5" style={{ ["--tw-text-opacity" as string]: 1 }} onMouseEnter={(e) => (e.currentTarget.style.color = MZ_GOLD)} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                  {cat.label}
                  {i < shopCategories.length - 1 && <span className="ml-2 text-white/30">|</span>}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer banner */}
        <MizzouDisclaimerBanner />

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <a href="#shop-categories" className="font-bold py-1 text-lg" style={{ color: MZ_GOLD }} onClick={() => setIsMenuOpen(false)}>
                Shop
              </a>
              <a href="#nil-impact" className="font-medium py-1" style={{ color: MZ_GOLD }} onClick={() => setIsMenuOpen(false)}>
                NIL Impact
              </a>
              <div className="border-t pt-3 mt-1">
                <p className="text-xs text-muted-foreground/50 uppercase tracking-wider mb-2">Coming Soon</p>
                {["Teams", "Athletes", "News & Blogs", "Sponsors"].map((item) => (
                  <span key={item} className="block font-medium py-1 text-muted-foreground/50">{item}</span>
                ))}
              </div>
              <div className="border-t pt-3 mt-1">
                {shopCategories.slice(0, 6).map((cat) => (
                  <Link key={cat.label} to={cat.href} className="block font-medium py-1 text-muted-foreground" onClick={() => setIsMenuOpen(false)}>
                    {cat.label}
                  </Link>
                ))}
              </div>
              <Link to="/mizzou/rewards" className="font-medium py-1" style={{ color: MZ_GOLD }} onClick={() => setIsMenuOpen(false)}>Fan Rewards</Link>
            </nav>
          </div>
        )}
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="pt-32 lg:pt-40">

        {/* ===== 1. HERO SECTION ===== */}
        <section className="relative min-h-[65vh] flex items-center overflow-hidden">
          <img src={heroStadium} alt="Mizzou Stadium" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${MZ_BLACK}ee 0%, ${MZ_BLACK}cc 40%, ${MZ_BLACK}99 100%)` }} />

          <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                <span style={{ color: MZ_GOLD }}>Support Missouri Athletes.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
                Every purchase you make through the Missouri FanPact™ storefront lets you shop the everyday products you already buy — electronics, home goods, pet supplies, kitchen essentials, and more — while directly supporting NIL opportunities and the success of Tiger student-athletes.
              </p>

              {/* Search Bar */}
              <SearchAutocomplete
                categories={mizzouSearchCategories}
                schoolPrefix="/mizzou"
                accentColor={MZ_GOLD}
                accentTextColor={MZ_BLACK}
                placeholder="Search 50,000+ products that support Missouri athletes"
                className="max-w-xl mb-8"
                buttonStyle={{ backgroundColor: MZ_GOLD, color: MZ_BLACK }}
              />

              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#shop-categories">
                  <button
                    className="px-8 py-3.5 font-bold text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                    style={{ backgroundColor: MZ_GOLD, color: MZ_BLACK }}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Start Shopping
                  </button>
                </a>
                <a href="#how-it-works">
                  <button className="px-8 py-3.5 font-bold text-lg rounded-lg border-2 border-white/40 text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                    See How It Works
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-white/40 mt-2">
                Unofficial Fan Support Site – Not affiliated with or endorsed by the University of Missouri.{" "}
                <Link to="/mizzou/disclaimer" className="hover:underline transition-colors" style={{ color: `${MZ_GOLD}99` }}>Full Disclaimer</Link>
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 mt-6 pt-4 border-t border-white/10 max-w-2xl">
                <div className="col-span-2 sm:col-span-1 rounded-xl p-4 border" style={{ backgroundColor: `${MZ_GOLD}15`, borderColor: `${MZ_GOLD}30` }}>
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4" style={{ color: MZ_GOLD }} />
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: MZ_GOLD }}>Live NIL</span>
                  </div>
                  <div className="font-display text-2xl lg:text-3xl" style={{ color: MZ_GOLD }}>${nilCounter.toLocaleString()}</div>
                  <div className="text-xs text-white/60">Earned by athletes</div>
                </div>
                <div><div className="font-display text-3xl lg:text-4xl" style={{ color: MZ_GOLD }}>600+</div><div className="text-sm text-white/60">Athletes</div></div>
                <div><div className="font-display text-3xl lg:text-4xl" style={{ color: MZ_GOLD }}>20</div><div className="text-sm text-white/60">Sports</div></div>
                <div><div className="font-display text-3xl lg:text-4xl" style={{ color: MZ_GOLD }}>50K+</div><div className="text-sm text-white/60">Products</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TRUST / VALUE STRIP ===== */}
        <div className="py-4 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <div className="flex items-center gap-2 text-foreground">
                <Truck className="w-5 h-5" style={{ color: MZ_GOLD }} />
                <span className="text-sm font-semibold">Fast U.S. Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Shield className="w-5 h-5" style={{ color: MZ_GOLD }} />
                <span className="text-sm font-semibold">Trusted Product Sources</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Heart className="w-5 h-5" style={{ color: MZ_GOLD }} />
                <span className="text-sm font-semibold">Every Purchase Supports Missouri NIL</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== 2. SHOP BY CATEGORY ===== */}
        <section id="shop-categories" className="py-14 lg:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-2" style={{ color: MZ_GOLD }}>
                Start Shopping by Category
              </h2>
              <p className="text-muted-foreground text-lg">Browse thousands of everyday products from trusted brands</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categoryGrid.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.link}
                  className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square border-2 border-transparent"
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = MZ_GOLD + "66")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
                >
                  <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: MZ_GOLD }}>
                      Shop
                    </p>
                    <p className="text-sm font-bold text-white leading-tight drop-shadow-md">
                      {cat.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. EVERYDAY ESSENTIALS ===== */}
        <section className="py-14 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl" style={{ color: MZ_GOLD }}>
                  Everyday Essentials Supporting Missouri Athletes
                </h2>
                <p className="text-muted-foreground mt-1">Shop the products you already love — every purchase makes a difference</p>
              </div>
              <Link to="/mizzou/category/electronics" className="hidden md:flex items-center gap-1 font-semibold hover:opacity-70 transition-opacity" style={{ color: MZ_GOLD }}>
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {featuredProducts.map((product, i) => (
                <Link key={i} to={product.link} className="group bg-card rounded-xl border border-border hover:border-primary/30 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square overflow-hidden bg-muted flex items-center justify-center p-4">
                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</p>
                    <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold" style={{ color: MZ_GOLD }}>{product.price}</span>
                      <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">Supports Mizzou NIL</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link to="/mizzou/category/electronics" className="inline-flex items-center gap-1 font-semibold" style={{ color: MZ_GOLD }}>
                View All Products <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 4. MIZZOU FAN IMPACT TRACKER ===== */}
        <section id="nil-impact" className="py-14 lg:py-20" style={{ backgroundColor: MZ_BLACK }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-3">
              Missouri Fans Are Powering NIL Opportunities
            </h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto">
              Every purchase made through the Missouri FanPact storefront contributes to NIL opportunities for Tiger athletes.
            </p>

            <div className="max-w-lg mx-auto mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 shadow-2xl">
              <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-3">Missouri fans have generated</p>
              <p className="text-6xl md:text-7xl font-display font-bold mb-3 leading-none" style={{ color: MZ_GOLD }}>
                ${nilCounter.toLocaleString()}
              </p>
              <p className="text-white/80 text-lg">for Tiger student-athletes through everyday purchases.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white max-w-3xl mx-auto">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-display font-bold" style={{ color: MZ_GOLD }}>600+</p>
                <p className="text-white/60 text-sm mt-1">Athletes Supported</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-display font-bold" style={{ color: MZ_GOLD }}>1,200+</p>
                <p className="text-white/60 text-sm mt-1">Products Available</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-display font-bold" style={{ color: MZ_GOLD }}>38K+</p>
                <p className="text-white/60 text-sm mt-1">Active Fans</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-display font-bold" style={{ color: MZ_GOLD }}>20</p>
                <p className="text-white/60 text-sm mt-1">Sports Programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. HOW FANPACT WORKS ===== */}
        <section id="how-it-works" className="py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-2" style={{ color: MZ_GOLD }}>
                How FanPact Works
              </h2>
              <p className="text-muted-foreground">Three simple steps to support Missouri athletes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { step: 1, icon: ShoppingBag, title: "Shop Everyday Products", desc: "Browse thousands of everyday consumer products from trusted brands." },
                { step: 2, icon: Users, title: "Buy Through Your School Storefront", desc: "Purchases are attributed to the Missouri FanPact storefront." },
                { step: 3, icon: DollarSign, title: "Revenue Supports Missouri Athletes", desc: "A portion of every purchase supports NIL opportunities for Tiger student-athletes." },
              ].map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.step} className="text-center bg-card rounded-xl p-6 shadow-sm border border-border">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: `${MZ_GOLD}18` }}>
                      <IconComp className="w-7 h-7" style={{ color: MZ_GOLD }} />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: MZ_GOLD }}>Step {item.step}</div>
                    <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== 6. TRENDING FOR MISSOURI FANS ===== */}
        <section className="py-14 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-2" style={{ color: MZ_GOLD }}>
                Trending for Missouri Fans
              </h2>
              <p className="text-muted-foreground text-lg">Curated picks our fans are loving right now</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {popularFanCategories.map((cat) => (
                <Link key={cat.name} to={cat.link} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-[16/10]">
                  <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{cat.name}</h3>
                    <p className="text-white/60 text-sm">{cat.products} products</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 text-xs font-bold px-2 py-1 rounded-full" style={{ color: MZ_BLACK }}>
                    Shop Now
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TRUST & CONVENIENCE STRIP ===== */}
        <section className="py-6 border-y border-border bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${MZ_GOLD}15` }}>
                  <Truck className="w-5 h-5" style={{ color: MZ_GOLD }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: MZ_GOLD }}>Free Shipping on Orders Over $59</p>
                  <p className="text-xs text-muted-foreground">Fast delivery to your door</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${MZ_GOLD}15` }}>
                  <Star className="w-5 h-5" style={{ color: MZ_GOLD }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: MZ_GOLD }}>Fan Rewards Program</p>
                  <p className="text-xs text-muted-foreground">Earn points on every purchase</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${MZ_GOLD}15` }}>
                  <Award className="w-5 h-5" style={{ color: MZ_GOLD }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: MZ_GOLD }}>Every Purchase Funds Missouri NIL</p>
                  <p className="text-xs text-muted-foreground">Support Tiger student-athletes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MIZZOU NEWS (de-emphasized) ===== */}
        <section id="news" className="py-10 lg:py-14 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl mb-1 text-muted-foreground">
                Missouri Sports News
              </h2>
              <p className="text-muted-foreground/60 text-sm">Stay up to date with the latest from Tiger athletics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mizzouNews.map((story, i) => (
                <a key={i} href="#" className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded" style={{ backgroundColor: MZ_GOLD, color: MZ_BLACK }}>{story.category}</span>
                      <span className="text-[10px] text-muted-foreground">{story.date}</span>
                    </div>
                    <h3 className="font-semibold text-foreground/70 text-sm leading-snug group-hover:opacity-70 transition-opacity">{story.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA / EMAIL ===== */}
        <section className="py-14 bg-muted/50">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl mb-3" style={{ color: MZ_GOLD }}>
              Join the Tiger Nation
            </h2>
            <p className="text-muted-foreground mb-6">
              Get exclusive deals, track your fan impact, and stay connected with Missouri athletics. Every purchase makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": MZ_GOLD } as React.CSSProperties}
              />
              <button className="h-12 px-6 font-bold rounded-lg" style={{ backgroundColor: MZ_GOLD, color: MZ_BLACK }}>
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* ===== FOOTER NAV BAR ===== */}
        <div className="py-3 text-center text-sm" style={{ backgroundColor: MZ_BLACK }}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 flex-wrap text-white/80">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs" style={{ backgroundColor: MZ_GOLD, color: MZ_BLACK }}>MU</div>
              <a href="#shop-categories" className="hover:text-white transition-colors">Shop</a>
              <span className="text-white/30">|</span>
              <a href="#nil-impact" className="hover:text-white transition-colors">NIL Impact</a>
              <span className="text-white/30">|</span>
              <Link to="/mizzou/rewards" className="hover:text-white transition-colors">Fan Rewards</Link>
              <span className="text-white/30">|</span>
              <Link to="/mizzou/cart" className="hover:text-white transition-colors">My Account</Link>
              <span className="text-white/30">|</span>
              <Link to="/mizzou/disclaimer" className="hover:text-white transition-colors">Help</Link>
            </div>
          </div>
        </div>
      </main>
      <MizzouFooter />
    </div>
  );
};

export default MizzouHome;
