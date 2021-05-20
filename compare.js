/* eslint-disable no-unreachable-loop */

import * as myDB from './myDB.js';
import similarity from 'similarity';
import fs from 'fs';

export async function compareFile(filePath) {
  const fileOne = fs.readFileSync(filePath, 'utf-8');
  const uploadFile = await myDB.findPath();
  const arrSim = [];
  for (let i = 0; i < uploadFile.length; i++) {
    const replace = uploadFile[i].file_path.replace(/\\/g, '/');
    const fileTwo = fs.readFileSync(replace, 'utf-8');
    const compareSim = similarity(fileOne, fileTwo);
    const round = compareSim * 100;
    arrSim.push(round);
    console.log(round);
  }
  console.log(arrSim);
  const data = {
    similarity: (largest(arrSim).toFixed(2)).toString() + '%',
  };
  return data;
}

function largest(arr) {
  if (!arr || !arr.length) {
    return null;
  } else {
    return Math.max.apply(Math, arr);
  }
}
