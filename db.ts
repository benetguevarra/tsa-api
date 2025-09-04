import { Pool } from "pg";

// Read database connection string from environment
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://user:password@localhost:5432/tsa_db",
});

// Function to test DB connection
export async function testDB() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("✅ DB connected:", res.rows[0]);
  } catch (err) {
    console.error("❌ DB connection error", err);
  }
}

export default pool;
