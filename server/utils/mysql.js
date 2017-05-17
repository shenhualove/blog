/**
 * Created by shenhua on 2017/5/9.
 *
 * 数据库配置
 */
const mysql = require('mysql')

// 创建数据池
const pool  = mysql.createPool({
    host     : '127.0.0.1',   // 数据库地址
    user     : 'root',    // 数据库用户
    password : 'gaolk',   // 数据库密码
    database : 'shenhua'  // 选中数据库
});

let query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject( err )
            } else {
                connection.query(sql, values, ( err, rows) => {
                    if ( err ) {
                        console.log(sql);
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = { query }