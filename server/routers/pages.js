const Router = require('koa-router');


let pages = new Router();


pages.get('/404', async(ctx) => {
    ctx.body = `404`
}).get('/helloworld', async(ctx) => {
    ctx.body = `helloworld`
})

module.exports = pages;
