/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-07-04 12:26:02
 * @LastEditors: ActingCute酱 rem486@qq.com
 * @LastEditTime: 2023-03-04 17:24:09
 * @FilePath: \bilibili-subscribe\src\libs\data.ts
 * @Description: 数据结构
 */
import FormartData from "./formart";

interface Data_ {
  cookie: string;
  ssid: string;
  page: number; //页数
  limit: number; //每次可以哦获取的最大条数
  url: string;
  referer: string;
  hostname: string;
}

class Data extends FormartData {
  data: Data_ = {
    cookie: "",
    ssid: "",
    page: 1,
    limit: 30,
    url: "https://api.bilibili.com/x/space/bangumi/follow/list?type=1&follow_status=0&",
    referer: "https://space.bilibili.com/24549449/bangumi",
    hostname: "api.bilibili.com",
  };
}

export default Data;
