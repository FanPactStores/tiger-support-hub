import { Link } from "react-router-dom";
import CategoryCard from "@/components/mizzou/CategoryCard";
import AthleteCard from "@/components/mizzou/AthleteCard";
import MizzouHeader from "@/components/mizzou/MizzouHeader";
import MizzouFooter from "@/components/mizzou/MizzouFooter";
import { MizzouDisclaimerBanner } from "@/components/mizzou/MizzouDisclaimerBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Mail, Search } from "lucide-react";
import { useState, useEffect } from "react";

import heroFootball from "@/assets/hero-football.jpg";
import heroStadium from "@/assets/hero-stadium-bg.jpg";
import footballHero from "@/assets/football-hero.jpg";
import athlete1 from "@/assets/athlete-1.jpg";
import athlete2 from "@/assets/athlete-2.jpg";
import athlete3 from "@/assets/athlete-3.jpg";
import logoGatorade from "@/assets/logo-gatorade.png";

import categoryElectronics from "@/assets/category-electronics.jpg";
import categoryFashion from "@/assets/category-fashion.jpg";
import categoryHome from "@/assets/category-home.jpg";
import categoryBeauty from "@/assets/category-beauty.jpg";
import categorySports from "@/assets/category-sports.jpg";
import categoryToys from "@/assets/category-toys.jpg";
import categoryFood from "@/assets/category-food.jpg";
import categoryPets from "@/assets/category-pets.jpg";
import categoryAutomotive from "@/assets/category-automotive.jpg";
import categoryHealth from "@/assets/category-health.jpg";
import categoryJewelry from "@/assets/category-jewelry.jpg";
import categoryMerchandise from "@/assets/category-merchandise.jpg";

const collageImages = [heroFootball, heroStadium, footballHero, heroFootball, heroStadium, footballHero];

const categories = [
  { name: "Electronics", image: categoryElectronics, productCount: 1250, link: "/mizzou/category/electronics" },
  { name: "Fashion & Apparel", image: categoryFashion, productCount: 3420, link: "/mizzou/category/fashion" },
  { name: "Home & Garden", image: categoryHome, productCount: 2180, link: "/mizzou/category/home" },
  { name: "Beauty & Personal Care", image: categoryBeauty, productCount: 1890, link: "/mizzou/category/beauty" },
  { name: "Sports & Outdoors", image: categorySports, productCount: 1560, link: "/mizzou/category/sports" },
  { name: "Toys & Games", image: categoryToys, productCount: 980, link: "/mizzou/category/toys" },
  { name: "Food & Grocery", image: categoryFood, productCount: 2340, link: "/mizzou/category/food" },
  { name: "Pet Supplies", image: categoryPets, productCount: 720, link: "/mizzou/category/pets" },
  { name: "Automotive", image: categoryAutomotive, productCount: 1120, link: "/mizzou/category/automotive" },
  { name: "Health & Wellness", image: categoryHealth, productCount: 1650, link: "/mizzou/category/health" },
  { name: "Jewelry & Watches", image: categoryJewelry, productCount: 890, link: "/mizzou/category/jewelry" },
  { name: "Merchandise", image: categoryMerchandise, productCount: 450, link: "/mizzou/category/merchandise" },
];

const athletes = [
  { name: "Marcus Thompson", sport: "Basketball", position: "Point Guard", image: athlete1 },
  { name: "Sarah Mitchell", sport: "Soccer", position: "Forward", image: athlete2 },
  { name: "Jake Williams", sport: "Baseball", position: "Pitcher", image: athlete3 },
];

const teams = [
  { name: "Football", icon: "🏈", athletes: 85, link: "/mizzou/football" },
  { name: "Basketball", icon: "🏀", athletes: 15, link: "#" },
  { name: "Baseball", icon: "⚾", athletes: 35, link: "#" },
  { name: "Soccer", icon: "⚽", athletes: 28, link: "#" },
  { name: "Volleyball", icon: "🏐", athletes: 18, link: "/mizzou/volleyball" },
  { name: "Track & Field", icon: "🏃", athletes: 45, link: "#" },
  { name: "Swimming", icon: "🏊", athletes: 32, link: "#" },
  { name: "Tennis", icon: "🎾", athletes: 12, link: "#" },
];

const sponsors = [
  { name: "Nike", tier: "Premier" },
  { name: "Gatorade", tier: "Premier", logo: logoGatorade },
  { name: "State Farm", tier: "Gold" },
  { name: "Coca-Cola", tier: "Gold" },
  { name: "Under Armour", tier: "Silver" },
  { name: "Toyota", tier: "Silver" },
];

const MizzouHome = () => {
  const [nilCounter, setNilCounter] = useState(127450);

  useEffect(() => {
    const interval = setInterval(() => {
      setNilCounter(prev => prev + Math.floor(Math.random() * 15) + 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <MizzouHeader />
      <main className="pt-28 lg:pt-32">
        <MizzouDisclaimerBanner />

        {/* Hero Section */}
        <section className="relative min-h-[45vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="flex h-full animate-collage-scroll" style={{ width: `${collageImages.length * 100}vw` }}>
              {collageImages.map((img, i) => (
                <img key={i} src={img} alt="" className="h-full object-cover flex-shrink-0" style={{ width: '100vw' }} />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/40" />
          </div>

          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 pt-10 lg:pt-14">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-background leading-[0.9] mb-5 w-full tracking-tight">
              <span className="block">SUPPORT MISSOURI ATHLETICS AND</span>
              <span className="block text-primary">STUDENT-ATHLETES WITH EVERY PURCHASE</span>
            </h1>

            <div className="flex items-center gap-4 mb-4 w-full">
              <Button variant="hero" size="xl" className="group shrink-0" onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}>
                Shop Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-background/70 w-full mb-3">
              By simply shopping, for everyday products, you support your favorite Tiger teams & Players at no additional cost.
            </p>

            <p className="text-xs text-background/50 font-semibold w-full mb-4">
              Unofficial Fan Support Site – Not affiliated with or endorsed by the University of Missouri.{" "}
              <Link to="/mizzou/disclaimer" className="text-primary hover:underline">Full Disclaimer</Link>
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 mt-4 pt-4 border-t border-background/10 max-w-2xl">
              <div className="col-span-2 sm:col-span-1 bg-primary/10 rounded-xl p-4 border border-primary/20">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">Live NIL</span>
                </div>
                <div className="font-display text-2xl lg:text-3xl text-primary">${nilCounter.toLocaleString()}</div>
                <div className="text-xs text-background/60">Earned by athletes</div>
              </div>
              <div><div className="font-display text-3xl lg:text-4xl text-primary">600+</div><div className="text-sm text-background/60">Athletes</div></div>
              <div><div className="font-display text-3xl lg:text-4xl text-primary">20</div><div className="text-sm text-background/60">Sports</div></div>
              <div><div className="font-display text-3xl lg:text-4xl text-primary">50K+</div><div className="text-sm text-background/60">Products</div></div>
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section id="shop" className="py-20 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Shop by Category</span>
              <h2 className="font-display text-4xl lg:text-6xl text-foreground mt-2">BROWSE PRODUCTS</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Discover everyday essentials and premium products across all categories. Support your favorite athletes with every purchase.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.name} {...category} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="dark" size="lg" className="group">View All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Button>
            </div>
          </div>
        </section>

        {/* Athletes Section */}
        <section id="athletes" className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
              <div>
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Meet the Tigers</span>
                <h2 className="font-display text-4xl lg:text-6xl text-foreground mt-2">FEATURED ATHLETES</h2>
              </div>
              <Button variant="ghost" className="mt-6 lg:mt-0 text-foreground group self-start lg:self-auto">
                View All Athletes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {athletes.map((athlete) => (
                <AthleteCard key={athlete.name} {...athlete} />
              ))}
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section id="teams" className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">All Sports</span>
              <h2 className="font-display text-4xl lg:text-6xl text-foreground mt-2">EXPLORE TEAMS</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {teams.map((team) => (
                <Link key={team.name} to={team.link} className="group relative bg-card hover:bg-primary/5 border border-border hover:border-primary/50 rounded-xl p-6 lg:p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg block">
                  <div className="text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{team.icon}</div>
                  <h3 className="font-display text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors">{team.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{team.athletes} Athletes</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-20 lg:py-24 bg-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Partners</span>
              <h2 className="font-display text-4xl lg:text-5xl text-background mt-2">OFFICIAL SPONSORS</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
              {sponsors.map((sponsor) => (
                <div key={sponsor.name} className="group relative bg-background/5 hover:bg-primary/10 border border-background/10 hover:border-primary/30 rounded-xl p-6 lg:p-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="text-center">
                    {sponsor.logo ? (
                      <img src={sponsor.logo} alt={sponsor.name} className="h-12 lg:h-16 w-auto mx-auto mb-2 group-hover:scale-105 transition-transform" />
                    ) : (
                      <span className="font-display text-2xl lg:text-3xl text-background/80 group-hover:text-primary transition-colors">{sponsor.name}</span>
                    )}
                    <span className="block text-xs text-background/40 uppercase tracking-wider mt-2">{sponsor.tier} Partner</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider rounded-full mb-6">Stay Connected</span>
              <h2 className="font-display text-4xl lg:text-6xl text-foreground mb-6">JOIN THE TIGER NATION</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">Get exclusive access to new athlete merchandise, limited drops, and special offers.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input type="email" placeholder="Enter your email" className="w-full h-14 pl-12 pr-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                </div>
                <Button variant="hero" size="xl" className="shrink-0">Subscribe <ArrowRight className="w-5 h-5" /></Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MizzouFooter />
    </div>
  );
};

export default MizzouHome;
