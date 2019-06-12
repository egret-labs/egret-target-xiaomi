//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

namespace egret.qgame {

    /**
     * @private
     */
    export class WebHttpRequest extends EventDispatcher implements HttpRequest {

        private _response: string;
        private _responsHeaders: string;

        /**
         * @private
         */
        public constructor() {
            super();
        }
        /**
         * @private
         */
        public timeout: number = 0;

        /**
         * @private
         * 本次请求返回的数据
         */

        public get response(): any {
            if (!this.isNetUrl(this._url)) {
                return this._response;
            } else {
                if (!this._xhr) {
                    return null;
                }

                if (this._xhr.response != undefined) {
                    return this._xhr.response;
                }

                if (this._responseType == "text") {
                    return this._xhr.responseText;
                }

                if (this._responseType == "arraybuffer" && /msie 9.0/i.test(navigator.userAgent)) {
                    let w: any = window;
                    return w.convertResponseBodyToText(this._xhr["responseBody"]);
                }
                if (this._responseType == "document") {
                    return this._xhr.responseXML;
                }
                return null;
            }

        }

        /**
         * @private
         */
        private _responseType: "" | "arraybuffer" | "blob" | "document" | "json" | "text";

        /**
         * @private
         * 设置返回的数据格式，请使用 HttpResponseType 里定义的枚举值。设置非法的值或不设置，都将使用HttpResponseType.TEXT。
         */
        public get responseType(): "" | "arraybuffer" | "blob" | "document" | "json" | "text" {
            return this._responseType;
        }

        public set responseType(value: "" | "arraybuffer" | "blob" | "document" | "json" | "text") {
            this._responseType = value;
        }

        /**
         * @private
         */
        private _xhr: XMLHttpRequest;
        private _url: string = "";
        private _method: string = "";

        /**
         * @private
         * @param url 该请求所要访问的URL该请求所要访问的URL
         * @param method 请求所使用的HTTP方法， 请使用 HttpMethod 定义的枚举值.
         */
        public open(url: string, method: string = "GET"): void {
            this._url = url;
            this._method = method;

            if (this._xhr) {
                this._xhr.abort();
                this._xhr = null;

            }
            if (this.isNetUrl(this._url)) {
                this._xhr = new XMLHttpRequest();
                this._xhr.onreadystatechange = this.onReadyStateChange.bind(this);
                this._xhr.onprogress = this.updateProgress.bind(this);
                this._xhr.ontimeout = this.onTimeout.bind(this)
                this._xhr.open(this._method, this._url, true);
            }
        }

        /**
         * @private
         * 发送请求.
         * @param data 需要发送的数据
         */
        public send(data?: any): void {
            if (!this.isNetUrl(this._url)) {
                this.readFileAsync();
            } else {
                if (this._responseType != null) {
                    this._xhr.responseType = this._responseType;
                }
                if (this._withCredentials != null) {
                    this._xhr.withCredentials = this._withCredentials;
                }
                if (this.headerObj) {
                    for (let key in this.headerObj) {
                        this._xhr.setRequestHeader(key, this.headerObj[key]);
                    }
                }
                this._xhr.timeout = this.timeout;
                this._xhr.send(data);
            }
        }
        /**
         * @private
         */
        private onTimeout(): void {
            if (DEBUG) {
                let message = egret.sys.tr(1052, this._url);
                egret.warn(message)
            }
            //小米平台会自动抛出 error 事件，不用再发送一次
            // this.dispatchEventWith(IOErrorEvent.IO_ERROR);
        }
        /**
         * @private
         */
        private onReadyStateChange(): void {
            let xhr = this._xhr;
            if (xhr.readyState == 4) {// 4 = "loaded"
                let ioError = (xhr.status >= 400 || xhr.status == 0);
                let url = this._url;
                let self = this;
                window.setTimeout(function (): void {
                    if (ioError) {//请求错误
                        if (DEBUG && !self.hasEventListener(IOErrorEvent.IO_ERROR)) {
                            $error(1011, url);
                        }
                        self.dispatchEventWith(IOErrorEvent.IO_ERROR);
                    }
                    else {
                        self.dispatchEventWith(Event.COMPLETE);
                    }
                }, 0)

            }
        }
        private updateProgress(event): void {
            if (event.lengthComputable) {
                ProgressEvent.dispatchProgressEvent(this, ProgressEvent.PROGRESS, event.loaded, event.total);
            }
        }

        /**
         * @private
         * 返回所有响应头信息(响应头名和值), 如果响应头还没接受,则返回"".
         */
        public getAllResponseHeaders(): string {
            if (!this._responsHeaders) {
                return null;
            }
            return Object.keys(this._responsHeaders).map(function (header) {
                return header + ': ' + this.responseHeader[header];
            }).join('\n');
        }
        /**发送的请求头 */
        private headerObj: any;
        /**
         * @private
         * 给指定的HTTP请求头赋值.在这之前,您必须确认已经调用 open() 方法打开了一个url.
         * @param header 将要被赋值的请求头名称.
         * @param value 给指定的请求头赋的值.
         */
        public setRequestHeader(header: string, value: string): void {
            if (!this.headerObj) {
                this.headerObj = {};
            }
            this.headerObj[header] = value;
        }

        /**
         * @private
         * 返回指定的响应头的值, 如果响应头还没被接受,或该响应头不存在,则返回"".
         * @param header 要返回的响应头名称
         */
        public getResponseHeader(header: string): string {
            if (!this._responsHeaders) {
                return null;
            }
            return this._responsHeaders[header];
        }

        /**
         * 是否是网络地址
         * @param url
         * @returns {boolean}
         */
        private isNetUrl(url: string): boolean {
            return url.indexOf("http://") != -1 || url.indexOf("HTTP://") != -1 || url.indexOf("https://") != -1 || url.indexOf("HTTPS://") != -1;
        }


        private readFileAsync(): void {
            var self = this;

            var onSuccessFunc = function (content) {
                self._response = content;
                self.dispatchEventWith(egret.Event.COMPLETE);
            };
            var onErrorFunc = function () {
                self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
            };

            // const fs = wx.getFileSystemManager();
            const url = "/" + self._url;
            if (self.responseType == "arraybuffer") {
                //qgame默认utf8编码
                system.file.readArrayBuffer({
                    uri: url,
                    success(buffer) {
                        onSuccessFunc(buffer.buffer);
                    },
                    fail(data, code) {
                        //code 有三种错误码 202参数错误，300I/O错误，301文件不存在
                        onErrorFunc();
                    }
                })
            }
            else {
                system.file.readText({
                    uri: url,
                    success(data) {
                        onSuccessFunc(data.text);
                    },
                    fail(code) {
                        //code 有三种错误码 202参数错误，300I/O错误，301文件不存在
                        onErrorFunc();
                    }
                })
            }
        }
        /**
         * @private
         */
        private _withCredentials: boolean;

        /**
         * @private
         * 表明在进行跨站(cross-site)的访问控制(Access-Control)请求时，是否使用认证信息(例如cookie或授权的header)。 默认为 false。(这个标志不会影响同站的请求)
         */
        public get withCredentials(): boolean {
            return this._withCredentials;
        }

        public set withCredentials(value: boolean) {
            this._withCredentials = value;
        }
        public abort(): void { }

    }
    HttpRequest = WebHttpRequest;

}
