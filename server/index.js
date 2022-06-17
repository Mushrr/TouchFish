const Koa = require('koa');
const app = new Koa();
const { touchfish } = require('./global');
const Router = require('koa-router');
const { koaSwagger } = require('koa2-swagger-ui');
const swaggerMiddleware = require('./middlewares/swagger');
const pages = require('./routers/pages');
const loginRouter = require('./api/login');

// 中间件
const loggerMiddleware = require('./middlewares/logger');


// 路由



let router = new Router();


router.use('/pages', pages.routes(), pages.allowedMethods());
router.use('/user', loginRouter.routes(), loginRouter.allowedMethods())
// swagger ui

app.use(koaSwagger({
    routePrefix: '/swagger/index.html',
    swaggerOptions: {
        url: '/swagger/swagger.json' // 通过这个路径访问
    }
}))

app.use(loggerMiddleware);
app.use(swaggerMiddleware.routes(), swaggerMiddleware.allowedMethods());


app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log(touchfish);
})
