import { pgTable, text, serial, integer, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const vcs = pgTable("vcs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  chairedBy: text("chaired_by").notNull(),
  studioName: text("studio_name").notNull(), // Delhi HQ etc
  hostStudio: text("host_studio").notNull(),
  remoteStudios: text("remote_studios").array(),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),
  participantsCount: integer("participants_count").notNull(),
  status: varchar("status", { enum: ["upcoming", "live", "completed"] }).notNull(),
  bharatVcLink: text("bharat_vc_link"),
  coordinatorName: text("coordinator_name"),
  ipPhone: text("ip_phone"),
  mcuAlias: text("mcu_alias"),
  password: text("password"),
});

export const insertVcSchema = createInsertSchema(vcs).omit({ id: true });
export type InsertVc = z.infer<typeof insertVcSchema>;
export type Vc = typeof vcs.$inferSelect;

export type DashboardStats = {
  totalVcsToday: number;
  totalOngoingVcs: number;
  totalUpcomingVcs: number;
  completedVcs: number;
  averageDurationMins: number;
  totalParticipantsToday: number;
};
