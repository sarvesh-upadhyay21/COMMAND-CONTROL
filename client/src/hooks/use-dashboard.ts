// import { useQuery } from "@tanstack/react-query";
// import { api } from "@shared/routes";
// import { Vc, DashboardStats } from "@shared/schema";

// // Helper to parse responses and handle zod validation if needed, 
// // but we'll trust the generic fetch for simplicity in this generated code
// async function fetchApi<T>(path: string): Promise<T> {
//   const res = await fetch(path);
//   if (!res.ok) {
//     throw new Error(`Failed to fetch ${path}`);
//   }
//   return res.json();
// }

// export function useVcs() {
//   return useQuery<Vc[]>({
//     queryKey: [api.vcs.list.path],
//     queryFn: () => fetchApi(api.vcs.list.path),
//     refetchInterval: 30000, // 30 seconds auto-refresh
//   });
// }

// export function useStats() {
//   return useQuery<DashboardStats>({
//     queryKey: [api.stats.get.path],
//     queryFn: () => fetchApi(api.stats.get.path),
//     refetchInterval: 30000, // 30 seconds auto-refresh
//   });
// }


import { staticStats, staticVcs } from "@shared/routes";
import { DashboardStats, Vc } from "@shared/schema";

export function useVcs(): {
  data: Vc[];
  isLoading: boolean;
  isError: boolean;
} {
  return {
    data: staticVcs,
    isLoading: false,
    isError: false,
  };
}

export function useStats(): {
  data: DashboardStats;
  isLoading: boolean;
} {
  return {
    data: staticStats,
    isLoading: false,
  };
}
