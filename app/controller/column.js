'use strict';

const Controller = require('egg').Controller;
const tool = require('../utils/tool.js');
class ColumnController extends Controller {

  async getColumnList() {
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

    const result = await this.service.column.findList(cha, pageSize, currentPage);

    tool.list(ctx, result.list, result.currentPage, result.total);
  }

  // 增加栏目
  async addColumn() {
    const {
      ctx,
    } = this;

    const rule = {
      column: {
        type: 'string',
        required: true,
        message: '请输入正确的栏目',
      },
      columnName: {
        type: 'string',
        required: true,
        message: '请正确的栏目名称',
      },
      note: {
        type: 'string',
        message: '请正确的备注',
      },
    };

    // 拿到验证结果
    const validateResult = await ctx.validate(rule, ctx.params);
    // 验证不通过时，阻止后面的代码执行
    if (!validateResult) return;

    ctx.body = await this.service.column.addColumn(ctx.params);

  }

}


module.exports = ColumnController;
