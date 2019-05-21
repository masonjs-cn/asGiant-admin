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
    roleid: {
      type: String,
      require: true,
    },
  });
  return mongoose.model('Role', RoleSchema, 'role');
};