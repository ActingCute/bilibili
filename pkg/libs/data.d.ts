import FormartData from "./formart";
interface Data_ {
    cookie: string;
    ssid: string;
    page: number;
    limit: number;
    url: string;
    referer: string;
    hostname: string;
}
declare class Data extends FormartData {
    data: Data_;
}
export default Data;
