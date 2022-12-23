import Data from "./data";
import Qiniu from "./qiniu";
declare class Http extends Data {
    qiniu: Qiniu;
    constructor(qiniu: qiniuData);
    getData: (page?: number) => Promise<any>;
}
export default Http;
