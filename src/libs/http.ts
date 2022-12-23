/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-07-04 14:35:43
 * @LastEditors: zhanghui rem486@qq.com
 * @LastEditTime: 2022-12-23 14:36:41
 * @FilePath: \bilibili-subscribe\src\libs\http.ts
 * @Description: 请求
 */
const axios = require("axios").default;

import Data from "./data";
import Qiniu from "./qiniu";

class Http extends Data {
  qiniu: Qiniu;

  constructor(qiniu: qiniuData) {
    super();
    this.qiniu = new Qiniu(qiniu);
  }

  getData = async (page: number = 1) => {
    const url_ =
      this.data.url +
      "pn=" +
      page +
      "&ps=" +
      this.data.limit +
      "&vmid=" +
      this.data.ssid +
      "&ts=" +
      new Date().getTime();

    let data: any = await axios.get(url_, {
      headers: {
        UserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        referer: this.data.referer,
        cookie: this.data.cookie,
      },
    });

    if (data.data.code == 0) {
      let bD: any = this.formartData(data.data.data.list);

      //七牛
      if (this.qiniu.canUse) {
        const reg = /[^/]+(?!.*\/)/g;

        for (let index = 0; index < bD.length; index++) {
          const element: any = bD[index];
          const imgName = element["img"]
            .match(reg)
            .filter((item: string) => item)
            .pop();

          bD[index]["img"] =
            (await this.qiniu.upload(element["img"], imgName)) ||
            element["img"];
        }
      }
      return bD;
    } else {
      console.error("捉取资源失败");
    }

    console.error(data.data.msg);

    return [];
  };
}

export default Http;
