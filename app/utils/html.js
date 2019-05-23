'use strict';
const path = require('path');
const fs = require('fs');

function createPage(file, content) {
  return new Promise((resolve, reject) => {
    this.pageDir = path.join('app/public/html');
    this.allPages = '';
    this.allPages = fs.readdirSync(this.pageDir);
    if (this.allPages.indexOf(file) === -1) {
      try {
        const htmlFile = path.join('app/public/html', file);
        const tpl = content;

        fs.writeFileSync(htmlFile, tpl);
        resolve('成功');

      } catch (e) {
        reject(e);
      }

    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('当前页面已经存在了');
    }
  });
}


module.exports = {
  createPage,
};
