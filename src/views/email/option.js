// import {
//     DIC
// } from '@/const/dic'
// import * as tool from '@/util/tool'

export const userOption = {
    menuAlign: 'center',
    border: true,
    index: true,
    column: [{
            label: '服务器地址',
            prop: 'host',
            dicData: [],
            width: 120
        },{
            label: '端口',
            prop: 'port',
            dicData: [],
            width: 100
        }, {
            label: '服务器地址名称',
            prop: 'hostname',
            dicData: [],
            width: 130
        }, {
            label: '邮件的标题',
            prop: 'title',
            dicData: [],
            width: 200
        }, {
            label: '邮件的内容',
            prop: 'content',
            dicData: [],
        }, {
            label: '邮件的发件人',
            prop: 'timu',
            dicData: [],
            width: 130
        }, {
            label: '邮箱的账户名',
            prop: 'username',
            dicData: [],
            width: 200
        }, {
            label: '邮箱的密码',
            prop: 'password',
            dicData: [],
            width: 150
        }, {
            label: '有限配置编号',
            prop: 'e_mailid',
            dicData: [],
            width:350
        },
    ]
}