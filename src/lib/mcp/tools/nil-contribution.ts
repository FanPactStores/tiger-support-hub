import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "calculate_nil_contribution",
  title: "Calculate FanPact NIL contribution",
  description:
    "Calculate the FanPact NIL contribution for a purchase amount. Formula: 0.5 × (price × 0.25).",
  inputSchema: {
    price: z.number().positive().describe("Item or cart subtotal price in USD."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ price }) => {
    const contribution = Math.round(0.5 * (price * 0.25) * 100) / 100;
    return {
      content: [
        {
          type: "text",
          text: `FanPact NIL Contribution on $${price.toFixed(2)} = $${contribution.toFixed(2)}`,
        },
      ],
      structuredContent: { price, contribution, formula: "0.5 * (price * 0.25)" },
    };
  },
});
