import MizzouHeader from "@/components/mizzou/MizzouHeader";
import MizzouFooter from "@/components/mizzou/MizzouFooter";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingCart, ChevronRight, CreditCard, Shield, Truck, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const MZ_GOLD = "#F1B82D";
const MZ_BLACK = "#000000";

function calculateNILContribution(price: number) {
  return Math.round(0.5 * (price * 0.25) * 100) / 100;
}

const MizzouCart = () => {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();
  const { toast } = useToast();
  const [promoCode, setPromoCode] = useState("");
  const shipping = subtotal > 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  const nilContribution = items.reduce(
    (sum, item) => sum + calculateNILContribution(item.price) * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <MizzouHeader />
        <main className="pt-28 lg:pt-32">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-3xl text-foreground mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">Start shopping to support Missouri athletes!</p>
              <Link to="/mizzou">
                <Button variant="gold" size="lg" className="gap-2">Start Shopping <ChevronRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </div>
        </main>
        <MizzouFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <MizzouHeader />
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
                          <span className="text-xs font-medium uppercase tracking-wider" style={{ color: MZ_GOLD }}>{item.category}</span>
                          <p className="font-semibold text-foreground mt-1 line-clamp-2">{item.name}</p>
                        </div>
                        <p className="font-display text-xl text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-xs mt-1" style={{ color: MZ_GOLD }}>
                        FanPact NIL Contribution: ${(calculateNILContribution(item.price) * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"><Minus className="w-4 h-4" /></button>
                          <span className="w-10 text-center font-semibold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"><Plus className="w-4 h-4" /></button>
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
                <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: `${MZ_GOLD}12` }}>
                  <div className="flex items-center gap-2 mb-1">
                    <Heart className="w-4 h-4" style={{ color: MZ_GOLD }} />
                    <span className="text-sm font-semibold" style={{ color: MZ_GOLD }}>FanPact NIL Contribution</span>
                  </div>
                  <p className="text-lg font-bold" style={{ color: MZ_GOLD }}>${nilContribution.toFixed(2)}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    Calculated from your pre-tax &amp; shipping subtotal to support Missouri athletes
                  </p>
                </div>

                <Button variant="gold" size="lg" className="w-full mt-6 gap-2" onClick={() => toast({ title: "Checkout", description: "Stripe checkout integration coming soon!" })}>
                  <CreditCard className="w-5 h-5" /> Proceed to Checkout
                </Button>
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground"><Shield className="w-4 h-4 text-green-600" /><span>Secure 256-bit SSL encryption</span></div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground"><Truck className="w-4 h-4 text-primary" /><span>Free shipping on orders over $75</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MizzouFooter />
    </div>
  );
};

export default MizzouCart;
