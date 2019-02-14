// 基础路径 注意发布之前要先修改这里
let Urls = {
    test: "http://localhost/demo/00.vipadmin/sever/think-admin/public/admin/",
    online: "http://localhost/demo/00.vipadmin/sever/think-admin/public/admin/",
}

// 基础路径 注意发布之前要先修改这里
let baseUrl = './'
module.exports = {
    baseUrl: baseUrl, // 根据你的实际情况更改这里
    lintOnSave: true,
    productionSourceMap: false,
    chainWebpack: (config) => {
        //忽略的打包文件
        config.externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'element-ui': 'ELEMENT',
        })
        const entry = config.entry('app')
        entry
            .add('babel-polyfill')
            .end()
        entry
            .add('classlist-polyfill')
            .end()
        entry
            .add('@/mock')
            .end()
    },
    //配置转发代理
    devServer: {
        port: 8019, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: Urls.online,
                ws: true,
                pathRewrite: {
                    '^/api': '',
                    changeOrigin: true
                },
            },
            // '/lance': {
            //     target: Urls.test1,
            //     ws: true,
            //     pathRewrite: {
            //         '^/lance': '',
            //         changeOrigin: true
            //     },
            // } // 配置多个代理
        }
    }
}