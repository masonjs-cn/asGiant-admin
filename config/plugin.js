'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

// 读取html需要的插件
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

// 连接mongdb需要的插件
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

// 使用表单验证需要的插件
exports.validatePlus = {
  enable: true,
  package: 'egg-validate-plus',
};

// 连接redis
exports.redis = {
  enable: true,
  package: 'egg-redis',
};

// 跨域请求
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.swagger2 = {
  enable: true,
  package: 'egg-swagger3',
};
