'use strict';

const Controller = require('egg').Controller;

const tool = require('../utils/tool.js');
const html = require('../utils/html.js');


class RoleController extends Controller {

  // 增加角色
  async addHtml() {
    const {
      ctx,
    } = this;

    html.createPage(`${tool.generateUUID()}.html`, '110').then(res => {
      tool.success(ctx, res);
    }, error => {
      tool.error(ctx, error);
    });

  }

}


module.exports = RoleController;
