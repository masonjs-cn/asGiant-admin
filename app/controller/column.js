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

  // 增加角色
  async addColumn() {
    const {
      ctx,
    } = this;

    ctx.body = await this.service.column.addColumn(ctx.params);

  }

}


module.exports = ColumnController;
