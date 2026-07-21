import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { allCategories as mizzouCategories } from "../../../data/mizzouCategoryData";
import { allCategories as indianaCategories } from "../../../data/indianaCategoryData";
import { allCategories as butlerCategories } from "../../../data/butlerCategoryData";

const bySchool = {
  missouri: mizzouCategories,
  mizzou: mizzouCategories,
  indiana: indianaCategories,
  butler: butlerCategories,
} as const;

export default defineTool({
  name: "list_categories",
  title: "List product categories",
  description:
    "List product categories and subcategories for a FanPact storefront (missouri, indiana, or butler).",
  inputSchema: {
    school: z.enum(["missouri", "mizzou", "indiana", "butler"]).describe("Storefront to list categories for."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ school }) => {
    const cats = bySchool[school];
    const summary = cats.map((c) => ({
      slug: c.slug,
      name: c.name,
      description: c.description,
      subcategories: c.subcategories,
      productCount: c.products.length,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: { school, categories: summary },
    };
  },
});
