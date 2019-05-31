'use strict';
const swaggerList = require('./swagger/index.js');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, swagger } = app;

  swaggerList.swaggerApi(controller).forEach(element => {
    router[element.type](element.url, element.routerObj);
    swagger[element.type](element.url, element.swaggerObj);
  });

};

