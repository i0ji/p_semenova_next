import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/db'; // Импорт подключения к базе данных
import type { RowDataPacket } from 'mysql2'; // Импорт типа RowDataPacket


// Обработчик API
export default async function handler(req: NextApiRequest, res: NextApiResponse<SlideModel[] | { message: string }>) {
  if (req.method === 'GET') {
    try {
      // Запрос к базе данных
      const [rows]: [RowDataPacket[], unknown] = await pool.query('SELECT * FROM slides');

      // Преобразуем строки данных к типу SlideModel
      const slides: SlideModel[] = rows.map(row => ({
        id: row.id,
        slide_name: row.slide_name,
        description: row.description || null, // Убедитесь, что description может быть null
        image_path: row.image_path,
      }));

      return res.status(200).json(slides); // Возвращаем данные в формате JSON
    } catch (error) {
      console.error('Ошибка при получении слайдов:', error);
      return res.status(500).json({ message: 'Ошибка сервера' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Метод ${req.method} не разрешен`);
  }
}
