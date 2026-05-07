import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-dark text-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-display font-bold text-primary">FanPact</span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Empowering fans to support university athletics through everyday shopping. 50% of net earnings shared.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Shop", to: "/shop" },
                { label: "Schools/Teams", to: "/schools-teams" },
                { label: "About", to: "/about" },
                { label: "NIL Dashboard", to: "/mizzou/nil-dashboard" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary mb-4">Support</h4>
            <ul className="space-y-2">
              {["Contact Us", "FAQ", "Privacy Policy", "Terms of Service", "Disclaimer"].map((link) => (
                <li key={link}>
                  {link === "Disclaimer" ? (
                    <Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </Link>
                  ) : (
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {link}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary mb-4">Connect</h4>
            <div className="flex gap-4">
              {["X (Twitter)", "Instagram", "Facebook"].map((social) => (
                <span key={social} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {social.split(" ")[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-muted mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            FanPact.net © 2026. Empowering fans to support college athletes through everyday shopping.
          </p>
        </div>
      </div>
    </footer>
  );
}
