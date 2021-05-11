-- -- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS files;

CREATE TABLE files (
    file_id SERIAL,
    file_path VARCHAR(200),
    file_type VARCHAR(10)
);

INSERT INTO files (file_path, file_type) VALUES
('C:/Uni_Work/CW', 'java');