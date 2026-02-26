import { z } from "zod";
import { vcs, insertVcSchema } from "./schema";

export const errorSchemas = {
  internal: z.object({ message: z.string() }),
};

export const api = {
  vcs: {
    list: {
      method: "GET" as const,
      path: "/api/vcs" as const,
      responses: {
        200: z.array(z.custom<typeof vcs.$inferSelect>()),
      },
    },
  },
  stats: {
    get: {
      method: "GET" as const,
      path: "/api/stats" as const,
      responses: {
        200: z.object({
          totalVcsToday: z.number(),
          totalOngoingVcs: z.number(),
          totalUpcomingVcs: z.number(),
          completedVcs: z.number(),
          averageDurationMins: z.number(),
          totalParticipantsToday: z.number(),
        }),
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
