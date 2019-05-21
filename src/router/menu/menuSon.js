export const risked = {
    label: "待审核",
    path: 'risked',
    component: 'views/risked/index',
    icon: 'icon-daishenhe',
    children: [],
    // meta: {
    //     keepAlive: true,
    // },
    power: ["CSM", "DIRECTOR_CSM", 'OPERATOR']
}

export const signature = {
    label: "电子签章",
    path: 'signature',
    component: 'views/signature/index',
    icon: 'icon-qianming',
    children: [],
    power: ["CSM", "DIRECTOR_CSM", 'OPERATOR']
}

export const withholding = {
    label: "代扣列表",
    path: 'withholding',
    component: 'views/withholding/index',
    icon: 'icon-shishidaikou',
    children: [],
    power: ["CSM", "DIRECTOR_CSM", 'OPERATOR']
}


export const toPay = {
    label: "待放款",
    path: 'toPay',
    component: 'views/toPay/index',
    meta: {
        keepAlive: true,
    },
    icon: 'icon-weituodaikuanfangkuan',
    children: [],
    power: ["CSM", "DIRECTOR_CSM", 'MANAGER_FINANCE','OPERATOR']
}

export const unrepaid = {
    label: "待还款",
    path: 'unrepaid',
    component: 'views/unrepaid/index',
    icon: 'icon-huankuan',
    children: [],
    // meta: {
    //     keepAlive: true,
    // },
    power: ["CSM", "DIRECTOR_CSM",'OPERATOR']
}

export const unrepaidOverdue = {
    label: "已逾期",
    path: 'unrepaidOverdue',
    query: {
        overdueDaysGe: 1
    },
    // meta: {
    //     keepAlive: true,
    // },
    component: 'views/unrepaid/unrepaid-overdue',
    icon: 'icon-yuqi',
    children: [],
    power: ["CSM", "DIRECTOR_CSM",'OPERATOR']
}

export const repaymentPlan = {
    label: "还款计划",
    path: 'repaymentPlan',
    component: 'views/repayment-plan/index',
    icon: 'icon-jihua',
    children: [],
    power: ["CSM", "DIRECTOR_CSM", 'OPERATOR']
}

export const loanList ={
    label: "订单查询",
    path: 'loanList',
    meta:{
        keepAlive: true,
    },
    component: 'views/loanLists/loanList/index',
    icon: 'icon-jiekuanjilu',
    children: [],
    power: ["CSM", "DIRECTOR_CSM",'OPERATOR']
}

export const blacklist = {
    label: "黑名单",
    path: 'blacklist',
    meta: {
        keepAlive: true,
    },
    component: 'views/blacklist/index',
    icon: 'icon-jiekuanjilu',
    children: [],
    power: ["DIRECTOR_CSM", 'OPERATOR']
}

export const auditConfig={
    label: "审核配置",
    path: 'auditConfig',
    component: 'views/auditConfig/index',
    icon: 'icon--peizhishujuyuan',
    children: [],
    power: ["DIRECTOR_CSM", 'OPERATOR']
}

export const repaidMarked = {
    label: "财务提现",
    path: 'repaidMarked',
    component: 'views/repaidMarked/index',
    icon: 'icon-tixian',
    children: [],
    power: ["CSM", "DIRECTOR_CSM", "MANAGER_FINANCE",'OPERATOR']
}

export const financialRepaid = {
    label: "财务报表",
    path: 'repaidReport',
    component: 'views/repaidReport/index',
    icon: 'icon-caiwutongji',
    children: [],
    power: ['BOSS','MANAGER_FINANCE','OPERATOR']
}

export const weekhistory = {
    label: "借还款总额报表",
    path: 'weekhistory',
    component: 'views/weekhistory/index',
    icon: 'icon-shenghuoxinyongqiahuankuan',
    children: [],
    power: ["BOSS",'OPERATOR']
}

export const repaymentReport = {
    label: "借还款报表",
    path: 'repaymentReport',
    component: 'views/repaymentReport/index',
    icon: 'icon-daikuan',
    children: [],
    power: ["BOSS",'OPERATOR']
}

export const weekoverdue = {
    label: "逾期报表",
    path: 'weekoverdue',
    component: 'views/weekoverdue/index',
    icon: 'icon-iconfontzhizuobiaozhun0245',
    children: [],
    power: ["BOSS",'OPERATOR']
}


export const channelSummaryList = {
    label: "渠道明细汇总表",
    path: 'channelSummaryList',
    component: 'views/channel/channelSummary-list/index',
    icon: 'icon-tongjibaobiao1',
    children: [],
    power: [
        "CHANNEL_MAJ",
        'OPERATOR'
    ]
}

export const afterUserList = {
    label: "复借用户报表",
    path: 'afterUserList',
    component: 'views/channel/afterUser-list/index',
    icon: 'icon-qizhatongji',
    children: [],
    power: [
        "CHANNEL_MAJ",
        'OPERATOR'
    ]
}

export const channelList ={
    label: "渠道方列表",
    path: 'channelList',
    component: 'views/channel/report-list/index',
    icon: 'icon-wodeyuyue',
    children: [],
    power: [
        "CHANNEL_CLIENT",
        "CHANNEL_NOR",
        // 'OPERATOR'
    ]
}

export const channelStatement = {
    label: "渠道明细报表",
    path: 'channelStatement',
    component: 'views/channel/report-detail/index',
    icon: 'icon-yanjizhushou-shangchuan_goumaiqudao',
    children: [],
    power: ["CHANNEL_CLIENT"]
}

export const channelStatementList = {
    label: "渠道管理员报表",
    path: 'channelStatementList',
    component: 'views/channel/report-mgr/index',
    icon: 'icon-channel',
    children: [],
    power: [
        "BOSS",
        "CHANNEL_MAJ",
        "CHANNEL_CSM",
        'OPERATOR'
    ]
}

export const channelManagementList = {
    label: "渠道管理列表",
    path: 'channelManagementList',
    component: 'views/channel/channel-list/index',
    icon: 'icon-qudaoqushiduibifenxi',
    children: [],
    power: [
        "CHANNEL_MAJ",
        "CHANNEL_CSM",
        'OPERATOR'
    ]
}

export const userList = {
    label: "用户列表",
    path: 'userList',
    component: 'views/systemUsers/user/index',
    icon: 'icon-yonghu',
    children: [],
    power: ["ORGANIZATION_ADMIN"]
}

export const groupList = {
    label: "组列表",
    path: 'groupList',
    component: 'views/systemUsers/group/index',
    icon: 'icon-zuzhiguanli',
    children: [],
    power: ["ORGANIZATION_ADMIN"]
}