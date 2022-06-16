// 与文件相关的通用模块
// 此模块主要用于初始化的时候使用，数据最终存储依赖数据库
const { exec } = require('child_process');
const { dir } = require('console');
const file = require('fs');
const path = require('path');


function resolveDir(dirPath) {
    try {
        let ans = file.readdirSync(dirPath);
        // console.log(ans);
        return ans;
    } catch(e) {
        throw e;
    }
}

function readFile(filePath, otherOptions) {
    try {
        return file.readFileSync(filePath, otherOptions);
    } catch(e) {
        throw e;
    }
}

function fileExtension(filename) {
    if (typeof filename === 'string') {
        if (filename.indexOf('.') > -1) {
            let fileList = filename.split('.');
            return fileList[fileList.length - 1];
        } else {
            return 'unknow'
        }
    } else {
        throw `变量格式不对 当前变量为${typeof filename}`;
    }
}

module.exports = {
    resolveDir,
    readFile,
    fileExtension
}
