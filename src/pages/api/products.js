import pool from "../../../lib/db";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const result = await pool.query("SELECT * FROM products ORDER BY id DESC");

        res.status(200).json(result.rows);
    } catch (err) {
        console.error("DB ERROR:", err);
        res.status(500).json({ error: "Database error" });
    }
}