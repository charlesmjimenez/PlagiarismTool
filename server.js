/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable require-await */
import express from 'express';
import multer from 'multer';
import * as myDB from './myDB.js';
import * as compare from './compare.js';


// const config = require('./config.json') does not work so used code below
const config = {
  dest: './upload',
  limits: {
    fields: 10,
    fileSize: 104800,
    files: 1,
  },
};

const app = express();
const configureMulter = multer(config);
const single = configureMulter.single('fileID');

app.use(express.static('client'));

async function getFileConts(req, res) {
  res.json(await myDB.listFileConts());
}

async function upload(req, res) {
  const response = {
    name: req.file.originalname,
    path: req.file.path.replace(/\\/g, '/'),
  };
  res.json(response);
  console.log(response);
  // const files = await myDB.listFileConts();
  // if (files.length === 0) {
  //   const addFiles = await myDB.addFiles([req.file.originalname, req.file.path, '0%']);
  //   res.json(addFiles);
  // } else {
  //   const similarity = await compare.compare(req.file.path);
  //   const getFiles = await myDB.addFiles([req.file.originalname, req.file.path, similarity]);
  //   res.json(getFiles);
  // }
}


function asyncWrap(f) {
  return (req, res, next) => {
    Promise.resolve(f(req, res, next))
      .catch((e) => next(e || new Error()));
  };
}
app.use(express.json());
app.get('/fileConts', asyncWrap(getFileConts));
app.post('/upload', single, asyncWrap(upload));
app.listen(8080, () => { console.log('listening on 8080'); });
