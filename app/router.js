'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.post('/user/getUserList', controller.user.getUserList); // 获取所有的用户
  router.post('/role/getRoleList', controller.role.getRoleList); // 获取所有角色
  router.get('/user/code', controller.user.code); // 获取图片
  router.get('/user/signup', controller.user.signup);// 注册
  router.post('/user/signinUser', controller.user.signinUser); // 登录
  router.post('/role/addRole', controller.role.addRole); // 增加角色
  router.post('/column/getColumnList', controller.column.getColumnList); // 增加角色
  router.post('/column/addColumn', controller.column.addColumn); // 获取所有的用户
  router.post('/upload', controller.upload.index); // 上传接口

  router.get('/template', controller.template.addHtml); // 创建html
  router.get('/email/emailCode', controller.email.emailCode); // 发送邮箱验证码
  router.post('/email/addEmailConfig', controller.email.addEmailConfig); // 发送邮箱验证码
  router.post('/email/getEmailConfigs', controller.email.getEmailConfigs); // 发送邮箱验证码

};
