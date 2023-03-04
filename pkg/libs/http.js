"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-07-04 14:35:43
 * @LastEditors: ActingCute酱 rem486@qq.com
 * @LastEditTime: 2023-03-04 18:30:57
 * @FilePath: \bilibili-subscribe\src\libs\http.ts
 * @Description: 请求
 */
const axios = require("axios").default;
const data_1 = require("./data");
class Http extends data_1.default {
    constructor() {
        super(...arguments);
        this.getData = async () => {
            var _a, _b, _c;
            const url_ = this.data.url +
                "pn=" +
                this.data.page +
                "&ps=" +
                this.data.limit +
                "&vmid=" +
                this.data.ssid +
                "&ts=" +
                new Date().getTime();
            let data = await axios.get(url_, {
                headers: {
                    UserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
                    Referer: this.data.referer,
                    Cookie: this.data.cookie,
                },
            });
            if (data.data.code == 0) {
                return {
                    code: 0,
                    msg: "B站订阅数据",
                    data: {
                        list: this.formartData(data.data.data.list),
                        page: data.data.data.pn,
                        limit: data.data.data.ps,
                        total: data.data.data.total,
                    },
                };
            }
            return {
                code: -1,
                msg: ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.msg) || ((_c = (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message) || "请求失败",
            };
        };
    }
}
exports.default = Http;
