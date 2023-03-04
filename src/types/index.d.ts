/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-12-23 10:38:49
 * @LastEditors: zhanghui rem486@qq.com
 * @LastEditTime: 2022-12-23 12:18:40
 * @FilePath: \bilibili-subscribe\src\types\index.d.ts
 * @Description: 类型声明
 */
interface Data_ {
  cookie: string;
  ssid: string;
  limit: number; //每次可以哦获取的最大条数
  url: string;
  referer: string;
  hostname: string;
  qiniu: qiniuData;
}

interface qiniuData {
  accessKey: string; //key
  secretKey: string; //秘钥
  bucket: string; //空间
  zone: string; //地区
  domain: string;
  key: string;
}
