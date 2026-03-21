import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingCart, ChevronRight, CreditCard, Shield, Truck, Heart, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import fanpactPennantMark from "@/assets/fanpact-pennant-mark.png";

const IU_CRIMSON = "#990000";
const IU_CREAM = "#EEEDEB";

function calculateNILContribution(price: number) {
  return Math.round(0.5 * (price * 0.25) * 100) / 100;
}

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

const IndianaCart = () => {
  const { items, removeItem, updateQuantity, subtotal, totalItems, clearCart } = useCart();
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shipping = subtotal > 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  const nilContribution = items.reduce(
    (sum, item) => sum + calculateNILContribution(item.price) * item.quantity,
    0
  );

  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center">
                <img src={fanpactPennantMark} alt="FanPact pennant" className="h-10 lg:h-14 w-auto object-contain" />
              </Link>
              <Link to="/indiana" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="font-display text-xl lg:text-2xl text-foreground tracking-wide">INDIANA</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 px-4 py-2 text-foreground hover:opacity-80 font-medium transition-colors duration-200" style={{ color: IU_CRIMSON }}>
                    Shop <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border-border">
                  <DropdownMenuLabel className="text-xs uppercase tracking-wider" style={{ color: IU_CRIMSON }}>Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {shopCategories.map((cat) => (
                    <DropdownMenuItem key={cat.label} asChild>
                      <Link to={cat.href} className="cursor-pointer">{cat.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <Link to="/indiana/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 text-xs rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: IU_CRIMSON }}>
                      {totalItems > 99 ? '99+' : totalItems}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
            <button className="md:hidden text-foreground p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block border-b border-border/50" style={{ backgroundColor: IU_CRIMSON }}>
        <div className="container mx-auto px-4 py-1.5">
          <div className="flex items-center justify-center gap-1 flex-wrap">
            {shopCategories.map((cat, i) => (
              <Link key={cat.label} to={cat.href} className="text-xs text-white/70 hover:text-white transition-colors whitespace-nowrap px-2 py-0.5">
                {cat.label}
                {i < shopCategories.length - 1 && <span className="ml-2 text-white/30">|</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 lg:pt-32">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-3xl text-foreground mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">Start shopping to support Indiana athletes!</p>
              <Link to="/indiana">
                <Button size="lg" className="gap-2 text-white" style={{ backgroundColor: IU_CRIMSON }}>
                  Start Shopping <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-display text-3xl lg:text-4xl text-foreground">Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})</h1>
            <button onClick={clearCart} className="text-sm text-muted-foreground hover:text-destructive transition-colors">Clear Cart</button>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="bg-card border border-border rounded-xl p-4 lg:p-6">
                  <div className="flex gap-4 lg:gap-6">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-4">
                        <div>
                          <span className="text-xs font-medium uppercase tracking-wider" style={{ color: IU_CRIMSON }}>{item.category}</span>
                          <p className="font-semibold text-foreground mt-1 line-clamp-2">{item.name}</p>
                        </div>
                        <p className="font-display text-xl text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-xs mt-1" style={{ color: IU_CRIMSON }}>
                        FanPact NIL Contribution: ${(calculateNILContribution(item.price) * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:text-destructive transition-colors"><Minus className="w-4 h-4" /></button>
                          <span className="w-10 text-center font-semibold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-lg border border-border flex items-center justify-center transition-colors" style={{ borderColor: IU_CRIMSON, color: IU_CRIMSON }}><Plus className="w-4 h-4" /></button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive transition-colors"><Trash2 className="w-4 h-4" />Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-32">
                <h2 className="font-display text-xl text-foreground mb-6">Order Summary</h2>
                <div className="space-y-3 text-sm border-t border-border pt-4">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="text-foreground font-medium">${subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-foreground font-medium">{shipping === 0 ? <span className="text-green-600">FREE</span> : `$${shipping.toFixed(2)}`}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Estimated Tax</span><span className="text-foreground font-medium">${tax.toFixed(2)}</span></div>
                </div>
                <div className="flex justify-between mt-4 pt-4 border-t border-border">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-display text-2xl text-foreground">${total.toFixed(2)}</span>
                </div>

                {/* FanPact NIL Contribution */}
                <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: `${IU_CRIMSON}12` }}>
                  <div className="flex items-center gap-2 mb-1">
                    <Heart className="w-4 h-4" style={{ color: IU_CRIMSON }} />
                    <span className="text-sm font-semibold" style={{ color: IU_CRIMSON }}>FanPact NIL Contribution</span>
                  </div>
                  <p className="text-lg font-bold" style={{ color: IU_CRIMSON }}>${nilContribution.toFixed(2)}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    Calculated from your pre-tax &amp; shipping subtotal to support Hoosier athletes
                  </p>
                </div>

                <Button size="lg" className="w-full mt-6 gap-2 text-white" style={{ backgroundColor: IU_CRIMSON }}
                  onClick={() => toast({ title: "Checkout", description: "Stripe checkout integration coming soon!" })}>
                  <CreditCard className="w-5 h-5" /> Proceed to Checkout
                </Button>
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground"><Shield className="w-4 h-4 text-green-600" /><span>Secure 256-bit SSL encryption</span></div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground"><Truck className="w-4 h-4" style={{ color: IU_CRIMSON }} /><span>Free shipping on orders over $75</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndianaCart;
