declare class qg {
    /**同步获取系统信息 */
    static getSystemInfoSync(): qg.ISysInfo;
}
declare namespace qg {
    interface ISysInfo {
        language: string;
        system: string;
    }
}

declare let getCurrentPage: () => page

type page = {
    /**获取canvas */
    getCanvas(): HTMLCanvasElement
    /**监听快游戏回到前台的事件 */
    onShow: Function;
    /**监听快游戏隐藏到后台事件 */
    onHide: Function;
}
// declare class app {
//     /**获取canvas */
//     static getCanvas(): HTMLCanvasElement
//     /**监听快游戏回到前台的事件 */
//     static onShow: Function;
//     /**监听快游戏隐藏到后台事件 */
//     static onHide: Function;
// }
declare class system {
    /**键盘系统 */
    static keyboard: system.keyboard;
    /**文件系统 */
    static file: system.file;
    /**数据请求 */
    static fetch: system.fetch;
    /**设备信息 */
    static device: system.device;
    /**存储数据 */
    static storage: system.storage;
    /**重力感应 */
    static sensor: system.sensor;
}
declare namespace system {
    /**键盘系统 */
    interface keyboard {
        /**显示键盘 */
        show(info: any): void;
        /**监听用户点击键盘 enter 按钮时的事件 */
        onenterclick(callBack: Function): void;
        /**监听监听键盘收起的事件 */
        oncomplete(callBack: Function): void;
        /**监听键盘输入事件 */
        oninput(callBack: Function): void;
        /**隐藏键盘 */
        hide(): void;
    }
    /**文件系统 */
    interface file {
        /**从文件中读取文本 */
        readText(obj: any): void;
        /**从文件中读取 Buffer */
        readArrayBuffer(obj: any): void;
    }
    interface fetch {
        fetch(obj: any): void;
    }
    interface device {
        /**获取设备信息 */
        getInfoSync(): IDeviceInfo;
    }
    interface storage {
        getSync(obj: object): string;
        setSync(obj: object): string;
        deleteSync(obj: object): void;
        clearSync(): void;
    }
    interface sensor {
        subscribeAccelerometer(obj: object): void;
        unsubscribeAccelerometer(): void;
    }
    interface IDeviceInfo {
        windowWidth: number;
        windowHeight: number;
        screenDensity: number;
    }
    interface InnerAudioContext {

    }

}
