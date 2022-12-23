declare class Qiniu {
    qiniuConfig: qiniuData;
    canUse: boolean;
    bucketManager: any;
    constructor(qiniuConfig: qiniuData);
    upload(url: string, imgName?: string): Promise<unknown>;
}
export default Qiniu;
