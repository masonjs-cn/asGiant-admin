import Layout from '@/page/index/'
export default [{
    path: '/wel',
    component: Layout,
    redirect: '/wel/index',
    children: [{
        path: 'index',
        name: '首页',
        component: () =>
            import( /* webpackChunkName: "views" */ '@/views/wel')
    }]
}, {
    path: '/test',
    component: Layout,
    redirect: '/test/index',
    children: [{
        path: 'index',
        name: '测试页',
        component: () =>
            import( /* webpackChunkName: "views" */ '@/views/util/test')
    }]
}, {
    path: '/info',
    component: Layout,
    redirect: '/info/index',
    children: [{
        path: 'index',
        name: '个人信息',
        component: () =>
            import( /* webpackChunkName: "views" */ '@/views/user/info')
    }]
},{
    path: '/fieldlist',
    component: Layout,
    redirect: '/fieldlist/index',
    children: [{
        path: 'index',
        name: '字段管理',
        component: () =>
            import('@/views/tableField/index')
    }]
}]