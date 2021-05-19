-- -- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS files;

CREATE TABLE files (
    file_id SERIAL,
    file_name VARCHAR(100),
    file_path VARCHAR(200),
    file_similarity VARCHAR(5)
);