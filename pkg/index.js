"use strict";
/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-07-01 17:56:00
 * @LastEditors: zhanghui rem486@qq.com
 * @LastEditTime: 2022-12-23 12:21:43
 * @FilePath: \bilibili-subscribe\src\index.ts
 * @Description: bilibili订阅
 */
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("./libs/http");
class Init extends http_1.default {
    constructor(uid, cookie, qiniu = {
        accessKey: "",
        secretKey: "",
        bucket: "",
        zone: "",
        domain: "",
        key: "",
    }, limit = 30) {
        super(qiniu);
        if (!cookie) {
            throw new Error("miss cookie");
        }
        if (!uid) {
            throw new Error("miss uid");
        }
        console.log({ limit });
        this.data.cookie = cookie;
        this.data.ssid = uid;
        this.data.limit = limit;
        this.data.qiniu = qiniu;
        console.log("subscribe init uid ", uid);
        console.log("subscribe init qiniu ", qiniu);
    }
}
exports.default = Init;
module.exports = Init;
