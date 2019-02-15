import request from '@/router/axios';
// import { baseUrl } from '@/config/env';

export const checkField = (page) => request({
    url: 'api/Info/checkField',
    method: 'post',
    data: page
});

export const addInfos = (page) => request({
    url: 'api/Info/addInfos',
    method: 'post',
    data: page
});

export const deleInfos = (page) => request({
    url: 'api/Info/deleInfos',
    method: 'post',
    data: page
});

export const updateInfos = (page) => request({
    url: 'api/Info/updateInfos',
    method: 'post',
    data: page
});