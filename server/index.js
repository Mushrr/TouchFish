const { fstat } = require('fs');
const Koa = require('koa');
const path = require('path');
const db = require('./pool/db');
const app = new Koa();
const f = require('./utilites/file');
const log4js = require('log4js');
const {touchfish} = require('./global');
const Router = require('koa-router');

const pages = require('./routers/pages');

// 中间件
const loggerMiddleware = require('./middlewares/logger');


// 路由


let home = new Router();
home.get('/', async (ctx) => {
    let html = `
        <li>Hello world</li>
    `;
    ctx.body = html;
})


let router = new Router();


router.use('/', home.routes(), home.allowedMethods());
router.use('/pages', pages.routes(), pages.allowedMethods());

app.use(loggerMiddleware);
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log(touchfish);
})
