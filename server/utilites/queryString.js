// string 的工具类

class queryString {
    static parse(parameters) {
        let output = {};

        if (typeof parameters === "string") {
            let paramList = parameters.split('&');

            for (let el of paramList) {
                let pair = el.split('=');

                output[pair[0]] = pair[1];
            }
            return output;
        } else {
            throw `参数类型不对 ${typeof parameters}`
        }
    }
}

module.exports = queryString;
