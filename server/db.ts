// import { drizzle } from "drizzle-orm/node-postgres";
// import pg from "pg";
// import * as schema from "@shared/schema";

// const { Pool } = pg;

// let pool: any = null;
// let db: any = null;

// // ✅ Agar DATABASE_URL hai tabhi DB connect hoga
// if (process.env.DATABASE_URL) {
//   pool = new Pool({ connectionString: process.env.DATABASE_URL });
//   db = drizzle(pool, { schema });
//   console.log("✅ Database connected");
// } else {
//   console.log("⚠️ Running in STATIC MODE (No Database)");
// }

// // export safe variables
// export { pool, db };