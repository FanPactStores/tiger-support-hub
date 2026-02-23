import { Link } from "react-router-dom";
import { ArrowRight, Users, TrendingUp, Shield } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-dark py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-display font-bold text-secondary mb-4">
            About <span className="text-primary">FanPact</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            FanPact empowers fans to support university athletics through everyday shopping.{" "}
            <span className="text-primary font-semibold">80% of net earnings</span> are shared with schools via NIL collectives.
          </p>
        </div>
      </div>

      {/* Mission pillars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "Transparent", desc: "Every dollar is tracked. See exactly where your purchases go through transparent dashboards and real-time reporting." },
              { icon: TrendingUp, title: "Impactful", desc: "80% of net operating earnings flow directly to schools. No hidden fees, no middlemen taking oversized cuts." },
              { icon: Users, title: "Community", desc: "Join thousands of fans who shop with purpose. Together, we're building a new model for supporting student-athletes." },
            ].map((pillar) => (
              <div key={pillar.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-8">
            The Revenue <span className="text-primary">Model</span>
          </h2>
          <div className="bg-card rounded-xl border border-border p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-display font-black text-primary">80%</div>
                <p className="text-sm text-muted-foreground mt-1">To School/Athletes</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-border" />
              <div className="text-center">
                <div className="text-5xl font-display font-black text-foreground">20%</div>
                <p className="text-sm text-muted-foreground mt-1">FanPact Operations</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6 leading-relaxed">
              Of net operating earnings after costs. Revenue is shared with schools through NIL collectives, 
              ensuring athletes benefit directly. Partner integrations like Learfield provide additional uplift potential.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-secondary mb-4">
            Ready to Make an <span className="text-primary">Impact</span>?
          </h2>
          <p className="text-muted-foreground mb-8">Join the fan movement. Every purchase matters.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-lg gold-glow-hover transition-all hover:bg-gold-dark"
          >
            Start Shopping <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
