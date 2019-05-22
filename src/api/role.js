import request from '@/router/axios';
import { getImgToken } from '@/util/auth'
import {
    baseUrl,
    myUrl
} from '@/config/env';


// export const signinUser = (page) => request({
//     url: myUrl + '/user/signinUser',
//     method: 'post',
//     data:page,
//     headers: {
//         'Content-Type': 'application/json',
//         'imgtoken': getImgToken()
//     }
// })

export const getRoleList = (page) => request({
    url: myUrl + '/role/getRoleList',
    method: 'post',
    data: page
})