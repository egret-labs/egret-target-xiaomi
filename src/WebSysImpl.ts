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

    /*
    * 覆盖掉系统的 createCanvas
    */
    function mainCanvas(width?: number, height?: number): HTMLCanvasElement {
        return getCurrentPage().getCanvas();
    }
    egret.sys.mainCanvas = mainCanvas;

    function createCanvas(width?: number, height?: number): HTMLCanvasElement {
        let canvas: HTMLCanvasElement = document.createElement("canvas");
        if (!isNaN(width) && !isNaN(height)) {
            canvas.width = width;
            canvas.height = height;
        }
        return canvas;
    }
    egret.sys.createCanvas = createCanvas;


    /*
    * 覆盖掉系统的 resizeContext
    */
    export function resizeContext(renderContext: egret.sys.RenderContext, width: number, height: number, useMaxSize?: boolean): void {
        if (!renderContext) {
            return;
        }
        const webglrendercontext = <WebGLRenderContext>renderContext;
        let surface = webglrendercontext.surface;
        if (useMaxSize) {
            if (surface.width < width) {
                surface.width = width;
            }
            if (surface.height < height) {
                surface.height = height;
            }
        }
        else {
            if (surface.width !== width) {
                surface.width = width;
            }
            if (surface.height !== height) {
                surface.height = height;
            }
        }
        webglrendercontext.onResize();
    }
    egret.sys.resizeContext = resizeContext;



    /**
     * sys.getContextWebGL
     */
    function getContextWebGL(surface: HTMLCanvasElement): WebGLRenderingContext {
        return surface ? surface.getContext('webgl') : null;
    }
    egret.sys.getContextWebGL = getContextWebGL;
    /**
     * sys.getContext2d
     */
    export function getContext2d(surface: HTMLCanvasElement): CanvasRenderingContext2D {
        return surface ? surface.getContext('2d') : null;
    }
    egret.sys.getContext2d = getContext2d;

    /**
     * 覆盖掉系统的createTexture
     */
    function createTexture(renderContext: egret.sys.RenderContext, bitmapData: BitmapData): WebGLTexture {
        const webglrendercontext = <WebGLRenderContext>renderContext;
        const gl: any = webglrendercontext.context;
        if ((bitmapData as any).isCanvas && gl.wxBindCanvasTexture) {
            return bitmapData;
        }
        const texture = gl.createTexture();
        if (!texture) {
            //先创建texture失败,然后lost事件才发出来..
            webglrendercontext.contextLost = true;
            return null;
        }
        texture.glContext = gl;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmapData);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        if (bitmapData.source) {
            bitmapData.source.src = "";
        }
        return texture;
    }
    egret.sys.createTexture = createTexture;

    /**
    * 覆盖掉系统的drawTextureElements
    **/
    function drawTextureElements(renderContext: egret.sys.RenderContext, data: any, offset: number): number {
        const webglrendercontext = <WebGLRenderContext>renderContext;
        const gl: any = webglrendercontext.context;
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, data.texture);
        const size = data.count * 3;
        gl.drawElements(gl.TRIANGLES, size, gl.UNSIGNED_SHORT, offset * 2);
        return size;
    }
    egret.sys.drawTextureElements = drawTextureElements;

    /**
     * 测量文本的宽度
     * @param context 
     * @param text 
     */
    function measureTextWith(context: CanvasRenderingContext2D, text: string): number {
        return context.measureText(text).width;
    }
    egret.sys.measureTextWith = measureTextWith;

    /**
     * 为CanvasRenderBuffer创建一个HTMLCanvasElement
     * @param defaultFunc 
     * @param width 
     * @param height 
     * @param root 
     */
    function createCanvasRenderBufferSurface(defaultFunc: (width?: number, height?: number) => HTMLCanvasElement, width?: number, height?: number, root?: boolean): HTMLCanvasElement {
        if (root) {
            return getCurrentPage().getCanvas();
        }
        else {
            return defaultFunc(width, height);
        }
    }
    egret.sys.createCanvasRenderBufferSurface = createCanvasRenderBufferSurface;

    /**
     * 改变渲染缓冲的大小并清空缓冲区
     * @param renderContext 
     * @param width 
     * @param height 
     * @param useMaxSize 
     */
    function resizeCanvasRenderBuffer(renderContext: egret.sys.RenderContext, width: number, height: number, useMaxSize?: boolean): void {
        let canvasRenderBuffer = <CanvasRenderBuffer>renderContext;
        let surface = canvasRenderBuffer.surface;
        if (useMaxSize) {
            let change = false;
            if (surface.width < width) {
                surface.width = width;
                change = true;
            }
            if (surface.height < height) {
                surface.height = height;
                change = true;
            }
            //尺寸没有变化时,将绘制属性重置
            if (!change) {
                canvasRenderBuffer.context.globalCompositeOperation = "source-over";
                canvasRenderBuffer.context.setTransform(1, 0, 0, 1, 0, 0);
                canvasRenderBuffer.context.globalAlpha = 1;
            }
        }
        else {
            if (surface.width != width) {
                surface.width = width;
            }
            if (surface.height != height) {
                surface.height = height;
            }
        }
        canvasRenderBuffer.clear();
    }
    egret.sys.resizeCanvasRenderBuffer = resizeCanvasRenderBuffer;

    /**
     * sys.printWebAudioDecodeError
     * @param url 
     */
    function printWebAudioDecodeError(url: string): void {
        alert("sound decode error: " + url + "！\nsee http://edn.egret.com/cn/docs/page/156");
    }
    egret.sys.printWebAudioDecodeError = printWebAudioDecodeError;

    /**
     * sys.loadWebAudioSound
     * @param context 
     * @param url 
     * @param onAudioLoaded 
     * @param onAudioError 
     */
    function loadWebAudioSound(context: egret.sys.RenderContext, url: string, onAudioLoaded: () => void, onAudioError: () => void): void {
        let self = <WebAudioSound>context;
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";
        request.onreadystatechange = function () {
            if (request.readyState == 4) {// 4 = "loaded"
                let ioError = (request.status >= 400 || request.status == 0);
                if (ioError) {//请求错误
                    self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
                } else {
                    WebAudioDecode.decodeArr.push({
                        "buffer": request.response,
                        "success": onAudioLoaded,
                        "fail": onAudioError,
                        "self": self,
                        "url": url
                    });
                    WebAudioDecode.decodeAudios();
                }
            }
        }
        request.send();
    }
    egret.sys.loadWebAudioSound = loadWebAudioSound;

    egret.Geolocation = egret.qgame.WebGeolocation;
    egret.Motion = egret.qgame.WebMotion;
}

// window["sharedCanvas"].isCanvas = true;

