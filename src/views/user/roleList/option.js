// import {
//     DIC
// } from '@/const/dic'
// import * as tool from '@/util/tool'

export const userOption = {
    menuAlign: 'center',
    border: true,
    index: true,
    column: [{
            label: '角色名称',
            prop: 'roleName',
            maxRow: 4,
            minRow: 4,
            span: 24,
            type: 'select',
            dicData: [],
        },
        {
            label: '角色id',
            prop: 'roleid',
            disabled: true,
            addDisabled: true,
            editDisabled: true,
            overHidden: true
        }
    ]
}