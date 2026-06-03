import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButlerFooter from "@/components/butler/ButlerFooter";
import { ButlerDisclaimerBanner } from "@/components/butler/ButlerDisclaimerBanner";
import SearchAutocomplete from "@/components/search/SearchAutocomplete";
import { allCategories as butlerSearchCategories } from "@/data/butlerCategoryData";
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
  Heart,
  ArrowRight,
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

const BU_BLUE = "#13294B";
const BU_DARK = "#061A2F";
const BU_WHITE = "#FFFFFF";

const shopCategories = [
  { label: "Electronics", href: "/butler/category/electronics" },
  { label: "Fashion & Apparel", href: "/butler/category/fashion" },
  { label: "Home & Garden", href: "/butler/category/home" },
  { label: "Beauty & Personal Care", href: "/butler/category/beauty" },
  { label: "Sports & Outdoors", href: "/butler/category/sports" },
  { label: "Toys & Games", href: "/butler/category/toys" },
  { label: "Food & Grocery", href: "/butler/category/food" },
  { label: "Pet Supplies", href: "/butler/category/pets" },
  { label: "Automotive", href: "/butler/category/automotive" },
  { label: "Health & Wellness", href: "/butler/category/health" },
  { label: "Jewelry & Watches", href: "/butler/category/jewelry" },
  { label: "Merchandise", href: "/butler/category/merchandise" },
];

const navTabs = [
  { label: "Shop", href: "#shop-categories", primary: true },
  { label: "Teams", href: "#teams", primary: false },
  { label: "Athletes", href: "#athletes", primary: false },
  { label: "NIL Impact", href: "#nil-impact", primary: true },
  { label: "News & Blogs", href: "#news", primary: false },
  { label: "Sponsors", href: "/butler/sponsors", primary: false },
];

const categoryGrid = [
  { name: "Electronics", icon: Smartphone, image: catElectronics, link: "/butler/category/electronics" },
  { name: "Home & Living", icon: Home, image: catHomeLiving, link: "/butler/category/home" },
  { name: "Kitchen & Dining", icon: UtensilsCrossed, image: catKitchenDining, link: "/butler/category/food" },
  { name: "Beauty & Personal Care", icon: Sparkles, image: catBeautyCare, link: "/butler/category/beauty" },
  { name: "Pet Supplies", icon: Dog, image: catPetSupplies, link: "/butler/category/pets" },
  { name: "Fitness & Outdoor", icon: Dumbbell, image: catFitnessOutdoor, link: "/butler/category/sports" },
  { name: "Auto Accessories", icon: Car, image: catAutoAccessories, link: "/butler/category/automotive" },
  { name: "Tools & Home Improvement", icon: Wrench, image: catToolsImprovement, link: "/butler/category/health" },
  { name: "Office & School", icon: Briefcase, image: catOfficeSchool, link: "/butler/category/home" },
  { name: "Baby & Kids", icon: Baby, image: catBabyKids, link: "/butler/category/toys" },
  { name: "Apparel", icon: Shirt, image: catApparel, link: "/butler/category/fashion" },
  { name: "Toys & Hobby", icon: Gamepad2, image: catToysHobby, link: "/butler/category/toys" },
];

const featuredProducts = [
  { name: "Wireless Earbuds", brand: "Top Rated", price: "$29.99", nilContribution: "$1.50", image: productEarbuds, link: "/butler/category/electronics" },
  { name: "Air Fryer", brand: "Kitchen Essential", price: "$89.99", nilContribution: "$4.50", image: productMonitor, link: "/butler/category/food" },
  { name: "Pet Bed", brand: "Cozy Living", price: "$34.99", nilContribution: "$1.75", image: productSunglasses, link: "/butler/category/pets" },
  { name: "Kitchen Storage Set", brand: "Organization", price: "$24.99", nilContribution: "$1.25", image: productHeadphones, link: "/butler/category/home" },
  { name: "Phone Mount", brand: "Auto Essentials", price: "$15.99", nilContribution: "$0.80", image: productEarbuds, link: "/butler/category/automotive" },
  { name: "Bluetooth Speaker", brand: "Top Rated", price: "$49.99", nilContribution: "$2.50", image: productHeadphones, link: "/butler/category/electronics" },
  { name: "Resistance Bands", brand: "Fitness Gear", price: "$19.99", nilContribution: "$1.00", image: productSunglasses, link: "/butler/category/sports" },
  { name: "Storage Organizer", brand: "Home Solutions", price: "$39.99", nilContribution: "$2.00", image: productMonitor, link: "/butler/category/home" },
];

const popularFanCategories = [
  { name: "Kitchen Essentials", products: 240, link: "/butler/category/food", image: categoryFood },
  { name: "Pet Supplies", products: 180, link: "/butler/category/pets", image: categoryPets },
  { name: "Home Organization", products: 310, link: "/butler/category/home", image: categoryHome },
  { name: "Fitness Gear", products: 195, link: "/butler/category/sports", image: categorySports },
  { name: "Car Accessories", products: 150, link: "/butler/category/automotive", image: categoryAutomotive },
  { name: "Electronics Accessories", products: 420, link: "/butler/category/electronics", image: categoryElectronics },
];

const ButlerHome = () => {
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
                <Link to="/butler" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <span className="font-display text-xl lg:text-2xl tracking-wide" style={{ color: BU_BLUE }}>
                    MISSOURI
                  </span>
                  <div
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-lg"
                    style={{ backgroundColor: BU_BLUE, color: BU_WHITE }}
                  >
                    MU
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 px-4 py-2 font-bold text-base transition-colors" style={{ color: BU_BLUE }}>
                      <ShoppingBag className="w-4 h-4" />
                      Shop <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-background border-border">
                    <DropdownMenuLabel className="text-xs uppercase tracking-wider" style={{ color: BU_BLUE }}>Categories</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {shopCategories.map((cat) => (
                      <DropdownMenuItem key={cat.label} asChild>
                        <Link to={cat.href} className="cursor-pointer">{cat.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link to="/butler/rewards" className="px-3 py-2 font-medium transition-colors hover:opacity-70" style={{ color: BU_BLUE }}>
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
                <Link to="/butler/cart">
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 text-xs rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: BU_BLUE, color: BU_WHITE }}>
                        {totalItems}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>

              {/* Mobile */}
              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: BU_BLUE }}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="hidden md:block" style={{ backgroundColor: BU_DARK }}>
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
                  style={activeTab === tab.label ? { borderBottomColor: BU_BLUE } : undefined}
                >
                  {tab.label}
                  {!tab.primary && tab.label !== "NIL Impact" && (
                    <span className="ml-1.5 text-[9px] uppercase" style={{ color: `${BU_BLUE}99` }}>Soon</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Banner */}
        <div className="hidden md:block border-b border-border/50" style={{ backgroundColor: `${BU_DARK}f2` }}>
          <div className="container mx-auto px-4 py-1.5">
            <div className="flex items-center justify-center gap-1 flex-wrap">
              {shopCategories.map((cat, i) => (
                <Link key={cat.label} to={cat.href} className="text-xs text-white/70 hover:transition-colors whitespace-nowrap px-2 py-0.5" style={{ ["--tw-text-opacity" as string]: 1 }} onMouseEnter={(e) => (e.currentTarget.style.color = BU_BLUE)} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                  {cat.label}
                  {i < shopCategories.length - 1 && <span className="ml-2 text-white/30">|</span>}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer banner */}
        <ButlerDisclaimerBanner />

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <a href="#shop-categories" className="font-bold py-1 text-lg" style={{ color: BU_BLUE }} onClick={() => setIsMenuOpen(false)}>
                Shop
              </a>
              <a href="#nil-impact" className="font-medium py-1" style={{ color: BU_BLUE }} onClick={() => setIsMenuOpen(false)}>
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
              <Link to="/butler/rewards" className="font-medium py-1" style={{ color: BU_BLUE }} onClick={() => setIsMenuOpen(false)}>Fan Rewards</Link>
            </nav>
          </div>
        )}
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="pt-32 lg:pt-40">

        {/* ===== 1. HERO SECTION ===== */}
        <section className="relative min-h-[65vh] flex items-center overflow-hidden">
          <img src={heroStadium} alt="Butler Stadium" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${BU_DARK}ee 0%, ${BU_DARK}cc 40%, ${BU_DARK}99 100%)` }} />

          <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                <span style={{ color: BU_BLUE }}>Support Butler Athletes.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
                Every purchase you make through the Butler FanPact™ storefront lets you shop the everyday products you already buy — electronics, home goods, pet supplies, kitchen essentials, and more — while directly supporting NIL opportunities and the success of Bulldog student-athletes.
              </p>

              {/* Search Bar */}
              <SearchAutocomplete
                categories={butlerSearchCategories}
                schoolPrefix="/butler"
                accentColor={BU_BLUE}
                accentTextColor={BU_DARK}
                placeholder="Search 50,000+ products that support Butler athletes"
                className="max-w-xl mb-8"
                buttonStyle={{ backgroundColor: BU_BLUE, color: BU_DARK }}
              />

              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#shop-categories">
                  <button
                    className="px-8 py-3.5 font-bold text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                    style={{ backgroundColor: BU_BLUE, color: BU_WHITE }}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Start Shopping
                  </button>
                </a>
                <a href="#shop-categories">
                  <button className="px-8 py-3.5 font-bold text-lg rounded-lg border-2 border-white/40 text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                    Shop Categories
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-white/40 mt-2">
                Unofficial Fan Support Site – Not affiliated with or endorsed by the Butler University.{" "}
                <Link to="/butler/disclaimer" className="hover:underline transition-colors" style={{ color: `${BU_BLUE}99` }}>Full Disclaimer</Link>
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 mt-6 pt-4 border-t border-white/10 max-w-2xl">
                <div className="col-span-2 sm:col-span-1 rounded-xl p-4 border" style={{ backgroundColor: `${BU_BLUE}15`, borderColor: `${BU_BLUE}30` }}>
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4" style={{ color: BU_BLUE }} />
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: BU_BLUE }}>Live NIL</span>
                  </div>
                  <div className="font-display text-2xl lg:text-3xl" style={{ color: BU_BLUE }}>${nilCounter.toLocaleString()}</div>
                  <div className="text-xs text-white/60">Earned by athletes</div>
                </div>
                <div><div className="font-display text-3xl lg:text-4xl" style={{ color: BU_BLUE }}>600+</div><div className="text-sm text-white/60">Athletes</div></div>
                <div><div className="font-display text-3xl lg:text-4xl" style={{ color: BU_BLUE }}>20</div><div className="text-sm text-white/60">Sports</div></div>
                <div><div className="font-display text-3xl lg:text-4xl" style={{ color: BU_BLUE }}>50K+</div><div className="text-sm text-white/60">Products</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2. SHOP BY CATEGORY ===== */}
        <section id="shop-categories" className="py-14 lg:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-2" style={{ color: BU_BLUE }}>
                Start Shopping by Category
              </h2>
              <p className="text-muted-foreground text-lg">Browse thousands of everyday products from trusted brands</p>
              <p className="text-muted-foreground text-base mt-1">You're not spending more — just switching where you shop.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categoryGrid.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.link}
                  className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square border-2 border-transparent"
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = BU_BLUE + "66")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
                >
                  <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: BU_BLUE }}>
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

        {/* ===== 3. FEATURED PRODUCTS ===== */}
        <section className="py-14 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl" style={{ color: BU_BLUE }}>
                  Everyday Essentials Supporting Butler Athletes
                </h2>
                <p className="text-muted-foreground mt-1">Shop the products you already love — every purchase makes a difference</p>
              </div>
              <Link to="/butler/category/electronics" className="hidden md:flex items-center gap-1 font-semibold hover:opacity-70 transition-opacity" style={{ color: BU_BLUE }}>
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
                      <span className="text-xl font-bold" style={{ color: BU_BLUE }}>{product.price}</span>
                      <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">{product.nilContribution} NIL</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link to="/butler/category/electronics" className="inline-flex items-center gap-1 font-semibold" style={{ color: BU_BLUE }}>
                View All Products <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 4. NIL IMPACT TRACKER ===== */}
        <section id="nil-impact" className="py-14 lg:py-20" style={{ backgroundColor: BU_DARK }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-3">
              Butler Fans Are Powering NIL Opportunities
            </h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto">
              Every purchase made through the Butler FanPact storefront contributes to NIL opportunities for Bulldog athletes.
            </p>

            <div className="max-w-lg mx-auto mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 shadow-2xl">
              <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-3">Butler fans have generated</p>
              <p className="text-6xl md:text-7xl font-display font-bold mb-3 leading-none" style={{ color: BU_BLUE }}>
                ${nilCounter.toLocaleString()}
              </p>
              <p className="text-white/80 text-lg">for Bulldog student-athletes through everyday purchases.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white max-w-3xl mx-auto">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-display font-bold" style={{ color: BU_BLUE }}>600+</p>
                <p className="text-white/60 text-sm mt-1">Athletes Supported</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-display font-bold" style={{ color: BU_BLUE }}>1,200+</p>
                <p className="text-white/60 text-sm mt-1">Products Available</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-display font-bold" style={{ color: BU_BLUE }}>38K+</p>
                <p className="text-white/60 text-sm mt-1">Active Fans</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="text-3xl font-display font-bold" style={{ color: BU_BLUE }}>20</p>
                <p className="text-white/60 text-sm mt-1">Sports Programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. TRENDING FOR MISSOURI FANS ===== */}
        <section className="py-14 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-2" style={{ color: BU_BLUE }}>
                Trending for Butler Fans
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
                  <div className="absolute top-3 right-3 bg-white/90 text-xs font-bold px-2 py-1 rounded-full" style={{ color: BU_BLUE }}>
                    Shop Now
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. HOW FANPACT WORKS ===== */}
        <section id="how-it-works" className="py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-2" style={{ color: BU_BLUE }}>
                How FanPact Works
              </h2>
              <p className="text-muted-foreground">Three simple steps to support Butler athletes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { step: 1, icon: ShoppingBag, title: "Shop Everyday Products", desc: "Browse thousands of everyday consumer products from trusted brands." },
                { step: 2, icon: Users, title: "Buy Through Your School Storefront", desc: "Purchases are attributed to the Butler FanPact storefront." },
                { step: 3, icon: DollarSign, title: "Revenue Supports Butler Athletes", desc: "A portion of every purchase supports NIL opportunities for Bulldog student-athletes." },
              ].map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.step} className="text-center bg-card rounded-xl p-6 shadow-sm border border-border">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: `${BU_BLUE}18` }}>
                      <IconComp className="w-7 h-7" style={{ color: BU_BLUE }} />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: BU_BLUE }}>Step {item.step}</div>
                    <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== CTA / EMAIL ===== */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl mb-3" style={{ color: BU_BLUE }}>
              Join the Bulldog Nation
            </h2>
            <p className="text-muted-foreground mb-6">
              Get exclusive deals, track your fan impact, and stay connected with Butler athletics.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": BU_BLUE } as React.CSSProperties}
              />
              <button className="h-12 px-6 font-bold rounded-lg" style={{ backgroundColor: BU_BLUE, color: BU_WHITE }}>
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* ===== FOOTER NAV BAR ===== */}
        <div className="py-3 text-center text-sm" style={{ backgroundColor: BU_DARK }}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 flex-wrap text-white/80">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs" style={{ backgroundColor: BU_BLUE, color: BU_WHITE }}>MU</div>
              <a href="#shop-categories" className="hover:text-white transition-colors">Shop</a>
              <span className="text-white/30">|</span>
              <a href="#nil-impact" className="hover:text-white transition-colors">NIL Impact</a>
              <span className="text-white/30">|</span>
              <Link to="/butler/rewards" className="hover:text-white transition-colors">Fan Rewards</Link>
              <span className="text-white/30">|</span>
              <Link to="/butler/cart" className="hover:text-white transition-colors">My Account</Link>
              <span className="text-white/30">|</span>
              <Link to="/butler/disclaimer" className="hover:text-white transition-colors">Help</Link>
            </div>
          </div>
        </div>
      </main>
      <ButlerFooter />
    </div>
  );
};

export default ButlerHome;
