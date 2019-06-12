const fileutil = require('./file-util');
const path = fileutil.path;
const fs = fileutil.fs;
const system = require('@system');

/**
 * 重写的文本加载器，代替引擎默认的文本加载器
 * 该代码中包含了大量日志用于辅助开发者调试
 * 正式上线时请开发者手动删除这些注释
 */
class TextProcessor {

    onLoadStart(host, resource) {

        const {
            root,
            url
        } = resource;


        // console.log('res 加载源',resource)
        let xhrURL = url.indexOf('://') >= 0 ? url : root + url; //获取网络加载url
        if (RES['getVirtualUrl']) {
            xhrURL = RES['getVirtualUrl'](xhrURL);
        }
        if (path.isRemotePath(xhrURL)) { //判断是本地加载还是网络加载
            if (needCache(xhrURL)) {
                console.log('本地读取缓存')
                //通过缓存机制判断是否本地加载
                const targetFilename = 'internal://files/' + path.getLocalFilePath(xhrURL);
                // console.log('需要缓存',targetFilename)
                return fs.existsSync(targetFilename).then(() => {
                    console.log('缓存命中');
                    return readLoaclText(targetFilename);
                }, () => {
                    console.log('没有缓存命中,通过url加载，加载成功后加入本地缓存');
                    return loadText(xhrURL).then((content) => {
                        return writeText(targetFilename, content)
                    })
                })
            } else {
                console.log('不需要缓存,', xhrURL)
                //无需缓存，正常url加载
                return loadText(xhrURL)

            }
        } else {
            //本地加载
            console.log('本地加载文本', xhrURL)
            return readLoaclText(xhrURL)
        }
    }

    onRemoveStart(host, resource) {
        return Promise.resolve();
    }
}

function writeText(targetFilename, content) {
    return new Promise((resolve, reject) => {
        system.file.writeText({
            uri: targetFilename,
            text: content,
            success: function () {
                console.log('write succ', content)
                resolve(content);
            },
            fail: function (data, code) {
                // console.log("write txt fail",data,code)
                reject();
            }
        })
    })
}

function readLoaclText(targetFilename) {
    return new Promise((resolve, reject) => {
        system.file.readText({
            uri: targetFilename,
            success: function (data) {
                resolve(data.text)
            },
            fail: function (data, code) {
                reject();
            }
        })
    })
}

function loadText(xhrURL) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status >= 400) {
                const message = `加载失败:${xhrURL}`;
                console.error(message);
                reject(message);
            } else {
                // console.log('loadText:', xhr.responseText)
                resolve(xhr.responseText);
            }
        }
        xhr.onerror = (e) => {
            const error = new RES.ResourceManagerError(1001, xhrURL);
            console.error(e);
            reject(error);
        }
        xhr.open("get", xhrURL);
        xhr.send();
    })
}

/**
 * 由于小米快小游戏限制只有50M的资源可以本地存储，
 * 所以开发者应根据URL进行判断，将特定资源进行本地缓存
 */
function needCache(assUrl) {
    if (assUrl.indexOf("resource/assets/") >= 0) {
        return true;
    } else {
        return false;
    }
}


const processor = new TextProcessor();
RES.processor.map("text", processor);
