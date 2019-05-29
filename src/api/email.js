import request from '@/router/axios';
import {
   myUrl
} from '@/config/env';

// 
export const addEmailConfig = (page) => request({
    url: myUrl + '/email/addEmailConfig',
    method: 'post',
    data: page
});

export const getEmailConfigs = (page) => request({
    url: myUrl + '/email/getEmailConfigs',
    method: 'post',
    data: page
});
