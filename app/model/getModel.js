'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const GetModelSchema = new Schema({
    modelObject: {
      type: Object,
      require: true,
    },
  });
  return mongoose.model('GetModel', GetModelSchema);
};
