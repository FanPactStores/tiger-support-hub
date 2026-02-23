import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Schools/Teams", path: "/schools" },
  { label: "About", path: "/about" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav */}
      <nav className="bg-dark text-secondary border-b border-dark-muted">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-display font-bold text-primary">FanPact</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                    location.pathname === item.path ? "text-primary" : "text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-secondary hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link to="/shop" className="p-2 text-secondary hover:text-primary transition-colors" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </Link>
            <Link to="/shop" className="relative p-2 text-secondary hover:text-primary transition-colors" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Link>
            <button className="p-2 text-secondary hover:text-primary transition-colors" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button
              className="md:hidden p-2 text-secondary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-dark-muted bg-dark-surface px-4 py-3">
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

      {/* Sub-banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <p className="text-xs sm:text-sm font-semibold tracking-wide">
          🏈 Shop & Support Mizzou Tigers! <span className="font-bold">80% of Profits</span> Fuel Student-Athletes.
        </p>
      </div>
    </header>
  );
}
