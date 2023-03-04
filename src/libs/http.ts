/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-07-04 14:35:43
 * @LastEditors: ActingCute酱 rem486@qq.com
 * @LastEditTime: 2023-03-04 17:32:09
 * @FilePath: \bilibili-subscribe\src\libs\http.ts
 * @Description: 请求
 */
const axios = require("axios").default;

import Data from "./data";

class Http extends Data {
  getData = async () => {
    const url_ =
      this.data.url +
      "pn=" +
      this.data.page +
      "&ps=" +
      this.data.limit +
      "&vmid=" +
      this.data.ssid +
      "&ts=" +
      new Date().getTime();

    let data: any = await axios.get(url_, {
      headers: {
        UserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
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
      msg: data?.data?.msg || data?.data?.data?.message || "请求失败",
    };
  };
}

export default Http;
