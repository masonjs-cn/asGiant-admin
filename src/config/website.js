/**
 * 全局配置文件
 */
export default {
    title: "asGiant",
    logo: "A",
    key: 'asGiant',//配置主键,目前用于存储
    indexTitle: 'asGiant-admin',
    lockPage: '/lock',
    tokenTime: 6000,
    infoTitle: '站在巨人的肩膀上',
    //http的status默认放行不才用统一处理的,
    statusWhiteList: [400],
    //配置首页不可关闭
    isFirstPage: false,
    fistPage: {
        label: "首页",
        value: "/wel/index",
        params: {},
        query: {},
        group: [],
        close: false
    },
    //配置菜单的属性
    menu: {
        props: {
            label: 'label',
            path: 'path',
            icon: 'icon',
            children: 'children'
        }
    }
}