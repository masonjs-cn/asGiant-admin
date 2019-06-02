const TYPE = [{
    label: '类型1',
    value: '0'
}, {
    label: '类型2',
    value: '1'
}]
export const basicComponents = [{
    label: '输入框',
    prop: 'input',
    dataType:'Sting',
    span: 12
}, {
    label: '选择框',
    prop: 'select',
    type: 'select',
    dataType: 'Sting',
    dicData: TYPE,
    span: 12
}, {
    label: '数字框',
    prop: 'number',
    type: 'number',
    dataType: 'Number',
    span: 12
}, {
    label: '单选框',
    prop: 'radio',
    type: 'radio',
    dataType: 'Sting',
    dicData: TYPE,
    span: 12

}, {
    label: '多选框',
    prop: 'checkbox',
    type: 'checkbox',
    dataType: 'Sting',
    dicData: TYPE,
    span: 12

}, {
    label: '日期时间框',
    prop: 'datetime',
    type: 'datetime',
    dataType: 'Sting',
    span: 12

}, {
    label: '日期框',
    prop: 'date',
    type: 'date',
    dataType: 'Sting',
    span: 12

}, {
    label: '时间框',
    prop: 'time',
    type: 'time',
    dataType: 'Sting',
    span: 12

}, {
    label: '日期时间范围框',
    prop: 'datetimerange',
    type: 'datetimerange',
    dataType: 'Sting',
    span: 12

}, {
    label: '日期范围框',
    prop: 'daterange',
    type: 'daterange',
    dataType: 'Sting',
    span: 12

}, {
    label: '时间范围框',
    prop: 'timerange',
    type: 'timerange',
    dataType: 'Sting',
    span: 12

}, {
    label: '开关框',
    prop: 'switch',
    type: 'switch',
    dataType: 'Sting',
    dicData: TYPE,
    span: 12

}, {
    label: '滑动',
    prop: 'silder',
    type: 'silder',
    dataType: 'Sting',
    span: 12

}, {
    label: '多行文本框',
    prop: 'textarea',
    type: 'textarea',
    dataType: 'Sting',
    span: 12,
    minRows: 6
}]

export const advanceComponents = [{
    label: '树形框',
    prop: 'tree',
    type: 'tree',
    span: 12

}]
export const layoutComponents = []