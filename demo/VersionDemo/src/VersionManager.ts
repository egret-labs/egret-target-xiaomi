declare var wx: { getFileSystemManager, env }
declare var system: {
    file: { list, delete }
}
class VersionController implements RES.IVersionController {
    // 版本控制信息
    private versionConfig;
    // resource根路径
    private resourceRoot = "resource/";
    // 版本控制的文件夹
    private versionPath = "assets/";
    // 版本控制信息的所在路径,相对于resource文件夹
    private versionConfigPath = "resource/version.json";
    //wxgame的当前版本号
    private currentVersion = "1.0.9";
    // 在游戏开始加载资源的时候就会调用这个函数
    init(): Promise<any> {
        if (RELEASE) {//发布模式
            return new Promise((resolve, reject) => {
                //通过httpReques获得配置资源信息
                let request = new egret.HttpRequest();
                request.responseType = egret.HttpResponseType.TEXT;
                request.open(this.versionConfigPath, egret.HttpMethod.GET);
                request.send();
                request.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
                    var request = <egret.HttpRequest>event.currentTarget;
                    egret.log("post data : ", request.response);
                    this.versionConfig = JSON.parse(request.response);
                    //处理文件资源的缓存
                    // 下面主要是对各种运行时的版本控制，
                    if (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
                        this.versionCacheWxgame();//微信小游戏
                    } else if (egret.Capabilities.runtimeType == "miqgame") {
                        this.versionCacheMiqgame();//小米快游戏
                    } else if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB) {
                        this.versionCacheWeb();//浏览器 H5
                    }
                    resolve();
                }, this);
                request.addEventListener(egret.IOErrorEvent.IO_ERROR, () => {
                    egret.log("post error : " + event);
                    reject();
                }, this);
            })
        } else {//debug 开发模式
            return Promise.resolve()
        }
    }
    /**
     * 处理小米快游戏里面的无效资源
     */
    private versionCacheMiqgame = () => {
        // 简单处理，通过localStorage获取当前游戏版本号resVersion，如果版本号不同，进行删除过期资源操作
        // 这里开发者可以自己控制版本号，不一定使用localStorage
        const localVersion = egret.localStorage.getItem("resVersion");
        console.log('misystem', system)
        console.log('版本号:', localVersion, this.currentVersion)
        let self = this;
        if (localVersion != this.currentVersion) {
            egret.localStorage.setItem("resVersion", this.currentVersion);
            console.log("版本更新");
            //下面是小米快游戏提供的api，进行过期缓存资源的移除
            const dir = "internal://files/cache_crc32/assets";
            system.file.list({
                uri: dir,
                success: function (data) {
                    //处理数据
                    console.log('list', data)
                    let arr = []
                    for (var i in data.fileList) {
                        let item = data.fileList[i];
                        if (item.type == 'file') {
                            arr.push(item.uri)
                        }
                    }
                    console.log('arr',arr)
                    const result = self.getMiRemoveList(arr);
                    const length = result.length;
                    console.log('result',result)
                    for (var j = 0; j < length; j++) {
                        console.log("删除", dir + "/" + result[j])
                        system.file.delete({
                            uri: dir + "/" + result[j],
                            success: function (data) {
                                console.log('delete succ', data)
                            },
                            fail: function (data, code) {
                                console.log(`delete fail`, data, code)
                            }
                        })
                    }
                },
                fail: function (data, code) {
                    console.log('fail', data, code)
                }
            })


        }
    }
    /** 
     * 获得小米上版本的过期资源列表，提高效率使用字符串的形式进行比对
     */
    private getMiRemoveList(files: Array<string>): Array<string> {
        const result = [];
        let str = "";
        for (const key in this.versionConfig) {
            str += this.versionConfig[key] + ",";
        }
        console.log('str',str)
        const length = files.length;
        for (let i = 0; i < length; ++i) {
            const item = files[i].split('/').pop();
            const crc32 = item.slice(0, item.indexOf("."));
            console.log('crc32',crc32,'item',item)
            if (str.indexOf(crc32) == -1) {
                result.push(item);
            }
        }
        console.log('getRemoveList', result)
        return result;
    }
    /**
     * 处理wxgame里面的无效资源
     */
    private versionCacheWxgame = () => {
        // 简单处理，通过localStorage获取当前游戏版本号resVersion，如果版本号不同，进行删除过期资源操作
        // 这里开发者可以自己控制版本号，不一定使用localStorage
        const localVersion = egret.localStorage.getItem("resVersion");
        if (localVersion != this.currentVersion) {
            egret.localStorage.setItem("resVersion", this.currentVersion);
            console.log("版本更新");
            //下面是wxgame提供的api，进行过期缓存资源的移除
            const fs = wx.getFileSystemManager();
            // 如果是最新的微信支持库请修改file-util.js中localFileMap对应的存储路径，其他版本参照修改
            const dir = wx.env.USER_DATA_PATH + "/cache_crc32/assets";
            fs.readdir({
                dirPath: dir,
                success: (e) => {
                    const result = this.getRemoveList(e.files);
                    const length = result.length;
                    for (let i = 0; i < length; ++i) {
                        console.log("删除", dir + "/" + result[i])
                        fs.unlinkSync(dir + "/" + result[i]);
                    }
                },
                fail: (e) => {
                    // console.log(e);
                }
            });
        }

    }
    /**
    * 处理WebH5里面的更新，如果开发者有其他平台发布的版本控制，请参照这两种进行修改
    */
    private versionCacheWeb = () => {
        // 简单处理，通过localStorage获取当前游戏版本号resVersion，如果版本号不同，进行删除过期资源操作
        // 这里开发者可以自己控制版本号，不一定使用localStorage
        const localVersion = egret.localStorage.getItem("resVersion");
        if (localVersion != this.currentVersion) {
            egret.localStorage.setItem("resVersion", this.currentVersion);
            console.log("Web版本更新");
        }
    }
    /** 
     * 获得上版本的过期资源列表，提高效率使用字符串的形式进行比对
     */
    private getRemoveList(files: Array<string>): Array<string> {
        const result = [];
        let str = "";
        for (const key in this.versionConfig) {
            str += this.versionConfig[key] + ",";
        }
        const length = files.length;
        for (let i = 0; i < length; ++i) {
            const item = files[i];
            const crc32 = item.slice(0, item.indexOf("."));
            if (str.indexOf(crc32) == -1) {
                result.push(item);
            }
        }
        return result;
    }
    //在游戏运行时，每个资源加载url都要经过这个函数
    getVirtualUrl(url: string) {
        // 在开发模式下，所有资源还是以原来的资源路径去加载，方便开发者替换资源
        if (RELEASE) {
            return this.getResUrlByVersion(url);
        } else {
            return url;
        }
    }
    /**
     * 获得版本控制之后的路径信息
     */
    getResUrlByVersion(url: string): string {
        //判断是否为版本控制的资源，其他域的资源，比如玩家头像，或是初始包体里面的资源以原始url加载
        if (url.indexOf(this.resourceRoot) == -1) {
            return url;
        }
        //将文件的resourceRoot路径抹去，进而判读文件是否经过版本管理
        url = url.replace(this.resourceRoot, "");
        if (this.versionConfig) {
            // 部分文件可能存在？v=加数字进行控制的形式，在引擎底层这里是不支持加v=的，只会以原始url加载路径，
            // 如果项目中存在类似的情况，将其还原成普通形式
            const index = url.indexOf("?v=");
            if (index != -1) {
                url = url.slice(0, index);
            }
            //取版本控制的的version
            let versionKey = url.replace(this.versionPath, "");
            if (this.versionConfig && this.versionConfig[versionKey]) {
                const version = this.versionConfig[versionKey];
                const ext = url.slice(url.lastIndexOf("."));
                // 原始的文件夹+crc32码+后缀扩展名
                url = this.versionPath + version + ext;
            }
        }
        url = this.resourceRoot + url;
        return url;
    }
}
//在最开始将AssetsManager的默认版本控制替换掉
RES.registerVersionController(new VersionController());
