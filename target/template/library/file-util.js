/**
 * 小米快游戏的文件系统
 */
const system = require('@system');
const MI_ROOT = "internal://files/";
let fs_cache = {};

function walkFile(dirname, callback) {
    let result = system.file.statSync({
        uri: dirname,
        recursive: true
    })
    let files = result.subFiles;
    for (var i = 0, len = files.length; i < len; i++) {
        let file = files[i];
        if (file.type == 'dir') {
            walkFile(file.uri, callback)
        } else {
            callback(file.uri)
        }
    }
}

function walkDir(dirname, callback) {
    let result = system.file.statSync({
        uri: dirname,
        recursive: true
    })
    let files = result.subFiles;
    for (var i = 0, len = files.length; i < len; i++) {
        let file = files[i];
        if (file.type == 'dir') {
            walkDir(file.uri, callback)
            callback(file.uri)
        }
    }
}
export const fs = {
    /**
     * 遍历删除文件夹
     */
    remove: (dirname) => {
        let fullPath = MI_ROOT + path.getLocalFilePath(dirname);
        let result = system.file.statSync({
            uri: fullPath
        })
        if (result.type == 'dir') {
            //遍历删除文件
            walkFile(fullPath, (file) => {
                system.file.delete({
                    uri: file
                })
                if (fs_cache[file]) {
                    fs_cache[file] = 0;
                }
            })
            //遍历删除文件夹
            walkDir(fullPath, (dir) => {
                let res = system.file.rmdir({
                    uri: dir
                })
                if (fs_cache[dir]) {
                    fs_cache[dir] = 0;
                }
            })
        }
    },
    /**
     * 检查文件是否存在
     */
    existsSync: (p) => {
        return new Promise((resolve, reject) => {
            const cache = fs_cache[p];
            if (cache == 0) {
                reject();
            } else if (cache == 1) {
                resolve();
            } else {
                p = MI_ROOT + path.normailze(p);
                getFile(p).then(function succ() {
                    //本地文件存在
                    fs_cache[p] = 1;
                    resolve();
                }, function fail() {
                    //本地文件不存在
                    fs_cache[p] = 0;
                    reject();
                })
            }
        })

    },
    downloadFile: (src, target) => {
        return new Promise((resolve, reject) => {
            //1.下载
            system.request.download({
                url: src,
                success: function (data) {
                    //2.监听下载完成
                    system.request.onDownloadComplete({
                        token: data.token,
                        success: function (data2) {
                            //3.把下载好的移动到files分区
                            system.file.move({
                                srcUri: data2.uri,
                                dstUri: path.getMIUserPath(target),
                                success: function (uri) {
                                    resolve();
                                },
                                fail: function (data, code) {
                                    reject();
                                }
                            })
                        },
                        fail: function (data2, code) {
                            reject(data2)
                        }
                    })
                },
                fail: function (data, code) {
                    reject(data)
                }
            })

        })
    }
}

function getFile(p) {
    return new Promise((resolve, reject) => {
        system.file.get({
            uri: p,
            success: function (data) {
                if (data.type == 'file') {
                    resolve()
                } else {
                    reject()
                }
            },
            fail: function (data, code) {
                reject()
            }
        })
    })

}
export const path = {
    dirname: (p) => {
        const arr = p.split("/");
        arr.pop();
        return arr.join('/');
    },

    isRemotePath: (p) => {
        return p.indexOf("http://") == 0 || p.indexOf("https://") == 0;
    },

    normailze: (p) => {
        let arr = p.split("/");
        let original = p.split("/");
        for (let a of arr) {
            if (a == '' || a == null) {
                let index = original.indexOf(a);
                original.splice(index, 1);
            }
        }
        if (original.length > 0) {
            return original.join('/');
        }
    },
    // 根据key值表获取本地缓存路径
    // 通过本函数可将网络地址转化为本地缓存地址
    // 可通过编辑key值表来创建多个缓存路径
    getLocalFilePath: (p) => {
        for (let key in path.localFileMap) {
            if (p.indexOf(key) >= 0) {
                p = p.replace(key, path.localFileMap[key]);
                return path.normailze(p);
            }
        }
        //未设置key值，将按照地址名整理出资源路径，进行存储
        if (p.indexOf(":") >= 0 || p.indexOf('#') >= 0 || p.indexOf('?') >= 0) {
            p = p.replace(/[^a-z0-9.]/gi, "/");
        }
        return path.normailze(p);
    },
     // 获取小米的用户缓存地址
     getMIUserPath: (p) => {
        return MI_ROOT + p;
    },
    // 本地资源文件key值表
    // 可按照网络资源地址分配本地地址，可修改
    // 以下为示例，开发者可根据需要进行修改
    localFileMap: {
        'http://10.0.5.52:8080/resource/qgame': 'cache_crc32/assets/',
        // 'http://XXXXX/resource/config/': 'temp_text/',
        // 'http://XXXXX/resource/bin/': 'temp_bin/'
    }
}
