<!--
  @Author: zhanghui rem486@qq.com
  @Date: 2022-07-04 16:24:58
 * @LastEditors: ActingCute酱 rem486@qq.com
 * @LastEditTime: 2023-03-04 17:56:05
 * @FilePath: \bilibili-subscribe\readme.md
  @Description: readme
-->

# 获取 B 站订阅

## Installing

npm install bilibili-subscribe

## Example

    //引入
    import subscribe from "bilibili-subscribe";
    // const subscribe = require("bilibili-subscribe");

    //实例化
    const subscribeClass = new subscribe(uid, cookie, page, limit)
    //uid 是用户的uid，打开个人空间可在url看到的那一串数字;
    //cookie为B站cookie;
    //page 第几页
    //limit 每页多少条

    //获取数据
    let data = await subscribeClass.getData()

## 返回数据

```json
{
  "code": 0, //只有0才是成功
  "msg": "B站订阅数据",
  "data": {
    "list": [
      {
        "ssid": 39694,
        "name": "我家大师兄有点靠谱",
        "des": "终于意识到自己是“大主角”的大师兄东方纤云，由于东方芜穹的误会...",
        "link": "https://www.bilibili.com/bangumi/play/ss39694/",
        "nowraw": "看到PV1 1:48",
        "status": 0,
        "all": 13,
        "watched": 0,
        "watched_progress": 0,
        "watched_progress_text": "还没看/共13话",
        "followst": 0,
        "basket": 1,
        "img": "",
        "new_ep": {
          "id": 712534,
          "index_show": "更新至第10话",
          "cover": "",
          "title": "10",
          "long_title": "硝烟四起",
          "pub_time": "2023-03-03 11:00:01",
          "duration": 1315000
        },
        "renewal_time": "每周五 11:00更新",
        "progress": 0
      }
    ],
    "page": 1,
    "limit": 1,
    "total": 61
  }
}
```

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
      img     : 图片 [Done]
      coin    : 硬币 [not Done]
      score   : 分数 未开/未评分番剧是0.0 [not Done]
      new_ep  : 最新集(object)= {[Done]
                      "id": 712534, //最新集数id
                      "index_show": "更新至第10话",//更新第几话
                      "cover": "", //封面
                      "title": "10", //集数
                      "long_title": "硝烟四起",//最新集标题
                      "pub_time": "2023-03-03 11:00:01",//更新时间
                      "duration": 1315000
                  }
      renewal_time : 番剧（每周）更新时间
      progress: 特色功能,追番进度 n% [Done]
