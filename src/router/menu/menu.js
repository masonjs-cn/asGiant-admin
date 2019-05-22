// export const dashboard = {
//     label: "数据概览",
//     path: '/dashboard',
//     component: 'views/dashboard/index',
//     icon: 'icon-tubiao1',
//     son: [],
//     power: ['BOSS', 'OPERATOR']
// }

// export const orderListMenu = {
//     label: "订单列表",
//     path: '/orderList',
//     icon: 'icon-jiekuandan',
//     son: ['risked', 'signature', 'withholding', 'toPay', 'unrepaid', 'unrepaidOverdue', 'repaymentPlan', 'loanList']
// }

// export const configListMenu = {
//     label: "配置管理列表",
//     path: '/configListMenu',
//     icon: 'icon-shezhi',
//     son: ['blacklist','auditConfig']
// }

// export const financialListMenu = {
//     label: "财务管理",
//     path: '/financialList',
//     icon: 'icon-financial',
//     son: ['repaidMarked', 'financialRepaid']
// }

// export const ManageReportMenu = {
//     label: "管理报表",
//     path: '/ManageReport',
//     icon: 'icon-jiekuanshenhezhong1',
//     son: ['weekhistory', 'repaymentReport', 'weekoverdue']
// }

// export const customer = {
//     label: "客户经理绩效",
//     path: '/customer',
//     icon: 'icon-baobiaozhongxin',
//     component: 'views/customer/index',
//     son: [],
//     power: ['BOSS', 'OPERATOR']
// }

// export const channelMenu = {
//     label: "渠道管理",
//     path: '/channel',
//     icon: 'icon-qudaoguanli',
//     son: [
//         "channelSummaryList",
//         "afterUserList",
//         "channelStatementList",
//         "channelList",
//         "channelStatement",
//         "channelManagementList",
//     ]

// }

// export const userMenu = {
//     label: "系统用户",
//     path: '/systemUsers',
//     icon: 'icon-user-list',
//     son: ['userList', 'groupList']
// }

// export const institutions = {
//     label: "机构列表",
//     path: '/institutions',
//     component: 'views/systemUsers/institutions/index',
//     icon: 'icon-jigou',
//     son: [],
//     power: ["SYSTEM_ADMIN"]
// }

export const authMenu = [{
  label: '数据库管理',
  path: '/database',
  component: 'views/database/index',
  icon: 'icon-shujukushili',
  children: [],
}, {
  label: '用户',
  path: '/user',
  icon: 'icon-yonghu',
  children: [{
    label: '用户管理',
    path: 'usermanage',
    component: 'views/user/usermanage/index',
    icon: 'icon-yonghu1',
    children: [],
  }, {
    label: '角色管理',
    path: 'roleList',
    component: 'views/user/roleList/index',
    icon: 'icon-role',
    children: [],
  }],
}, {
  label: '模板模块',
  path: '/template',
  component: 'views/dataDictionary/index',
  icon: 'icon-moxingbiangengrizhi',
  children: [],
}, {
  label: '系统设置',
  path: '/system',
  icon: 'icon-xitong',
  children: [{
    label: '短信管理',
    path: 'sms',
    component: 'views/system/sms/index',
    icon: 'icon-duanxin',
    children: [],
  }, {
    label: '邮箱管理',
    path: 'email',
    component: 'views/system/email/index',
    icon: 'icon-youxiang',
    children: [],
  }, {
    label: '图片管理',
    path: 'image',
    component: 'views/system/image/index',
    icon: 'icon-tupian',
    children: [],
  }, {
    label: '文件管理',
    path: 'file',
    component: 'views/system/file/index',
    icon: 'icon-icon--',
    children: [],
  }],

}]
;
