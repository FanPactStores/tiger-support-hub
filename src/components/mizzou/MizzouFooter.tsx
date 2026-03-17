import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const MizzouFooter = () => {
  const footerLinks = {
    Platform: [
      { label: "Athletes", href: "/mizzou#athletes" },
      { label: "Teams", href: "/mizzou/football" },
      { label: "Shop", href: "/mizzou#shop" },
      { label: "Sponsors", href: "/mizzou/sponsors" },
    ],
    Support: [
      { label: "FAQ", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
    ],
    Legal: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Legal & Disclaimer", href: "/disclaimer" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground pt-16 lg:pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-background/10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-display text-xl text-primary-foreground">FP</span>
              </div>
              <div>
                <span className="font-display text-xl text-background tracking-wide">FANPACT</span>
                <span className="block text-xs text-primary font-semibold -mt-1">MISSOURI</span>
              </div>
            </div>
            <p className="text-background/60 text-sm mb-6">
              Connecting fans with Missouri athletes through exclusive merchandise and authentic engagement.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-full bg-background/5 hover:bg-primary flex items-center justify-center text-background/60 hover:text-primary-foreground transition-all duration-300">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-lg text-background mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((linkItem) => (
                  <li key={linkItem.label}>
                    {linkItem.href.startsWith("/") ? (
                      <Link to={linkItem.href} className="text-background/60 hover:text-primary text-sm transition-colors">{linkItem.label}</Link>
                    ) : (
                      <a href={linkItem.href} className="text-background/60 hover:text-primary text-sm transition-colors">{linkItem.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-6 border-b border-background/10">
          <p className="text-background/50 text-xs font-semibold leading-relaxed text-center max-w-2xl mx-auto">
            Unofficial Fan Support Site – Fanpact is not affiliated with or endorsed by the University of Missouri. We donate 80% of net earnings from purchases here to support Missouri student-athletes.{" "}
            <Link to="/mizzou/disclaimer" className="text-primary hover:underline">Full Disclaimer →</Link>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4">
          <p className="text-background/40 text-sm">© 2025 FanPact Missouri. All rights reserved.</p>
          <p className="text-background/40 text-sm flex items-center gap-2">Powered by <span className="text-primary font-semibold">TechTide</span></p>
        </div>
      </div>
    </footer>
  );
};

export default MizzouFooter;
