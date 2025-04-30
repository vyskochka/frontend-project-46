import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const readFile = (fileName) => {
  const pathFile = path.resolve(fileName); // делаем абсолютный путь
  return JSON.parse(fs.readFileSync(pathFile, 'UTF-8')); // хавает строку в формате json, возвращает obj
};

const getDiff = (fileName1, fileName2) => {
  const data1 = readFile(fileName1);
  const data2 = readFile(fileName2);
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2).sort(); // объединение ключей
  const result = keys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return `  + ${key}: ${data1[key]}`; // added
    } else if (!Object.hasOwn(data2, key)) {
      return `  - ${key}: ${data2[key]}`; // deleted
    } else if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`; // changed
    } else {
      return `    ${key}: ${data1[key]}`; // unchanged
    }
  })
  return `{\n${result.join('\n')}\n}`; // склеили в "типо JSON"
};

getDiff('__fixtures__/file1.json', '__fixtures__/file2.json');

export { getDiff, readFile };
