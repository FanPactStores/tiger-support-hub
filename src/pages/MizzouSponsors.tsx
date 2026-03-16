import MizzouHeader from "@/components/mizzou/MizzouHeader";
import MizzouFooter from "@/components/mizzou/MizzouFooter";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, MapPin, Store } from "lucide-react";
import nikeLogo from "@/assets/logo-nike.png";
import gatoradeLogo from "@/assets/logo-gatorade.png";
import underArmourLogo from "@/assets/logo-under-armour.png";
import oakleyLogo from "@/assets/logo-oakley.png";

const nationalBrands = [
  { id: "nike", name: "Nike", industry: "Athletic Apparel", logo: nikeLogo },
  { id: "gatorade", name: "Gatorade", industry: "Sports Nutrition", logo: gatoradeLogo },
  { id: "under-armour", name: "Under Armour", industry: "Athletic Apparel", logo: underArmourLogo },
  { id: "oakley", name: "Oakley", industry: "Eyewear & Accessories", logo: oakleyLogo },
];

const localSponsors = [
  { id: "shakespeares", name: "Shakespeare's Pizza", type: "Restaurant", location: "Columbia, MO" },
  { id: "harpos", name: "Harpo's", type: "Entertainment", location: "Columbia, MO" },
  { id: "bbq", name: "Booches Billiard Hall", type: "Restaurant", location: "Columbia, MO" },
  { id: "campus-auto", name: "Tiger Auto", type: "Automotive", location: "Columbia, MO" },
];

const MizzouSponsors = () => (
  <div className="min-h-screen bg-background">
    <MizzouHeader />
    <main className="pt-20">
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-foreground via-foreground to-foreground/90">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Product Partners</span>
          <h1 className="font-display text-5xl lg:text-7xl text-background mt-4">SPONSORS & BRANDS</h1>
          <p className="text-background/70 text-lg mt-6 max-w-2xl mx-auto">Shop products from our official brand partners.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <h2 className="font-display text-3xl text-foreground">NATIONAL BRAND PARTNERS</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nationalBrands.map((brand) => (
              <div key={brand.id} className="bg-card rounded-xl border p-6 hover:border-primary/50 transition-all group">
                <div className="h-20 flex items-center justify-center mb-4">
                  <img src={brand.logo} alt={brand.name} className="max-h-full max-w-[140px] object-contain" />
                </div>
                <h3 className="font-display text-lg text-foreground group-hover:text-primary">{brand.name}</h3>
                <p className="text-xs text-muted-foreground uppercase">{brand.industry}</p>
                <Button variant="gold" size="sm" className="w-full mt-4">Shop Products</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="font-display text-3xl text-foreground">LOCAL ADVERTISERS</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {localSponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-card rounded-xl border p-6 hover:border-primary/50 transition-all">
                <Store className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-lg text-foreground">{sponsor.name}</h3>
                <p className="text-xs text-muted-foreground uppercase">{sponsor.type}</p>
                <p className="text-sm text-muted-foreground mt-1">{sponsor.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-primary-foreground">BECOME A SPONSOR</h2>
          <p className="text-primary-foreground/80 mt-4">Partner with FanPact Mizzou and reach Tiger fans.</p>
          <Button variant="dark" size="lg" className="mt-6">Contact Us</Button>
        </div>
      </section>
    </main>
    <MizzouFooter />
  </div>
);

export default MizzouSponsors;
