import request from '@/router/axios';
import { baseUrl } from '@/config/env';

// 新建数据库
export const newTable = () => request({
    url: baseUrl + 'admin/DataCenter/newTable',
    method: 'post'
});

// 删除数据库
export const deleTable = () => request({
    url: baseUrl + 'admin/DataCenter/deleTable',
    method: 'post'
});

// 修改数据库
export const updateTable = () => request({
    url: baseUrl + 'admin/DataCenter/updateTable',
    method: 'post'
});

// 增加字段接口
export const addTableField = () => request({
    url: baseUrl + 'admin/DataCenter/addTableField',
    method: 'post'
});

// 删除字段接口
export const deleTableField = () => request({
    url: baseUrl + 'admin/DataCenter/deleTableField',
    method: 'post'
});