import Data from "./data";
declare class Http extends Data {
    getData: () => Promise<Object[] | {
        code: number;
        msg: any;
    }>;
}
export default Http;
