// import {
//     DIC
// } from '@/const/dic'
import * as tool from '@/util/tool'

export const repaidMarkedOption = {
    align: 'center',
    addBtn: false,
    border: true,
    filterBtn: false,
    delBtn: false,
    editBtn: false,
    column: [{
        label: '统计周期',
        prop: 'countTime',
        type: "datetimerange",
        format: "yyyy-MM-dd",
        valueFormat: "yyyy-MM-dd",
        width: 170,
        formatter: (obj) => {
           var date = new Date(obj.countTime);
           var y = date.getFullYear();
           var m = date.getMonth() + 1;
           m = m < 10 ? ('0' + m) : m;
           var d = date.getDate();
           d = d < 10 ? ('0' + d) : d;
           return y + '-' + m + '-' + d + ' ';
        }
    }, {
        label: '实际放款金额',
        prop: 'collatePaymoneyExt',
        align: 'right',
        width:130,
        formatter: tool.thousandList,
    }, {
        label: '线上还款金额',
        prop: 'collateOnlineRepaymentMoneyExt',
        align: 'right',
        width: 130,
        formatter: tool.thousandList,
    }, {
        label: '标记还款金额',
        prop: 'collateMarkRepaymentMoneyExt',
        align: 'right',
        width: 130,
        formatter: tool.thousandList,
    }, {
        label: '标记还款手续费',
        prop: 'markRepaymentCharge',
        align: 'right',
        formatter: tool.thousandList,
        width:180
    }, {
        label: '实际标记到账总金额',
        prop: 'markArrivalAmount',
        align: 'right',
        formatter: tool.thousandList,
        width:180
    }, {
        label: '备注',
        prop: 'memo'
    }, {
        label: '订单状态',
        prop: 'status',
        type: 'select',
        dicData: [
            {
                label: '已核对',
                value: 1,
            },{
                label: '未核对',
                value: 0,
            }
        ]
        // formatter: (obj) => {
        //     let statusArry =[];
        //     statusArry.push(obj.collateMarkRepaymentMoneyStatus); //线下还款核账状态
        //     statusArry.push(obj.collateOnlineRepaymentMoneyStatus); //线上还款核账状态
        //     statusArry.push(obj.collatePaymoneyStatus); //线上还款核账状态
        //     // statusArry.push(obj.markArrivalAmountStatus); //标记还款到账金额状态
        //     let statu=statusArry.every(function (item) {
        //          return item === 1
        //     })
        //     return statu == true ? "已核对" : "未核对";
        // }
    }]
};

export const accountOption = {
    column: [
    {
        label: '实际放款金额',
        prop: 'collatePaymoney',
        labelWidth: 110,
        rules: [{
            required: true,
            message: "请输入实际放款金额",
            trigger: "blur"
        }, {
            pattern: /^[1-9]\d*|0$/,
            message: '请输入正整数'
        }]
    }, 
    {
        label: '',
        type: "select",
        prop: 'collatePaymoneyStatus',
        dicData: [
            {
                label: "未核账",
                value: 0
            }, 
            {
                label: "已核账",
                value: 1
            }
        ]
    }, 
    {
        label: '标记线上还款金额',
        prop: 'collateOnlineRepaymentMoney',
        labelWidth: 140,
        rules: [{
            required: true,
            message: "请输入标记线上还款金额",
            trigger: "blur"
        }, {
            pattern: /^[1-9]\d*|0$/,
            message: '请输入正整数'
        }]
    }, 
    {

        label: '',
        type: "select",
        prop: 'collateOnlineRepaymentMoneyStatus',
        dicData: [
            {
                label: "未核账",
                value: 0
            }, 
            {
                label: "已核账",
                value: 1
            }
        ]
    },
    {
        label: '标记还款金额',
        prop: 'collateMarkRepaymentMoney',
        labelWidth: 130,
        rules: [{
            required: true,
            message: "请输入标记还款金额",
            trigger: "blur"
        }, {
            pattern: /^[1-9]\d*|0$/,
            message: '请输入正整数'
        }]
    }, {
        label: '',
        type: "select",
        prop: 'collateMarkRepaymentMoneyStatus',
        dicData: [{
                label: "未核账",
                value: 0
            },
            {
                label: "已核账",
                value: 1
            }
        ]
    }, 
    // {
    //     label: '标记还款实际到账金额',
    //     prop: 'markArrivalAmount',
    //     labelWidth: 170,
    //     rules: [{
    //         required: true,
    //         message: "请输入标记还款实际到账金额",
    //         trigger: "blur"
    //     }, {
    //         pattern: /^[1-9]\d*|0$/,
    //         message: '请输入正整数'
    //     }]
    // },
    // {
    //     label: '',
    //     type: "select",
    //     prop: 'markArrivalAmountStatus',
    //     dicData: [{
    //             label: "未核账",
    //             value: 0
    //         },
    //         {
    //             label: "已核账",
    //             value: 1
    //         }
    //     ]
    // }, 
    {
        label: '备注',
        prop: 'memo',
        type: 'textarea',
        span:20,
        rules: [{
            required: true,
            message: "请输入备注",
            trigger: "blur"
        }]
    }]
};
