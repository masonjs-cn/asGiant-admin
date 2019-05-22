// import {
//     DIC
// } from '@/const/dic'
import * as tool from '@/util/tool'

export const userOption = {
    menuAlign: 'center',
    align: "center",
    border: true,
    index: false,
    dialogWidth:"40%",
    addBtn: false,
    column: [
        {
            label: '用户名',
            prop: 'username',
            span:24,
            width: 180,
            disabled: true,
            addDisplay: false,
            editDisplay: false,
            overHidden: true,
            search: true,
        }, 
        {
            label: '角色',
            prop: 'role',
            type: 'select',
            span: 24,
            width: 180,
            addDisplay: true,
            overHidden: true,
            dicData:[]
        },
        {
            label: '手机号',
            width:150,
            prop: 'ipone',
            span: 24,
            disabled: true,
            addDisplay: false,
            editDisplay: false,
            overHidden: true
        },
        {
            label: '密码',
            prop: 'password',
            span: 24,
            disabled: true,
            editDisplay: false,
            hide: true,
            overHidden: true
        },
        {
            label: '邮箱',
            prop: 'e_mail',
            span: 24,
            width: 180,
            disabled: true,
            addDisplay: true,
            editDisplay: false,
            overHidden: true
        },
        {
            label: 'ip地址',
            prop: 'last_login_ip',
            span: 24,
            disabled: true,
            addDisplay: true,
            editDisplay: false,
            overHidden: true,
            width: 130,
        },
        {
            label: '最后登录',
            prop: 'last_login_time',
            span: 24,
            type: "time",
            disabled: true,
            addDisplay: false,
            editDisplay: false,
            width: 180,
            formatter: tool.timestampToTime,
        },
        {
            label: '冻结',
            prop: 'freeze',
            type: 'select',
            span: 24,
            dicData: [{
                label: '正常使用',
                value: "0"
            }, {
                label: '冻结',
                value: "1"
            }]
        }
    ]
}