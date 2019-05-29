'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const EmailSchema = new Schema({
    e_mailName: {
      type: String,
      index: {
        unique: true,
      },
      require: true,
    }, // 邮箱服务器的主机地址
    host: {
      type: String,
      require: true,
    },
    port: {
      type: Number,
      require: true,
    },
    // 备注
    secureConnection: {
      type: Boolean,
      require: true,
    },
    user: {
      type: String,
      require: true,
    },
    pass: {
      type: String,
      require: true,
    },
    e_mail_id: {
      type: String,
      index: {
        unique: true,
      },
      require: true,
    },
  });
  return mongoose.model('Email', EmailSchema, 'email');
};
