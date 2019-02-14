import Cookies from 'js-cookie'
const TokenKey = 'x-access-token'
import {
    getStore
} from '@/util/store'
var inFifteenMinutes = new Date(new Date().getTime() + 120 * 60 * 1000);
export function getToken() {
    return Cookies.get(TokenKey)
}

export function getRoleTitle() {
    var arr1 = getStore({
        name: 'userInfos'
    })
    return `${arr1.roleTitle}(${arr1.roleKey})`
}

export function setToken(token) {
    return Cookies.set(TokenKey, token, { expires: inFifteenMinutes })
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function getPower(key) {
    var arr1 = getStore({
        name: 'userInfos'
    })
    
    if (arr1.roleKey === 'OPERATOR') {
        return true
    }

    let authorityKeys = arr1.authorityKeys
    return isInArray(authorityKeys, key);
}

export function getPowerKey(key) {
    var arr1 = getStore({
        name: 'userInfos'
    })

    if (arr1.roleKey === 'OPERATOR') {
        return true
    }

    let roleKey = arr1.roleKey
    return isInString(roleKey, key);
}

function isInString(arr, value) {
    if (value === arr) {
        return true;
    }
    return false;
}

function isInArray(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return true;
        }
    }
    return false;
}

export function isSame(arr2) {
    let res = true
    if (arr2 === undefined) {
        res = false
        return res;
    }

    if (arr2.length!==0) {
        var arr1 = getStore({
            name: 'userInfos'
        })
        if (arr1===undefined) {
            return
        }

        res = arr2.some((x) => {
            return x===arr1.roleKey
        })
    }
    
    return res;
}