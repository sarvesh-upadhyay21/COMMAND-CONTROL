import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  async function seedDatabase() {
    const existingVcs = await storage.getVcs();
    if (existingVcs.length === 0) {

      const now = new Date();

      const vcs = [
        {
          title: "Hon'ble PM Digital India Review VC",
          chairedBy: "Prime Minister",
          studioName: "PMO VC Room",
          hostStudio: "New Delhi PMO",
          remoteStudios: ["Lucknow Secretariat", "Bhopal Mantralaya", "Jaipur Secretariat"],
          startTime: new Date(now.getTime() - 20 * 60000),
          endTime: new Date(now.getTime() + 40 * 60000),
          participantsCount: 120,
          status: "live",
          bharatVcLink: "#",
          coordinatorName: "NIC PMO Team",
          ipPhone: "2301-1001",
          mcuAlias: "PMO_MAIN",
          password: "PM***"
        },
        {
          title: "Chief Ministers Infrastructure Review",
          chairedBy: "Cabinet Secretary",
          studioName: "Delhi HQ Main Studio",
          hostStudio: "NIC HQ Delhi",
          remoteStudios: ["Mumbai RO", "Chennai RO", "Hyderabad RO"],
          startTime: new Date(now.getTime() + 30 * 60000),
          endTime: new Date(now.getTime() + 90 * 60000),
          participantsCount: 85,
          status: "upcoming",
          bharatVcLink: "#",
          coordinatorName: "Amit Kumar",
          ipPhone: "2301-2001",
          mcuAlias: "CM_INFRA_01",
          password: "CM***"
        },
        {
          title: "State Health Ministers Coordination Meeting",
          chairedBy: "Union Health Minister",
          studioName: "Health Ministry VC Hall",
          hostStudio: "MoHFW Delhi",
          remoteStudios: ["Patna RO", "Raipur RO"],
          startTime: new Date(now.getTime() - 120 * 60000),
          endTime: new Date(now.getTime() - 60 * 60000),
          participantsCount: 60,
          status: "completed",
          bharatVcLink: "#",
          coordinatorName: "Health NIC Team",
          ipPhone: "2301-3002",
          mcuAlias: "HLTH_SYNC",
          password: "HLT***"
        },
        {
          title: "Chief Secretaries Monthly Governance VC",
          chairedBy: "Home Secretary",
          studioName: "North Block Studio",
          hostStudio: "MHA Delhi",
          remoteStudios: ["Shillong", "Gangtok", "Itanagar"],
          startTime: new Date(now.getTime() + 10 * 60000),
          endTime: new Date(now.getTime() + 70 * 60000),
          participantsCount: 40,
          status: "upcoming",
          bharatVcLink: "#",
          coordinatorName: "Ravi Verma",
          ipPhone: "2301-4555",
          mcuAlias: "HOME_SEC_01",
          password: "MHA***"
        },
        {
          title: "NIC National Network Performance Review",
          chairedBy: "DG NIC",
          studioName: "NIC HQ Studio 3",
          hostStudio: "NIC HQ Delhi",
          remoteStudios: ["Pune RO", "Ahmedabad RO", "Kolkata RO"],
          startTime: new Date(now.getTime() - 45 * 60000),
          endTime: new Date(now.getTime() + 15 * 60000),
          participantsCount: 25,
          status: "live",
          bharatVcLink: "#",
          coordinatorName: "Sarvesh Upadhyay",
          ipPhone: "2301-7890",
          mcuAlias: "NIC_NET_01",
          password: "NIC***"
        }
      ];

      for (const vc of vcs) {
        await storage.createVc(vc as any);
      }
    }
  }

  seedDatabase().catch(() => { });

  app.get(api.vcs.list.path, async (_req, res) => {
    const vcsList = await storage.getVcs();
    res.json(vcsList);
  });

  app.get(api.stats.get.path, async (_req, res) => {
    const vcsList = await storage.getVcs();

    const totalVcsToday = vcsList.length;
    const totalOngoingVcs = vcsList.filter(vc => vc.status === "live").length;
    const totalUpcomingVcs = vcsList.filter(vc => vc.status === "upcoming").length;
    const completedVcs = vcsList.filter(vc => vc.status === "completed").length;

    let totalDurationMs = 0;
    let completedCount = 0;

    vcsList.forEach(vc => {
      if (vc.status === "completed") {
        totalDurationMs += vc.endTime.getTime() - vc.startTime.getTime();
        completedCount++;
      }
    });

    const averageDurationMins =
      completedCount > 0 ? Math.round((totalDurationMs / completedCount) / 60000) : 45;

    const totalParticipantsToday =
      vcsList.reduce((acc, vc) => acc + vc.participantsCount, 0);

    res.json({
      totalVcsToday,
      totalOngoingVcs,
      totalUpcomingVcs,
      completedVcs,
      averageDurationMins,
      totalParticipantsToday
    });
  });

  return httpServer;
}