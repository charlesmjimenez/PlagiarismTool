import express from 'express';
// import * as myDB from './myDB.js';

const app = express();
app.use(express.static('client'));

// async function getFiles(req, res) {
//   res.json(await myDB.listFiles());
// }

// async function postFiles(req, res) {
//   const messages = await myDB.addFiles(req.body.msg);
//   res.json(messages);
// }

// function asyncWrap(f) {
//   return (req, res, next) => {
//     Promise.resolve(f(req, res, next))
//       .catch((e) => next(e || new Error()));
//   };
// }

// app.get('/fileConts', asyncWrap(getFiles));
// app.post('/fileConts', express.json(), asyncWrap(postFiles));
app.listen(8080, () => { console.log('listening on 8080'); });
