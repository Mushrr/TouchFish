const router = require('koa-router')();


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
 *     response:
 *       "200":
 *         describe: "OK Login Successfully"
 */


router.post('/login', async (ctx, next) => {
    ctx.body = 'aaa';
    console.log(ctx.request.data);
    await next();
})


module.exports = router;
