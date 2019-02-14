/* eslint-disable */
export const changeWan = x => {
    x = x / 10000;
    var y = x.toFixed(2) + "万";
    return y;
}

export const thousand = data => {
    if (data === null || data === undefined) {
        return '--'
    } else {
        // return fmoney(data)
        return data.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
};

export const thousandList = (row, value, label, column) => {
    let data = value;
    if (data === null || data === undefined) {
        return '--'
    } else {
        // return fmoney(data)
        return data.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
};

export const thousandBiList = (row, value, label, column) => {
    let data = value;
    if (data === null || data === undefined) {
        return '--'
    } else {
        // return fmoney(data)
        return data.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
};

export const maskIdNum = (obj) => {
    let idnumber = obj.userIdNum
    if (!idnumber) {
        return ''
    }
    return idnumber.replace(/([\w=/+]{1})[\w=/+]{0,}([\w=/+]{2})/,
        '$1***************$2')
}

export const maskPhone = (obj) => {
    let phone = obj.userPhone
    if (!phone) {
        return ''
    }
    return phone.replace(/([\w=/+]{3})[\w=/+]{0,}([\w=/+]{4})/, '$1*$2')
}

export const maskBankCard = (obj) => {
    let bankCard = obj.payToAccountNo
    if (!bankCard) {
            return ''
    }
    return bankCard.replace(/([\w=/+]{0})[\w=/+]{0,}([\w=/+]{4})/, '$1**** **** ****$2')
}

export const toPercent = (row, value, label, column) => {
   
    let point = value
  
    if (point == undefined || point == null) {
        return '--'
    }

    if (point == 0 ) {
        return `${point}%`;
    }

    var str = Number(point * 100).toFixed(1);
    str += "%";
    return str;
}

export const  toPercentString = (point) => {
    if (point == undefined || point == null) {
        return '--'
    }
    
    if (point) {
        var str = Number(point * 100).toFixed(1);
        str += "%";
        return str;
    }
}

export const toPercentFix = (point) => {
    if (point) {
        var str = (point*100).toFixed(2);
        return str;
    }
    return point;

}

export const generateUUID = () => {
    var d = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
}