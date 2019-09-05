declare namespace qg {
    /**同步获取系统信息 */
    function getSystemInfoSync(): qg.ISysInfo;
    /** 创建音频 */
    function createInnerAudioContext(): qg.InnerAudioContext;
    /** 显示键盘 */
    function showKeyboard(info: qg.KeyboardInfo): void;
    function hideKeyboard(object?: {
        /**
         * 接口调用成功的回调函数
         */
        success?: Function;
        /**
         * 接口调用失败的回调函数
         */
        fail?: Function;
        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?: Function;
    }): void;
    /**
     * 监听键盘输入
     * @param callback 必须,监听键盘输入事件的回调函数
     */
    function onKeyboardInput(callback: Function): void;
    /**
     * 取消监听键盘输入
     * @param callback 需要取消的监听回调,callback为空，将取消所有监听
     */
    function offKeyboardInput(callback?: Function): void;
    /**
     * 监听用户点击键盘 Confirm 按钮
     * @param callback 监听用户点击键盘 Confirm 按钮事件的回调函数
     */
    function onKeyboardConfirm(callback: Function): void;
    /**
     * 取消监听用户点击键盘 Confirm 按钮
     * @param callback 非必须,需要取消的监听回调,callback为空，将取消所有监听
     */
    function offKeyboardConfirm(callback?: Function): void
    /**
     * 监听键盘收起
     * @param callback 必须，监听键盘收起事件的回调函数
     */
    function onKeyboardComplete(callback: Function): void;
    /**
     * 取消监听键盘收起
     * @param callback 非必须,需要取消的监听回调,callback为空，将取消所有监听
     */
    function offKeyboardComplete(callback?: Function): void;
    /** 文件系统 */
    function getFileSystemManager(): qg.IFileSystem;
    /** 罗盘 */
    function onCompassChange(callback: Function): void;
    function startCompass(): void;
    function stopCompass(): void;
    /** 生命周期 */
    function onShow(callback: Function): void;
    function onHide(callback: Function): void;
    /** 设置渲染帧率 */
    function setPreferredFramesPerSecond(fps: number): void;

    interface IFileSystem {
        readFile(obj: IFileObj)
    }
    interface IFileObj {
        filePath: string;//文件路径
        encoding?: string;//默认为 binary
        success: Function;
        fail: Function;
    }

    interface ISysInfo {
        language: string;
        system: string;
    }
    interface InnerAudioContext {
        play(): void;
        pause(): void;
        stop(): void;
        onCanplay(callback: Function): void;
        offCanplay(callback: Function): void;
        onError(callback: Function): void;
        offError(callback: Function): void;
        onEnded(callback: Function): void;
        offEnded(callback: Function): void;
        seek(position: number): void;//跳转的时间，单位 s
        src: string;//音频资源的地址
        startTime: number;//开始播放的位置（单位：s），默认为 0
        autoplay: boolean;//是否自动播放，默认是 false
        duration: number;//当前音频的长度 单位 s
        volume: number;//音量。范围 0~1，默认是 1
        currentTime: number;//当前音频的播放位置，单位 s
    }
    interface KeyboardInfo {
        /**
         * 键盘输入框显示的默认值
         */
        defaultValue: string;
        /**
         * 键盘中文本的最大长度
         */
        maxLength: number;
        /**
         * 是否为多行输入
         */
        multiple: boolean;
        /**
         * 当点击完成时键盘是否收起
         */
        confirmHold: boolean;
        /**
         * 键盘右下角confirm按钮类型，只影响按钮的文本内容
         * done: 完成
         * next: 下一个
         * search: 搜索
         * go: 前往
         * send: 发送
         */
        confirmType: "done" | "next" | "search" | "go" | "send";
        /**
         * 成功回调
         */
        success?: Function;
        /**
         * 接口调用失败的回调函数
         */
        fail?: Function;
        /**
         * 执行结束后的回调
         */
        complete?: Function;
    }
}
