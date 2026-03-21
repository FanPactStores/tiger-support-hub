// Auto-generated product specifications based on category and product attributes

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductSpecifications {
  description: string;
  highlights: string[];
  specs: ProductSpec[];
}

// Generate realistic specifications based on category and product name/brand
export function getProductSpecifications(
  productName: string,
  brand: string,
  price: number,
  subcategory: string,
  categorySlug: string
): ProductSpecifications {
  const specMap: Record<string, () => ProductSpecifications> = {
    electronics: () => getElectronicsSpecs(productName, brand, price, subcategory),
    fashion: () => getFashionSpecs(productName, brand, price, subcategory),
    home: () => getHomeSpecs(productName, brand, price, subcategory),
    beauty: () => getBeautySpecs(productName, brand, price, subcategory),
    sports: () => getSportsSpecs(productName, brand, price, subcategory),
    toys: () => getToysSpecs(productName, brand, price, subcategory),
    food: () => getFoodSpecs(productName, brand, price, subcategory),
    pets: () => getPetsSpecs(productName, brand, price, subcategory),
    automotive: () => getAutomotiveSpecs(productName, brand, price, subcategory),
    health: () => getHealthSpecs(productName, brand, price, subcategory),
    jewelry: () => getJewelrySpecs(productName, brand, price, subcategory),
    merchandise: () => getMerchandiseSpecs(productName, brand, price, subcategory),
  };

  return (specMap[categorySlug] || specMap.electronics)();
}

function getElectronicsSpecs(name: string, brand: string, price: number, sub: string): ProductSpecifications {
  const isHeadphones = sub.includes("headphones");
  const isSpeaker = sub.includes("speaker");
  const isTablet = sub.includes("tablet");
  const isSmartHome = sub.includes("smart");
  const isCharger = sub.includes("charger");

  if (isHeadphones) return {
    description: `Experience premium audio with the ${name}. Featuring advanced noise cancellation technology and superior sound quality, these headphones deliver an immersive listening experience whether you're commuting, working out, or relaxing at home.`,
    highlights: ["Industry-leading noise cancellation", "Up to 30 hours battery life", "Quick charge — 3 min for 3 hours", "Multipoint connection", "Comfortable lightweight design"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Battery Life", value: "Up to 30 hours" },
      { label: "Noise Cancellation", value: "Active (ANC)" },
      { label: "Driver Size", value: "40mm" },
      { label: "Weight", value: "250g" },
      { label: "Charging", value: "USB-C" },
      { label: "Frequency Response", value: "20Hz–20kHz" },
      { label: "Impedance", value: "32 Ohms" },
      { label: "Warranty", value: "1 Year" },
    ],
  };
  if (isSpeaker) return {
    description: `The ${name} delivers powerful, room-filling sound in a portable design. Built for durability and performance, it's perfect for outdoor adventures, pool parties, or everyday listening.`,
    highlights: ["IP67 waterproof and dustproof", "20+ hours of playtime", "PartyBoost pairing", "Built-in powerbank", "Rugged outdoor design"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Output Power", value: "30W" },
      { label: "Battery Life", value: "20 hours" },
      { label: "Water Resistance", value: "IP67" },
      { label: "Connectivity", value: "Bluetooth 5.1" },
      { label: "Weight", value: "960g" },
      { label: "Dimensions", value: "8.7 × 3.8 × 3.7 in" },
      { label: "Charging", value: "USB-C" },
      { label: "Frequency Response", value: "65Hz–20kHz" },
      { label: "Warranty", value: "1 Year" },
    ],
  };
  if (isTablet) return {
    description: `The ${name} combines power and portability in a sleek design. Perfect for streaming, browsing, reading, and productivity on the go with a stunning display and all-day battery.`,
    highlights: ["Vivid high-resolution display", "All-day battery life", "Lightweight and portable", "Powerful processor", "Compatible with keyboard and stylus"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Display", value: "10.9-inch Retina / AMOLED" },
      { label: "Storage", value: "64GB / 128GB" },
      { label: "Processor", value: "A14 Bionic / Snapdragon 8" },
      { label: "Battery", value: "Up to 10 hours" },
      { label: "Camera", value: "12MP rear, 12MP front" },
      { label: "Connectivity", value: "Wi-Fi 6, Bluetooth 5.2" },
      { label: "Weight", value: "477g" },
      { label: "OS", value: "iPadOS / Android 14" },
      { label: "Warranty", value: "1 Year" },
    ],
  };
  if (isSmartHome) return {
    description: `Make your home smarter with the ${name}. Control your smart devices, play music, get answers, and manage your day — all with your voice.`,
    highlights: ["Voice assistant built-in", "Smart home hub", "Premium speaker quality", "Privacy controls", "Compact design"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Assistant", value: brand === "Amazon" ? "Alexa" : "Google Assistant" },
      { label: "Connectivity", value: "Wi-Fi, Bluetooth, Zigbee" },
      { label: "Speaker", value: "1.73-inch driver" },
      { label: "Display", value: sub.includes("hub") ? "7-inch touchscreen" : "No display" },
      { label: "Power", value: "15W adapter" },
      { label: "Dimensions", value: "3.9 × 3.9 × 3.5 in" },
      { label: "Weight", value: "304g" },
      { label: "Color", value: "Charcoal" },
      { label: "Warranty", value: "1 Year" },
    ],
  };
  // Default electronics (chargers/cables/phone accessories)
  return {
    description: `The ${name} by ${brand} delivers reliable performance for your everyday tech needs. Built with quality materials and designed for convenience.`,
    highlights: ["Fast charging technology", "Durable build quality", "Universal compatibility", "Compact and portable", "Safety certified"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Type", value: isCharger ? "USB-C Charger" : "Accessory" },
      { label: "Output", value: isCharger ? "65W max" : "N/A" },
      { label: "Compatibility", value: "Universal" },
      { label: "Cable Length", value: "3ft / 6ft / 10ft" },
      { label: "Material", value: "Braided nylon" },
      { label: "Certification", value: "FCC, UL Listed" },
      { label: "Weight", value: "120g" },
      { label: "Color", value: "Black" },
      { label: "Warranty", value: "18 Months" },
    ],
  };
}

function getFashionSpecs(name: string, brand: string, _price: number, sub: string): ProductSpecifications {
  const isShoes = sub.includes("shoes");
  return {
    description: `Elevate your style with the ${name}. Crafted by ${brand} with premium materials for comfort and durability that lasts.`,
    highlights: isShoes
      ? ["Responsive cushioning", "Breathable mesh upper", "Durable rubber outsole", "True to size fit", "Versatile styling"]
      : ["Premium fabric blend", "Machine washable", "Comfortable all-day wear", "Reinforced stitching", "Modern fit"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Material", value: isShoes ? "Mesh/Synthetic" : "Cotton/Polyester blend" },
      { label: "Fit", value: "Standard" },
      { label: "Care", value: isShoes ? "Spot clean" : "Machine wash cold" },
      { label: "Sizes Available", value: isShoes ? "7–14" : "XS–2XL" },
      { label: "Color Options", value: "Multiple" },
      { label: "Country of Origin", value: "Imported" },
      { label: "Closure", value: isShoes ? "Lace-up" : "Pull-on" },
      { label: "Season", value: "All-season" },
      { label: "Warranty", value: "30-day returns" },
    ],
  };
}

function getHomeSpecs(name: string, brand: string, _price: number, _sub: string): ProductSpecifications {
  return {
    description: `Transform your living space with the ${name}. Designed by ${brand} for both style and functionality in any room of your home.`,
    highlights: ["Premium quality materials", "Easy assembly / setup", "Modern aesthetic design", "Durable construction", "Easy to clean and maintain"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Material", value: "Premium composite" },
      { label: "Dimensions", value: "Varies by product" },
      { label: "Weight", value: "Varies" },
      { label: "Color", value: "As shown" },
      { label: "Assembly", value: "Minimal required" },
      { label: "Care", value: "Wipe clean" },
      { label: "Room", value: "Multi-room versatile" },
      { label: "Style", value: "Contemporary" },
      { label: "Warranty", value: "1 Year" },
    ],
  };
}

function getBeautySpecs(name: string, brand: string, _price: number, sub: string): ProductSpecifications {
  return {
    description: `Discover the ${name} — a top-rated ${sub} essential from ${brand}. Formulated with care to deliver visible results and a luxurious experience.`,
    highlights: ["Dermatologist tested", "Suitable for all skin types", "Paraben-free formula", "Clinically proven results", "Cruelty-free"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Product Type", value: sub.replace(/-/g, " ") },
      { label: "Size", value: "Standard" },
      { label: "Skin Type", value: "All skin types" },
      { label: "Key Ingredients", value: "Hyaluronic Acid, Ceramides" },
      { label: "Scent", value: "Light / Fragrance-free" },
      { label: "Cruelty-Free", value: "Yes" },
      { label: "Paraben-Free", value: "Yes" },
      { label: "Application", value: "Daily use" },
      { label: "Shelf Life", value: "24 months" },
    ],
  };
}

function getSportsSpecs(name: string, brand: string, _price: number, sub: string): ProductSpecifications {
  return {
    description: `Take your game to the next level with the ${name}. Engineered by ${brand} for peak performance and durability in any condition.`,
    highlights: ["Professional-grade quality", "Durable construction", "Ergonomic design", "All-weather performance", "Trusted by athletes"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Sport", value: sub.replace(/-/g, " ") },
      { label: "Material", value: "Premium composite" },
      { label: "Weight", value: "Varies" },
      { label: "Color", value: "As shown" },
      { label: "Level", value: "All levels" },
      { label: "Indoor/Outdoor", value: "Both" },
      { label: "Age Group", value: "Adult" },
      { label: "Certification", value: "NCAA approved" },
      { label: "Warranty", value: "1 Year" },
    ],
  };
}

function getToysSpecs(name: string, brand: string, _price: number, sub: string): ProductSpecifications {
  return {
    description: `Hours of fun await with the ${name} by ${brand}. Designed for creativity, learning, and entertainment for all ages.`,
    highlights: ["Hours of entertainment", "Promotes creativity and learning", "High-quality materials", "Safety tested", "Great gift idea"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Type", value: sub.replace(/-/g, " ") },
      { label: "Age Range", value: "6+ years" },
      { label: "Players", value: "1–4" },
      { label: "Material", value: "Non-toxic ABS plastic" },
      { label: "Batteries", value: "Not required" },
      { label: "Dimensions", value: "Varies" },
      { label: "Safety", value: "CPSC compliant" },
      { label: "Educational", value: "STEM learning" },
      { label: "Warranty", value: "90 days" },
    ],
  };
}

function getFoodSpecs(name: string, brand: string, _price: number, sub: string): ProductSpecifications {
  return {
    description: `Stock up on the ${name} — a pantry favorite from ${brand}. Quality ingredients for delicious results every time.`,
    highlights: ["Premium quality ingredients", "Great taste", "Convenient packaging", "Family-size value", "No artificial preservatives"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Category", value: sub.replace(/-/g, " ") },
      { label: "Size", value: "Standard" },
      { label: "Servings", value: "Multiple" },
      { label: "Dietary", value: "Check label" },
      { label: "Allergens", value: "See packaging" },
      { label: "Storage", value: "Cool, dry place" },
      { label: "Shelf Life", value: "12+ months" },
      { label: "Organic", value: "Varies" },
      { label: "Country of Origin", value: "USA" },
    ],
  };
}

function getPetsSpecs(name: string, brand: string, _price: number, sub: string): ProductSpecifications {
  return {
    description: `Give your pet the best with the ${name} from ${brand}. Designed with your pet's health, comfort, and happiness in mind.`,
    highlights: ["Vet recommended", "Premium ingredients/materials", "Loved by pets", "Safe and durable", "Great value"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Pet Type", value: sub.includes("cat") ? "Cat" : "Dog" },
      { label: "Life Stage", value: "Adult" },
      { label: "Size", value: "Standard" },
      { label: "Material", value: "Pet-safe" },
      { label: "Weight", value: "Varies" },
      { label: "Flavor/Type", value: "Original" },
      { label: "Made In", value: "USA" },
      { label: "Grain-Free", value: "Varies" },
      { label: "Warranty", value: "Satisfaction guaranteed" },
    ],
  };
}

function getAutomotiveSpecs(name: string, brand: string, _price: number, sub: string): ProductSpecifications {
  return {
    description: `Keep your ride in top shape with the ${name} from ${brand}. Professional-grade quality for car enthusiasts and everyday drivers alike.`,
    highlights: ["Professional-grade quality", "Easy to use", "Safe for all finishes", "Long-lasting protection", "Trusted brand"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Type", value: sub.replace(/-/g, " ") },
      { label: "Vehicle Compatibility", value: "Universal" },
      { label: "Material", value: "Premium" },
      { label: "Size", value: "Standard" },
      { label: "Color", value: "As shown" },
      { label: "Installation", value: "DIY friendly" },
      { label: "Finish", value: "Professional grade" },
      { label: "Weather Resistant", value: "Yes" },
      { label: "Warranty", value: "Limited lifetime" },
    ],
  };
}

function getHealthSpecs(name: string, brand: string, _price: number, sub: string): ProductSpecifications {
  return {
    description: `Support your wellness journey with the ${name} from ${brand}. Formulated for optimal health benefits and everyday vitality.`,
    highlights: ["Clinically studied ingredients", "Third-party tested", "GMP certified facility", "No artificial fillers", "Daily wellness support"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Type", value: sub.replace(/-/g, " ") },
      { label: "Serving Size", value: "1–2 daily" },
      { label: "Supply", value: "30–90 day" },
      { label: "Form", value: "Capsule / Gummy" },
      { label: "Dietary", value: "Gluten-free" },
      { label: "Third-Party Tested", value: "Yes" },
      { label: "GMP Certified", value: "Yes" },
      { label: "Storage", value: "Room temperature" },
      { label: "Expiration", value: "See packaging" },
    ],
  };
}

function getJewelrySpecs(name: string, brand: string, _price: number, sub: string): ProductSpecifications {
  return {
    description: `Make a statement with the ${name} from ${brand}. Expertly crafted with premium materials for timeless elegance and everyday wear.`,
    highlights: ["Premium craftsmanship", "Hypoallergenic materials", "Gift-ready packaging", "Timeless design", "Tarnish-resistant finish"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Type", value: sub.replace(/-/g, " ") },
      { label: "Material", value: "Stainless Steel / Sterling Silver" },
      { label: "Finish", value: "Polished" },
      { label: "Water Resistant", value: "Yes" },
      { label: "Hypoallergenic", value: "Yes" },
      { label: "Clasp Type", value: "Secure fold-over" },
      { label: "Gift Box", value: "Included" },
      { label: "Adjustable", value: "Yes" },
      { label: "Warranty", value: "2 Years" },
    ],
  };
}

function getMerchandiseSpecs(name: string, brand: string, _price: number, sub: string): ProductSpecifications {
  return {
    description: `Show your team pride with the ${name}. Officially styled fan gear that's perfect for game day, tailgates, and everyday wear.`,
    highlights: ["Officially styled", "Premium quality materials", "Vibrant team colors", "Machine washable", "Perfect for game day"],
    specs: [
      { label: "Brand", value: brand },
      { label: "Type", value: sub.replace(/-/g, " ") },
      { label: "Material", value: "Cotton/Polyester blend" },
      { label: "Sizes", value: "S–2XL / One Size" },
      { label: "Color", value: "Team colors" },
      { label: "Care", value: "Machine wash cold" },
      { label: "Fit", value: "Standard" },
      { label: "Licensed", value: "Fan-inspired" },
      { label: "Country of Origin", value: "Imported" },
      { label: "Returns", value: "30-day policy" },
    ],
  };
}
