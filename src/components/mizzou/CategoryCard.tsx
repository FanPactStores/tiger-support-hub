import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  image: string;
  productCount?: number;
  link?: string;
}

const CategoryCard = ({ name, image, productCount, link = "#" }: CategoryCardProps) => {
  return (
    <Link to={link} className="group relative aspect-square rounded-xl overflow-hidden bg-muted block">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6">
        <h3 className="font-display text-xl lg:text-2xl text-background group-hover:text-primary transition-colors">{name}</h3>
        {productCount !== undefined && <p className="text-background/70 text-sm mt-1">{productCount} products</p>}
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-xl transition-colors duration-300" />
    </Link>
  );
};

export default CategoryCard;
