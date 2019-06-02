'use strict';
const column = require('./modules/column.js');
const email = require('./modules/email.js');
const home = require('./modules/home.js');
const role = require('./modules/role.js');
const user = require('./modules/user.js');
const template = require('./modules/template.js');
const upload = require('./modules/upload.js');

const swaggerConfig = {
  enable: true, // 禁用swagger , 默认为true
  base: {
    /* default config,support cover
      schemes: [
          'http',
      ],
      host: '127.0.0.1:7001',
      basePath: '/',
      consumes: [
      'application/json',
      ],
      produces: [
      'application/json',
      ],
    */
    info: {
      description: 'an architecture that does not require a backend。',
      version: '1.0.0',
      title: 'asGiant-admin',
      contact: {
        email: '954663633@qq.com',
      },
      license: {
        name: 'editor.swagger',
        url: 'http://editor.swagger.io/',
      },
    },
    tags: [{
      name: 'column',
      description: '栏目管理模块',
    },
    {
      name: 'user',
      description: '用户管理',
    },
    {
      name: 'role',
      description: '角色管理',
    },
    {
      name: 'email',
      description: '邮箱管理模块',
    },
    {
      name: 'home',
      description: '页面展示',
    },
    {
      name: 'upload',
      description: '上传模块',
    },
    {
      name: 'template',
      description: '模板管理',
    }],
    definitions: {
      // model definitions
    },
    securityDefinitions: {
      // security definitions
    },
  },
};

const swaggerApi = controller => {

  return [
    ...home(controller),
    ...user(controller),
    ...email(controller),
    ...column(controller),
    ...role(controller),
    ...upload(controller),
    ...template(controller),
  ];

};

module.exports = {
  swaggerApi,
  swaggerConfig,
};
