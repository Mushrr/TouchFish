// log 中间件
const log4js = require('log4js');

function reqLogger(ctx, cost) {
    return `[${ctx.status}] - [${ctx.method}] - [${ctx.url}] - [${cost}ms]`
}

async function loggerMiddleware(ctx, next) {
    const startTime = new Date();
    let logger = log4js.getLogger();
    logger.level = "debug";
    await next();
    const endTime = new Date();
    let status = ctx.status;
    if (status >= 200 && status < 400) {
        logger.info(reqLogger(ctx, endTime - startTime));
    } else {
        logger.error(reqLogger(ctx, endTime - startTime));
    }

}

module.exports = loggerMiddleware
