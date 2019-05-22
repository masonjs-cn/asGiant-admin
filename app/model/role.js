'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const RoleSchema = new Schema({
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
