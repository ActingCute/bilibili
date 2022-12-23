import Http from "./libs/http";
declare class Init extends Http {
    constructor(uid: string, cookie: string, qiniu?: qiniuData, limit?: number);
}
export default Init;
