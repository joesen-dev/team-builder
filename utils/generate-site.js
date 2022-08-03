const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: `
=============================================================
Your generated HTML file can be found in your dist directory
=============================================================
        `,
      });
    });
  });
};

module.exports = writeFile;
