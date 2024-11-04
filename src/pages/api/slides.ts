// src/pages/api/slides.ts
import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise"; // Убедитесь, что используете mysql2

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Запуск обработчика...");
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log("Подключение к базе данных успешно!");

    const [rows] = await connection.execute(
      "SELECT id, slide_name, description, image_path FROM slides"
    );
    await connection.end();

    res.status(200).json(rows);
  } catch (error) {
    console.error("Ошибка при получении данных слайдов:", error);
    res.status(500).json({ error: "Ошибка при получении данных слайдов" });
  }
}
