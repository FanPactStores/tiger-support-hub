export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  image: string;
  isMizzouBranded: boolean;
  isSponsored?: boolean;
  sponsorName?: string;
}

export const categories = [
  "All",
  "Apparel",
  "Footwear",
  "Tech & Gadgets",
  "Sports & Outdoors",
  "Accessories",
  "Home & Living",
];

export const brands = [
  "Nike",
  "Adidas",
  "Under Armour",
  "Columbia",
  "Apple",
  "Samsung",
  "Yeti",
  "North Face",
];

export const products: Product[] = [
  { id: "1", title: "Black & Gold Classic Hoodie", price: 59.99, category: "Apparel", brand: "Nike", rating: 4.8, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop", isMizzouBranded: true, isSponsored: true, sponsorName: "Learfield" },
  { id: "2", title: "Tiger Stripe Running Shoes", price: 129.99, category: "Footwear", brand: "Nike", rating: 4.6, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", isMizzouBranded: true },
  { id: "3", title: "Wireless Noise-Canceling Headphones", price: 199.99, category: "Tech & Gadgets", brand: "Apple", rating: 4.9, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", isMizzouBranded: false },
  { id: "4", title: "Gold Accent Backpack", price: 79.99, category: "Accessories", brand: "Under Armour", rating: 4.5, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", isMizzouBranded: true },
  { id: "5", title: "Performance Training Shorts", price: 44.99, category: "Apparel", brand: "Adidas", rating: 4.3, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop", isMizzouBranded: false },
  { id: "6", title: "Insulated Water Bottle 32oz", price: 34.99, category: "Sports & Outdoors", brand: "Yeti", rating: 4.7, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop", isMizzouBranded: true },
  { id: "7", title: "Smart Fitness Watch", price: 249.99, category: "Tech & Gadgets", brand: "Samsung", rating: 4.4, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", isMizzouBranded: false },
  { id: "8", title: "All-Weather Rain Jacket", price: 89.99, category: "Apparel", brand: "Columbia", rating: 4.6, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop", isMizzouBranded: false, isSponsored: true, sponsorName: "Learfield" },
  { id: "9", title: "Tailgate Camp Chair", price: 49.99, category: "Sports & Outdoors", brand: "North Face", rating: 4.2, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop", isMizzouBranded: true },
  { id: "10", title: "Premium Denim Jeans", price: 69.99, category: "Apparel", brand: "Nike", rating: 4.5, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop", isMizzouBranded: false },
  { id: "11", title: "Wireless Charging Pad", price: 29.99, category: "Tech & Gadgets", brand: "Samsung", rating: 4.1, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop", isMizzouBranded: false },
  { id: "12", title: "Tiger Logo Snapback Cap", price: 27.99, category: "Accessories", brand: "Nike", rating: 4.8, image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=400&h=400&fit=crop", isMizzouBranded: true },
  { id: "13", title: "Mizzou Stadium Blanket", price: 39.99, category: "Home & Living", brand: "Columbia", rating: 4.7, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop", isMizzouBranded: true },
  { id: "14", title: "Athletic Crew Socks 6-Pack", price: 19.99, category: "Apparel", brand: "Under Armour", rating: 4.3, image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=400&fit=crop", isMizzouBranded: false },
  { id: "15", title: "Portable Bluetooth Speaker", price: 59.99, category: "Tech & Gadgets", brand: "Samsung", rating: 4.5, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", isMizzouBranded: false },
  { id: "16", title: "Training Duffel Bag", price: 54.99, category: "Sports & Outdoors", brand: "Adidas", rating: 4.4, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", isMizzouBranded: false },
  { id: "17", title: "Black & Gold Sunglasses", price: 24.99, category: "Accessories", brand: "Nike", rating: 4.2, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop", isMizzouBranded: true },
  { id: "18", title: "Graphic Performance Tee", price: 34.99, category: "Apparel", brand: "Under Armour", rating: 4.6, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", isMizzouBranded: true },
  { id: "19", title: "Laptop Sleeve 15-inch", price: 39.99, category: "Tech & Gadgets", brand: "North Face", rating: 4.3, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop", isMizzouBranded: false },
  { id: "20", title: "Stainless Steel Travel Mug", price: 22.99, category: "Home & Living", brand: "Yeti", rating: 4.8, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop", isMizzouBranded: true },
];

export function calculateDonation(price: number): number {
  return Math.round(0.5 * (price * 0.25) * 100) / 100; // 0.5 * (price * 0.25)
}
