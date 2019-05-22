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

  async addRole(roleInfo) {
    const Info = new this.ctx.model.Role(roleInfo);
    return new Promise((resolve, reject) => {
      try {
        this.ctx.model.Role.create(Info, err => {
          if (err) {
            resolve({
              code: 1,
              message: '角色名不能重复',
            });
          }
          resolve({
            code: 0,
            message: '添加成功',
          });
        });
      } catch (error) {
        reject(error);
      }
    });
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
