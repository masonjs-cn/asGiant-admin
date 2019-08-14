'use strict';
const path = require('path');
const fs = require('fs');
const generateTpl = require('./generateTpl');
const inquirer = require('inquirer');

const createPage = {
  template: 'table',
  init() {
    const promptName = [{
      type: 'input',
      message: '模板的名称',
      name: 'templateName',
      filter(val) {
        return val.toLowerCase();
      },
    }];
    const promptList = [{
      type: 'list',
      message: '请选择一种模版',
      name: 'template',
      choices: [ '表格', '表单' ],
      filter(val) {
        return val.toLowerCase();
      },
    }];

    inquirer.prompt(promptName).then(name => {
      inquirer.prompt(promptList).then(anwsers => {
        this.initParams(name.templateName);
        if (anwsers.template === '表格') {
          this.template = 'table';
        } else {
          this.template = 'form';
        }
        this.getAllPage();
        this.generatePage();
      });
    });
  },
  initParams(templateName) {

    this.pageName = templateName;

    this.pageDir = path.join(__dirname, '../src/views');

    this.allPages = '';

  },
  getAllPage() {

    this.allPages = fs.readdirSync(this.pageDir);

  },
  generatePage() {

    if (this.allPages.indexOf(this.pageName) == -1) {

      this.toGenerageDir();
    } else {

      console.error('当前页面已经存在了');
    }
  },
  toGenerageDir() {

    try {

      fs.mkdir(path.join(this.pageDir, this.pageName), function(err) {

        if (err) {

          console.error(err);
          return;
        }

        this.toGenerateFiles();

        console.log('页面创建完成');

      }.bind(this));
    } catch (e) {

      console.error(e);
    }
  },
  toGenerateFiles() {

    // 选择模板
    const vueFile = path.join(this.pageDir, this.pageName, 'index.vue');
    const jsFile = path.join(this.pageDir, this.pageName, `${this.pageName}-option.js`);
    const imageDir = path.join(this.pageDir, this.pageName, 'images');

    fs.writeFileSync(vueFile, generateTpl[this.template](this.pageName));
    fs.writeFileSync(jsFile, generateTpl.js);
    fs.mkdirSync(imageDir);
  },
};

createPage.init();

