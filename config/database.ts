import { Pool, QueryResult } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Dados conectada com sucesso!');
});

const query = function(text: string, params = []): Promise<QueryResult> { 
  return pool.query(text, params) 
};

export default query;