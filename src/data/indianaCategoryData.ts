// Indiana storefront category data — mirrors Mizzou structure with IU branding
// Re-exports the same product catalog with Indiana-specific descriptions

import { allCategories as mizzouCategories, getCategoryBySlug as mizzouGetCategory } from "./mizzouCategoryData";
import type { CategoryData, CategoryProduct, SubCategory, CategoryFilter } from "./mizzouCategoryData";

export type { CategoryData, CategoryProduct, SubCategory, CategoryFilter };

function rebranded(cat: CategoryData): CategoryData {
  return {
    ...cat,
    description: cat.description
      .replace(/Missouri/g, "Indiana")
      .replace(/Mizzou/g, "Indiana")
      .replace(/Missouri athletes/g, "Hoosier athletes")
      .replace(/Mizzou NIL/g, "Indiana NIL")
      .replace(/Mizzou athletes/g, "Hoosier athletes"),
    products: cat.products.map((p) => ({
      ...p,
      // Keep same products — only rebrand merchandise names
      name: cat.slug === "merchandise"
        ? p.name.replace(/Mizzou/g, "Indiana").replace(/Tigers/g, "Hoosiers").replace(/TigerPride/g, "HoosierPride").replace(/MizzouFanShop/g, "IUFanShop").replace(/GoldStripe/g, "CrimsonStripe")
        : p.name,
    })),
  };
}

export const allCategories: CategoryData[] = mizzouCategories.map(rebranded);

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  const cat = mizzouGetCategory(slug);
  return cat ? rebranded(cat) : undefined;
}
