'use strict';

const Controller = require('egg').Controller;
const tool = require('../utils/tool.js');
class RoleController extends Controller {

  async getRoleList() {
    const {
      ctx,
    } = this;
    const rule = {
      pageSize: {
        type: 'number',
        required: true,
        message: '请输入正确的输入总条数',
      },
      currentPage: {
        type: 'number',
        required: true,
        message: '请正确的输入页数',
      },
      check: {
        type: 'object',
        message: '请正确的查询的内容',
      },
    };

    // 拿到验证结果
    const validateResult = await ctx.validate(rule, ctx.params);
    // 验证不通过时，阻止后面的代码执行
    if (!validateResult) return;

    let {
      pageSize,
      currentPage,
      check,
    } = ctx.params;

    if (!check) check = {};

    const result = await this.service.role.findList(check, pageSize, currentPage);

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
