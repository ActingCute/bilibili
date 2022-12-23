/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-07-01 17:56:00
 * @LastEditors: zhanghui rem486@qq.com
 * @LastEditTime: 2022-12-23 12:21:43
 * @FilePath: \bilibili-subscribe\src\index.ts
 * @Description: bilibili订阅
 */

import Http from "./libs/http";

class Init extends Http {
  constructor(
    uid: string,
    cookie: string,
    qiniu: qiniuData = {
      accessKey: "",
      secretKey: "",
      bucket: "",
      zone: "",
      domain: "",
      key: "",
    },
    limit: number = 30
  ) {
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

export default Init;
module.exports = Init;
