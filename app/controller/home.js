'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // app/static/index.html
    await this.ctx.render('index');
  }
}


module.exports = HomeController;
