import request from '@/router/axios';
// import { baseUrl } from '@/config/env';

export const registered = (page) => request({
    url: 'api/Info/updateInfos',
    method: 'post',
    data:page
});

export const registeredUser = (page) => request({
    url: 'api/People/registeredUser',
    method: 'post',
    data:page
});

export const loginTel = (page) => request({
    url: 'api/People/loginTel',
    method: 'post',
    data:page
});

export const loginEmail = (page) => request({
    url: 'api/People/loginEmail',
    method: 'post',
    data:page
});

export const loginUserName = (page) => request({
    url: 'api/People/loginUserName',
    method: 'post',
    data:page
});

export const loginImg = (page) => request({
    url: 'api/Code/ImageCode',
    method: 'post',
    data:page
});