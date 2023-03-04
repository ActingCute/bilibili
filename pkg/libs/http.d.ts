import Data from "./data";
declare class Http extends Data {
    getData: () => Promise<{
        code: number;
        msg: string;
        data: {
            list: Object[];
            page: any;
            limit: any;
            total: any;
        };
    } | {
        code: number;
        msg: any;
        data?: undefined;
    }>;
}
export default Http;
