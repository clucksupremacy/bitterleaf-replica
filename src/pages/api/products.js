// // for localhost postgres connection
// import pool from "../../../lib/db";

// export default async function handler(req, res) {
//     if (req.method !== "GET") {
//         return res.status(405).json({ error: "Method not allowed" });
//     }

//     try {
//         const result = await pool.query("SELECT * FROM products ORDER BY id DESC");

//         res.status(200).json(result.rows);
//     } catch (err) {
//         console.error("DB ERROR:", err);
//         res.status(500).json({ error: "Database error" });
//     }
// }

// for supabase-netlify postgres connection
import { supabase } from '../../../lib/supabaseClient';

export async function GET() {
    const { data, error } = await supabase.from('products').select('*');
    if (error) return new Response(error.message, { status: 500 });
    return new Response(JSON.stringify(data), { status: 200 });
}
