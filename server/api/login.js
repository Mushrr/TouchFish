/**
 * @swagger
 * /user/login:
 *   post:
 *     tags: ["TouchFish"]
 *     describe: "login application"
 *     consumes:
 *     - "application/json"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - name: "username"
 *       in: "formData"
 *       describe: "用户名"
 *       type: "string"
 *       required: true
 *     - name: "password"
 *       in: "formData"
 *       describe: "用户密码"
 *       type: "string"
 *       required: true
 *     responses:
 *       "200":
 *         describe: "OK Login Successfully"
 *         schema:
 *           type: 'object'
 *           properties:
 *             uuid:
 *               type: 'string'
 *               describe: '登录用户的名称'
 *             status:
 *               type: 'string'
 *               describe: '状态码'
 *             msg:
 *               type: 'string'
 *               describe: '状态信息'
 *
 */

const router = require('koa-router')(); // 定义路由
const db = require('../pool/db'); // 数据库
// const queryString = require('../utilites/queryString');
// const md5 = require('md5');
const { asyncParsePost } = require('../utilites/async');

router.post('/login', async (ctx, next) => {
    // 登录模块

    // 错误登录信息



    // 这里登录有格式问题！！！！
    let data = await asyncParsePost(ctx);
    // let {uuid:username, pwd:password} = queryString.parse(data);

    let {uuid:username, pwd:password} = JSON.parse(data);

    username = username.trim();
    password = password.trim(); // 加密后的密码
    let loginSql = `select uuid
                        from user
                        where uuid = '${username}'
                          and pwd = '${password}'`;
    if (username && password) {
        await db.query(loginSql).then((data) => {
            if (data.length === 1) {
                // 登陆成功
                let { uuid } = data[0];
                let response = {
                    user: uuid,
                    status: 'ok',
                    msg: `${uuid} login successfully!`
                }
                ctx.set('Content-Type', 'application/json')
                ctx.body = JSON.stringify(response);
            } else {
                let response = {
                    user: username,
                    status: 'error',
                    msg: `unexpected error happened`
                }
                ctx.set('Content-Type', 'application/json')
                ctx.body = JSON.stringify(response);
                ctx.status = 401;
            }
        })
        await next();
    }
})


module.exports = router;
