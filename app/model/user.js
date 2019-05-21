'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    // 用户名
    username: {
      type: String,
      unqiue: true,
      require: true,
    },
    // 密码
    password: {
      type: String,
      require: true,
    },
    // 邮箱
    email: {
      type: String,
      require: true,
    },
    // 手机号
    phone: {
      type: String,
    },
    // 角色信息
    role: {
      type: String,
    },
    // ip地址
    last_login_ip: {
      type: String,
    },
    // 最后登录时间
    last_login_time: {
      type: String,
    },
    // 0:活跃 1:冻结
    freeze: {
      type: String,
    },
  });
  return mongoose.model('User', UserSchema, 'user');
};
