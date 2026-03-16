import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export const MizzouDisclaimerBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="w-full bg-foreground/90 backdrop-blur-sm border-b-2 border-primary/60 z-40 relative">
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-background/95 text-sm md:text-base font-semibold leading-relaxed">
              We donate <span className="text-primary font-bold">80%</span> of net earnings from qualifying purchases to support Missouri student-athletes. Thank you for shopping with purpose!{" "}
              <Link to="/mizzou/disclaimer" className="text-primary underline hover:text-background transition-colors">(full disclaimer)</Link>
            </p>
          </div>
          <button onClick={() => setDismissed(true)} className="flex-shrink-0 p-1 text-background/60 hover:text-background transition-colors rounded-full hover:bg-background/10" aria-label="Dismiss disclaimer">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
