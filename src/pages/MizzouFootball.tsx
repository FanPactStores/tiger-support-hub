import MizzouHeader from "@/components/mizzou/MizzouHeader";
import MizzouFooter from "@/components/mizzou/MizzouFooter";
import CategoryCard from "@/components/mizzou/CategoryCard";
import { ArrowLeft, Users, Trophy, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import footballHero from "@/assets/football-hero.jpg";
import playerStephenHall from "@/assets/player-stephen-hall.jpg";

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

const rosterPlayers = [
  { id: "stephen-hall", name: "Stephen Hall", number: "0", position: "CB", year: "R-Sr.", height: "6' 0\"", weight: "202 lbs", hometown: "Memphis, Tenn.", image: playerStephenHall },
  { id: "donovan-olugbode", name: "Donovan Olugbode", number: "1", position: "WR", year: "Fr.", height: "6' 2\"", weight: "207 lbs", hometown: "Chicago, Ill." },
  { id: "toriano-pride-jr", name: "Toriano Pride Jr.", number: "2", position: "CB", year: "Sr.", height: "5' 11\"", weight: "188 lbs", hometown: "St. Louis, Mo." },
  { id: "kevin-coleman-jr", name: "Kevin Coleman Jr.", number: "3", position: "WR", year: "Sr.", height: "5' 11\"", weight: "180 lbs", hometown: "St. Louis, Mo." },
  { id: "khalil-jacobs", name: "Khalil Jacobs", number: "5", position: "LB", year: "Sr.", height: "6' 1\"", weight: "228 lbs", hometown: "Jackson, Miss." },
  { id: "jalen-catalon", name: "Jalen Catalon", number: "6", position: "S", year: "Gr.", height: "5' 10\"", weight: "200 lbs", hometown: "Mansfield, Texas" },
];

const teamStats = [
  { icon: Users, label: "Athletes", value: "85+" },
  { icon: Trophy, label: "Championships", value: "12" },
  { icon: Calendar, label: "Season", value: "2024" },
];

const MizzouFootball = () => {
  return (
    <div className="min-h-screen bg-background">
      <MizzouHeader />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={footballHero} alt="Mizzou Football Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative container mx-auto px-4 py-32 z-10">
          <Link to="/mizzou" className="inline-flex items-center gap-2 text-background/80 hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary font-semibold uppercase tracking-wider text-sm rounded-full mb-4">Mizzou Athletics</span>
            <h1 className="font-display text-5xl lg:text-7xl text-background leading-tight">FOOTBALL</h1>
            <p className="text-background/80 text-lg lg:text-xl mt-4 max-w-2xl">Support Mizzou Tigers Football and shop from your favorite athletes.</p>
            <div className="flex flex-wrap gap-8 mt-8">
              {teamStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="p-3 bg-primary/20 rounded-lg"><stat.icon className="w-5 h-5 text-primary" /></div>
                  <div><div className="font-display text-2xl text-background">{stat.value}</div><div className="text-background/60 text-sm">{stat.label}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Shop by Category</span>
            <h2 className="font-display text-4xl lg:text-6xl text-foreground mt-2">BROWSE PRODUCTS</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((category) => (<CategoryCard key={category.name} {...category} />))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">2025 Football Roster</span>
            <h2 className="font-display text-4xl lg:text-6xl text-foreground mt-2">MEET THE PLAYERS</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
            {rosterPlayers.map((player) => (
              <Link key={player.id} to={`/mizzou/athlete/${player.id}`} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg block">
                <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground font-display text-xl w-10 h-10 flex items-center justify-center rounded-lg">{player.number}</div>
                <div className="aspect-[3/4] overflow-hidden bg-muted/20">
                  {player.image ? (
                    <img src={player.image} alt={player.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground"><span className="font-display text-6xl">{player.number}</span></div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">{player.name}</h3>
                  <p className="text-muted-foreground text-sm">{player.position} • {player.year}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MizzouFooter />
    </div>
  );
};

export default MizzouFootball;
