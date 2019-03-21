import request from '@/router/axios';
import { baseUrl, api } from '@/config/env';

export const checkField = (page) => request({
    url:  baseUrl + api + '/Info/checkField',
    method: 'post',
    data: page
});

export const addInfos = (page) => request({
    url:  baseUrl + api + '/Info/addInfos',
    method: 'post',
    data: page
});

export const deleInfos = (page) => request({
    url:  baseUrl + api + '/Info/deleInfos',
    method: 'post',
    data: page
});

export const updateInfos = (page) => request({
    url:  baseUrl + api + '/Info/updateInfos',
    method: 'post',
    data: page
});