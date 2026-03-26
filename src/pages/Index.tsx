import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fanpact.jpg";
import logoSec from "@/assets/logo-sec.png";
import logoBigten from "@/assets/logo-bigten.png";
import logoBig12 from "@/assets/logo-big12.png";
import logoAcc from "@/assets/logo-acc.png";
import logoBigeast from "@/assets/logo-bigeast.png";
import { getSchoolsByConference, getShortName } from "@/data/schools";
import {
  ShoppingBag,
  Heart,
  BarChart3,
  Trophy,
  ChevronDown,
  Package,
  Users,
  TrendingUp,
} from "lucide-react";

const conferences = [
  { name: "SEC", logo: logoSec, key: "SEC" },
  { name: "Big Ten", logo: logoBigten, key: "Big Ten" },
  { name: "Big 12", logo: logoBig12, key: "Big 12" },
  { name: "ACC", logo: logoAcc, key: "ACC" },
  { name: "Big East", logo: logoBigeast, key: "Big East" },
];

const HomePage = () => {
  const schoolsByConference = getSchoolsByConference();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="College sports stadium packed with fans"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/55 to-dark/30" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-secondary mb-5 leading-tight uppercase tracking-tight">
            Where Every Purchase Powers{" "}
            <span className="text-primary text-gold-glow">Your College Sports Teams & NIL</span>
          </h1>
          <p className="text-base sm:text-lg text-secondary/80 mb-8 font-body max-w-2xl mx-auto">
            Choose your school and shop everyday products that support student-athletes.
           </p>
           <p className="text-sm sm:text-base text-secondary/60 mb-8 font-body max-w-2xl mx-auto">
             You're not spending more — just switching where you shop.
           </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#conferences"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground font-display font-bold text-base px-8 py-4 rounded-lg transition-all duration-300 hover:bg-secondary/90 shadow-lg"
            >
              <Trophy className="w-5 h-5 text-primary" />
              Select Your School
              <ChevronDown className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-secondary text-secondary font-display font-bold text-base px-8 py-4 rounded-lg transition-all duration-300 hover:bg-secondary/10"
            >
              How FanPact Works
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-dark py-5 border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {[
              { icon: ShoppingBag, text: "Shop Everyday Products" },
              { icon: Users, text: "Support Student-Athletes" },
              { icon: BarChart3, text: "Track Your Impact" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-semibold text-secondary/90">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer — single clean version */}
      <div className="bg-dark/90 py-2 px-4 text-center">
        <p className="text-xs text-secondary/60 font-body">
          We donate 50% of net earnings from qualifying purchases to support student-athletes at participating universities.{" "}
          <Link to="/disclaimer" className="text-primary hover:text-gold-dark font-semibold underline underline-offset-2">
            Full Disclaimer
          </Link>
        </p>
      </div>

      {/* Select Your School By Conference */}
      <section id="conferences" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center text-foreground mb-3">
            Select Your School <span className="text-primary">By Conference</span>
          </h2>
          <p className="text-center text-sm text-muted-foreground mb-10 max-w-lg mx-auto">
            Pick your school to enter its dedicated storefront. Every purchase supports that school's athletes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {conferences.map((conf) => {
              const confSchools = schoolsByConference[conf.key] || [];
              return (
                <div
                  key={conf.name}
                  className="bg-card border border-border rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:border-primary gold-glow-hover"
                >
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <img
                      src={conf.logo}
                      alt={`${conf.name} conference logo`}
                      className="w-16 h-16 object-contain"
                    />
                    <h3 className="font-display font-bold text-lg text-card-foreground">
                      {conf.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {confSchools.length} school{confSchools.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="border-t border-border pt-3 space-y-0.5 max-h-52 overflow-y-auto">
                    {confSchools.map((school) => (
                      <Link
                        key={school.id}
                        to={school.id === "missouri" ? "/mizzou" : school.id === "indiana" ? "/indiana" : "#"}
                        className="flex items-center gap-2 px-2 py-1.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 rounded transition-colors"
                      >
                        <span
                          className="w-3 h-3 rounded-full shrink-0 border border-border"
                          style={{ backgroundColor: school.primaryColor }}
                        />
                        <span className="truncate">{getShortName(school.name)}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            More schools launching soon →
          </p>
        </div>
      </section>

      {/* How FanPact Works */}
      <section id="how-it-works" className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-10">
            How <span className="text-primary">FanPact</span> Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Package, step: "1", title: "Select Your School", desc: "Choose your university to enter its dedicated storefront." },
              { icon: ShoppingBag, step: "2", title: "Shop Everyday Products", desc: "Browse thousands of products from trusted brands — tech, home, fitness, and more." },
              { icon: TrendingUp, step: "3", title: "Support Student-Athletes", desc: "A portion of every purchase funds NIL opportunities for your school's athletes." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {item.step}</span>
                <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-display font-bold text-foreground mb-4">Ready to make an impact?</h3>
          <a
            href="#conferences"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 gold-glow-hover hover:bg-gold-dark"
          >
            <Trophy className="w-5 h-5" />
            Select Your School
          </a>
        </div>
      </section>

      {/* Unofficial disclaimer */}
      <div className="bg-secondary border-t border-border py-4 px-4 text-center">
        <p className="text-xs text-muted-foreground/70 max-w-2xl mx-auto italic">
          Unofficial Fan Support Site — Not affiliated with, endorsed by, or officially operated by any university, athletic department, NIL collective, conference, or the NCAA.{" "}
          <Link to="/disclaimer" className="text-primary hover:text-gold-dark font-semibold not-italic underline underline-offset-2">
            Full Disclaimer
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
