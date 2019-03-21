import request from '@/router/axios';
import { baseUrl, api } from '@/config/env';

// 查询所有表接口
export const CheckTableList = (page) => request({
    url: baseUrl + api + '/Column/CheckTableList',
    method: 'post',
    data: page
})

// 查询表
export const CheckTable = (page) => request({
    url: baseUrl + api + '/Column/CheckTable',
    method: 'post',
    data: page
});