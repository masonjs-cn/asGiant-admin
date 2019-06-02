import request from '@/router/axios';
import { getImgToken } from '@/util/auth'
import {
    baseUrl
} from '@/config/env';


export const getColumnList = (page) => request({
    url: baseUrl + '/column/getColumnList',
    method: 'post',
    data: page
})

export const addColumn = (page) => request({
    url: baseUrl + '/column/addColumn',
    method: 'post',
    data: page
})