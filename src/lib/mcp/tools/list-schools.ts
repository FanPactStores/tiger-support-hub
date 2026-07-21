import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { schools } from "@/data/schools";

export default defineTool({
  name: "list_schools",
  title: "List schools",
  description:
    "List all schools in the FanPact catalog. Optionally filter by conference (SEC, Big Ten, Big 12, ACC).",
  inputSchema: {
    conference: z
      .string()
      .optional()
      .describe("Optional conference name to filter by, e.g. 'SEC' or 'Big Ten'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ conference }) => {
    const filtered = conference
      ? schools.filter((s) => s.conference.toLowerCase() === conference.toLowerCase())
      : schools;
    return {
      content: [{ type: "text", text: JSON.stringify(filtered, null, 2) }],
      structuredContent: { count: filtered.length, schools: filtered },
    };
  },
});
