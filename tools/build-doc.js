const fs = require('fs-extra');
const path = require('path');
const yaml = require('js-yaml');

const basePath = path.join(__dirname, '../article');
const tocPath = path.join(basePath, 'toc.yaml');
const resultPath = path.join(__dirname, '../README.md');

const run = async () => {
  const tocRaw = await fs.readFile(tocPath, 'utf8')
  const toc = yaml.safeLoad(tocRaw);
  const articles = await Promise.all(toc.structure.map(async relativePath => {
    const articlePath = path.resolve(basePath, relativePath);
    const articleRaw = await fs.readFile(articlePath, 'utf8');
    return articleRaw;
  }));

  await fs.writeFile(resultPath, articles.join('\n\n\n'));
};

run()
  .then(() =>  console.log('Done'))
  .catch((err) =>  console.error('Error', err));
