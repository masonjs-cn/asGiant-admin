import request from '@/router/axios';
import { baseUrl } from '@/config/env';

// 查询所有表接口
export const CheckTableList = () => request({
    url: baseUrl + 'admin/Column/CheckTableList',
    method: 'post'
});

export const CheckTable = () => request({
    url: baseUrl + 'admin/Column/CheckTable',
    method: 'post'
});