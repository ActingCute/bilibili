"use strict";
/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-07-01 17:56:00
 * @LastEditors: zhanghui rem486@qq.com
 * @LastEditTime: 2022-07-04 17:56:34
 * @FilePath: \bilibili-subscribe\index.ts
 * @Description: bilibili订阅
 */
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("./libs/http");
class Init extends http_1.default {
    constructor(uid, cookie, page = 1, limit = 30) {
        super();
        if (!cookie) {
            throw new Error("miss cookie");
        }
        if (!uid) {
            throw new Error("miss ssid");
        }
        this.data.cookie = cookie;
        this.data.ssid = uid;
        this.data.pege = page;
        this.data.limit = limit;
        console.log("subscribe init uid ", uid);
    }
}
exports.default = Init;
