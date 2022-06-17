// swagger

const path = require('path'); // 路径信息
const swaggerJSDoc = require('swagger-jsdoc');
const Router = require('koa-router');
const { host, port } = require('../config');
const f = require('../utilites/file');

const router = new Router();
router.prefix('/swagger'); // 设置路由前缀

const swaggerDefinition = {
    info: {
        title: 'Touch Fish API',
        version: 'v1',
    },
    host: `${host}:${port}`,
    bashPath: '/'
}

const options = {
    swaggerDefinition,
    apis: f.resolveDir(path.join(__dirname, '../api')).map((el) => path.join(__dirname, `../api/${el}`))
}


const swaggerSpec = swaggerJSDoc(options);

router.get('/swagger.json', async (ctx) => {
    ctx.set('Content-Type', 'application/json');
    ctx.body = swaggerSpec
})

module.exports = router;
