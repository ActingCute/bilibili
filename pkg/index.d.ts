import Http from "./libs/http";
declare class Init extends Http {
    constructor(uid: string, cookie: string, page?: number, limit?: number);
}
export default Init;
