import { Link } from "react-router-dom";
import { products, calculateDonation } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: (typeof products)[0];
}

export function ProductCard({ product }: ProductCardProps) {
  const donation = calculateDonation(product.price);

  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-lg gold-glow-hover">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.isSponsored && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold">
            Featured by {product.sponsorName}
          </Badge>
        )}
        {product.isMizzouBranded && (
          <Badge className="absolute top-2 right-2 bg-dark text-secondary text-[10px] border border-primary">
            Mizzou
          </Badge>
        )}
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-sm leading-tight mb-1 line-clamp-2 text-card-foreground">
          {product.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-2">{product.brand}</p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-card-foreground">${product.price.toFixed(2)}</span>
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
            Your Donation: ${donation.toFixed(2)}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? "text-primary" : "text-border"}`}>
              ★
            </span>
          ))}
          <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
        </div>

        <button className="w-full bg-primary text-primary-foreground font-semibold text-sm py-2.5 rounded-lg transition-all duration-200 hover:bg-gold-dark gold-glow-hover">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
