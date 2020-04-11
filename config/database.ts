import { Pool, QueryResult } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Dados conectada com sucesso!');
});

module.exports = {
  query: (text: string, params: []): Promise<QueryResult> => pool.query(text, params)
};