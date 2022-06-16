// 数据库池子
const mysql = require('mysql');
const {dbConfig} = require('../config')

const dbPool = mysql.createPool(dbConfig); // 创建连接

function query(sql, value) {
    return new Promise((resolve, reject) => {
        dbPool.getConnection((err, connection) => {
            if (err) {
                reject(err); //使用err 拒绝
            } else {
                connection.query(sql, value, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                })
            }
        })
    })
}

module.exports = {
    query
}
