import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  ChevronDown,
  ChevronRight,
  Trophy,
  Truck,
  Star,
  Award,
  TrendingUp,
  ShoppingBag,
  Package,
  Heart,
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
  Users,
  DollarSign,
  ArrowRight,
  Shield,
  CheckCircle,
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
import heroStadium from "@/assets/hero-stadium-bg.jpg";
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
import newsFootball from "@/assets/news-indiana-football.jpg";
import newsBasketball from "@/assets/news-indiana-basketball.jpg";
import newsVolleyball from "@/assets/news-indiana-volleyball.jpg";
import newsTrack from "@/assets/news-indiana-track.jpg";
import { useCart } from "@/contexts/CartContext";
import { IndianaDisclaimerBanner } from "@/components/indiana/IndianaDisclaimerBanner";

const IU_CRIMSON = "#990000";
const IU_CREAM = "#EEEDEB";

const shopCategories = [
  { label: "Electronics", href: "/indiana/category/electronics" },
  { label: "Fashion & Apparel", href: "/indiana/category/fashion" },
  { label: "Home & Garden", href: "/indiana/category/home" },
  { label: "Beauty & Personal Care", href: "/indiana/category/beauty" },
  { label: "Sports & Outdoors", href: "/indiana/category/sports" },
  { label: "Toys & Games", href: "/indiana/category/toys" },
  { label: "Food & Grocery", href: "/indiana/category/food" },
  { label: "Pet Supplies", href: "/indiana/category/pets" },
  { label: "Automotive", href: "/indiana/category/automotive" },
  { label: "Health & Wellness", href: "/indiana/category/health" },
  { label: "Jewelry & Watches", href: "/indiana/category/jewelry" },
  { label: "Merchandise", href: "/indiana/category/merchandise" },
];

const categoryGrid = [
  { name: "Electronics", icon: Smartphone, image: catElectronics, link: "/indiana/category/electronics" },
  { name: "Home & Living", icon: Home, image: catHomeLiving, link: "/indiana/category/home" },
  { name: "Kitchen & Dining", icon: UtensilsCrossed, image: catKitchenDining, link: "/indiana/category/food" },
  { name: "Beauty & Personal Care", icon: Sparkles, image: catBeautyCare, link: "/indiana/category/beauty" },
  { name: "Pet Supplies", icon: Dog, image: catPetSupplies, link: "/indiana/category/pets" },
  { name: "Fitness & Outdoor", icon: Dumbbell, image: catFitnessOutdoor, link: "/indiana/category/sports" },
  { name: "Auto Accessories", icon: Car, image: catAutoAccessories, link: "/indiana/category/automotive" },
  { name: "Tools & Home Improvement", icon: Wrench, image: catToolsImprovement, link: "/indiana/category/health" },
  { name: "Office & School", icon: Briefcase, image: catOfficeSchool, link: "/indiana/category/home" },
  { name: "Baby & Kids", icon: Baby, image: catBabyKids, link: "/indiana/category/toys" },
  { name: "Apparel", icon: Shirt, image: catApparel, link: "/indiana/category/fashion" },
  { name: "Toys & Hobby", icon: Gamepad2, image: catToysHobby, link: "/indiana/category/toys" },
];

const featuredProducts = [
  { name: "Wireless Earbuds", brand: "Top Rated", price: "$29.99", image: productEarbuds, link: "/indiana/category/electronics" },
  { name: "Air Fryer", brand: "Kitchen Essential", price: "$89.99", image: productMonitor, link: "/indiana/category/food" },
  { name: "Pet Bed", brand: "Cozy Living", price: "$34.99", image: productSunglasses, link: "/indiana/category/pets" },
  { name: "Kitchen Storage Set", brand: "Organization", price: "$24.99", image: productHeadphones, link: "/indiana/category/home" },
  { name: "Phone Mount", brand: "Auto Essentials", price: "$15.99", image: productEarbuds, link: "/indiana/category/automotive" },
  { name: "Bluetooth Speaker", brand: "Top Rated", price: "$49.99", image: productHeadphones, link: "/indiana/category/electronics" },
  { name: "Resistance Bands", brand: "Fitness Gear", price: "$19.99", image: productSunglasses, link: "/indiana/category/sports" },
  { name: "Storage Organizer", brand: "Home Solutions", price: "$39.99", image: productMonitor, link: "/indiana/category/home" },
];

const popularFanCategories = [
  { name: "Kitchen Essentials", products: 240, link: "/indiana/category/food", image: categoryFood },
  { name: "Pet Supplies", products: 180, link: "/indiana/category/pets", image: categoryPets },
  { name: "Home Organization", products: 310, link: "/indiana/category/home", image: categoryHome },
  { name: "Fitness Gear", products: 195, link: "/indiana/category/sports", image: categorySports },
  { name: "Car Accessories", products: 150, link: "/indiana/category/automotive", image: categoryAutomotive },
  { name: "Electronics Accessories", products: 420, link: "/indiana/category/electronics", image: categoryElectronics },
];

const navTabs = [
  { label: "Shop", href: "#shop-categories", primary: true },
  { label: "Teams", href: "#teams", primary: false },
  { label: "Athletes", href: "#athletes", primary: false },
  { label: "NIL Impact", href: "#nil-impact", primary: true },
  { label: "News & Blogs", href: "#news", primary: false },
  { label: "Sponsors", href: "/sponsors", primary: false },
];

const IndianaHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Shop");
  const { totalItems } = useCart();
  const [nilCounter, setNilCounter] = useState(184320);

  useEffect(() => {
    const interval = setInterval(() => {
      setNilCounter(prev => prev + Math.floor(Math.random() * 18) + 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top bar */}
        <div className="bg-white border-b border-border shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Link to="/" className="flex items-center">
                  <img src={fanpactPennantMark} alt="FanPact pennant" className="h-10 lg:h-14 w-auto object-contain" />
                </Link>
                <Link to="/indiana" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <span className="font-display text-xl lg:text-2xl tracking-wide" style={{ color: IU_CRIMSON }}>
                    HOOSIERS
                  </span>
                  <div
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: IU_CRIMSON }}
                  >
                    IU
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 px-4 py-2 font-bold text-base transition-colors" style={{ color: IU_CRIMSON }}>
                      <ShoppingBag className="w-4 h-4" />
                      Shop <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white border-border">
                    <DropdownMenuLabel className="text-xs uppercase tracking-wider" style={{ color: IU_CRIMSON }}>Categories</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {shopCategories.map((cat) => (
                      <DropdownMenuItem key={cat.label} asChild>
                        <Link to={cat.href} className="cursor-pointer">{cat.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link to="/rewards" className="px-3 py-2 font-medium transition-colors hover:opacity-70" style={{ color: IU_CRIMSON }}>
                  Rewards
                </Link>

                {/* De-emphasized nav items */}
                {["Teams", "Athletes", "Sponsors"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 text-sm transition-colors cursor-pointer hover:opacity-70 text-gray-400"
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
                <Link to="/cart">
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 text-xs text-white rounded-full flex items-center justify-center" style={{ backgroundColor: IU_CRIMSON }}>
                        {totalItems}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>

              {/* Mobile */}
              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: IU_CRIMSON }}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="hidden md:block" style={{ backgroundColor: IU_CRIMSON }}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-0">
              {navTabs.map((tab) => (
                <a
                  key={tab.label}
                  href={tab.href}
                  onClick={() => setActiveTab(tab.label)}
                  className={`px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all border-b-2 ${
                    activeTab === tab.label
                      ? "text-white border-yellow-300 bg-white/10"
                      : tab.primary
                        ? "text-white/90 border-transparent hover:text-white hover:bg-white/5"
                        : "text-white/40 border-transparent hover:text-white/60 hover:bg-white/5 text-xs"
                  }`}
                >
                  {tab.label}
                  {!tab.primary && tab.label !== "NIL Impact" && (
                    <span className="ml-1.5 text-[9px] text-yellow-300/60 uppercase">Soon</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer banner */}
        <IndianaDisclaimerBanner />

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <a href="#shop-categories" className="font-bold py-1 text-lg" style={{ color: IU_CRIMSON }} onClick={() => setIsMenuOpen(false)}>
                Shop
              </a>
              <a href="#nil-impact" className="font-medium py-1" style={{ color: IU_CRIMSON }} onClick={() => setIsMenuOpen(false)}>
                NIL Impact
              </a>
              <div className="border-t pt-3 mt-1">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Coming Soon</p>
                {["Teams", "Athletes", "News & Blogs", "Sponsors"].map((item) => (
                  <span key={item} className="block font-medium py-1 text-gray-400">{item}</span>
                ))}
              </div>
              <div className="border-t pt-3 mt-1">
                {shopCategories.slice(0, 6).map((cat) => (
                  <Link key={cat.label} to={cat.href} className="block font-medium py-1 text-gray-600" onClick={() => setIsMenuOpen(false)}>
                    {cat.label}
                  </Link>
                ))}
              </div>
              <Link to="/rewards" className="font-medium py-1" style={{ color: IU_CRIMSON }} onClick={() => setIsMenuOpen(false)}>Fan Rewards</Link>
            </nav>
          </div>
        )}
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="pt-32 lg:pt-40">

        {/* ===== 1. HERO SECTION ===== */}
        <section className="relative min-h-[65vh] flex items-center overflow-hidden">
          <img src={heroStadium} alt="Indiana Stadium" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${IU_CRIMSON}ee 0%, ${IU_CRIMSON}cc 40%, ${IU_CRIMSON}99 100%)` }} />

          <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
            <div className="max-w-3xl">

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                Shop Everyday Products.
                <br />
                <span className="text-yellow-300">Support Indiana Athletes.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-3 leading-relaxed max-w-2xl">
                Every purchase made through the Indiana FanPact storefront contributes to NIL opportunities for Hoosier student-athletes and supports Indiana athletics.
              </p>
              <p className="text-white/70 mb-6 max-w-2xl">
                FanPact allows fans to shop the products they already buy — electronics, home goods, pet supplies, kitchen products, and more — while helping Indiana athletes succeed.
              </p>

              {/* Search Bar - prominent, conversion-focused */}
              <div className="max-w-xl mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search 50,000+ products that support Indiana athletes"
                    className="w-full pl-12 pr-32 py-4 bg-white rounded-xl text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 transition-all shadow-lg text-sm md:text-base"
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 text-white font-bold text-sm rounded-lg"
                    style={{ backgroundColor: IU_CRIMSON }}
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#shop-categories">
                  <button
                    className="px-8 py-3.5 text-white font-bold text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                    style={{ backgroundColor: "#7A0000", border: "2px solid rgba(255,255,255,0.2)" }}
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

              {/* Disclaimer - clean secondary treatment */}
              <p className="text-xs text-white/40 mt-2">
                Unofficial Fan Support Site – Not affiliated with or endorsed by Indiana University.{" "}
                <Link to="/indiana/disclaimer" className="text-yellow-300/60 hover:text-yellow-300 hover:underline transition-colors">Full Disclaimer</Link>
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 mt-6 pt-4 border-t border-white/10 max-w-2xl">
                <div className="col-span-2 sm:col-span-1 bg-yellow-300/10 rounded-xl p-4 border border-yellow-300/20">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-yellow-300" />
                    <span className="text-xs text-yellow-300 font-semibold uppercase tracking-wider">Live NIL</span>
                  </div>
                  <div className="font-display text-2xl lg:text-3xl text-yellow-300">${nilCounter.toLocaleString()}</div>
                  <div className="text-xs text-white/60">Earned by athletes</div>
                </div>
                <div><div className="font-display text-3xl lg:text-4xl text-yellow-300">600+</div><div className="text-sm text-white/60">Athletes</div></div>
                <div><div className="font-display text-3xl lg:text-4xl text-yellow-300">24</div><div className="text-sm text-white/60">Sports</div></div>
                <div><div className="font-display text-3xl lg:text-4xl text-yellow-300">50K+</div><div className="text-sm text-white/60">Products</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TRUST / VALUE STRIP (replaces military banner) ===== */}
        <div className="py-4 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <div className="flex items-center gap-2 text-gray-700">
                <Truck className="w-5 h-5" style={{ color: IU_CRIMSON }} />
                <span className="text-sm font-semibold">Fast U.S. Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Shield className="w-5 h-5" style={{ color: IU_CRIMSON }} />
                <span className="text-sm font-semibold">Trusted Product Sources</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Heart className="w-5 h-5" style={{ color: IU_CRIMSON }} />
                <span className="text-sm font-semibold">Every Purchase Supports Indiana NIL</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== 2. SHOP BY CATEGORY ===== */}
        <section id="shop-categories" className="py-14 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-2" style={{ color: IU_CRIMSON }}>
                Start Shopping by Category
              </h2>
              <p className="text-gray-500 text-lg">Browse thousands of everyday products from trusted brands</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categoryGrid.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.link}
                  className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square border-2 border-transparent hover:border-[#990000]/40"
                >
                  <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                    <p className="text-xs font-bold text-yellow-300 uppercase tracking-wider mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

        {/* ===== 3. EVERYDAY ESSENTIALS (Featured Products) ===== */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl" style={{ color: IU_CRIMSON }}>
                  Everyday Essentials Supporting Indiana Athletes
                </h2>
                <p className="text-gray-500 mt-1">Shop the products you already love — every purchase makes a difference</p>
              </div>
              <Link to="/category/electronics" className="hidden md:flex items-center gap-1 font-semibold hover:opacity-70 transition-opacity" style={{ color: IU_CRIMSON }}>
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {featuredProducts.map((product, i) => (
                <Link key={i} to={product.link} className="group bg-white rounded-xl border border-gray-200 hover:border-[#990000]/30 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{product.brand}</p>
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold" style={{ color: IU_CRIMSON }}>{product.price}</span>
                      <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">Supports Indiana NIL</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link to="/category/electronics" className="inline-flex items-center gap-1 font-semibold" style={{ color: IU_CRIMSON }}>
                View All Products <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 4. INDIANA FAN IMPACT TRACKER ===== */}
        <section id="nil-impact" className="py-14 lg:py-20" style={{ backgroundColor: IU_CRIMSON }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-3">
              Indiana Fans Are Powering NIL Opportunities
            </h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto">
              Every purchase made through the Indiana FanPact storefront contributes to NIL opportunities for Hoosier athletes.
            </p>

            <div className="max-w-lg mx-auto mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 shadow-2xl">
              <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-3">Indiana fans have generated</p>
              <p className="text-6xl md:text-7xl font-display font-bold text-yellow-300 mb-3 leading-none">
                ${nilCounter.toLocaleString()}
              </p>
              <p className="text-white/80 text-lg">for Hoosier student-athletes through everyday purchases.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white max-w-3xl mx-auto">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-display font-bold text-yellow-300">460+</p>
                <p className="text-white/60 text-sm mt-1">Athletes Supported</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-display font-bold text-yellow-300">1,200+</p>
                <p className="text-white/60 text-sm mt-1">Products Available</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-display font-bold text-yellow-300">45K+</p>
                <p className="text-white/60 text-sm mt-1">Active Fans</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-display font-bold text-yellow-300">24</p>
                <p className="text-white/60 text-sm mt-1">Sports Programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. HOW FANPACT WORKS ===== */}
        <section id="how-it-works" className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-2" style={{ color: IU_CRIMSON }}>
                How FanPact Works
              </h2>
              <p className="text-gray-500">Three simple steps to support Indiana athletes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  step: 1,
                  icon: ShoppingBag,
                  title: "Shop Everyday Products",
                  desc: "Browse thousands of everyday consumer products from trusted brands.",
                },
                {
                  step: 2,
                  icon: Users,
                  title: "Buy Through Your School Storefront",
                  desc: "Purchases are attributed to the Indiana FanPact storefront.",
                },
                {
                  step: 3,
                  icon: DollarSign,
                  title: "Revenue Supports Indiana Athletes",
                  desc: "A portion of every purchase supports NIL opportunities for Hoosier student-athletes.",
                },
              ].map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.step} className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: `${IU_CRIMSON}12` }}>
                      <IconComp className="w-7 h-7" style={{ color: IU_CRIMSON }} />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: IU_CRIMSON }}>
                      Step {item.step}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== 6. TRENDING FOR INDIANA FANS ===== */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-2" style={{ color: IU_CRIMSON }}>
                Trending for Indiana Fans
              </h2>
              <p className="text-gray-500 text-lg">Curated picks our fans are loving right now</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {popularFanCategories.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.link}
                  className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-[16/10]"
                >
                  <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{cat.name}</h3>
                    <p className="text-white/60 text-sm">{cat.products} products</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 text-xs font-bold px-2 py-1 rounded-full" style={{ color: IU_CRIMSON }}>
                    Shop Now
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TRUST & CONVENIENCE STRIP ===== */}
        <section className="py-6 border-y border-gray-100 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${IU_CRIMSON}10` }}>
                  <Truck className="w-5 h-5" style={{ color: IU_CRIMSON }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: IU_CRIMSON }}>Free Shipping on Orders Over $59</p>
                  <p className="text-xs text-gray-500">Fast delivery to your door</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${IU_CRIMSON}10` }}>
                  <Star className="w-5 h-5" style={{ color: IU_CRIMSON }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: IU_CRIMSON }}>Fan Rewards Program</p>
                  <p className="text-xs text-gray-500">Earn points on every purchase</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-end">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${IU_CRIMSON}10` }}>
                  <Award className="w-5 h-5" style={{ color: IU_CRIMSON }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: IU_CRIMSON }}>Every Purchase Funds Indiana NIL</p>
                  <p className="text-xs text-gray-500">Support Hoosier student-athletes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== NEWS & BLOGS (de-emphasized) ===== */}
        <section id="news" className="py-10 lg:py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl mb-1 text-gray-700">
                Indiana Sports News
              </h2>
              <p className="text-gray-400 text-sm">Stay up to date with the latest from Hoosier athletics</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  image: newsFootball,
                  title: "Hoosiers Dominate in Big Ten Opener with Record-Breaking Performance",
                  date: "March 15, 2026",
                  category: "Football",
                },
                {
                  image: newsBasketball,
                  title: "Indiana Basketball Secures Top Seed Heading into Conference Tournament",
                  date: "March 12, 2026",
                  category: "Basketball",
                },
                {
                  image: newsVolleyball,
                  title: "Volleyball Team Celebrates Historic Season with NCAA Tournament Berth",
                  date: "March 10, 2026",
                  category: "Volleyball",
                },
                {
                  image: newsTrack,
                  title: "Track & Field Star Sets New School Record at Big Ten Championships",
                  date: "March 8, 2026",
                  category: "Track & Field",
                },
              ].map((story, i) => (
                <a key={i} href="#" className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white px-1.5 py-0.5 rounded" style={{ backgroundColor: IU_CRIMSON }}>{story.category}</span>
                      <span className="text-[10px] text-gray-400">{story.date}</span>
                    </div>
                    <h3 className="font-semibold text-gray-700 text-sm leading-snug group-hover:opacity-70 transition-opacity">{story.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA / EMAIL ===== */}
        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl mb-3" style={{ color: IU_CRIMSON }}>
              Join the Hoosier Nation
            </h2>
            <p className="text-gray-500 mb-6">
              Get exclusive deals, track your fan impact, and stay connected with Indiana athletics. Every purchase makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": IU_CRIMSON } as React.CSSProperties}
              />
              <button className="h-12 px-6 text-white font-bold rounded-lg" style={{ backgroundColor: IU_CRIMSON }}>
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* ===== FOOTER NAV BAR ===== */}
        <div className="py-3 text-center text-sm" style={{ backgroundColor: IU_CRIMSON }}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 flex-wrap text-white/80">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-xs">IU</div>
              <a href="#shop-categories" className="hover:text-white transition-colors">Shop</a>
              <span className="text-white/30">|</span>
              <a href="#nil-impact" className="hover:text-white transition-colors">NIL Impact</a>
              <span className="text-white/30">|</span>
              <Link to="/rewards" className="hover:text-white transition-colors">Fan Rewards</Link>
              <span className="text-white/30">|</span>
              <Link to="/cart" className="hover:text-white transition-colors">My Account</Link>
              <span className="text-white/30">|</span>
              <Link to="/indiana/disclaimer" className="hover:text-white transition-colors">Help</Link>
            </div>
          </div>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <span className="text-2xl font-display font-bold text-white">FanPact</span>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Empowering fans to support college athletes through everyday shopping.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">Navigate</h4>
              <ul className="space-y-2">
                {["Home", "Shop", "About"].map((link) => (
                  <li key={link}>
                    <Link to={link === "Home" ? "/indiana" : `/${link.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {["Contact Us", "FAQ", "Privacy Policy", "Terms of Service", "Disclaimer"].map((link) => (
                  <li key={link}>
                    {link === "Disclaimer" ? (
                      <Link to="/indiana/disclaimer" className="text-sm text-gray-400 hover:text-white transition-colors">
                        {link}
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                        {link}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                {["X (Twitter)", "Instagram", "Facebook"].map((social) => (
                  <span key={social} className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {social.split(" ")[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p className="text-xs text-gray-500">
              FanPact.net © 2026. Empowering fans to support college athletes through everyday shopping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndianaHome;
