/* eslint-disable space-infix-ops */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable require-await */
/* eslint-disable no-empty */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */

import * as myDB from './myDB.js';
import similarity from 'similarity';
import fs from 'fs';
import path from 'path';

async function compareFile(filePath) {
//   const uploadFile = fs.readdirSync('./upload');
  const uploadFile = await myDB.findPath();
  console.log(uploadFile);
  const x = path.join('upload', 'hello');
  console.log(x);
// //   console.log(filePath);
// // //   for (let i=0; i<uploadFile.length; i++) {
// // //     if (filePath === uploadFile[i]) {
// // //       // const content = fs.readFileSync(filePath, 'utf-8');
// // //       console.log('file found');
// // //       break;
// // //     } else {
// // //       console.log('File not found');
// // //     }
// // //   }
// // // }
}
// compareFile('upload\\7edfc55942eac37c9ea0db0019580a04');

// const x = path.join('hello', 'yo');
// console.log(x);
compareFile('lol');
// console.log('upload/7edfc55942eac37c9ea0db0019580a04');
