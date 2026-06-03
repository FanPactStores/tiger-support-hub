// Butler storefront category data — mirrors Mizzou structure with Butler-specific descriptions

import { allCategories as mizzouCategories, getCategoryBySlug as mizzouGetCategory } from "./mizzouCategoryData";
import type { CategoryData, CategoryProduct, SubCategory, CategoryFilter } from "./mizzouCategoryData";

export type { CategoryData, CategoryProduct, SubCategory, CategoryFilter };

function rebranded(cat: CategoryData): CategoryData {
  return {
    ...cat,
    description: cat.description
      .replace(/University of Missouri/g, "Butler University")
      .replace(/Missouri/g, "Butler")
      .replace(/Mizzou/g, "Butler")
      .replace(/Tigers/g, "Bulldogs")
      .replace(/Tiger/g, "Bulldog"),
    products: cat.products.map((p) => ({
      ...p,
      name: cat.slug === "merchandise"
        ? p.name
            .replace(/Mizzou/g, "Butler")
            .replace(/Tigers/g, "Bulldogs")
            .replace(/TigerPride/g, "BulldogPride")
            .replace(/MizzouFanShop/g, "ButlerFanShop")
            .replace(/GoldStripe/g, "BlueStripe")
        : p.name,
    })),
  };
}

export const allCategories: CategoryData[] = mizzouCategories.map(rebranded);

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  const cat = mizzouGetCategory(slug);
  return cat ? rebranded(cat) : undefined;
}
