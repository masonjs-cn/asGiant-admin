'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/addUser', controller.home.addUser);
  router.get('/user/code', controller.user.code); // 获取图片
  router.get('/user/signup', controller.user.signup);// 注册
  router.post('/user/signinUser', controller.user.signinUser); // 登录
  router.post('/user/getUserList', controller.user.getUserList);// 获取所有的用户

  router.post('/role/getRoleList', controller.role.getRoleList); // 增加角色
  router.post('/role/addRole', controller.role.addRole); // 获取所有的用户

  router.post('/column/getColumnList', controller.column.getColumnList); // 增加角色
  router.post('/column/addColumn', controller.column.addColumn); // 获取所有的用户

};
