import Cookies from 'js-cookie'
const TokenKey = 'asGiant-access-token'
const imgToken = 'asGiant-access-imgToken'
var inFifteenMinutes = new Date(new Date().getTime() + 120 * 60 * 1000);
export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token, { expires: inFifteenMinutes })
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function setImgToken(token) {
    return Cookies.set(imgToken, token, { expires: inFifteenMinutes })
}

export function getImgToken() {
    return Cookies.get(imgToken)
}

export function removeImgToken() {
    return Cookies.remove(imgToken)
}