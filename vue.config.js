// 基础路径 注意发布之前要先修改这里
'use strict';
const Urls = {
  test: 'http://127.0.0.1:7001',
  online: 'http://47.99.191.234:8104',
};

const baseUrl = './';

module.exports = {
  /* baseUrl  type:{string} default:'/'
    将部署应用程序的基本URL
    默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.
    baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/', */
  baseUrl, // 根据你的实际情况更改这里
  // 输出文件目录
  outputDir: './app/view',
  //  lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,

  /* devServer:{type:Object} 3个属性host,port,https
    它支持webPack-dev-server的所有选项 */
  // devServer: {
  //   publicPath: baseUrl, // 和 baseUrl 保持一致
  // },

  /* productionSourceMap：{ type:Bollean,default:true } 生产源映射
    如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建 */
  productionSourceMap: false,

  chainWebpack: config => {
    // 忽略的打包文件
    config.externals({
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
      'element-ui': 'ELEMENT',
    });
    const entry = config.entry('app');
    entry
      .add('babel-polyfill')
      .end();
    entry
      .add('classlist-polyfill')
      .end();
  },
  transpileDependencies: [ 'avue-plugin-transfer', 'avue-plugin-ueditor' ],
  // 配置转发代理
  devServer: {
    port: 8085, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/daili': {
        target: Urls.test,
        ws: true,
        pathRewrite: {
          '^/daili': '',
          changeOrigin: true,
        },
      },
      // '/lance': {
      //     target: Urls.test1,
      //     ws: true,
      //     pathRewrite: {
      //         '^/lance': '',
      //         changeOrigin: true
      //     },
      // },
      // '/rob': {
      //     target: url + '/global/adminuser/',
      //     ws: true,
      //     pathRewrite: {
      //         '^/rob': '',
      //         changeOrigin: true
      //     },
      // }, // 配置多个代理
    },
  },
}
;
