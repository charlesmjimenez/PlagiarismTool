import config from './config.js';
import Postgres from 'pg';

const sql = new Postgres.Client(config);
sql.connect();

sql.on('error', (err) => {
  console.error('SQL Fail', err);
  sql.end();
});

export async function listFiles() {
  const q = 'SELECT file_path FROM files';
  const result = await sql.query(q);
  return result.rows;
}

export async function listFileType() {
  const q = 'SELECT file_type FROM files';
  const result = await sql.query(q);
  return result.rows;
}

export async function findFiles(id) {
  const q = 'SELECT file_path FROM files WHERE file_id = $1;';
  const result = await sql.query(q, [id]);
  return result.rows;
}

export async function addFiles(path, type) {
  const q = 'INSERT INTO files(file_path, file_type) VALUES ($1, $2);';
  await sql.query(q, [path, type]);

  return listFiles();
}
