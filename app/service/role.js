'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  async findRole(where) {
    const result = await this.ctx.model.Role.findOne(where);
    return result;
  }

  async findList(where = {}, pageSize, currentPage) {
    const result = {
      total: await this.ctx.model.Role.find(where).count(),
      list: await this.ctx.model.Role.find(where).skip((currentPage - 1) * pageSize).limit(pageSize),
      currentPage,
    };
    return result;
  }

  async addRole() {
    const user = new this.ctx.model.Role({
      roleName: '超级管理员',
      note: '拥有至高无上的权利',
    });
    user.save();
  }

  async updateRole() {
    const result = await this.ctx.model.Role.updateOne({
      _id: '5c00f0ce862e9227acb56d22',
    }, {
      password: 'cccccccccc',
    });
    return result;
  }

  async deleteRole() {
    const result = await this.ctx.model.Role.deleteOne({
      _id: '5c00f0ce862e9227acb56d22',
    });
    return result;
  }
}

module.exports = RoleService;
