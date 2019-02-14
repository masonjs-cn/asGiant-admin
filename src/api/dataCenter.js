import request from '@/router/axios';
// import { baseUrl } from '@/config/env';

// 新建数据库
export const newTable = (page) => request({
    url: 'api/DataCenter/newTable',
    method: 'post',
    data: page
});

// 删除数据库
export const deleTable = (page) => request({
    url: 'api/DataCenter/deleTable',
    method: 'post',
    data: page
});

// 修改数据库
export const updateTable = (page) => request({
    url: 'api/DataCenter/updateTable',
    method: 'post',
    data: page
});

// 增加字段接口
export const addTableField = (page) => request({
    url: 'api/DataCenter/addTableField',
    method: 'post',
    data: page
});


// 删除字段接口
export const deleTableField = (page) => request({
    url: 'api/DataCenter/deleTableField',
    method: 'post',
    data: page
});