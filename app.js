'use strict';
var exec = require('child_process').exec;
module.exports = app => {
    // 开始前执行
    app.beforeStart(async () => {
        console.log(1);
    });
    // 准备好执行
    app.ready(async () => {
        // 举例，获取数据库图片域名，放到缓存，便于使用
        // let db = app.mysql;
        // let result = await db.select('config');
        // app.imgURL = result[0].imgURL;

        var cmdStr = 'npm run h5-serve';
        exec(cmdStr, function (err, stdout, srderr) {
            if (err) {
                console.log(srderr);
            } else {
                console.log(stdout);
            }
        });
    });
    // 关闭前执行
    app.beforeClose(async () => {

    });
};