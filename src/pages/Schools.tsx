import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

const schools = [
  { name: "Mizzou Tigers", conference: "SEC", location: "Columbia, MO", featured: true, desc: "University of Missouri Athletics — Home of the Tigers in the SEC." },
  { name: "Alabama Crimson Tide", conference: "SEC", location: "Tuscaloosa, AL", featured: false, desc: "Coming soon to FanPact." },
  { name: "Georgia Bulldogs", conference: "SEC", location: "Athens, GA", featured: false, desc: "Coming soon to FanPact." },
  { name: "Ohio State Buckeyes", conference: "Big Ten", location: "Columbus, OH", featured: false, desc: "Coming soon to FanPact." },
  { name: "Michigan Wolverines", conference: "Big Ten", location: "Ann Arbor, MI", featured: false, desc: "Coming soon to FanPact." },
  { name: "Texas Longhorns", conference: "SEC", location: "Austin, TX", featured: false, desc: "Coming soon to FanPact." },
];

const SchoolsPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-dark py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-display font-bold text-secondary">
            Schools & <span className="text-primary">Teams</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-2">Find your school and start supporting student-athletes.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school) => (
            <div
              key={school.name}
              className={`relative bg-card rounded-lg border p-6 transition-all duration-200 ${
                school.featured
                  ? "border-primary ring-2 ring-primary/20 shadow-lg"
                  : "border-border opacity-70"
              }`}
            >
              {school.featured && (
                <span className="absolute -top-2.5 left-4 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-0.5 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> Beta Partner
                </span>
              )}
              <h3 className="font-display font-bold text-xl text-card-foreground mt-2">{school.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{school.conference} • {school.location}</p>
              <p className="text-sm text-muted-foreground mt-3">{school.desc}</p>
              {school.featured ? (
                <Link
                  to="/shop"
                  className="mt-4 inline-flex items-center gap-1 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg gold-glow-hover transition-all"
                >
                  Support Mizzou Tigers <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="mt-4 inline-block text-xs text-muted-foreground border border-border rounded-lg px-4 py-2">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolsPage;
