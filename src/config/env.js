// 配置编译环境和线上环境之间的切换

let baseUrl = '';
let api = '';
let iconfontVersion = ['567566_qvjwfwtkrs'];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
let codeUrl = `${baseUrl}/code`
const env = process.env

if (env.NODE_ENV == 'development') {
    baseUrl = ``; // 开发环境地址
    api = 'api'
} else if (env.NODE_ENV == 'production') {
    baseUrl = `admin/`; //生产环境地址
    api = ''
} else if (env.NODE_ENV == 'test') {
    baseUrl = `admin/`; //测试环境地址
    api = ''
}
export {
    api,
    baseUrl,
    iconfontUrl,
    iconfontVersion,
    codeUrl,
    env
}