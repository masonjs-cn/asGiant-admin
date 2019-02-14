import request from '@/router/axios';

// 查询所有表接口
export const CheckTableList = (page) => request({
    url: 'api/Column/CheckTableList',
    method: 'post',
    data: page
})

// 查询表
export const CheckTable = (page) => request({
    url: 'api/Column/CheckTable',
    method: 'post',
    data: page
});