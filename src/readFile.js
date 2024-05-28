import fs from 'fs';
import path from 'path';

const readFile = (fileName) => {
  const pathFile = path.resolve(fileName);
  return JSON.parse(fs.readFileSync(pathFile, 'UTF-8'));
}
export default readFile;