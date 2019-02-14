// import {
//     DIC
// } from '@/const/dic'
import * as tool from '@/util/tool'

export const userOption = {
    menuAlign: 'center',
    border: true,
    index: true,
    column: [{
            label: '角色',
            prop: 'orgid',
            maxRow: 4,
            minRow: 4,
            span: 24,
            type: 'select',
            dicData: [],
            width: 130
        },
        {
            label: '手机号',
            width:150,
            prop: 'ipone',
            disabled: true,
            addDisabled: true,
            editDisabled: true,
            overHidden: true
        },
        {
            label: '密码',
            prop: 'password',
            disabled: true,
            editDisabled: true,
            hide: true,
            overHidden: true
        },
        {
            label: '姓名',
            prop: 'username',
            width: 100,
            disabled: true,
            editDisabled: true,
            overHidden: true
        },
        {
            label: '昵称',
            width: 100,
            prop: 'nickname'
        },
        {
            label: '邮箱',
            prop: 'e_mail',
            width: 180,
            disabled: true,
            addDisabled: true,
            editDisabled: true,
            overHidden: true
        },
        {
            label: 'ip地址',
            prop: 'last_login_ip',
            disabled: true,
            addDisabled: true,
            editDisabled: true,
            overHidden: true,
            width: 130,
            span: 12
        },
        {
            label: '最后登录',
            prop: 'last_login_time',
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
            maxRow: 4,
            minRow: 4,
            span: 12,
            dicData: [{
                label: '正常使用',
                value: 0
            }, {
                label: '冻结',
                value: 1
            }]
        },
        {
            label: '用户id',
            prop: 'rid',
            disabled: true,
            addDisabled: true,
            editDisabled: true,
            overHidden: true,
            maxRow: 4,
            minRow: 4,
            span: 12,
            width: 180,
        }
    ]
}