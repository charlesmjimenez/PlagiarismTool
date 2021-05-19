import config from './config.js';
import Postgres from 'pg';

const sql = new Postgres.Client(config);
sql.connect();

sql.on('error', (err) => {
  console.error('SQL Fail', err);
  sql.end();
});

export async function listFileConts() {
  const q = 'SELECT file_name, file_path, file_similarity FROM files';
  const result = await sql.query(q);
  return result.rows;
}

export async function findName() {
  const q = 'SELECT file_name FROM files';
  const result = await sql.query(q);
  return result.rows;
}

export async function findPath() {
  const q = 'SELECT file_path, file_name, file_similarity FROM files';
  const result = await sql.query(q);
  return result.rows;
}

export async function findSimilarity() {
  const q = 'SELECT file_similarity FROM files';
  const result = await sql.query(q);
  return result.rows;
}

export async function addFiles(data) {
  const q = 'INSERT INTO files(file_name, file_path, file_similarity) VALUES ($1, $2, $3);';
  await sql.query(q, [data[0], data[1], data[2]]);

  return listFileConts();
}
