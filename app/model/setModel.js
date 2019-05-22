'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const SetModelSchema = new Schema({
    unique: {
      type: String,
      require: true,
    },
    require: {
      type: Boolean,
      require: true,
    },
    setModel: {
      type: String,
      require: true,
    },
    setModelName: {
      type: String,
      require: true,
    },
    type: {
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
