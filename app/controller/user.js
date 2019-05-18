'use strict';

const Controller = require('egg').Controller;
const tool = require('../utils/tool.js');
class UserController extends Controller {

  async signup() {
    // const {
    //   userName, // 用户名
    //   password, // 密码
    //   code, // 验证码
    // } = ctx.params;
  }

  async signin() {
    const { ctx } = this;
    const rule = {
      userName: {
        type: 'string',
        required: true,
        message: '必填项',
      },
      userPass: {
        type: 'string',
        required: true,
        message: '必填项',
      },
    };

    // 拿到验证结果
    const validateResult = await ctx.validate(rule, ctx.params);
    // 验证不通过时，阻止后面的代码执行
    if (!validateResult) return;
    const {
      userName,
      userPass,
    } = ctx.params;

    const userInfo = await this.service.user.findUser({ username: userName });
    userInfo.password === userPass ? tool.success(ctx, '登录成功') : tool.error(ctx, '登录失败');

  }

}


module.exports = UserController;
