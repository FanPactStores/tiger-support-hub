import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown, Trophy } from "lucide-react";
import { schools, getSchoolsByConference, getShortName } from "@/data/schools";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
];

const shopCategories = [
  { label: "Electronics", href: "/shop?category=Electronics" },
  { label: "Fashion & Apparel", href: "/shop?category=Fashion" },
  { label: "Home & Garden", href: "/shop?category=Home" },
  { label: "Beauty & Personal Care", href: "/shop?category=Beauty" },
  { label: "Sports & Outdoors", href: "/shop?category=Sports" },
  { label: "Toys & Games", href: "/shop?category=Toys" },
  { label: "Food & Grocery", href: "/shop?category=Food" },
  { label: "Pet Supplies", href: "/shop?category=Pets" },
  { label: "Automotive", href: "/shop?category=Automotive" },
  { label: "Health & Wellness", href: "/shop?category=Health" },
  { label: "Jewelry & Watches", href: "/shop?category=Jewelry" },
  { label: "Merchandise", href: "/shop?category=Merchandise" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav */}
      <nav className="bg-background border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-display font-bold text-primary">FanPact</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 font-medium transition-colors duration-200 ${
                location.pathname === "/" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>

            {/* Schools Dropdown with HoverCard */}
            <HoverCard openDelay={100} closeDelay={200}>
              <HoverCardTrigger asChild>
                <Link
                  to="/schools"
                  className={`flex items-center gap-1 px-4 py-2 font-medium transition-colors duration-200 ${
                    location.pathname === "/schools" ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  <Trophy className="w-4 h-4" />
                  Schools
                  <ChevronDown className="w-4 h-4" />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent
                className="w-[700px] p-0 bg-card border-border shadow-2xl z-[100]"
                align="center"
                side="bottom"
                sideOffset={8}
                avoidCollisions={false}
              >
                <div className="p-4 border-b border-border">
                  <h3 className="text-lg font-display font-bold text-foreground">Select Your School</h3>
                  <p className="text-sm text-muted-foreground">Browse by conference</p>
                </div>
                <div className="grid grid-cols-3 gap-0 max-h-[60vh] overflow-y-auto">
                  {Object.entries(getSchoolsByConference()).map(([conference, conferenceSchools]) => (
                    <div key={conference} className="border-r border-b border-border/30 last:border-r-0">
                      <div className="px-4 py-2 bg-muted/50 sticky top-0">
                        <h4 className="font-bold text-primary text-sm">{conference}</h4>
                      </div>
                      <div className="py-1">
                        {conferenceSchools.map((school) => (
                          <Link
                            key={school.id}
                            to="/schools"
                            className="flex items-center gap-2 px-4 py-1.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            <span
                              className="w-3 h-3 rounded-full shrink-0"
                              style={{ backgroundColor: school.primaryColor }}
                            />
                            <span className="truncate">{getShortName(school.name)}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-border bg-muted/30">
                  <Link
                    to="/schools"
                    className="text-sm text-primary hover:text-primary/80 font-medium"
                  >
                    View all schools →
                  </Link>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* Shop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <Link
                to="/shop"
                className={`flex items-center gap-1 px-4 py-2 font-medium transition-colors duration-200 ${
                  location.pathname === "/shop" ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Shop
                <ChevronDown className="w-4 h-4" />
              </Link>
              {shopDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                  <p className="px-4 py-1 text-xs text-primary uppercase tracking-wider font-semibold">Categories</p>
                  <div className="border-b border-border my-1" />
                  {shopCategories.map((cat) => (
                    <Link
                      key={cat.label}
                      to={cat.href}
                      className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`px-4 py-2 font-medium transition-colors duration-200 ${
                location.pathname === "/about" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>

            <span className="px-4 py-2 font-medium text-muted-foreground cursor-default">
              Sponsors
            </span>

            <span className="px-4 py-2 font-medium text-muted-foreground cursor-default">
              Enterprise
            </span>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link to="/shop" className="hidden md:flex p-2 text-foreground hover:text-primary transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </Link>
            <Link to="/shop" className="p-2 text-foreground hover:text-primary transition-colors flex flex-col items-center" aria-label="Login">
              <User className="w-5 h-5" />
              <span className="text-[10px] hidden sm:block">Login</span>
            </Link>
            <Link to="/shop" className="p-2 text-foreground hover:text-primary transition-colors flex flex-col items-center" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
              <span className="text-[10px] hidden sm:block">Wishlist</span>
            </Link>
            <Link to="/shop" className="relative p-2 text-foreground hover:text-primary transition-colors flex flex-col items-center" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-[10px] hidden sm:block">Cart</span>
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Link>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 py-3">
            <input
              type="text"
              placeholder="Search products, schools, players..."
              className="w-full bg-muted text-foreground placeholder:text-muted-foreground rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <ul className="flex flex-col py-4 px-4 gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-muted ${
                      location.pathname === item.path ? "text-primary bg-muted" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Product Categories Navigation Bar */}
      <div className="bg-secondary border-b border-border hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-0 overflow-x-auto scrollbar-hide">
            {shopCategories.map((cat, i) => (
              <li key={cat.label} className="flex items-center">
                <Link
                  to={cat.href}
                  className="block px-3 py-2 text-xs font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors whitespace-nowrap"
                >
                  {cat.label}
                </Link>
                {i < shopCategories.length - 1 && (
                  <span className="text-foreground/20">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-dark py-1.5 px-4 text-center">
        <p className="text-[11px] text-secondary/60 font-body">
          We donate 50% of net earnings from qualifying purchases to support student-athletes at participating universities.{" "}
          <Link to="/disclaimer" className="text-primary hover:text-gold-dark font-semibold underline underline-offset-2">
            [Full Disclaimer ↓]
          </Link>
        </p>
      </div>
    </header>
  );
}
