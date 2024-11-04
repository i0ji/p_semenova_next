// import mysql from "mysql2/promise";
// import dotenv from "dotenv";

// dotenv.config();

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// export default pool;

import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'u2111895_adm',
  password: 'вkM0jY3bE5wvS1uN9',
  database: 'u2111895_slides_db', 
});

export default pool;