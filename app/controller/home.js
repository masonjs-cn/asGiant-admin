'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // app/static/index.html
    await this.ctx.render('index');
  }

  async addUser() {
    // await this.service.mongdb.addUser();

    const object = await this.service.mongdb.findUser();
    const a = [];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const lista = object[key];
        bianli(lista);
      }
    }
    await this.service.mongdb.addUser();
    this.ctx.body = {
      hh: a,
    };
  }
}

function bianli(object) {
  Object.keys(object).forEach(function(key) {
    console.log(key, object[key]);
  });
}


module.exports = HomeController;
