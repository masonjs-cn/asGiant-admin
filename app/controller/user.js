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
    // console.log('====================================');
    // console.log(ctx.validate);
    // console.log('====================================');
    //   signinMsg.userPass = ctx.helper.encrypt(signinMsg.userPass);
    //   const result = await ctx.service.user.signin(signinMsg);
    ctx.body = 'ok';
  }

}


module.exports = UserController;
