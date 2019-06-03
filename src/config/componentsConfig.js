const TYPE = [{
    label: '类型1',
    value: '0'
}, {
    label: '类型2',
    value: '1'
}]

export const inputComponents = [{
    label: '输入框',
    prop: 'input',
    dataType: 'Sting',
    span: 24
}, {
    label: '密码输入框',
    prop: 'password',
    type: 'password',
    dataType: 'Sting',
    span: 24
}, {
    label: '动态输入框',
    prop: 'dynamic',
    type: 'dynamic',
    dataType: 'Array',
    span: 24,
    minRows: 6
}, {
    label: '多行文本框',
    prop: 'textarea',
    type: 'textarea',
    dataType: 'Sting',
    span: 24,
    minRows: 6
}]

export const basicComponents = [
{
    label: '选择框',
    prop: 'select',
    type: 'select',
    dataType: 'Sting',
    dicData: TYPE,
    span: 24
}, {
    label: '数字框',
    prop: 'number',
    type: 'number',
    dataType: 'Number',
    span: 24
}, {
    label: '单选框',
    prop: 'radio',
    type: 'radio',
    dataType: 'Sting',
    dicData: TYPE,
    span: 24

}, {
    label: '多选框',
    prop: 'checkbox',
    type: 'checkbox',
    dataType: 'Sting',
    dicData: TYPE,
    span: 24
},{
    label: '开关框',
    prop: 'switch',
    type: 'switch',
    dataType: 'Sting',
    dicData: TYPE,
    span: 24
}, 
{
    label: '滑块',
    prop: 'silder',
    type: 'silder',
    dataType: 'Sting',
    span: 24,
    minRows: 6
}]

export const timeComponents = [
    {
        label: '日期时间框',
        prop: 'datetime',
        type: 'datetime',
        dataType: 'Sting',
        span: 24

    }, {
        label: '日期框',
        prop: 'date',
        type: 'date',
        dataType: 'Sting',
        span: 24
    }, {
        label: '时间框',
        prop: 'time',
        type: 'time',
        dataType: 'Sting',
        span: 24
    }, {
        label: '日期时间范围框',
        prop: 'datetimerange',
        type: 'datetimerange',
        dataType: 'Sting',
        span: 24
    }, {
        label: '日期范围框',
        prop: 'daterange',
        type: 'daterange',
        dataType: 'Sting',
        span: 24
    }, {
        label: '时间范围框',
        prop: 'timerange',
        type: 'timerange',
        dataType: 'Sting',
        span: 24
    },
    {
        label: '多个日期',
        prop: 'dates',
        type: 'dates',
        dataType: 'Array',
        span: 24
    },
    {
      label: '周选择器',
      prop: 'week',
      type: 'week',
      dataType: 'Sting',
      span: 24
    }, 
    {
        label: '月选择器',
        prop: 'month',
        type: 'month',
        dataType: 'Sting',
        span: 24
    },
    {
        label: '年选择器',
        prop: 'year',
        type: 'year',
        dataType: 'Sting',
        span: 24
    }
]

export const advanceComponents = [{
    label: '树形框',
    prop: 'tree',
    type: 'tree',
    span: 24

}]

export const layoutComponents = []