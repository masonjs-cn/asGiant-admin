import request from '@/router/axios';
import {
   baseUrl
} from '@/config/env';

// 
export const addEmailConfig = (page) => request({
    url: baseUrl + '/email/addEmailConfig',
    method: 'post',
    data: page
});

export const getEmailConfigs = (page) => request({
    url: baseUrl + '/email/getEmailConfigs',
    method: 'post',
    data: page
});
