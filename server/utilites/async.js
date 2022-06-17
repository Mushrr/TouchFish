// 



function asyncParsePost(ctx) {
    let ans = "";

    return new Promise((resolve, reject) => {
        try {
            ctx.req.on('data', (chunk) => {
                ans += chunk;
            })

            ctx.req.on('end', () => {
                resolve(ans);
            })
        } catch (err) {
            reject(err);
        }
    })
}



module.exports = {
    asyncParsePost
};
