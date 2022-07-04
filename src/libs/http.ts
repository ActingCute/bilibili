/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-07-04 14:35:43
 * @LastEditors: zhanghui rem486@qq.com
 * @LastEditTime: 2022-07-04 16:31:53
 * @FilePath: \subscribe-serviceg:\zhanghui\npm\bilibili-subscribe\libs\http.ts
 * @Description: 请求
 */
const axios = require('axios').default;

import Data from "./data"

class Http extends Data {
  getData = async () => {
    const url_ = this.data.url + "pn=" + this.data.pege + "&ps=" + this.data.limit + "&vmid=" +
      this.data.ssid +
      "&ts=" + new Date().getTime();

    let data: any = await axios
      .get(url_, {
        headers: {
          UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
          referer: this.data.referer,
          cookie: this.data.cookie
        }
      })

    if (data.data.code == 0) {
      return this.formartData(data.data.data.list)
    }

    console.error(data.data.msg);


    return {
      "code": -1,
      "msg": data.data.msg || data.data.data.message || "请求失败",
    }
  }
}

export default Http