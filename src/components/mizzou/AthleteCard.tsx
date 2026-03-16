import { Instagram, Twitter } from "lucide-react";

interface AthleteCardProps {
  name: string;
  sport: string;
  position: string;
  image: string;
  instagramHandle?: string;
  twitterHandle?: string;
}

const AthleteCard = ({ name, sport, position, image, instagramHandle, twitterHandle }: AthleteCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent opacity-80" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">{sport}</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-2xl text-background group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-background/60 text-sm mt-1">{position}</p>
      </div>
    </div>
  );
};

export default AthleteCard;
