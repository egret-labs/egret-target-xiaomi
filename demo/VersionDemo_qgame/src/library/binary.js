const fileutil = require('./file-util');
const path = fileutil.path;
const fs = fileutil.fs;


class BinaryProcessor {

    onLoadStart(host, resource) {

        const {
            root,
            url
        } = resource;
        let xhrURL = url.indexOf('://') >= 0 ? url : root + url;
        if (RES['getVirtualUrl']) {
            xhrURL = RES['getVirtualUrl'](xhrURL);
        }
        if (path.isRemotePath(xhrURL)){//判断是本地加载还是网络加载
            if(!needCache(xhrURL)){
                //通过缓存机制判断是否本地加载
                console.log('无需缓存加载')
                return loadBinary(xhrURL)
            }else{
                console.log('本地读取缓存')
                const fullname = 'internal://files/' + path.getLocalFilePath(xhrURL);
                return fs.existsSync(fullname).then(()=>{
                    console.log("buffer.本地有缓存")
                    return loadBinary(fullname);
                },()=>{
                    console.log("buffer.本地没有缓存")
                    return fs.downloadFile(xhrURL,fullname).then(()=>{
                        console.log("下载完成，再从缓存里读取")
                        return loadBinary(fullname);
                    },()=>{
                        return;
                    })
                })
            }
        }else{
            console.log('本地加载Buffer', xhrURL)
            return loadBinary(xhrURL)
        }

    }

    onRemoveStart(host, resource) {
        return Promise.resolve();
    }
}


function loadBinary(xhrURL) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "arraybuffer"
        xhr.onload = () => {
            resolve(xhr.response);
        }
        xhr.onerror = (e) => {
            const error = new RES.ResourceManagerError(1001, xhrURL);
            console.error(e);
            reject(error);
        }
        xhr.open("get", xhrURL);
        xhr.send();
    });

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



const processor = new BinaryProcessor();
RES.processor.map("bin", processor);
