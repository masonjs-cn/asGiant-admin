import Mock from 'mockjs'
const top = [{
    label: "首页",
    path: "/wel/index",
    icon: 'el-icon-menu',
    parentId: 0
},
// {
//     label: "官网",
//     icon: 'el-icon-document',
//     path: "https://avuex.avue.top",
//     parentId: 1
// },
// {
//     label: "测试",
//     icon: 'el-icon-document',
//     path: "https://avuex.avue.top",
//     parentId: 2
// }
]

const first = [{
    label: "数据库",
    path: '/database',
    component: 'views/database/index',
    icon: 'icon-shujuku',
    children: []
}, {
    label: "用户管理",
    path: '/user',
    icon: 'icon-usergroup',
    children: [{
            label: "管理用户",
            path: 'userList',
            component: 'views/usermanage/index',
            icon: 'icon-yonghu',
            children: []
        },
        {
            label: "角色管理",
            path: '/roleList',
            component: 'views/role/index',
            icon: 'icon-role',
            children: []
        }]
},{
    label: "附件管理",
    path: '/attachment',
    component: 'views/attachment/index',
    icon: 'icon-fujianguanli',
    children: []
},{
    label: "邮箱管理",
    path: '/email',
    component: 'views/email/index',
    icon: 'icon-youxiang',
    children: []
},{
    label: "短信管理",
    path: '/sms',
    component: 'views/sms/index',
    icon: 'icon-duanxin',
    children: []
},]

const second = [{
    label: "首页",
    path: '/wel',
    component: 'views/wel',
    icon: 'icon-caidan',
    children: []
}, {
    label: "标签",
    path: '/tags',
    component: 'views/util/tags',
    icon: 'icon-caidan',
    children: []
}, {
    label: "存储",
    path: '/store',
    component: 'views/util/store',
    icon: 'icon-caidan',
    children: []
}, {
    label: "全局函数",
    path: 'https://avuex.avue.top/$/doc/api',
    icon: 'icon-caidan',
    children: []
}, {
    label: "日志监控",
    path: '/logs',
    component: 'views/util/logs',
    icon: 'icon-caidan',
    children: []
}, {
    label: "表格",
    path: '/table',
    component: 'views/util/table',
    icon: 'icon-caidan',
    children: []
}, {
    label: "表单",
    path: '/form',
    component: 'views/util/form',
    icon: 'icon-caidan',
    children: []
}, {
    label: "数据展示",
    path: '/data',
    component: 'views/util/data',
    icon: 'icon-caidan',
    children: []
}, {
    label: "异常页",
    path: '/error',
    icon: 'icon-caidan',
    children: [{
        label: "403",
        path: 'error',
        component: 'components/error-page/403',
        icon: 'icon-caidan',
        children: []
    }, {
        label: "404",
        path: '404',
        component: 'components/error-page/404',
        icon: 'icon-caidan',
        children: []
    }, {
        label: "500",
        path: '500',
        component: 'components/error-page/500',
        icon: 'icon-caidan',
        children: []
    }]
}]

const third = [{
    label: "测试页面",
    path: '/test',
    component: 'views/test',
    icon: 'icon-caidan',
    children: []
}]
export default ({ mock }) => {
    if (!mock) return;
    let menu = [first, second, third];
    Mock.mock('/user/getMenu', 'get', (res) => {
        let body = JSON.parse(res.body);
        return {
            data: menu[body.type] || []
        }
    })
    Mock.mock('/user/getTopMenu', 'get', () => {
        return {
            data: top
        }
    })

}