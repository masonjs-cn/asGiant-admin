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
  config.keys = appInfo.name + '_1558080102448_6969';

  // add your middleware config here
  config.middleware = [];

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

  // 中间件
  config.middleware = [
    'params',
  ];

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
