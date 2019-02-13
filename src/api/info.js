import request from '@/router/axios';
import { baseUrl } from '@/config/env';

export const checkField = () => request({
    url: baseUrl + 'admin/Info/checkField',
    method: 'post'
});

export const addInfos = () => request({
    url: baseUrl + 'admin/Info/addInfos',
    method: 'post'
});

export const deleInfos = () => request({
    url: baseUrl + 'admin/Info/deleInfos',
    method: 'post'
});

export const updateInfos = () => request({
    url: baseUrl + 'admin/Info/updateInfos',
    method: 'post'
});