'use strict';

const Controller = require('egg').Controller;
const tool = require('../utils/tool.js');
const svgCaptcha = require('svg-captcha'); // 验证码图生成
class UserController extends Controller {

  async hhh() {
    const { ctx } = this;
    // tool.getIp(ctx);s
    ctx.body = await this.service.user.addIp({
      last_login_ip: tool.getIp(ctx),
    });
  }

  // 图片验证码
  async code() {

    const { ctx } = this;

    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      noise: 1, // 干扰线条的数量
      width: 120,
      height: 34,
      inverse: false,
      // background: '#ffffff',
      // color: false, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      ignoreChars: '0o1i',
    });
    const imgtoken = tool.generateUUID();
    const topNav = await ctx.service.redis.get(imgtoken);

    if (!topNav) {
      await this.ctx.service.redis.set(imgtoken, captcha.text, 1000);
    }

    // 设置响应头
    ctx.response.type = 'image/svg+xml';
    ctx.body = {
      img: captcha.data,
      token: imgtoken,
    };
  }

  // 注册
  async signup() {
    const { ctx } = this;
    await this.service.user.addUser();

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

    // 判断图片验证码输入的是否正确
    const authToken = ctx.header.imgtoken;
    const getCode = await ctx.service.redis.get(authToken);
    if (ctx.params.code.toUpperCase() !== getCode.toUpperCase()) {
      tool.error(ctx, '验证码错误');
      return;
    }

    const {
      userName,
      userPass,
    } = ctx.params;

    // 得出结论用户根本就不存在
    const userInfo = await this.service.user.findUser({ username: userName });
    if (!userInfo) {
      tool.error(ctx, '用户名或密码错误！');
      return;
    }

    if (userInfo.freeze === '1') {
      tool.error(ctx, '账户已经被冻结');
      return;
    }

    // 判断密码是否输入的正确
    if (userInfo.password === userPass) {
      await this.service.user.updateUserTime({ username: userName }, {
        last_login_ip: tool.getIp(ctx),
        last_login_time: Date.parse(new Date()) / 1000,
      });

      const token = tool.generateUUID();
      // const topNav = await ctx.service.redis.get(token);
      // if (!topNav) {
      // 获取用户的权限，保存起来并且维持一段时间
      await this.ctx.service.redis.set(token, {
        role: userInfo.role || 'average_user',
      }, 10000);

      ctx.body = {
        code: 0,
        message: '登录成功',
        token,
      };
      return;
    }

    tool.error(ctx, '用户名或密码错误！');

  }

  // 退出登录
  async exit() {
    const {
      ctx,
    } = this;

    tool.success(ctx, '登录成功');
    // const {
    //   userName, // 用户名
    //   password, // 密码
    //   code, // 验证码
    // } = ctx.params;
  }

  // 获取用户信息
  async getUser() {
    const {
      ctx,
    } = this;

    tool.success(ctx, '登录成功');
  }

  // 获取用户列表
  async getUserList() {
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

    const result = await this.service.user.findList(cha, pageSize, currentPage);

    tool.list(ctx, result.list, result.currentPage, result.total);
  }

  // 增加角色
  async addRole() {
    const {
      ctx,
    } = this;

    ctx.body = await this.service.role.addRole(ctx.params);

  }

}


module.exports = UserController;
