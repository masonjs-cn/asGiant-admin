'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const RoleSchema = new Schema({
    role: {
      type: String,
      index: {
        unique: true,
      },
      require: true,
    },
    roleName: {
      type: String,
      unqiue: true,
      require: true,
    },
    // 备注
    note: {
      type: String,
      require: true,
    },
  });
  return mongoose.model('Role', RoleSchema, 'role');
};
