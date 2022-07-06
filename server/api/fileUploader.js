// 文件上传
const file = require('fs');

async function fileUpload(ctx, next) {
    return new Promise((resolve, reject) => {
        let dataRaw = "";
        
        ctx.on('data', (dataPart) => {
            dataRaw += dataPart;
        });

        ctx.on('end', () => {
            // 上传结束
            file.writeFile()
        })
    })
}
