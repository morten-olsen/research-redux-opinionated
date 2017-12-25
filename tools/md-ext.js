const fs = require('fs-extra');
const path = require('path');
const yaml = require('js-yaml');

const basePath = path.join(__dirname, '../article');
const entryPath = path.join(basePath, 'introduction.md');
const resultPath = path.join(__dirname, '../README.md');
const regex = /\input\{[^}]+\}/g;

const resolveDoc = async (filePath) => {
  const raw = await fs.readFile(filePath, 'utf8')
  const inputs = regex.exec(raw);
  console.log(inputs);
}

const run = async () => {
  const doc = resolveDoc(entryPath);
};

run()
  .then(() =>  console.log('Done'))
  .catch((err) =>  console.error('Error', err));
