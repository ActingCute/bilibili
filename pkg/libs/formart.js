"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: zhanghui rem486@qq.com
 * @Date: 2022-07-04 12:26:02
 * @LastEditors: zhanghui rem486@qq.com
 * @LastEditTime: 2022-07-04 16:23:05
 * @FilePath: \bilibili-subscribe\libs\formart.ts
 * @Description: 格式化数据
 */
class FormartData {
    constructor() {
        //格式化数据
        this.formartData = (res) => {
            /**
             * 按照老夫追了那么多番剧,看了那么多情况,可以将它归纳一下
             *
             * ssid    : 唯一番剧ID [Done]
             * name    : 番剧名称 [Done]
             * des     : 描述简介 没有的话就是 '暂无简介' [Done]
             * link    : 链接 [Done]
             * status  : 番剧状态 0为正在播 1为将开 2为完结 [Done]
             * followst: 追番状态(自动判断) 0为未看,1为在看,2为看完 [Done]
             * basket  : 在B站定的状态,0为想看 1为在看 2为看完 [Done]
             * all     : 总集数 未开为0 [Done]
             * watched : 已观看集数 PV为0 [Done]
             * nowraw  : 已观看集数和时间 (Bilibili直接显示) [Done]
             * progress: 特色功能,追番进度 n% [Done]
             * img     : 图片 [Done]
             * coin    : 硬币 [Done]
             * score   : 分数 未开/未评分番剧是0.0 [Done]
             * new     : 最新集(array)={title:名字 ep:集数 finish:是否完结撒花} [Done]
             *
             */
            var ret = [];
            res.forEach(function (bangumi) {
                var temp = {};
                temp["ssid"] = bangumi["season_id"]; //ID
                temp["name"] = bangumi["title"]; // 名称
                temp["des"] = bangumi["evaluate"] ? bangumi["evaluate"] : "暂无简介"; // 简介
                temp["link"] =
                    "https://www.bilibili.com/bangumi/play/ss" + bangumi["season_id"] + "/"; //链接
                temp["nowraw"] = bangumi["progress"]; //进度复杂型
                //番剧状态
                if (bangumi["is_finish"]) {
                    temp["status"] = 2;
                }
                else if (!bangumi["is_started"]) {
                    temp["status"] = 1;
                }
                else {
                    temp["status"] = 0;
                }
                //获取总集数
                var total = 0;
                if (bangumi["is_finish"]) {
                    total = bangumi["total_count"]; //total_count是预计总集数
                }
                else if (!bangumi["is_started"] ||
                    (bangumi["new_ep"] && bangumi["new_ep"]["index_show"] &&
                        bangumi["new_ep"]["index_show"] == "即将开播")) {
                    total = 0;
                }
                else {
                    total = bangumi["new_ep"]["title"];
                    if (!isNaN(total))
                        total = bangumi["total_count"]; //有些最后是Extra,默认识别为最后一集
                }
                if (total < 0)
                    total = 0;
                temp["all"] = total;
                //获取当前看到的集数
                var ep = 0;
                if (!bangumi["is_started"]) {
                    //没有开始
                    ep = 0;
                }
                else if (bangumi["progress"].indexOf("已看完") != -1) {
                    ep = total;
                }
                else if (bangumi["progress"]) {
                    if (bangumi["progress"].indexOf("第") != -1 &&
                        bangumi["progress"].indexOf("话") != -1) {
                        var ep_text = bangumi["progress"].match(/第(\S*)话/);
                        if (ep_text)
                            if (ep_text.length > 0)
                                ep = ep_text[1];
                    }
                }
                else {
                    ep = 0;
                }
                temp["watched"] = ep;
                var all = temp["all"];
                var watched_progress = 0;
                var watched_progress_text = "不知道看到哪！";
                if (all) {
                    watched_progress = temp["watched"] / all;
                    temp["watched_progress"] =
                        watched_progress > 1 ? 0 : Number(watched_progress.toFixed(1));
                    if (temp["watched"] == 0) {
                        watched_progress_text = "还没看/共" + all + "话";
                    }
                    else {
                        watched_progress_text =
                            watched_progress > 1
                                ? "不知道看到哪里了/共" + all + "话"
                                : "看到第" + temp["watched"] + "话/共" + all + "话";
                    }
                }
                else {
                    temp["watched_progress"] = 0;
                    if (bangumi["new_ep"] && bangumi["new_ep"]["index_show"]) {
                        watched_progress_text = "还没看/" + bangumi["new_ep"]["index_show"];
                    }
                    else {
                        watched_progress_text = "还没看";
                    }
                }
                temp["watched_progress_text"] = watched_progress_text;
                //追番状态 - Auto
                if (!bangumi["is_started"] || ep == 0) {
                    temp["followst"] = 0;
                }
                else if (ep == total) {
                    temp["followst"] = 2;
                }
                else {
                    temp["followst"] = 1;
                }
                //追番状态 - Bilibili
                temp["basket"] = bangumi["follow_status"] - 1;
                //图片 - 原图 (非方形小头像)
                temp["img"] = bangumi["cover"];
                //硬币
                //temp["coin"] = bangumi["stat"]["coin"];
                //分数
                //temp["score"] = bangumi["rating"]["score"];
                //进度
                var percent = 0;
                if (total != 0) {
                    percent = Math.ceil((ep * 100) / total);
                }
                temp["progress"] = percent;
                ret.push(temp);
            });
            return ret;
        };
    }
}
exports.default = FormartData;
