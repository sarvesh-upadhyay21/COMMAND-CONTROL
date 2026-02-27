// import type { Express } from "express";
// import type { Server } from "http";
// import { storage } from "./storage";
// import { api } from "@shared/routes";

// export async function registerRoutes(
//   httpServer: Server,
//   app: Express
// ): Promise<Server> {

//   async function seedDatabase() {
//     const existingVcs = await storage.getVcs();
//     if (existingVcs.length === 0) {

//       const now = new Date();

//       const vcs = [
//         {
//           vcid: 3216547,
//           title: "Hon'ble PM Digital India Review VC",
//           chairedBy: "Prime Minister",
//           hostStudio: "New Delhi PMO",
//           vcAssigned: "Sarvesh Upadhyay",
//           destStudios: ["Lucknow Secretariat", "Bhopal Mantralaya", "Jaipur Secretariat"],
//           startTime: new Date(now.getTime() - 20 * 60000),
//           endTime: new Date(now.getTime() + 40 * 60000),
//           participantsCount: 120,
//           status: "live", 
//           coordinatorName: "NIC PMO Team",
//           ipPhone: "001-1001", 
//           location: "Shastri Park"
//         },
//         {
//           vcid: 3216500,
//           title: "NIC National Network Performance Review",
//           chairedBy: "DG NIC",
//           hostStudio: "NIC HQ Delhi",
//           vcAssigned: "Amit Sharma",
//           destStudios: ["Pune RO", "Ahmedabad RO", "Kolkata RO"],
//           startTime: new Date(now.getTime() - 45 * 60000),
//           endTime: new Date(now.getTime() + 15 * 60000),
//           participantsCount: 25,
//           status: "live", 
//           coordinatorName: "Sarvesh Upadhyay",
//           ipPhone: "001-7890", 
//           location: "CGO Complex"
//         },
//         {
//           vcid: 3216501,
//           title: "Cabinet Committee on Infrastructure VC",
//           chairedBy: "Cabinet Secretary",
//           hostStudio: "Cabinet Secretariat Delhi",
//           vcAssigned: "Rahul Kumar",
//           destStudios: ["Mumbai RO", "Chennai RO"],
//           startTime: new Date(now.getTime() - 10 * 60000),
//           endTime: new Date(now.getTime() + 50 * 60000),
//           participantsCount: 70,
//           status: "live", 
//           coordinatorName: "Ravi Verma",
//           ipPhone: "001-4556", 
//           location: "Shastri Park"
//         },
//         {
//           vcid: 3216502,
//           title: "Chief Ministers Infrastructure Review",
//           chairedBy: "Cabinet Secretary",
//           hostStudio: "NIC HQ Delhi",
//           vcAssigned: "Amit Sharma",
//           destStudios: ["Mumbai RO", "Chennai RO", "Hyderabad RO"],
//           startTime: new Date(now.getTime() + 30 * 60000),
//           endTime: new Date(now.getTime() + 90 * 60000),
//           participantsCount: 85,
//           status: "upcoming", 
//           coordinatorName: "Amit Kumar",
//           ipPhone: "001-2001", 
//           location: "CGO Complex"
//         },
//         {
//           vcid: 3216503,
//           title: "Chief Secretaries Monthly Governance VC",
//           chairedBy: "Home Secretary",
//           hostStudio: "MHA Delhi",
//           vcAssigned: "Pawan Kumar",
//           destStudios: ["Shillong", "Gangtok", "Itanagar"],
//           startTime: new Date(now.getTime() + 10 * 60000),
//           endTime: new Date(now.getTime() + 70 * 60000),
//           participantsCount: 40,
//           status: "upcoming", 
//           coordinatorName: "Ravi Verma",
//           ipPhone: "001-4555", 
//           location: "CGO Complex"
//         },
//         {
//           vcid: 3216504,
//           title: "National Cyber Security Preparedness Review",
//           chairedBy: "NSA",
//           hostStudio: "South Block Delhi",
//           vcAssigned: "Sarvesh Upadhyay",
//           destStudios: ["Bangalore RO", "Hyderabad RO"],
//           startTime: new Date(now.getTime() + 60 * 60000),
//           endTime: new Date(now.getTime() + 120 * 60000),
//           participantsCount: 55,
//           status: "upcoming", 
//           coordinatorName: "Cyber NIC Team",
//           ipPhone: "001-8801", 
//           location: "Shastri Park"
//         },
//         {
//           vcid: 3216505,
//           title: "Aspirational Districts Progress Monitoring VC",
//           chairedBy: "NITI Aayog CEO",
//           hostStudio: "NITI Aayog Delhi",
//           vcAssigned: "Rahul Kumar",
//           destStudios: ["Varanasi", "Ranchi", "Imphal"],
//           startTime: new Date(now.getTime() + 90 * 60000),
//           endTime: new Date(now.getTime() + 150 * 60000),
//           participantsCount: 65,
//           status: "upcoming", 
//           coordinatorName: "NITI Tech Team",
//           ipPhone: "001-9911", 
//           location: "CGO Complex"
//         },
//         {
//           vcid: 3216506,
//           title: "State Health Ministers Coordination Meeting",
//           chairedBy: "Union Health Minister",
//           hostStudio: "MoHFW Delhi",
//           vcAssigned: "Pawan Kumar",
//           destStudios: ["Patna RO", "Raipur RO"],
//           startTime: new Date(now.getTime() - 120 * 60000),
//           endTime: new Date(now.getTime() - 60 * 60000),
//           participantsCount: 60,
//           status: "completed", 
//           coordinatorName: "Health NIC Team",
//           ipPhone: "001-3002", 
//           location: "Shastri Park"
//         },
//         {
//           vcid: 3216507,
//           title: "Digital Payments Infrastructure Review",
//           chairedBy: "Finance Secretary",
//           hostStudio: "Ministry of Finance Delhi",
//           vcAssigned: "Amit Sharma",
//           destStudios: ["Mumbai RBI", "Chennai RBI"],
//           startTime: new Date(now.getTime() - 180 * 60000),
//           endTime: new Date(now.getTime() - 120 * 60000),
//           participantsCount: 48,
//           status: "completed", 
//           coordinatorName: "FinTech NIC Team",
//           ipPhone: "001-7711", 
//           location: "CGO Complex"
//         }
//       ];

//       for (const vc of vcs) {
//         await storage.createVc(vc as any);
//       }
//     }
//   }

//   seedDatabase().catch(() => { });

//   app.get(api.vcs.list.path, async (_req, res) => {
//     const vcsList = await storage.getVcs();
//     res.json(vcsList);
//   });

//   app.get(api.stats.get.path, async (_req, res) => {
//     const vcsList = await storage.getVcs();

//     const totalVcsToday = vcsList.length;
//     const totalOngoingVcs = vcsList.filter(vc => vc.status === "live").length;
//     const totalUpcomingVcs = vcsList.filter(vc => vc.status === "upcoming").length;
//     const completedVcs = vcsList.filter(vc => vc.status === "completed").length;

//     let totalDurationMs = 0;
//     let completedCount = 0;

//     vcsList.forEach(vc => {
//       if (vc.status === "completed") {
//         totalDurationMs += vc.endTime.getTime() - vc.startTime.getTime();
//         completedCount++;
//       }
//     });

//     const averageDurationMins =
//       completedCount > 0 ? Math.round((totalDurationMs / completedCount) / 60000) : 45;

//     const totalParticipantsToday =
//       vcsList.reduce((acc, vc) => acc + vc.participantsCount, 0);

//     res.json({
//       totalVcsToday,
//       totalOngoingVcs,
//       totalUpcomingVcs,
//       completedVcs,
//       averageDurationMins,
//       totalParticipantsToday
//     });
//   });

//   return httpServer;
// }