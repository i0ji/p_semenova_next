import mysql from "mysql2/promise";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.execute("SELECT 1");
    await connection.end();

    res.status(200).json({ message: "Соединение успешно установлено!", rows });
  } catch (error) {
    console.error("Ошибка при подключении к базе данных:", error);
    res.status(500).json({ error: "Ошибка при подключении к базе данных" });
  }
}
