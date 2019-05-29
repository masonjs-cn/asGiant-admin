// import {
//     DIC
// } from '@/const/dic'
import * as tool from '@/util/tool'

export const roleOption = {
    menuAlign: 'center',
    align: "center",
    border: true,
    index: false,
    dialogWidth:"40%",
    column: [
        {
            label: '角色',
            prop: 'role',
            span:24,
        }, 
        {
            label: '角色名称',
            prop: 'roleName',
            type: 'select',
            span: 24,
        }, {
            label: '备注',
            prop: 'note',
            type: 'select',
            span: 24,
        }
    ]
}