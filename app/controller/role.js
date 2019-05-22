'use strict';

const Controller = require('egg').Controller;
const tool = require('../utils/tool.js');
class RoleController extends Controller {

  async getRoleList() {
    const {
      ctx,
    } = this;

    const {
      pageSize,
      currentPage,
      username,
    } = ctx.params;

    const cha = {};
    if (username) {
      cha.username = username;
    }

    const result = await this.service.Role.findList(cha, pageSize, currentPage);

    tool.list(ctx, result.list, result.currentPage, result.total);
  }

  // 增加角色
  async addRole() {
    const {
      ctx,
    } = this;

    ctx.body = await this.service.role.addRole(ctx.params);

  }

}


module.exports = RoleController;
