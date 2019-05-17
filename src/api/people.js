import request from '@/router/axios';
import { baseUrl, api } from '@/config/env';
 
export const registered = (page) => request({
    url: baseUrl+ api + '/Info/updateInfos',
    method: 'post',
    data:page
});

export const registeredUser = (page) => request({
    url: baseUrl+ api + '/People/registeredUser',
    method: 'post',
    data:page
});

// 手机登录
export const loginTel = (page) => request({
    url: baseUrl+ api + '/People/loginTel',
    method: 'post',
    data:page
});

// 邮箱登录
export const loginEmail = (page) => request({
    url: baseUrl+ api +'/People/loginEmail',
    method: 'post',
    data:page
});

// 用户名登录
export const loginUserName = (page) => request({
    url: baseUrl+ api +'/People/loginUserName',
    method: 'post',
    data:page
});

export const loginImg = (page) => request({
    url: baseUrl+ api +'/Code/ImageCode',
    method: 'post',
    data:page
});