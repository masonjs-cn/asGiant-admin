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
