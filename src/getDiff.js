import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const readFile = (fileName) => {
  const pathFile = path.resolve(fileName);
  return JSON.parse(fs.readFileSync(pathFile, 'UTF-8'));
}

const getDiff = (fileName1, fileName2) => {
  const dan1 = readFile(fileName1);
  const dan2 = readFile(fileName2);
  const unionKeys = _.union(Object.keys(dan1), Object.keys(dan2));
  const str = unionKeys.map((key) => {
    if (Object.hasOwn(dan1, key) && !Object.hasOwn(dan2, key)) {
      return `  - ${key}: ${dan1[key]}`;
    } else if (!Object.hasOwn(dan1, key) && Object.hasOwn(dan2, key)) {
      return `  + ${key}: ${dan2[key]}`;
    // отсекли варианты что каких-то ключей нет, значит остальное все есть
    } else if (dan1[key] === dan2[key]) {
      return `    ${key}: ${dan1[key]}`;
    } // а тут ключи есть, а значения разные
    return `  - ${key}: ${dan1[key]}\n  + ${key}: ${dan2[key]}`;
  })
  return `{\n${str.join('\n')}\n}`;
};

export default getDiff;