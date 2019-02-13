import request from '@/router/axios';
import { baseUrl } from '@/config/env';

export const registered = () => request({
    url: baseUrl + 'admin/Info/updateInfos',
    method: 'post'
});

export const registeredUser = () => request({
    url: baseUrl + 'admin/People/registeredUser',
    method: 'post'
});

export const loginTel = () => request({
    url: baseUrl + 'admin/People/loginTel',
    method: 'post'
});

export const loginEmail = () => request({
    url: baseUrl + 'admin/People/loginEmail',
    method: 'post'
});

export const loginUserName = () => request({
    url: baseUrl + 'admin/People/loginUserName',
    method: 'post'
});

export const loginImg = () => request({
    url: baseUrl + 'admin/Code/ImageCode',
    method: 'post'
});