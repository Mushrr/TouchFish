const { fstat } = require('fs');
const Koa = require('koa');
const path = require('path');
const db = require('./pool/db');
const app = new Koa();

const f = require('./utilites/file')

async function rootHander(ctx, next) {
    if (ctx.url === '/') {
        ctx.body = 'hello Touch Fish'
    }

    await next();
}

app.use(rootHander);

app.listen(3000, () => {
    console.log('开开开');
})
