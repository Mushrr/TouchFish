// 数据库初始化
const f = require('../utilites/file')
const { sqlPath } = require('../config')
const {fileExtension} = require("../utilites/file");
const db = require('../pool/db')
const path = require('path');

function dbInit() {
    console.log('正在进行数据库初始化~~~');
    let filenameList = f.resolveDir(sqlPath);
    console.log('解析文件');

    let commandList = [];
    let sqlFiles = [];

    filenameList.forEach((filename) => {
        // 只有当文件类型是sql类型的时候才允许添加
        if (fileExtension(filename) === 'sql') {
            sqlFiles.push(filename);

            let file = f.readFile(path.join(sqlPath, filename), {
                encoding: 'utf-8'
            });

            let fileList = file.split(';');
            fileList.forEach((command) => {
                command = command.trim();

                if (command !== '') {
                    commandList.push(command);
                }
            })
        }
    })

    console.log(`检测到${sqlFiles.length}个sql文件: `, sqlFiles.join(', '));

    commandList.forEach((command, ind) => {
        db.query(command).then((value) => {
            if (value['message'] !== '') {
                console.log(value['message']);
            }
        }).catch((err) => {
            return Promise.reject(err); // 返回错误码
        })
    })
    console.log(`数据库初始化完毕`);
}

module.exports = {
    dbInit
}
