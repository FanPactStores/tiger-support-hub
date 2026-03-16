import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Schools/Teams", path: "/schools" },
  { label: "About", path: "/about" },
];

const productCategories = [
  "Apparel & Footwear & Accessories",
  "Electronics & Tech Accessories",
  "Home & Kitchen & Garden",
  "Health & Beauty",
  "Sports & Outdoors",
  "Travel & Bags",
  "Toys & Games",
  "Baby & Toddler & Kids",
  "Pets",
  "Seasonal & Special Occasions",
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav */}
      <nav className="bg-dark text-secondary border-b border-dark-muted">
        <div className="container mx-auto flex items-center justify-between h-14 px-4 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-display font-bold text-primary">FanPact</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl items-center">
            <div className="relative w-full flex">
              <div className="flex items-center bg-dark-muted rounded-l-lg border border-dark-muted px-3">
                <span className="text-xs font-semibold text-secondary/70 whitespace-nowrap flex items-center gap-1">
                  CATEGORIES <ChevronDown className="w-3 h-3" />
                </span>
              </div>
              <input
                type="text"
                placeholder="Search Your Product..."
                className="flex-1 bg-dark-surface text-secondary placeholder:text-muted-foreground px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary border-y border-dark-muted"
              />
              <button className="bg-primary text-primary-foreground px-4 rounded-r-lg hover:bg-gold-dark transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link to="/shop" className="p-2 text-secondary hover:text-primary transition-colors flex flex-col items-center" aria-label="Login">
              <User className="w-5 h-5" />
              <span className="text-[10px] hidden sm:block">Login</span>
            </Link>
            <Link to="/shop" className="p-2 text-secondary hover:text-primary transition-colors flex flex-col items-center" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
              <span className="text-[10px] hidden sm:block">Wishlist</span>
            </Link>
            <Link to="/shop" className="relative p-2 text-secondary hover:text-primary transition-colors flex flex-col items-center" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-[10px] hidden sm:block">Cart</span>
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Link>
            <button
              className="md:hidden p-2 text-secondary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="md:hidden border-t border-dark-muted bg-dark-surface px-4 py-3">
            <div className="container mx-auto">
              <input
                type="text"
                placeholder="Search products, schools, players..."
                className="w-full bg-dark-muted text-secondary placeholder:text-muted-foreground rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-dark-muted bg-dark-surface">
            <ul className="flex flex-col py-4 px-4 gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-dark-muted ${
                      location.pathname === item.path ? "text-primary bg-dark-muted" : "text-secondary"
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
          <ul className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {productCategories.map((cat) => (
              <li key={cat}>
                <Link
                  to={`/shop?category=${encodeURIComponent(cat)}`}
                  className="block px-3 py-2.5 text-xs font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors whitespace-nowrap"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sub-banner */}
      <div className="bg-primary text-primary-foreground text-center py-1.5 px-4">
        <p className="text-xs sm:text-sm font-semibold tracking-wide">
          🏈 Shop & Support Mizzou Tigers! <span className="font-bold">80% of Profits</span> Fuel Student-Athletes.
        </p>
      </div>
    </header>
  );
}
