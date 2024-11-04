import { NextResponse } from 'next/server';
import pool from '@/db';

export async function GET() {
  try {
    const [rows]: [SlideModel[], any] = await pool.query('SELECT * FROM slides') as [SlideModel[], any];
    
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Ошибка при получении слайдов:', error);
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 });
  }
}
