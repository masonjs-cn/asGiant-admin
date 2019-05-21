
'use strict';
const createCode = () => {
  let code = '';
  const codeLength = 6; // 验证码的长度
  // eslint-disable-next-line no-array-constructor
  const random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); // 随机数
  for (let i = 0; i < codeLength; i++) { // 循环操作
    const index = Math.floor(Math.random() * 36); // 取得随机数的索引（0~35）
    code += random[index]; // 根据索引取得随机数加到code上
  }
  return code;
};

const generateUUID = () => {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
};


const expire = () => {
  return new Date().getTime() + 60 * 60 * 1000;
};

const success = (ctx, message) => {
  ctx.body = {
    code: 0,
    message,
  };
};

const error = (ctx, message) => {
  ctx.body = {
    code: 1,
    message,
  };
};

const list = (ctx, list, currentPage, total) => {
  ctx.body = {
    code: 0,
    list,
    currentPage,
    total,
  };
};

module.exports = {
  createCode,
  expire,
  success,
  error,
  list,
  generateUUID,
};
