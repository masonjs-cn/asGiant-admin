import request from '@/router/axios';

// 查询所有表接口
export const CheckTableList = (page) => request({
    url: 'api/Column/CheckTableList',
    method: 'post',
    data: page
})

export const CheckTable = (page) => request({
    url: 'admin/Column/CheckTable',
    method: 'post',
    data: page
});