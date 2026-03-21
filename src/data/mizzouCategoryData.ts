export interface CategoryProduct {
  id: string;
  name: string;
  brand: string;
  isNameBrand: boolean;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  subcategory: string;
  nilDonation: number;
}

export interface SubCategory {
  slug: string;
  label: string;
}

export interface CategoryFilter {
  key: string;
  label: string;
  options: string[];
}

export interface CategoryData {
  slug: string;
  name: string;
  description: string;
  subcategories: SubCategory[];
  filters: CategoryFilter[];
  products: CategoryProduct[];
}

function don(price: number) {
  return Math.round(0.5 * (price * 0.25) * 100) / 100;
}

let _pid = 1000;
function pid() {
  return `cp-${_pid++}`;
}

// ─── ELECTRONICS ──────────────────────────────────────────
const electronics: CategoryData = {
  slug: "electronics",
  name: "Electronics",
  description: "Shop top-rated electronics from leading brands — every purchase supports Missouri athletes.",
  subcategories: [
    { slug: "headphones-earbuds", label: "Headphones & Earbuds" },
    { slug: "speakers", label: "Speakers" },
    { slug: "phone-accessories", label: "Phone Accessories" },
    { slug: "tablets-ereaders", label: "Tablets & E-Readers" },
    { slug: "smart-home", label: "Smart Home" },
    { slug: "chargers-cables", label: "Chargers & Cables" },
  ],
  filters: [
    { key: "priceRange", label: "Price Range", options: ["Under $25", "$25–$50", "$50–$100", "$100–$200", "$200+"] },
    { key: "brand", label: "Brand", options: ["Sony", "Apple", "Samsung", "JBL", "Anker", "Bose", "Amazon", "Google"] },
    { key: "condition", label: "Condition", options: ["New", "Renewed", "Open Box"] },
    { key: "rating", label: "Customer Rating", options: ["4★ & Up", "3★ & Up"] },
  ],
  products: [
    { id: pid(), name: "Sony WH-1000XM5 Wireless Headphones", brand: "Sony", isNameBrand: true, price: 348.00, rating: 4.8, reviews: 12847, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop", subcategory: "headphones-earbuds", nilDonation: don(348) },
    { id: pid(), name: "Apple AirPods Pro (2nd Gen)", brand: "Apple", isNameBrand: true, price: 249.99, rating: 4.9, reviews: 34521, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&h=600&fit=crop", subcategory: "headphones-earbuds", nilDonation: don(249.99) },
    { id: pid(), name: "JBL Charge 5 Portable Speaker", brand: "JBL", isNameBrand: true, price: 179.95, rating: 4.7, reviews: 8932, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop", subcategory: "speakers", nilDonation: don(179.95) },
    { id: pid(), name: "Bose SoundLink Flex Speaker", brand: "Bose", isNameBrand: true, price: 149.00, rating: 4.6, reviews: 6241, image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=600&fit=crop", subcategory: "speakers", nilDonation: don(149) },
    { id: pid(), name: "Anker 65W USB-C Charger", brand: "Anker", isNameBrand: true, price: 27.99, rating: 4.7, reviews: 15632, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop", subcategory: "chargers-cables", nilDonation: don(27.99) },
    { id: pid(), name: "Samsung Galaxy Tab S9", brand: "Samsung", isNameBrand: true, price: 449.99, rating: 4.6, reviews: 4521, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop", subcategory: "tablets-ereaders", nilDonation: don(449.99) },
    { id: pid(), name: "Amazon Echo Dot (5th Gen)", brand: "Amazon", isNameBrand: true, price: 49.99, rating: 4.5, reviews: 23456, image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=600&h=600&fit=crop", subcategory: "smart-home", nilDonation: don(49.99) },
    { id: pid(), name: "Google Nest Hub (2nd Gen)", brand: "Google", isNameBrand: true, price: 99.99, rating: 4.4, reviews: 7832, image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&h=600&fit=crop", subcategory: "smart-home", nilDonation: don(99.99) },
    { id: pid(), name: "ProMax Wireless Earbuds", brand: "ProMax", isNameBrand: false, price: 24.99, rating: 4.1, reviews: 3421, image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&h=600&fit=crop", subcategory: "headphones-earbuds", nilDonation: don(24.99) },
    { id: pid(), name: "TechLine 10ft Braided USB-C Cable 3-Pack", brand: "TechLine", isNameBrand: false, price: 12.99, rating: 4.3, reviews: 8761, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop", subcategory: "chargers-cables", nilDonation: don(12.99) },
    { id: pid(), name: "Apple iPad (10th Gen)", brand: "Apple", isNameBrand: true, price: 349.00, rating: 4.8, reviews: 18234, image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600&h=600&fit=crop", subcategory: "tablets-ereaders", nilDonation: don(349) },
    { id: pid(), name: "GripTech Magnetic Phone Mount", brand: "GripTech", isNameBrand: false, price: 15.99, rating: 4.2, reviews: 5632, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop", subcategory: "phone-accessories", nilDonation: don(15.99) },
  ],
};

// ─── FASHION & APPAREL ────────────────────────────────────
const fashion: CategoryData = {
  slug: "fashion",
  name: "Fashion & Apparel",
  description: "Top fashion picks from name-brand labels — look great while supporting Mizzou NIL.",
  subcategories: [
    { slug: "mens-clothing", label: "Men's Clothing" },
    { slug: "womens-clothing", label: "Women's Clothing" },
    { slug: "shoes", label: "Shoes" },
    { slug: "outerwear", label: "Outerwear" },
    { slug: "activewear", label: "Activewear" },
    { slug: "accessories", label: "Accessories" },
  ],
  filters: [
    { key: "priceRange", label: "Price Range", options: ["Under $25", "$25–$50", "$50–$100", "$100+"] },
    { key: "brand", label: "Brand", options: ["Nike", "Adidas", "Under Armour", "Levi's", "Champion", "Hanes"] },
    { key: "size", label: "Size", options: ["XS", "S", "M", "L", "XL", "2XL"] },
    { key: "gender", label: "Gender", options: ["Men", "Women", "Unisex"] },
  ],
  products: [
    { id: pid(), name: "Nike Dri-FIT Training Tee", brand: "Nike", isNameBrand: true, price: 35.00, rating: 4.7, reviews: 8234, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop", subcategory: "mens-clothing", nilDonation: don(35) },
    { id: pid(), name: "Adidas Ultraboost Running Shoes", brand: "Adidas", isNameBrand: true, price: 189.99, rating: 4.8, reviews: 12456, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop", subcategory: "shoes", nilDonation: don(189.99) },
    { id: pid(), name: "Levi's 501 Original Fit Jeans", brand: "Levi's", isNameBrand: true, price: 69.50, rating: 4.6, reviews: 15678, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop", subcategory: "mens-clothing", nilDonation: don(69.50) },
    { id: pid(), name: "Under Armour Tech Polo", brand: "Under Armour", isNameBrand: true, price: 39.99, rating: 4.5, reviews: 5432, image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=600&fit=crop", subcategory: "mens-clothing", nilDonation: don(39.99) },
    { id: pid(), name: "Champion Reverse Weave Hoodie", brand: "Champion", isNameBrand: true, price: 60.00, rating: 4.7, reviews: 9876, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop", subcategory: "outerwear", nilDonation: don(60) },
    { id: pid(), name: "Nike Air Force 1 '07", brand: "Nike", isNameBrand: true, price: 115.00, rating: 4.9, reviews: 28345, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop", subcategory: "shoes", nilDonation: don(115) },
    { id: pid(), name: "Adidas Tiro Track Pants", brand: "Adidas", isNameBrand: true, price: 45.00, rating: 4.5, reviews: 7654, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop", subcategory: "activewear", nilDonation: don(45) },
    { id: pid(), name: "ComfortFit Women's Yoga Leggings", brand: "ComfortFit", isNameBrand: false, price: 28.99, rating: 4.3, reviews: 4321, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop", subcategory: "activewear", nilDonation: don(28.99) },
    { id: pid(), name: "Nike Heritage86 Cap", brand: "Nike", isNameBrand: true, price: 24.00, rating: 4.6, reviews: 6543, image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=600&fit=crop", subcategory: "accessories", nilDonation: don(24) },
    { id: pid(), name: "UrbanEdge Women's Puffer Jacket", brand: "UrbanEdge", isNameBrand: false, price: 54.99, rating: 4.2, reviews: 2134, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop", subcategory: "outerwear", nilDonation: don(54.99) },
    { id: pid(), name: "Hanes EcoSmart Fleece Sweatshirt", brand: "Hanes", isNameBrand: true, price: 16.00, rating: 4.4, reviews: 19876, image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=600&fit=crop", subcategory: "mens-clothing", nilDonation: don(16) },
    { id: pid(), name: "StridePro Casual Sneakers", brand: "StridePro", isNameBrand: false, price: 42.99, rating: 4.0, reviews: 1876, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop", subcategory: "shoes", nilDonation: don(42.99) },
  ],
};

// ─── HOME & GARDEN ────────────────────────────────────────
const home: CategoryData = {
  slug: "home",
  name: "Home & Garden",
  description: "Upgrade your space with top home brands — each purchase gives back to Mizzou athletes.",
  subcategories: [
    { slug: "furniture", label: "Furniture" },
    { slug: "decor", label: "Décor" },
    { slug: "bedding", label: "Bedding" },
    { slug: "storage-organization", label: "Storage & Organization" },
    { slug: "garden-outdoor", label: "Garden & Outdoor" },
    { slug: "lighting", label: "Lighting" },
  ],
  filters: [
    { key: "priceRange", label: "Price Range", options: ["Under $25", "$25–$50", "$50–$100", "$100–$200", "$200+"] },
    { key: "brand", label: "Brand", options: ["Rubbermaid", "KitchenAid", "Yankee Candle", "Threshold", "SimpleHuman"] },
    { key: "room", label: "Room", options: ["Bedroom", "Living Room", "Bathroom", "Kitchen", "Outdoor"] },
    { key: "material", label: "Material", options: ["Wood", "Metal", "Fabric", "Plastic", "Glass"] },
  ],
  products: [
    { id: pid(), name: "Yankee Candle Large Jar — Autumn Wreath", brand: "Yankee Candle", isNameBrand: true, price: 29.49, rating: 4.7, reviews: 8743, image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=600&fit=crop", subcategory: "decor", nilDonation: don(29.49) },
    { id: pid(), name: "Rubbermaid Brilliance Food Storage Set", brand: "Rubbermaid", isNameBrand: true, price: 37.99, rating: 4.6, reviews: 12345, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop", subcategory: "storage-organization", nilDonation: don(37.99) },
    { id: pid(), name: "SimpleHuman Sensor Trash Can", brand: "SimpleHuman", isNameBrand: true, price: 79.99, rating: 4.8, reviews: 6789, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop", subcategory: "storage-organization", nilDonation: don(79.99) },
    { id: pid(), name: "Casaluna Linen Duvet Cover Set", brand: "Casaluna", isNameBrand: false, price: 89.99, rating: 4.5, reviews: 3456, image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop", subcategory: "bedding", nilDonation: don(89.99) },
    { id: pid(), name: "GE Cync Smart LED Light Bulbs 4-Pack", brand: "GE", isNameBrand: true, price: 34.99, rating: 4.3, reviews: 5678, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop", subcategory: "lighting", nilDonation: don(34.99) },
    { id: pid(), name: "Weber Spirit II E-310 Gas Grill", brand: "Weber", isNameBrand: true, price: 449.00, rating: 4.7, reviews: 4567, image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&h=600&fit=crop", subcategory: "garden-outdoor", nilDonation: don(449) },
    { id: pid(), name: "HomeVibe Floating Wall Shelves Set", brand: "HomeVibe", isNameBrand: false, price: 32.99, rating: 4.4, reviews: 2345, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop", subcategory: "furniture", nilDonation: don(32.99) },
    { id: pid(), name: "CozyNest Sherpa Throw Blanket", brand: "CozyNest", isNameBrand: false, price: 24.99, rating: 4.6, reviews: 6789, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop", subcategory: "bedding", nilDonation: don(24.99) },
    { id: pid(), name: "Scotts Turf Builder Lawn Food", brand: "Scotts", isNameBrand: true, price: 28.97, rating: 4.5, reviews: 8234, image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&h=600&fit=crop", subcategory: "garden-outdoor", nilDonation: don(28.97) },
    { id: pid(), name: "Threshold Table Lamp with Shade", brand: "Threshold", isNameBrand: false, price: 42.00, rating: 4.3, reviews: 1987, image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop", subcategory: "lighting", nilDonation: don(42) },
    { id: pid(), name: "Artisan Ceramic Vase Set", brand: "Artisan Home", isNameBrand: false, price: 38.50, rating: 4.4, reviews: 1543, image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop", subcategory: "decor", nilDonation: don(38.50) },
    { id: pid(), name: "KitchenAid Classic Mixing Bowls", brand: "KitchenAid", isNameBrand: true, price: 29.99, rating: 4.7, reviews: 4321, image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=600&fit=crop", subcategory: "storage-organization", nilDonation: don(29.99) },
  ],
};

// ─── BEAUTY & PERSONAL CARE ──────────────────────────────
const beauty: CategoryData = {
  slug: "beauty",
  name: "Beauty & Personal Care",
  description: "Premium skincare, haircare, and grooming essentials — shop beauty, support Mizzou.",
  subcategories: [
    { slug: "skincare", label: "Skincare" },
    { slug: "haircare", label: "Haircare" },
    { slug: "makeup", label: "Makeup" },
    { slug: "fragrances", label: "Fragrances" },
    { slug: "mens-grooming", label: "Men's Grooming" },
    { slug: "bath-body", label: "Bath & Body" },
  ],
  filters: [
    { key: "priceRange", label: "Price Range", options: ["Under $15", "$15–$30", "$30–$50", "$50+"] },
    { key: "brand", label: "Brand", options: ["CeraVe", "Neutrogena", "Dove", "Old Spice", "Olay", "L'Oréal"] },
    { key: "skinType", label: "Skin Type", options: ["Oily", "Dry", "Combination", "Sensitive", "Normal"] },
    { key: "concern", label: "Concern", options: ["Anti-Aging", "Acne", "Moisturizing", "Sun Protection", "Brightening"] },
  ],
  products: [
    { id: pid(), name: "CeraVe Moisturizing Cream 16oz", brand: "CeraVe", isNameBrand: true, price: 17.39, rating: 4.8, reviews: 45231, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop", subcategory: "skincare", nilDonation: don(17.39) },
    { id: pid(), name: "Neutrogena Hydro Boost Gel-Cream", brand: "Neutrogena", isNameBrand: true, price: 19.97, rating: 4.6, reviews: 21345, image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=600&h=600&fit=crop", subcategory: "skincare", nilDonation: don(19.97) },
    { id: pid(), name: "Dove Deep Moisture Body Wash", brand: "Dove", isNameBrand: true, price: 8.99, rating: 4.7, reviews: 32456, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop", subcategory: "bath-body", nilDonation: don(8.99) },
    { id: pid(), name: "Old Spice Fiji Body Wash", brand: "Old Spice", isNameBrand: true, price: 11.97, rating: 4.5, reviews: 18976, image: "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=600&h=600&fit=crop", subcategory: "mens-grooming", nilDonation: don(11.97) },
    { id: pid(), name: "L'Oréal Voluminous Mascara", brand: "L'Oréal", isNameBrand: true, price: 9.99, rating: 4.4, reviews: 14567, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop", subcategory: "makeup", nilDonation: don(9.99) },
    { id: pid(), name: "Olay Regenerist Micro-Sculpting Cream", brand: "Olay", isNameBrand: true, price: 28.94, rating: 4.6, reviews: 11234, image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=600&fit=crop", subcategory: "skincare", nilDonation: don(28.94) },
    { id: pid(), name: "GlowUp Vitamin C Serum", brand: "GlowUp", isNameBrand: false, price: 14.99, rating: 4.3, reviews: 5678, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop", subcategory: "skincare", nilDonation: don(14.99) },
    { id: pid(), name: "TRESemmé Keratin Smooth Shampoo", brand: "TRESemmé", isNameBrand: true, price: 6.99, rating: 4.4, reviews: 9876, image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&h=600&fit=crop", subcategory: "haircare", nilDonation: don(6.99) },
    { id: pid(), name: "Aqua Mist Body Spray Set", brand: "Aqua Mist", isNameBrand: false, price: 19.99, rating: 4.1, reviews: 2345, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop", subcategory: "fragrances", nilDonation: don(19.99) },
    { id: pid(), name: "Gillette Fusion5 Razor Starter Kit", brand: "Gillette", isNameBrand: true, price: 12.97, rating: 4.5, reviews: 15432, image: "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=600&h=600&fit=crop", subcategory: "mens-grooming", nilDonation: don(12.97) },
    { id: pid(), name: "SilkGlow Leave-In Conditioner", brand: "SilkGlow", isNameBrand: false, price: 11.49, rating: 4.2, reviews: 3456, image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&h=600&fit=crop", subcategory: "haircare", nilDonation: don(11.49) },
    { id: pid(), name: "Dr. Bronner's Pure-Castile Liquid Soap", brand: "Dr. Bronner's", isNameBrand: true, price: 17.99, rating: 4.7, reviews: 8765, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop", subcategory: "bath-body", nilDonation: don(17.99) },
  ],
};

// ─── SPORTS & OUTDOORS ───────────────────────────────────
const sports: CategoryData = {
  slug: "sports",
  name: "Sports & Outdoors",
  description: "Gear up with top fitness and outdoor brands — every order supports Mizzou athletes.",
  subcategories: [
    { slug: "exercise-equipment", label: "Exercise Equipment" },
    { slug: "camping-hiking", label: "Camping & Hiking" },
    { slug: "team-sports", label: "Team Sports" },
    { slug: "water-sports", label: "Water Sports" },
    { slug: "cycling", label: "Cycling" },
    { slug: "outdoor-games", label: "Outdoor Games" },
  ],
  filters: [
    { key: "priceRange", label: "Price Range", options: ["Under $25", "$25–$50", "$50–$100", "$100–$200", "$200+"] },
    { key: "brand", label: "Brand", options: ["Yeti", "Coleman", "Nike", "Wilson", "Spalding", "The North Face"] },
    { key: "activity", label: "Activity", options: ["Running", "Weight Training", "Hiking", "Camping", "Swimming", "Cycling"] },
    { key: "rating", label: "Customer Rating", options: ["4★ & Up", "3★ & Up"] },
  ],
  products: [
    { id: pid(), name: "Yeti Rambler 26oz Bottle", brand: "Yeti", isNameBrand: true, price: 40.00, rating: 4.8, reviews: 15678, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop", subcategory: "exercise-equipment", nilDonation: don(40) },
    { id: pid(), name: "Coleman Sundome 4-Person Tent", brand: "Coleman", isNameBrand: true, price: 79.99, rating: 4.5, reviews: 8765, image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=600&fit=crop", subcategory: "camping-hiking", nilDonation: don(79.99) },
    { id: pid(), name: "Wilson NCAA Official Basketball", brand: "Wilson", isNameBrand: true, price: 29.99, rating: 4.7, reviews: 6543, image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=600&fit=crop", subcategory: "team-sports", nilDonation: don(29.99) },
    { id: pid(), name: "The North Face Jester Backpack", brand: "The North Face", isNameBrand: true, price: 69.00, rating: 4.6, reviews: 12345, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop", subcategory: "camping-hiking", nilDonation: don(69) },
    { id: pid(), name: "Spalding TF-1000 Volleyball", brand: "Spalding", isNameBrand: true, price: 44.99, rating: 4.5, reviews: 2345, image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&h=600&fit=crop", subcategory: "team-sports", nilDonation: don(44.99) },
    { id: pid(), name: "Nike Resistance Bands Set", brand: "Nike", isNameBrand: true, price: 24.99, rating: 4.4, reviews: 5678, image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&h=600&fit=crop", subcategory: "exercise-equipment", nilDonation: don(24.99) },
    { id: pid(), name: "FlexFit Adjustable Dumbbell Set", brand: "FlexFit", isNameBrand: false, price: 149.99, rating: 4.3, reviews: 3456, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop", subcategory: "exercise-equipment", nilDonation: don(149.99) },
    { id: pid(), name: "Speedo Unisex Swim Goggles", brand: "Speedo", isNameBrand: true, price: 15.00, rating: 4.6, reviews: 7890, image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=600&fit=crop", subcategory: "water-sports", nilDonation: don(15) },
    { id: pid(), name: "Schwinn Hybrid Bike Helmet", brand: "Schwinn", isNameBrand: true, price: 29.97, rating: 4.4, reviews: 4567, image: "https://images.unsplash.com/photo-1557803175-a7e0e437cf7c?w=600&h=600&fit=crop", subcategory: "cycling", nilDonation: don(29.97) },
    { id: pid(), name: "GoSports Cornhole Set", brand: "GoSports", isNameBrand: false, price: 59.99, rating: 4.5, reviews: 6789, image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop", subcategory: "outdoor-games", nilDonation: don(59.99) },
    { id: pid(), name: "TrailMaster Trekking Poles", brand: "TrailMaster", isNameBrand: false, price: 34.99, rating: 4.2, reviews: 2134, image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=600&fit=crop", subcategory: "camping-hiking", nilDonation: don(34.99) },
    { id: pid(), name: "Intex Explorer K2 Kayak", brand: "Intex", isNameBrand: true, price: 129.99, rating: 4.3, reviews: 3456, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=600&fit=crop", subcategory: "water-sports", nilDonation: don(129.99) },
  ],
};

// ─── TOYS & GAMES ─────────────────────────────────────────
const toys: CategoryData = {
  slug: "toys",
  name: "Toys & Games",
  description: "Fun for all ages — shop top toy brands while giving back to Missouri athletes.",
  subcategories: [
    { slug: "board-games", label: "Board Games" },
    { slug: "action-figures", label: "Action Figures" },
    { slug: "building-sets", label: "Building Sets" },
    { slug: "outdoor-toys", label: "Outdoor Toys" },
    { slug: "puzzles", label: "Puzzles" },
    { slug: "video-games", label: "Video Games" },
  ],
  filters: [
    { key: "priceRange", label: "Price Range", options: ["Under $15", "$15–$30", "$30–$50", "$50–$100", "$100+"] },
    { key: "brand", label: "Brand", options: ["LEGO", "Hasbro", "Mattel", "Nintendo", "Nerf", "Fisher-Price"] },
    { key: "ageRange", label: "Age Range", options: ["0–2 Years", "3–5 Years", "6–8 Years", "9–12 Years", "13+ Years", "Adult"] },
    { key: "type", label: "Type", options: ["Educational", "Creative", "Active Play", "Strategy", "Collectible"] },
  ],
  products: [
    { id: pid(), name: "LEGO Classic Creative Bricks Set", brand: "LEGO", isNameBrand: true, price: 34.99, rating: 4.8, reviews: 23456, image: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=600&h=600&fit=crop", subcategory: "building-sets", nilDonation: don(34.99) },
    { id: pid(), name: "Hasbro Monopoly Classic Edition", brand: "Hasbro", isNameBrand: true, price: 19.99, rating: 4.6, reviews: 15678, image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=600&h=600&fit=crop", subcategory: "board-games", nilDonation: don(19.99) },
    { id: pid(), name: "Nintendo Switch Pro Controller", brand: "Nintendo", isNameBrand: true, price: 69.99, rating: 4.8, reviews: 18234, image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&h=600&fit=crop", subcategory: "video-games", nilDonation: don(69.99) },
    { id: pid(), name: "Nerf Elite 2.0 Blaster", brand: "Nerf", isNameBrand: true, price: 24.99, rating: 4.5, reviews: 8765, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=600&fit=crop", subcategory: "outdoor-toys", nilDonation: don(24.99) },
    { id: pid(), name: "Mattel Barbie Dreamhouse", brand: "Mattel", isNameBrand: true, price: 179.99, rating: 4.7, reviews: 6543, image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&h=600&fit=crop", subcategory: "action-figures", nilDonation: don(179.99) },
    { id: pid(), name: "Ravensburger 1000pc Puzzle", brand: "Ravensburger", isNameBrand: true, price: 15.99, rating: 4.7, reviews: 9876, image: "https://images.unsplash.com/photo-1606503153255-59d8b2e4b0e4?w=600&h=600&fit=crop", subcategory: "puzzles", nilDonation: don(15.99) },
    { id: pid(), name: "LEGO Technic Race Car", brand: "LEGO", isNameBrand: true, price: 49.99, rating: 4.9, reviews: 12345, image: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=600&h=600&fit=crop", subcategory: "building-sets", nilDonation: don(49.99) },
    { id: pid(), name: "FunZone Outdoor Ring Toss Game", brand: "FunZone", isNameBrand: false, price: 18.99, rating: 4.2, reviews: 2345, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=600&fit=crop", subcategory: "outdoor-toys", nilDonation: don(18.99) },
    { id: pid(), name: "Fisher-Price Laugh & Learn Walker", brand: "Fisher-Price", isNameBrand: true, price: 24.99, rating: 4.6, reviews: 7890, image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&h=600&fit=crop", subcategory: "outdoor-toys", nilDonation: don(24.99) },
    { id: pid(), name: "BrainTeaser 500pc Kids Puzzle", brand: "BrainTeaser", isNameBrand: false, price: 9.99, rating: 4.3, reviews: 3456, image: "https://images.unsplash.com/photo-1606503153255-59d8b2e4b0e4?w=600&h=600&fit=crop", subcategory: "puzzles", nilDonation: don(9.99) },
    { id: pid(), name: "Hasbro Risk Strategy Game", brand: "Hasbro", isNameBrand: true, price: 29.99, rating: 4.5, reviews: 5678, image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=600&h=600&fit=crop", subcategory: "board-games", nilDonation: don(29.99) },
    { id: pid(), name: "Marvel Legends Action Figure Set", brand: "Hasbro", isNameBrand: true, price: 34.99, rating: 4.4, reviews: 4321, image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&h=600&fit=crop", subcategory: "action-figures", nilDonation: don(34.99) },
  ],
};

// ─── FOOD & GROCERY ───────────────────────────────────────
const food: CategoryData = {
  slug: "food",
  name: "Food & Grocery",
  description: "Stock your pantry with trusted grocery brands — support Missouri NIL with every order.",
  subcategories: [
    { slug: "snacks", label: "Snacks" },
    { slug: "beverages", label: "Beverages" },
    { slug: "cooking-essentials", label: "Cooking Essentials" },
    { slug: "organic-natural", label: "Organic & Natural" },
    { slug: "coffee-tea", label: "Coffee & Tea" },
    { slug: "meal-kits", label: "Meal Kits" },
  ],
  filters: [
    { key: "priceRange", label: "Price Range", options: ["Under $10", "$10–$25", "$25–$50", "$50+"] },
    { key: "brand", label: "Brand", options: ["Keurig", "KIND", "Starbucks", "Gatorade", "Quaker", "Annie's"] },
    { key: "dietary", label: "Dietary", options: ["Gluten-Free", "Organic", "Vegan", "Keto", "Non-GMO", "Sugar-Free"] },
    { key: "type", label: "Type", options: ["Pantry Staples", "Ready to Eat", "Drinks", "Snacks", "Cooking"] },
  ],
  products: [
    { id: pid(), name: "Keurig K-Cup Variety Pack (40ct)", brand: "Keurig", isNameBrand: true, price: 24.99, rating: 4.7, reviews: 12345, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=600&fit=crop", subcategory: "coffee-tea", nilDonation: don(24.99) },
    { id: pid(), name: "KIND Bars Variety Pack 12ct", brand: "KIND", isNameBrand: true, price: 15.99, rating: 4.6, reviews: 18765, image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=600&fit=crop", subcategory: "snacks", nilDonation: don(15.99) },
    { id: pid(), name: "Starbucks Pike Place K-Cups 24ct", brand: "Starbucks", isNameBrand: true, price: 18.99, rating: 4.8, reviews: 23456, image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&h=600&fit=crop", subcategory: "coffee-tea", nilDonation: don(18.99) },
    { id: pid(), name: "Gatorade Thirst Quencher 24-Pack", brand: "Gatorade", isNameBrand: true, price: 14.98, rating: 4.5, reviews: 9876, image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&h=600&fit=crop", subcategory: "beverages", nilDonation: don(14.98) },
    { id: pid(), name: "Quaker Oats Old Fashioned 42oz", brand: "Quaker", isNameBrand: true, price: 5.99, rating: 4.7, reviews: 15432, image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=600&h=600&fit=crop", subcategory: "cooking-essentials", nilDonation: don(5.99) },
    { id: pid(), name: "Annie's Organic Mac & Cheese 12-Pack", brand: "Annie's", isNameBrand: true, price: 16.99, rating: 4.6, reviews: 8765, image: "https://images.unsplash.com/photo-1543339308-d595c4974614?w=600&h=600&fit=crop", subcategory: "organic-natural", nilDonation: don(16.99) },
    { id: pid(), name: "SnackWell Protein Trail Mix", brand: "SnackWell", isNameBrand: false, price: 8.99, rating: 4.2, reviews: 3456, image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&h=600&fit=crop", subcategory: "snacks", nilDonation: don(8.99) },
    { id: pid(), name: "HelloFresh 2-Person Meal Kit", brand: "HelloFresh", isNameBrand: true, price: 49.99, rating: 4.4, reviews: 5678, image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=600&fit=crop", subcategory: "meal-kits", nilDonation: don(49.99) },
    { id: pid(), name: "FreshBrew Organic Green Tea 100ct", brand: "FreshBrew", isNameBrand: false, price: 12.49, rating: 4.3, reviews: 2345, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop", subcategory: "coffee-tea", nilDonation: don(12.49) },
    { id: pid(), name: "Heinz Tomato Ketchup 38oz", brand: "Heinz", isNameBrand: true, price: 4.99, rating: 4.8, reviews: 34567, image: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=600&h=600&fit=crop", subcategory: "cooking-essentials", nilDonation: don(4.99) },
    { id: pid(), name: "Nature Valley Crunchy Bars 12ct", brand: "Nature Valley", isNameBrand: true, price: 3.99, rating: 4.5, reviews: 11234, image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=600&fit=crop", subcategory: "snacks", nilDonation: don(3.99) },
    { id: pid(), name: "LaCroix Sparkling Water 12-Pack", brand: "LaCroix", isNameBrand: true, price: 5.49, rating: 4.4, reviews: 7890, image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&h=600&fit=crop", subcategory: "beverages", nilDonation: don(5.49) },
  ],
};

// ─── PET SUPPLIES ─────────────────────────────────────────
const pets: CategoryData = {
  slug: "pets",
  name: "Pet Supplies",
  description: "Top pet brands for your furry friends — shop treats, beds, and more for Mizzou NIL.",
  subcategories: [
    { slug: "dog-supplies", label: "Dog Supplies" },
    { slug: "cat-supplies", label: "Cat Supplies" },
    { slug: "pet-food", label: "Pet Food" },
    { slug: "beds-furniture", label: "Beds & Furniture" },
    { slug: "pet-toys", label: "Toys" },
    { slug: "grooming", label: "Grooming" },
  ],
  filters: [
    { key: "priceRange", label: "Price Range", options: ["Under $15", "$15–$30", "$30–$50", "$50+"] },
    { key: "brand", label: "Brand", options: ["Purina", "Blue Buffalo", "Kong", "Greenies", "PetSafe", "Arm & Hammer"] },
    { key: "petType", label: "Pet Type", options: ["Dog", "Cat", "Bird", "Fish", "Small Animal"] },
    { key: "lifeStage", label: "Life Stage", options: ["Puppy/Kitten", "Adult", "Senior"] },
  ],
  products: [
    { id: pid(), name: "Purina Pro Plan Adult Dog Food 35lb", brand: "Purina", isNameBrand: true, price: 54.98, rating: 4.7, reviews: 23456, image: "https://images.unsplash.com/photo-1589924749359-5c7238beab21?w=600&h=600&fit=crop", subcategory: "pet-food", nilDonation: don(54.98) },
    { id: pid(), name: "Blue Buffalo Life Protection 30lb", brand: "Blue Buffalo", isNameBrand: true, price: 49.98, rating: 4.6, reviews: 18765, image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop", subcategory: "pet-food", nilDonation: don(49.98) },
    { id: pid(), name: "Kong Classic Dog Toy Large", brand: "Kong", isNameBrand: true, price: 14.99, rating: 4.8, reviews: 34567, image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=600&h=600&fit=crop", subcategory: "pet-toys", nilDonation: don(14.99) },
    { id: pid(), name: "Greenies Dental Treats Regular 36ct", brand: "Greenies", isNameBrand: true, price: 24.98, rating: 4.7, reviews: 15678, image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&h=600&fit=crop", subcategory: "dog-supplies", nilDonation: don(24.98) },
    { id: pid(), name: "PetSafe Easy Walk Harness", brand: "PetSafe", isNameBrand: true, price: 27.95, rating: 4.5, reviews: 9876, image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop", subcategory: "dog-supplies", nilDonation: don(27.95) },
    { id: pid(), name: "Arm & Hammer Clump & Seal Cat Litter", brand: "Arm & Hammer", isNameBrand: true, price: 18.99, rating: 4.6, reviews: 12345, image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop", subcategory: "cat-supplies", nilDonation: don(18.99) },
    { id: pid(), name: "CozyPaws Orthopedic Dog Bed", brand: "CozyPaws", isNameBrand: false, price: 39.99, rating: 4.4, reviews: 5678, image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&h=600&fit=crop", subcategory: "beds-furniture", nilDonation: don(39.99) },
    { id: pid(), name: "FURminator deShedding Tool", brand: "FURminator", isNameBrand: true, price: 32.99, rating: 4.7, reviews: 8765, image: "https://images.unsplash.com/photo-1583337130417-13104dec14a7?w=600&h=600&fit=crop", subcategory: "grooming", nilDonation: don(32.99) },
    { id: pid(), name: "Whisker Wonderland Cat Tree", brand: "Whisker Wonderland", isNameBrand: false, price: 59.99, rating: 4.3, reviews: 3456, image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop", subcategory: "beds-furniture", nilDonation: don(59.99) },
    { id: pid(), name: "Purina Fancy Feast Variety 24-Pack", brand: "Purina", isNameBrand: true, price: 19.92, rating: 4.6, reviews: 21345, image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop", subcategory: "cat-supplies", nilDonation: don(19.92) },
    { id: pid(), name: "PawPal Interactive Treat Puzzle", brand: "PawPal", isNameBrand: false, price: 16.99, rating: 4.2, reviews: 2345, image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=600&h=600&fit=crop", subcategory: "pet-toys", nilDonation: don(16.99) },
    { id: pid(), name: "BarkBox Super Chewer Rope Toy", brand: "BarkBox", isNameBrand: true, price: 12.99, rating: 4.5, reviews: 6789, image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?w=600&h=600&fit=crop", subcategory: "pet-toys", nilDonation: don(12.99) },
  ],
};

// ─── AUTOMOTIVE ───────────────────────────────────────────
const automotive: CategoryData = {
  slug: "automotive",
  name: "Automotive",
  description: "Essentials for your ride from trusted automotive brands — support Mizzou with every purchase.",
  subcategories: [
    { slug: "car-care", label: "Car Care" },
    { slug: "interior-accessories", label: "Interior Accessories" },
    { slug: "exterior-accessories", label: "Exterior Accessories" },
    { slug: "tools-equipment", label: "Tools & Equipment" },
    { slug: "phone-mounts", label: "Phone Mounts" },
    { slug: "auto-lighting", label: "Lighting" },
  ],
  filters: [
    { key: "priceRange", label: "Price Range", options: ["Under $15", "$15–$30", "$30–$50", "$50–$100", "$100+"] },
    { key: "brand", label: "Brand", options: ["Chemical Guys", "Armor All", "WeatherTech", "Meguiar's", "iOttie", "Stanley"] },
    { key: "vehicleType", label: "Vehicle Type", options: ["Car", "Truck", "SUV", "Van", "Universal"] },
    { key: "rating", label: "Customer Rating", options: ["4★ & Up", "3★ & Up"] },
  ],
  products: [
    { id: pid(), name: "Chemical Guys Complete Car Wash Kit", brand: "Chemical Guys", isNameBrand: true, price: 39.99, rating: 4.7, reviews: 12345, image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=600&fit=crop", subcategory: "car-care", nilDonation: don(39.99) },
    { id: pid(), name: "WeatherTech Floor Mats Universal", brand: "WeatherTech", isNameBrand: true, price: 79.95, rating: 4.8, reviews: 18765, image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=600&fit=crop", subcategory: "interior-accessories", nilDonation: don(79.95) },
    { id: pid(), name: "Armor All Interior Cleaning Wipes 50ct", brand: "Armor All", isNameBrand: true, price: 7.99, rating: 4.5, reviews: 23456, image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&h=600&fit=crop", subcategory: "car-care", nilDonation: don(7.99) },
    { id: pid(), name: "iOttie Easy One Touch 5 Phone Mount", brand: "iOttie", isNameBrand: true, price: 24.95, rating: 4.6, reviews: 15678, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop", subcategory: "phone-mounts", nilDonation: don(24.95) },
    { id: pid(), name: "Meguiar's Gold Class Car Wash", brand: "Meguiar's", isNameBrand: true, price: 11.99, rating: 4.7, reviews: 9876, image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=600&fit=crop", subcategory: "car-care", nilDonation: don(11.99) },
    { id: pid(), name: "Stanley FATMAX Mechanics Tool Set", brand: "Stanley", isNameBrand: true, price: 89.99, rating: 4.6, reviews: 6543, image: "https://images.unsplash.com/photo-1530124566582-a45a7e3f3bce?w=600&h=600&fit=crop", subcategory: "tools-equipment", nilDonation: don(89.99) },
    { id: pid(), name: "AutoGlow LED Headlight Bulbs H11", brand: "AutoGlow", isNameBrand: false, price: 29.99, rating: 4.3, reviews: 4567, image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=600&fit=crop", subcategory: "auto-lighting", nilDonation: don(29.99) },
    { id: pid(), name: "DrivePro Trunk Organizer", brand: "DrivePro", isNameBrand: false, price: 24.99, rating: 4.2, reviews: 3456, image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=600&fit=crop", subcategory: "interior-accessories", nilDonation: don(24.99) },
    { id: pid(), name: "Rain-X Water Repellent 2-Pack", brand: "Rain-X", isNameBrand: true, price: 9.97, rating: 4.5, reviews: 8765, image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=600&fit=crop", subcategory: "exterior-accessories", nilDonation: don(9.97) },
    { id: pid(), name: "GripTech Magnetic Phone Mount for Car", brand: "GripTech", isNameBrand: false, price: 12.99, rating: 4.1, reviews: 2345, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop", subcategory: "phone-mounts", nilDonation: don(12.99) },
    { id: pid(), name: "Chemical Guys Microfiber Towel 6-Pack", brand: "Chemical Guys", isNameBrand: true, price: 14.99, rating: 4.6, reviews: 5678, image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=600&fit=crop", subcategory: "car-care", nilDonation: don(14.99) },
    { id: pid(), name: "ShieldPro Car Seat Cover Set", brand: "ShieldPro", isNameBrand: false, price: 34.99, rating: 4.3, reviews: 1987, image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=600&fit=crop", subcategory: "interior-accessories", nilDonation: don(34.99) },
  ],
};

// ─── HEALTH & WELLNESS ───────────────────────────────────
const health: CategoryData = {
  slug: "health",
  name: "Health & Wellness",
  description: "Vitamins, supplements, and wellness essentials — support your health and Mizzou athletes.",
  subcategories: [
    { slug: "vitamins-supplements", label: "Vitamins & Supplements" },
    { slug: "fitness-trackers", label: "Fitness Trackers" },
    { slug: "first-aid", label: "First Aid" },
    { slug: "essential-oils", label: "Essential Oils" },
    { slug: "massage-recovery", label: "Massage & Recovery" },
    { slug: "sleep-aids", label: "Sleep Aids" },
  ],
  filters: [
    { key: "priceRange", label: "Price Range", options: ["Under $15", "$15–$30", "$30–$50", "$50–$100", "$100+"] },
    { key: "brand", label: "Brand", options: ["Nature Made", "Fitbit", "Theragun", "Band-Aid", "doTERRA", "Melatonin"] },
    { key: "goal", label: "Wellness Goal", options: ["Energy", "Sleep", "Immunity", "Fitness", "Stress Relief", "Pain Relief"] },
    { key: "form", label: "Form", options: ["Capsules", "Gummies", "Powder", "Liquid", "Device"] },
  ],
  products: [
    { id: pid(), name: "Nature Made Multivitamin 200ct", brand: "Nature Made", isNameBrand: true, price: 15.99, rating: 4.7, reviews: 23456, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop", subcategory: "vitamins-supplements", nilDonation: don(15.99) },
    { id: pid(), name: "Fitbit Charge 6 Fitness Tracker", brand: "Fitbit", isNameBrand: true, price: 159.95, rating: 4.5, reviews: 12345, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop", subcategory: "fitness-trackers", nilDonation: don(159.95) },
    { id: pid(), name: "Theragun Mini Massage Gun", brand: "Theragun", isNameBrand: true, price: 199.00, rating: 4.7, reviews: 8765, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop", subcategory: "massage-recovery", nilDonation: don(199) },
    { id: pid(), name: "Band-Aid Brand Flexible Fabric 100ct", brand: "Band-Aid", isNameBrand: true, price: 8.49, rating: 4.8, reviews: 34567, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop", subcategory: "first-aid", nilDonation: don(8.49) },
    { id: pid(), name: "doTERRA Lavender Essential Oil", brand: "doTERRA", isNameBrand: true, price: 28.00, rating: 4.6, reviews: 9876, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop", subcategory: "essential-oils", nilDonation: don(28) },
    { id: pid(), name: "Olly Sleep Gummies 60ct", brand: "Olly", isNameBrand: true, price: 13.99, rating: 4.5, reviews: 15678, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop", subcategory: "sleep-aids", nilDonation: don(13.99) },
    { id: pid(), name: "Optimum Nutrition Gold Standard Whey 5lb", brand: "Optimum Nutrition", isNameBrand: true, price: 62.99, rating: 4.7, reviews: 18234, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop", subcategory: "vitamins-supplements", nilDonation: don(62.99) },
    { id: pid(), name: "ZenRest Weighted Blanket 15lb", brand: "ZenRest", isNameBrand: false, price: 44.99, rating: 4.4, reviews: 5678, image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop", subcategory: "sleep-aids", nilDonation: don(44.99) },
    { id: pid(), name: "TheraPulse Foam Roller", brand: "TheraPulse", isNameBrand: false, price: 24.99, rating: 4.3, reviews: 3456, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop", subcategory: "massage-recovery", nilDonation: don(24.99) },
    { id: pid(), name: "Johnson & Johnson First Aid Kit", brand: "Johnson & Johnson", isNameBrand: true, price: 14.99, rating: 4.6, reviews: 7890, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop", subcategory: "first-aid", nilDonation: don(14.99) },
    { id: pid(), name: "PureAura Eucalyptus Oil Set", brand: "PureAura", isNameBrand: false, price: 18.99, rating: 4.2, reviews: 2345, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop", subcategory: "essential-oils", nilDonation: don(18.99) },
    { id: pid(), name: "Garmin Vivosmart 5 Activity Tracker", brand: "Garmin", isNameBrand: true, price: 149.99, rating: 4.5, reviews: 6543, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop", subcategory: "fitness-trackers", nilDonation: don(149.99) },
  ],
};

// ─── JEWELRY & WATCHES ───────────────────────────────────
const jewelry: CategoryData = {
  slug: "jewelry",
  name: "Jewelry & Watches",
  description: "Elegant watches, jewelry, and accessories — every purchase supports Missouri NIL.",
  subcategories: [
    { slug: "watches", label: "Watches" },
    { slug: "necklaces", label: "Necklaces" },
    { slug: "bracelets", label: "Bracelets" },
    { slug: "earrings", label: "Earrings" },
    { slug: "rings", label: "Rings" },
    { slug: "sunglasses", label: "Sunglasses" },
  ],
  filters: [
    { key: "priceRange", label: "Price Range", options: ["Under $25", "$25–$50", "$50–$100", "$100–$200", "$200+"] },
    { key: "brand", label: "Brand", options: ["Fossil", "Casio", "Ray-Ban", "Timex", "Pandora", "Swarovski"] },
    { key: "material", label: "Material", options: ["Gold", "Silver", "Stainless Steel", "Leather", "Crystal"] },
    { key: "gender", label: "Gender", options: ["Men", "Women", "Unisex"] },
  ],
  products: [
    { id: pid(), name: "Fossil Men's Grant Chronograph Watch", brand: "Fossil", isNameBrand: true, price: 109.65, rating: 4.6, reviews: 12345, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop", subcategory: "watches", nilDonation: don(109.65) },
    { id: pid(), name: "Ray-Ban Aviator Classic Sunglasses", brand: "Ray-Ban", isNameBrand: true, price: 163.00, rating: 4.8, reviews: 23456, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop", subcategory: "sunglasses", nilDonation: don(163) },
    { id: pid(), name: "Casio G-Shock Classic Watch", brand: "Casio", isNameBrand: true, price: 49.95, rating: 4.7, reviews: 18765, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop", subcategory: "watches", nilDonation: don(49.95) },
    { id: pid(), name: "Pandora Moments Bracelet", brand: "Pandora", isNameBrand: true, price: 65.00, rating: 4.7, reviews: 9876, image: "https://images.unsplash.com/photo-1515562141589-67f0d569b6e5?w=600&h=600&fit=crop", subcategory: "bracelets", nilDonation: don(65) },
    { id: pid(), name: "Swarovski Crystal Stud Earrings", brand: "Swarovski", isNameBrand: true, price: 49.00, rating: 4.6, reviews: 6543, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", subcategory: "earrings", nilDonation: don(49) },
    { id: pid(), name: "Timex Weekender Chronograph", brand: "Timex", isNameBrand: true, price: 62.18, rating: 4.5, reviews: 8765, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop", subcategory: "watches", nilDonation: don(62.18) },
    { id: pid(), name: "LuxeChain Sterling Silver Necklace", brand: "LuxeChain", isNameBrand: false, price: 34.99, rating: 4.3, reviews: 3456, image: "https://images.unsplash.com/photo-1515562141589-67f0d569b6e5?w=600&h=600&fit=crop", subcategory: "necklaces", nilDonation: don(34.99) },
    { id: pid(), name: "Ray-Ban Wayfarer Classic", brand: "Ray-Ban", isNameBrand: true, price: 154.00, rating: 4.8, reviews: 15678, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop", subcategory: "sunglasses", nilDonation: don(154) },
    { id: pid(), name: "GoldenTouch Minimalist Ring Set", brand: "GoldenTouch", isNameBrand: false, price: 19.99, rating: 4.2, reviews: 2345, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", subcategory: "rings", nilDonation: don(19.99) },
    { id: pid(), name: "Fossil Women's Jacqueline Watch", brand: "Fossil", isNameBrand: true, price: 89.25, rating: 4.6, reviews: 7890, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop", subcategory: "watches", nilDonation: don(89.25) },
    { id: pid(), name: "Pandora Signature Necklace", brand: "Pandora", isNameBrand: true, price: 75.00, rating: 4.7, reviews: 4567, image: "https://images.unsplash.com/photo-1515562141589-67f0d569b6e5?w=600&h=600&fit=crop", subcategory: "necklaces", nilDonation: don(75) },
    { id: pid(), name: "ShimmerStone Crystal Bracelet", brand: "ShimmerStone", isNameBrand: false, price: 22.99, rating: 4.1, reviews: 1876, image: "https://images.unsplash.com/photo-1515562141589-67f0d569b6e5?w=600&h=600&fit=crop", subcategory: "bracelets", nilDonation: don(22.99) },
  ],
};

// ─── MERCHANDISE ──────────────────────────────────────────
const merchandise: CategoryData = {
  slug: "merchandise",
  name: "Merchandise",
  description: "Show your Mizzou pride with official merchandise — every purchase supports NIL.",
  subcategories: [
    { slug: "tshirts", label: "T-Shirts" },
    { slug: "hats-caps", label: "Hats & Caps" },
    { slug: "drinkware", label: "Drinkware" },
    { slug: "flags-banners", label: "Flags & Banners" },
    { slug: "stickers-decals", label: "Stickers & Decals" },
    { slug: "blankets-throws", label: "Blankets & Throws" },
  ],
  filters: [
    { key: "priceRange", label: "Price Range", options: ["Under $15", "$15–$25", "$25–$50", "$50+"] },
    { key: "brand", label: "Brand", options: ["Nike", "Fanatics", "Colosseum", "Top of the World", "WinCraft"] },
    { key: "size", label: "Size", options: ["S", "M", "L", "XL", "2XL", "One Size"] },
    { key: "sport", label: "Sport", options: ["Football", "Basketball", "Baseball", "Volleyball", "All Sports"] },
  ],
  products: [
    { id: pid(), name: "Nike Mizzou Dri-FIT Tee", brand: "Nike", isNameBrand: true, price: 35.00, rating: 4.7, reviews: 8765, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop", subcategory: "tshirts", nilDonation: don(35) },
    { id: pid(), name: "Fanatics Mizzou Tigers Hoodie", brand: "Fanatics", isNameBrand: true, price: 64.99, rating: 4.6, reviews: 6543, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop", subcategory: "tshirts", nilDonation: don(64.99) },
    { id: pid(), name: "Top of the World Mizzou Snapback", brand: "Top of the World", isNameBrand: true, price: 24.99, rating: 4.5, reviews: 5432, image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=600&fit=crop", subcategory: "hats-caps", nilDonation: don(24.99) },
    { id: pid(), name: "Yeti Mizzou Rambler Tumbler 20oz", brand: "Yeti", isNameBrand: true, price: 38.00, rating: 4.8, reviews: 4321, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop", subcategory: "drinkware", nilDonation: don(38) },
    { id: pid(), name: "WinCraft Mizzou 3x5 Flag", brand: "WinCraft", isNameBrand: true, price: 29.99, rating: 4.6, reviews: 3456, image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=600&fit=crop", subcategory: "flags-banners", nilDonation: don(29.99) },
    { id: pid(), name: "Colosseum Mizzou Women's V-Neck", brand: "Colosseum", isNameBrand: true, price: 28.00, rating: 4.4, reviews: 2345, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop", subcategory: "tshirts", nilDonation: don(28) },
    { id: pid(), name: "TigerPride Vinyl Decal 4-Pack", brand: "TigerPride", isNameBrand: false, price: 9.99, rating: 4.3, reviews: 6789, image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=600&fit=crop", subcategory: "stickers-decals", nilDonation: don(9.99) },
    { id: pid(), name: "Nike Mizzou Heritage86 Adjustable Hat", brand: "Nike", isNameBrand: true, price: 27.00, rating: 4.7, reviews: 4567, image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=600&fit=crop", subcategory: "hats-caps", nilDonation: don(27) },
    { id: pid(), name: "MizzouFanShop Stadium Blanket", brand: "MizzouFanShop", isNameBrand: false, price: 34.99, rating: 4.5, reviews: 3456, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop", subcategory: "blankets-throws", nilDonation: don(34.99) },
    { id: pid(), name: "Fanatics Mizzou Coffee Mug 15oz", brand: "Fanatics", isNameBrand: true, price: 14.99, rating: 4.4, reviews: 2134, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop", subcategory: "drinkware", nilDonation: don(14.99) },
    { id: pid(), name: "WinCraft Mizzou Garden Flag", brand: "WinCraft", isNameBrand: true, price: 16.99, rating: 4.5, reviews: 1987, image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=600&fit=crop", subcategory: "flags-banners", nilDonation: don(16.99) },
    { id: pid(), name: "GoldStripe Mizzou Bumper Sticker", brand: "GoldStripe", isNameBrand: false, price: 4.99, rating: 4.1, reviews: 8765, image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=600&fit=crop", subcategory: "stickers-decals", nilDonation: don(4.99) },
  ],
};

// ─── EXPORT ALL ───────────────────────────────────────────
export const allCategories: CategoryData[] = [
  electronics,
  fashion,
  home,
  beauty,
  sports,
  toys,
  food,
  pets,
  automotive,
  health,
  jewelry,
  merchandise,
];

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return allCategories.find((c) => c.slug === slug);
}
