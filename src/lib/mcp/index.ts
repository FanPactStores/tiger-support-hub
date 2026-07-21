import { defineMcp } from "@lovable.dev/mcp-js";
import listSchools from "./tools/list-schools";
import listCategories from "./tools/list-categories";
import searchProducts from "./tools/search-products";
import getRoster from "./tools/get-roster";
import nilContribution from "./tools/nil-contribution";

export default defineMcp({
  name: "fanpact-mcp",
  title: "FanPact MCP",
  version: "0.1.0",
  instructions:
    "Tools for the FanPact platform. Browse schools, product categories, and products across the Missouri, Indiana, and Butler storefronts; look up Missouri athlete rosters; and calculate the FanPact NIL contribution for any purchase amount (formula: 0.5 × price × 0.25). All data is public catalog content.",
  tools: [listSchools, listCategories, searchProducts, getRoster, nilContribution],
});
