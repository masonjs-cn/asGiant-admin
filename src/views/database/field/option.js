// import {
//     DIC
// } from '@/const/dic'
// import * as tool from '@/util/tool'

export const userOption = {
    menuAlign: 'center',
    border: true,
    index: true,
    dialogWidth: "40%",
    dialogHeight:"300",
    headerAlign: 'center',
    align: 'center',
    expandAll: false,
    expandLevel: 2,
    tree:true,
    column: [{
            label: '数据库',
            prop: 'column',
            span: 24,
        },
        {
            label: '数据库名称',
            prop: 'columnName',
            span: 24,
        }, {
            label: '备注',
            prop: 'note',
            type: 'textarea',
            span: 24,
        }
    ]
}


// option: {
//   headerAlign: 'center',
//   align: 'center',
//   expandAll: false,
//   expandLevel: 2,
//   tree:true,
//   border: true,
//   index: true,
//   column: [
//     {
//       label: '事件',
//       prop: 'event',
//       align: 'left',
//       width: 200
//     },
//     {
//       label: 'ID',
//       prop: 'id',
//       dicData: [{
//         label: '零',
//         value: 0
//       }, {
//         label: '一',
//         value: 1
//       }, {
//         label: '二',
//         value: 2,
//       }]
//     },
//     {
//       label: '时间线',
//       prop: 'timeLine'
//     },
//     {
//       label: '自定义图标',
//       prop: 'icon',
//       slot: true,
//     },
//     {
//       label: '备注',
//       prop: 'comment'
//     }
//   ],
// },
