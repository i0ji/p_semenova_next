// src/pages/api/checkConnection.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    await connection.end();
    res.status(200).json({ message: 'Соединение успешно' });
  } catch (error) {
    console.error('Ошибка подключения к базе данных:', error);
    res.status(500).json({ error: 'Ошибка подключения к базе данных' });
  }
}
