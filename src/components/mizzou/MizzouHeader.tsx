import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, ChevronDown, Search, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import fanpactPennantMark from "@/assets/fanpact-pennant-mark.png";
import { sportRosters } from "@/data/sportsRosters";

const sportsData = [
  { name: "Football", href: "/mizzou/football" },
  { name: "Men's Basketball", href: "/mizzou/mens-basketball" },
  { name: "Women's Basketball", href: "/mizzou/womens-basketball" },
  { name: "Baseball", href: "/mizzou/baseball" },
  { name: "Softball", href: "/mizzou/softball" },
  { name: "Soccer", href: "/mizzou/soccer" },
  { name: "Women's Volleyball", href: "/mizzou/volleyball" },
  { name: "Wrestling", href: "/mizzou/wrestling" },
];

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

const MizzouHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center">
                <img src={fanpactPennantMark} alt="FanPact pennant" className="h-10 lg:h-14 w-auto object-contain" />
              </Link>
              <Link to="/mizzou" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="font-display text-xl lg:text-2xl text-foreground tracking-wide">MISSOURI</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary font-medium transition-colors duration-200">
                    Sports <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border-border">
                  <DropdownMenuLabel className="text-primary text-xs uppercase tracking-wider">Teams</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {sportsData.map((sport) => (
                    <DropdownMenuItem key={sport.name} asChild>
                      <Link to={sport.href} className="cursor-pointer">{sport.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/mizzou/rewards" className="px-4 py-2 text-foreground hover:text-primary font-medium transition-colors duration-200">Rewards</Link>
              <Link to="/mizzou/members" className="px-4 py-2 text-foreground hover:text-primary font-medium transition-colors duration-200">Members</Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 px-4 py-2 text-foreground hover:text-primary font-medium transition-colors duration-200">
                    Shop <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border-border">
                  <DropdownMenuLabel className="text-primary text-xs uppercase tracking-wider">Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {shopCategories.map((cat) => (
                    <DropdownMenuItem key={cat.label} asChild>
                      <Link to={cat.href} className="cursor-pointer">{cat.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/mizzou/sponsors" className="px-4 py-2 text-foreground hover:text-primary font-medium transition-colors duration-200">Sponsors</Link>
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="icon"><Search className="w-5 h-5" /></Button>
              <Link to="/mizzou/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                      {totalItems > 99 ? '99+' : totalItems}
                    </span>
                  )}
                </Button>
              </Link>
              <Button variant="ghost" size="icon"><User className="w-5 h-5" /></Button>
              <Button variant="gold" size="default">Join FanPact</Button>
            </div>

            <button className="md:hidden text-foreground p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Categories Banner */}
      <div className="bg-foreground/95 backdrop-blur-sm border-b border-border/50 hidden md:block">
        <div className="container mx-auto px-4 py-1.5">
          <div className="flex items-center justify-center gap-1 flex-wrap">
            {shopCategories.map((cat, i) => (
              <Link key={cat.label} to={cat.href} className="text-xs text-background/70 hover:text-primary transition-colors whitespace-nowrap px-2 py-0.5">
                {cat.label}
                {i < shopCategories.length - 1 && <span className="ml-2 text-background/30">|</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="p-4 space-y-2">
            {sportsData.map((sport) => (
              <Link key={sport.name} to={sport.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-foreground hover:text-primary rounded-lg">{sport.name}</Link>
            ))}
            <div className="border-t border-border pt-2 mt-2">
              {shopCategories.slice(0, 6).map((cat) => (
                <Link key={cat.label} to={cat.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-foreground hover:text-primary rounded-lg text-sm">{cat.label}</Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default MizzouHeader;
