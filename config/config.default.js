/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security

  config.view = {
    mapping: {
      '.html': 'ejs',
    }, // 左边写成.html后缀，会自动渲染.html文件
  };

  config.mongoose = {
    client: {
      url: 'mongodb://myz:123456@123.206.177.252:27017/asGiant',
      options: {},
    },
  };

  config.redis = {
    client: {
      port: 6380, // Redis port
      host: '123.206.177.252', // Redis host
      password: '57484279',
      db: 0,
    },
  };

  // 跨域配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ],
    // domainWhiteList: [ 'http://www.baidu.com', 'http://localhost:8080' ], // 配置白名单
  };

  config.cors = { // 解决跨域访问
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
    origin: '*', // 这边不能为*号，需要指定明确的、与请求网页一致的域名
  };

  // 中间件
  config.middleware = [
    'params',
  ];

  config.keys = appInfo.name + '_1558080102448_6969';

  // 校验机制
  config.validatePlus = {
    resolveError(ctx, errors) {
      if (errors.length) {
        ctx.type = 'json';
        ctx.status = 400;
        ctx.body = {
          code: 400,
          error: errors,
          message: '参数错误',
        };
      }
    },
  };

  // static
  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/view/'),
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
