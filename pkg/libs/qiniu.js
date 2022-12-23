"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qiniu = require("qiniu");
/**
 * 随机生成一个指定长度的 id， 默认长度为 8
 * @param length {number}
 * @param [chars] {string}
 * @returns {string}
 */
const uuid = (length = 8, chars = "") => {
    let result = "";
    const charsString = chars || "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = length; i > 0; --i) {
        result += charsString[Math.floor(Math.random() * charsString.length)];
    }
    return result;
};
//用来记录是否已经上传，避免重复上传
var cacheBox = [];
class Qiniu {
    constructor(qiniuConfig) {
        this.canUse = false;
        this.bucketManager = null;
        this.qiniuConfig = qiniuConfig;
        if (this.qiniuConfig.accessKey &&
            this.qiniuConfig.bucket &&
            this.qiniuConfig.secretKey &&
            this.qiniuConfig.zone) {
            //初始化
            console.log("初始化七牛");
            // 鉴权对象mac
            const mac = new qiniu.auth.digest.Mac(this.qiniuConfig.accessKey, this.qiniuConfig.secretKey);
            const config = new qiniu.conf.Config();
            //zone为你所购买的对象存储空间的地区，如华南、华东等
            // 华东 qiniu.zone.Zone_z0
            // 华北 qiniu.zone.Zone_z1
            // 华南 qiniu.zone.Zone_z2
            // 北美 qiniu.zone.Zone_na0
            config.zone = qiniu.zone[this.qiniuConfig.zone];
            // 资源管理的操作对象
            this.bucketManager = new qiniu.rs.BucketManager(mac, config);
            this.canUse = true;
        }
    }
    upload(url, imgName = "") {
        // 返回一个promise对象
        return new Promise((resolve) => {
            if (!this.canUse) {
                resolve("");
                return;
            }
            let key = "";
            if (this.qiniuConfig.key) {
                key = this.qiniuConfig.key + "/";
            }
            key = key + (imgName || uuid(8));
            let imgUrl = this.qiniuConfig.domain + "/" + key;
            if (cacheBox.includes(imgUrl)) {
                resolve(imgUrl);
                return;
            }
            this.bucketManager.fetch(url, this.qiniuConfig.bucket, key, (err, resBody, resInfo) => {
                if (err) {
                    console.error("上传失败");
                    resolve("");
                }
                else {
                    if (resInfo.statusCode === 200) {
                        imgUrl = this.qiniuConfig.domain + "/" + resBody.key;
                        cacheBox.push(imgUrl);
                        resolve(imgUrl);
                    }
                    else {
                        console.error(`错误状态码:${resInfo.statusCode}`);
                        resolve("");
                    }
                }
            });
        });
    }
}
exports.default = Qiniu;
