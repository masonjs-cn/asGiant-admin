'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const SetModelSchema = new Schema({
    field: {
      type: String,
      index: {
        unique: true,
      },
      require: true,
    },
    fieldName: {
      type: String,
      require: true,
    },
    unique: { // 是否唯一
      type: Boolean,
      require: true,
    },
    require: { // 是否必填项
      type: Boolean,
      require: true,
    },
    // Number（ 数字）， String（ 字符串）， Boolean（ 布尔值）， ObjectId（ 对象ID）， Array（ 数组）， Object（ 对象）， Date（ 日期）
    type: { // 类型
      type: String,
      require: true,
    },
    column: {
      type: String,
      require: true,
    },
  });
  return mongoose.model('SetModel', SetModelSchema, 'setModel');
};
