'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ColumnSchema = new Schema({
    column: {
      type: String,
      index: {
        unique: true,
      },
      require: true,
    },
    columnName: {
      type: String,
      unqiue: true,
      require: true,
    },
    // 备注
    note: {
      type: String,
      require: true,
    },
    columnid: {
      type: String,
      require: true,
    },
  });
  return mongoose.model('Column', ColumnSchema, 'column');
};
