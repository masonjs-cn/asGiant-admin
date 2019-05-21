'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findUser(where) {
    const result = await this.ctx.model.User.findOne(where);
    return result;
  }

  async findList(where = {}, pageSize, currentPage) {
    const result = {
      total: await this.ctx.model.User.find(where).count(),
      list: await this.ctx.model.User.find(where).skip((currentPage - 1) * pageSize).limit(pageSize),
      currentPage,
    };
    return result;
  }

  async addUser() {
    const user = new this.ctx.model.User({
      username: `admin${Math.ceil(Math.random() * 100)}`,
      password: '666666',
      freeze: 0,
    });
    user.save();
  }

  async updateUser() {
    const result = await this.ctx.model.User.updateOne({
      _id: '5c00f0ce862e9227acb56d22',
    }, {
      password: 'cccccccccc',
    });
    return result;
  }

  async deleteUser() {
    const result = await this.ctx.model.User.deleteOne({
      _id: '5c00f0ce862e9227acb56d22',
    });
    return result;
  }
}

module.exports = UserService;
