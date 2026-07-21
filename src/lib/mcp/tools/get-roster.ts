import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { sportRosters } from "@/data/sportsRosters";

export default defineTool({
  name: "get_roster",
  title: "Get sport roster",
  description:
    "Get the Missouri Tigers athlete roster for a given sport (e.g. football, mens-basketball, womens-basketball, baseball, softball, soccer, volleyball).",
  inputSchema: {
    sport: z.string().describe("Sport slug, e.g. 'football' or 'volleyball'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ sport }) => {
    const key = sport.toLowerCase();
    const roster = (sportRosters as Record<string, any[]>)[key];
    if (!roster) {
      const available = Object.keys(sportRosters);
      return {
        content: [
          { type: "text", text: `No roster for '${sport}'. Available: ${available.join(", ")}` },
        ],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(roster, null, 2) }],
      structuredContent: { sport: key, count: roster.length, players: roster },
    };
  },
});
