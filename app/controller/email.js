'use strict';

const Controller = require('egg').Controller;
const tool = require('../utils/tool.js');
class EmailController extends Controller {

  async emailCode() {
    const {
      ctx,
    } = this;
    const rule = {
      e_mail: {
        type: 'string',
        required: true,
        message: '请输入邮箱',
      },
    };

    // 拿到验证结果
    const validateResult = await ctx.validate(rule, ctx.params);
    // 验证不通过时，阻止后面的代码执行
    if (!validateResult) return;

    const {
      e_mail,
    } = ctx.params;

    const emailData = {
      host: 'smtp.163.com', // 邮箱服务器的主机地址
      // service: 'smtp.office365.com', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
      port: 465, // SMTP 端口
      secureConnection: true, // 使用了 SSL
      auth: {
        // 这里密码不是qq密码，是你设置的smtp授权码
        user: 'shanghai9090@163.com', // 你的邮箱账号
        pass: '57484279y', // 你的邮箱密码
      },
    };

    const emailYzm = tool.createCode();

    const topNav = await ctx.service.redis.get(e_mail);

    if (!topNav) {
      await this.ctx.service.redis.set(e_mail, emailYzm, 1000);
    }

    const mailOptions = {
      from: 'shanghai9090@163.com', // sender address
      to: e_mail, // list of receivers
      subject: '验证码', // Subject line
      html: `<b>${emailYzm}</b>`, // html body
    };

    await ctx.service.email.postEmail(emailData, mailOptions)
      .then(() => {
        tool.success(ctx, '发送成功');
      }, () => {
        tool.error(ctx, '发送失败');
      });
  }

  async sendEmail() {
    const {
      ctx,
    } = this;

    const emailData = {
      host: 'smtp.163.com', // 邮箱服务器的主机地址
      // service: 'smtp.office365.com', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
      port: 465, // SMTP 端口
      secureConnection: true, // 使用了 SSL
      auth: {
        // 这里密码不是qq密码，是你设置的smtp授权码
        user: 'shanghai9090@163.com', // 你的邮箱账号
        pass: '57484279y', // 你的邮箱密码
      },
    };

    const mailOptions = {
      from: 'kwei1@visteon.com', // sender address
      to: '954663633@qq.com', // list of receivers
      subject: 'Hello', // Subject line
      // 发送text或者html格式
      // text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    };

    await ctx.service.email.postEmail(emailData, mailOptions)
      .then(() => {
        tool.success(ctx, '发送成功');
      }, () => {
        tool.error(ctx, '发送失败');
      });

  }


}


module.exports = EmailController;
