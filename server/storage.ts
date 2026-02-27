// import { type InsertVc, type Vc } from "@shared/schema";

// export interface IStorage {
//   getVcs(): Promise<Vc[]>;
//   getVc(id: number): Promise<Vc | undefined>;
//   createVc(vc: InsertVc): Promise<Vc>;
//   updateVc(id: number, updates: Partial<InsertVc>): Promise<Vc>;
//   deleteVc(id: number): Promise<void>;
// }

// class StaticStorage implements IStorage {

//   private vcs: Vc[] = [];

//   async getVcs(): Promise<Vc[]> {
//     return this.vcs;
//   }

//   async getVc(id: number): Promise<Vc | undefined> {
//     return this.vcs.find(v => v.id === id);
//   }

//   async createVc(insertVc: InsertVc): Promise<Vc> {
//     const newVc = {
//       id: Date.now(),
//       ...insertVc,
//     } as Vc;

//     this.vcs.push(newVc);
//     return newVc;
//   }

//   async updateVc(id: number, updates: Partial<InsertVc>): Promise<Vc> {
//     const index = this.vcs.findIndex(v => v.id === id);
//     this.vcs[index] = { ...this.vcs[index], ...updates };
//     return this.vcs[index];
//   }

//   async deleteVc(id: number): Promise<void> {
//     this.vcs = this.vcs.filter(v => v.id !== id);
//   }
// }

// export const storage = new StaticStorage();