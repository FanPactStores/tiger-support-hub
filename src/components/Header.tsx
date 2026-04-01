import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Trophy, ChevronDown } from "lucide-react";
import { getSchoolsByConference, getShortName } from "@/data/schools";
import fanpactLogo from "@/assets/FanPact_Logo1.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-background border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-display font-bold text-primary">FanPact</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 font-medium transition-colors duration-200 ${
                location.pathname === "/" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>

            {/* Schools Dropdown */}
            <HoverCard openDelay={100} closeDelay={200}>
              <HoverCardTrigger asChild>
                <a
                  href="/#conferences"
                  className="flex items-center gap-1 px-4 py-2 font-bold text-primary transition-colors duration-200 hover:text-primary/80"
                >
                  <Trophy className="w-4 h-4" />
                  Select Your School
                  <ChevronDown className="w-4 h-4" />
                </a>
              </HoverCardTrigger>
              <HoverCardContent
                className="w-[700px] p-0 bg-card border-border shadow-2xl z-[100]"
                align="center"
                side="bottom"
                sideOffset={8}
                avoidCollisions={false}
              >
                <div className="p-4 border-b border-border">
                  <h3 className="text-lg font-display font-bold text-foreground">Select Your School</h3>
                  <p className="text-sm text-muted-foreground">Browse by conference</p>
                </div>
                <div className="grid grid-cols-3 gap-0 max-h-[60vh] overflow-y-auto">
                  {Object.entries(getSchoolsByConference()).map(([conference, conferenceSchools]) => (
                    <div key={conference} className="border-r border-b border-border/30 last:border-r-0">
                      <div className="px-4 py-2 bg-muted/50 sticky top-0">
                        <h4 className="font-bold text-primary text-sm">{conference}</h4>
                      </div>
                      <div className="py-1">
                        {conferenceSchools.map((school) => (
                          <Link
                            key={school.id}
                            to={school.id === "missouri" ? "/mizzou" : school.id === "indiana" ? "/indiana" : "#"}
                            className="flex items-center gap-2 px-4 py-1.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            <span
                              className="w-3 h-3 rounded-full shrink-0"
                              style={{ backgroundColor: school.primaryColor }}
                            />
                            <span className="truncate">{getShortName(school.name)}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </HoverCardContent>
            </HoverCard>

            <Link
              to="/about"
              className={`px-4 py-2 font-medium transition-colors duration-200 ${
                location.pathname === "/about" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <ul className="flex flex-col py-4 px-4 gap-1">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-muted ${
                      location.pathname === item.path ? "text-primary bg-muted" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/#conferences"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-bold text-primary hover:bg-muted"
                >
                  🏆 Select Your School
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Disclaimer Banner */}
      <div className="bg-dark py-1.5 px-4 text-center">
        <p className="text-[11px] text-secondary/60 font-body">
          We donate 50% of net earnings from qualifying purchases to support student-athletes at participating universities.{" "}
          <Link to="/disclaimer" className="text-primary hover:text-gold-dark font-semibold underline underline-offset-2">
            Full Disclaimer
          </Link>
        </p>
      </div>
    </header>
  );
}
