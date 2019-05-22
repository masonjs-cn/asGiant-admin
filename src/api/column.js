import request from '@/router/axios';
import { getImgToken } from '@/util/auth'
import {
    baseUrl,
    myUrl
} from '@/config/env';


export const getColumnList = (page) => request({
    url: myUrl + '/column/getColumnList',
    method: 'post',
    data: page
})

export const addColumn = (page) => request({
    url: myUrl + '/column/addColumn',
    method: 'post',
    data: page
})