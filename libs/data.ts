/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-07-04 12:26:02
 * @LastEditors: zhanghui rem486@qq.com
 * @LastEditTime: 2022-07-04 16:22:40
 * @FilePath: \bilibili-subscribe\libs\data.ts
 * @Description: 数据结构
 */
import FormartData from "./formart"

interface Data_ {
  cookie: string;
  ssid: string;
  pege: number; //页数
  limit: number;//每次可以哦获取的最大条数
  url: string;
  referer: string;
  hostname: string
}

class Data extends FormartData {
  data: Data_ = {
    cookie: "",
    ssid: "",
    pege: 1,
    limit: 30,
    url: "https://api.bilibili.com/x/space/bangumi/follow/list?type=1&follow_status=0&",
    referer: "https://space.bilibili.com/24549449/bangumi",
    hostname: "api.bilibili.com"
  };
}

export default Data