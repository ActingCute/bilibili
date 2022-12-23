<!--
  @Author: zhanghui rem486@qq.com
  @Date: 2022-07-04 16:24:58
 * @LastEditors: zhanghui rem486@qq.com
 * @LastEditTime: 2022-12-23 14:35:12
 * @FilePath: \bilibili-subscribe\readme.md
  @Description: readme
-->

# 获取B站订阅

## Installing

  npm install bilibili-subscribe

## Example

    //七牛参数
    const qiniu = {
      accessKey: 'xxx',
      secretKey: 'xxx',
      bucket: 'lovely', //七牛空间
      zone: 'Zone_z0',  //七牛地区
      domain: "https://lovely.haibarai.com",
      key: "bilibili" //前缀 加上后地址 https://lovely.haibarai.com/bilibili/074056b8543ed2ceb53dc13a79da1eafa3fa921a.jpg
    }
    const subscribeClass = new subscribe(uid, cookie) 
    //uid 是用户的uid，打开个人空间可在url看到的那一串数字;cookie为B站cookie;

    let page = 1; //页数
    let data = await subscribeClass.getData(page)

## 七牛地区表

      华东 Zone_z0
      华北 Zone_z1
      华南 Zone_z2
      北美 Zone_na0

## 按照老夫追了那么多番剧,看了那么多情况,可以将它归纳一下
     
      ssid    : 唯一番剧ID [Done]
      name    : 番剧名称 [Done]
      des     : 描述简介 没有的话就是 '暂无简介' [Done]
      link    : 链接 [Done]
      status  : 番剧状态 0为正在播 1为将开 2为完结 [Done]
      followst: 追番状态(自动判断) 0为未看,1为在看,2为看完 [Done]
      basket  : 在B站定的状态,0为想看 1为在看 2为看完 [Done]
      all     : 总集数 未开为0 [Done]
      watched : 已观看集数 PV为0 [Done]
      nowraw  : 已观看集数和时间 (Bilibili直接显示) [Done]
      progress: 特色功能,追番进度 n% [Done]
      img     : 图片 [Done]
      coin    : 硬币 [not Done]
      score   : 分数 未开/未评分番剧是0.0 [not Done]
      new     : 最新集(array)={title:名字 ep:集数 finish:是否完结撒花} [Done]
     
    