// import {
//     DIC
// } from '@/const/dic'
import * as tool from '@/util/tool'

export const emailOption = {
    menuAlign: 'center',
    align: "center",
    border: true,
    index: false,
    dialogWidth:"40%",
    column: [
        {
            label: '邮箱名称',
            prop: 'e_mailName',
            width: 100,
            span:24,
        },
        {
            label: 'ip地址',
            prop: 'host',
            width:150,
            span: 24,
        },
        {
            label: '端口号',
            prop: 'port',
            span: 24,
        }, 
        {
            label: 'SSL',
            prop: 'secureConnection',
            span: 24,
        },
        {
            label: '用户名',
            prop: 'user',
            width: 200,
            span: 24,
        },
        {
            label: '密码',
            prop: 'pass',
            width: 130,
            span: 24,
        },
        {
            label: '邮箱id',
            prop: 'e_mail_id',
            width: 320,
            span: 24,
        },
    ]
}



// 请输入邮箱名称
// 请输入ip地址
// 请正确输入端口号
// 是否使用了SSL
// 请输入用户名
// 请输入密码
