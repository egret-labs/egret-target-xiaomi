declare class qg {
    /**同步获取系统信息 */
    static getSystemInfoSync(): qg.ISysInfo;
    static createInnerAudioContext():qg.InnerAudioContext;
}
declare namespace qg {
    interface ISysInfo {
        language: string;
        system: string;
    }
    interface InnerAudioContext{
        play();
        pause();
        stop();
        onCanplay(callback: Function);
        offCanplay(callback: Function);
        onError(callback: Function);
        offError(callback: Function);
        onEnded(callback: Function);
        offEnded(callback: Function);
        seek(position: number);//跳转的时间，单位 s
        src: string;//音频资源的地址
        startTime:Number;//开始播放的位置（单位：s），默认为 0
        autoplay:boolean;//是否自动播放，默认是 false
        duration: number;//当前音频的长度 单位 s
        volume: number;//音量。范围 0~1，默认是 1
        currentTime: number;//当前音频的播放位置，单位 s
        
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
