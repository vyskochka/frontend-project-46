import fs from 'fs';
import path from 'path';
import { getDiff } from '../src/getDiff.js';

const readFile = (fileName) => {
  const pathFile = path.resolve(fileName);
  return JSON.stringify(fs.readFileSync(pathFile, 'UTF-8')).split('\n');
};

console.log(`${readFile('__fixtures__/file1.json')}`);

test('getDiff', () => {
  expect(getDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toBe('');
});
