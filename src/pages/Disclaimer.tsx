import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <div className="bg-background min-h-screen py-14">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-display font-black text-foreground mb-8">
          FanPact™ <span className="text-primary">Disclaimer</span>
        </h1>

        <div className="prose prose-sm max-w-none space-y-6 text-foreground/80 font-body leading-relaxed">
          <p>
            FanPact™ is a third-party eCommerce platform that enables college sports fans to support participating universities and their student-athletes through everyday purchases made on school-branded storefronts. A portion of the net proceeds from each transaction is directed to the university's designated athletic department or NIL collective.
          </p>

          <p>
            FanPact™ operates independently and is not affiliated with, endorsed by, or officially operated by any university, athletic department, NIL collective, conference, or the NCAA. All revenue flows and allocations are managed through agreements with the respective university's official NIL entity or athletic department. FanPact™ does not guarantee the amount or timing of any funds received by universities, collectives, or student-athletes.
          </p>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-4">Revenue Allocation</h2>
          <p>For each qualifying purchase on a FanPact™ storefront:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Approximately 50% of the net operating earnings (after platform costs, payment processing fees, and other deductions) is directed to the university's athletic department ecosystem or NIL collective for distribution in accordance with applicable NIL rules, university policies, and state/federal law.
            </li>
            <li>
              The remaining portion supports platform operations, development, maintenance, fulfillment, and related expenses.
            </li>
          </ul>

          <h2 className="text-xl font-display font-bold text-foreground mt-8 mb-4">Compliance & Transparency</h2>
          <p>
            All transactions and NIL-related payments comply with current NCAA guidelines, the House v. NCAA settlement terms, and applicable state laws. Universities and NIL collectives are responsible for disclosure reporting (e.g., via NIL Go for deals ≥$600) and ensuring proper distribution to student-athletes. FanPact™ provides attribution data to support fair market value verification.
          </p>

          <p>
            FanPact™ is not responsible for the final distribution of funds, tax treatment, or compliance with individual university or collective policies. Participation in FanPact™ does not constitute endorsement of the platform by any university or athletic program. FanPact™ makes no representations regarding the specific use of funds by any university, collective, or athlete.
          </p>

          <p>
            Purchases made through FanPact™ are processed via standard eCommerce channels and are subject to the platform's terms of service and privacy policy. For questions about fund allocation or NIL compliance at a specific university, please contact the university's athletic department or official NIL collective directly.
          </p>

          <p className="font-semibold text-foreground">
            FanPact™ is a majority veteran-owned business committed to transparency, compliance, and supporting the future of college athletics and student-athlete opportunities.
          </p>

          <div className="border-t border-border pt-6 mt-8 text-xs text-muted-foreground">
            <p>Last updated: March 2026</p>
            <p>© FanPact™ – All Rights Reserved</p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-gold-dark font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
