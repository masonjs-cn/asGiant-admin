'use strict';

const Controller = require('egg').Controller;
const tool = require('../utils/tool.js');
const svgCaptcha = require('svg-captcha'); // 验证码图生成
class UserController extends Controller {
  async code() {

    const { ctx } = this;

    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      noise: 3,
      width: 120,
      height: 34,
      background: '#ffffff',
    });
    const token = tool.generateUUID();
    const topNav = await ctx.service.redis.get(token);

    if (!topNav) {
      await this.ctx.service.redis.set(token, captcha.text, 1000);
    }

    // 设置响应头
    ctx.response.type = 'image/svg+xml';
    ctx.body = {
      img: captcha.data,
      token,
    };
  }

  // 注册
  async signup() {
    const { ctx } = this;

    tool.success(ctx, '登录成功');
    // const {
    //   userName, // 用户名
    //   password, // 密码
    //   code, // 验证码
    // } = ctx.params;
  }


  // 登录
  async signinUser() {
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
      code: {
        type: 'string',
        required: true,
        message: '必填项',
      },
    };

    // 拿到验证结果
    const validateResult = await ctx.validate(rule, ctx.params);
    // 验证不通过时，阻止后面的代码执行
    if (!validateResult) return;

    const authToken = ctx.header.token;
    const getCode = await ctx.service.redis.get(authToken);

    if (ctx.params.code !== getCode) {
      tool.error(ctx, '验证码错误');
      return;
    }

    const {
      userName,
      userPass,
    } = ctx.params;

    const userInfo = await this.service.user.findUser({ username: userName });
    userInfo.password === userPass ? tool.success(ctx, '登录成功') : tool.error(ctx, '登录失败');

  }

}


module.exports = UserController;
