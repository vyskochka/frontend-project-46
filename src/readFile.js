import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const readFile = (fileName) => {
  const pathFile = path.resolve(fileName);
  return JSON.parse(fs.readFileSync(pathFile, 'UTF-8'));
}

const sravnivaem = (fileName1, fileName2) => {
  const dan1 = readFile(fileName1);
  const dan2 = readFile(fileName2);
  const unionKeys = _.union(Object.keys(dan1), Object.keys(dan2));
  const str = unionKeys.map((key) => {
  //   if (dan1[key] === dan2[key]) {
  //     return `  ${key}: ${dan1[key]}`;
  //   }
  //   if (dan1[key] !== dan2[key]) {
  //     return ``
  //   }

  // })
};

sravnivaem('file1.json', 'file2.json');

export default readFile;