const fs = require("fs").promises;
const path = require("path");

// fs.readdir(path.resolve(__dirname))
//   .then((files) => console.log(files))
//   .catch((err) => console.log(err));

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    // remove a pasta git
    if (/\git/g.test(fileFullPath)) continue;
    // remove a pasta node modules
    if (/node_modules/g.test(fileFullPath)) continue;

    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }
    console.log(fileFullPath);
  }
}

readdir("D:/Luis-Otavio-JS-TS/JavaScript_TypeScript/JS/");
