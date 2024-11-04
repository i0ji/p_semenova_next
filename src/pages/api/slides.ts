import type { NextApiRequest, NextApiResponse } from "next";
import pool from "@/db";
import type { RowDataPacket } from "mysql2";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SlideModel[] | { message: string }>
) {
  if (req.method === "GET") {
    console.log("Получение слайдов...");
    try {
      const [rows]: [RowDataPacket[], unknown] = await pool.query(
        "SELECT * FROM slides"
      );

      if (rows.length === 0) {
        console.warn("Нет слайдов в базе данных.");
      }

      console.log("Слайды получены:", rows);

      const slides: SlideModel[] = rows.map((row) => ({
        id: row.id,
        slide_name: row.slide_name,
        description: row.description || null,
        image_path: row.image_path,
      }));

      return res.status(200).json(slides);
    } catch (error) {
      console.error("Ошибка при получении слайдов:", error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  } else {
    console.warn(`Метод ${req.method} не разрешен`);
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Метод ${req.method} не разрешен`);
  }
}
