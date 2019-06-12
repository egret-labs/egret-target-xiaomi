/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/egret.miqgame.js":
/*!******************************!*\
  !*** ./src/egret.miqgame.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var system = __webpack_require__(/*! @system */ "@system");

var __reflect = void 0 && (void 0).__reflect || function (p, c, t) {
  p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

var __extends = void 0 && (void 0).__extends || function __extends(t, e) {
  function r() {
    this.constructor = t;
  }

  for (var i in e) {
    e.hasOwnProperty(i) && (t[i] = e[i]);
  }

  r.prototype = e.prototype, t.prototype = new r();
}; //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var fpsText = new egret.TextField();
    /**
     * @private
     */

    var WebFps = function (_super) {
      __extends(WebFps, _super);

      function WebFps(stage, showFPS, showLog, logFilter, styles) {
        var _this = _super.call(this) || this;

        _this.arrFps = [];
        _this.arrCost = [];

        if (!showFPS && !showLog) {
          return _this;
        }

        _this.arrFps = [];
        _this.arrCost = [];
        fpsText.x = styles["x"] == undefined ? 0 : parseInt(styles["x"]);
        fpsText.y = styles["y"] == undefined ? 0 : parseInt(styles["y"]);
        fpsText.textColor = styles["textColor"] == undefined ? '#ffffff' : styles['textColor'].replace("0x", "#");
        var fontSize = styles["size"] == undefined ? 12 : parseInt(styles['size']);
        fpsText.size = fontSize;
        return _this;
      }

      WebFps.prototype.addFps = function () {};

      WebFps.prototype.addLog = function () {};

      WebFps.prototype.update = function (datas, showLastData) {
        if (showLastData === void 0) {
          showLastData = false;
        }

        var numFps;
        var numCostTicker;
        var numCostRender;

        if (!showLastData) {
          numFps = datas.fps;
          numCostTicker = datas.costTicker;
          numCostRender = datas.costRender;
          this.lastNumDraw = datas.draw;
          this.arrFps.push(numFps);
          this.arrCost.push([numCostTicker, numCostRender]);
        } else {
          numFps = this.arrFps[this.arrFps.length - 1];
          numCostTicker = this.arrCost[this.arrCost.length - 1][0];
          numCostRender = this.arrCost[this.arrCost.length - 1][1];
        }

        var fpsTotal = 0;
        var lenFps = this.arrFps.length;

        if (lenFps > 101) {
          lenFps = 101;
          this.arrFps.shift();
          this.arrCost.shift();
        }

        var fpsMin = this.arrFps[0];
        var fpsMax = this.arrFps[0];

        for (var i = 0; i < lenFps; i++) {
          var num = this.arrFps[i];
          fpsTotal += num;
          if (num < fpsMin) fpsMin = num;else if (num > fpsMax) fpsMax = num;
        }

        var fpsAvg = Math.floor(fpsTotal / lenFps);
        fpsText.text = numFps + " FPS \n" + ("min:" + fpsMin + " max:" + fpsMax + " avg:" + fpsAvg + "\n") + ("Draw " + this.lastNumDraw + "\n") + ("Cost " + numCostTicker + " " + numCostRender);
        egret.sys.$TempStage.addChild(fpsText);
      };

      ;

      WebFps.prototype.updateInfo = function (info) {};

      WebFps.prototype.updateWarn = function (info) {};

      WebFps.prototype.updateError = function (info) {};

      return WebFps;
    }(egret.DisplayObject);

    miqgame.WebFps = WebFps;

    __reflect(WebFps.prototype, "egret.miqgame.WebFps", ["egret.FPSDisplay"]);

    egret.FPSDisplay = WebFps;
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


if (window['HTMLDivElement'] == undefined) {
  window['HTMLDivElement'] = HTMLElement;
} // There is no HTMLDivElement in webkit for air


if (window['HTMLVideoElement'] == undefined) {
  window['HTMLVideoElement'] = HTMLDivElement;
}

(function (egret) {
  var miqgame;

  (function (miqgame) {
    var className = "egret.BitmapData";
    egret.registerClass(HTMLImageElement, className);
    egret.registerClass(HTMLCanvasElement, className);
    egret.registerClass(HTMLVideoElement, className);
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {}));

(function (egret) {
  /**
   * 转换 Image，Canvas，Video 为 Egret 框架内使用的 BitmapData 对象。
   * @param data 需要转换的对象，包括HTMLImageElement|HTMLCanvasElement|HTMLVideoElement
   * @deprecated
   */
  function $toBitmapData(data) {
    data["hashCode"] = data["$hashCode"] = egret.$hashCount++;
    return data;
  }

  egret.$toBitmapData = $toBitmapData;
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var localStorage;

  (function (localStorage) {
    var miqgame;

    (function (miqgame) {
      /**
       * @private
       *
       * @param key
       * @returns
       */
      function getItem(key) {
        return system.storage.getSync({
          key: key
        }); // return window.localStorage.getItem(key);
      }
      /**
       * @private
       *
       * @param key
       * @param value
       * @returns
       */


      function setItem(key, value) {
        var result = system.storage.setSync({
          key: key,
          value: value,
          success: function success(data) {
            console.log('localStorage.setItem succ', data);
            value = data;
          },
          fail: function fail(data, code) {
            egret.$warn(1047, key, value);
            console.log("ocalStorage.setItem ,data=" + data + ", code = " + code);
          }
        });

        if (result == "success") {
          return true;
        } else {
          egret.$warn(1047, key, value);
          return false;
        } // try{
        //     window.localStorage.setItem(key, value);
        //     return true;
        // }
        // catch(e){
        //     egret.$warn(1047, key, value);
        //     return false;
        // }

      }
      /**
       * @private
       *
       * @param key
       */


      function removeItem(key) {
        system.storage.deleteSync({
          key: key
        }); // window.localStorage.removeItem(key);
      }
      /**
       * @private
       *
       */


      function clear() {
        // window.localStorage.clear();
        system.storage.clearSync();
      }

      localStorage.getItem = getItem;
      localStorage.setItem = setItem;
      localStorage.removeItem = removeItem;
      localStorage.clear = clear;
    })(miqgame = localStorage.miqgame || (localStorage.miqgame = {}));
  })(localStorage = egret.localStorage || (egret.localStorage = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     * @inheritDoc
     */
    var HtmlSound = function (_super) {
      __extends(HtmlSound, _super);
      /**
       * @private
       * @inheritDoc
       */


      function HtmlSound() {
        var _this = _super.call(this) || this;
        /**
         * @private
         */


        _this.loaded = false;
        return _this;
      }

      Object.defineProperty(HtmlSound.prototype, "length", {
        get: function get() {
          if (this.originAudio) {
            return this.originAudio.duration;
          }

          throw new Error("sound not loaded!"); //return 0;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @inheritDoc
       */

      HtmlSound.prototype.load = function (url) {
        var self = this;
        this.url = url;

        if ( true && !url) {
          egret.$error(3002);
        }

        var audio = new Audio(url);
        audio.addEventListener("canplaythrough", onAudioLoaded);
        audio.addEventListener("error", onAudioError);
        var ua = navigator.userAgent.toLowerCase();

        if (ua.indexOf("firefox") >= 0) {
          audio.autoplay = !0;
          audio.muted = true;
        } // audio.load();     miqgame没有此接口


        this.originAudio = audio;

        if (HtmlSound.clearAudios[this.url]) {
          delete HtmlSound.clearAudios[this.url];
        }

        HtmlSound.$recycle(this.url, audio);

        function onAudioLoaded() {
          removeListeners();

          if (ua.indexOf("firefox") >= 0) {
            audio.pause();
            audio.muted = false;
          }

          self.loaded = true;
          self.dispatchEventWith(egret.Event.COMPLETE);
        }

        function onAudioError() {
          removeListeners();
          self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
        }

        function removeListeners() {
          audio.removeEventListener("canplaythrough", onAudioLoaded);
          audio.removeEventListener("error", onAudioError);
        }
      };
      /**
       * @inheritDoc
       */


      HtmlSound.prototype.play = function (startTime, loops) {
        startTime = +startTime || 0;
        loops = +loops || 0;

        if ( true && this.loaded == false) {
          egret.$error(1049);
        }

        var audio = HtmlSound.$pop(this.url);

        if (audio == null) {
          audio = this.originAudio.cloneNode();
        } else {//audio.load();
        }

        audio.autoplay = true;
        var channel = new miqgame.HtmlSoundChannel(audio);
        channel.$url = this.url;
        channel.$loops = loops;
        channel.$startTime = startTime;
        channel.$play();
        egret.sys.$pushSoundChannel(channel);
        return channel;
      };
      /**
       * @inheritDoc
       */


      HtmlSound.prototype.close = function () {
        if (this.loaded == false && this.originAudio) this.originAudio.src = "";
        if (this.originAudio) this.originAudio = null;
        HtmlSound.$clear(this.url);
      };

      HtmlSound.$clear = function (url) {
        HtmlSound.clearAudios[url] = true;
        var array = HtmlSound.audios[url];

        if (array) {
          array.length = 0;
        }
      };

      HtmlSound.$pop = function (url) {
        var array = HtmlSound.audios[url];

        if (array && array.length > 0) {
          return array.pop();
        }

        return null;
      };

      HtmlSound.$recycle = function (url, audio) {
        if (HtmlSound.clearAudios[url]) {
          return;
        }

        var array = HtmlSound.audios[url];

        if (HtmlSound.audios[url] == null) {
          array = HtmlSound.audios[url] = [];
        }

        array.push(audio);
      };
      /**
       * Background music
       * @version Egret 2.4
       * @platform Web,Native
       * @language en_US
       */

      /**
       * 背景音乐
       * @version Egret 2.4
       * @platform Web,Native
       * @language zh_CN
       */


      HtmlSound.MUSIC = "music";
      /**
       * EFFECT
       * @version Egret 2.4
       * @platform Web,Native
       * @language en_US
       */

      /**
       * 音效
       * @version Egret 2.4
       * @platform Web,Native
       * @language zh_CN
       */

      HtmlSound.EFFECT = "effect";
      /**
       * @private
       */

      HtmlSound.audios = {};
      HtmlSound.clearAudios = {};
      return HtmlSound;
    }(egret.EventDispatcher);

    miqgame.HtmlSound = HtmlSound;

    __reflect(HtmlSound.prototype, "egret.miqgame.HtmlSound", ["egret.Sound"]);
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     * @inheritDoc
     */
    var HtmlSoundChannel = function (_super) {
      __extends(HtmlSoundChannel, _super);
      /**
       * @private
       */


      function HtmlSoundChannel(audio) {
        var _this = _super.call(this) || this;
        /**
         * @private
         */


        _this.$startTime = 0;
        /**
         * @private
         */

        _this.audio = null; //声音是否已经播放完成

        _this.isStopped = false;
        /**
         * @private
         */

        _this.onPlayEnd = function () {
          if (_this.$loops == 1) {
            _this.stop();

            _this.dispatchEventWith(egret.Event.SOUND_COMPLETE);

            return;
          }

          if (_this.$loops > 0) {
            _this.$loops--;
          } /////////////
          //this.audio.load();


          _this.$play();
        };
        /**
         * @private
         */


        _this._volume = 1;
        audio.addEventListener("ended", _this.onPlayEnd);
        _this.audio = audio;
        return _this;
      }

      HtmlSoundChannel.prototype.$play = function () {
        if (this.isStopped) {
          egret.$error(1036);
          return;
        }

        this.audio.play();
        this.audio.volume = this._volume;
        this.audio.currentTime = this.$startTime;
      };
      /**
       * @private
       * @inheritDoc
       */


      HtmlSoundChannel.prototype.stop = function () {
        if (!this.audio) return;

        if (!this.isStopped) {
          egret.sys.$popSoundChannel(this);
        }

        this.isStopped = true;
        var audio = this.audio;
        audio.removeEventListener("ended", this.onPlayEnd);
        audio.volume = 0;
        this._volume = 0;
        this.audio = null;
        var url = this.$url; //延迟一定时间再停止，规避chrome报错

        window.setTimeout(function () {
          audio.pause();
          miqgame.HtmlSound.$recycle(url, audio);
        }, 200);
      };

      Object.defineProperty(HtmlSoundChannel.prototype, "volume", {
        /**
         * @private
         * @inheritDoc
         */
        get: function get() {
          return this._volume;
        },

        /**
         * @inheritDoc
         */
        set: function set(value) {
          if (this.isStopped) {
            egret.$error(1036);
            return;
          }

          this._volume = value;
          if (!this.audio) return;
          this.audio.volume = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(HtmlSoundChannel.prototype, "position", {
        /**
         * @private
         * @inheritDoc
         */
        get: function get() {
          if (!this.audio) return 0;
          return this.audio.currentTime;
        },
        enumerable: true,
        configurable: true
      });
      return HtmlSoundChannel;
    }(egret.EventDispatcher);

    miqgame.HtmlSoundChannel = HtmlSoundChannel;

    __reflect(HtmlSoundChannel.prototype, "egret.miqgame.HtmlSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"]);
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var WebAudioDecode = function () {
      function WebAudioDecode() {}
      /**
       * @private
       *
       */


      WebAudioDecode.decodeAudios = function () {
        if (WebAudioDecode.decodeArr.length <= 0) {
          return;
        }

        if (WebAudioDecode.isDecoding) {
          return;
        }

        WebAudioDecode.isDecoding = true;
        var decodeInfo = WebAudioDecode.decodeArr.shift();
        WebAudioDecode.ctx.decodeAudioData(decodeInfo["buffer"], function (audioBuffer) {
          decodeInfo["self"].audioBuffer = audioBuffer;

          if (decodeInfo["success"]) {
            decodeInfo["success"]();
          }

          WebAudioDecode.isDecoding = false;
          WebAudioDecode.decodeAudios();
        }, function () {
          alert("sound decode error: " + decodeInfo["url"] + "！\nsee http://edn.egret.com/cn/docs/page/156");

          if (decodeInfo["fail"]) {
            decodeInfo["fail"]();
          }

          WebAudioDecode.isDecoding = false;
          WebAudioDecode.decodeAudios();
        });
      };
      /**
       * @private
       */


      WebAudioDecode.decodeArr = [];
      /**
       * @private
       */

      WebAudioDecode.isDecoding = false;
      return WebAudioDecode;
    }();

    miqgame.WebAudioDecode = WebAudioDecode;

    __reflect(WebAudioDecode.prototype, "egret.miqgame.WebAudioDecode");
    /**
     * @private
     * @inheritDoc
     */


    var WebAudioSound = function (_super) {
      __extends(WebAudioSound, _super);
      /**
       * @private
       * @inheritDoc
       */


      function WebAudioSound() {
        var _this = _super.call(this) || this;
        /**
         * @private
         */


        _this.loaded = false;
        return _this;
      }

      Object.defineProperty(WebAudioSound.prototype, "length", {
        get: function get() {
          if (this.audioBuffer) {
            return this.audioBuffer.duration;
          }

          throw new Error("sound not loaded!"); //return 0;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @inheritDoc
       */

      WebAudioSound.prototype.load = function (url) {
        var self = this;
        this.url = url;

        if ( true && !url) {
          egret.$error(3002);
        }

        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";

        request.onreadystatechange = function () {
          if (request.readyState == 4) {
            var ioError = request.status >= 400 || request.status == 0;

            if (ioError) {
              self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
            } else {
              WebAudioDecode.decodeArr.push({
                "buffer": request.response,
                "success": onAudioLoaded,
                "fail": onAudioError,
                "self": self,
                "url": self.url
              });
              WebAudioDecode.decodeAudios();
            }
          }
        };

        request.send();

        function onAudioLoaded() {
          self.loaded = true;
          self.dispatchEventWith(egret.Event.COMPLETE);
        }

        function onAudioError() {
          self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
        }
      };
      /**
       * @inheritDoc
       */


      WebAudioSound.prototype.play = function (startTime, loops) {
        startTime = +startTime || 0;
        loops = +loops || 0;

        if ( true && this.loaded == false) {
          egret.$error(1049);
        }

        var channel = new miqgame.WebAudioSoundChannel();
        channel.$url = this.url;
        channel.$loops = loops;
        channel.$audioBuffer = this.audioBuffer;
        channel.$startTime = startTime;
        channel.$play();
        egret.sys.$pushSoundChannel(channel);
        return channel;
      };
      /**
       * @inheritDoc
       */


      WebAudioSound.prototype.close = function () {};
      /**
       * Background music
       * @version Egret 2.4
       * @platform Web,Native
       * @language en_US
       */

      /**
       * 背景音乐
       * @version Egret 2.4
       * @platform Web,Native
       * @language zh_CN
       */


      WebAudioSound.MUSIC = "music";
      /**
       * EFFECT
       * @version Egret 2.4
       * @platform Web,Native
       * @language en_US
       */

      /**
       * 音效
       * @version Egret 2.4
       * @platform Web,Native
       * @language zh_CN
       */

      WebAudioSound.EFFECT = "effect";
      return WebAudioSound;
    }(egret.EventDispatcher);

    miqgame.WebAudioSound = WebAudioSound;

    __reflect(WebAudioSound.prototype, "egret.miqgame.WebAudioSound", ["egret.Sound"]);
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     * @inheritDoc
     */
    var WebAudioSoundChannel = function (_super) {
      __extends(WebAudioSoundChannel, _super);
      /**
       * @private
       */


      function WebAudioSoundChannel() {
        var _this = _super.call(this) || this;
        /**
         * @private
         */


        _this.$startTime = 0;
        /**
         * @private
         */

        _this.bufferSource = null;
        /**
         * @private
         */

        _this.context = miqgame.WebAudioDecode.ctx; //声音是否已经播放完成

        _this.isStopped = false;
        /**
         * @private
         */

        _this._currentTime = 0;
        /**
         * @private
         */

        _this._volume = 1;
        /**
         * @private
         */

        _this.onPlayEnd = function () {
          if (_this.$loops == 1) {
            _this.stop();

            _this.dispatchEventWith(egret.Event.SOUND_COMPLETE);

            return;
          }

          if (_this.$loops > 0) {
            _this.$loops--;
          } /////////////


          _this.$play();
        };
        /**
         * @private
         */


        _this._startTime = 0;

        if (_this.context["createGain"]) {
          _this.gain = _this.context["createGain"]();
        } else {
          _this.gain = _this.context["createGainNode"]();
        }

        return _this;
      }

      WebAudioSoundChannel.prototype.$play = function () {
        if (this.isStopped) {
          egret.$error(1036);
          return;
        }

        if (this.bufferSource) {
          this.bufferSource.onended = null;
          this.bufferSource = null;
        }

        var context = this.context;
        var gain = this.gain;
        var bufferSource = context.createBufferSource();
        this.bufferSource = bufferSource;
        bufferSource.buffer = this.$audioBuffer;
        bufferSource.connect(gain);
        gain.connect(context.destination);
        bufferSource.onended = this.onPlayEnd;
        this._startTime = Date.now();
        this.gain.gain.value = this._volume;
        bufferSource.start(0, this.$startTime);
        this._currentTime = 0;
      };

      WebAudioSoundChannel.prototype.stop = function () {
        if (this.bufferSource) {
          var sourceNode = this.bufferSource;

          if (sourceNode.stop) {
            sourceNode.stop(0);
          } else {
            sourceNode.noteOff(0);
          }

          sourceNode.onended = null;
          sourceNode.disconnect();
          this.bufferSource = null;
          this.$audioBuffer = null;
        }

        if (!this.isStopped) {
          egret.sys.$popSoundChannel(this);
        }

        this.isStopped = true;
      };

      Object.defineProperty(WebAudioSoundChannel.prototype, "volume", {
        /**
         * @private
         * @inheritDoc
         */
        get: function get() {
          return this._volume;
        },

        /**
         * @inheritDoc
         */
        set: function set(value) {
          if (this.isStopped) {
            egret.$error(1036);
            return;
          }

          this._volume = value;
          this.gain.gain.value = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(WebAudioSoundChannel.prototype, "position", {
        /**
         * @private
         * @inheritDoc
         */
        get: function get() {
          if (this.bufferSource) {
            return (Date.now() - this._startTime) / 1000 + this.$startTime;
          }

          return 0;
        },
        enumerable: true,
        configurable: true
      });
      return WebAudioSoundChannel;
    }(egret.EventDispatcher);

    miqgame.WebAudioSoundChannel = WebAudioSoundChannel;

    __reflect(WebAudioSoundChannel.prototype, "egret.miqgame.WebAudioSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"]);
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     * @inheritDoc
     */
    var WebVideo = function (_super) {
      __extends(WebVideo, _super);
      /**
       * @inheritDoc
       */


      function WebVideo(url, cache) {
        if (cache === void 0) {
          cache = true;
        }

        var _this = _super.call(this) || this;
        /**
         * @private
         */


        _this.loaded = false;
        /**
         * @private
         */

        _this.closed = false;
        /**
         * @private
         */

        _this.heightSet = NaN;
        /**
         * @private
         */

        _this.widthSet = NaN;
        /**
         * @private
         * pc上视频卡住的时候不能暂停
         */

        _this.waiting = false;
        /**
         * @private
         * 用户是否设置了 pause
         */

        _this.userPause = false;
        /**
         * @private
         * 用户是否设置了 play
         */

        _this.userPlay = false;
        _this.isPlayed = false;

        _this.screenChanged = function (e) {
          var isfullscreen = document.fullscreenEnabled || document.webkitIsFullScreen;

          if (!isfullscreen) {
            _this.checkFullScreen(false);

            if (!egret.Capabilities.isMobile) {
              _this._fullscreen = isfullscreen;
            }
          }
        };

        _this._fullscreen = true;
        /**
         * @private
         *
         */

        _this.onVideoLoaded = function () {
          _this.video.removeEventListener("canplay", _this.onVideoLoaded);

          var video = _this.video;
          _this.loaded = true; //video.pause();

          if (_this.posterData) {
            _this.posterData.width = _this.getPlayWidth();
            _this.posterData.height = _this.getPlayHeight();
          }

          video.width = video.videoWidth;
          video.height = video.videoHeight;
          window.setTimeout(function () {
            _this.dispatchEventWith(egret.Event.COMPLETE);
          }, 200);
        };

        _this.$renderNode = new egret.sys.BitmapNode();
        _this.src = url;

        _this.once(egret.Event.ADDED_TO_STAGE, _this.loadPoster, _this);

        if (url) {
          _this.load();
        }

        return _this;
      }
      /**
       * @inheritDoc
       */


      WebVideo.prototype.load = function (url, cache) {
        var _this = this;

        if (cache === void 0) {
          cache = true;
        }

        url = url || this.src;
        this.src = url;

        if ( true && !url) {
          egret.$error(3002);
        }

        if (this.video && this.video.src == url) {
          return;
        }

        var video;

        if (!this.video || egret.Capabilities.isMobile) {
          video = document.createElement("video");
          this.video = video;
          video.controls = null;
        } else {
          video = this.video;
        }

        video.src = url;
        video.setAttribute("autoplay", "autoplay");
        video.setAttribute("webkit-playsinline", "true");
        video.addEventListener("canplay", this.onVideoLoaded);
        video.addEventListener("error", function () {
          return _this.onVideoError();
        });
        video.addEventListener("ended", function () {
          return _this.onVideoEnded();
        });
        var firstPause = false;
        video.addEventListener("canplay", function () {
          _this.waiting = false;

          if (!firstPause) {
            firstPause = true;
            video.pause();
          } else {
            if (_this.userPause) {
              _this.pause();
            } else if (_this.userPlay) {
              _this.play();
            }
          }
        });
        video.addEventListener("waiting", function () {
          _this.waiting = true;
        });
        video.load();
        this.videoPlay();
        video.style.position = "absolute";
        video.style.top = "0px";
        video.style.zIndex = "-88888";
        video.style.left = "0px";
        video.height = 1;
        video.width = 1;
      };
      /**
       * @inheritDoc
       */


      WebVideo.prototype.play = function (startTime, loop) {
        var _this = this;

        if (loop === void 0) {
          loop = false;
        }

        if (this.loaded == false) {
          this.load(this.src);
          this.once(egret.Event.COMPLETE, function (e) {
            return _this.play(startTime, loop);
          }, this);
          return;
        }

        this.isPlayed = true;
        var video = this.video;
        if (startTime != undefined) video.currentTime = +startTime || 0;
        video.loop = !!loop;

        if (egret.Capabilities.isMobile) {
          video.style.zIndex = "-88888"; //移动端，就算设置成最小，只要全屏，都会在最上层，而且在自动退出去后，不担心挡住canvas
        } else {
          video.style.zIndex = "9999";
        }

        video.style.position = "absolute";
        video.style.top = "0px";
        video.style.left = "0px";
        video.height = video.videoHeight;
        video.width = video.videoWidth;

        if (egret.Capabilities.os != "Windows PC" && egret.Capabilities.os != "Mac OS") {
          window.setTimeout(function () {
            video.width = 0;
          }, 1000);
        }

        this.checkFullScreen(this._fullscreen);
      };

      WebVideo.prototype.videoPlay = function () {
        this.userPause = false;

        if (this.waiting) {
          this.userPlay = true;
          return;
        }

        this.userPlay = false;
        this.video.play();
      };

      WebVideo.prototype.checkFullScreen = function (playFullScreen) {
        var video = this.video;

        if (playFullScreen) {
          if (video.parentElement == null) {
            video.removeAttribute("webkit-playsinline");
            document.body.appendChild(video);
          }

          egret.stopTick(this.markDirty, this);
          this.goFullscreen();
        } else {
          if (video.parentElement != null) {
            video.parentElement.removeChild(video);
          }

          video.setAttribute("webkit-playsinline", "true");
          this.setFullScreenMonitor(false);
          egret.startTick(this.markDirty, this);

          if (egret.Capabilities.isMobile) {
            this.video.currentTime = 0;
            this.onVideoEnded();
            return;
          }
        }

        this.videoPlay();
      };

      WebVideo.prototype.goFullscreen = function () {
        var video = this.video;
        var fullscreenType;
        fullscreenType = miqgame.getPrefixStyleName('requestFullscreen', video);

        if (!video[fullscreenType]) {
          fullscreenType = miqgame.getPrefixStyleName('requestFullScreen', video);

          if (!video[fullscreenType]) {
            return true;
          }
        }

        video.removeAttribute("webkit-playsinline");
        video[fullscreenType]();
        this.setFullScreenMonitor(true);
        return true;
      };

      WebVideo.prototype.setFullScreenMonitor = function (use) {
        var video = this.video;

        if (use) {
          video.addEventListener("mozfullscreenchange", this.screenChanged);
          video.addEventListener("webkitfullscreenchange", this.screenChanged);
          video.addEventListener("mozfullscreenerror", this.screenError);
          video.addEventListener("webkitfullscreenerror", this.screenError);
        } else {
          video.removeEventListener("mozfullscreenchange", this.screenChanged);
          video.removeEventListener("webkitfullscreenchange", this.screenChanged);
          video.removeEventListener("mozfullscreenerror", this.screenError);
          video.removeEventListener("webkitfullscreenerror", this.screenError);
        }
      };

      WebVideo.prototype.screenError = function () {
        egret.$error(3014);
      };

      WebVideo.prototype.exitFullscreen = function () {
        //退出全屏
        if (document['exitFullscreen']) {
          document['exitFullscreen']();
        } else if (document['msExitFullscreen']) {
          document['msExitFullscreen']();
        } else if (document['mozCancelFullScreen']) {
          document['mozCancelFullScreen']();
        } else if (document['oCancelFullScreen']) {
          document['oCancelFullScreen']();
        } else if (document['webkitExitFullscreen']) {
          document['webkitExitFullscreen']();
        } else {}
      };
      /**
       * @private
       *
       */


      WebVideo.prototype.onVideoEnded = function () {
        this.pause();
        this.isPlayed = false;
        this.dispatchEventWith(egret.Event.ENDED);
      };
      /**
       * @private
       *
       */


      WebVideo.prototype.onVideoError = function () {
        this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
      };
      /**
       * @inheritDoc
       */


      WebVideo.prototype.close = function () {
        var _this = this;

        this.closed = true;
        this.video.removeEventListener("canplay", this.onVideoLoaded);
        this.video.removeEventListener("error", function () {
          return _this.onVideoError();
        });
        this.video.removeEventListener("ended", function () {
          return _this.onVideoEnded();
        });
        this.pause();
        if (this.loaded == false && this.video) this.video.src = "";

        if (this.video && this.video.parentElement) {
          this.video.parentElement.removeChild(this.video);
          this.video = null;
        }

        this.loaded = false;
      };
      /**
       * @inheritDoc
       */


      WebVideo.prototype.pause = function () {
        this.userPlay = false;

        if (this.waiting) {
          this.userPause = true;
          return;
        }

        this.userPause = false;
        egret.stopTick(this.markDirty, this);
      };

      Object.defineProperty(WebVideo.prototype, "volume", {
        /**
         * @inheritDoc
         */
        get: function get() {
          if (!this.video) return 1;
          return this.video.volume;
        },

        /**
         * @inheritDoc
         */
        set: function set(value) {
          if (!this.video) return;
          this.video.volume = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(WebVideo.prototype, "position", {
        /**
         * @inheritDoc
         */
        get: function get() {
          if (!this.video) return 0;
          return this.video.currentTime;
        },

        /**
         * @inheritDoc
         */
        set: function set(value) {
          if (!this.video) return;
          this.video.currentTime = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(WebVideo.prototype, "fullscreen", {
        /**
         * @inheritDoc
         */
        get: function get() {
          return this._fullscreen;
        },

        /**
         * @inheritDoc
         */
        set: function set(value) {
          if (egret.Capabilities.isMobile) {
            return;
          }

          this._fullscreen = !!value;

          if (this.video && this.video.paused == false) {
            this.checkFullScreen(this._fullscreen);
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(WebVideo.prototype, "bitmapData", {
        /**
         * @inheritDoc
         */
        get: function get() {
          if (!this.video || !this.loaded) return null;

          if (!this._bitmapData) {
            this.video.width = this.video.videoWidth;
            this.video.height = this.video.videoHeight;
            this._bitmapData = new egret.BitmapData(this.video);
            this._bitmapData.$deleteSource = false;
          }

          return this._bitmapData;
        },
        enumerable: true,
        configurable: true
      });

      WebVideo.prototype.loadPoster = function () {
        var _this = this;

        var poster = this.poster;
        if (!poster) return;
        var imageLoader = new egret.ImageLoader();
        imageLoader.once(egret.Event.COMPLETE, function (e) {
          var posterData = imageLoader.data;
          _this.posterData = imageLoader.data;
          _this.posterData.width = _this.getPlayWidth();
          _this.posterData.height = _this.getPlayHeight();
        }, this);
        imageLoader.load(poster);
      };
      /**
       * @private
       */


      WebVideo.prototype.$measureContentBounds = function (bounds) {
        var bitmapData = this.bitmapData;
        var posterData = this.posterData;

        if (bitmapData) {
          bounds.setTo(0, 0, this.getPlayWidth(), this.getPlayHeight());
        } else if (posterData) {
          bounds.setTo(0, 0, this.getPlayWidth(), this.getPlayHeight());
        } else {
          bounds.setEmpty();
        }
      };

      WebVideo.prototype.getPlayWidth = function () {
        if (!isNaN(this.widthSet)) {
          return this.widthSet;
        }

        if (this.bitmapData) {
          return this.bitmapData.width;
        }

        if (this.posterData) {
          return this.posterData.width;
        }

        return NaN;
      };

      WebVideo.prototype.getPlayHeight = function () {
        if (!isNaN(this.heightSet)) {
          return this.heightSet;
        }

        if (this.bitmapData) {
          return this.bitmapData.height;
        }

        if (this.posterData) {
          return this.posterData.height;
        }

        return NaN;
      };
      /**
       * @private
       */


      WebVideo.prototype.$updateRenderNode = function () {
        var node = this.$renderNode;
        var bitmapData = this.bitmapData;
        var posterData = this.posterData;
        var width = this.getPlayWidth();
        var height = this.getPlayHeight();

        if ((!this.isPlayed || egret.Capabilities.isMobile) && posterData) {
          node.image = posterData;
          node.imageWidth = width;
          node.imageHeight = height;
          node.drawImage(0, 0, posterData.width, posterData.height, 0, 0, width, height);
        } else if (this.isPlayed && bitmapData) {
          node.image = bitmapData;
          node.imageWidth = bitmapData.width;
          node.imageHeight = bitmapData.height;
          egret.WebGLUtils.deleteWebGLTexture(bitmapData.webGLTexture);
          bitmapData.webGLTexture = null;
          node.drawImage(0, 0, bitmapData.width, bitmapData.height, 0, 0, width, height);
        }
      };

      WebVideo.prototype.markDirty = function () {
        this.$renderDirty = true;
        return true;
      };
      /**
       * @private
       * 设置显示高度
       */


      WebVideo.prototype.$setHeight = function (value) {
        this.heightSet = +value || 0;

        _super.prototype.$setHeight.call(this, value);
      };
      /**
       * @private
       * 设置显示宽度
       */


      WebVideo.prototype.$setWidth = function (value) {
        this.widthSet = +value || 0;

        _super.prototype.$setWidth.call(this, value);
      };

      Object.defineProperty(WebVideo.prototype, "paused", {
        get: function get() {
          if (this.video) {
            return this.video.paused;
          }

          return true;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(WebVideo.prototype, "length", {
        /**
         * @inheritDoc
         */
        get: function get() {
          if (this.video) {
            return this.video.duration;
          }

          throw new Error("Video not loaded!");
        },
        enumerable: true,
        configurable: true
      });
      return WebVideo;
    }(egret.DisplayObject);

    miqgame.WebVideo = WebVideo;

    __reflect(WebVideo.prototype, "egret.miqgame.WebVideo", ["egret.Video", "egret.DisplayObject"]);

    egret.Video = WebVideo;
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var WebHttpRequest = function (_super) {
      __extends(WebHttpRequest, _super);
      /**
       * @private
       */


      function WebHttpRequest() {
        var _this = _super.call(this) || this;

        _this._url = "";
        _this._method = "";
        return _this;
      }

      Object.defineProperty(WebHttpRequest.prototype, "response", {
        /**
         * @private
         * 本次请求返回的数据
         */
        get: function get() {
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
              var w = window;
              return w.convertResponseBodyToText(this._xhr["responseBody"]);
            }

            if (this._responseType == "document") {
              return this._xhr.responseXML;
            }

            return null;
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(WebHttpRequest.prototype, "responseType", {
        /**
         * @private
         * 设置返回的数据格式，请使用 HttpResponseType 里定义的枚举值。设置非法的值或不设置，都将使用HttpResponseType.TEXT。
         */
        get: function get() {
          return this._responseType;
        },
        set: function set(value) {
          this._responseType = value;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @private
       * @param url 该请求所要访问的URL该请求所要访问的URL
       * @param method 请求所使用的HTTP方法， 请使用 HttpMethod 定义的枚举值.
       */

      WebHttpRequest.prototype.open = function (url, method) {
        if (method === void 0) {
          method = "GET";
        }

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

          this._xhr.open(this._method, this._url, true);
        }
      };
      /**
       * @private
       * 发送请求.
       * @param data 需要发送的数据
       */


      WebHttpRequest.prototype.send = function (data) {
        if (!this.isNetUrl(this._url)) {
          console.log('httpRequest ： read local File');
          this.readFileAsync();
        } else {
          if (this._responseType != null) {
            this._xhr.responseType = this._responseType;
          }

          if (this._withCredentials != null) {
            this._xhr.withCredentials = this._withCredentials;
          }

          if (this.headerObj) {
            for (var key in this.headerObj) {
              this._xhr.setRequestHeader(key, this.headerObj[key]);
            }
          }

          this._xhr.send(data);

          console.log('XMLHttpRequest', this._url);
        }
      };
      /**
       * @private
       */


      WebHttpRequest.prototype.onReadyStateChange = function () {
        var xhr = this._xhr;

        if (xhr.readyState == 4) {
          var ioError_1 = xhr.status >= 400 || xhr.status == 0;
          var url_1 = this._url;
          var self_1 = this;
          console.log('onReadyStateChange', this._xhr);
          window.setTimeout(function () {
            if (ioError_1) {
              if ( true && !self_1.hasEventListener(egret.IOErrorEvent.IO_ERROR)) {
                egret.$error(1011, url_1);
              }

              self_1.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
            } else {
              self_1.dispatchEventWith(egret.Event.COMPLETE);
            }
          }, 0);
        }
      };

      WebHttpRequest.prototype.updateProgress = function (event) {
        if (event.lengthComputable) {
          egret.ProgressEvent.dispatchProgressEvent(this, egret.ProgressEvent.PROGRESS, event.loaded, event.total);
        }
      };
      /**
       * @private
       * 返回所有响应头信息(响应头名和值), 如果响应头还没接受,则返回"".
       */


      WebHttpRequest.prototype.getAllResponseHeaders = function () {
        if (!this._responsHeaders) {
          return null;
        }

        return Object.keys(this._responsHeaders).map(function (header) {
          return header + ': ' + this.responseHeader[header];
        }).join('\n');
      };
      /**
       * @private
       * 给指定的HTTP请求头赋值.在这之前,您必须确认已经调用 open() 方法打开了一个url.
       * @param header 将要被赋值的请求头名称.
       * @param value 给指定的请求头赋的值.
       */


      WebHttpRequest.prototype.setRequestHeader = function (header, value) {
        if (!this.headerObj) {
          this.headerObj = {};
        }

        this.headerObj[header] = value;
      };
      /**
       * @private
       * 返回指定的响应头的值, 如果响应头还没被接受,或该响应头不存在,则返回"".
       * @param header 要返回的响应头名称
       */


      WebHttpRequest.prototype.getResponseHeader = function (header) {
        if (!this._responsHeaders) {
          return null;
        }

        return this._responsHeaders[header];
      };
      /**
       * 是否是网络地址
       * @param url
       * @returns {boolean}
       */


      WebHttpRequest.prototype.isNetUrl = function (url) {
        return url.indexOf("http://") != -1 || url.indexOf("HTTP://") != -1 || url.indexOf("https://") != -1 || url.indexOf("HTTPS://") != -1;
      };

      WebHttpRequest.prototype.readFileAsync = function () {
        var self = this;

        var onSuccessFunc = function onSuccessFunc(content) {
          self._response = content;
          self.dispatchEventWith(egret.Event.COMPLETE);
        };

        var onErrorFunc = function onErrorFunc() {
          self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
        }; // const fs = wx.getFileSystemManager();


        var url = "/" + self._url;
        console.log("load url: " + url);

        if (self.responseType == "arraybuffer") {
          console.log('read arraybuffer'); //miqgame默认utf8编码

          system.file.readArrayBuffer({
            uri: url,
            success: function success(buffer) {
              onSuccessFunc(buffer.buffer);
            },
            fail: function fail(data, code) {
              //code 有三种错误码 202参数错误，300I/O错误，301文件不存在
              console.log("readFile fill  code: " + code);
              onErrorFunc();
            }
          });
        } else {
          console.log('read utf8');
          system.file.readText({
            uri: url,
            success: function success(data) {
              onSuccessFunc(data.text);
            },
            fail: function fail(code) {
              //code 有三种错误码 202参数错误，300I/O错误，301文件不存在
              console.log("readFile fill  code: " + code);
              onErrorFunc();
            }
          });
        }
      };

      Object.defineProperty(WebHttpRequest.prototype, "withCredentials", {
        /**
         * @private
         * 表明在进行跨站(cross-site)的访问控制(Access-Control)请求时，是否使用认证信息(例如cookie或授权的header)。 默认为 false。(这个标志不会影响同站的请求)
         */
        get: function get() {
          return this._withCredentials;
        },
        set: function set(value) {
          this._withCredentials = value;
        },
        enumerable: true,
        configurable: true
      });

      WebHttpRequest.prototype.abort = function () {};

      return WebHttpRequest;
    }(egret.EventDispatcher);

    miqgame.WebHttpRequest = WebHttpRequest;

    __reflect(WebHttpRequest.prototype, "egret.miqgame.WebHttpRequest", ["egret.HttpRequest"]);

    egret.HttpRequest = WebHttpRequest;
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    var winURL = window["URL"] || window["webkitURL"];
    /**
     * @private
     * ImageLoader 类可用于加载图像（JPG、PNG 或 GIF）文件。使用 load() 方法来启动加载。被加载的图像对象数据将存储在 ImageLoader.data 属性上 。
     */

    var WebImageLoader = function (_super) {
      __extends(WebImageLoader, _super);

      function WebImageLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @private
         * 使用 load() 方法加载成功的 BitmapData 图像数据。
         */


        _this.data = null;
        /**
         * @private
         * 当从其他站点加载一个图片时，指定是否启用跨域资源共享(CORS)，默认值为null。
         * 可以设置为"anonymous","use-credentials"或null,设置为其他值将等同于"anonymous"。
         */

        _this._crossOrigin = null;
        /**
         * @private
         * 标记crossOrigin有没有被设置过,设置过之后使用设置的属性
         */

        _this._hasCrossOriginSet = false;
        /**
         * @private
         */

        _this.currentImage = null;
        /**
         * @private
         */

        _this.request = null;
        return _this;
      }

      Object.defineProperty(WebImageLoader.prototype, "crossOrigin", {
        get: function get() {
          return this._crossOrigin;
        },
        set: function set(value) {
          this._hasCrossOriginSet = true;
          this._crossOrigin = value;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @private
       * 启动一次图像加载。注意：若之前已经调用过加载请求，重新调用 load() 将终止先前的请求，并开始新的加载。
       * @param url 要加载的图像文件的地址。
       */

      WebImageLoader.prototype.load = function (url) {
        this.loadImage(url);
      };
      /**
       * @private
       */


      WebImageLoader.prototype.loadImage = function (src) {
        var image = new Image();
        this.data = null;
        this.currentImage = image;

        if (this._hasCrossOriginSet) {
          if (this._crossOrigin) {
            image.crossOrigin = this._crossOrigin;
          }
        } else {
          if (WebImageLoader.crossOrigin) {
            image.crossOrigin = WebImageLoader.crossOrigin;
          }
        }
        /*else {
            if (image.hasAttribute("crossOrigin")) {//兼容猎豹
                image.removeAttribute("crossOrigin");
            }
        }*/


        image.onload = this.onImageComplete.bind(this);
        image.onerror = this.onLoadError.bind(this);
        console.log("start load Image url: " + src);
        image.src = src;
      };
      /**
       * @private
       */


      WebImageLoader.prototype.onImageComplete = function (event) {
        console.log('imageLoader complete!');
        var image = this.getImage(event);

        if (!image) {
          return;
        }

        this.data = new egret.BitmapData(image);
        var self = this;
        window.setTimeout(function () {
          self.dispatchEventWith(egret.Event.COMPLETE);
        }, 0);
      };
      /**
       * @private
       */


      WebImageLoader.prototype.onLoadError = function (event) {
        console.log('imageLoader error---');
        var image = this.getImage(event);

        if (!image) {
          return;
        }

        this.dispatchIOError(image.src);
      };

      WebImageLoader.prototype.dispatchIOError = function (url) {
        var self = this;
        window.setTimeout(function () {
          if ( true && !self.hasEventListener(egret.IOErrorEvent.IO_ERROR)) {
            egret.$error(1011, url);
          }

          self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
        }, 0);
      };
      /**
       * @private
       */


      WebImageLoader.prototype.getImage = function (event) {
        var image = event.target;
        var url = image.src;
        console.log('image', image);
        image.onerror = null;
        image.onload = null;

        if (this.currentImage !== image) {
          return null;
        }

        this.currentImage = null;
        return image;
      };
      /**
       * @private
       * 指定是否启用跨域资源共享,如果ImageLoader实例有设置过crossOrigin属性将使用设置的属性
       */


      WebImageLoader.crossOrigin = null;
      return WebImageLoader;
    }(egret.EventDispatcher);

    miqgame.WebImageLoader = WebImageLoader;

    __reflect(WebImageLoader.prototype, "egret.miqgame.WebImageLoader", ["egret.ImageLoader"]);

    egret.ImageLoader = WebImageLoader;
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @classdesc
     * @extends egret.StageText
     * @private
     */
    var HTML5StageText = function (_super) {
      __extends(HTML5StageText, _super);
      /**
       * @private
       */


      function HTML5StageText() {
        var _this = _super.call(this) || this;
        /**
         * @private
         */


        _this.textValue = "";
        _this.onKeyboardComplete = _this.onKeyboardComplete.bind(_this);
        _this.onKeyboardInput = _this.onKeyboardInput.bind(_this);
        return _this;
      }
      /**
       * @private
       *
       * @param textfield
       */


      HTML5StageText.prototype.$setTextField = function (textfield) {
        this.$textfield = textfield;
        return true;
      };
      /**
       * @private
       *
       */


      HTML5StageText.prototype.$addToStage = function () {};
      /**
       * @private
       *
       */


      HTML5StageText.prototype.$show = function () {
        var info = {
          defaultValue: this.$textfield.text,
          multiple: this.$textfield.multiline,
          maxLength: 200,
          // confirmHold: true,
          enterHold: true,
          // confirmType: 'done',
          enterType: 'done',
          fail: function fail(res) {
            console.log('keyboard fail', res.errMsg);
          }
        };

        if (this.$textfield.maxChars) {
          info.maxLength = this.$textfield.maxChars;
        } // console.log('info', info)


        system.keyboard.show(info);
        system.keyboard.onenterclick = this.onKeyboardComplete.bind(this);
        system.keyboard.oncomplete = this.onKeyboardComplete.bind(this);
        system.keyboard.oninput = this.onKeyboardInput.bind(this);
        this.dispatchEvent(new egret.Event("focus"));
      };

      HTML5StageText.prototype.onKeyboardInput = function (data) {
        this.textValue = data.value;
        egret.Event.dispatchEvent(this, "updateText", false);
      };

      HTML5StageText.prototype.onKeyboardComplete = function (res) {
        this.$textfield.text = res.value;
        this.$hide();
      };
      /**
       * @private
       */


      HTML5StageText.prototype.$hide = function () {
        system.keyboard.oncomplete = null;
        system.keyboard.onenterclick = null;
        system.keyboard.oninput = null;
        system.keyboard.hide();
        this.dispatchEvent(new egret.Event("blur"));
      };
      /**
       * @private
       *
       * @returns
       */


      HTML5StageText.prototype.$getText = function () {
        if (!this.textValue) {
          this.textValue = "";
        }

        return this.textValue;
      };
      /**
       * @private
       *
       * @param value
       */


      HTML5StageText.prototype.$setText = function (value) {
        this.textValue = value; // this.resetText();

        return true;
      };
      /**
       * @private
       */


      HTML5StageText.prototype.$setColor = function (value) {
        return true;
      };

      HTML5StageText.prototype.$onBlur = function () {};
      /**
       * @private
       *
       */


      HTML5StageText.prototype.$removeFromStage = function () {};
      /**
       * 修改位置
       * @private
       */


      HTML5StageText.prototype.$resetStageText = function () {};

      return HTML5StageText;
    }(egret.EventDispatcher);

    miqgame.HTML5StageText = HTML5StageText;

    __reflect(HTML5StageText.prototype, "egret.miqgame.HTML5StageText", ["egret.StageText"]);

    egret.StageText = HTML5StageText;
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var context = null;
    /**
     * @private
     */

    var fontCache = {};
    /**
     * 测量文本在指定样式下的宽度。
     * @param text 要测量的文本内容。
     * @param fontFamily 字体名称
     * @param fontSize 字体大小
     * @param bold 是否粗体
     * @param italic 是否斜体
     */

    function measureText(text, fontFamily, fontSize, bold, italic) {
      if (!context) {
        createContext();
      }

      var font = "";
      if (italic) font += "italic ";
      if (bold) font += "bold ";
      font += (fontSize || 12) + "px ";
      font += fontFamily || "Arial";
      context.font = font;
      return context.measureText(text).width;
    }
    /**
     * @private
     */


    function createContext() {
      context = egret.sys.canvasHitTestBuffer.context;
      context.textAlign = "left";
      context.textBaseline = "middle";
    }

    egret.sys.measureText = measureText;
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * 创建一个canvas。
     */
    function createCanvas(width, height) {
      var canvas = document.createElement("canvas");

      if (!isNaN(width) && !isNaN(height)) {
        canvas.width = width;
        canvas.height = height;
      }

      var context = canvas.getContext("2d");

      if (context["imageSmoothingEnabled"] === undefined) {
        var keys = ["webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "msImageSmoothingEnabled"];
        var key_1;

        for (var i = keys.length - 1; i >= 0; i--) {
          key_1 = keys[i];

          if (context[key_1] !== void 0) {
            break;
          }
        }

        try {
          Object.defineProperty(context, "imageSmoothingEnabled", {
            get: function get() {
              return this[key_1];
            },
            set: function set(value) {
              this[key_1] = value;
            }
          });
        } catch (e) {
          context["imageSmoothingEnabled"] = context[key_1];
        }
      }

      return canvas;
    }

    var sharedCanvas;
    /**
     * @private
     * Canvas2D渲染缓冲
     */

    var CanvasRenderBuffer = function () {
      function CanvasRenderBuffer(width, height, root) {
        if (root) {
          this.surface = getCurrentPage().getCanvas();
        } else {
          this.surface = createCanvas(width, height);
        }

        this.context = this.surface.getContext("2d");

        if (this.context) {
          this.context.$offsetX = 0;
          this.context.$offsetY = 0;
        }
      }

      Object.defineProperty(CanvasRenderBuffer.prototype, "width", {
        /**
         * 渲染缓冲的宽度，以像素为单位。
         * @readOnly
         */
        get: function get() {
          return this.surface.width;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CanvasRenderBuffer.prototype, "height", {
        /**
         * 渲染缓冲的高度，以像素为单位。
         * @readOnly
         */
        get: function get() {
          return this.surface.height;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * 改变渲染缓冲的大小并清空缓冲区
       * @param width 改变后的宽
       * @param height 改变后的高
       * @param useMaxSize 若传入true，则将改变后的尺寸与已有尺寸对比，保留较大的尺寸。
       */

      CanvasRenderBuffer.prototype.resize = function (width, height, useMaxSize) {
        var surface = this.surface;

        if (useMaxSize) {
          var change = false;

          if (surface.width < width) {
            surface.width = width;
            change = true;
          }

          if (surface.height < height) {
            surface.height = height;
            change = true;
          } //尺寸没有变化时,将绘制属性重置


          if (!change) {
            this.context.globalCompositeOperation = "source-over";
            this.context.setTransform(1, 0, 0, 1, 0, 0);
            this.context.globalAlpha = 1;
          }
        } else {
          if (surface.width != width) {
            surface.width = width;
          }

          if (surface.height != height) {
            surface.height = height;
          }
        }

        this.clear();
      };
      /**
       * 获取指定区域的像素
       */


      CanvasRenderBuffer.prototype.getPixels = function (x, y, width, height) {
        if (width === void 0) {
          width = 1;
        }

        if (height === void 0) {
          height = 1;
        }

        return this.context.getImageData(x, y, width, height).data;
      };
      /**
       * 转换成base64字符串，如果图片（或者包含的图片）跨域，则返回null
       * @param type 转换的类型，如: "image/png","image/jpeg"
       */


      CanvasRenderBuffer.prototype.toDataURL = function (type, encoderOptions) {
        return this.surface.toDataURL(type, encoderOptions);
      };
      /**
       * 清空缓冲区数据
       */


      CanvasRenderBuffer.prototype.clear = function () {
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.clearRect(0, 0, this.surface.width, this.surface.height);
      };
      /**
       * 销毁绘制对象
       */


      CanvasRenderBuffer.prototype.destroy = function () {
        this.surface.width = this.surface.height = 0;
      };

      return CanvasRenderBuffer;
    }();

    miqgame.CanvasRenderBuffer = CanvasRenderBuffer;

    __reflect(CanvasRenderBuffer.prototype, "egret.miqgame.CanvasRenderBuffer", ["egret.sys.RenderBuffer"]);
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided this the following conditions are met:
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var WebTouchHandler = function (_super) {
      __extends(WebTouchHandler, _super);
      /**
       * @private
       */


      function WebTouchHandler(stage, canvas) {
        var _this = _super.call(this) || this;
        /**
         * @private
         */


        _this.onTouchBegin = function (event) {
          var location = _this.getLocation(event);

          _this.touch.onTouchBegin(location.x, location.y, event.identifier);
        };
        /**
         * @private
         */


        _this.onTouchMove = function (event) {
          var location = _this.getLocation(event);

          _this.touch.onTouchMove(location.x, location.y, event.identifier);
        };
        /**
         * @private
         */


        _this.onTouchEnd = function (event) {
          var location = _this.getLocation(event);

          _this.touch.onTouchEnd(location.x, location.y, event.identifier);
        };
        /**
         * @private
         */


        _this.scaleX = 1;
        /**
         * @private
         */

        _this.scaleY = 1;
        /**
         * @private
         */

        _this.rotation = 0;
        _this.canvas = getCurrentPage().getCanvas();
        _this.touch = new egret.sys.TouchHandler(stage);

        _this.addTouchListener();

        return _this;
      }
      /**
       * @private
       *
       */


      WebTouchHandler.prototype.addTouchListener = function () {
        var self = this;

        self.canvas.ontouchstart = function (event) {
          var l = event.changedTouches.length;

          for (var i = 0; i < l; i++) {
            self.onTouchBegin(event.changedTouches[i]);
          }

          self.prevent(event);
        };

        self.canvas.ontouchmove = function (event) {
          var l = event.changedTouches.length;

          for (var i = 0; i < l; i++) {
            self.onTouchMove(event.changedTouches[i]);
          }

          self.prevent(event);
        };

        self.canvas.ontouchend = function (event) {
          var l = event.changedTouches.length;

          for (var i = 0; i < l; i++) {
            self.onTouchEnd(event.changedTouches[i]);
          }

          self.prevent(event);
        };

        self.canvas.ontouchcancel = function (event) {
          var l = event.changedTouches.length;

          for (var i = 0; i < l; i++) {
            self.onTouchEnd(event.changedTouches[i]);
          }

          self.prevent(event);
        }; // self.canvas.addEventListener("touchstart", (event: any) => {
        //     let l = event.changedTouches.length;
        //     for (let i: number = 0; i < l; i++) {
        //         self.onTouchBegin(event.changedTouches[i]);
        //     }
        //     self.prevent(event);
        // }, false);
        // self.canvas.addEventListener("touchmove", (event: any) => {
        //     let l = event.changedTouches.length;
        //     for (let i: number = 0; i < l; i++) {
        //         self.onTouchMove(event.changedTouches[i]);
        //     }
        //     self.prevent(event);
        // }, false);
        // self.canvas.addEventListener("touchend", (event: any) => {
        //     let l = event.changedTouches.length;
        //     for (let i: number = 0; i < l; i++) {
        //         self.onTouchEnd(event.changedTouches[i]);
        //     }
        //     self.prevent(event);
        // }, false);
        // self.canvas.addEventListener("touchcancel", (event: any) => {
        //     let l = event.changedTouches.length;
        //     for (let i: number = 0; i < l; i++) {
        //         self.onTouchEnd(event.changedTouches[i]);
        //     }
        //     self.prevent(event);
        // }, false);

      };
      /**
       * @private
       */


      WebTouchHandler.prototype.prevent = function (event) {// event.stopPropagation();
        // if (event["isScroll"] != true && !this.canvas['userTyping']) {
        //     event.preventDefault();
        // }
      };
      /**
       * @private
       */


      WebTouchHandler.prototype.getLocation = function (event) {
        var x = event.pageX,
            newx = x;
        var y = event.pageY,
            newy = y;
        newx = newx / this.scaleX;
        newy = newy / this.scaleY;
        return egret.$TempPoint.setTo(Math.round(newx), Math.round(newy));
      };
      /**
       * @private
       * 更新屏幕当前的缩放比例，用于计算准确的点击位置。
       * @param scaleX 水平方向的缩放比例。
       * @param scaleY 垂直方向的缩放比例。
       */


      WebTouchHandler.prototype.updateScaleMode = function (scaleX, scaleY, rotation) {
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.rotation = rotation;
      };
      /**
       * @private
       * 更新同时触摸点的数量
       */


      WebTouchHandler.prototype.$updateMaxTouches = function () {
        if (this.touch.$initMaxTouches) {
          this.touch.$initMaxTouches();
        } else {
          this.touch['$updateMaxTouches']();
        }
      };

      return WebTouchHandler;
    }(egret.HashObject);

    miqgame.WebTouchHandler = WebTouchHandler;

    __reflect(WebTouchHandler.prototype, "egret.miqgame.WebTouchHandler");
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    var isShow = true;
    /**
     * @private
     */

    miqgame.WebLifeCycleHandler = function (context) {
      getCurrentPage().onShow = function () {
        if (!isShow) {
          context.resume();
          isShow = true;
        }
      };

      getCurrentPage().onHide = function () {
        if (isShow) {
          context.pause();
          isShow = false;
        }
      };
    };
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var AudioType = function () {
      function AudioType() {}
      /**
       * @private
       */


      AudioType.WEB_AUDIO = 2;
      /**
       * @private
       */

      AudioType.HTML5_AUDIO = 3;
      return AudioType;
    }();

    miqgame.AudioType = AudioType;

    __reflect(AudioType.prototype, "egret.miqgame.AudioType");
    /**
     * html5兼容性配置
     * @private
     */


    var Html5Capatibility = function (_super) {
      __extends(Html5Capatibility, _super);
      /**
       * @private
       */


      function Html5Capatibility() {
        return _super.call(this) || this;
      }
      /**
       * @private
       *
       */


      Html5Capatibility.$init = function () {
        var ua = navigator.userAgent.toLowerCase();
        Html5Capatibility.ua = ua;
        Html5Capatibility._canUseBlob = false;
        var canUseWebAudio = window["AudioContext"] || window["webkitAudioContext"] || window["mozAudioContext"];

        if (canUseWebAudio) {
          try {
            //防止某些chrome版本创建异常问题
            miqgame.WebAudioDecode.ctx = new (window["AudioContext"] || window["webkitAudioContext"] || window["mozAudioContext"])();
          } catch (e) {
            canUseWebAudio = false;
          }
        }

        var audioType = Html5Capatibility._audioType;
        var checkAudioType;

        if (audioType == AudioType.WEB_AUDIO && canUseWebAudio || audioType == AudioType.HTML5_AUDIO) {
          checkAudioType = false;
          Html5Capatibility.setAudioType(audioType);
        } else {
          checkAudioType = true;
          Html5Capatibility.setAudioType(AudioType.HTML5_AUDIO);
        }

        if (ua.indexOf("android") >= 0) {
          if (checkAudioType && canUseWebAudio) {
            Html5Capatibility.setAudioType(AudioType.WEB_AUDIO);
          }
        } else if (ua.indexOf("iphone") >= 0 || ua.indexOf("ipad") >= 0 || ua.indexOf("ipod") >= 0) {
          if (Html5Capatibility.getIOSVersion() >= 7) {
            Html5Capatibility._canUseBlob = true;

            if (checkAudioType && canUseWebAudio) {
              Html5Capatibility.setAudioType(AudioType.WEB_AUDIO);
            }
          }
        }

        var winURL = window["URL"] || window["webkitURL"];

        if (!winURL) {
          Html5Capatibility._canUseBlob = false;
        }

        if (ua.indexOf("egretnative") >= 0) {
          Html5Capatibility.setAudioType(AudioType.HTML5_AUDIO);
          Html5Capatibility._canUseBlob = true;
        }

        egret.Sound = Html5Capatibility._AudioClass;
      };

      Html5Capatibility.setAudioType = function (type) {
        Html5Capatibility._audioType = type;

        switch (type) {
          case AudioType.WEB_AUDIO:
            console.log('WEB_AUDIO');
            Html5Capatibility._AudioClass = miqgame.WebAudioSound;
            break;

          case AudioType.HTML5_AUDIO:
            console.log('HTML5_AUDIO');
            Html5Capatibility._AudioClass = miqgame.HtmlSound;
            break;
        }
      };
      /**
       * @private
       * 获取ios版本
       * @returns {string}
       */


      Html5Capatibility.getIOSVersion = function () {
        var value = Html5Capatibility.ua.toLowerCase().match(/cpu [^\d]*\d.*like mac os x/)[0];
        return parseInt(value.match(/\d+(_\d)*/)[0]) || 0;
      }; //当前浏览器版本是否支持blob


      Html5Capatibility._canUseBlob = false; //当前浏览器版本是否支持webaudio

      Html5Capatibility._audioType = 0;
      /**
       * @private
       */

      Html5Capatibility.ua = "";
      return Html5Capatibility;
    }(egret.HashObject);

    miqgame.Html5Capatibility = Html5Capatibility;

    __reflect(Html5Capatibility.prototype, "egret.miqgame.Html5Capatibility");
    /**
     * @private
     */


    var currentPrefix = null;
    /**
     * @private
     */

    function getPrefixStyleName(name, element) {
      var header = "";

      if (element != null) {
        header = getPrefix(name, element);
      } else {
        if (currentPrefix == null) {
          var tempStyle = document.createElement('div').style;
          currentPrefix = getPrefix("transform", tempStyle);
        }

        header = currentPrefix;
      }

      if (header == "") {
        return name;
      }

      return header + name.charAt(0).toUpperCase() + name.substring(1, name.length);
    }

    miqgame.getPrefixStyleName = getPrefixStyleName;
    /**
     * @private
     */

    function getPrefix(name, element) {
      if (name in element) {
        return "";
      }

      name = name.charAt(0).toUpperCase() + name.substring(1, name.length);
      var transArr = ["webkit", "ms", "Moz", "O"];

      for (var i = 0; i < transArr.length; i++) {
        var tempStyle = transArr[i] + name;

        if (tempStyle in element) {
          return transArr[i];
        }
      }

      return "";
    }

    miqgame.getPrefix = getPrefix;
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * 支持库版本号
     */
    miqgame.version = "v0.4.1";
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {}));

(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     * 刷新所有Egret播放器的显示区域尺寸。仅当使用外部JavaScript代码动态修改了Egret容器大小时，需要手动调用此方法刷新显示区域。
     * 当网页尺寸发生改变时此方法会自动被调用。
     */
    function updateAllScreens() {
      if (!isRunning) {
        return;
      } // let containerList = document.querySelectorAll(".egret-player");
      // let length = containerList.length;
      // for (let i = 0; i < length; i++) {
      //     let container = containerList[i];
      //     let player = <WebPlayer>container["egret-player"];


      window['player'].updateScreenSize(); // }
    }

    var isRunning = false;
    /**
     * @private
     * 网页加载完成，实例化页面中定义的Egret标签
     */

    function runEgret(options) {
      if (isRunning) {
        return;
      }

      isRunning = true;

      if (!options) {
        options = {};
      }

      miqgame.Html5Capatibility._audioType = options.audioType;
      miqgame.Html5Capatibility.$init(); // WebGL上下文参数自定义

      if (options.renderMode == "webgl") {
        // WebGL抗锯齿默认关闭，提升PC及某些平台性能
        var antialias = options.antialias;
        miqgame.WebGLRenderContext.antialias = !!antialias; // WebGLRenderContext.antialias = (typeof antialias == undefined) ? true : antialias;
      }

      egret.sys.CanvasRenderBuffer = miqgame.CanvasRenderBuffer;
      setRenderMode(options.renderMode);
      var canvasScaleFactor;

      if (options.canvasScaleFactor) {
        canvasScaleFactor = options.canvasScaleFactor;
      } else if (options.calculateCanvasScaleFactor) {
        canvasScaleFactor = options.calculateCanvasScaleFactor(egret.sys.canvasHitTestBuffer.context);
      } else {
        //based on : https://github.com/jondavidjohn/hidpi-canvas-polyfill
        var context = egret.sys.canvasHitTestBuffer.context;
        var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
        canvasScaleFactor = (window.devicePixelRatio || 1) / backingStore;
      }

      egret.sys.DisplayList.$canvasScaleFactor = canvasScaleFactor;
      var ticker = egret.ticker;
      startTicker(ticker);

      if (options.screenAdapter) {
        egret.sys.screenAdapter = options.screenAdapter;
      } else if (!egret.sys.screenAdapter) {
        egret.sys.screenAdapter = new egret.sys.DefaultScreenAdapter();
      } // let list = document.querySelectorAll(".egret-player");
      // let length = list.length;
      // for (let i = 0; i < length; i++) {
      //     let container = <HTMLDivElement>list[i];
      //     let player = new WebPlayer(container, options);
      //     container["egret-player"] = player;
      // }


      var container = {};
      var player = new miqgame.WebPlayer(container, options);
      window['player'] = player;
      window.addEventListener("resize", function () {
        if (isNaN(resizeTimer)) {
          resizeTimer = window.setTimeout(doResize, 300);
        }
      });
    }
    /**
     * 设置渲染模式。"auto","webgl","canvas"
     * @param renderMode
     */


    function setRenderMode(renderMode) {
      if (renderMode === "webgl") {
        egret.Capabilities["renderMode" + ""] = "webgl";
        egret.sys.RenderBuffer = miqgame.WebGLRenderBuffer;
        egret.sys.systemRenderer = new miqgame.WebGLRenderer();
        egret.sys.canvasRenderer = new egret.CanvasRenderer();
        egret.sys.customHitTestBuffer = new miqgame.WebGLRenderBuffer(3, 3);
        egret.sys.canvasHitTestBuffer = new miqgame.CanvasRenderBuffer(3, 3);
      } else {
        egret.Capabilities["renderMode" + ""] = "canvas";
        egret.sys.RenderBuffer = miqgame.CanvasRenderBuffer;
        egret.sys.systemRenderer = new egret.CanvasRenderer();
        egret.sys.canvasRenderer = egret.sys.systemRenderer;
        egret.sys.customHitTestBuffer = new miqgame.CanvasRenderBuffer(3, 3);
        egret.sys.canvasHitTestBuffer = egret.sys.customHitTestBuffer;
      }
    }
    /**
     * @private
     * 启动心跳计时器。
     */


    function startTicker(ticker) {
      var requestAnimationFrame = window["requestAnimationFrame"] || window["webkitRequestAnimationFrame"] || window["mozRequestAnimationFrame"] || window["oRequestAnimationFrame"] || window["msRequestAnimationFrame"];

      if (!requestAnimationFrame) {
        requestAnimationFrame = function requestAnimationFrame(callback) {
          return window.setTimeout(callback, 1000 / 60);
        };
      }

      requestAnimationFrame(onTick);

      function onTick() {
        ticker.update();
        requestAnimationFrame(onTick);
      }
    }

    egret.runEgret = runEgret;
    egret.updateAllScreens = updateAllScreens;
    var resizeTimer = NaN;

    function doResize() {
      resizeTimer = NaN;
      egret.updateAllScreens();
    }
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {}));

if (true) {
  var language = navigator.language || navigator["browserLanguage"] || "en_US";
  language = language.replace("-", "_");
  if (language in egret.$locale_strings) egret.$language = language;
}

egret.Capabilities["runtimeType" + ""] = "miqgame"; //////////////////////////////////////////////////////////////////////////////////////
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

(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var WebCapability = function () {
      function WebCapability() {}
      /**
       * @private
       * 检测系统属性
       */


      WebCapability.detect = function () {
        var capabilities = egret.Capabilities;
        var ua = navigator.userAgent.toLowerCase();
        capabilities["isMobile" + ""] = ua.indexOf('mobile') != -1 || ua.indexOf('android') != -1;

        if (capabilities.isMobile) {
          if (ua.indexOf("windows") < 0 && (ua.indexOf("iphone") != -1 || ua.indexOf("ipad") != -1 || ua.indexOf("ipod") != -1)) {
            capabilities["os" + ""] = "iOS";
          } else if (ua.indexOf("android") != -1 && ua.indexOf("linux") != -1) {
            capabilities["os" + ""] = "Android";
          } else if (ua.indexOf("windows") != -1) {
            capabilities["os" + ""] = "Windows Phone";
          }
        } else {
          if (ua.indexOf("windows nt") != -1) {
            capabilities["os" + ""] = "Windows PC";
          } else if (ua.indexOf("mac os") != -1) {
            capabilities["os" + ""] = "Mac OS";
          }
        }

        var language = (navigator.language || navigator["browserLanguage"]).toLowerCase();
        var strings = language.split("-");

        if (strings.length > 1) {
          strings[1] = strings[1].toUpperCase();
        }

        capabilities["language" + ""] = strings.join("-");
        WebCapability.injectUIntFixOnIE9();
      };

      WebCapability.injectUIntFixOnIE9 = function () {
        if (/msie 9.0/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
          var IEBinaryToArray_ByteStr_Script = "<!-- IEBinaryToArray_ByteStr -->\r\n" + "<script type='text/vbscript' language='VBScript'>\r\n" + "Function IEBinaryToArray_ByteStr(Binary)\r\n" + "   IEBinaryToArray_ByteStr = CStr(Binary)\r\n" + "End Function\r\n" + "Function IEBinaryToArray_ByteStr_Last(Binary)\r\n" + "   Dim lastIndex\r\n" + "   lastIndex = LenB(Binary)\r\n" + "   if lastIndex mod 2 Then\r\n" + "       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n" + "   Else\r\n" + "       IEBinaryToArray_ByteStr_Last = " + '""' + "\r\n" + "   End If\r\n" + "End Function\r\n" + "<\/script>\r\n" + "<!-- convertResponseBodyToText -->\r\n" + "<script>\r\n" + "let convertResponseBodyToText = function (binary) {\r\n" + "   let byteMapping = {};\r\n" + "   for ( let i = 0; i < 256; i++ ) {\r\n" + "       for ( let j = 0; j < 256; j++ ) {\r\n" + "           byteMapping[ String.fromCharCode( i + j * 256 ) ] =\r\n" + "           String.fromCharCode(i) + String.fromCharCode(j);\r\n" + "       }\r\n" + "   }\r\n" + "   let rawBytes = IEBinaryToArray_ByteStr(binary);\r\n" + "   let lastChr = IEBinaryToArray_ByteStr_Last(binary);\r\n" + "   return rawBytes.replace(/[\\s\\S]/g," + "                           function( match ) { return byteMapping[match]; }) + lastChr;\r\n" + "};\r\n" + "<\/script>\r\n";
          document.write(IEBinaryToArray_ByteStr_Script);
        }
      };

      return WebCapability;
    }();

    miqgame.WebCapability = WebCapability;

    __reflect(WebCapability.prototype, "egret.miqgame.WebCapability");

    WebCapability.detect();
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var WebExternalInterface = function () {
      function WebExternalInterface() {}
      /**
       * @private
       * @param functionName
       * @param value
       */


      WebExternalInterface.call = function (functionName, value) {};
      /**
       * @private
       * @param functionName
       * @param listener
       */


      WebExternalInterface.addCallback = function (functionName, listener) {};

      return WebExternalInterface;
    }();

    miqgame.WebExternalInterface = WebExternalInterface;

    __reflect(WebExternalInterface.prototype, "egret.miqgame.WebExternalInterface", ["egret.ExternalInterface"]);

    var ua = navigator.userAgent.toLowerCase();

    if (ua.indexOf("egretnative") < 0) {
      egret.ExternalInterface = WebExternalInterface;
    }
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {}));

(function (egret) {
  var miqgame;

  (function (miqgame) {
    var callBackDic = {};
    /**
     * @private
     */

    var NativeExternalInterface = function () {
      function NativeExternalInterface() {}

      NativeExternalInterface.call = function (functionName, value) {
        var data = {};
        data.functionName = functionName;
        data.value = value;
        egret_native.sendInfoToPlugin(JSON.stringify(data));
      };

      NativeExternalInterface.addCallback = function (functionName, listener) {
        callBackDic[functionName] = listener;
      };

      return NativeExternalInterface;
    }();

    miqgame.NativeExternalInterface = NativeExternalInterface;

    __reflect(NativeExternalInterface.prototype, "egret.miqgame.NativeExternalInterface", ["egret.ExternalInterface"]);
    /**
     * @private
     * @param info
     */


    function onReceivedPluginInfo(info) {
      var data = JSON.parse(info);
      var functionName = data.functionName;
      var listener = callBackDic[functionName];

      if (listener) {
        var value = data.value;
        listener.call(null, value);
      } else {
        egret.$warn(1050, functionName);
      }
    }

    var ua = navigator.userAgent.toLowerCase();

    if (ua.indexOf("egretnative") >= 0) {
      egret.ExternalInterface = NativeExternalInterface;
      egret_native.receivedPluginInfo = onReceivedPluginInfo;
    }
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    function getOption(key) {
      return "";
    }

    miqgame.getOption = getOption;
    egret.getOption = getOption;
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var WebPlayer = function (_super) {
      __extends(WebPlayer, _super);

      function WebPlayer(container, options) {
        var _this = _super.call(this) || this;

        _this.init(container, options);

        _this.initOrientation();

        return _this;
      }

      WebPlayer.prototype.init = function (container, options) {
        var option = this.readOption(container, options);
        var stage = new egret.Stage();
        stage.$screen = this;
        stage.$scaleMode = option.scaleMode;
        stage.$orientation = option.orientation;
        stage.$maxTouches = option.maxTouches;
        stage.frameRate = option.frameRate;
        stage.textureScaleFactor = option.textureScaleFactor;
        var buffer = new egret.sys.RenderBuffer(undefined, undefined, true);
        var canvas = buffer.surface;
        this.attachCanvas(container, canvas);
        var webTouch = new miqgame.WebTouchHandler(stage, canvas);
        var player = new egret.sys.Player(buffer, stage, option.entryClassName);
        egret.lifecycle.stage = stage;
        egret.lifecycle.addLifecycleListener(miqgame.WebLifeCycleHandler);

        if (option.showFPS || option.showLog) {
          player.displayFPS(option.showFPS, option.showLog, option.logFilter, option.fpsStyles);
        }

        this.playerOption = option;
        this.container = container;
        this.canvas = canvas;
        this.stage = stage;
        this.player = player;
        this.webTouchHandler = webTouch;
        this.updateScreenSize();
        this.updateMaxTouches();
        player.start();
      };

      WebPlayer.prototype.initOrientation = function () {
        var self = this;
        window.addEventListener("orientationchange", function () {
          window.setTimeout(function () {
            egret.StageOrientationEvent.dispatchStageOrientationEvent(self.stage, egret.StageOrientationEvent.ORIENTATION_CHANGE);
          }, 350);
        });
      };
      /**
       * 读取初始化参数
       */


      WebPlayer.prototype.readOption = function (container, options) {
        var option = {};
        option.entryClassName = options.entryClassName || "Main";
        option.scaleMode = options.scaleMode || egret.StageScaleMode.FIXED_WIDTH;

        if (option.scaleMode == egret.StageScaleMode.SHOW_ALL) {
          throw new Error("该平台不支持 showAll 适配模式，推荐使用 fixedWidth 模式");
        }

        option.frameRate = options.frameRate || 30;
        option.contentWidth = options.contentWidth || 640;
        option.contentHeight = options.contentHeight || 1136;
        option.orientation = options.orientation || egret.OrientationMode.AUTO;
        option.maxTouches = options.maxTouches;
        option.textureScaleFactor = 1;
        option.showFPS = options.showFPS;
        var styleStr = options.fpsStyles || "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9";
        var stylesArr = styleStr.split(",");
        var styles = {};

        for (var i = 0; i < stylesArr.length; i++) {
          var tempStyleArr = stylesArr[i].split(":");
          styles[tempStyleArr[0]] = tempStyleArr[1];
        }

        option.fpsStyles = styles;
        option.showLog = false;
        option.logFilter = "";
        return option;
      };
      /**
       * @private
       * 添加canvas到container。
       */


      WebPlayer.prototype.attachCanvas = function (container, canvas) {// let style = canvas.style;
        // style.cursor = "inherit";
        // style.position = "absolute";
        // style.top = "0";
        // style.bottom = "0";
        // style.left = "0";
        // style.right = "0";
        // container.appendChild(canvas);
        // style = container.style;
        // style.overflow = "hidden";
        // style.position = "absolute";
      };
      /**
       * @private
       * 更新播放器视口尺寸
       */


      WebPlayer.prototype.updateScreenSize = function () {
        var canvas = this.canvas;
        if (canvas['userTyping']) return;
        var option = this.playerOption;
        var deviceInfo = system.device.getInfoSync();
        console.log('deviceInfo', deviceInfo); // console.log('devicePixelRatio',window.devicePixelRatio,'screenDensity',deviceInfo.screenDensity)

        var screenDensity = deviceInfo.screenDensity;
        var boundingClientWidth = deviceInfo.windowWidth / screenDensity;
        var boundingClientHeight = deviceInfo.windowHeight / screenDensity;
        var shouldRotate = false;
        var orientation = this.stage.$orientation;

        if (orientation != egret.OrientationMode.AUTO) {
          shouldRotate = orientation != egret.OrientationMode.PORTRAIT && boundingClientHeight > boundingClientWidth || orientation == egret.OrientationMode.PORTRAIT && boundingClientWidth > boundingClientHeight;
        }

        var screenWidth = shouldRotate ? boundingClientHeight : boundingClientWidth;
        var screenHeight = shouldRotate ? boundingClientWidth : boundingClientHeight;
        egret.Capabilities["boundingClientWidth" + ""] = screenWidth;
        egret.Capabilities["boundingClientHeight" + ""] = screenHeight;
        var stageSize = egret.sys.screenAdapter.calculateStageSize(this.stage.$scaleMode, screenWidth, screenHeight, option.contentWidth, option.contentHeight);
        var stageWidth = stageSize.stageWidth;
        var stageHeight = stageSize.stageHeight;
        var displayWidth = stageSize.displayWidth;
        var displayHeight = stageSize.displayHeight; // canvas.style[getPrefixStyleName("transformOrigin")] = "0% 0% 0px";

        if (canvas.width != stageWidth) {
          canvas.width = stageWidth;
        }

        if (canvas.height != stageHeight) {
          canvas.height = stageHeight;
        }

        var rotation = 0;
        var scalex = displayWidth / stageWidth,
            scaley = displayHeight / stageHeight;
        var canvasScaleX = scalex * egret.sys.DisplayList.$canvasScaleFactor;
        var canvasScaleY = scaley * egret.sys.DisplayList.$canvasScaleFactor;
        console.log("----canvasScaleFactor-scalex:" + egret.sys.DisplayList.$canvasScaleFactor);
        var m = new egret.Matrix();
        m.scale(scalex / canvasScaleX, scaley / canvasScaleY);
        m.rotate(rotation * Math.PI / 180);
        var transform = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.tx + "," + m.ty + ")"; // canvas.style[getPrefixStyleName("transform")] = transform;

        egret.sys.DisplayList.$setCanvasScale(canvasScaleX, canvasScaleY);
        console.log("----updateScaleMode-scalex:" + scalex + ";-scaley:" + scaley + "----");
        this.webTouchHandler.updateScaleMode(scalex, scaley, rotation);
        console.log("----updateStageSize-wid:" + stageWidth + ";-hei:" + stageHeight + "----");
        this.player.updateStageSize(stageWidth, stageHeight); //不要在这个方法后面修改属性
      };

      WebPlayer.prototype.setContentSize = function (width, height) {
        var option = this.playerOption;
        option.contentWidth = width;
        option.contentHeight = height;
        this.updateScreenSize();
      };
      /**
       * @private
       * 更新触摸数量
       */


      WebPlayer.prototype.updateMaxTouches = function () {
        this.webTouchHandler.$updateMaxTouches();
      };

      return WebPlayer;
    }(egret.HashObject);

    miqgame.WebPlayer = WebPlayer;

    __reflect(WebPlayer.prototype, "egret.miqgame.WebPlayer", ["egret.sys.Screen"]);
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    var sharedCanvas;
    var sharedContext;
    /**
     * @private
     */

    function convertImageToCanvas(texture, rect) {
      if (!sharedCanvas) {
        sharedCanvas = document.createElement("canvas");
        sharedContext = sharedCanvas.getContext("2d");
      }

      var w = texture.$getTextureWidth();
      var h = texture.$getTextureHeight();

      if (rect == null) {
        rect = egret.$TempRectangle;
        rect.x = 0;
        rect.y = 0;
        rect.width = w;
        rect.height = h;
      }

      rect.x = Math.min(rect.x, w - 1);
      rect.y = Math.min(rect.y, h - 1);
      rect.width = Math.min(rect.width, w - rect.x);
      rect.height = Math.min(rect.height, h - rect.y);
      var iWidth = Math.floor(rect.width);
      var iHeight = Math.floor(rect.height);
      var surface = sharedCanvas;
      surface["style"]["width"] = iWidth + "px";
      surface["style"]["height"] = iHeight + "px";
      sharedCanvas.width = iWidth;
      sharedCanvas.height = iHeight;

      if (egret.Capabilities.renderMode == "webgl") {
        var renderTexture = void 0; //webgl下非RenderTexture纹理先画到RenderTexture

        if (!texture.$renderBuffer) {
          renderTexture = new egret.RenderTexture();
          renderTexture.drawToTexture(new egret.Bitmap(texture));
        } else {
          renderTexture = texture;
        } //从RenderTexture中读取像素数据，填入canvas


        var pixels = renderTexture.$renderBuffer.getPixels(rect.x, rect.y, iWidth, iHeight);
        var x = 0;
        var y = 0;

        for (var i = 0; i < pixels.length; i += 4) {
          sharedContext.fillStyle = 'rgba(' + pixels[i] + ',' + pixels[i + 1] + ',' + pixels[i + 2] + ',' + pixels[i + 3] / 255 + ')';
          sharedContext.fillRect(x, y, 1, 1);
          x++;

          if (x == iWidth) {
            x = 0;
            y++;
          }
        }

        if (!texture.$renderBuffer) {
          renderTexture.dispose();
        }

        return surface;
      } else {
        var bitmapData = texture;
        var offsetX = Math.round(bitmapData.$offsetX);
        var offsetY = Math.round(bitmapData.$offsetY);
        var bitmapWidth = bitmapData.$bitmapWidth;
        var bitmapHeight = bitmapData.$bitmapHeight;
        sharedContext.drawImage(bitmapData.$bitmapData.source, bitmapData.$bitmapX + rect.x / egret.$TextureScaleFactor, bitmapData.$bitmapY + rect.y / egret.$TextureScaleFactor, bitmapWidth * rect.width / w, bitmapHeight * rect.height / h, offsetX, offsetY, rect.width, rect.height);
        return surface;
      }
    }
    /**
     * @private
     */


    function toDataURL(type, rect, encoderOptions) {
      try {
        var surface = convertImageToCanvas(this, rect);
        var result = surface.toDataURL(type, encoderOptions);
        return result;
      } catch (e) {
        egret.$error(1033);
      }

      return null;
    }
    /**
     * 有些杀毒软件认为 saveToFile 可能是一个病毒文件
     */


    function eliFoTevas(type, filePath, rect, encoderOptions) {}

    function getPixel32(x, y) {
      egret.$warn(1041, "getPixel32", "getPixels");
      return this.getPixels(x, y);
    }

    function getPixels(x, y, width, height) {
      if (width === void 0) {
        width = 1;
      }

      if (height === void 0) {
        height = 1;
      } //webgl环境下不需要转换成canvas获取像素信息


      if (egret.Capabilities.renderMode == "webgl") {
        var renderTexture = void 0; //webgl下非RenderTexture纹理先画到RenderTexture

        if (!this.$renderBuffer) {
          renderTexture = new egret.RenderTexture();
          renderTexture.drawToTexture(new egret.Bitmap(this));
        } else {
          renderTexture = this;
        } //从RenderTexture中读取像素数据


        var pixels = renderTexture.$renderBuffer.getPixels(x, y, width, height);
        return pixels;
      }

      try {
        var surface = convertImageToCanvas(this);
        var result = sharedContext.getImageData(x, y, width, height).data;
        return result;
      } catch (e) {
        egret.$error(1039);
      }
    }

    egret.Texture.prototype.toDataURL = toDataURL;
    egret.Texture.prototype.saveToFile = eliFoTevas;
    egret.Texture.prototype.getPixel32 = getPixel32;
    egret.Texture.prototype.getPixels = getPixels;
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     * XML节点基类
     */
    var XMLNode = function () {
      /**
       * @private
       */
      function XMLNode(nodeType, parent) {
        this.nodeType = nodeType;
        this.parent = parent;
      }

      return XMLNode;
    }();

    miqgame.XMLNode = XMLNode;

    __reflect(XMLNode.prototype, "egret.miqgame.XMLNode");
    /**
     * @private
     * XML节点对象
     */


    var XML = function (_super) {
      __extends(XML, _super);
      /**
       * @private
       */


      function XML(localName, parent, prefix, namespace, name) {
        var _this = _super.call(this, 1, parent) || this;
        /**
         * @private
         * 当前节点上的属性列表
         */


        _this.attributes = {};
        /**
         * @private
         * 当前节点的子节点列表
         */

        _this.children = [];
        _this.localName = localName;
        _this.prefix = prefix;
        _this.namespace = namespace;
        _this.name = name;
        return _this;
      }

      return XML;
    }(XMLNode);

    miqgame.XML = XML;

    __reflect(XML.prototype, "egret.miqgame.XML");
    /**
     * @private
     * XML文本节点
     */


    var XMLText = function (_super) {
      __extends(XMLText, _super);
      /**
       * @private
       */


      function XMLText(text, parent) {
        var _this = _super.call(this, 3, parent) || this;

        _this.text = text;
        return _this;
      }

      return XMLText;
    }(XMLNode);

    miqgame.XMLText = XMLText;

    __reflect(XMLText.prototype, "egret.miqgame.XMLText");

    var parser;
    /**
     * @private
     * 解析字符串为XML对象
     * @param text 要解析的字符串
     */

    function parse(text) {
      if (!parser) {
        if (!window["DOMParser"]) {
          console.error("没有 XML 支持库，请访问 http://developer.egret.com/cn/github/egret-docs/Engine2D/minigame/minigameFAQ/index.html#xml 了解详情");
        } else {
          parser = new DOMParser();
        }
      }

      var xmlDoc = parser.parseFromString(text, "text/xml");
      var length = xmlDoc.childNodes.length;

      for (var i = 0; i < length; i++) {
        var node = xmlDoc.childNodes[i];

        if (node.nodeType == 1) {
          return parseNode(node, null);
        }
      }

      return null;
    }
    /**
     * @private
     * 解析一个节点
     */


    function parseNode(node, parent) {
      if (node.localName == "parsererror") {
        throw new Error(node.textContent);
      }

      var xml = new XML(node.localName, parent, node["prefix"], node.namespaceURI, node.nodeName);
      var nodeAttributes = node.attributes;
      var attributes = xml.attributes;
      var length = nodeAttributes.length;

      for (var i = 0; i < length; i++) {
        var attributeNode = nodeAttributes[i];
        var name_1 = attributeNode.name;

        if (name_1.indexOf("xmlns:") == 0) {
          continue;
        }

        attributes[name_1] = attributeNode.value;
        xml["$" + name_1] = attributeNode.value;
      }

      var childNodes = node.childNodes;
      length = childNodes.length;
      var children = xml.children;

      for (var i = 0; i < length; i++) {
        var childNode = childNodes[i];
        var nodeType = childNode.nodeType;
        var childXML = null;

        if (nodeType == 1) {
          childXML = parseNode(childNode, xml);
        } else if (nodeType == 3) {
          var text = childNode.textContent.trim();

          if (text) {
            childXML = new XMLText(text, xml);
          }
        }

        if (childXML) {
          children.push(childXML);
        }
      }

      return xml;
    }

    egret.XML = {
      parse: parse
    };
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {}));

(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var WebDeviceOrientation = function (_super) {
      __extends(WebDeviceOrientation, _super);

      function WebDeviceOrientation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @private
         */


        _this.onChange = function (e) {
          var event = new egret.OrientationEvent(egret.Event.CHANGE);
          event.beta = e.x;
          event.gamma = e.y;
          event.alpha = e.z;

          _this.dispatchEvent(event);
        };

        return _this;
      }
      /**
       * @private
       *
       */


      WebDeviceOrientation.prototype.start = function () {
        // window.addEventListener("deviceorientation", this.onChange);
        system.sensor.subscribeAccelerometer({
          callback: this.onChange.bind(this)
        });
      };
      /**
       * @private
       *
       */


      WebDeviceOrientation.prototype.stop = function () {
        // window.removeEventListener("deviceorientation", this.onChange);
        system.sensor.unsubscribeAccelerometer();
      };

      return WebDeviceOrientation;
    }(egret.EventDispatcher);

    miqgame.WebDeviceOrientation = WebDeviceOrientation;

    __reflect(WebDeviceOrientation.prototype, "egret.miqgame.WebDeviceOrientation", ["egret.DeviceOrientation"]);
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {}));

egret.DeviceOrientation = egret.miqgame.WebDeviceOrientation;

(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var WebGeolocation = function (_super) {
      __extends(WebGeolocation, _super);
      /**
       * @private
       */


      function WebGeolocation(option) {
        var _this = _super.call(this) || this;
        /**
         * @private
         */


        _this.onUpdate = function (position) {
          var event = new egret.GeolocationEvent(egret.Event.CHANGE);
          var coords = position.coords;
          event.altitude = coords.altitude;
          event.heading = coords.heading;
          event.accuracy = coords.accuracy;
          event.latitude = coords.latitude;
          event.longitude = coords.longitude;
          event.speed = coords.speed;
          event.altitudeAccuracy = coords.altitudeAccuracy;

          _this.dispatchEvent(event);
        };
        /**
         * @private
         */


        _this.onError = function (error) {
          var errorType = egret.GeolocationEvent.UNAVAILABLE;
          if (error.code == error.PERMISSION_DENIED) errorType = egret.GeolocationEvent.PERMISSION_DENIED;
          var event = new egret.GeolocationEvent(egret.IOErrorEvent.IO_ERROR);
          event.errorType = errorType;
          event.errorMessage = error.message;

          _this.dispatchEvent(event);
        };

        _this.geolocation = navigator.geolocation;
        return _this;
      }
      /**
       * @private
       *
       */


      WebGeolocation.prototype.start = function () {
        var geo = this.geolocation;
        if (geo) this.watchId = geo.watchPosition(this.onUpdate, this.onError);else this.onError({
          code: 2,
          message: egret.sys.tr(3004),
          PERMISSION_DENIED: 1,
          POSITION_UNAVAILABLE: 2
        });
      };
      /**
       * @private
       *
       */


      WebGeolocation.prototype.stop = function () {
        var geo = this.geolocation;
        geo.clearWatch(this.watchId);
      };

      return WebGeolocation;
    }(egret.EventDispatcher);

    miqgame.WebGeolocation = WebGeolocation;

    __reflect(WebGeolocation.prototype, "egret.miqgame.WebGeolocation", ["egret.Geolocation"]);

    egret.Geolocation = egret.miqgame.WebGeolocation;
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {}));

(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var WebMotion = function (_super) {
      __extends(WebMotion, _super);

      function WebMotion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @private
         */


        _this.onChange = function (e) {
          var event = new egret.MotionEvent(egret.Event.CHANGE);
          var acceleration = {
            x: e.acceleration.x,
            y: e.acceleration.y,
            z: e.acceleration.z
          };
          var accelerationIncludingGravity = {
            x: e.accelerationIncludingGravity.x,
            y: e.accelerationIncludingGravity.y,
            z: e.accelerationIncludingGravity.z
          };
          var rotation = {
            alpha: e.rotationRate.alpha,
            beta: e.rotationRate.beta,
            gamma: e.rotationRate.gamma
          };
          event.acceleration = acceleration;
          event.accelerationIncludingGravity = accelerationIncludingGravity;
          event.rotationRate = rotation;

          _this.dispatchEvent(event);
        };

        return _this;
      }
      /**
       * @private
       *
       */


      WebMotion.prototype.start = function () {
        window.addEventListener("devicemotion", this.onChange);
      };
      /**
       * @private
       *
       */


      WebMotion.prototype.stop = function () {
        window.removeEventListener("devicemotion", this.onChange);
      };

      return WebMotion;
    }(egret.EventDispatcher);

    miqgame.WebMotion = WebMotion;

    __reflect(WebMotion.prototype, "egret.miqgame.WebMotion", ["egret.Motion"]);

    egret.Motion = egret.miqgame.WebMotion;
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    if (true) {
      var setLogLevel = function setLogLevel(logType) {
        if (logFuncs_1 == null) {
          logFuncs_1 = {
            "error": console.error,
            "debug": console.debug,
            "warn": console.warn,
            "info": console.info,
            "log": console.log
          };
        }

        switch (logType) {
          case egret.Logger.OFF:
            console.error = function () {};

          case egret.Logger.ERROR:
            console.warn = function () {};

          case egret.Logger.WARN:
            console.info = function () {};

            console.log = function () {};

          case egret.Logger.INFO:
            console.debug = function () {};

          default:
            break;
        }

        switch (logType) {
          case egret.Logger.ALL:
          case egret.Logger.DEBUG:
            console.debug = logFuncs_1["debug"];

          case egret.Logger.INFO:
            console.log = logFuncs_1["log"];
            console.info = logFuncs_1["info"];

          case egret.Logger.WARN:
            console.warn = logFuncs_1["warn"];

          case egret.Logger.ERROR:
            console.error = logFuncs_1["error"];

          default:
            break;
        }
      };

      var logFuncs_1;
      Object.defineProperty(egret.Logger, "logLevel", {
        set: setLogLevel,
        enumerable: true,
        configurable: true
      });
    }
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     * 绘制指令管理器
     * 用来维护drawData数组
     */
    var WebGLDrawCmdManager = function () {
      function WebGLDrawCmdManager() {
        /**
         * 用于缓存绘制命令的数组
         */
        this.drawData = [];
        this.drawDataLen = 0;
      }
      /**
       * 压入绘制矩形指令
       */


      WebGLDrawCmdManager.prototype.pushDrawRect = function () {
        if (this.drawDataLen == 0 || this.drawData[this.drawDataLen - 1].type != 11
        /* RECT */
        ) {
            var data = this.drawData[this.drawDataLen] || {};
            data.type = 11
            /* RECT */
            ;
            data.count = 0;
            this.drawData[this.drawDataLen] = data;
            this.drawDataLen++;
          }

        this.drawData[this.drawDataLen - 1].count += 2;
      };
      /**
       * 压入绘制texture指令
       */


      WebGLDrawCmdManager.prototype.pushDrawTexture = function (texture, count, filter, textureWidth, textureHeight) {
        if (count === void 0) {
          count = 2;
        }

        if (filter) {
          // 目前有滤镜的情况下不会合并绘制
          var data = this.drawData[this.drawDataLen] || {};
          data.type = 0
          /* TEXTURE */
          ;
          data.texture = texture;
          data.filter = filter;
          data.count = count;
          data.textureWidth = textureWidth;
          data.textureHeight = textureHeight;
          this.drawData[this.drawDataLen] = data;
          this.drawDataLen++;
        } else {
          if (this.drawDataLen == 0 || this.drawData[this.drawDataLen - 1].type != 0
          /* TEXTURE */
          || texture != this.drawData[this.drawDataLen - 1].texture || this.drawData[this.drawDataLen - 1].filter) {
            var data = this.drawData[this.drawDataLen] || {};
            data.type = 0
            /* TEXTURE */
            ;
            data.texture = texture;
            data.count = 0;
            this.drawData[this.drawDataLen] = data;
            this.drawDataLen++;
          }

          this.drawData[this.drawDataLen - 1].count += count;
        }
      };

      WebGLDrawCmdManager.prototype.pushChangeSmoothing = function (texture, smoothing) {
        texture["smoothing"] = smoothing;
        var data = this.drawData[this.drawDataLen] || {};
        data.type = 9
        /* SMOOTHING */
        ;
        data.texture = texture;
        data.smoothing = smoothing;
        this.drawData[this.drawDataLen] = data;
        this.drawDataLen++;
      };
      /**
       * 压入pushMask指令
       */


      WebGLDrawCmdManager.prototype.pushPushMask = function (count) {
        if (count === void 0) {
          count = 1;
        }

        var data = this.drawData[this.drawDataLen] || {};
        data.type = 1
        /* PUSH_MASK */
        ;
        data.count = count * 2;
        this.drawData[this.drawDataLen] = data;
        this.drawDataLen++;
      };
      /**
       * 压入popMask指令
       */


      WebGLDrawCmdManager.prototype.pushPopMask = function (count) {
        if (count === void 0) {
          count = 1;
        }

        var data = this.drawData[this.drawDataLen] || {};
        data.type = 2
        /* POP_MASK */
        ;
        data.count = count * 2;
        this.drawData[this.drawDataLen] = data;
        this.drawDataLen++;
      };
      /**
       * 压入混色指令
       */


      WebGLDrawCmdManager.prototype.pushSetBlend = function (value) {
        var len = this.drawDataLen; // 有无遍历到有效绘图操作

        var drawState = false;

        for (var i = len - 1; i >= 0; i--) {
          var data = this.drawData[i];

          if (data) {
            if (data.type == 0
            /* TEXTURE */
            || data.type == 11
            /* RECT */
            ) {
                drawState = true;
              } // 如果与上一次blend操作之间无有效绘图，上一次操作无效


            if (!drawState && data.type == 3
            /* BLEND */
            ) {
                this.drawData.splice(i, 1);
                this.drawDataLen--;
                continue;
              } // 如果与上一次blend操作重复，本次操作无效


            if (data.type == 3
            /* BLEND */
            ) {
                if (data.value == value) {
                  return;
                } else {
                  break;
                }
              }
          }
        }

        var _data = this.drawData[this.drawDataLen] || {};

        _data.type = 3
        /* BLEND */
        ;
        _data.value = value;
        this.drawData[this.drawDataLen] = _data;
        this.drawDataLen++;
      };
      /*
       * 压入resize render target命令
       */


      WebGLDrawCmdManager.prototype.pushResize = function (buffer, width, height) {
        var data = this.drawData[this.drawDataLen] || {};
        data.type = 4
        /* RESIZE_TARGET */
        ;
        data.buffer = buffer;
        data.width = width;
        data.height = height;
        this.drawData[this.drawDataLen] = data;
        this.drawDataLen++;
      };
      /*
       * 压入clear color命令
       */


      WebGLDrawCmdManager.prototype.pushClearColor = function () {
        var data = this.drawData[this.drawDataLen] || {};
        data.type = 5
        /* CLEAR_COLOR */
        ;
        this.drawData[this.drawDataLen] = data;
        this.drawDataLen++;
      };
      /**
       * 压入激活buffer命令
       */


      WebGLDrawCmdManager.prototype.pushActivateBuffer = function (buffer) {
        var len = this.drawDataLen; // 有无遍历到有效绘图操作

        var drawState = false;

        for (var i = len - 1; i >= 0; i--) {
          var data = this.drawData[i];

          if (data) {
            if (data.type != 3
            /* BLEND */
            && data.type != 6
            /* ACT_BUFFER */
            ) {
                drawState = true;
              } // 如果与上一次buffer操作之间无有效绘图，上一次操作无效


            if (!drawState && data.type == 6
            /* ACT_BUFFER */
            ) {
                this.drawData.splice(i, 1);
                this.drawDataLen--;
                continue;
              } // 如果与上一次buffer操作重复，本次操作无效
            // if(data.type == DRAWABLE_TYPE.ACT_BUFFER) {
            //     if(data.buffer == buffer) {
            //         return;
            //     } else {
            //         break;
            //     }
            // }

          }
        }

        var _data = this.drawData[this.drawDataLen] || {};

        _data.type = 6
        /* ACT_BUFFER */
        ;
        _data.buffer = buffer;
        _data.width = buffer.rootRenderTarget.width;
        _data.height = buffer.rootRenderTarget.height;
        this.drawData[this.drawDataLen] = _data;
        this.drawDataLen++;
      };
      /*
       * 压入enabel scissor命令
       */


      WebGLDrawCmdManager.prototype.pushEnableScissor = function (x, y, width, height) {
        var data = this.drawData[this.drawDataLen] || {};
        data.type = 7
        /* ENABLE_SCISSOR */
        ;
        data.x = x;
        data.y = y;
        data.width = width;
        data.height = height;
        this.drawData[this.drawDataLen] = data;
        this.drawDataLen++;
      };
      /*
       * 压入disable scissor命令
       */


      WebGLDrawCmdManager.prototype.pushDisableScissor = function () {
        var data = this.drawData[this.drawDataLen] || {};
        data.type = 8
        /* DISABLE_SCISSOR */
        ;
        this.drawData[this.drawDataLen] = data;
        this.drawDataLen++;
      };
      /**
       * 清空命令数组
       */


      WebGLDrawCmdManager.prototype.clear = function () {
        for (var i = 0; i < this.drawDataLen; i++) {
          var data = this.drawData[i];
          data.type = 0;
          data.count = 0;
          data.texture = null;
          data.filter = null;
          data.uv = null;
          data.value = "";
          data.buffer = null;
          data.width = 0;
          data.height = 0;
        }

        this.drawDataLen = 0;
      };

      return WebGLDrawCmdManager;
    }();

    miqgame.WebGLDrawCmdManager = WebGLDrawCmdManager;

    __reflect(WebGLDrawCmdManager.prototype, "egret.miqgame.WebGLDrawCmdManager");
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     * 顶点数组管理对象
     * 用来维护顶点数组
     */
    var WebGLVertexArrayObject = function () {
      function WebGLVertexArrayObject() {
        this.size = 2000;
        this.vertexMaxSize = this.size * 4;
        this.indicesMaxSize = this.size * 6;
        this.vertSize = 5;
        this.vertices = null;
        this.indices = null;
        this.indicesForMesh = null;
        this.vertexIndex = 0;
        this.indexIndex = 0;
        this.hasMesh = false;
        var numVerts = this.vertexMaxSize * this.vertSize;
        var numIndices = this.indicesMaxSize;
        this.vertices = new Float32Array(numVerts);
        this.indices = new Uint16Array(numIndices);
        this.indicesForMesh = new Uint16Array(numIndices);

        for (var i = 0, j = 0; i < numIndices; i += 6, j += 4) {
          this.indices[i + 0] = j + 0;
          this.indices[i + 1] = j + 1;
          this.indices[i + 2] = j + 2;
          this.indices[i + 3] = j + 0;
          this.indices[i + 4] = j + 2;
          this.indices[i + 5] = j + 3;
        }
      }
      /**
       * 是否达到最大缓存数量
       */


      WebGLVertexArrayObject.prototype.reachMaxSize = function (vertexCount, indexCount) {
        if (vertexCount === void 0) {
          vertexCount = 4;
        }

        if (indexCount === void 0) {
          indexCount = 6;
        }

        return this.vertexIndex > this.vertexMaxSize - vertexCount || this.indexIndex > this.indicesMaxSize - indexCount;
      };
      /**
       * 获取缓存完成的顶点数组
       */


      WebGLVertexArrayObject.prototype.getVertices = function () {
        var view = this.vertices.subarray(0, this.vertexIndex * this.vertSize);
        return view;
      };
      /**
       * 获取缓存完成的索引数组
       */


      WebGLVertexArrayObject.prototype.getIndices = function () {
        return this.indices;
      };
      /**
       * 获取缓存完成的mesh索引数组
       */


      WebGLVertexArrayObject.prototype.getMeshIndices = function () {
        return this.indicesForMesh;
      };
      /**
       * 切换成mesh索引缓存方式
       */


      WebGLVertexArrayObject.prototype.changeToMeshIndices = function () {
        if (!this.hasMesh) {
          // 拷贝默认index信息到for mesh中
          for (var i = 0, l = this.indexIndex; i < l; ++i) {
            this.indicesForMesh[i] = this.indices[i];
          }

          this.hasMesh = true;
        }
      };

      WebGLVertexArrayObject.prototype.isMesh = function () {
        return this.hasMesh;
      };
      /**
       * 默认构成矩形
       */
      // private defaultMeshVertices = [0, 0, 1, 0, 1, 1, 0, 1];
      // private defaultMeshUvs = [
      //     0, 0,
      //     1, 0,
      //     1, 1,
      //     0, 1
      // ];
      // private defaultMeshIndices = [0, 1, 2, 0, 2, 3];

      /**
       * 缓存一组顶点
       */


      WebGLVertexArrayObject.prototype.cacheArrays = function (buffer, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, textureSourceWidth, textureSourceHeight, meshUVs, meshVertices, meshIndices, rotated) {
        var alpha = buffer.globalAlpha; //计算出绘制矩阵，之后把矩阵还原回之前的

        var locWorldTransform = buffer.globalMatrix;
        var a = locWorldTransform.a;
        var b = locWorldTransform.b;
        var c = locWorldTransform.c;
        var d = locWorldTransform.d;
        var tx = locWorldTransform.tx;
        var ty = locWorldTransform.ty;
        var offsetX = buffer.$offsetX;
        var offsetY = buffer.$offsetY;

        if (offsetX != 0 || offsetY != 0) {
          tx = offsetX * a + offsetY * c + tx;
          ty = offsetX * b + offsetY * d + ty;
        }

        if (!meshVertices) {
          if (destX != 0 || destY != 0) {
            tx = destX * a + destY * c + tx;
            ty = destX * b + destY * d + ty;
          }

          var a1 = destWidth / sourceWidth;

          if (a1 != 1) {
            a = a1 * a;
            b = a1 * b;
          }

          var d1 = destHeight / sourceHeight;

          if (d1 != 1) {
            c = d1 * c;
            d = d1 * d;
          }
        }

        if (meshVertices) {
          // 计算索引位置与赋值
          var vertices = this.vertices;
          var index = this.vertexIndex * this.vertSize; // 缓存顶点数组

          var i = 0,
              iD = 0,
              l = 0;
          var u = 0,
              v = 0,
              x = 0,
              y = 0;

          for (i = 0, l = meshUVs.length; i < l; i += 2) {
            iD = index + i * 5 / 2;
            x = meshVertices[i];
            y = meshVertices[i + 1];
            u = meshUVs[i];
            v = meshUVs[i + 1]; // xy

            vertices[iD + 0] = a * x + c * y + tx;
            vertices[iD + 1] = b * x + d * y + ty; // uv

            if (rotated) {
              vertices[iD + 2] = (sourceX + (1.0 - v) * sourceHeight) / textureSourceWidth;
              vertices[iD + 3] = (sourceY + u * sourceWidth) / textureSourceHeight;
            } else {
              vertices[iD + 2] = (sourceX + u * sourceWidth) / textureSourceWidth;
              vertices[iD + 3] = (sourceY + v * sourceHeight) / textureSourceHeight;
            } // alpha


            vertices[iD + 4] = alpha;
          } // 缓存索引数组


          if (this.hasMesh) {
            for (var i_1 = 0, l_1 = meshIndices.length; i_1 < l_1; ++i_1) {
              this.indicesForMesh[this.indexIndex + i_1] = meshIndices[i_1] + this.vertexIndex;
            }
          }

          this.vertexIndex += meshUVs.length / 2;
          this.indexIndex += meshIndices.length;
        } else {
          var width = textureSourceWidth;
          var height = textureSourceHeight;
          var w = sourceWidth;
          var h = sourceHeight;
          sourceX = sourceX / width;
          sourceY = sourceY / height;
          var vertices = this.vertices;
          var index = this.vertexIndex * this.vertSize;

          if (rotated) {
            var temp = sourceWidth;
            sourceWidth = sourceHeight / width;
            sourceHeight = temp / height; // xy

            vertices[index++] = tx;
            vertices[index++] = ty; // uv

            vertices[index++] = sourceWidth + sourceX;
            vertices[index++] = sourceY; // alpha

            vertices[index++] = alpha; // xy

            vertices[index++] = a * w + tx;
            vertices[index++] = b * w + ty; // uv

            vertices[index++] = sourceWidth + sourceX;
            vertices[index++] = sourceHeight + sourceY; // alpha

            vertices[index++] = alpha; // xy

            vertices[index++] = a * w + c * h + tx;
            vertices[index++] = d * h + b * w + ty; // uv

            vertices[index++] = sourceX;
            vertices[index++] = sourceHeight + sourceY; // alpha

            vertices[index++] = alpha; // xy

            vertices[index++] = c * h + tx;
            vertices[index++] = d * h + ty; // uv

            vertices[index++] = sourceX;
            vertices[index++] = sourceY; // alpha

            vertices[index++] = alpha;
          } else {
            sourceWidth = sourceWidth / width;
            sourceHeight = sourceHeight / height; // xy

            vertices[index++] = tx;
            vertices[index++] = ty; // uv

            vertices[index++] = sourceX;
            vertices[index++] = sourceY; // alpha

            vertices[index++] = alpha; // xy

            vertices[index++] = a * w + tx;
            vertices[index++] = b * w + ty; // uv

            vertices[index++] = sourceWidth + sourceX;
            vertices[index++] = sourceY; // alpha

            vertices[index++] = alpha; // xy

            vertices[index++] = a * w + c * h + tx;
            vertices[index++] = d * h + b * w + ty; // uv

            vertices[index++] = sourceWidth + sourceX;
            vertices[index++] = sourceHeight + sourceY; // alpha

            vertices[index++] = alpha; // xy

            vertices[index++] = c * h + tx;
            vertices[index++] = d * h + ty; // uv

            vertices[index++] = sourceX;
            vertices[index++] = sourceHeight + sourceY; // alpha

            vertices[index++] = alpha;
          } // 缓存索引数组


          if (this.hasMesh) {
            var indicesForMesh = this.indicesForMesh;
            indicesForMesh[this.indexIndex + 0] = 0 + this.vertexIndex;
            indicesForMesh[this.indexIndex + 1] = 1 + this.vertexIndex;
            indicesForMesh[this.indexIndex + 2] = 2 + this.vertexIndex;
            indicesForMesh[this.indexIndex + 3] = 0 + this.vertexIndex;
            indicesForMesh[this.indexIndex + 4] = 2 + this.vertexIndex;
            indicesForMesh[this.indexIndex + 5] = 3 + this.vertexIndex;
          }

          this.vertexIndex += 4;
          this.indexIndex += 6;
        }
      };

      WebGLVertexArrayObject.prototype.clear = function () {
        this.hasMesh = false;
        this.vertexIndex = 0;
        this.indexIndex = 0;
      };

      return WebGLVertexArrayObject;
    }();

    miqgame.WebGLVertexArrayObject = WebGLVertexArrayObject;

    __reflect(WebGLVertexArrayObject.prototype, "egret.miqgame.WebGLVertexArrayObject");
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     * WebGLRenderTarget类
     * 一个WebGL渲染目标，拥有一个frame buffer和texture
     */
    var WebGLRenderTarget = function (_super) {
      __extends(WebGLRenderTarget, _super);

      function WebGLRenderTarget(gl, width, height) {
        var _this = _super.call(this) || this; // 清除色


        _this.clearColor = [0, 0, 0, 0]; // 是否启用frame buffer, 默认为true

        _this.useFrameBuffer = true;
        _this.gl = gl; // 如果尺寸为 0 chrome会报警

        _this.width = width || 1;
        _this.height = height || 1;
        return _this;
      }
      /**
       * 重置render target的尺寸
       */


      WebGLRenderTarget.prototype.resize = function (width, height) {
        var gl = this.gl;
        this.width = width;
        this.height = height;

        if (this.frameBuffer) {
          // 设置texture尺寸
          gl.bindTexture(gl.TEXTURE_2D, this.texture);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null); // gl.bindTexture(gl.TEXTURE_2D, null);
        }

        if (this.stencilBuffer) {
          gl.deleteRenderbuffer(this.stencilBuffer);
          this.stencilBuffer = null;
        }
      };
      /**
       * 激活此render target
       */


      WebGLRenderTarget.prototype.activate = function () {
        var gl = this.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.getFrameBuffer());
      };
      /**
       * 获取frame buffer
       */


      WebGLRenderTarget.prototype.getFrameBuffer = function () {
        if (!this.useFrameBuffer) {
          return null;
        }

        return this.frameBuffer;
      };

      WebGLRenderTarget.prototype.initFrameBuffer = function () {
        if (!this.frameBuffer) {
          var gl = this.gl; // 创建材质

          this.texture = this.createTexture(); // 创建frame buffer

          this.frameBuffer = gl.createFramebuffer();
          gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer); // 绑定材质

          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
        }
      };
      /**
       * 创建材质
       * TODO 创建材质的方法可以合并
       */


      WebGLRenderTarget.prototype.createTexture = function () {
        var gl = this.gl;
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        return texture;
      };
      /**
       * 清除render target颜色缓存
       */


      WebGLRenderTarget.prototype.clear = function (bind) {
        var gl = this.gl;

        if (bind) {
          this.activate();
        }

        gl.colorMask(true, true, true, true);
        gl.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]);
        gl.clear(gl.COLOR_BUFFER_BIT);
      };

      WebGLRenderTarget.prototype.enabledStencil = function () {
        if (!this.frameBuffer || this.stencilBuffer) {
          return;
        }

        var gl = this.gl; // 设置render buffer的尺寸

        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer); // 是否需要强制绑定？
        // 绑定stencil buffer

        this.stencilBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencilBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, this.width, this.height);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencilBuffer); // 此处不解绑是否会造成bug？
        // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      };

      WebGLRenderTarget.prototype.dispose = function () {
        egret.WebGLUtils.deleteWebGLTexture(this.texture);
      };

      return WebGLRenderTarget;
    }(egret.HashObject);

    miqgame.WebGLRenderTarget = WebGLRenderTarget;

    __reflect(WebGLRenderTarget.prototype, "egret.miqgame.WebGLRenderTarget");
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     * WebGL上下文对象，提供简单的绘图接口
     * 抽象出此类，以实现共用一个context
     */
    var WebGLRenderContext = function () {
      function WebGLRenderContext(width, height) {
        this.glID = null;
        this.projectionX = NaN;
        this.projectionY = NaN;
        this.contextLost = false;
        this.$scissorState = false;
        this.vertSize = 5; // this.surface = window['mainCanvas'];

        this.surface = getCurrentPage().getCanvas();
        this.initWebGL();
        this.$bufferStack = [];
        var gl = this.context;
        this.vertexBuffer = gl.createBuffer();
        this.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.drawCmdManager = new miqgame.WebGLDrawCmdManager();
        this.vao = new miqgame.WebGLVertexArrayObject();
        this.setGlobalCompositeOperation("source-over");
      }

      WebGLRenderContext.getInstance = function (width, height) {
        if (this.instance) {
          return this.instance;
        }

        this.instance = new WebGLRenderContext(width, height);
        return this.instance;
      };
      /**
       * 推入一个RenderBuffer并绑定
       */


      WebGLRenderContext.prototype.pushBuffer = function (buffer) {
        this.$bufferStack.push(buffer);

        if (buffer != this.currentBuffer) {
          if (this.currentBuffer) {// this.$drawWebGL();
          }

          this.drawCmdManager.pushActivateBuffer(buffer);
        }

        this.currentBuffer = buffer;
      };
      /**
       * 推出一个RenderBuffer并绑定上一个RenderBuffer
       */


      WebGLRenderContext.prototype.popBuffer = function () {
        // 如果只剩下一个buffer，则不执行pop操作
        // 保证舞台buffer永远在最开始
        if (this.$bufferStack.length <= 1) {
          return;
        }

        var buffer = this.$bufferStack.pop();
        var lastBuffer = this.$bufferStack[this.$bufferStack.length - 1]; // 重新绑定

        if (buffer != lastBuffer) {
          // this.$drawWebGL();
          this.drawCmdManager.pushActivateBuffer(lastBuffer);
        }

        this.currentBuffer = lastBuffer;
      };
      /**
       * 启用RenderBuffer
       */


      WebGLRenderContext.prototype.activateBuffer = function (buffer, width, height) {
        buffer.rootRenderTarget.activate();

        if (!this.bindIndices) {
          this.uploadIndicesArray(this.vao.getIndices());
        }

        buffer.restoreStencil();
        buffer.restoreScissor();
        this.onResize(width, height);
      };
      /**
       * 上传顶点数据
       */


      WebGLRenderContext.prototype.uploadVerticesArray = function (array) {
        var gl = this.context;
        gl.bufferData(gl.ARRAY_BUFFER, array, gl.STREAM_DRAW); // gl.bufferSubData(gl.ARRAY_BUFFER, 0, array);
      };
      /**
       * 上传索引数据
       */


      WebGLRenderContext.prototype.uploadIndicesArray = function (array) {
        var gl = this.context;
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, array, gl.STATIC_DRAW);
        this.bindIndices = true;
      };
      /**
       * 销毁绘制对象
       */


      WebGLRenderContext.prototype.destroy = function () {
        this.surface.width = this.surface.height = 0;
      };

      WebGLRenderContext.prototype.onResize = function (width, height) {
        width = width || this.surface.width;
        height = height || this.surface.height;
        this.projectionX = width / 2;
        this.projectionY = -height / 2;

        if (this.context) {
          this.context.viewport(0, 0, width, height);
        }
      };
      /**
       * 改变渲染缓冲的大小并清空缓冲区
       * @param width 改变后的宽
       * @param height 改变后的高
       * @param useMaxSize 若传入true，则将改变后的尺寸与已有尺寸对比，保留较大的尺寸。
       */


      WebGLRenderContext.prototype.resize = function (width, height, useMaxSize) {
        var surface = this.surface;
        console.log("----resize-wid:" + width + ";-hei:" + height + "----");

        if (useMaxSize) {
          if (surface.width < width) {
            surface.width = width;
          }

          if (surface.height < height) {
            surface.height = height;
          }
        } else {
          if (surface.width != width) {
            surface.width = width;
          }

          if (surface.height != height) {
            surface.height = height;
          }
        }

        this.onResize();
      };

      WebGLRenderContext.prototype.initWebGL = function () {
        this.onResize(); // this.surface.addEventListener("webglcontextlost", this.handleContextLost.bind(this), false);
        // this.surface.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), false);

        this.getWebGLContext();
        var gl = this.context;
        this.$maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
      }; // private handleContextLost() {
      //     this.contextLost = true;
      // }
      // private handleContextRestored() {
      //     this.initWebGL();
      //     this.contextLost = false;
      // }


      WebGLRenderContext.prototype.getWebGLContext = function () {
        // let options = {
        //     antialias: WebGLRenderContext.antialias,
        //     stencil: true//设置可以使用模板（用于不规则遮罩）
        // };
        // let gl: any;
        // //todo 是否使用chrome源码names
        // //let contextNames = ["moz-webgl", "webkit-3d", "experimental-webgl", "webgl", "3d"];
        // let names = ["webgl", "experimental-webgl"];
        // for (let i = 0; i < names.length; i++) {
        //     try {
        //         gl = this.surface.getContext(names[i], options);
        //     } catch (e) {
        //     }
        //     if (gl) {
        //         break;
        //     }
        // }
        // if (!gl) {
        //     $error(1021);
        // }
        // this.setContext(gl);
        // this.setContext(window['mainCanvas'].getContext('webgl'));
        this.setContext(getCurrentPage().getCanvas().getContext('webgl'));
      };

      WebGLRenderContext.prototype.setContext = function (gl) {
        this.context = gl;
        gl.id = WebGLRenderContext.glContextId++;
        this.glID = gl.id;
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
        gl.enable(gl.BLEND);
        gl.colorMask(true, true, true, true); // 目前只使用0号材质单元，默认开启

        gl.activeTexture(gl.TEXTURE0);
      };
      /**
       * 开启模版检测
       */


      WebGLRenderContext.prototype.enableStencilTest = function () {
        var gl = this.context;
        gl.enable(gl.STENCIL_TEST);
      };
      /**
       * 关闭模版检测
       */


      WebGLRenderContext.prototype.disableStencilTest = function () {
        var gl = this.context;
        gl.disable(gl.STENCIL_TEST);
      };
      /**
       * 开启scissor检测
       */


      WebGLRenderContext.prototype.enableScissorTest = function (rect) {
        var gl = this.context;
        gl.enable(gl.SCISSOR_TEST);
        gl.scissor(rect.x, rect.y, rect.width, rect.height);
      };
      /**
       * 关闭scissor检测
       */


      WebGLRenderContext.prototype.disableScissorTest = function () {
        var gl = this.context;
        gl.disable(gl.SCISSOR_TEST);
      };
      /**
       * 获取像素信息
       */


      WebGLRenderContext.prototype.getPixels = function (x, y, width, height, pixels) {
        var gl = this.context;
        gl.readPixels(x, y, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      };
      /**
       * 创建一个WebGLTexture
       */


      WebGLRenderContext.prototype.createTexture = function (bitmapData) {
        var gl = this.context;
        var texture = gl.createTexture();

        if (!texture) {
          //先创建texture失败,然后lost事件才发出来..
          this.contextLost = true;
          return;
        }

        texture.glContext = gl;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmapData);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        return texture;
      };

      WebGLRenderContext.prototype.createTextureFromCompressedData = function (data, width, height, levels, internalFormat) {
        return null;
      };
      /**
       * 更新材质的bitmapData
       */


      WebGLRenderContext.prototype.updateTexture = function (texture, bitmapData) {
        var gl = this.context;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmapData);
      };
      /**
       * 获取一个WebGLTexture
       * 如果有缓存的texture返回缓存的texture，如果没有则创建并缓存texture
       */


      WebGLRenderContext.prototype.getWebGLTexture = function (bitmapData) {
        if (!bitmapData.webGLTexture) {
          if (bitmapData.format == "image") {
            bitmapData.webGLTexture = this.createTexture(bitmapData.source);
          } else if (bitmapData.format == "pvr") {
            bitmapData.webGLTexture = this.createTextureFromCompressedData(bitmapData.source.pvrtcData, bitmapData.width, bitmapData.height, bitmapData.source.mipmapsCount, bitmapData.source.format);
          }

          if (bitmapData.$deleteSource && bitmapData.webGLTexture) {
            bitmapData.source = null;
          } //todo 默认值


          bitmapData.webGLTexture["smoothing"] = true;
        }

        return bitmapData.webGLTexture;
      };
      /**
       * 清除矩形区域
       */


      WebGLRenderContext.prototype.clearRect = function (x, y, width, height) {
        if (x != 0 || y != 0 || width != this.surface.width || height != this.surface.height) {
          var buffer = this.currentBuffer;

          if (buffer.$hasScissor) {
            this.setGlobalCompositeOperation("destination-out");
            this.drawRect(x, y, width, height);
            this.setGlobalCompositeOperation("source-over");
          } else {
            var m = buffer.globalMatrix;

            if (m.b == 0 && m.c == 0) {
              x = x * m.a + m.tx;
              y = y * m.d + m.ty;
              width = width * m.a;
              height = height * m.d;
              this.enableScissor(x, -y - height + buffer.height, width, height);
              this.clear();
              this.disableScissor();
            } else {
              this.setGlobalCompositeOperation("destination-out");
              this.drawRect(x, y, width, height);
              this.setGlobalCompositeOperation("source-over");
            }
          }
        } else {
          this.clear();
        }
      };
      /**
       * 设置混色
       */


      WebGLRenderContext.prototype.setGlobalCompositeOperation = function (value) {
        this.drawCmdManager.pushSetBlend(value);
      };
      /**
       * 绘制图片，image参数可以是BitmapData或者renderTarget
       */


      WebGLRenderContext.prototype.drawImage = function (image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, imageSourceWidth, imageSourceHeight, rotated, smoothing) {
        var buffer = this.currentBuffer;

        if (this.contextLost || !image || !buffer) {
          return;
        }

        var texture;
        var offsetX;
        var offsetY;

        if (image["texture"] || image.source && image.source["texture"]) {
          // 如果是render target
          texture = image["texture"] || image.source["texture"];
          buffer.saveTransform();
          offsetX = buffer.$offsetX;
          offsetY = buffer.$offsetY;
          buffer.useOffset();
          buffer.transform(1, 0, 0, -1, 0, destHeight + destY * 2); // 翻转
        } else if (!image.source && !image.webGLTexture) {
          return;
        } else {
          texture = this.getWebGLTexture(image);
        }

        if (!texture) {
          return;
        }

        this.drawTexture(texture, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, imageSourceWidth, imageSourceHeight, undefined, undefined, undefined, undefined, rotated, smoothing);

        if (image.source && image.source["texture"]) {
          buffer.$offsetX = offsetX;
          buffer.$offsetY = offsetY;
          buffer.restoreTransform();
        }
      };
      /**
       * 绘制Mesh
       */


      WebGLRenderContext.prototype.drawMesh = function (image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, imageSourceWidth, imageSourceHeight, meshUVs, meshVertices, meshIndices, bounds, rotated, smoothing) {
        var buffer = this.currentBuffer;

        if (this.contextLost || !image || !buffer) {
          return;
        }

        var texture;
        var offsetX;
        var offsetY;

        if (image["texture"] || image.source && image.source["texture"]) {
          // 如果是render target
          texture = image["texture"] || image.source["texture"];
          buffer.saveTransform();
          offsetX = buffer.$offsetX;
          offsetY = buffer.$offsetY;
          buffer.useOffset();
          buffer.transform(1, 0, 0, -1, 0, destHeight + destY * 2); // 翻转
        } else if (!image.source && !image.webGLTexture) {
          return;
        } else {
          texture = this.getWebGLTexture(image);
        }

        if (!texture) {
          return;
        }

        this.drawTexture(texture, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, imageSourceWidth, imageSourceHeight, meshUVs, meshVertices, meshIndices, bounds, rotated, smoothing);

        if (image["texture"] || image.source && image.source["texture"]) {
          buffer.$offsetX = offsetX;
          buffer.$offsetY = offsetY;
          buffer.restoreTransform();
        }
      };
      /**
       * 绘制材质
       */


      WebGLRenderContext.prototype.drawTexture = function (texture, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, textureWidth, textureHeight, meshUVs, meshVertices, meshIndices, bounds, rotated, smoothing) {
        var buffer = this.currentBuffer;

        if (this.contextLost || !texture || !buffer) {
          return;
        }

        if (meshVertices && meshIndices) {
          if (this.vao.reachMaxSize(meshVertices.length / 2, meshIndices.length)) {
            this.$drawWebGL();
          }
        } else {
          if (this.vao.reachMaxSize()) {
            this.$drawWebGL();
          }
        }

        if (smoothing != undefined && texture["smoothing"] != smoothing) {
          this.drawCmdManager.pushChangeSmoothing(texture, smoothing);
        }

        if (meshUVs) {
          this.vao.changeToMeshIndices();
        }

        var count = meshIndices ? meshIndices.length / 3 : 2; // 应用$filter，因为只可能是colorMatrixFilter，最后两个参数可不传

        this.drawCmdManager.pushDrawTexture(texture, count, this.$filter);
        this.vao.cacheArrays(buffer, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, textureWidth, textureHeight, meshUVs, meshVertices, meshIndices, rotated);
      };
      /**
       * 绘制矩形（仅用于遮罩擦除等）
       */


      WebGLRenderContext.prototype.drawRect = function (x, y, width, height) {
        var buffer = this.currentBuffer;

        if (this.contextLost || !buffer) {
          return;
        }

        if (this.vao.reachMaxSize()) {
          this.$drawWebGL();
        }

        this.drawCmdManager.pushDrawRect();
        this.vao.cacheArrays(buffer, 0, 0, width, height, x, y, width, height, width, height);
      };
      /**
       * 绘制遮罩
       */


      WebGLRenderContext.prototype.pushMask = function (x, y, width, height) {
        var buffer = this.currentBuffer;

        if (this.contextLost || !buffer) {
          return;
        }

        buffer.$stencilList.push({
          x: x,
          y: y,
          width: width,
          height: height
        });

        if (this.vao.reachMaxSize()) {
          this.$drawWebGL();
        }

        this.drawCmdManager.pushPushMask();
        this.vao.cacheArrays(buffer, 0, 0, width, height, x, y, width, height, width, height);
      };
      /**
       * 恢复遮罩
       */


      WebGLRenderContext.prototype.popMask = function () {
        var buffer = this.currentBuffer;

        if (this.contextLost || !buffer) {
          return;
        }

        var mask = buffer.$stencilList.pop();

        if (this.vao.reachMaxSize()) {
          this.$drawWebGL();
        }

        this.drawCmdManager.pushPopMask();
        this.vao.cacheArrays(buffer, 0, 0, mask.width, mask.height, mask.x, mask.y, mask.width, mask.height, mask.width, mask.height);
      };
      /**
       * 清除颜色缓存
       */


      WebGLRenderContext.prototype.clear = function () {
        this.drawCmdManager.pushClearColor();
      };
      /**
       * 开启scissor test
       */


      WebGLRenderContext.prototype.enableScissor = function (x, y, width, height) {
        var buffer = this.currentBuffer;
        this.drawCmdManager.pushEnableScissor(x, y, width, height);
        buffer.$hasScissor = true;
      };
      /**
       * 关闭scissor test
       */


      WebGLRenderContext.prototype.disableScissor = function () {
        var buffer = this.currentBuffer;
        this.drawCmdManager.pushDisableScissor();
        buffer.$hasScissor = false;
      };

      WebGLRenderContext.prototype.$drawWebGL = function () {
        if (this.drawCmdManager.drawDataLen == 0 || this.contextLost) {
          return;
        }

        this.uploadVerticesArray(this.vao.getVertices()); // 有mesh，则使用indicesForMesh

        if (this.vao.isMesh()) {
          this.uploadIndicesArray(this.vao.getMeshIndices());
        }

        var length = this.drawCmdManager.drawDataLen;
        var offset = 0;

        for (var i = 0; i < length; i++) {
          var data = this.drawCmdManager.drawData[i];
          offset = this.drawData(data, offset); // 计算draw call

          if (data.type == 6
          /* ACT_BUFFER */
          ) {
              this.activatedBuffer = data.buffer;
            }

          if (data.type == 0
          /* TEXTURE */
          || data.type == 11
          /* RECT */
          || data.type == 1
          /* PUSH_MASK */
          || data.type == 2
          /* POP_MASK */
          ) {
              if (this.activatedBuffer && this.activatedBuffer.$computeDrawCall) {
                this.activatedBuffer.$drawCalls++;
              }
            }
        } // 切换回默认indices


        if (this.vao.isMesh()) {
          this.uploadIndicesArray(this.vao.getIndices());
        } // 清空数据


        this.drawCmdManager.clear();
        this.vao.clear();
      };
      /**
       * 执行绘制命令
       */


      WebGLRenderContext.prototype.drawData = function (data, offset) {
        if (!data) {
          return;
        }

        var gl = this.context;
        var program;
        var filter = data.filter;

        switch (data.type) {
          case 0
          /* TEXTURE */
          :
            if (filter) {
              if (filter.type === "custom") {
                program = miqgame.EgretWebGLProgram.getProgram(gl, filter.$vertexSrc, filter.$fragmentSrc, filter.$shaderKey);
              } else if (filter.type === "colorTransform") {
                program = miqgame.EgretWebGLProgram.getProgram(gl, miqgame.EgretShaderLib.default_vert, miqgame.EgretShaderLib.colorTransform_frag, "colorTransform");
              } else if (filter.type === "blurX") {
                program = miqgame.EgretWebGLProgram.getProgram(gl, miqgame.EgretShaderLib.default_vert, miqgame.EgretShaderLib.blur_frag, "blur");
              } else if (filter.type === "blurY") {
                program = miqgame.EgretWebGLProgram.getProgram(gl, miqgame.EgretShaderLib.default_vert, miqgame.EgretShaderLib.blur_frag, "blur");
              } else if (filter.type === "glow") {
                program = miqgame.EgretWebGLProgram.getProgram(gl, miqgame.EgretShaderLib.default_vert, miqgame.EgretShaderLib.glow_frag, "glow");
              }
            } else {
              program = miqgame.EgretWebGLProgram.getProgram(gl, miqgame.EgretShaderLib.default_vert, miqgame.EgretShaderLib.texture_frag, "texture");
            }

            this.activeProgram(gl, program);
            this.syncUniforms(program, filter, data.textureWidth, data.textureHeight);
            offset += this.drawTextureElements(data, offset);
            break;

          case 11
          /* RECT */
          :
            program = miqgame.EgretWebGLProgram.getProgram(gl, miqgame.EgretShaderLib.default_vert, miqgame.EgretShaderLib.primitive_frag, "primitive");
            this.activeProgram(gl, program);
            this.syncUniforms(program, filter, data.textureWidth, data.textureHeight);
            offset += this.drawRectElements(data, offset);
            break;

          case 1
          /* PUSH_MASK */
          :
            program = miqgame.EgretWebGLProgram.getProgram(gl, miqgame.EgretShaderLib.default_vert, miqgame.EgretShaderLib.primitive_frag, "primitive");
            this.activeProgram(gl, program);
            this.syncUniforms(program, filter, data.textureWidth, data.textureHeight);
            offset += this.drawPushMaskElements(data, offset);
            break;

          case 2
          /* POP_MASK */
          :
            program = miqgame.EgretWebGLProgram.getProgram(gl, miqgame.EgretShaderLib.default_vert, miqgame.EgretShaderLib.primitive_frag, "primitive");
            this.activeProgram(gl, program);
            this.syncUniforms(program, filter, data.textureWidth, data.textureHeight);
            offset += this.drawPopMaskElements(data, offset);
            break;

          case 3
          /* BLEND */
          :
            this.setBlendMode(data.value);
            break;

          case 4
          /* RESIZE_TARGET */
          :
            data.buffer.rootRenderTarget.resize(data.width, data.height);
            this.onResize(data.width, data.height);
            break;

          case 5
          /* CLEAR_COLOR */
          :
            if (this.activatedBuffer) {
              var target = this.activatedBuffer.rootRenderTarget;

              if (target.width != 0 || target.height != 0) {
                target.clear(true);
              }
            }

            break;

          case 6
          /* ACT_BUFFER */
          :
            this.activateBuffer(data.buffer, data.width, data.height);
            break;

          case 7
          /* ENABLE_SCISSOR */
          :
            var buffer = this.activatedBuffer;

            if (buffer) {
              if (buffer.rootRenderTarget) {
                buffer.rootRenderTarget.enabledStencil();
              }

              buffer.enableScissor(data.x, data.y, data.width, data.height);
            }

            break;

          case 8
          /* DISABLE_SCISSOR */
          :
            buffer = this.activatedBuffer;

            if (buffer) {
              buffer.disableScissor();
            }

            break;

          case 9
          /* SMOOTHING */
          :
            gl.bindTexture(gl.TEXTURE_2D, data.texture);

            if (data.smoothing) {
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            } else {
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            }

            break;

          default:
            break;
        }

        return offset;
      };

      WebGLRenderContext.prototype.activeProgram = function (gl, program) {
        if (program != this.currentProgram) {
          gl.useProgram(program.id); // 目前所有attribute buffer的绑定方法都是一致的

          var attribute = program.attributes;

          for (var key in attribute) {
            if (key === "aVertexPosition") {
              gl.vertexAttribPointer(attribute["aVertexPosition"].location, 2, gl.FLOAT, false, 5 * 4, 0);
              gl.enableVertexAttribArray(attribute["aVertexPosition"].location);
            } else if (key === "aTextureCoord") {
              gl.vertexAttribPointer(attribute["aTextureCoord"].location, 2, gl.FLOAT, false, 5 * 4, 2 * 4);
              gl.enableVertexAttribArray(attribute["aTextureCoord"].location);
            } else if (key === "aColor") {
              gl.vertexAttribPointer(attribute["aColor"].location, 1, gl.FLOAT, false, 5 * 4, 4 * 4);
              gl.enableVertexAttribArray(attribute["aColor"].location);
            }
          }

          this.currentProgram = program;
        }
      };

      WebGLRenderContext.prototype.syncUniforms = function (program, filter, textureWidth, textureHeight) {
        var uniforms = program.uniforms;
        var isCustomFilter = filter && filter.type === "custom";

        for (var key in uniforms) {
          if (key === "projectionVector") {
            uniforms[key].setValue({
              x: this.projectionX,
              y: this.projectionY
            });
          } else if (key === "uTextureSize") {
            uniforms[key].setValue({
              x: textureWidth,
              y: textureHeight
            });
          } else if (key === "uSampler") {} else {
            var value = filter.$uniforms[key];

            if (value !== undefined) {
              uniforms[key].setValue(value);
            } else {// egret.warn("filter custom: uniform " + key + " not defined!");
            }
          }
        }
      };
      /**
       * 画texture
       **/


      WebGLRenderContext.prototype.drawTextureElements = function (data, offset) {
        var gl = this.context;
        gl.bindTexture(gl.TEXTURE_2D, data.texture);
        var size = data.count * 3;
        gl.drawElements(gl.TRIANGLES, size, gl.UNSIGNED_SHORT, offset * 2);
        return size;
      };
      /**
       * @private
       * 画rect
       **/


      WebGLRenderContext.prototype.drawRectElements = function (data, offset) {
        var gl = this.context; // gl.bindTexture(gl.TEXTURE_2D, null);

        var size = data.count * 3;
        gl.drawElements(gl.TRIANGLES, size, gl.UNSIGNED_SHORT, offset * 2);
        return size;
      };
      /**
       * 画push mask
       **/


      WebGLRenderContext.prototype.drawPushMaskElements = function (data, offset) {
        var gl = this.context;
        var size = data.count * 3;
        var buffer = this.activatedBuffer;

        if (buffer) {
          if (buffer.rootRenderTarget) {
            buffer.rootRenderTarget.enabledStencil();
          }

          if (buffer.stencilHandleCount == 0) {
            buffer.enableStencil();
            gl.clear(gl.STENCIL_BUFFER_BIT); // clear
          }

          var level = buffer.stencilHandleCount;
          buffer.stencilHandleCount++;
          gl.colorMask(false, false, false, false);
          gl.stencilFunc(gl.EQUAL, level, 0xFF);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR); // gl.bindTexture(gl.TEXTURE_2D, null);

          gl.drawElements(gl.TRIANGLES, size, gl.UNSIGNED_SHORT, offset * 2);
          gl.stencilFunc(gl.EQUAL, level + 1, 0xFF);
          gl.colorMask(true, true, true, true);
          gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
        }

        return size;
      };
      /**
       * 画pop mask
       **/


      WebGLRenderContext.prototype.drawPopMaskElements = function (data, offset) {
        var gl = this.context;
        var size = data.count * 3;
        var buffer = this.activatedBuffer;

        if (buffer) {
          buffer.stencilHandleCount--;

          if (buffer.stencilHandleCount == 0) {
            buffer.disableStencil(); // skip this draw
          } else {
            var level = buffer.stencilHandleCount;
            gl.colorMask(false, false, false, false);
            gl.stencilFunc(gl.EQUAL, level + 1, 0xFF);
            gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR); // gl.bindTexture(gl.TEXTURE_2D, null);

            gl.drawElements(gl.TRIANGLES, size, gl.UNSIGNED_SHORT, offset * 2);
            gl.stencilFunc(gl.EQUAL, level, 0xFF);
            gl.colorMask(true, true, true, true);
            gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
          }
        }

        return size;
      };
      /**
       * 设置混色
       */


      WebGLRenderContext.prototype.setBlendMode = function (value) {
        var gl = this.context;
        var blendModeWebGL = WebGLRenderContext.blendModesForGL[value];

        if (blendModeWebGL) {
          gl.blendFunc(blendModeWebGL[0], blendModeWebGL[1]);
        }
      };
      /**
       * 应用滤镜绘制给定的render target
       * 此方法不会导致input被释放，所以如果需要释放input，需要调用此方法后手动调用release
       */


      WebGLRenderContext.prototype.drawTargetWidthFilters = function (filters, input) {
        var originInput = input,
            filtersLen = filters.length,
            output; // 应用前面的滤镜

        if (filtersLen > 1) {
          for (var i = 0; i < filtersLen - 1; i++) {
            var filter_1 = filters[i];
            var width = input.rootRenderTarget.width;
            var height = input.rootRenderTarget.height;
            output = miqgame.WebGLRenderBuffer.create(width, height);
            output.setTransform(1, 0, 0, 1, 0, 0);
            output.globalAlpha = 1;
            this.drawToRenderTarget(filter_1, input, output);

            if (input != originInput) {
              miqgame.WebGLRenderBuffer.release(input);
            }

            input = output;
          }
        } // 应用最后一个滤镜并绘制到当前场景中


        var filter = filters[filtersLen - 1];
        this.drawToRenderTarget(filter, input, this.currentBuffer); // 释放掉用于交换的buffer

        if (input != originInput) {
          miqgame.WebGLRenderBuffer.release(input);
        }
      };
      /**
       * 向一个renderTarget中绘制
       * */


      WebGLRenderContext.prototype.drawToRenderTarget = function (filter, input, output) {
        if (this.contextLost) {
          return;
        }

        if (this.vao.reachMaxSize()) {
          this.$drawWebGL();
        }

        this.pushBuffer(output);
        var originInput = input,
            temp,
            width = input.rootRenderTarget.width,
            height = input.rootRenderTarget.height; // 模糊滤镜分别处理blurX与blurY

        if (filter.type == "blur") {
          var blurXFilter = filter.blurXFilter;
          var blurYFilter = filter.blurYFilter;

          if (blurXFilter.blurX != 0 && blurYFilter.blurY != 0) {
            temp = miqgame.WebGLRenderBuffer.create(width, height);
            temp.setTransform(1, 0, 0, 1, 0, 0);
            temp.globalAlpha = 1;
            this.drawToRenderTarget(filter.blurXFilter, input, temp);

            if (input != originInput) {
              miqgame.WebGLRenderBuffer.release(input);
            }

            input = temp;
            filter = blurYFilter;
          } else {
            filter = blurXFilter.blurX === 0 ? blurYFilter : blurXFilter;
          }
        } // 绘制input结果到舞台


        output.saveTransform();
        output.transform(1, 0, 0, -1, 0, height);
        this.vao.cacheArrays(output, 0, 0, width, height, 0, 0, width, height, width, height);
        output.restoreTransform();
        this.drawCmdManager.pushDrawTexture(input.rootRenderTarget.texture, 2, filter, width, height); // 释放掉input

        if (input != originInput) {
          miqgame.WebGLRenderBuffer.release(input);
        }

        this.popBuffer();
      };

      WebGLRenderContext.initBlendMode = function () {
        WebGLRenderContext.blendModesForGL = {};
        WebGLRenderContext.blendModesForGL["source-over"] = [1, 771];
        WebGLRenderContext.blendModesForGL["lighter"] = [1, 1];
        WebGLRenderContext.blendModesForGL["lighter-in"] = [770, 771];
        WebGLRenderContext.blendModesForGL["destination-out"] = [0, 771];
        WebGLRenderContext.blendModesForGL["destination-in"] = [0, 770];
      };

      WebGLRenderContext.glContextId = 0;
      WebGLRenderContext.blendModesForGL = null;
      return WebGLRenderContext;
    }();

    miqgame.WebGLRenderContext = WebGLRenderContext;

    __reflect(WebGLRenderContext.prototype, "egret.miqgame.WebGLRenderContext");

    WebGLRenderContext.initBlendMode();
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     * WebGL渲染缓存
     */
    var WebGLRenderBuffer = function (_super) {
      __extends(WebGLRenderBuffer, _super);

      function WebGLRenderBuffer(width, height, root) {
        var _this = _super.call(this) || this;

        _this.globalAlpha = 1;
        /**
         * stencil state
         * 模版开关状态
         */

        _this.stencilState = false;
        _this.$stencilList = [];
        _this.stencilHandleCount = 0;
        /**
         * scissor state
         * scissor 开关状态
         */

        _this.$scissorState = false;
        _this.scissorRect = new egret.Rectangle();
        _this.$hasScissor = false;
        _this.$drawCalls = 0;
        _this.$computeDrawCall = false;
        _this.globalMatrix = new egret.Matrix();
        _this.savedGlobalMatrix = new egret.Matrix();
        _this.$offsetX = 0;
        _this.$offsetY = 0; // 获取webglRenderContext

        _this.context = miqgame.WebGLRenderContext.getInstance(width, height); // buffer 对应的 render target

        _this.rootRenderTarget = new miqgame.WebGLRenderTarget(_this.context.context, 3, 3);

        if (width && height) {
          _this.resize(width, height);
        } // 如果是第一个加入的buffer，说明是舞台buffer


        _this.root = root; // 如果是用于舞台渲染的renderBuffer，则默认添加renderTarget到renderContext中，而且是第一个

        if (_this.root) {
          _this.context.pushBuffer(_this); // 画布


          _this.surface = _this.context.surface;
          _this.$computeDrawCall = true;
        } else {
          // 由于创建renderTarget造成的frameBuffer绑定，这里重置绑定
          var lastBuffer = _this.context.activatedBuffer;

          if (lastBuffer) {
            lastBuffer.rootRenderTarget.activate();
          }

          _this.rootRenderTarget.initFrameBuffer();

          _this.surface = _this.rootRenderTarget;
        }

        return _this;
      }

      WebGLRenderBuffer.prototype.enableStencil = function () {
        if (!this.stencilState) {
          this.context.enableStencilTest();
          this.stencilState = true;
        }
      };

      WebGLRenderBuffer.prototype.disableStencil = function () {
        if (this.stencilState) {
          this.context.disableStencilTest();
          this.stencilState = false;
        }
      };

      WebGLRenderBuffer.prototype.restoreStencil = function () {
        if (this.stencilState) {
          this.context.enableStencilTest();
        } else {
          this.context.disableStencilTest();
        }
      };

      WebGLRenderBuffer.prototype.enableScissor = function (x, y, width, height) {
        if (!this.$scissorState) {
          this.$scissorState = true;
          this.scissorRect.setTo(x, y, width, height);
          this.context.enableScissorTest(this.scissorRect);
        }
      };

      WebGLRenderBuffer.prototype.disableScissor = function () {
        if (this.$scissorState) {
          this.$scissorState = false;
          this.scissorRect.setEmpty();
          this.context.disableScissorTest();
        }
      };

      WebGLRenderBuffer.prototype.restoreScissor = function () {
        if (this.$scissorState) {
          this.context.enableScissorTest(this.scissorRect);
        } else {
          this.context.disableScissorTest();
        }
      };

      Object.defineProperty(WebGLRenderBuffer.prototype, "width", {
        /**
         * 渲染缓冲的宽度，以像素为单位。
         * @readOnly
         */
        get: function get() {
          return this.rootRenderTarget.width;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(WebGLRenderBuffer.prototype, "height", {
        /**
         * 渲染缓冲的高度，以像素为单位。
         * @readOnly
         */
        get: function get() {
          return this.rootRenderTarget.height;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * 改变渲染缓冲的大小并清空缓冲区
       * @param width 改变后的宽
       * @param height 改变后的高
       * @param useMaxSize 若传入true，则将改变后的尺寸与已有尺寸对比，保留较大的尺寸。
       */

      WebGLRenderBuffer.prototype.resize = function (width, height, useMaxSize) {
        this.context.pushBuffer(this);
        width = width || 1;
        height = height || 1; // render target 尺寸重置

        if (width != this.rootRenderTarget.width || height != this.rootRenderTarget.height) {
          this.context.drawCmdManager.pushResize(this, width, height); // 同步更改宽高

          this.rootRenderTarget.width = width;
          this.rootRenderTarget.height = height;
        } // 如果是舞台的渲染缓冲，执行resize，否则surface大小不随之改变


        if (this.root) {
          this.context.resize(width, height, useMaxSize);
        }

        this.context.clear();
        this.context.popBuffer();
      };
      /**
       * 获取指定区域的像素
       */


      WebGLRenderBuffer.prototype.getPixels = function (x, y, width, height) {
        if (width === void 0) {
          width = 1;
        }

        if (height === void 0) {
          height = 1;
        }

        var pixels = new Uint8Array(4 * width * height);
        var useFrameBuffer = this.rootRenderTarget.useFrameBuffer;
        this.rootRenderTarget.useFrameBuffer = true;
        this.rootRenderTarget.activate();
        this.context.getPixels(x, y, width, height, pixels);
        this.rootRenderTarget.useFrameBuffer = useFrameBuffer;
        this.rootRenderTarget.activate(); //图像反转

        var result = new Uint8Array(4 * width * height);

        for (var i = 0; i < height; i++) {
          for (var j = 0; j < width; j++) {
            result[(width * (height - i - 1) + j) * 4] = pixels[(width * i + j) * 4];
            result[(width * (height - i - 1) + j) * 4 + 1] = pixels[(width * i + j) * 4 + 1];
            result[(width * (height - i - 1) + j) * 4 + 2] = pixels[(width * i + j) * 4 + 2];
            result[(width * (height - i - 1) + j) * 4 + 3] = pixels[(width * i + j) * 4 + 3];
          }
        }

        return result;
      };

      WebGLRenderBuffer.prototype.$pushResize = function (width, height) {
        this.context.drawCmdManager.pushResize(this, width, height);
      };
      /**
       * 转换成base64字符串，如果图片（或者包含的图片）跨域，则返回null
       * @param type 转换的类型，如: "image/png","image/jpeg"
       */


      WebGLRenderBuffer.prototype.toDataURL = function (type, encoderOptions) {
        return this.context.surface.toDataURL(type, encoderOptions);
      };
      /**
       * 销毁绘制对象
       */


      WebGLRenderBuffer.prototype.destroy = function () {
        this.context.destroy();
      };

      WebGLRenderBuffer.prototype.onRenderFinish = function () {
        this.$drawCalls = 0;
      };
      /**
       * 交换frameBuffer中的图像到surface中
       * @param width 宽度
       * @param height 高度
       */


      WebGLRenderBuffer.prototype.drawFrameBufferToSurface = function (sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, clear) {
        if (clear === void 0) {
          clear = false;
        }

        this.rootRenderTarget.useFrameBuffer = false;
        this.rootRenderTarget.activate();
        this.context.disableStencilTest(); // 切换frameBuffer注意要禁用STENCIL_TEST

        this.context.disableScissorTest();
        this.setTransform(1, 0, 0, 1, 0, 0);
        this.globalAlpha = 1;
        this.context.setGlobalCompositeOperation("source-over");
        clear && this.context.clear();
        this.context.drawImage(this.rootRenderTarget, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, sourceWidth, sourceHeight, false);
        this.context.$drawWebGL();
        this.rootRenderTarget.useFrameBuffer = true;
        this.rootRenderTarget.activate();
        this.restoreStencil();
        this.restoreScissor();
      };
      /**
       * 交换surface的图像到frameBuffer中
       * @param width 宽度
       * @param height 高度
       */


      WebGLRenderBuffer.prototype.drawSurfaceToFrameBuffer = function (sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, clear) {
        if (clear === void 0) {
          clear = false;
        }

        this.rootRenderTarget.useFrameBuffer = true;
        this.rootRenderTarget.activate();
        this.context.disableStencilTest(); // 切换frameBuffer注意要禁用STENCIL_TEST

        this.context.disableScissorTest();
        this.setTransform(1, 0, 0, 1, 0, 0);
        this.globalAlpha = 1;
        this.context.setGlobalCompositeOperation("source-over");
        clear && this.context.clear();
        this.context.drawImage(this.context.surface, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight, sourceWidth, sourceHeight, false);
        this.context.$drawWebGL();
        this.rootRenderTarget.useFrameBuffer = false;
        this.rootRenderTarget.activate();
        this.restoreStencil();
        this.restoreScissor();
      };
      /**
       * 清空缓冲区数据
       */


      WebGLRenderBuffer.prototype.clear = function () {
        this.context.pushBuffer(this);
        this.context.clear();
        this.context.popBuffer();
      };

      WebGLRenderBuffer.prototype.setTransform = function (a, b, c, d, tx, ty) {
        // this.globalMatrix.setTo(a, b, c, d, tx, ty);
        var matrix = this.globalMatrix;
        matrix.a = a;
        matrix.b = b;
        matrix.c = c;
        matrix.d = d;
        matrix.tx = tx;
        matrix.ty = ty;
      };

      WebGLRenderBuffer.prototype.transform = function (a, b, c, d, tx, ty) {
        var matrix = this.globalMatrix;
        var a1 = matrix.a;
        var b1 = matrix.b;
        var c1 = matrix.c;
        var d1 = matrix.d;

        if (a != 1 || b != 0 || c != 0 || d != 1) {
          matrix.a = a * a1 + b * c1;
          matrix.b = a * b1 + b * d1;
          matrix.c = c * a1 + d * c1;
          matrix.d = c * b1 + d * d1;
        }

        matrix.tx = tx * a1 + ty * c1 + matrix.tx;
        matrix.ty = tx * b1 + ty * d1 + matrix.ty;
      };

      WebGLRenderBuffer.prototype.translate = function (dx, dy) {
        var matrix = this.globalMatrix;
        matrix.tx += dx;
        matrix.ty += dy;
      };

      WebGLRenderBuffer.prototype.useOffset = function () {
        var self = this;

        if (self.$offsetX != 0 || self.$offsetY != 0) {
          self.globalMatrix.append(1, 0, 0, 1, self.$offsetX, self.$offsetY);
          self.$offsetX = self.$offsetY = 0;
        }
      };

      WebGLRenderBuffer.prototype.saveTransform = function () {
        var matrix = this.globalMatrix;
        var sMatrix = this.savedGlobalMatrix;
        sMatrix.a = matrix.a;
        sMatrix.b = matrix.b;
        sMatrix.c = matrix.c;
        sMatrix.d = matrix.d;
        sMatrix.tx = matrix.tx;
        sMatrix.ty = matrix.ty;
      };

      WebGLRenderBuffer.prototype.restoreTransform = function () {
        var matrix = this.globalMatrix;
        var sMatrix = this.savedGlobalMatrix;
        matrix.a = sMatrix.a;
        matrix.b = sMatrix.b;
        matrix.c = sMatrix.c;
        matrix.d = sMatrix.d;
        matrix.tx = sMatrix.tx;
        matrix.ty = sMatrix.ty;
      };
      /**
       * 创建一个buffer实例
       */


      WebGLRenderBuffer.create = function (width, height) {
        var buffer = renderBufferPool.pop(); // width = Math.min(width, 1024);
        // height = Math.min(height, 1024);

        if (buffer) {
          buffer.resize(width, height);
          var matrix = buffer.globalMatrix;
          matrix.a = 1;
          matrix.b = 0;
          matrix.c = 0;
          matrix.d = 1;
          matrix.tx = 0;
          matrix.ty = 0;
          buffer.globalAlpha = 1;
          buffer.$offsetX = 0;
          buffer.$offsetY = 0;
        } else {
          buffer = new WebGLRenderBuffer(width, height);
          buffer.$computeDrawCall = false;
        }

        return buffer;
      };
      /**
       * 回收一个buffer实例
       */


      WebGLRenderBuffer.release = function (buffer) {
        renderBufferPool.push(buffer);
      };

      WebGLRenderBuffer.autoClear = true;
      return WebGLRenderBuffer;
    }(egret.HashObject);

    miqgame.WebGLRenderBuffer = WebGLRenderBuffer;

    __reflect(WebGLRenderBuffer.prototype, "egret.miqgame.WebGLRenderBuffer", ["egret.sys.RenderBuffer"]);

    var renderBufferPool = []; //渲染缓冲区对象池
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    var blendModes = ["source-over", "lighter", "destination-out"];
    var defaultCompositeOp = "source-over";
    var BLACK_COLOR = "#000000";
    var CAPS_STYLES = {
      none: 'butt',
      square: 'square',
      round: 'round'
    };
    var renderBufferPool = []; //渲染缓冲区对象池

    /**
     * @private
     * WebGL渲染器
     */

    var WebGLRenderer = function () {
      function WebGLRenderer() {
        this.nestLevel = 0; //渲染的嵌套层次，0表示在调用堆栈的最外层。
      }
      /**
       * 渲染一个显示对象
       * @param displayObject 要渲染的显示对象
       * @param buffer 渲染缓冲
       * @param matrix 要对显示对象整体叠加的变换矩阵
       * @param dirtyList 脏矩形列表
       * @param forRenderTexture 绘制目标是RenderTexture的标志
       * @returns drawCall触发绘制的次数
       */


      WebGLRenderer.prototype.render = function (displayObject, buffer, matrix, forRenderTexture) {
        this.nestLevel++;
        var webglBuffer = buffer;
        var webglBufferContext = webglBuffer.context;
        var root = forRenderTexture ? displayObject : null;
        webglBufferContext.pushBuffer(webglBuffer); //绘制显示对象

        webglBuffer.transform(matrix.a, matrix.b, matrix.c, matrix.d, 0, 0);
        this.drawDisplayObject(displayObject, webglBuffer, matrix.tx, matrix.ty, true);
        webglBufferContext.$drawWebGL();
        var drawCall = webglBuffer.$drawCalls;
        webglBuffer.onRenderFinish();
        webglBufferContext.popBuffer();
        var invert = egret.Matrix.create();
        matrix.$invertInto(invert);
        webglBuffer.transform(invert.a, invert.b, invert.c, invert.d, 0, 0);
        egret.Matrix.release(invert);
        this.nestLevel--;

        if (this.nestLevel === 0) {
          //最大缓存6个渲染缓冲
          if (renderBufferPool.length > 6) {
            renderBufferPool.length = 6;
          }

          var length_1 = renderBufferPool.length;

          for (var i = 0; i < length_1; i++) {
            renderBufferPool[i].resize(0, 0);
          }
        }

        return drawCall;
      };
      /**
       * @private
       * 绘制一个显示对象
       */


      WebGLRenderer.prototype.drawDisplayObject = function (displayObject, buffer, offsetX, offsetY, isStage) {
        var drawCalls = 0;
        var node;
        var displayList = displayObject.$displayList;

        if (displayList && !isStage) {
          if (displayObject.$cacheDirty || displayObject.$renderDirty || displayList.$canvasScaleX != egret.sys.DisplayList.$canvasScaleX || displayList.$canvasScaleY != egret.sys.DisplayList.$canvasScaleY) {
            drawCalls += displayList.drawToSurface();
          }

          node = displayList.$renderNode;
        } else {
          if (displayObject.$renderDirty) {
            node = displayObject.$getRenderNode();
          } else {
            node = displayObject.$renderNode;
          }
        }

        displayObject.$cacheDirty = false;

        if (node) {
          drawCalls++;
          buffer.$offsetX = offsetX;
          buffer.$offsetY = offsetY;

          switch (node.type) {
            case 1
            /* BitmapNode */
            :
              this.renderBitmap(node, buffer);
              break;

            case 2
            /* TextNode */
            :
              this.renderText(node, buffer);
              break;

            case 3
            /* GraphicsNode */
            :
              this.renderGraphics(node, buffer);
              break;

            case 4
            /* GroupNode */
            :
              this.renderGroup(node, buffer);
              break;

            case 5
            /* MeshNode */
            :
              this.renderMesh(node, buffer);
              break;

            case 6
            /* NormalBitmapNode */
            :
              this.renderNormalBitmap(node, buffer);
              break;
          }

          buffer.$offsetX = 0;
          buffer.$offsetY = 0;
        }

        if (displayList && !isStage) {
          return drawCalls;
        }

        var children = displayObject.$children;

        if (children) {
          var length_2 = children.length;

          for (var i = 0; i < length_2; i++) {
            var child = children[i];
            var offsetX2 = void 0;
            var offsetY2 = void 0;
            var tempAlpha = void 0;

            if (child.$alpha != 1) {
              tempAlpha = buffer.globalAlpha;
              buffer.globalAlpha *= child.$alpha;
            }

            var savedMatrix = void 0;

            if (child.$useTranslate) {
              var m = child.$getMatrix();
              offsetX2 = offsetX + child.$x;
              offsetY2 = offsetY + child.$y;
              var m2 = buffer.globalMatrix;
              savedMatrix = egret.Matrix.create();
              savedMatrix.a = m2.a;
              savedMatrix.b = m2.b;
              savedMatrix.c = m2.c;
              savedMatrix.d = m2.d;
              savedMatrix.tx = m2.tx;
              savedMatrix.ty = m2.ty;
              buffer.transform(m.a, m.b, m.c, m.d, offsetX2, offsetY2);
              offsetX2 = -child.$anchorOffsetX;
              offsetY2 = -child.$anchorOffsetY;
            } else {
              offsetX2 = offsetX + child.$x - child.$anchorOffsetX;
              offsetY2 = offsetY + child.$y - child.$anchorOffsetY;
            }

            switch (child.$renderMode) {
              case 1
              /* NONE */
              :
                break;

              case 2
              /* FILTER */
              :
                drawCalls += this.drawWithFilter(child, buffer, offsetX2, offsetY2);
                break;

              case 3
              /* CLIP */
              :
                drawCalls += this.drawWithClip(child, buffer, offsetX2, offsetY2);
                break;

              case 4
              /* SCROLLRECT */
              :
                drawCalls += this.drawWithScrollRect(child, buffer, offsetX2, offsetY2);
                break;

              default:
                drawCalls += this.drawDisplayObject(child, buffer, offsetX2, offsetY2);
                break;
            }

            if (tempAlpha) {
              buffer.globalAlpha = tempAlpha;
            }

            if (savedMatrix) {
              var m = buffer.globalMatrix;
              m.a = savedMatrix.a;
              m.b = savedMatrix.b;
              m.c = savedMatrix.c;
              m.d = savedMatrix.d;
              m.tx = savedMatrix.tx;
              m.ty = savedMatrix.ty;
              egret.Matrix.release(savedMatrix);
            }
          }
        }

        return drawCalls;
      };
      /**
       * @private
       */


      WebGLRenderer.prototype.drawWithFilter = function (displayObject, buffer, offsetX, offsetY) {
        var drawCalls = 0;

        if (displayObject.$children && displayObject.$children.length == 0 && (!displayObject.$renderNode || displayObject.$renderNode.$getRenderCount() == 0)) {
          return drawCalls;
        }

        var filters = displayObject.$filters;
        var hasBlendMode = displayObject.$blendMode !== 0;
        var compositeOp;

        if (hasBlendMode) {
          compositeOp = blendModes[displayObject.$blendMode];

          if (!compositeOp) {
            compositeOp = defaultCompositeOp;
          }
        }

        var displayBounds = displayObject.$getOriginalBounds();
        var displayBoundsX = displayBounds.x;
        var displayBoundsY = displayBounds.y;
        var displayBoundsWidth = displayBounds.width;
        var displayBoundsHeight = displayBounds.height;

        if (displayBoundsWidth <= 0 || displayBoundsHeight <= 0) {
          return drawCalls;
        }

        if (!displayObject.mask && filters.length == 1 && (filters[0].type == "colorTransform" || filters[0].type === "custom" && filters[0].padding === 0)) {
          var childrenDrawCount = this.getRenderCount(displayObject);

          if (!displayObject.$children || childrenDrawCount == 1) {
            if (hasBlendMode) {
              buffer.context.setGlobalCompositeOperation(compositeOp);
            }

            buffer.context.$filter = filters[0];

            if (displayObject.$mask) {
              drawCalls += this.drawWithClip(displayObject, buffer, offsetX, offsetY);
            } else if (displayObject.$scrollRect || displayObject.$maskRect) {
              drawCalls += this.drawWithScrollRect(displayObject, buffer, offsetX, offsetY);
            } else {
              drawCalls += this.drawDisplayObject(displayObject, buffer, offsetX, offsetY);
            }

            buffer.context.$filter = null;

            if (hasBlendMode) {
              buffer.context.setGlobalCompositeOperation(defaultCompositeOp);
            }

            return drawCalls;
          }
        } // 为显示对象创建一个新的buffer


        var displayBuffer = this.createRenderBuffer(displayBoundsWidth, displayBoundsHeight);
        displayBuffer.context.pushBuffer(displayBuffer); //todo 可以优化减少draw次数

        if (displayObject.$mask) {
          drawCalls += this.drawWithClip(displayObject, displayBuffer, -displayBoundsX, -displayBoundsY);
        } else if (displayObject.$scrollRect || displayObject.$maskRect) {
          drawCalls += this.drawWithScrollRect(displayObject, displayBuffer, -displayBoundsX, -displayBoundsY);
        } else {
          drawCalls += this.drawDisplayObject(displayObject, displayBuffer, -displayBoundsX, -displayBoundsY);
        }

        displayBuffer.context.popBuffer(); //绘制结果到屏幕

        if (drawCalls > 0) {
          if (hasBlendMode) {
            buffer.context.setGlobalCompositeOperation(compositeOp);
          }

          drawCalls++; // 绘制结果的时候，应用滤镜

          buffer.$offsetX = offsetX + displayBoundsX;
          buffer.$offsetY = offsetY + displayBoundsY;
          var savedMatrix = egret.Matrix.create();
          var curMatrix = buffer.globalMatrix;
          savedMatrix.a = curMatrix.a;
          savedMatrix.b = curMatrix.b;
          savedMatrix.c = curMatrix.c;
          savedMatrix.d = curMatrix.d;
          savedMatrix.tx = curMatrix.tx;
          savedMatrix.ty = curMatrix.ty;
          buffer.useOffset();
          buffer.context.drawTargetWidthFilters(filters, displayBuffer);
          curMatrix.a = savedMatrix.a;
          curMatrix.b = savedMatrix.b;
          curMatrix.c = savedMatrix.c;
          curMatrix.d = savedMatrix.d;
          curMatrix.tx = savedMatrix.tx;
          curMatrix.ty = savedMatrix.ty;
          egret.Matrix.release(savedMatrix);

          if (hasBlendMode) {
            buffer.context.setGlobalCompositeOperation(defaultCompositeOp);
          }
        }

        renderBufferPool.push(displayBuffer);
        return drawCalls;
      };

      WebGLRenderer.prototype.getRenderCount = function (displayObject) {
        var drawCount = 0;
        var node = displayObject.$getRenderNode();

        if (node) {
          drawCount += node.$getRenderCount();
        }

        if (displayObject.$children) {
          for (var _i = 0, _a = displayObject.$children; _i < _a.length; _i++) {
            var child = _a[_i];
            var filters = child.$filters; // 特殊处理有滤镜的对象

            if (filters && filters.length > 0) {
              return 2;
            } else if (child.$children) {
              drawCount += this.getRenderCount(child);
            } else {
              var node_1 = child.$getRenderNode();

              if (node_1) {
                drawCount += node_1.$getRenderCount();
              }
            }
          }
        }

        return drawCount;
      };
      /**
       * @private
       */


      WebGLRenderer.prototype.drawWithClip = function (displayObject, buffer, offsetX, offsetY) {
        var drawCalls = 0;
        var hasBlendMode = displayObject.$blendMode !== 0;
        var compositeOp;

        if (hasBlendMode) {
          compositeOp = blendModes[displayObject.$blendMode];

          if (!compositeOp) {
            compositeOp = defaultCompositeOp;
          }
        }

        var scrollRect = displayObject.$scrollRect ? displayObject.$scrollRect : displayObject.$maskRect;
        var mask = displayObject.$mask;

        if (mask) {
          var maskRenderMatrix = mask.$getMatrix(); //遮罩scaleX或scaleY为0，放弃绘制

          if (maskRenderMatrix.a == 0 && maskRenderMatrix.b == 0 || maskRenderMatrix.c == 0 && maskRenderMatrix.d == 0) {
            return drawCalls;
          }
        } //没有遮罩,同时显示对象没有子项


        if (!mask && (!displayObject.$children || displayObject.$children.length == 0)) {
          if (scrollRect) {
            buffer.context.pushMask(scrollRect.x + offsetX, scrollRect.y + offsetY, scrollRect.width, scrollRect.height);
          } //绘制显示对象


          if (hasBlendMode) {
            buffer.context.setGlobalCompositeOperation(compositeOp);
          }

          drawCalls += this.drawDisplayObject(displayObject, buffer, offsetX, offsetY);

          if (hasBlendMode) {
            buffer.context.setGlobalCompositeOperation(defaultCompositeOp);
          }

          if (scrollRect) {
            buffer.context.popMask();
          }

          return drawCalls;
        } else {
          var displayBounds = displayObject.$getOriginalBounds();
          var displayBoundsX = displayBounds.x;
          var displayBoundsY = displayBounds.y;
          var displayBoundsWidth = displayBounds.width;
          var displayBoundsHeight = displayBounds.height; //绘制显示对象自身，若有scrollRect，应用clip

          var displayBuffer = this.createRenderBuffer(displayBoundsWidth, displayBoundsHeight);
          displayBuffer.context.pushBuffer(displayBuffer);
          drawCalls += this.drawDisplayObject(displayObject, displayBuffer, -displayBoundsX, -displayBoundsY); //绘制遮罩

          if (mask) {
            var maskBuffer = this.createRenderBuffer(displayBoundsWidth, displayBoundsHeight);
            maskBuffer.context.pushBuffer(maskBuffer);
            var maskMatrix = egret.Matrix.create();
            maskMatrix.copyFrom(mask.$getConcatenatedMatrix());
            mask.$getConcatenatedMatrixAt(displayObject, maskMatrix);
            maskMatrix.translate(-displayBoundsX, -displayBoundsY);
            maskBuffer.setTransform(maskMatrix.a, maskMatrix.b, maskMatrix.c, maskMatrix.d, maskMatrix.tx, maskMatrix.ty);
            egret.Matrix.release(maskMatrix);
            drawCalls += this.drawDisplayObject(mask, maskBuffer, 0, 0);
            maskBuffer.context.popBuffer();
            displayBuffer.context.setGlobalCompositeOperation("destination-in");
            displayBuffer.setTransform(1, 0, 0, -1, 0, maskBuffer.height);
            var maskBufferWidth = maskBuffer.rootRenderTarget.width;
            var maskBufferHeight = maskBuffer.rootRenderTarget.height;
            displayBuffer.context.drawTexture(maskBuffer.rootRenderTarget.texture, 0, 0, maskBufferWidth, maskBufferHeight, 0, 0, maskBufferWidth, maskBufferHeight, maskBufferWidth, maskBufferHeight);
            displayBuffer.setTransform(1, 0, 0, 1, 0, 0);
            displayBuffer.context.setGlobalCompositeOperation("source-over");
            maskBuffer.setTransform(1, 0, 0, 1, 0, 0);
            renderBufferPool.push(maskBuffer);
          }

          displayBuffer.context.setGlobalCompositeOperation(defaultCompositeOp);
          displayBuffer.context.popBuffer(); //绘制结果到屏幕

          if (drawCalls > 0) {
            drawCalls++;

            if (hasBlendMode) {
              buffer.context.setGlobalCompositeOperation(compositeOp);
            }

            if (scrollRect) {
              buffer.context.pushMask(scrollRect.x + offsetX, scrollRect.y + offsetY, scrollRect.width, scrollRect.height);
            }

            var savedMatrix = egret.Matrix.create();
            var curMatrix = buffer.globalMatrix;
            savedMatrix.a = curMatrix.a;
            savedMatrix.b = curMatrix.b;
            savedMatrix.c = curMatrix.c;
            savedMatrix.d = curMatrix.d;
            savedMatrix.tx = curMatrix.tx;
            savedMatrix.ty = curMatrix.ty;
            curMatrix.append(1, 0, 0, -1, offsetX + displayBoundsX, offsetY + displayBoundsY + displayBuffer.height);
            var displayBufferWidth = displayBuffer.rootRenderTarget.width;
            var displayBufferHeight = displayBuffer.rootRenderTarget.height;
            buffer.context.drawTexture(displayBuffer.rootRenderTarget.texture, 0, 0, displayBufferWidth, displayBufferHeight, 0, 0, displayBufferWidth, displayBufferHeight, displayBufferWidth, displayBufferHeight);

            if (scrollRect) {
              displayBuffer.context.popMask();
            }

            if (hasBlendMode) {
              buffer.context.setGlobalCompositeOperation(defaultCompositeOp);
            }

            var matrix = buffer.globalMatrix;
            matrix.a = savedMatrix.a;
            matrix.b = savedMatrix.b;
            matrix.c = savedMatrix.c;
            matrix.d = savedMatrix.d;
            matrix.tx = savedMatrix.tx;
            matrix.ty = savedMatrix.ty;
            egret.Matrix.release(savedMatrix);
          }

          renderBufferPool.push(displayBuffer);
          return drawCalls;
        }
      };
      /**
       * @private
       */


      WebGLRenderer.prototype.drawWithScrollRect = function (displayObject, buffer, offsetX, offsetY) {
        var drawCalls = 0;
        var scrollRect = displayObject.$scrollRect ? displayObject.$scrollRect : displayObject.$maskRect;

        if (scrollRect.isEmpty()) {
          return drawCalls;
        }

        if (displayObject.$scrollRect) {
          offsetX -= scrollRect.x;
          offsetY -= scrollRect.y;
        }

        var m = buffer.globalMatrix;
        var context = buffer.context;
        var scissor = false;

        if (buffer.$hasScissor || m.b != 0 || m.c != 0) {
          buffer.context.pushMask(scrollRect.x + offsetX, scrollRect.y + offsetY, scrollRect.width, scrollRect.height);
        } else {
          var a = m.a;
          var d = m.d;
          var tx = m.tx;
          var ty = m.ty;
          var x = scrollRect.x + offsetX;
          var y = scrollRect.y + offsetY;
          var xMax = x + scrollRect.width;
          var yMax = y + scrollRect.height;
          var minX = void 0,
              minY = void 0,
              maxX = void 0,
              maxY = void 0; //优化，通常情况下不缩放的对象占多数，直接加上偏移量即可。

          if (a == 1.0 && d == 1.0) {
            minX = x + tx;
            minY = y + ty;
            maxX = xMax + tx;
            maxY = yMax + ty;
          } else {
            var x0 = a * x + tx;
            var y0 = d * y + ty;
            var x1 = a * xMax + tx;
            var y1 = d * y + ty;
            var x2 = a * xMax + tx;
            var y2 = d * yMax + ty;
            var x3 = a * x + tx;
            var y3 = d * yMax + ty;
            var tmp = 0;

            if (x0 > x1) {
              tmp = x0;
              x0 = x1;
              x1 = tmp;
            }

            if (x2 > x3) {
              tmp = x2;
              x2 = x3;
              x3 = tmp;
            }

            minX = x0 < x2 ? x0 : x2;
            maxX = x1 > x3 ? x1 : x3;

            if (y0 > y1) {
              tmp = y0;
              y0 = y1;
              y1 = tmp;
            }

            if (y2 > y3) {
              tmp = y2;
              y2 = y3;
              y3 = tmp;
            }

            minY = y0 < y2 ? y0 : y2;
            maxY = y1 > y3 ? y1 : y3;
          }

          context.enableScissor(minX, -maxY + buffer.height, maxX - minX, maxY - minY);
          scissor = true;
        }

        drawCalls += this.drawDisplayObject(displayObject, buffer, offsetX, offsetY);

        if (scissor) {
          context.disableScissor();
        } else {
          context.popMask();
        }

        return drawCalls;
      };
      /**
       * 将一个RenderNode对象绘制到渲染缓冲
       * @param node 要绘制的节点
       * @param buffer 渲染缓冲
       * @param matrix 要叠加的矩阵
       * @param forHitTest 绘制结果是用于碰撞检测。若为true，当渲染GraphicsNode时，会忽略透明度样式设置，全都绘制为不透明的。
       */


      WebGLRenderer.prototype.drawNodeToBuffer = function (node, buffer, matrix, forHitTest) {
        var webglBuffer = buffer; //pushRenderTARGET

        webglBuffer.context.pushBuffer(webglBuffer);
        webglBuffer.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
        this.renderNode(node, buffer, 0, 0, forHitTest);
        webglBuffer.context.$drawWebGL();
        webglBuffer.onRenderFinish(); //popRenderTARGET

        webglBuffer.context.popBuffer();
      };
      /**
       * 将一个DisplayObject绘制到渲染缓冲，用于RenderTexture绘制
       * @param displayObject 要绘制的显示对象
       * @param buffer 渲染缓冲
       * @param matrix 要叠加的矩阵
       */


      WebGLRenderer.prototype.drawDisplayToBuffer = function (displayObject, buffer, matrix) {
        buffer.context.pushBuffer(buffer);

        if (matrix) {
          buffer.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
        }

        var node;

        if (displayObject.$renderDirty) {
          node = displayObject.$getRenderNode();
        } else {
          node = displayObject.$renderNode;
        }

        var drawCalls = 0;

        if (node) {
          drawCalls++;

          switch (node.type) {
            case 1
            /* BitmapNode */
            :
              this.renderBitmap(node, buffer);
              break;

            case 2
            /* TextNode */
            :
              this.renderText(node, buffer);
              break;

            case 3
            /* GraphicsNode */
            :
              this.renderGraphics(node, buffer);
              break;

            case 4
            /* GroupNode */
            :
              this.renderGroup(node, buffer);
              break;

            case 5
            /* MeshNode */
            :
              this.renderMesh(node, buffer);
              break;

            case 6
            /* NormalBitmapNode */
            :
              this.renderNormalBitmap(node, buffer);
              break;
          }
        }

        var children = displayObject.$children;

        if (children) {
          var length_3 = children.length;

          for (var i = 0; i < length_3; i++) {
            var child = children[i];

            switch (child.$renderMode) {
              case 1
              /* NONE */
              :
                break;

              case 2
              /* FILTER */
              :
                drawCalls += this.drawWithFilter(child, buffer, 0, 0);
                break;

              case 3
              /* CLIP */
              :
                drawCalls += this.drawWithClip(child, buffer, 0, 0);
                break;

              case 4
              /* SCROLLRECT */
              :
                drawCalls += this.drawWithScrollRect(child, buffer, 0, 0);
                break;

              default:
                drawCalls += this.drawDisplayObject(child, buffer, 0, 0);
                break;
            }
          }
        }

        buffer.context.$drawWebGL();
        buffer.onRenderFinish();
        buffer.context.popBuffer();
        return drawCalls;
      };
      /**
       * @private
       */


      WebGLRenderer.prototype.renderNode = function (node, buffer, offsetX, offsetY, forHitTest) {
        buffer.$offsetX = offsetX;
        buffer.$offsetY = offsetY;

        switch (node.type) {
          case 1
          /* BitmapNode */
          :
            this.renderBitmap(node, buffer);
            break;

          case 2
          /* TextNode */
          :
            this.renderText(node, buffer);
            break;

          case 3
          /* GraphicsNode */
          :
            this.renderGraphics(node, buffer, forHitTest);
            break;

          case 4
          /* GroupNode */
          :
            this.renderGroup(node, buffer);
            break;

          case 5
          /* MeshNode */
          :
            this.renderMesh(node, buffer);
            break;

          case 6
          /* NormalBitmapNode */
          :
            this.renderNormalBitmap(node, buffer);
            break;
        }
      };
      /**
       * @private
       */


      WebGLRenderer.prototype.renderNormalBitmap = function (node, buffer) {
        var image = node.image;

        if (!image) {
          return;
        }

        buffer.context.drawImage(image, node.sourceX, node.sourceY, node.sourceW, node.sourceH, node.drawX, node.drawY, node.drawW, node.drawH, node.imageWidth, node.imageHeight, node.rotated, node.smoothing);
      };
      /**
       * @private
       */


      WebGLRenderer.prototype.renderBitmap = function (node, buffer) {
        var image = node.image;

        if (!image) {
          return;
        } //buffer.imageSmoothingEnabled = node.smoothing;


        var data = node.drawData;
        var length = data.length;
        var pos = 0;
        var m = node.matrix;
        var blendMode = node.blendMode;
        var alpha = node.alpha;
        var savedMatrix;
        var offsetX;
        var offsetY;

        if (m) {
          savedMatrix = egret.Matrix.create();
          var curMatrix = buffer.globalMatrix;
          savedMatrix.a = curMatrix.a;
          savedMatrix.b = curMatrix.b;
          savedMatrix.c = curMatrix.c;
          savedMatrix.d = curMatrix.d;
          savedMatrix.tx = curMatrix.tx;
          savedMatrix.ty = curMatrix.ty;
          offsetX = buffer.$offsetX;
          offsetY = buffer.$offsetY;
          buffer.useOffset();
          buffer.transform(m.a, m.b, m.c, m.d, m.tx, m.ty);
        } //这里不考虑嵌套


        if (blendMode) {
          buffer.context.setGlobalCompositeOperation(blendModes[blendMode]);
        }

        var originAlpha;

        if (alpha == alpha) {
          originAlpha = buffer.globalAlpha;
          buffer.globalAlpha *= alpha;
        }

        if (node.filter) {
          buffer.context.$filter = node.filter;

          while (pos < length) {
            buffer.context.drawImage(image, data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], node.imageWidth, node.imageHeight, node.rotated, node.smoothing);
          }

          buffer.context.$filter = null;
        } else {
          while (pos < length) {
            buffer.context.drawImage(image, data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], node.imageWidth, node.imageHeight, node.rotated, node.smoothing);
          }
        }

        if (blendMode) {
          buffer.context.setGlobalCompositeOperation(defaultCompositeOp);
        }

        if (alpha == alpha) {
          buffer.globalAlpha = originAlpha;
        }

        if (m) {
          var matrix = buffer.globalMatrix;
          matrix.a = savedMatrix.a;
          matrix.b = savedMatrix.b;
          matrix.c = savedMatrix.c;
          matrix.d = savedMatrix.d;
          matrix.tx = savedMatrix.tx;
          matrix.ty = savedMatrix.ty;
          buffer.$offsetX = offsetX;
          buffer.$offsetY = offsetY;
          egret.Matrix.release(savedMatrix);
        }
      };
      /**
       * @private
       */


      WebGLRenderer.prototype.renderMesh = function (node, buffer) {
        var image = node.image; //buffer.imageSmoothingEnabled = node.smoothing;

        var data = node.drawData;
        var length = data.length;
        var pos = 0;
        var m = node.matrix;
        var blendMode = node.blendMode;
        var alpha = node.alpha;
        var savedMatrix;
        var offsetX;
        var offsetY;

        if (m) {
          savedMatrix = egret.Matrix.create();
          var curMatrix = buffer.globalMatrix;
          savedMatrix.a = curMatrix.a;
          savedMatrix.b = curMatrix.b;
          savedMatrix.c = curMatrix.c;
          savedMatrix.d = curMatrix.d;
          savedMatrix.tx = curMatrix.tx;
          savedMatrix.ty = curMatrix.ty;
          offsetX = buffer.$offsetX;
          offsetY = buffer.$offsetY;
          buffer.useOffset();
          buffer.transform(m.a, m.b, m.c, m.d, m.tx, m.ty);
        } //这里不考虑嵌套


        if (blendMode) {
          buffer.context.setGlobalCompositeOperation(blendModes[blendMode]);
        }

        var originAlpha;

        if (alpha == alpha) {
          originAlpha = buffer.globalAlpha;
          buffer.globalAlpha *= alpha;
        }

        if (node.filter) {
          buffer.context.$filter = node.filter;

          while (pos < length) {
            buffer.context.drawMesh(image, data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], node.imageWidth, node.imageHeight, node.uvs, node.vertices, node.indices, node.bounds, node.rotated, node.smoothing);
          }

          buffer.context.$filter = null;
        } else {
          while (pos < length) {
            buffer.context.drawMesh(image, data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], data[pos++], node.imageWidth, node.imageHeight, node.uvs, node.vertices, node.indices, node.bounds, node.rotated, node.smoothing);
          }
        }

        if (blendMode) {
          buffer.context.setGlobalCompositeOperation(defaultCompositeOp);
        }

        if (alpha == alpha) {
          buffer.globalAlpha = originAlpha;
        }

        if (m) {
          var matrix = buffer.globalMatrix;
          matrix.a = savedMatrix.a;
          matrix.b = savedMatrix.b;
          matrix.c = savedMatrix.c;
          matrix.d = savedMatrix.d;
          matrix.tx = savedMatrix.tx;
          matrix.ty = savedMatrix.ty;
          buffer.$offsetX = offsetX;
          buffer.$offsetY = offsetY;
          egret.Matrix.release(savedMatrix);
        }
      };
      /**
       * @private
       */


      WebGLRenderer.prototype.renderText = function (node, buffer) {
        var width = node.width - node.x;
        var height = node.height - node.y;

        if (width <= 0 || height <= 0 || !width || !height || node.drawData.length == 0) {
          return;
        } // let canvasScaleX = sys.DisplayList.$canvasScaleX;
        // let canvasScaleY = sys.DisplayList.$canvasScaleY;
        // let maxTextureSize = buffer.context.$maxTextureSize;
        // if (width * canvasScaleX > maxTextureSize) {
        //     canvasScaleX *= maxTextureSize / (width * canvasScaleX);
        // }
        // if (height * canvasScaleY > maxTextureSize) {
        //     canvasScaleY *= maxTextureSize / (height * canvasScaleY);
        // }
        // width *= canvasScaleX;
        // height *= canvasScaleY;
        // let x = node.x * canvasScaleX;
        // let y = node.y * canvasScaleY;
        // if (node.$canvasScaleX != canvasScaleX || node.$canvasScaleY != canvasScaleY) {
        //     node.$canvasScaleX = canvasScaleX;
        //     node.$canvasScaleY = canvasScaleY;
        //     node.dirtyRender = true;
        // }


        if (!this.canvasRenderBuffer || !this.canvasRenderBuffer.context) {
          this.canvasRenderer = new egret.CanvasRenderer();
          this.canvasRenderBuffer = new miqgame.CanvasRenderBuffer(width, height);
        } else if (node.dirtyRender) {
          this.canvasRenderBuffer.resize(width, height);
        }

        if (!this.canvasRenderBuffer.context) {
          return;
        } // if (canvasScaleX != 1 || canvasScaleY != 1) {
        //     this.canvasRenderBuffer.context.setTransform(canvasScaleX, 0, 0, canvasScaleY, 0, 0);
        // }
        // if (x || y) {
        //     if (node.dirtyRender) {
        //         this.canvasRenderBuffer.context.setTransform(canvasScaleX, 0, 0, canvasScaleY, -x, -y);
        //     }
        //     buffer.transform(1, 0, 0, 1, x / canvasScaleX, y / canvasScaleY);
        // }
        // else if (canvasScaleX != 1 || canvasScaleY != 1) {
        //     this.canvasRenderBuffer.context.setTransform(canvasScaleX, 0, 0, canvasScaleY, 0, 0);
        // }


        if (node.dirtyRender) {
          var surface = this.canvasRenderBuffer.surface;
          this.canvasRenderer.renderText(node, this.canvasRenderBuffer.context); // 拷贝canvas到texture

          var texture = node.$texture;

          if (!texture) {
            texture = buffer.context.createTexture(surface);
            node.$texture = texture;
          } else {
            // 重新拷贝新的图像
            buffer.context.updateTexture(texture, surface);
          } // 保存材质尺寸


          node.$textureWidth = surface.width;
          node.$textureHeight = surface.height;
        }

        var textureWidth = node.$textureWidth;
        var textureHeight = node.$textureHeight;
        buffer.context.drawTexture(node.$texture, 0, 0, textureWidth, textureHeight, 0, 0, textureWidth, textureHeight, textureWidth, textureHeight); // if (x || y) {
        //     if (node.dirtyRender) {
        //         this.canvasRenderBuffer.context.setTransform(canvasScaleX, 0, 0, canvasScaleY, 0, 0);
        //     }
        //     buffer.transform(1, 0, 0, 1, -x / canvasScaleX, -y / canvasScaleY);
        // }

        node.dirtyRender = false;
      };
      /**
       * @private
       */


      WebGLRenderer.prototype.renderGraphics = function (node, buffer, forHitTest) {
        var width = node.width;
        var height = node.height;

        if (width <= 0 || height <= 0 || !width || !height || node.drawData.length == 0) {
          return;
        } // let canvasScaleX = sys.DisplayList.$canvasScaleX;
        // let canvasScaleY = sys.DisplayList.$canvasScaleY;
        // if (width * canvasScaleX < 1 || height * canvasScaleY < 1) {
        //     canvasScaleX = canvasScaleY = 1;
        // }
        // if (node.$canvasScaleX != canvasScaleX || node.$canvasScaleY != canvasScaleY) {
        //     node.$canvasScaleX = canvasScaleX;
        //     node.$canvasScaleY = canvasScaleY;
        //     node.dirtyRender = true;
        // }
        // //缩放叠加 width2 / width 填满整个区域
        // width = width * canvasScaleX;
        // height = height * canvasScaleY;


        var width2 = Math.ceil(width);
        var height2 = Math.ceil(height); // canvasScaleX *= width2 / width;
        // canvasScaleY *= height2 / height;

        width = width2;
        height = height2;

        if (!this.canvasRenderBuffer || !this.canvasRenderBuffer.context) {
          this.canvasRenderer = new egret.CanvasRenderer();
          this.canvasRenderBuffer = new miqgame.CanvasRenderBuffer(width, height);
        } else if (node.dirtyRender) {
          this.canvasRenderBuffer.resize(width, height);
        }

        if (!this.canvasRenderBuffer.context) {
          return;
        } // if (canvasScaleX != 1 || canvasScaleY != 1) {
        //     this.canvasRenderBuffer.context.setTransform(canvasScaleX, 0, 0, canvasScaleY, 0, 0);
        // }


        if (node.x || node.y) {
          if (node.dirtyRender || forHitTest) {
            this.canvasRenderBuffer.context.translate(-node.x, -node.y);
          }

          buffer.transform(1, 0, 0, 1, node.x, node.y);
        }

        var surface = this.canvasRenderBuffer.surface;

        if (forHitTest) {
          this.canvasRenderer.renderGraphics(node, this.canvasRenderBuffer.context, true);
          var texture = void 0;
          egret.WebGLUtils.deleteWebGLTexture(surface);
          texture = buffer.context.getWebGLTexture(surface);
          buffer.context.drawTexture(texture, 0, 0, width, height, 0, 0, width, height, surface.width, surface.height);
        } else {
          if (node.dirtyRender) {
            this.canvasRenderer.renderGraphics(node, this.canvasRenderBuffer.context); // 拷贝canvas到texture

            var texture = node.$texture;

            if (!texture) {
              texture = buffer.context.createTexture(surface);
              node.$texture = texture;
            } else {
              // 重新拷贝新的图像
              buffer.context.updateTexture(texture, surface);
            } // 保存材质尺寸


            node.$textureWidth = surface.width;
            node.$textureHeight = surface.height;
          }

          var textureWidth = node.$textureWidth;
          var textureHeight = node.$textureHeight;
          buffer.context.drawTexture(node.$texture, 0, 0, textureWidth, textureHeight, 0, 0, textureWidth, textureHeight, textureWidth, textureHeight);
        }

        if (node.x || node.y) {
          if (node.dirtyRender || forHitTest) {
            this.canvasRenderBuffer.context.translate(node.x, node.y);
          }

          buffer.transform(1, 0, 0, 1, -node.x, -node.y);
        }

        if (!forHitTest) {
          node.dirtyRender = false;
        }
      };

      WebGLRenderer.prototype.renderGroup = function (groupNode, buffer) {
        var m = groupNode.matrix;
        var savedMatrix;
        var offsetX;
        var offsetY;

        if (m) {
          savedMatrix = egret.Matrix.create();
          var curMatrix = buffer.globalMatrix;
          savedMatrix.a = curMatrix.a;
          savedMatrix.b = curMatrix.b;
          savedMatrix.c = curMatrix.c;
          savedMatrix.d = curMatrix.d;
          savedMatrix.tx = curMatrix.tx;
          savedMatrix.ty = curMatrix.ty;
          offsetX = buffer.$offsetX;
          offsetY = buffer.$offsetY;
          buffer.useOffset();
          buffer.transform(m.a, m.b, m.c, m.d, m.tx, m.ty);
        }

        var children = groupNode.drawData;
        var length = children.length;

        for (var i = 0; i < length; i++) {
          var node = children[i];
          this.renderNode(node, buffer, buffer.$offsetX, buffer.$offsetY);
        }

        if (m) {
          var matrix = buffer.globalMatrix;
          matrix.a = savedMatrix.a;
          matrix.b = savedMatrix.b;
          matrix.c = savedMatrix.c;
          matrix.d = savedMatrix.d;
          matrix.tx = savedMatrix.tx;
          matrix.ty = savedMatrix.ty;
          buffer.$offsetX = offsetX;
          buffer.$offsetY = offsetY;
          egret.Matrix.release(savedMatrix);
        }
      };
      /**
       * @private
       */


      WebGLRenderer.prototype.createRenderBuffer = function (width, height) {
        var buffer = renderBufferPool.pop();

        if (buffer) {
          buffer.resize(width, height);
        } else {
          buffer = new miqgame.WebGLRenderBuffer(width, height);
          buffer.$computeDrawCall = false;
        }

        return buffer;
      };

      return WebGLRenderer;
    }();

    miqgame.WebGLRenderer = WebGLRenderer;

    __reflect(WebGLRenderer.prototype, "egret.miqgame.WebGLRenderer", ["egret.sys.SystemRenderer"]);
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var WEBGL_ATTRIBUTE_TYPE;

    (function (WEBGL_ATTRIBUTE_TYPE) {
      WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
      WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
      WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
      WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["FLOAT"] = 5126] = "FLOAT";
      WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["BYTE"] = 65535] = "BYTE";
      WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
      WEBGL_ATTRIBUTE_TYPE[WEBGL_ATTRIBUTE_TYPE["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    })(WEBGL_ATTRIBUTE_TYPE = miqgame.WEBGL_ATTRIBUTE_TYPE || (miqgame.WEBGL_ATTRIBUTE_TYPE = {}));
    /**
     * @private
     */


    var EgretWebGLAttribute = function () {
      function EgretWebGLAttribute(gl, program, attributeData) {
        this.gl = gl;
        this.name = attributeData.name;
        this.type = attributeData.type;
        this.size = attributeData.size;
        this.location = gl.getAttribLocation(program, this.name);
        this.count = 0;
        this.initCount(gl);
        this.format = gl.FLOAT;
        this.initFormat(gl);
      }

      EgretWebGLAttribute.prototype.initCount = function (gl) {
        var type = this.type;

        switch (type) {
          case WEBGL_ATTRIBUTE_TYPE.FLOAT:
          case WEBGL_ATTRIBUTE_TYPE.BYTE:
          case WEBGL_ATTRIBUTE_TYPE.UNSIGNED_BYTE:
          case WEBGL_ATTRIBUTE_TYPE.UNSIGNED_SHORT:
            this.count = 1;
            break;

          case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC2:
            this.count = 2;
            break;

          case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC3:
            this.count = 3;
            break;

          case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC4:
            this.count = 4;
            break;
        }
      };

      EgretWebGLAttribute.prototype.initFormat = function (gl) {
        var type = this.type;

        switch (type) {
          case WEBGL_ATTRIBUTE_TYPE.FLOAT:
          case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC2:
          case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC3:
          case WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC4:
            this.format = gl.FLOAT;
            break;

          case WEBGL_ATTRIBUTE_TYPE.UNSIGNED_BYTE:
            this.format = gl.UNSIGNED_BYTE;
            break;

          case WEBGL_ATTRIBUTE_TYPE.UNSIGNED_SHORT:
            this.format = gl.UNSIGNED_SHORT;
            break;

          case WEBGL_ATTRIBUTE_TYPE.BYTE:
            this.format = gl.BYTE;
            break;
        }
      };

      return EgretWebGLAttribute;
    }();

    miqgame.EgretWebGLAttribute = EgretWebGLAttribute;

    __reflect(EgretWebGLAttribute.prototype, "egret.miqgame.EgretWebGLAttribute");
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    function loadShader(gl, type, source) {
      var shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

      if (!compiled) {
        console.log("shader not compiled!");
        console.log(gl.getShaderInfoLog(shader));
      }

      return shader;
    }

    function createWebGLProgram(gl, vertexShader, fragmentShader) {
      var program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      return program;
    }

    function extractAttributes(gl, program) {
      var attributes = {};
      var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

      for (var i = 0; i < totalAttributes; i++) {
        var attribData = gl.getActiveAttrib(program, i);
        var name_2 = attribData.name;
        var attribute = new miqgame.EgretWebGLAttribute(gl, program, attribData);
        attributes[name_2] = attribute;
      }

      return attributes;
    }

    function extractUniforms(gl, program) {
      var uniforms = {};
      var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

      for (var i = 0; i < totalUniforms; i++) {
        var uniformData = gl.getActiveUniform(program, i);
        var name_3 = uniformData.name;
        var uniform = new miqgame.EgretWebGLUniform(gl, program, uniformData);
        uniforms[name_3] = uniform;
      }

      return uniforms;
    }
    /**
     * @private
     */


    var EgretWebGLProgram = function () {
      function EgretWebGLProgram(gl, vertSource, fragSource) {
        this.vshaderSource = vertSource;
        this.fshaderSource = fragSource;
        this.vertexShader = loadShader(gl, gl.VERTEX_SHADER, this.vshaderSource);
        this.fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, this.fshaderSource);
        this.id = createWebGLProgram(gl, this.vertexShader, this.fragmentShader);
        this.uniforms = extractUniforms(gl, this.id);
        this.attributes = extractAttributes(gl, this.id);
      }
      /**
       * 获取所需的WebGL Program
       * @param key {string} 对于唯一的program程序，对应唯一的key
       */


      EgretWebGLProgram.getProgram = function (gl, vertSource, fragSource, key) {
        if (!this.programCache[key]) {
          this.programCache[key] = new EgretWebGLProgram(gl, vertSource, fragSource);
        }

        return this.programCache[key];
      };

      EgretWebGLProgram.deleteProgram = function (gl, vertSource, fragSource, key) {// TODO delete
      };

      EgretWebGLProgram.programCache = {};
      return EgretWebGLProgram;
    }();

    miqgame.EgretWebGLProgram = EgretWebGLProgram;

    __reflect(EgretWebGLProgram.prototype, "egret.miqgame.EgretWebGLProgram");
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {})); //////////////////////////////////////////////////////////////////////////////////////
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


(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var WEBGL_UNIFORM_TYPE;

    (function (WEBGL_UNIFORM_TYPE) {
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["INT_VEC2"] = 35667] = "INT_VEC2";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["INT_VEC3"] = 35668] = "INT_VEC3";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["INT_VEC4"] = 35669] = "INT_VEC4";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BOOL"] = 35670] = "BOOL";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["SAMPLER_CUBE"] = 35680] = "SAMPLER_CUBE";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["BYTE"] = 65535] = "BYTE";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["SHORT"] = 5122] = "SHORT";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["INT"] = 5124] = "INT";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
      WEBGL_UNIFORM_TYPE[WEBGL_UNIFORM_TYPE["FLOAT"] = 5126] = "FLOAT";
    })(WEBGL_UNIFORM_TYPE = miqgame.WEBGL_UNIFORM_TYPE || (miqgame.WEBGL_UNIFORM_TYPE = {}));
    /**
     * @private
     */


    var EgretWebGLUniform = function () {
      function EgretWebGLUniform(gl, program, uniformData) {
        this.gl = gl;
        this.name = uniformData.name;
        this.type = uniformData.type;
        this.size = uniformData.size;
        this.location = gl.getUniformLocation(program, this.name);
        this.setDefaultValue();
        this.generateSetValue();
        this.generateUpload();
      }

      EgretWebGLUniform.prototype.setDefaultValue = function () {
        var type = this.type;

        switch (type) {
          case WEBGL_UNIFORM_TYPE.FLOAT:
          case WEBGL_UNIFORM_TYPE.SAMPLER_2D:
          case WEBGL_UNIFORM_TYPE.SAMPLER_CUBE:
          case WEBGL_UNIFORM_TYPE.BOOL:
          case WEBGL_UNIFORM_TYPE.INT:
            this.value = 0;
            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_VEC2:
          case WEBGL_UNIFORM_TYPE.BOOL_VEC2:
          case WEBGL_UNIFORM_TYPE.INT_VEC2:
            this.value = [0, 0];
            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_VEC3:
          case WEBGL_UNIFORM_TYPE.BOOL_VEC3:
          case WEBGL_UNIFORM_TYPE.INT_VEC3:
            this.value = [0, 0, 0];
            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_VEC4:
          case WEBGL_UNIFORM_TYPE.BOOL_VEC4:
          case WEBGL_UNIFORM_TYPE.INT_VEC4:
            this.value = [0, 0, 0, 0];
            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_MAT2:
            this.value = new Float32Array([1, 0, 0, 1]);
            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_MAT3:
            this.value = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_MAT4:
            this.value = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
            break;
        }
      };

      EgretWebGLUniform.prototype.generateSetValue = function () {
        var type = this.type;

        switch (type) {
          case WEBGL_UNIFORM_TYPE.FLOAT:
          case WEBGL_UNIFORM_TYPE.SAMPLER_2D:
          case WEBGL_UNIFORM_TYPE.SAMPLER_CUBE:
          case WEBGL_UNIFORM_TYPE.BOOL:
          case WEBGL_UNIFORM_TYPE.INT:
            this.setValue = function (value) {
              var notEqual = this.value !== value;
              this.value = value;
              notEqual && this.upload();
            };

            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_VEC2:
          case WEBGL_UNIFORM_TYPE.BOOL_VEC2:
          case WEBGL_UNIFORM_TYPE.INT_VEC2:
            this.setValue = function (value) {
              var notEqual = this.value[0] !== value.x || this.value[1] !== value.y;
              this.value[0] = value.x;
              this.value[1] = value.y;
              notEqual && this.upload();
            };

            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_VEC3:
          case WEBGL_UNIFORM_TYPE.BOOL_VEC3:
          case WEBGL_UNIFORM_TYPE.INT_VEC3:
            this.setValue = function (value) {
              this.value[0] = value.x;
              this.value[1] = value.y;
              this.value[2] = value.z;
              this.upload();
            };

            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_VEC4:
          case WEBGL_UNIFORM_TYPE.BOOL_VEC4:
          case WEBGL_UNIFORM_TYPE.INT_VEC4:
            this.setValue = function (value) {
              this.value[0] = value.x;
              this.value[1] = value.y;
              this.value[2] = value.z;
              this.value[3] = value.w;
              this.upload();
            };

            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_MAT2:
          case WEBGL_UNIFORM_TYPE.FLOAT_MAT3:
          case WEBGL_UNIFORM_TYPE.FLOAT_MAT4:
            this.setValue = function (value) {
              this.value.set(value);
              this.upload();
            };

            break;
        }
      };

      EgretWebGLUniform.prototype.generateUpload = function () {
        var gl = this.gl;
        var type = this.type;
        var location = this.location;

        switch (type) {
          case WEBGL_UNIFORM_TYPE.FLOAT:
            this.upload = function () {
              var value = this.value;
              gl.uniform1f(location, value);
            };

            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_VEC2:
            this.upload = function () {
              var value = this.value;
              gl.uniform2f(location, value[0], value[1]);
            };

            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_VEC3:
            this.upload = function () {
              var value = this.value;
              gl.uniform3f(location, value[0], value[1], value[2]);
            };

            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_VEC4:
            this.upload = function () {
              var value = this.value;
              gl.uniform4f(location, value[0], value[1], value[2], value[3]);
            };

            break;

          case WEBGL_UNIFORM_TYPE.SAMPLER_2D:
          case WEBGL_UNIFORM_TYPE.SAMPLER_CUBE:
          case WEBGL_UNIFORM_TYPE.BOOL:
          case WEBGL_UNIFORM_TYPE.INT:
            this.upload = function () {
              var value = this.value;
              gl.uniform1i(location, value);
            };

            break;

          case WEBGL_UNIFORM_TYPE.BOOL_VEC2:
          case WEBGL_UNIFORM_TYPE.INT_VEC2:
            this.upload = function () {
              var value = this.value;
              gl.uniform2i(location, value[0], value[1]);
            };

            break;

          case WEBGL_UNIFORM_TYPE.BOOL_VEC3:
          case WEBGL_UNIFORM_TYPE.INT_VEC3:
            this.upload = function () {
              var value = this.value;
              gl.uniform3i(location, value[0], value[1], value[2]);
            };

            break;

          case WEBGL_UNIFORM_TYPE.BOOL_VEC4:
          case WEBGL_UNIFORM_TYPE.INT_VEC4:
            this.upload = function () {
              var value = this.value;
              gl.uniform4i(location, value[0], value[1], value[2], value[3]);
            };

            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_MAT2:
            this.upload = function () {
              var value = this.value;
              gl.uniformMatrix2fv(location, false, value);
            };

            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_MAT3:
            this.upload = function () {
              var value = this.value;
              gl.uniformMatrix3fv(location, false, value);
            };

            break;

          case WEBGL_UNIFORM_TYPE.FLOAT_MAT4:
            this.upload = function () {
              var value = this.value;
              gl.uniformMatrix4fv(location, false, value);
            };

            break;
        }
      };

      return EgretWebGLUniform;
    }();

    miqgame.EgretWebGLUniform = EgretWebGLUniform;

    __reflect(EgretWebGLUniform.prototype, "egret.miqgame.EgretWebGLUniform");
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {}));

(function (egret) {
  var miqgame;

  (function (miqgame) {
    /**
     * @private
     */
    var EgretShaderLib = function () {
      function EgretShaderLib() {}

      EgretShaderLib.blur_frag = "precision mediump float;\nuniform vec2 blur;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\nuniform vec2 uTextureSize;\nvoid main()\n{\n    const int sampleRadius = 5;\n    const int samples = sampleRadius * 2 + 1;\n    vec2 blurUv = blur / uTextureSize;\n    vec4 color = vec4(0, 0, 0, 0);\n    vec2 uv = vec2(0.0, 0.0);\n    blurUv /= float(sampleRadius);\n    for (int i = -sampleRadius; i <= sampleRadius; i++) {\n        uv.x = vTextureCoord.x + float(i) * blurUv.x;\n        uv.y = vTextureCoord.y + float(i) * blurUv.y;\n        color += texture2D(uSampler, uv);\n    }\n    color /= float(samples);\n    gl_FragColor = color;\n}";
      EgretShaderLib.colorTransform_frag = "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform mat4 matrix;\nuniform vec4 colorAdd;\nuniform sampler2D uSampler;\nvoid main(void) {\n    vec4 texColor = texture2D(uSampler, vTextureCoord);\n    if(texColor.a > 0.) {\n        texColor = vec4(texColor.rgb / texColor.a, texColor.a);\n    }\n    vec4 locColor = clamp(texColor * matrix + colorAdd, 0., 1.);\n    gl_FragColor = vColor * vec4(locColor.rgb * locColor.a, locColor.a);\n}";
      EgretShaderLib.default_vert = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
      EgretShaderLib.glow_frag = "precision mediump float;\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float dist;\nuniform float angle;\nuniform vec4 color;\nuniform float alpha;\nuniform float blurX;\nuniform float blurY;\nuniform float strength;\nuniform float inner;\nuniform float knockout;\nuniform float hideObject;\nuniform vec2 uTextureSize;\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\nvoid main(void) {\n    vec2 px = vec2(1.0 / uTextureSize.x, 1.0 / uTextureSize.y);\n    const float linearSamplingTimes = 7.0;\n    const float circleSamplingTimes = 12.0;\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float totalAlpha = 0.0;\n    float maxTotalAlpha = 0.0;\n    float curDistanceX = 0.0;\n    float curDistanceY = 0.0;\n    float offsetX = dist * cos(angle) * px.x;\n    float offsetY = dist * sin(angle) * px.y;\n    const float PI = 3.14159265358979323846264;\n    float cosAngle;\n    float sinAngle;\n    float offset = PI * 2.0 / circleSamplingTimes * random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    float stepX = blurX * px.x / linearSamplingTimes;\n    float stepY = blurY * px.y / linearSamplingTimes;\n    for (float a = 0.0; a <= PI * 2.0; a += PI * 2.0 / circleSamplingTimes) {\n        cosAngle = cos(a + offset);\n        sinAngle = sin(a + offset);\n        for (float i = 1.0; i <= linearSamplingTimes; i++) {\n            curDistanceX = i * stepX * cosAngle;\n            curDistanceY = i * stepY * sinAngle;\n            \n            curColor = texture2D(uSampler, vec2(vTextureCoord.x + curDistanceX - offsetX, vTextureCoord.y + curDistanceY + offsetY));\n            totalAlpha += (linearSamplingTimes - i) * curColor.a;\n            maxTotalAlpha += (linearSamplingTimes - i);\n        }\n    }\n    ownColor.a = max(ownColor.a, 0.0001);\n    ownColor.rgb = ownColor.rgb / ownColor.a;\n    float outerGlowAlpha = (totalAlpha / maxTotalAlpha) * strength * alpha * (1. - inner) * max(min(hideObject, knockout), 1. - ownColor.a);\n    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * strength * alpha * inner * ownColor.a;\n    ownColor.a = max(ownColor.a * knockout * (1. - hideObject), 0.0001);\n    vec3 mix1 = mix(ownColor.rgb, color.rgb, innerGlowAlpha / (innerGlowAlpha + ownColor.a));\n    vec3 mix2 = mix(mix1, color.rgb, outerGlowAlpha / (innerGlowAlpha + ownColor.a + outerGlowAlpha));\n    float resultAlpha = min(ownColor.a + outerGlowAlpha + innerGlowAlpha, 1.);\n    gl_FragColor = vec4(mix2 * resultAlpha, resultAlpha);\n}";
      EgretShaderLib.primitive_frag = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvoid main(void) {\n    gl_FragColor = vColor;\n}";
      EgretShaderLib.texture_frag = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;\n}";
      return EgretShaderLib;
    }();

    miqgame.EgretShaderLib = EgretShaderLib;

    __reflect(EgretShaderLib.prototype, "egret.miqgame.EgretShaderLib");
  })(miqgame = egret.miqgame || (egret.miqgame = {}));
})(egret || (egret = {}));

;

/***/ }),

/***/ "./src/js/assetsmanager.min.js":
/*!*************************************!*\
  !*** ./src/js/assetsmanager.min.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var egret = window.egret;

var __reflect = void 0 && (void 0).__reflect || function (e, r, t) {
  e.__class__ = r, t ? t.push(r) : t = [r], e.__types__ = e.__types__ ? t.concat(e.__types__) : t;
},
    __extends = void 0 && (void 0).__extends || function (e, r) {
  function t() {
    this.constructor = e;
  }

  for (var o in r) {
    r.hasOwnProperty(o) && (e[o] = r[o]);
  }

  t.prototype = r.prototype, e.prototype = new t();
},
    __decorate = void 0 && (void 0).__decorate || function (e, r, t, o) {
  var n,
      i = arguments.length,
      s = 3 > i ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, t) : o;
  if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, r, t, o);else for (var a = e.length - 1; a >= 0; a--) {
    (n = e[a]) && (s = (3 > i ? n(s) : i > 3 ? n(r, t, s) : n(r, t)) || s);
  }
  return i > 3 && s && Object.defineProperty(r, t, s), s;
},
    RES;

!function (e) {}(RES || (RES = {}));
var RES;
!function (e) {
  var r = function () {
    function r() {
      this.groupTotalDic = {}, this.numLoadedDic = {}, this.groupErrorDic = {}, this.retryTimesDic = {}, this.maxRetryTimes = 3, this.reporterDic = {}, this.dispatcherDic = {}, this.failedList = new Array(), this.loadItemErrorDic = {}, this.errorDic = {}, this.itemListPriorityDic = {}, this.itemLoadDic = {}, this.promiseHash = {}, this.lazyLoadList = new Array(), this.loadingCount = 0, this.thread = 4;
    }

    return r.prototype.pushResItem = function (e) {
      if (this.promiseHash[e.root + e.name]) return this.promiseHash[e.root + e.name];
      this.lazyLoadList.push(e), this.itemListPriorityDic[Number.NEGATIVE_INFINITY] = this.lazyLoadList, this.updatelistPriority(this.lazyLoadList, Number.NEGATIVE_INFINITY);
      var r = new egret.EventDispatcher();
      this.dispatcherDic[e.root + e.name] = r;
      var t = new Promise(function (e, t) {
        r.addEventListener("complete", function (r) {
          e(r.data);
        }, null), r.addEventListener("error", function (e) {
          t(e.data);
        }, null);
      });
      return this.promiseHash[e.root + e.name] = t, this.loadNextResource(), t;
    }, r.prototype.pushResGroup = function (e, r, t, o) {
      if (this.promiseHash[r]) return this.promiseHash[r];

      for (var n = e.length, i = 0; n > i; i++) {
        var s = e[i];
        s.groupNames || (s.groupNames = []), s.groupNames.push(r);
      }

      this.groupTotalDic[r] = e.length, this.numLoadedDic[r] = 0, this.updatelistPriority(e, t), this.reporterDic[r] = o;
      var a = new egret.EventDispatcher();
      this.dispatcherDic[r] = a;
      var u = new Promise(function (e, r) {
        a.addEventListener("complete", e, null), a.addEventListener("error", function (e) {
          r(e.data);
        }, null);
      });
      return this.promiseHash[r] = u, this.loadNextResource(), u;
    }, r.prototype.updatelistPriority = function (e, r) {
      void 0 == this.itemListPriorityDic[r] && (this.itemListPriorityDic[r] = []);

      for (var t = 0, o = e; t < o.length; t++) {
        var n = o[t];

        if (1 != this.itemLoadDic[n.root + n.name]) {
          var i = this.findPriorityInDic(n);
          if (void 0 == i) this.itemListPriorityDic[r].push(n);else if (r > i) {
            this.itemListPriorityDic[r].push(n);
            var s = this.itemListPriorityDic[i].indexOf(n);
            this.itemListPriorityDic[i].splice(s, 1);
          }
        }
      }
    }, r.prototype.findPriorityInDic = function (e) {
      for (var r in this.itemListPriorityDic) {
        if (this.itemListPriorityDic[r].indexOf(e) > -1) return parseInt(r);
      }
    }, r.prototype.loadNextResource = function () {
      for (; this.loadingCount < this.thread;) {
        var e = this.loadSingleResource();
        if (!e) break;
      }
    }, r.prototype.loadSingleResource = function () {
      var r = this,
          t = this.getOneResourceInfoInGroup();
      return t ? (this.itemLoadDic[t.root + t.name] = 1, this.loadingCount++, this.loadResource(t).then(function (o) {
        if (r.loadingCount--, delete r.itemLoadDic[t.root + t.name], e.host.save(t, o), r.promiseHash[t.root + t.name]) {
          var n = r.deleteDispatcher(t.root + t.name);
          n.dispatchEventWith("complete", !1, o);
        }

        var i = t.groupNames;

        if (i) {
          delete t.groupNames;

          for (var s = 0, a = i; s < a.length; s++) {
            var u = a[s];
            r.setGroupProgress(u, t) && r.loadGroupEnd(u);
          }
        }

        r.loadNextResource();
      })["catch"](function (o) {
        if (!o) throw t.name + " load fail";
        if (!o.__resource_manager_error__) throw o;
        delete r.itemLoadDic[t.root + t.name], r.loadingCount--, delete e.host.state[t.root + t.name];
        var n = r.retryTimesDic[t.name] || 1;
        if (!(n > r.maxRetryTimes)) return r.retryTimesDic[t.name] = n + 1, r.failedList.push(t), void r.loadNextResource();

        if (delete r.retryTimesDic[t.name], r.promiseHash[t.root + t.name]) {
          var i = r.deleteDispatcher(t.root + t.name);
          i.dispatchEventWith("error", !1, {
            r: t,
            error: o
          });
        }

        var s = t.groupNames;

        if (s) {
          delete t.groupNames;

          for (var a = 0, u = s; a < u.length; a++) {
            var c = u[a];
            r.loadItemErrorDic[c] || (r.loadItemErrorDic[c] = []), -1 == r.loadItemErrorDic[c].indexOf(t) && r.loadItemErrorDic[c].push(t), r.groupErrorDic[c] = !0, r.setGroupProgress(c, t) ? r.loadGroupEnd(c, o) : r.errorDic[c] = o;
          }
        }

        r.loadNextResource();
      }), !0) : !1;
    }, r.prototype.getOneResourceInfoInGroup = function () {
      if (this.failedList.length > 0) return this.failedList.shift();
      var e = Number.NEGATIVE_INFINITY;

      for (var r in this.itemListPriorityDic) {
        e = Math.max(e, r);
      }

      var t = this.itemListPriorityDic[e];
      if (t) return 0 == t.length ? (delete this.itemListPriorityDic[e], this.getOneResourceInfoInGroup()) : t.shift();
    }, r.prototype.setGroupProgress = function (e, r) {
      var t = this.reporterDic[e];
      this.numLoadedDic[e]++;
      var o = this.numLoadedDic[e],
          n = this.groupTotalDic[e];
      return t && t.onProgress && t.onProgress(o, n, r), o == n;
    }, r.prototype.loadGroupEnd = function (e, r) {
      delete this.groupTotalDic[e], delete this.numLoadedDic[e], delete this.reporterDic[e];
      var t = this.deleteDispatcher(e);

      if (r) {
        delete this.groupErrorDic[e];
        var o = this.loadItemErrorDic[e];
        delete this.loadItemErrorDic[e], t.dispatchEventWith("error", !1, {
          itemList: o,
          lastError: r
        });
      } else {
        var n = this.groupErrorDic[e];

        if (delete this.groupErrorDic[e], n) {
          var o = this.loadItemErrorDic[e];
          delete this.loadItemErrorDic[e];
          var i = this.errorDic[e];
          delete this.errorDic[e], t.dispatchEventWith("error", !1, {
            itemList: o,
            error: i
          });
        } else t.dispatchEventWith("complete");
      }
    }, r.prototype.deleteDispatcher = function (e) {
      delete this.promiseHash[e];
      var r = this.dispatcherDic[e];
      return delete this.dispatcherDic[e], r;
    }, r.prototype.loadResource = function (r, t) {
      if (!t) {
        if (1 == e.FEATURE_FLAG.FIX_DUPLICATE_LOAD) {
          var o = e.host.state[r.root + r.name];
          if (2 == o) return Promise.resolve(e.host.get(r));
          if (1 == o) return r.promise;
        }

        t = e.processor.isSupport(r);
      }

      if (!t) throw new e.ResourceManagerError(2001, r.name, r.type);
      e.host.state[r.root + r.name] = 1;
      var n = t.onLoadStart(e.host, r);
      return r.promise = n, n;
    }, r.prototype.unloadResource = function (r) {
      var t = e.host.get(r);
      if (!t) return console.warn("尝试释放不存在的资源:", r.name), !1;
      var o = e.processor.isSupport(r);
      return o ? (o.onRemoveStart(e.host, r), e.host.remove(r), 1 == r.extra && e.config.removeResourceData(r), !0) : !0;
    }, r;
  }();

  e.ResourceLoader = r, __reflect(r.prototype, "RES.ResourceLoader");
}(RES || (RES = {}));
var RES;
!function (e) {
  e.checkNull = function (e, r, t) {
    var o = t.value;

    t.value = function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }

      return e[0] ? o.apply(this, e) : (console.warn("方法" + r + "的参数不能为null"), null);
    };
  }, e.FEATURE_FLAG = {
    FIX_DUPLICATE_LOAD: 1
  };
  var r;
  !function (e) {
    function r(e) {
      t = e;
    }

    var t = "warning";
    e.setUpgradeGuideLevel = r;
  }(r = e.upgrade || (e.upgrade = {}));
}(RES || (RES = {}));
var RES;
!function (e) {
  function r(r) {
    var t = e.config.config.fileSystem.getFile(r);
    return t || (r = e.resourceNameSelector(r), t = e.config.config.fileSystem.getFile(r)), t;
  }

  function t(e, r) {
    var t;
    t = e.indexOf(".json") >= 0 ? "legacyResourceConfig" : "resourceConfig", o = {
      type: t,
      root: r,
      url: e,
      name: e
    };
  }

  e.resourceNameSelector = function (e) {
    return e;
  }, e.getResourceInfo = r;
  var o;
  e.setConfigURL = t;

  var n = function () {
    function t() {}

    return t.prototype.init = function () {
      return this.config || (this.config = {
        alias: {},
        groups: {},
        resourceRoot: o.root,
        mergeSelector: null,
        fileSystem: null,
        loadGroup: []
      }), e.queue.pushResItem(o)["catch"](function (r) {
        return e.isCompatible || r.__resource_manager_error__ || (r.error ? console.error(r.error.stack) : console.error(r.stack), r = new e.ResourceManagerError(1002)), e.host.remove(o), Promise.reject(r);
      });
    }, t.prototype.getGroupByName = function (r) {
      var t = this.config.groups[r],
          o = [];
      if (!t) return o;

      for (var n = 0, i = t; n < i.length; n++) {
        var s = i[n],
            a = void 0;

        if (a = e.config.getResourceWithSubkey(s), null != a) {
          var u = a.r,
              c = a.key;
          if (null == u) throw new e.ResourceManagerError(2005, c);
          -1 == o.indexOf(u) && o.push(u);
        }
      }

      return o;
    }, t.prototype.__temp__get__type__via__url = function (r) {
      var t = this.config.alias[r];

      if (t || (t = r), e.typeSelector) {
        var o = e.typeSelector(t);
        if (!o) throw new e.ResourceManagerError(2004, t);
        return o;
      }

      return console.warn("RES.mapConfig 并未设置 typeSelector"), "unknown";
    }, t.prototype.getResourceWithSubkey = function (e) {
      e = this.getKeyByAlias(e);
      var r = e.indexOf("#"),
          t = "";
      r >= 0 && (t = e.substr(r + 1), e = e.substr(0, r));
      var o = this.getResource(e);
      return o ? {
        r: o,
        key: e,
        subkey: t
      } : null;
    }, t.prototype.getKeyByAlias = function (e) {
      return this.config.alias[e] ? this.config.alias[e] : e;
    }, t.prototype.getResource = function (e) {
      var t = this.config.alias[e];
      t || (t = e);
      var o = r(t);
      return o ? o : null;
    }, t.prototype.createGroup = function (e, r, t) {
      if (void 0 === t && (t = !1), !t && this.config.groups[e] || !r || 0 == r.length) return !1;

      for (var o = [], n = 0, i = r; n < i.length; n++) {
        var s = i[n];

        if (this.config.groups[s]) {
          var a = this.config.groups[s];
          o = o.concat(a);
        } else o.push(s);
      }

      return this.config.groups[e] = o, !0;
    }, t.prototype.addSubkey = function (e, r) {
      this.addAlias(e, r + "#" + e);
    }, t.prototype.addAlias = function (e, r) {
      this.config.alias[r] && (r = this.config.alias[r]), this.config.alias[e] = r;
    }, t.prototype.addResourceData = function (r) {
      e.hasRes(r.name) || (r.type || (r.type = this.__temp__get__type__via__url(r.url)), e.config.config.fileSystem.addFile(r));
    }, t.prototype.removeResourceData = function (r) {
      e.hasRes(r.name) && (e.config.config.fileSystem.removeFile(r.url), this.config.alias[r.name] && delete this.config.alias[r.name]);
    }, t;
  }();

  e.ResourceConfig = n, __reflect(n.prototype, "RES.ResourceConfig");
}(RES || (RES = {}));
var RES;
!function (e) {
  function r(r) {
    return e.path.basename(r).split(".").join("_");
  }

  function t(r) {
    var t,
        o = r.substr(r.lastIndexOf(".") + 1);

    switch (o) {
      case e.ResourceItem.TYPE_XML:
      case e.ResourceItem.TYPE_JSON:
      case e.ResourceItem.TYPE_SHEET:
        t = o;
        break;

      case "png":
      case "jpg":
      case "gif":
      case "jpeg":
      case "bmp":
        t = e.ResourceItem.TYPE_IMAGE;
        break;

      case "fnt":
        t = e.ResourceItem.TYPE_FONT;
        break;

      case "txt":
        t = e.ResourceItem.TYPE_TEXT;
        break;

      case "mp3":
      case "ogg":
      case "mpeg":
      case "wav":
      case "m4a":
      case "mp4":
      case "aiff":
      case "wma":
      case "mid":
        t = e.ResourceItem.TYPE_SOUND;
        break;

      case "mergeJson":
      case "zip":
      case "pvr":
        t = o;
        break;

      default:
        t = e.ResourceItem.TYPE_BIN;
    }

    return t;
  }

  function o(r, t) {
    throw new e.ResourceManagerError(2002);
  }

  function n(r) {
    e.isCompatible = r;
  }

  function i(r, t) {
    if (t.indexOf("://") >= 0) {
      var o = t.split("://");
      t = o[0] + "://" + e.path.normalize(o[1] + "/"), r = r.replace(t, "");
    } else t = e.path.normalize(t + "/"), r = r.replace(t, "");

    return e.setConfigURL(r, t), P || (P = new D()), s(P.loadConfig());
  }

  function s(r) {
    return e.isCompatible ? void r["catch"](function (e) {}).then() : r;
  }

  function a(e, r, t) {
    return void 0 === r && (r = 0), s(P.loadGroup(e, r, t));
  }

  function u(e) {
    return P.isGroupLoaded(e);
  }

  function c(r) {
    return P.getGroupByName(r).map(function (r) {
      return e.ResourceItem.convertToResItem(r);
    });
  }

  function l(e, r, t) {
    return void 0 === t && (t = !1), P.createGroup(e, r, t);
  }

  function f(e) {
    return P.hasRes(e);
  }

  function p(e) {
    return P.getRes(e);
  }

  function g(e, r, t) {
    return s(P.getResAsync.apply(P, arguments));
  }

  function d(e, r, t, o) {
    return void 0 === o && (o = ""), s(P.getResByUrl(e, r, t, o));
  }

  function h(e, r) {
    return P.destroyRes(e, r);
  }

  function v(e) {
    P || (P = new D()), P.setMaxLoadingThread(e);
  }

  function m(e) {
    P.setMaxRetryTimes(e);
  }

  function R(e, r, t, o, n) {
    void 0 === o && (o = !1), void 0 === n && (n = 0), P || (P = new D()), P.addEventListener(e, r, t, o, n);
  }

  function E(e, r, t, o) {
    void 0 === o && (o = !1), P.removeEventListener(e, r, t, o);
  }

  function y(e) {
    P.addResourceData(e);
  }

  function _() {
    return P || (P = new D()), P.vcs;
  }

  function S(e) {
    P || (P = new D()), P.registerVersionController(e);
  }

  function L(e) {
    return P.vcs ? P.vcs.getVirtualUrl(e) : e;
  }

  e.nameSelector = r, e.typeSelector = t, e.registerAnalyzer = o, e.setIsCompatible = n, e.isCompatible = !1, e.loadConfig = i, e.loadGroup = a, e.isGroupLoaded = u, e.getGroupByName = c, e.createGroup = l, e.hasRes = f, e.getRes = p, e.getResAsync = g, e.getResByUrl = d, e.destroyRes = h, e.setMaxLoadingThread = v, e.setMaxRetryTimes = m, e.addEventListener = R, e.removeEventListener = E, e.$addResourceData = y, e.getVersionController = _, e.registerVersionController = S, e.getVirtualUrl = L;

  var D = function (r) {
    function t() {
      var t = r.call(this) || this;
      return t.isVcsInit = !1, t.normalLoadConfig = function () {
        return e.config.init().then(function (r) {
          e.ResourceEvent.dispatchResourceEvent(t, e.ResourceEvent.CONFIG_COMPLETE);
        }, function (r) {
          return e.ResourceEvent.dispatchResourceEvent(t, e.ResourceEvent.CONFIG_LOAD_ERROR), Promise.reject(r);
        });
      }, e.VersionController && (t.vcs = new e.VersionController()), t;
    }

    return __extends(t, r), t.prototype.registerVersionController = function (e) {
      this.vcs = e, this.isVcsInit = !1;
    }, t.prototype.loadConfig = function () {
      var e = this;
      return !this.isVcsInit && this.vcs ? (this.isVcsInit = !0, this.vcs.init().then(function () {
        return e.normalLoadConfig();
      })) : this.normalLoadConfig();
    }, t.prototype.isGroupLoaded = function (r) {
      var t = e.config.getGroupByName(r);
      return t.every(function (r) {
        return null != e.host.get(r);
      });
    }, t.prototype.getGroupByName = function (r) {
      return e.config.getGroupByName(r);
    }, t.prototype.loadGroup = function (r, t, o) {
      var n = this;
      void 0 === t && (t = 0);
      var i = {
        onProgress: function onProgress(t, i, s) {
          o && o.onProgress && o.onProgress(t, i, s), e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.GROUP_PROGRESS, r, s, t, i);
        }
      };
      return this._loadGroup(r, t, i).then(function (t) {
        -1 == e.config.config.loadGroup.indexOf(r) && e.config.config.loadGroup.push(r), e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.GROUP_COMPLETE, r);
      }, function (t) {
        if (-1 == e.config.config.loadGroup.indexOf(r) && e.config.config.loadGroup.push(r), t.itemList) for (var o = t.itemList, i = o.length, s = 0; i > s; s++) {
          var a = o[s];
          delete a.promise, e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.ITEM_LOAD_ERROR, r, a);
        }
        return e.isCompatible && console.warn(t.error.message), e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.GROUP_LOAD_ERROR, r), Promise.reject(t.error);
      });
    }, t.prototype._loadGroup = function (r, t, o) {
      void 0 === t && (t = 0);
      var n = e.config.getGroupByName(r);
      return 0 == n.length ? new Promise(function (t, o) {
        o({
          error: new e.ResourceManagerError(2005, r)
        });
      }) : e.queue.pushResGroup(n, r, t, o);
    }, t.prototype.createGroup = function (r, t, o) {
      return void 0 === o && (o = !1), e.config.createGroup(r, t, o);
    }, t.prototype.hasRes = function (r) {
      return null != e.config.getResourceWithSubkey(r);
    }, t.prototype.getRes = function (r) {
      var t = e.config.getResourceWithSubkey(r);

      if (t) {
        var o = t.r,
            n = t.key,
            i = t.subkey,
            s = e.processor.isSupport(o);
        return s && s.getData && i ? s.getData(e.host, o, n, i) : e.host.get(o);
      }

      return null;
    }, t.prototype.getResAsync = function (r, t, o) {
      var n = this,
          i = r,
          s = e.config.getResourceWithSubkey(r);
      if (null == s) return t && t.call(o, null, i), Promise.reject(new e.ResourceManagerError(2006, r));
      var a = s.r,
          u = s.subkey;
      return e.queue.pushResItem(a).then(function (n) {
        e.host.save(a, n);
        var s = e.processor.isSupport(a);
        return s && s.getData && u && (n = s.getData(e.host, a, r, u)), t && t.call(o, n, i), n;
      }, function (r) {
        return e.host.remove(a), e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.ITEM_LOAD_ERROR, "", a), t ? (t.call(o, null, i), Promise.reject(null)) : Promise.reject(r);
      });
    }, t.prototype.getResByUrl = function (r, t, o, n) {
      var i = this;
      void 0 === n && (n = "");
      var s = e.config.getResource(r);
      if (!s && (n || (n = e.config.__temp__get__type__via__url(r)), s = {
        name: r,
        url: r,
        type: n,
        root: "",
        extra: 1
      }, e.config.addResourceData(s), s = e.config.getResource(r), !s)) throw "never";
      return e.queue.pushResItem(s).then(function (r) {
        return e.host.save(s, r), t && s && t.call(o, r, s.url), r;
      }, function (n) {
        return e.host.remove(s), e.ResourceEvent.dispatchResourceEvent(i, e.ResourceEvent.ITEM_LOAD_ERROR, "", s), t ? (t.call(o, null, r), Promise.reject(null)) : Promise.reject(n);
      });
    }, t.prototype.destroyRes = function (r, t) {
      void 0 === t && (t = !0);
      var o = e.config.getGroupByName(r);

      if (o && o.length > 0) {
        var n = e.config.config.loadGroup.indexOf(r);
        if (-1 == n) return !1;

        if (t || 1 == e.config.config.loadGroup.length && e.config.config.loadGroup[0] == r) {
          for (var i = 0, s = o; i < s.length; i++) {
            var a = s[i];
            e.queue.unloadResource(a);
          }

          e.config.config.loadGroup.splice(n, 1);
        } else {
          for (var u = {}, c = 0, l = e.config.config.loadGroup; c < l.length; c++) {
            var f = l[c];

            for (var p in e.config.config.groups[f]) {
              var g = e.config.config.groups[f][p];
              u[g] ? u[g]++ : u[g] = 1;
            }
          }

          for (var d = 0, h = o; d < h.length; d++) {
            var a = h[d];
            u[a.name] && 1 == u[a.name] && e.queue.unloadResource(a);
          }

          e.config.config.loadGroup.splice(n, 1);
        }

        return !0;
      }

      var a = e.config.getResource(r);
      return a ? e.queue.unloadResource(a) : (console.warn("在内存" + r + "资源不存在"), !1);
    }, t.prototype.setMaxLoadingThread = function (r) {
      1 > r && (r = 1), e.queue.thread = r;
    }, t.prototype.setMaxRetryTimes = function (r) {
      r = Math.max(r, 0), e.queue.maxRetryTimes = r;
    }, t.prototype.addResourceData = function (r) {
      r.root = "", e.config.addResourceData(r);
    }, __decorate([e.checkNull], t.prototype, "hasRes", null), __decorate([e.checkNull], t.prototype, "getRes", null), __decorate([e.checkNull], t.prototype, "getResAsync", null), __decorate([e.checkNull], t.prototype, "getResByUrl", null), t;
  }(egret.EventDispatcher);

  e.Resource = D, __reflect(D.prototype, "RES.Resource");
  var P;
}(RES || (RES = {}));
var RES;
!function (e) {
  var r;
  !function (e) {
    function r(e) {
      var r = e.split("/");
      return r.filter(function (e, t) {
        return !!e || t == r.length - 1;
      }).join("/");
    }

    function t(e) {
      return e.substr(e.lastIndexOf("/") + 1);
    }

    function o(e) {
      return e.substr(0, e.lastIndexOf("/"));
    }

    e.normalize = r, e.basename = t, e.dirname = o;
  }(r = e.path || (e.path = {}));
}(RES || (RES = {}));
var RES;
!function (e) {
  function r() {
    e.config.config.fileSystem.profile(), console.log(t);
    var r = 0;

    for (var o in t) {
      var n = t[o];
      n instanceof egret.Texture && (r += n.$bitmapWidth * n.$bitmapHeight * 4);
    }

    console.log("gpu size : " + (r / 1024).toFixed(3) + "kb");
  }

  var t = {};
  e.profile = r, e.host = {
    state: {},

    get resourceConfig() {
      return e.config;
    },

    load: function load(r, t) {
      var o = "string" == typeof t ? e.processor._map[t] : t;
      return e.queue.loadResource(r, o);
    },
    unload: function unload(r) {
      return e.queue.unloadResource(r);
    },
    save: function save(r, o) {
      e.host.state[r.root + r.name] = 2, delete r.promise, t[r.root + r.name] = o;
    },
    get: function get(e) {
      return t[e.root + e.name];
    },
    remove: function remove(r) {
      delete e.host.state[r.root + r.name], delete t[r.root + r.name];
    }
  }, e.config = new e.ResourceConfig(), e.queue = new e.ResourceLoader();

  var o = function (e) {
    function r(t, o, n) {
      var i = e.call(this) || this;
      return i.__resource_manager_error__ = !0, i.name = t.toString(), i.message = r.errorMessage[t].replace("{0}", o).replace("{1}", n), i;
    }

    return __extends(r, e), r.errorMessage = {
      1001: "文件加载失败:{0}",
      1002: "ResourceManager 初始化失败：配置文件加载失败",
      2001: "{0}解析失败,不支持指定解析类型:'{1}'，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",
      2002: "Analyzer 相关API 在 ResourceManager 中不再支持，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",
      2003: "{0}解析失败,错误原因:{1}",
      2004: "无法找到文件类型:{0}",
      2005: 'RES加载了不存在或空的资源组:"{0}"',
      2006: "资源配置文件中无法找到特定的资源:{0}"
    }, r;
  }(Error);

  e.ResourceManagerError = o, __reflect(o.prototype, "RES.ResourceManagerError");
}(RES || (RES = {}));
var RES;
!function (e) {
  var r;
  !function (r) {
    function t(e) {
      return r._map[e.type];
    }

    function o(e, t) {
      r._map[e] = t;
    }

    function n(r, t) {
      var o = this;
      return new Promise(function (n, i) {
        var s = function s() {
          var e = r.data ? r.data : r.response;
          n(e);
        },
            a = function a() {
          var r = new e.ResourceManagerError(1001, t.url);
          i(r);
        };

        r.addEventListener(egret.Event.COMPLETE, s, o), r.addEventListener(egret.IOErrorEvent.IO_ERROR, a, o);
      });
    }

    function i(e, r) {
      if (-1 != r.indexOf("://")) return r;
      e = e.split("\\").join("/");
      var t = e.match(/#.*|\?.*/),
          o = "";
      t && (o = t[0]);
      var n = e.lastIndexOf("/");
      return e = -1 != n ? e.substring(0, n + 1) + r : r, e + o;
    }

    r.isSupport = t, r.map = o, r.getRelativePath = i, r.ImageProcessor = {
      onLoadStart: function onLoadStart(r, t) {
        var o = new egret.ImageLoader();
        return o.load(e.getVirtualUrl(t.root + t.url)), n(o, t).then(function (e) {
          var o = new egret.Texture();

          o._setBitmapData(e);

          var n = r.resourceConfig.getResource(t.name);

          if (n && n.scale9grid) {
            var i = n.scale9grid.split(",");
            o.scale9Grid = new egret.Rectangle(parseInt(i[0]), parseInt(i[1]), parseInt(i[2]), parseInt(i[3]));
          }

          return o;
        });
      },
      onRemoveStart: function onRemoveStart(e, r) {
        var t = e.get(r);
        t.dispose();
      }
    }, r.BinaryProcessor = {
      onLoadStart: function onLoadStart(r, t) {
        var o = new egret.HttpRequest();
        return o.responseType = egret.HttpResponseType.ARRAY_BUFFER, o.open(e.getVirtualUrl(t.root + t.url), "get"), o.send(), n(o, t);
      },
      onRemoveStart: function onRemoveStart(e, r) {}
    }, r.TextProcessor = {
      onLoadStart: function onLoadStart(r, t) {
        var o = new egret.HttpRequest();
        return o.responseType = egret.HttpResponseType.TEXT, o.open(e.getVirtualUrl(t.root + t.url), "get"), o.send(), n(o, t);
      },
      onRemoveStart: function onRemoveStart(e, r) {
        return !0;
      }
    }, r.JsonProcessor = {
      onLoadStart: function onLoadStart(e, r) {
        return e.load(r, "text").then(function (e) {
          var r = JSON.parse(e);
          return r;
        });
      },
      onRemoveStart: function onRemoveStart(e, r) {}
    }, r.XMLProcessor = {
      onLoadStart: function onLoadStart(e, r) {
        return e.load(r, "text").then(function (e) {
          var r = egret.XML.parse(e);
          return r;
        });
      },
      onRemoveStart: function onRemoveStart(e, r) {
        return !0;
      }
    }, r.CommonJSProcessor = {
      onLoadStart: function onLoadStart(r, t) {
        return r.load(t, "text").then(function (r) {
          var o = new Function("require", "exports", r),
              n = function n() {},
              i = {};

          try {
            o(n, i);
          } catch (s) {
            throw new e.ResourceManagerError(2003, t.name, s.message);
          }

          return i;
        });
      },
      onRemoveStart: function onRemoveStart(e, r) {}
    }, r.SheetProcessor = {
      onLoadStart: function onLoadStart(r, t) {
        return r.load(t, "json").then(function (o) {
          var n = r.resourceConfig.getResource(e.nameSelector(o.file));

          if (!n) {
            var s = i(t.url, o.file);
            n = {
              name: s,
              url: s,
              type: "image",
              root: t.root
            };
          }

          return r.load(n).then(function (e) {
            var t = o.frames,
                i = new egret.SpriteSheet(e);
            i.$resourceInfo = n;

            for (var s in t) {
              var a = t[s],
                  u = i.createTexture(s, a.x, a.y, a.w, a.h, a.offX, a.offY, a.sourceW, a.sourceH);

              if (a.scale9grid) {
                var c = a.scale9grid,
                    l = c.split(",");
                u.scale9Grid = new egret.Rectangle(parseInt(l[0]), parseInt(l[1]), parseInt(l[2]), parseInt(l[3]));
              }
            }

            return r.save(n, e), i;
          }, function (e) {
            throw r.remove(n), e;
          });
        });
      },
      getData: function getData(e, r, t, o) {
        var n = e.get(r);
        return n ? n.getTexture(o) : null;
      },
      onRemoveStart: function onRemoveStart(e, r) {
        var t = e.get(r),
            o = t.$resourceInfo;
        t.dispose(), e.unload(o);
      }
    };

    var s = function s(e, r) {
      var t = "",
          o = r.split("\n"),
          n = o[2],
          i = n.indexOf('file="');
      -1 != i && (n = n.substring(i + 6), i = n.indexOf('"'), t = n.substring(0, i)), e = e.split("\\").join("/");
      var i = e.lastIndexOf("/");
      return e = -1 != i ? e.substring(0, i + 1) + t : t;
    };

    r.FontProcessor = {
      onLoadStart: function onLoadStart(r, t) {
        return r.load(t, "text").then(function (o) {
          var n;

          try {
            n = JSON.parse(o);
          } catch (a) {
            n = o;
          }

          var u;
          u = "string" == typeof n ? s(t.url, n) : i(t.url, n.file);
          var c = r.resourceConfig.getResource(e.nameSelector(u));
          return c || (c = {
            name: u,
            url: u,
            type: "image",
            root: t.root
          }), r.load(c).then(function (e) {
            var t = new egret.BitmapFont(e, n);
            return t.$resourceInfo = c, r.save(c, e), t;
          }, function (e) {
            throw r.remove(c), e;
          });
        });
      },
      onRemoveStart: function onRemoveStart(e, r) {
        var t = e.get(r),
            o = t.$resourceInfo;
        e.unload(o);
      }
    }, r.SoundProcessor = {
      onLoadStart: function onLoadStart(r, t) {
        var o = new egret.Sound();
        return o.load(e.getVirtualUrl(t.root + t.url)), n(o, t).then(function () {
          return o;
        });
      },
      onRemoveStart: function onRemoveStart(e, r) {}
    }, r.MovieClipProcessor = {
      onLoadStart: function onLoadStart(r, t) {
        var o, n;
        return r.load(t, "json").then(function (i) {
          o = i;
          var s = t.name,
              a = s.substring(0, s.lastIndexOf(".")) + ".png";
          if (n = r.resourceConfig.getResource(a), !n) throw new e.ResourceManagerError(1001, a);
          return r.load(n);
        }).then(function (e) {
          r.save(n, e);
          var t = e,
              i = new egret.MovieClipDataFactory(o, t);
          return i;
        });
      },
      onRemoveStart: function onRemoveStart(e, r) {
        var t = e.get(r);
        t.clearCache(), t.$spriteSheet.dispose();
        var o = r.name,
            n = o.substring(0, o.lastIndexOf(".")) + ".png",
            i = e.resourceConfig.getResource(n);
        i && e.unload(i);
      }
    }, r.MergeJSONProcessor = {
      onLoadStart: function onLoadStart(r, t) {
        return r.load(t, "json").then(function (r) {
          for (var o in r) {
            e.config.addSubkey(o, t.name);
          }

          return r;
        });
      },
      getData: function getData(e, r, t, o) {
        var n = e.get(r);
        return n ? n[o] : (console.error("missing resource :" + r.name), null);
      },
      onRemoveStart: function onRemoveStart(e, r) {}
    }, r.LegacyResourceConfigProcessor = {
      onLoadStart: function onLoadStart(r, t) {
        return r.load(t, "json").then(function (o) {
          var n = e.config.config,
              i = t.root,
              s = n.fileSystem;
          s || (s = {
            fsData: {},
            getFile: function getFile(e) {
              return p[e];
            },
            addFile: function addFile(e) {
              e.type || (e.type = ""), void 0 == i && (e.root = ""), p[e.name] = e;
            },
            profile: function profile() {
              console.log(p);
            },
            removeFile: function removeFile(e) {
              delete p[e];
            }
          }, n.fileSystem = s);

          for (var a = n.groups, u = 0, c = o.groups; u < c.length; u++) {
            var l = c[u];
            "" == l.keys ? a[l.name] = [] : a[l.name] = l.keys.split(",");
          }

          for (var f = n.alias, p = s.fsData, g = function g(e) {
            p[e.name] = e, p[e.name].root = i, e.subkeys && e.subkeys.split(",").forEach(function (r) {
              f[r] = e.name + "#" + r, f[e.name + "." + r] = e.name + "#" + r;
            });
          }, d = 0, h = o.resources; d < h.length; d++) {
            var v = h[d];
            g(v);
          }

          return r.save(t, o), o;
        });
      },
      onRemoveStart: function onRemoveStart() {}
    }, r._map = {
      image: r.ImageProcessor,
      json: r.JsonProcessor,
      text: r.TextProcessor,
      xml: r.XMLProcessor,
      sheet: r.SheetProcessor,
      font: r.FontProcessor,
      bin: r.BinaryProcessor,
      commonjs: r.CommonJSProcessor,
      sound: r.SoundProcessor,
      movieclip: r.MovieClipProcessor,
      mergeJson: r.MergeJSONProcessor,
      legacyResourceConfig: r.LegacyResourceConfigProcessor
    };
  }(r = e.processor || (e.processor = {}));
}(RES || (RES = {}));
var RES;
!function (e) {
  var r = function (r) {
    function t(e, t, o) {
      void 0 === t && (t = !1), void 0 === o && (o = !1);
      var n = r.call(this, e, t, o) || this;
      return n.itemsLoaded = 0, n.itemsTotal = 0, n.groupName = "", n;
    }

    return __extends(t, r), t.dispatchResourceEvent = function (r, o, n, i, s, a) {
      void 0 === n && (n = ""), void 0 === i && (i = void 0), void 0 === s && (s = 0), void 0 === a && (a = 0);
      var u = egret.Event.create(t, o);
      u.groupName = n, i && (u.resItem = e.ResourceItem.convertToResItem(i)), u.itemsLoaded = s, u.itemsTotal = a;
      var c = r.dispatchEvent(u);
      return egret.Event.release(u), c;
    }, t.ITEM_LOAD_ERROR = "itemLoadError", t.CONFIG_COMPLETE = "configComplete", t.CONFIG_LOAD_ERROR = "configLoadError", t.GROUP_PROGRESS = "groupProgress", t.GROUP_COMPLETE = "groupComplete", t.GROUP_LOAD_ERROR = "groupLoadError", t;
  }(egret.Event);

  e.ResourceEvent = r, __reflect(r.prototype, "RES.ResourceEvent");
}(RES || (RES = {}));
var RES;
!function (e) {
  var r;
  !function (r) {
    function t(r) {
      var t = r.name;
      if (e.config.config) for (var o in e.config.config.alias) {
        e.config.config.alias[o] == r.url && (t = o);
      } else t = r.url;
      var n = {
        name: t,
        url: r.url,
        type: r.type,
        data: r,
        root: r.root
      };
      return n;
    }

    r.TYPE_XML = "xml", r.TYPE_IMAGE = "image", r.TYPE_BIN = "bin", r.TYPE_TEXT = "text", r.TYPE_JSON = "json", r.TYPE_SHEET = "sheet", r.TYPE_FONT = "font", r.TYPE_SOUND = "sound", r.convertToResItem = t;
  }(r = e.ResourceItem || (e.ResourceItem = {}));
}(RES || (RES = {}));
var RES;
!function (e) {
  var r = function () {
    function r(e) {
      this.data = e;
    }

    return r.prototype.profile = function () {
      console.log(this.data);
    }, r.prototype.addFile = function (r, t) {
      t || (t = ""), r = e.path.normalize(r);
      var o = e.path.basename(r),
          n = e.path.dirname(r);
      this.exists(n) || this.mkdir(n);
      var i = this.resolve(n);
      i[o] = {
        url: r,
        type: t
      };
    }, r.prototype.getFile = function (e) {
      var r = this.resolve(e);
      return r && (r.name = e), r;
    }, r.prototype.resolve = function (r) {
      if ("" == r) return this.data;
      r = e.path.normalize(r);

      for (var t = r.split("/"), o = this.data, n = 0, i = t; n < i.length; n++) {
        var s = i[n];
        if (!o) return o;
        o = o[s];
      }

      return o;
    }, r.prototype.mkdir = function (r) {
      r = e.path.normalize(r);

      for (var t = r.split("/"), o = this.data, n = 0, i = t; n < i.length; n++) {
        var s = i[n];
        o[s] || (o[s] = {}), o = o[s];
      }
    }, r.prototype.exists = function (r) {
      if ("" == r) return !0;
      r = e.path.normalize(r);

      for (var t = r.split("/"), o = this.data, n = 0, i = t; n < i.length; n++) {
        var s = i[n];
        if (!o[s]) return !1;
        o = o[s];
      }

      return !0;
    }, r;
  }();

  e.NewFileSystem = r, __reflect(r.prototype, "RES.NewFileSystem");
}(RES || (RES = {}));
var RES;
!function (e) {
  var r = function () {
    function e() {}

    return e.prototype.init = function () {
      return this.versionInfo = this.getLocalData("all.manifest"), Promise.resolve();
    }, e.prototype.getVirtualUrl = function (e) {
      return e;
    }, e.prototype.getLocalData = function (e) {
      if (egret_native.readUpdateFileSync && egret_native.readResourceFileSync) {
        var r = egret_native.readUpdateFileSync(e);
        if (null != r) return JSON.parse(r);
        if (r = egret_native.readResourceFileSync(e), null != r) return JSON.parse(r);
      }

      return null;
    }, e;
  }();

  e.NativeVersionController = r, __reflect(r.prototype, "RES.NativeVersionController", ["RES.IVersionController"]), egret.Capabilities.runtimeType == egret.RuntimeType.NATIVE && (e.VersionController = r);
}(RES || (RES = {}));
;
window.RES = RES;

/***/ }),

/***/ "./src/js/default.thm.js":
/*!*******************************!*\
  !*** ./src/js/default.thm.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var egret = window.egret;
window.skins = {};

function __extends(d, b) {
  for (var p in b) {
    if (b.hasOwnProperty(p)) d[p] = b[p];
  }

  function __() {
    this.constructor = d;
  }

  __.prototype = b.prototype;
  d.prototype = new __();
}

;
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.styles = undefined;
generateEUI.skins = {
  "eui.Button": "resource/eui_skins/ButtonSkin.exml",
  "eui.CheckBox": "resource/eui_skins/CheckBoxSkin.exml",
  "eui.HScrollBar": "resource/eui_skins/HScrollBarSkin.exml",
  "eui.HSlider": "resource/eui_skins/HSliderSkin.exml",
  "eui.Panel": "resource/eui_skins/PanelSkin.exml",
  "eui.TextInput": "resource/eui_skins/TextInputSkin.exml",
  "eui.ProgressBar": "resource/eui_skins/ProgressBarSkin.exml",
  "eui.RadioButton": "resource/eui_skins/RadioButtonSkin.exml",
  "eui.Scroller": "resource/eui_skins/ScrollerSkin.exml",
  "eui.ToggleSwitch": "resource/eui_skins/ToggleSwitchSkin.exml",
  "eui.VScrollBar": "resource/eui_skins/VScrollBarSkin.exml",
  "eui.VSlider": "resource/eui_skins/VSliderSkin.exml",
  "eui.ItemRenderer": "resource/eui_skins/ItemRendererSkin.exml"
};

generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = function (_super) {
  __extends(ButtonSkin, _super);

  function ButtonSkin() {
    _super.call(this);

    this.skinParts = ["labelDisplay", "iconDisplay"];
    this.minHeight = 50;
    this.minWidth = 100;
    this.elementsContent = [this._Image1_i(), this.labelDisplay_i(), this.iconDisplay_i()];
    this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "button_down_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", 0.5)])];
  }

  var _proto = ButtonSkin.prototype;

  _proto._Image1_i = function () {
    var t = new eui.Image();
    this._Image1 = t;
    t.percentHeight = 100;
    t.scale9Grid = new egret.Rectangle(1, 3, 8, 8);
    t.source = "button_up_png";
    t.percentWidth = 100;
    return t;
  };

  _proto.labelDisplay_i = function () {
    var t = new eui.Label();
    this.labelDisplay = t;
    t.bottom = 8;
    t.left = 8;
    t.right = 8;
    t.size = 20;
    t.textAlign = "center";
    t.textColor = 0xFFFFFF;
    t.top = 8;
    t.verticalAlign = "middle";
    return t;
  };

  _proto.iconDisplay_i = function () {
    var t = new eui.Image();
    this.iconDisplay = t;
    t.horizontalCenter = 0;
    t.verticalCenter = 0;
    return t;
  };

  return ButtonSkin;
}(eui.Skin);

generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = function (_super) {
  __extends(CheckBoxSkin, _super);

  function CheckBoxSkin() {
    _super.call(this);

    this.skinParts = ["labelDisplay"];
    this.elementsContent = [this._Group1_i()];
    this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "alpha", 0.7)]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", 0.5)]), new eui.State("upAndSelected", [new eui.SetProperty("_Image1", "source", "checkbox_select_up_png")]), new eui.State("downAndSelected", [new eui.SetProperty("_Image1", "source", "checkbox_select_down_png")]), new eui.State("disabledAndSelected", [new eui.SetProperty("_Image1", "source", "checkbox_select_disabled_png")])];
  }

  var _proto = CheckBoxSkin.prototype;

  _proto._Group1_i = function () {
    var t = new eui.Group();
    t.percentHeight = 100;
    t.percentWidth = 100;
    t.layout = this._HorizontalLayout1_i();
    t.elementsContent = [this._Image1_i(), this.labelDisplay_i()];
    return t;
  };

  _proto._HorizontalLayout1_i = function () {
    var t = new eui.HorizontalLayout();
    t.verticalAlign = "middle";
    return t;
  };

  _proto._Image1_i = function () {
    var t = new eui.Image();
    this._Image1 = t;
    t.alpha = 1;
    t.fillMode = "scale";
    t.source = "checkbox_unselect_png";
    return t;
  };

  _proto.labelDisplay_i = function () {
    var t = new eui.Label();
    this.labelDisplay = t;
    t.fontFamily = "Tahoma";
    t.size = 20;
    t.textAlign = "center";
    t.textColor = 0x707070;
    t.verticalAlign = "middle";
    return t;
  };

  return CheckBoxSkin;
}(eui.Skin);

generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = function (_super) {
  __extends(HScrollBarSkin, _super);

  function HScrollBarSkin() {
    _super.call(this);

    this.skinParts = ["thumb"];
    this.minHeight = 8;
    this.minWidth = 20;
    this.elementsContent = [this.thumb_i()];
  }

  var _proto = HScrollBarSkin.prototype;

  _proto.thumb_i = function () {
    var t = new eui.Image();
    this.thumb = t;
    t.height = 8;
    t.scale9Grid = new egret.Rectangle(3, 3, 2, 2);
    t.source = "roundthumb_png";
    t.verticalCenter = 0;
    t.width = 30;
    return t;
  };

  return HScrollBarSkin;
}(eui.Skin);

generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = function (_super) {
  __extends(HSliderSkin, _super);

  function HSliderSkin() {
    _super.call(this);

    this.skinParts = ["track", "thumb"];
    this.minHeight = 8;
    this.minWidth = 20;
    this.elementsContent = [this.track_i(), this.thumb_i()];
  }

  var _proto = HSliderSkin.prototype;

  _proto.track_i = function () {
    var t = new eui.Image();
    this.track = t;
    t.height = 6;
    t.scale9Grid = new egret.Rectangle(1, 1, 4, 4);
    t.source = "track_sb_png";
    t.verticalCenter = 0;
    t.percentWidth = 100;
    return t;
  };

  _proto.thumb_i = function () {
    var t = new eui.Image();
    this.thumb = t;
    t.source = "thumb_png";
    t.verticalCenter = 0;
    return t;
  };

  return HSliderSkin;
}(eui.Skin);

generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = function (_super) {
  __extends(ItemRendererSkin, _super);

  function ItemRendererSkin() {
    _super.call(this);

    this.skinParts = ["labelDisplay"];
    this.minHeight = 50;
    this.minWidth = 100;
    this.elementsContent = [this._Image1_i(), this.labelDisplay_i()];
    this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "button_down_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", 0.5)])];
    eui.Binding.$bindProperties(this, ["hostComponent.data"], [0], this.labelDisplay, "text");
  }

  var _proto = ItemRendererSkin.prototype;

  _proto._Image1_i = function () {
    var t = new eui.Image();
    this._Image1 = t;
    t.percentHeight = 100;
    t.scale9Grid = new egret.Rectangle(1, 3, 8, 8);
    t.source = "button_up_png";
    t.percentWidth = 100;
    return t;
  };

  _proto.labelDisplay_i = function () {
    var t = new eui.Label();
    this.labelDisplay = t;
    t.bottom = 8;
    t.fontFamily = "Tahoma";
    t.left = 8;
    t.right = 8;
    t.size = 20;
    t.textAlign = "center";
    t.textColor = 0xFFFFFF;
    t.top = 8;
    t.verticalAlign = "middle";
    return t;
  };

  return ItemRendererSkin;
}(eui.Skin);

generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = function (_super) {
  __extends(PanelSkin, _super);

  function PanelSkin() {
    _super.call(this);

    this.skinParts = ["titleDisplay", "moveArea", "closeButton"];
    this.minHeight = 230;
    this.minWidth = 450;
    this.elementsContent = [this._Image1_i(), this.moveArea_i(), this.closeButton_i()];
  }

  var _proto = PanelSkin.prototype;

  _proto._Image1_i = function () {
    var t = new eui.Image();
    t.bottom = 0;
    t.left = 0;
    t.right = 0;
    t.scale9Grid = new egret.Rectangle(2, 2, 12, 12);
    t.source = "border_png";
    t.top = 0;
    return t;
  };

  _proto.moveArea_i = function () {
    var t = new eui.Group();
    this.moveArea = t;
    t.height = 45;
    t.left = 0;
    t.right = 0;
    t.top = 0;
    t.elementsContent = [this._Image2_i(), this.titleDisplay_i()];
    return t;
  };

  _proto._Image2_i = function () {
    var t = new eui.Image();
    t.bottom = 0;
    t.left = 0;
    t.right = 0;
    t.source = "header_png";
    t.top = 0;
    return t;
  };

  _proto.titleDisplay_i = function () {
    var t = new eui.Label();
    this.titleDisplay = t;
    t.fontFamily = "Tahoma";
    t.left = 15;
    t.right = 5;
    t.size = 20;
    t.textColor = 0xFFFFFF;
    t.verticalCenter = 0;
    t.wordWrap = false;
    return t;
  };

  _proto.closeButton_i = function () {
    var t = new eui.Button();
    this.closeButton = t;
    t.bottom = 5;
    t.horizontalCenter = 0;
    t.label = "close";
    return t;
  };

  return PanelSkin;
}(eui.Skin);

generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = function (_super) {
  __extends(ProgressBarSkin, _super);

  function ProgressBarSkin() {
    _super.call(this);

    this.skinParts = ["thumb", "labelDisplay"];
    this.minHeight = 18;
    this.minWidth = 30;
    this.elementsContent = [this._Image1_i(), this.thumb_i(), this.labelDisplay_i()];
  }

  var _proto = ProgressBarSkin.prototype;

  _proto._Image1_i = function () {
    var t = new eui.Image();
    t.percentHeight = 100;
    t.scale9Grid = new egret.Rectangle(1, 1, 4, 4);
    t.source = "track_pb_png";
    t.verticalCenter = 0;
    t.percentWidth = 100;
    return t;
  };

  _proto.thumb_i = function () {
    var t = new eui.Image();
    this.thumb = t;
    t.percentHeight = 100;
    t.source = "thumb_pb_png";
    t.percentWidth = 100;
    return t;
  };

  _proto.labelDisplay_i = function () {
    var t = new eui.Label();
    this.labelDisplay = t;
    t.fontFamily = "Tahoma";
    t.horizontalCenter = 0;
    t.size = 15;
    t.textAlign = "center";
    t.textColor = 0x707070;
    t.verticalAlign = "middle";
    t.verticalCenter = 0;
    return t;
  };

  return ProgressBarSkin;
}(eui.Skin);

generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = function (_super) {
  __extends(RadioButtonSkin, _super);

  function RadioButtonSkin() {
    _super.call(this);

    this.skinParts = ["labelDisplay"];
    this.elementsContent = [this._Group1_i()];
    this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "alpha", 0.7)]), new eui.State("disabled", [new eui.SetProperty("_Image1", "alpha", 0.5)]), new eui.State("upAndSelected", [new eui.SetProperty("_Image1", "source", "radiobutton_select_up_png")]), new eui.State("downAndSelected", [new eui.SetProperty("_Image1", "source", "radiobutton_select_down_png")]), new eui.State("disabledAndSelected", [new eui.SetProperty("_Image1", "source", "radiobutton_select_disabled_png")])];
  }

  var _proto = RadioButtonSkin.prototype;

  _proto._Group1_i = function () {
    var t = new eui.Group();
    t.percentHeight = 100;
    t.percentWidth = 100;
    t.layout = this._HorizontalLayout1_i();
    t.elementsContent = [this._Image1_i(), this.labelDisplay_i()];
    return t;
  };

  _proto._HorizontalLayout1_i = function () {
    var t = new eui.HorizontalLayout();
    t.verticalAlign = "middle";
    return t;
  };

  _proto._Image1_i = function () {
    var t = new eui.Image();
    this._Image1 = t;
    t.alpha = 1;
    t.fillMode = "scale";
    t.source = "radiobutton_unselect_png";
    return t;
  };

  _proto.labelDisplay_i = function () {
    var t = new eui.Label();
    this.labelDisplay = t;
    t.fontFamily = "Tahoma";
    t.size = 20;
    t.textAlign = "center";
    t.textColor = 0x707070;
    t.verticalAlign = "middle";
    return t;
  };

  return RadioButtonSkin;
}(eui.Skin);

generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = function (_super) {
  __extends(ScrollerSkin, _super);

  function ScrollerSkin() {
    _super.call(this);

    this.skinParts = ["horizontalScrollBar", "verticalScrollBar"];
    this.minHeight = 20;
    this.minWidth = 20;
    this.elementsContent = [this.horizontalScrollBar_i(), this.verticalScrollBar_i()];
  }

  var _proto = ScrollerSkin.prototype;

  _proto.horizontalScrollBar_i = function () {
    var t = new eui.HScrollBar();
    this.horizontalScrollBar = t;
    t.bottom = 0;
    t.percentWidth = 100;
    return t;
  };

  _proto.verticalScrollBar_i = function () {
    var t = new eui.VScrollBar();
    this.verticalScrollBar = t;
    t.percentHeight = 100;
    t.right = 0;
    return t;
  };

  return ScrollerSkin;
}(eui.Skin);

generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = function (_super) {
  __extends(TextInputSkin, _super);

  function TextInputSkin() {
    _super.call(this);

    this.skinParts = ["textDisplay", "promptDisplay"];
    this.minHeight = 40;
    this.minWidth = 300;
    this.elementsContent = [this._Image1_i(), this._Rect1_i(), this.textDisplay_i()];
    this.promptDisplay_i();
    this.states = [new eui.State("normal", []), new eui.State("disabled", [new eui.SetProperty("textDisplay", "textColor", 0xff0000)]), new eui.State("normalWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")]), new eui.State("disabledWithPrompt", [new eui.AddItems("promptDisplay", "", 1, "")])];
  }

  var _proto = TextInputSkin.prototype;

  _proto._Image1_i = function () {
    var t = new eui.Image();
    t.percentHeight = 100;
    t.scale9Grid = new egret.Rectangle(1, 3, 8, 8);
    t.source = "button_up_png";
    t.percentWidth = 100;
    return t;
  };

  _proto._Rect1_i = function () {
    var t = new eui.Rect();
    t.fillColor = 0xffffff;
    t.percentHeight = 100;
    t.percentWidth = 100;
    return t;
  };

  _proto.textDisplay_i = function () {
    var t = new eui.EditableText();
    this.textDisplay = t;
    t.height = 24;
    t.left = "10";
    t.right = "10";
    t.size = 20;
    t.textColor = 0x000000;
    t.verticalCenter = "0";
    t.percentWidth = 100;
    return t;
  };

  _proto.promptDisplay_i = function () {
    var t = new eui.Label();
    this.promptDisplay = t;
    t.height = 24;
    t.left = 10;
    t.right = 10;
    t.size = 20;
    t.textColor = 0xa9a9a9;
    t.touchEnabled = false;
    t.verticalCenter = 0;
    t.percentWidth = 100;
    return t;
  };

  return TextInputSkin;
}(eui.Skin);

generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = function (_super) {
  __extends(ToggleSwitchSkin, _super);

  function ToggleSwitchSkin() {
    _super.call(this);

    this.skinParts = [];
    this.elementsContent = [this._Image1_i(), this._Image2_i()];
    this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "off_png")]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "off_png")]), new eui.State("disabled", [new eui.SetProperty("_Image1", "source", "off_png")]), new eui.State("upAndSelected", [new eui.SetProperty("_Image2", "horizontalCenter", 18)]), new eui.State("downAndSelected", [new eui.SetProperty("_Image2", "horizontalCenter", 18)]), new eui.State("disabledAndSelected", [new eui.SetProperty("_Image2", "horizontalCenter", 18)])];
  }

  var _proto = ToggleSwitchSkin.prototype;

  _proto._Image1_i = function () {
    var t = new eui.Image();
    this._Image1 = t;
    t.source = "on_png";
    return t;
  };

  _proto._Image2_i = function () {
    var t = new eui.Image();
    this._Image2 = t;
    t.horizontalCenter = -18;
    t.source = "handle_png";
    t.verticalCenter = 0;
    return t;
  };

  return ToggleSwitchSkin;
}(eui.Skin);

generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = function (_super) {
  __extends(VScrollBarSkin, _super);

  function VScrollBarSkin() {
    _super.call(this);

    this.skinParts = ["thumb"];
    this.minHeight = 20;
    this.minWidth = 8;
    this.elementsContent = [this.thumb_i()];
  }

  var _proto = VScrollBarSkin.prototype;

  _proto.thumb_i = function () {
    var t = new eui.Image();
    this.thumb = t;
    t.height = 30;
    t.horizontalCenter = 0;
    t.scale9Grid = new egret.Rectangle(3, 3, 2, 2);
    t.source = "roundthumb_png";
    t.width = 8;
    return t;
  };

  return VScrollBarSkin;
}(eui.Skin);

generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = function (_super) {
  __extends(VSliderSkin, _super);

  function VSliderSkin() {
    _super.call(this);

    this.skinParts = ["track", "thumb"];
    this.minHeight = 30;
    this.minWidth = 25;
    this.elementsContent = [this.track_i(), this.thumb_i()];
  }

  var _proto = VSliderSkin.prototype;

  _proto.track_i = function () {
    var t = new eui.Image();
    this.track = t;
    t.percentHeight = 100;
    t.horizontalCenter = 0;
    t.scale9Grid = new egret.Rectangle(1, 1, 4, 4);
    t.source = "track_png";
    t.width = 7;
    return t;
  };

  _proto.thumb_i = function () {
    var t = new eui.Image();
    this.thumb = t;
    t.horizontalCenter = 0;
    t.source = "thumb_png";
    return t;
  };

  return VSliderSkin;
}(eui.Skin);

/***/ }),

/***/ "./src/js/egret.min.js":
/*!*****************************!*\
  !*** ./src/js/egret.min.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __reflect = void 0 && (void 0).__reflect || function (t, e, i) {
  t.__class__ = e, i ? i.push(e) : i = [e], t.__types__ = t.__types__ ? i.concat(t.__types__) : i;
},
    __extends = void 0 && (void 0).__extends || function (t, e) {
  function i() {
    this.constructor = t;
  }

  for (var r in e) {
    e.hasOwnProperty(r) && (t[r] = e[r]);
  }

  i.prototype = e.prototype, t.prototype = new i();
};

if ("undefined" == typeof global) var global = window;
if ("undefined" == typeof __global) var __global = global;

var __define = void 0 && (void 0).__define || function (t, e, i, r) {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !0,
    get: i,
    set: r
  });
},
    egret;

!function (t) {
  t.$hashCount = 1;

  var e = function () {
    function e() {
      this.$hashCode = t.$hashCount++;
    }

    return Object.defineProperty(e.prototype, "hashCode", {
      get: function get() {
        return this.$hashCode;
      },
      enumerable: !0,
      configurable: !0
    }), e;
  }();

  t.HashObject = e, __reflect(e.prototype, "egret.HashObject", ["egret.IHashObject"]);
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = [],
      i = function (i) {
    function r(t) {
      void 0 === t && (t = null);
      var e = i.call(this) || this;
      return e.$EventDispatcher = {
        0: t ? t : e,
        1: {},
        2: {},
        3: 0
      }, e;
    }

    return __extends(r, i), r.prototype.$getEventMap = function (t) {
      var e = this.$EventDispatcher,
          i = t ? e[2] : e[1];
      return i;
    }, r.prototype.addEventListener = function (t, e, i, r, n) {
      this.$addListener(t, e, i, r, n);
    }, r.prototype.once = function (t, e, i, r, n) {
      this.$addListener(t, e, i, r, n, !0);
    }, r.prototype.$addListener = function (t, e, i, r, n, a) {
      var o = this.$EventDispatcher,
          s = r ? o[2] : o[1],
          h = s[t];
      h ? 0 !== o[3] && (s[t] = h = h.concat()) : h = s[t] = [], this.$insertEventBin(h, t, e, i, r, n, a);
    }, r.prototype.$insertEventBin = function (t, e, i, r, n, a, o) {
      a = 0 | +a;

      for (var s = -1, h = t.length, c = 0; h > c; c++) {
        var l = t[c];
        if (l.listener == i && l.thisObject == r && l.target == this) return !1;
        -1 == s && l.priority < a && (s = c);
      }

      var u = {
        type: e,
        listener: i,
        thisObject: r,
        priority: a,
        target: this,
        useCapture: n,
        dispatchOnce: !!o
      };
      return -1 !== s ? t.splice(s, 0, u) : t.push(u), !0;
    }, r.prototype.removeEventListener = function (t, e, i, r) {
      var n = this.$EventDispatcher,
          a = r ? n[2] : n[1],
          o = a[t];
      o && (0 !== n[3] && (a[t] = o = o.concat()), this.$removeEventBin(o, e, i), 0 == o.length && (a[t] = null));
    }, r.prototype.$removeEventBin = function (t, e, i) {
      for (var r = t.length, n = 0; r > n; n++) {
        var a = t[n];
        if (a.listener == e && a.thisObject == i && a.target == this) return t.splice(n, 1), !0;
      }

      return !1;
    }, r.prototype.hasEventListener = function (t) {
      var e = this.$EventDispatcher;
      return !(!e[1][t] && !e[2][t]);
    }, r.prototype.willTrigger = function (t) {
      return this.hasEventListener(t);
    }, r.prototype.dispatchEvent = function (t) {
      return t.$currentTarget = this.$EventDispatcher[0], t.$setTarget(t.$currentTarget), this.$notifyListener(t, !1);
    }, r.prototype.$notifyListener = function (t, i) {
      var r = this.$EventDispatcher,
          n = i ? r[2] : r[1],
          a = n[t.$type];
      if (!a) return !0;
      var o = a.length;
      if (0 == o) return !0;
      var s = e;
      r[3]++;

      for (var h = 0; o > h; h++) {
        var c = a[h];
        if (c.listener.call(c.thisObject, t), c.dispatchOnce && s.push(c), t.$isPropagationImmediateStopped) break;
      }

      for (r[3]--; s.length;) {
        var c = s.pop();
        c.target.removeEventListener(c.type, c.listener, c.thisObject, c.useCapture);
      }

      return !t.$isDefaultPrevented;
    }, r.prototype.dispatchEventWith = function (e, i, r, n) {
      if (i || this.hasEventListener(e)) {
        var a = t.Event.create(t.Event, e, i, n);
        a.data = r;
        var o = this.dispatchEvent(a);
        return t.Event.release(a), o;
      }

      return !0;
    }, r;
  }(t.HashObject);

  t.EventDispatcher = i, __reflect(i.prototype, "egret.EventDispatcher", ["egret.IEventDispatcher"]);
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i.type = null, i.$id = null, i.paddingTop = 0, i.paddingBottom = 0, i.paddingLeft = 0, i.paddingRight = 0, i.$uniforms = {}, t.nativeRender && egret_native.NativeDisplayObject.createFilter(i), i;
    }

    return __extends(i, e), i.prototype.$toJson = function () {
      return "";
    }, i.prototype.updatePadding = function () {}, i.prototype.onPropertyChange = function () {
      var e = this;
      e.updatePadding(), t.nativeRender && (egret_native.NativeDisplayObject.setFilterPadding(e.$id, e.paddingTop, e.paddingBottom, e.paddingLeft, e.paddingRight), egret_native.NativeDisplayObject.setDataToFilter(e));
    }, i;
  }(t.HashObject);

  t.Filter = e, __reflect(e.prototype, "egret.Filter");
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(t) {
    return t %= 360, t > 180 ? t -= 360 : -180 > t && (t += 360), t;
  }

  var i = function (i) {
    function r() {
      var e = i.call(this) || this;
      return e.$children = null, e.$name = "", e.$parent = null, e.$stage = null, e.$nestLevel = 0, e.$useTranslate = !1, e.$matrix = new t.Matrix(), e.$matrixDirty = !1, e.$x = 0, e.$y = 0, e.$scaleX = 1, e.$scaleY = 1, e.$rotation = 0, e.$skewX = 0, e.$skewXdeg = 0, e.$skewY = 0, e.$skewYdeg = 0, e.$explicitWidth = 0 / 0, e.$explicitHeight = 0 / 0, e.$anchorOffsetX = 0, e.$anchorOffsetY = 0, e.$visible = !0, e.$displayList = null, e.$cacheAsBitmap = !1, e.$cacheDirty = !1, e.$alpha = 1, e.$touchEnabled = r.defaultTouchEnabled, e.$scrollRect = null, e.$blendMode = 0, e.$maskedObject = null, e.$mask = null, e.$maskRect = null, e.$parentDisplayList = null, e.$renderNode = null, e.$renderDirty = !1, e.$renderMode = null, t.nativeRender && e.createNativeDisplayObject(), e;
    }

    return __extends(r, i), r.prototype.createNativeDisplayObject = function () {
      this.$nativeDisplayObject = new egret_native.NativeDisplayObject(0);
    }, Object.defineProperty(r.prototype, "name", {
      get: function get() {
        return this.$name;
      },
      set: function set(t) {
        this.$name = t;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "parent", {
      get: function get() {
        return this.$parent;
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$setParent = function (t) {
      this.$parent = t;
    }, r.prototype.$onAddToStage = function (e, i) {
      var r = this;
      r.$stage = e, r.$nestLevel = i, r.$hasAddToStage = !0, t.Sprite.$EVENT_ADD_TO_STAGE_LIST.push(r);
    }, r.prototype.$onRemoveFromStage = function () {
      var e = this;
      e.$nestLevel = 0, t.Sprite.$EVENT_REMOVE_FROM_STAGE_LIST.push(e);
    }, r.prototype.$updateUseTransform = function () {
      var t = this;
      1 == t.$scaleX && 1 == t.$scaleY && 0 == t.$skewX && 0 == t.$skewY ? t.$useTranslate = !1 : t.$useTranslate = !0;
    }, Object.defineProperty(r.prototype, "stage", {
      get: function get() {
        return this.$stage;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "matrix", {
      get: function get() {
        return this.$getMatrix().clone();
      },
      set: function set(t) {
        this.$setMatrix(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$getMatrix = function () {
      var t = this;
      return t.$matrixDirty && (t.$matrixDirty = !1, t.$matrix.$updateScaleAndRotation(t.$scaleX, t.$scaleY, t.$skewX, t.$skewY)), t.$matrix.tx = t.$x, t.$matrix.ty = t.$y, t.$matrix;
    }, r.prototype.$setMatrix = function (i, r) {
      void 0 === r && (r = !0);
      var n = this,
          a = n.$matrix;
      a.a = i.a, a.b = i.b, a.c = i.c, a.d = i.d, n.$x = i.tx, n.$y = i.ty, n.$matrixDirty = !1, 1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d ? n.$useTranslate = !1 : n.$useTranslate = !0, r && (n.$scaleX = a.$getScaleX(), n.$scaleY = a.$getScaleY(), n.$skewX = i.$getSkewX(), n.$skewY = i.$getSkewY(), n.$skewXdeg = e(180 * n.$skewX / Math.PI), n.$skewYdeg = e(180 * n.$skewY / Math.PI), n.$rotation = e(180 * n.$skewY / Math.PI)), t.nativeRender && n.$nativeDisplayObject.setMatrix(i.a, i.b, i.c, i.d, i.tx, i.ty);
    }, r.prototype.$getConcatenatedMatrix = function () {
      var e = this,
          i = e.$concatenatedMatrix;
      i || (i = e.$concatenatedMatrix = new t.Matrix()), e.$parent ? e.$parent.$getConcatenatedMatrix().$preMultiplyInto(e.$getMatrix(), i) : i.copyFrom(e.$getMatrix());
      var r = e.$anchorOffsetX,
          n = e.$anchorOffsetY,
          a = e.$scrollRect;
      return a ? i.$preMultiplyInto(t.$TempMatrix.setTo(1, 0, 0, 1, -a.x - r, -a.y - n), i) : (0 != r || 0 != n) && i.$preMultiplyInto(t.$TempMatrix.setTo(1, 0, 0, 1, -r, -n), i), e.$concatenatedMatrix;
    }, r.prototype.$getInvertedConcatenatedMatrix = function () {
      var e = this;
      return e.$invertedConcatenatedMatrix || (e.$invertedConcatenatedMatrix = new t.Matrix()), e.$getConcatenatedMatrix().$invertInto(e.$invertedConcatenatedMatrix), e.$invertedConcatenatedMatrix;
    }, Object.defineProperty(r.prototype, "x", {
      get: function get() {
        return this.$getX();
      },
      set: function set(t) {
        this.$setX(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$getX = function () {
      return this.$x;
    }, r.prototype.$setX = function (e) {
      var i = this;
      if (i.$x == e) return !1;
      if (i.$x = e, t.nativeRender) i.$nativeDisplayObject.setX(e);else {
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
      return !0;
    }, Object.defineProperty(r.prototype, "y", {
      get: function get() {
        return this.$getY();
      },
      set: function set(t) {
        this.$setY(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$getY = function () {
      return this.$y;
    }, r.prototype.$setY = function (e) {
      var i = this;
      if (i.$y == e) return !1;
      if (i.$y = e, t.nativeRender) i.$nativeDisplayObject.setY(e);else {
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
      return !0;
    }, Object.defineProperty(r.prototype, "scaleX", {
      get: function get() {
        return this.$getScaleX();
      },
      set: function set(t) {
        this.$setScaleX(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$getScaleX = function () {
      return this.$scaleX;
    }, r.prototype.$setScaleX = function (e) {
      var i = this;
      if (i.$scaleX != e) if (i.$scaleX = e, i.$matrixDirty = !0, i.$updateUseTransform(), t.nativeRender) i.$nativeDisplayObject.setScaleX(e);else {
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
    }, Object.defineProperty(r.prototype, "scaleY", {
      get: function get() {
        return this.$getScaleY();
      },
      set: function set(t) {
        this.$setScaleY(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$getScaleY = function () {
      return this.$scaleY;
    }, r.prototype.$setScaleY = function (e) {
      var i = this;
      if (i.$scaleY != e) if (i.$scaleY = e, i.$matrixDirty = !0, i.$updateUseTransform(), t.nativeRender) i.$nativeDisplayObject.setScaleY(e);else {
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
    }, Object.defineProperty(r.prototype, "rotation", {
      get: function get() {
        return this.$getRotation();
      },
      set: function set(t) {
        this.$setRotation(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$getRotation = function () {
      return this.$rotation;
    }, r.prototype.$setRotation = function (i) {
      i = e(i);
      var r = this;

      if (i != r.$rotation) {
        var n = i - r.$rotation,
            a = n / 180 * Math.PI;
        if (r.$skewX += a, r.$skewY += a, r.$rotation = i, r.$matrixDirty = !0, r.$updateUseTransform(), t.nativeRender) r.$nativeDisplayObject.setRotation(i);else {
          var o = r.$parent;
          o && !o.$cacheDirty && (o.$cacheDirty = !0, o.$cacheDirtyUp());
          var s = r.$maskedObject;
          s && !s.$cacheDirty && (s.$cacheDirty = !0, s.$cacheDirtyUp());
        }
      }
    }, Object.defineProperty(r.prototype, "skewX", {
      get: function get() {
        return this.$skewXdeg;
      },
      set: function set(t) {
        this.$setSkewX(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$setSkewX = function (i) {
      var r = this;
      if (i != r.$skewXdeg) if (r.$skewXdeg = i, i = e(i), i = i / 180 * Math.PI, r.$skewX = i, r.$matrixDirty = !0, r.$updateUseTransform(), t.nativeRender) r.$nativeDisplayObject.setSkewX(r.$skewXdeg);else {
        var n = r.$parent;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
        var a = r.$maskedObject;
        a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp());
      }
    }, Object.defineProperty(r.prototype, "skewY", {
      get: function get() {
        return this.$skewYdeg;
      },
      set: function set(t) {
        this.$setSkewY(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$setSkewY = function (i) {
      var r = this;
      if (i != r.$skewYdeg) if (r.$skewYdeg = i, i = e(i), i = i / 180 * Math.PI, r.$skewY = i, r.$matrixDirty = !0, r.$updateUseTransform(), t.nativeRender) r.$nativeDisplayObject.setSkewY(r.$skewYdeg);else {
        var n = r.$parent;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
        var a = r.$maskedObject;
        a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp());
      }
    }, Object.defineProperty(r.prototype, "width", {
      get: function get() {
        return this.$getWidth();
      },
      set: function set(t) {
        this.$setWidth(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$getWidth = function () {
      var t = this;
      return isNaN(t.$explicitWidth) ? t.$getOriginalBounds().width : t.$explicitWidth;
    }, r.prototype.$setWidth = function (t) {
      t = isNaN(t) ? 0 / 0 : t, this.$explicitWidth != t && (this.$explicitWidth = t);
    }, Object.defineProperty(r.prototype, "height", {
      get: function get() {
        return this.$getHeight();
      },
      set: function set(t) {
        this.$setHeight(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$getHeight = function () {
      var t = this;
      return isNaN(t.$explicitHeight) ? t.$getOriginalBounds().height : t.$explicitHeight;
    }, r.prototype.$setHeight = function (t) {
      t = isNaN(t) ? 0 / 0 : t, this.$explicitHeight != t && (this.$explicitHeight = t);
    }, Object.defineProperty(r.prototype, "measuredWidth", {
      get: function get() {
        return this.$getOriginalBounds().width;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "measuredHeight", {
      get: function get() {
        return this.$getOriginalBounds().height;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "anchorOffsetX", {
      get: function get() {
        return this.$anchorOffsetX;
      },
      set: function set(t) {
        this.$setAnchorOffsetX(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$setAnchorOffsetX = function (e) {
      var i = this;
      if (i.$anchorOffsetX != e) if (i.$anchorOffsetX = e, t.nativeRender) i.$nativeDisplayObject.setAnchorOffsetX(e);else {
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
    }, Object.defineProperty(r.prototype, "anchorOffsetY", {
      get: function get() {
        return this.$anchorOffsetY;
      },
      set: function set(t) {
        this.$setAnchorOffsetY(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$setAnchorOffsetY = function (e) {
      var i = this;
      if (i.$anchorOffsetY != e) if (i.$anchorOffsetY = e, t.nativeRender) i.$nativeDisplayObject.setAnchorOffsetY(e);else {
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
    }, Object.defineProperty(r.prototype, "visible", {
      get: function get() {
        return this.$visible;
      },
      set: function set(t) {
        this.$setVisible(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$setVisible = function (e) {
      var i = this;
      if (i.$visible != e) if (i.$visible = e, t.nativeRender) i.$nativeDisplayObject.setVisible(e);else {
        i.$updateRenderMode();
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
    }, Object.defineProperty(r.prototype, "cacheAsBitmap", {
      get: function get() {
        return this.$cacheAsBitmap;
      },
      set: function set(e) {
        var i = this;
        i.$cacheAsBitmap = e, t.nativeRender ? i.$nativeDisplayObject.setCacheAsBitmap(e) : i.$setHasDisplayList(e);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$setHasDisplayList = function (e) {
      var i = this,
          r = !!i.$displayList;
      if (r != e) if (e) {
        var n = t.sys.DisplayList.create(i);
        n && (i.$displayList = n, i.$cacheDirty = !0);
      } else i.$displayList = null;
    }, r.prototype.$cacheDirtyUp = function () {
      var t = this.$parent;
      t && !t.$cacheDirty && (t.$cacheDirty = !0, t.$cacheDirtyUp());
    }, Object.defineProperty(r.prototype, "alpha", {
      get: function get() {
        return this.$alpha;
      },
      set: function set(t) {
        this.$setAlpha(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$setAlpha = function (e) {
      var i = this;
      if (i.$alpha != e) if (i.$alpha = e, t.nativeRender) i.$nativeDisplayObject.setAlpha(e);else {
        i.$updateRenderMode();
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
    }, Object.defineProperty(r.prototype, "touchEnabled", {
      get: function get() {
        return this.$getTouchEnabled();
      },
      set: function set(t) {
        this.$setTouchEnabled(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$getTouchEnabled = function () {
      return this.$touchEnabled;
    }, r.prototype.$setTouchEnabled = function (t) {
      this.$touchEnabled = !!t;
    }, Object.defineProperty(r.prototype, "scrollRect", {
      get: function get() {
        return this.$scrollRect;
      },
      set: function set(t) {
        this.$setScrollRect(t);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$setScrollRect = function (e) {
      var i = this;
      if (!e && !i.$scrollRect) return void i.$updateRenderMode();

      if (e ? (i.$scrollRect || (i.$scrollRect = new t.Rectangle()), i.$scrollRect.copyFrom(e), t.nativeRender && i.$nativeDisplayObject.setScrollRect(e.x, e.y, e.width, e.height)) : (i.$scrollRect = null, t.nativeRender && i.$nativeDisplayObject.setScrollRect(0, 0, 0, 0)), !t.nativeRender) {
        i.$updateRenderMode();
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
    }, Object.defineProperty(r.prototype, "blendMode", {
      get: function get() {
        return t.sys.numberToBlendMode(this.$blendMode);
      },
      set: function set(e) {
        var i = this,
            r = t.sys.blendModeToNumber(e);
        if (i.$blendMode != r) if (i.$blendMode = r, t.nativeRender) i.$nativeDisplayObject.setBlendMode(r);else {
          i.$updateRenderMode();
          var n = i.$parent;
          n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
          var a = i.$maskedObject;
          a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp());
        }
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "mask", {
      get: function get() {
        var t = this;
        return t.$mask ? t.$mask : t.$maskRect;
      },
      set: function set(e) {
        var i = this;

        if (e !== i) {
          if (e) {
            if (e instanceof r) {
              if (e == i.$mask) return;
              e.$maskedObject && (e.$maskedObject.mask = null), e.$maskedObject = i, i.$mask = e, t.nativeRender || e.$updateRenderMode(), i.$maskRect && (t.nativeRender && i.$nativeDisplayObject.setMaskRect(0, 0, 0, 0), i.$maskRect = null), t.nativeRender && i.$nativeDisplayObject.setMask(e.$nativeDisplayObject.id);
            } else i.$maskRect || (i.$maskRect = new t.Rectangle()), i.$maskRect.copyFrom(e), t.nativeRender && i.$nativeDisplayObject.setMaskRect(e.x, e.y, e.width, e.height), i.$mask && (i.$mask.$maskedObject = null, t.nativeRender || i.$mask.$updateRenderMode()), i.mask && (t.nativeRender && i.$nativeDisplayObject.setMask(-1), i.$mask = null);
          } else i.$mask && (i.$mask.$maskedObject = null, t.nativeRender || i.$mask.$updateRenderMode()), i.mask && (t.nativeRender && i.$nativeDisplayObject.setMask(-1), i.$mask = null), i.$maskRect && (t.nativeRender && i.$nativeDisplayObject.setMaskRect(0, 0, 0, 0), i.$maskRect = null);
          t.nativeRender || i.$updateRenderMode();
        }
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$setMaskRect = function (e) {
      var i = this;
      (e || i.$maskRect) && (e ? (i.$maskRect || (i.$maskRect = new t.Rectangle()), i.$maskRect.copyFrom(e)) : i.$maskRect = null);
    }, Object.defineProperty(r.prototype, "filters", {
      get: function get() {
        return this.$filters;
      },
      set: function set(e) {
        var i = this,
            r = i.$filters;

        if (r || e) {
          if (e && e.length ? (e = e.concat(), i.$filters = e, t.nativeRender && i.$nativeDisplayObject.setFilters(e)) : (i.$filters = e, t.nativeRender && i.$nativeDisplayObject.setFilters(null)), !t.nativeRender) {
            i.$updateRenderMode();
            var n = i.$parent;
            n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
            var a = i.$maskedObject;
            a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp());
          }
        } else if (i.$filters = e, t.nativeRender) i.$nativeDisplayObject.setFilters(null);else {
          i.$updateRenderMode();
          var n = i.$parent;
          n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
          var a = i.$maskedObject;
          a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp());
        }
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.getTransformedBounds = function (t, e) {
      return t = t || this, this.$getTransformedBounds(t, e);
    }, r.prototype.getBounds = function (t, e) {
      void 0 === e && (e = !0);
      var i = this;
      return t = i.$getTransformedBounds(i, t), e && (0 != i.$anchorOffsetX && (t.x -= i.$anchorOffsetX), 0 != i.$anchorOffsetY && (t.y -= i.$anchorOffsetY)), t;
    }, r.prototype.$getTransformedBounds = function (e, i) {
      var r = this,
          n = r.$getOriginalBounds();
      if (i || (i = new t.Rectangle()), i.copyFrom(n), e == r) return i;
      var a;

      if (e) {
        a = t.$TempMatrix;
        var o = e.$getInvertedConcatenatedMatrix();
        o.$preMultiplyInto(r.$getConcatenatedMatrix(), a);
      } else a = r.$getConcatenatedMatrix();

      return a.$transformBounds(i), i;
    }, r.prototype.globalToLocal = function (e, i, r) {
      if (void 0 === e && (e = 0), void 0 === i && (i = 0), t.nativeRender) {
        egret_native.updateNativeRender();
        var n = egret_native.nrGlobalToLocal(this.$nativeDisplayObject.id, e, i),
            a = n.split(","),
            o = parseFloat(a[0]),
            s = parseFloat(a[1]);
        return r ? r.setTo(o, s) : r = new t.Point(o, s), r;
      }

      var h = this.$getInvertedConcatenatedMatrix();
      return h.transformPoint(e, i, r);
    }, r.prototype.localToGlobal = function (e, i, r) {
      if (void 0 === e && (e = 0), void 0 === i && (i = 0), t.nativeRender) {
        egret_native.updateNativeRender();
        var n = egret_native.nrLocalToGlobal(this.$nativeDisplayObject.id, e, i),
            a = n.split(","),
            o = parseFloat(a[0]),
            s = parseFloat(a[1]);
        return r ? r.setTo(o, s) : r = new t.Point(o, s), r;
      }

      var h = this.$getConcatenatedMatrix();
      return h.transformPoint(e, i, r);
    }, r.prototype.$getOriginalBounds = function () {
      var t = this,
          e = t.$getContentBounds();
      t.$measureChildBounds(e);
      var i = t.$measureFiltersOffset(!1);
      return i && (e.x += i.minX, e.y += i.minY, e.width += -i.minX + i.maxX, e.height += -i.minY + i.maxY), e;
    }, r.prototype.$measureChildBounds = function (t) {}, r.prototype.$getContentBounds = function () {
      var e = t.$TempRectangle;
      return e.setEmpty(), this.$measureContentBounds(e), e;
    }, r.prototype.$measureContentBounds = function (t) {}, r.prototype.$getRenderNode = function () {
      var t = this,
          e = t.$renderNode;
      return e ? (t.$renderDirty && (e.cleanBeforeRender(), t.$updateRenderNode(), t.$renderDirty = !1, e = t.$renderNode), e) : null;
    }, r.prototype.$updateRenderMode = function () {
      var t = this;
      !t.$visible || t.$alpha <= 0 || t.$maskedObject ? t.$renderMode = 1 : t.filters && t.filters.length > 0 ? t.$renderMode = 2 : 0 !== t.$blendMode || t.$mask && t.$mask.$stage ? t.$renderMode = 3 : t.$scrollRect || t.$maskRect ? t.$renderMode = 4 : t.$renderMode = null;
    }, r.prototype.$measureFiltersOffset = function (e) {
      for (var i = this, r = 0, n = 0, a = 0, o = 0; i;) {
        var s = i.$filters;
        if (s && s.length) for (var h = s.length, c = 0; h > c; c++) {
          var l = s[c];

          if ("blur" == l.type) {
            var u = l.blurX,
                p = l.blurY;
            r -= u, n -= p, a += u, o += p;
          } else if ("glow" == l.type) {
            var u = l.blurX,
                p = l.blurY;
            r -= u, n -= p, a += u, o += p;
            var d = l.distance || 0,
                f = l.angle || 0,
                g = 0,
                $ = 0;
            0 != d && (g = d * t.NumberUtils.cos(f), g = g > 0 ? Math.ceil(g) : Math.floor(g), $ = d * t.NumberUtils.sin(f), $ = $ > 0 ? Math.ceil($) : Math.floor($), r += g, a += g, n += $, o += $);
          } else if ("custom" == l.type) {
            var y = l.padding;
            r -= y, n -= y, a += y, o += y;
          }
        }
        i = e ? i.$parent : null;
      }

      return r = Math.min(r, 0), n = Math.min(n, 0), a = Math.max(a, 0), o = Math.max(o, 0), {
        minX: r,
        minY: n,
        maxX: a,
        maxY: o
      };
    }, r.prototype.$getConcatenatedMatrixAt = function (e, i) {
      var r = e.$getInvertedConcatenatedMatrix();

      if (0 === r.a || 0 === r.d) {
        var n = this,
            a = e.$nestLevel;

        for (i.identity(); n.$nestLevel > a;) {
          var o = n.$scrollRect;
          o && i.concat(t.$TempMatrix.setTo(1, 0, 0, 1, -o.x, -o.y)), i.concat(n.$getMatrix()), n = n.$parent;
        }
      } else r.$preMultiplyInto(i, i);
    }, r.prototype.$updateRenderNode = function () {}, r.prototype.$hitTest = function (e, i) {
      var r = this;
      if (!t.nativeRender && !r.$renderNode || !r.$visible || 0 == r.$scaleX || 0 == r.$scaleY) return null;
      var n = r.$getInvertedConcatenatedMatrix();
      if (0 == n.a && 0 == n.b && 0 == n.c && 0 == n.d) return null;
      var a = r.$getContentBounds(),
          o = n.a * e + n.c * i + n.tx,
          s = n.b * e + n.d * i + n.ty;

      if (a.contains(o, s)) {
        if (!r.$children) {
          var h = r.$scrollRect ? r.$scrollRect : r.$maskRect;
          if (h && !h.contains(o, s)) return null;
          if (r.$mask && !r.$mask.$hitTest(e, i)) return null;
        }

        return r;
      }

      return null;
    }, r.prototype.hitTestPoint = function (e, i, r) {
      var n = this;

      if (r) {
        var a = n.$getInvertedConcatenatedMatrix(),
            o = a.a * e + a.c * i + a.tx,
            s = a.b * e + a.d * i + a.ty,
            h = void 0;

        if (t.nativeRender) {
          var c = t.sys.customHitTestBuffer;
          c.resize(3, 3), egret_native.forHitTest = !0, egret_native.activateBuffer(c), egret_native.updateNativeRender(), egret_native.nrRenderDisplayObject2(n.$nativeDisplayObject.id, 1 - o, 1 - s, !0);

          try {
            h = new Uint8Array(4), egret_native.nrGetPixels(1, 1, 1, 1, h);
          } catch (l) {
            throw new Error(t.sys.tr(1039));
          }

          return egret_native.activateBuffer(null), egret_native.forHitTest = !1, 0 === h[3] ? !1 : !0;
        }

        var u = n.$displayList;

        if (u) {
          var c = u.renderBuffer;

          try {
            h = c.getPixels(o - u.offsetX, s - u.offsetY);
          } catch (l) {
            throw new Error(t.sys.tr(1039));
          }
        } else {
          var c = t.sys.customHitTestBuffer;
          c.resize(3, 3);
          var p = t.Matrix.create();
          p.identity(), p.translate(1 - o, 1 - s), t.sys.systemRenderer.render(this, c, p, !0), t.Matrix.release(p);

          try {
            h = c.getPixels(1, 1);
          } catch (l) {
            throw new Error(t.sys.tr(1039));
          }
        }

        return 0 === h[3] ? !1 : !0;
      }

      if (0 == n.$scaleX || 0 == n.$scaleY) return !1;
      var a = n.$getInvertedConcatenatedMatrix(),
          d = n.getBounds(null, !1),
          o = a.a * e + a.c * i + a.tx,
          s = a.b * e + a.d * i + a.ty;

      if (d.contains(o, s)) {
        var f = n.$scrollRect ? n.$scrollRect : n.$maskRect;
        return f && !f.contains(o, s) ? !1 : !0;
      }

      return !1;
    }, r.prototype.$addListener = function (e, n, a, o, s, h) {
      i.prototype.$addListener.call(this, e, n, a, o, s, h);
      var c = e == t.Event.ENTER_FRAME;

      if (c || e == t.Event.RENDER) {
        var l = c ? r.$enterFrameCallBackList : r.$renderCallBackList;
        -1 == l.indexOf(this) && l.push(this);
      }
    }, r.prototype.removeEventListener = function (e, n, a, o) {
      i.prototype.removeEventListener.call(this, e, n, a, o);
      var s = e == t.Event.ENTER_FRAME;

      if ((s || e == t.Event.RENDER) && !this.hasEventListener(e)) {
        var h = s ? r.$enterFrameCallBackList : r.$renderCallBackList,
            c = h.indexOf(this);
        -1 !== c && h.splice(c, 1);
      }
    }, r.prototype.dispatchEvent = function (t) {
      if (!t.$bubbles) return i.prototype.dispatchEvent.call(this, t);
      var e = this.$getPropagationList(this),
          r = .5 * e.length;
      return t.$setTarget(this), this.$dispatchPropagationEvent(t, e, r), !t.$isDefaultPrevented;
    }, r.prototype.$getPropagationList = function (t) {
      for (var e = []; t;) {
        e.push(t), t = t.$parent;
      }

      var i = e.concat();
      return i.reverse(), e = i.concat(e);
    }, r.prototype.$dispatchPropagationEvent = function (t, e, i) {
      for (var r = e.length, n = i - 1, a = 0; r > a; a++) {
        var o = e[a];
        if (t.$currentTarget = o, n > a ? t.$eventPhase = 1 : a == i || a == n ? t.$eventPhase = 2 : t.$eventPhase = 3, o.$notifyListener(t, i > a), t.$isPropagationStopped || t.$isPropagationImmediateStopped) return;
      }
    }, r.prototype.willTrigger = function (t) {
      for (var e = this; e;) {
        if (e.hasEventListener(t)) return !0;
        e = e.$parent;
      }

      return !1;
    }, r.defaultTouchEnabled = !1, r.$enterFrameCallBackList = [], r.$renderCallBackList = [], r;
  }(t.EventDispatcher);

  t.DisplayObject = i, __reflect(i.prototype, "egret.DisplayObject");
}(egret || (egret = {}));
var egret;
!function (t) {
  t.$TextureScaleFactor = 1;

  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t.disposeBitmapData = !0, t.$bitmapX = 0, t.$bitmapY = 0, t.$bitmapWidth = 0, t.$bitmapHeight = 0, t.$offsetX = 0, t.$offsetY = 0, t.$textureWidth = 0, t.$textureHeight = 0, t.$sourceWidth = 0, t.$sourceHeight = 0, t.$bitmapData = null, t.$rotated = !1, t;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "textureWidth", {
      get: function get() {
        return this.$getTextureWidth();
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$getTextureWidth = function () {
      return this.$textureWidth;
    }, Object.defineProperty(i.prototype, "textureHeight", {
      get: function get() {
        return this.$getTextureHeight();
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$getTextureHeight = function () {
      return this.$textureHeight;
    }, i.prototype.$getScaleBitmapWidth = function () {
      return this.$bitmapWidth * t.$TextureScaleFactor;
    }, i.prototype.$getScaleBitmapHeight = function () {
      return this.$bitmapHeight * t.$TextureScaleFactor;
    }, Object.defineProperty(i.prototype, "bitmapData", {
      get: function get() {
        return this.$bitmapData;
      },
      set: function set(t) {
        this._setBitmapData(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype._setBitmapData = function (e) {
      this.$bitmapData = e;
      var i = t.$TextureScaleFactor,
          r = e.width * i,
          n = e.height * i;
      this.$initData(0, 0, r, n, 0, 0, r, n, e.width, e.height);
    }, i.prototype.$initData = function (e, i, r, n, a, o, s, h, c, l, u) {
      void 0 === u && (u = !1);
      var p = t.$TextureScaleFactor;
      this.$bitmapX = e / p, this.$bitmapY = i / p, this.$bitmapWidth = r / p, this.$bitmapHeight = n / p, this.$offsetX = a, this.$offsetY = o, this.$textureWidth = s, this.$textureHeight = h, this.$sourceWidth = c, this.$sourceHeight = l, this.$rotated = u, t.BitmapData.$invalidate(this.$bitmapData);
    }, i.prototype.getPixel32 = function (t, e) {
      throw new Error();
    }, i.prototype.getPixels = function (t, e, i, r) {
      throw void 0 === i && (i = 1), void 0 === r && (r = 1), new Error();
    }, i.prototype.toDataURL = function (t, e, i) {
      throw new Error();
    }, i.prototype.saveToFile = function (t, e, i) {
      throw new Error();
    }, i.prototype.dispose = function () {
      this.$bitmapData && (this.disposeBitmapData && this.$bitmapData.$dispose(), this.$bitmapData = null);
    }, i;
  }(t.HashObject);

  t.Texture = e, __reflect(e.prototype, "egret.Texture");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (t) {
    function e(e, i, r, n) {
      var a = t.call(this) || this;
      return a.$eventPhase = 2, a.$currentTarget = null, a.$target = null, a.$isDefaultPrevented = !1, a.$isPropagationStopped = !1, a.$isPropagationImmediateStopped = !1, a.$type = e, a.$bubbles = !!i, a.$cancelable = !!r, a.data = n, a;
    }

    return __extends(e, t), Object.defineProperty(e.prototype, "type", {
      get: function get() {
        return this.$type;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "bubbles", {
      get: function get() {
        return this.$bubbles;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "cancelable", {
      get: function get() {
        return this.$cancelable;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "eventPhase", {
      get: function get() {
        return this.$eventPhase;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "currentTarget", {
      get: function get() {
        return this.$currentTarget;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "target", {
      get: function get() {
        return this.$target;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.$setTarget = function (t) {
      return this.$target = t, !0;
    }, e.prototype.isDefaultPrevented = function () {
      return this.$isDefaultPrevented;
    }, e.prototype.preventDefault = function () {
      this.$cancelable && (this.$isDefaultPrevented = !0);
    }, e.prototype.stopPropagation = function () {
      this.$bubbles && (this.$isPropagationStopped = !0);
    }, e.prototype.stopImmediatePropagation = function () {
      this.$bubbles && (this.$isPropagationImmediateStopped = !0);
    }, e.prototype.clean = function () {
      this.data = this.$currentTarget = null, this.$setTarget(null);
    }, e.dispatchEvent = function (t, i, r, n) {
      void 0 === r && (r = !1);

      var a = e.create(e, i, r),
          o = e._getPropertyData(e);

      void 0 != n && (o.data = n);
      var s = t.dispatchEvent(a);
      return e.release(a), s;
    }, e._getPropertyData = function (t) {
      var e = t._props;
      return e || (e = t._props = {}), e;
    }, e.create = function (t, e, i, r) {
      var n,
          a = t.hasOwnProperty("eventPool");

      if (a && (n = t.eventPool), n || (n = t.eventPool = []), n.length) {
        var o = n.pop();
        return o.$type = e, o.$bubbles = !!i, o.$cancelable = !!r, o.$isDefaultPrevented = !1, o.$isPropagationStopped = !1, o.$isPropagationImmediateStopped = !1, o.$eventPhase = 2, o;
      }

      return new t(e, i, r);
    }, e.release = function (t) {
      t.clean();
      var e = Object.getPrototypeOf(t).constructor;
      e.eventPool.push(t);
    }, e.ADDED_TO_STAGE = "addedToStage", e.REMOVED_FROM_STAGE = "removedFromStage", e.ADDED = "added", e.REMOVED = "removed", e.ENTER_FRAME = "enterFrame", e.RENDER = "render", e.RESIZE = "resize", e.CHANGE = "change", e.CHANGING = "changing", e.COMPLETE = "complete", e.LOOP_COMPLETE = "loopComplete", e.FOCUS_IN = "focusIn", e.FOCUS_OUT = "focusOut", e.ENDED = "ended", e.ACTIVATE = "activate", e.DEACTIVATE = "deactivate", e.CLOSE = "close", e.CONNECT = "connect", e.LEAVE_STAGE = "leaveStage", e.SOUND_COMPLETE = "soundComplete", e;
  }(t.HashObject);

  t.Event = e, __reflect(e.prototype, "egret.Event");
}(egret || (egret = {}));
var egret;
!function (t) {
  function e() {
    return "";
  }

  function i(t) {
    throw new Error("#" + t);
  }

  function r() {}

  function n() {}

  t.getString = e, t.$error = i, t.$warn = r, t.$markCannotUse = n;
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = [],
      i = Math.PI / 180,
      r = function (r) {
    function n(t, e) {
      void 0 === t && (t = 0), void 0 === e && (e = 0);
      var i = r.call(this) || this;
      return i.x = t, i.y = e, i;
    }

    return __extends(n, r), n.release = function (t) {
      t && e.push(t);
    }, n.create = function (t, i) {
      var r = e.pop();
      return r || (r = new n()), r.setTo(t, i);
    }, Object.defineProperty(n.prototype, "length", {
      get: function get() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.setTo = function (t, e) {
      return this.x = t, this.y = e, this;
    }, n.prototype.clone = function () {
      return new n(this.x, this.y);
    }, n.prototype.equals = function (t) {
      return this.x == t.x && this.y == t.y;
    }, n.distance = function (t, e) {
      return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y));
    }, n.prototype.copyFrom = function (t) {
      this.x = t.x, this.y = t.y;
    }, n.prototype.add = function (t) {
      return new n(this.x + t.x, this.y + t.y);
    }, n.interpolate = function (t, e, i) {
      var r = 1 - i;
      return new n(t.x * i + e.x * r, t.y * i + e.y * r);
    }, n.prototype.normalize = function (t) {
      if (0 != this.x || 0 != this.y) {
        var e = t / this.length;
        this.x *= e, this.y *= e;
      }
    }, n.prototype.offset = function (t, e) {
      this.x += t, this.y += e;
    }, n.polar = function (e, r) {
      return new n(e * t.NumberUtils.cos(r / i), e * t.NumberUtils.sin(r / i));
    }, n.prototype.subtract = function (t) {
      return new n(this.x - t.x, this.y - t.y);
    }, n.prototype.toString = function () {
      return "(x=" + this.x + ", y=" + this.y + ")";
    }, n;
  }(t.HashObject);

  t.Point = r, __reflect(r.prototype, "egret.Point"), t.$TempPoint = new r();
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t.$touchChildren = !0, t.$children = [], t;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "numChildren", {
      get: function get() {
        return this.$children.length;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.addChild = function (t) {
      var e = this.$children.length;
      return t.$parent == this && e--, this.$doAddChild(t, e);
    }, i.prototype.addChildAt = function (t, e) {
      return e = 0 | +e, (0 > e || e >= this.$children.length) && (e = this.$children.length, t.$parent == this && e--), this.$doAddChild(t, e);
    }, i.prototype.$doAddChild = function (e, r, n) {
      void 0 === n && (n = !0);
      var a = this,
          o = e.$parent;
      if (o == a) return a.doSetChildIndex(e, r), e;
      o && o.removeChild(e), a.$children.splice(r, 0, e), e.$setParent(a), t.nativeRender && a.$nativeDisplayObject.addChildAt(e.$nativeDisplayObject.id, r);
      var s = a.$stage;
      if (s && e.$onAddToStage(s, a.$nestLevel + 1), n && e.dispatchEventWith(t.Event.ADDED, !0), s) for (var h = i.$EVENT_ADD_TO_STAGE_LIST; h.length;) {
        var c = h.shift();
        c.$stage && n && c.dispatchEventWith(t.Event.ADDED_TO_STAGE);
      }

      if (!t.nativeRender && (e.$maskedObject && e.$maskedObject.$updateRenderMode(), !a.$cacheDirty)) {
        a.$cacheDirty = !0;
        var l = a.$parent;
        l && !l.$cacheDirty && (l.$cacheDirty = !0, l.$cacheDirtyUp());
        var u = a.$maskedObject;
        u && !u.$cacheDirty && (u.$cacheDirty = !0, u.$cacheDirtyUp());
      }

      return this.$childAdded(e, r), e;
    }, i.prototype.contains = function (t) {
      for (; t;) {
        if (t == this) return !0;
        t = t.$parent;
      }

      return !1;
    }, i.prototype.getChildAt = function (t) {
      return t = 0 | +t, t >= 0 && t < this.$children.length ? this.$children[t] : null;
    }, i.prototype.getChildIndex = function (t) {
      return this.$children.indexOf(t);
    }, i.prototype.getChildByName = function (t) {
      for (var e, i = this.$children, r = i.length, n = 0; r > n; n++) {
        if (e = i[n], e.name == t) return e;
      }

      return null;
    }, i.prototype.removeChild = function (t) {
      var e = this.$children.indexOf(t);
      return e >= 0 ? this.$doRemoveChild(e) : null;
    }, i.prototype.removeChildAt = function (t) {
      return t = 0 | +t, t >= 0 && t < this.$children.length ? this.$doRemoveChild(t) : null;
    }, i.prototype.$doRemoveChild = function (e, r) {
      void 0 === r && (r = !0), e = 0 | +e;
      var n = this,
          a = this.$children,
          o = a[e];

      if (this.$childRemoved(o, e), r && o.dispatchEventWith(t.Event.REMOVED, !0), this.$stage) {
        o.$onRemoveFromStage();

        for (var s = i.$EVENT_REMOVE_FROM_STAGE_LIST; s.length > 0;) {
          var h = s.shift();
          r && h.$hasAddToStage && (h.$hasAddToStage = !1, h.dispatchEventWith(t.Event.REMOVED_FROM_STAGE)), h.$hasAddToStage = !1, h.$stage = null;
        }
      }

      this.$displayList || this.$parentDisplayList;
      o.$setParent(null);
      var c = a.indexOf(o);
      if (-1 != c && a.splice(c, 1), t.nativeRender) n.$nativeDisplayObject.removeChild(o.$nativeDisplayObject.id);else if (o.$maskedObject && o.$maskedObject.$updateRenderMode(), !n.$cacheDirty) {
        n.$cacheDirty = !0;
        var l = n.$parent;
        l && !l.$cacheDirty && (l.$cacheDirty = !0, l.$cacheDirtyUp());
        var u = n.$maskedObject;
        u && !u.$cacheDirty && (u.$cacheDirty = !0, u.$cacheDirtyUp());
      }
      return o;
    }, i.prototype.setChildIndex = function (t, e) {
      e = 0 | +e, (0 > e || e >= this.$children.length) && (e = this.$children.length - 1), this.doSetChildIndex(t, e);
    }, i.prototype.doSetChildIndex = function (e, i) {
      var r = this,
          n = this.$children.indexOf(e);
      if (n != i) if (this.$childRemoved(e, n), this.$children.splice(n, 1), this.$children.splice(i, 0, e), this.$childAdded(e, i), t.nativeRender) this.$nativeDisplayObject.removeChild(e.$nativeDisplayObject.id), this.$nativeDisplayObject.addChildAt(e.$nativeDisplayObject.id, i);else if (!r.$cacheDirty) {
        r.$cacheDirty = !0;
        var a = r.$parent;
        a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp());
        var o = r.$maskedObject;
        o && !o.$cacheDirty && (o.$cacheDirty = !0, o.$cacheDirtyUp());
      }
    }, i.prototype.swapChildrenAt = function (t, e) {
      t = 0 | +t, e = 0 | +e, t >= 0 && t < this.$children.length && e >= 0 && e < this.$children.length && this.doSwapChildrenAt(t, e);
    }, i.prototype.swapChildren = function (t, e) {
      var i = this.$children.indexOf(t),
          r = this.$children.indexOf(e);
      -1 == i || -1 == r || this.doSwapChildrenAt(i, r);
    }, i.prototype.doSwapChildrenAt = function (e, i) {
      var r = this;

      if (e > i) {
        var n = i;
        i = e, e = n;
      } else if (e == i) return;

      var a = this.$children,
          o = a[e],
          s = a[i];
      if (this.$childRemoved(o, e), this.$childRemoved(s, i), a[e] = s, a[i] = o, this.$childAdded(s, e), this.$childAdded(o, i), t.nativeRender) this.$nativeDisplayObject.swapChild(e, i);else if (!r.$cacheDirty) {
        r.$cacheDirty = !0;
        var h = r.$parent;
        h && !h.$cacheDirty && (h.$cacheDirty = !0, h.$cacheDirtyUp());
        var c = r.$maskedObject;
        c && !c.$cacheDirty && (c.$cacheDirty = !0, c.$cacheDirtyUp());
      }
    }, i.prototype.removeChildren = function () {
      for (var t = this.$children, e = t.length - 1; e >= 0; e--) {
        this.$doRemoveChild(e);
      }
    }, i.prototype.$childAdded = function (t, e) {}, i.prototype.$childRemoved = function (t, e) {}, i.prototype.$onAddToStage = function (t, i) {
      e.prototype.$onAddToStage.call(this, t, i);
      var r = this.$children,
          n = r.length;
      i++;

      for (var a = 0; n > a; a++) {
        var o = this.$children[a];
        o.$onAddToStage(t, i), o.$maskedObject && o.$maskedObject.$updateRenderMode();
      }
    }, i.prototype.$onRemoveFromStage = function () {
      e.prototype.$onRemoveFromStage.call(this);

      for (var t = this.$children, i = t.length, r = 0; i > r; r++) {
        var n = t[r];
        n.$onRemoveFromStage();
      }
    }, i.prototype.$measureChildBounds = function (e) {
      var i = this.$children,
          r = i.length;

      if (0 != r) {
        for (var n = 0, a = 0, o = 0, s = 0, h = !1, c = -1; r > c; c++) {
          var l = void 0;
          -1 == c ? l = e : (i[c].getBounds(t.$TempRectangle), i[c].$getMatrix().$transformBounds(t.$TempRectangle), l = t.$TempRectangle), l.isEmpty() || (h ? (n = Math.min(n, l.x), a = Math.max(a, l.x + l.width), o = Math.min(o, l.y), s = Math.max(s, l.y + l.height)) : (h = !0, n = l.x, a = n + l.width, o = l.y, s = o + l.height));
        }

        e.setTo(n, o, a - n, s - o);
      }
    }, Object.defineProperty(i.prototype, "touchChildren", {
      get: function get() {
        return this.$getTouchChildren();
      },
      set: function set(t) {
        this.$setTouchChildren(!!t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$getTouchChildren = function () {
      return this.$touchChildren;
    }, i.prototype.$setTouchChildren = function (t) {
      return this.$touchChildren == t ? !1 : (this.$touchChildren = t, !0);
    }, i.prototype.$hitTest = function (t, i) {
      if (!this.$visible) return null;
      var r = this.$getInvertedConcatenatedMatrix(),
          n = r.a * t + r.c * i + r.tx,
          a = r.b * t + r.d * i + r.ty,
          o = this.$scrollRect ? this.$scrollRect : this.$maskRect;
      if (o && !o.contains(n, a)) return null;
      if (this.$mask && !this.$mask.$hitTest(t, i)) return null;

      for (var s = this.$children, h = !1, c = null, l = s.length - 1; l >= 0; l--) {
        var u = s[l];

        if (!u.$maskedObject && (c = u.$hitTest(t, i))) {
          if (h = !0, c.$touchEnabled) break;
          c = null;
        }
      }

      return c ? this.$touchChildren ? c : this : h ? this : e.prototype.$hitTest.call(this, t, i);
    }, i.$EVENT_ADD_TO_STAGE_LIST = [], i.$EVENT_REMOVE_FROM_STAGE_LIST = [], i;
  }(t.DisplayObject);

  t.DisplayObjectContainer = e, __reflect(e.prototype, "egret.DisplayObjectContainer");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i(i) {
      var r = e.call(this) || this;
      return r._bitmapX = 0, r._bitmapY = 0, r._textureMap = t.createMap(), r.$texture = i, r._bitmapX = i.$bitmapX - i.$offsetX, r._bitmapY = i.$bitmapY - i.$offsetY, r;
    }

    return __extends(i, e), i.prototype.getTexture = function (t) {
      return this._textureMap[t];
    }, i.prototype.createTexture = function (e, i, r, n, a, o, s, h, c) {
      void 0 === o && (o = 0), void 0 === s && (s = 0), void 0 === h && (h = o + n), void 0 === c && (c = s + a);
      var l = new t.Texture();
      return l.disposeBitmapData = !1, l.$bitmapData = this.$texture.$bitmapData, l.$initData(this._bitmapX + i, this._bitmapY + r, n, a, o, s, h, c, this.$texture.$sourceWidth, this.$texture.$sourceHeight), this._textureMap[e] = l, l;
    }, i.prototype.dispose = function () {
      this.$texture && this.$texture.dispose();
    }, i;
  }(t.HashObject);

  t.SpriteSheet = e, __reflect(e.prototype, "egret.SpriteSheet");
}(egret || (egret = {}));
var egret;
!function (t) {
  t.$locale_strings = t.$locale_strings || {}, t.$language = "en_US";
}(egret || (egret = {})), function (t) {
  var e;
  !function (e) {
    function i(e) {
      for (var i = [], r = 1; r < arguments.length; r++) {
        i[r - 1] = arguments[r];
      }

      var n = t.$locale_strings[t.$language][e];
      if (!n) return "{" + e + "}";

      for (var a = i.length, o = 0; a > o; o++) {
        n = n.replace("{" + o + "}", i[o]);
      }

      return n;
    }

    e.tr = i;
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i(r) {
      var n = e.call(this) || this;
      return n.$texture = null, n.$bitmapData = null, n.$bitmapX = 0, n.$bitmapY = 0, n.$bitmapWidth = 0, n.$bitmapHeight = 0, n.$offsetX = 0, n.$offsetY = 0, n.$textureWidth = 0, n.$textureHeight = 0, n.$sourceWidth = 0, n.$sourceHeight = 0, n.$smoothing = i.defaultSmoothing, n.$explicitBitmapWidth = 0 / 0, n.$explicitBitmapHeight = 0 / 0, n.$scale9Grid = null, n.$fillMode = "scale", n._pixelHitTest = !1, n.$renderNode = new t.sys.NormalBitmapNode(), n.$setTexture(r), r && (n.$renderNode.rotated = r.$rotated), n;
    }

    return __extends(i, e), i.prototype.createNativeDisplayObject = function () {
      this.$nativeDisplayObject = new egret_native.NativeDisplayObject(1);
    }, i.prototype.$onAddToStage = function (i, r) {
      e.prototype.$onAddToStage.call(this, i, r);
      var n = this.$texture;
      n && n.$bitmapData && t.BitmapData.$addDisplayObject(this, n.$bitmapData);
    }, i.prototype.$onRemoveFromStage = function () {
      e.prototype.$onRemoveFromStage.call(this);
      var i = this.$texture;
      i && t.BitmapData.$removeDisplayObject(this, i.$bitmapData);
    }, Object.defineProperty(i.prototype, "texture", {
      get: function get() {
        return this.$texture;
      },
      set: function set(t) {
        var e = this;
        e.$setTexture(t), t && e.$renderNode && (e.$renderNode.rotated = t.$rotated);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setTexture = function (e) {
      var i = this,
          r = i.$texture;
      if (e == r) return !1;

      if (i.$texture = e, !e) {
        r && t.BitmapData.$removeDisplayObject(i, r.$bitmapData), i.setImageData(null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), i.$renderDirty = !0;
        var n = i.$parent;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
        var a = i.$maskedObject;
        return a && !a.$cacheDirty && (a.$cacheDirty = !0, a.$cacheDirtyUp()), t.nativeRender && this.setBitmapDataToWasm(null), !0;
      }

      if (i.$refreshImageData(), i.$stage) {
        if (r && r.$bitmapData) {
          var o = r.$bitmapData.hashCode,
              s = e.$bitmapData ? e.$bitmapData.hashCode : -1;

          if (o == s) {
            i.$renderDirty = !0;
            var h = i.$parent;
            h && !h.$cacheDirty && (h.$cacheDirty = !0, h.$cacheDirtyUp());
            var c = i.$maskedObject;
            return c && !c.$cacheDirty && (c.$cacheDirty = !0, c.$cacheDirtyUp()), !0;
          }

          t.BitmapData.$removeDisplayObject(i, r.$bitmapData);
        }

        t.BitmapData.$addDisplayObject(i, e.$bitmapData);
      }

      i.$renderDirty = !0;
      var l = i.$parent;
      l && !l.$cacheDirty && (l.$cacheDirty = !0, l.$cacheDirtyUp());
      var u = i.$maskedObject;
      return u && !u.$cacheDirty && (u.$cacheDirty = !0, u.$cacheDirtyUp()), !0;
    }, i.prototype.$setBitmapData = function (t) {
      this.$setTexture(t);
    }, i.prototype.setBitmapDataToWasm = function (t) {
      this.$nativeDisplayObject.setTexture(t);
    }, i.prototype.$refreshImageData = function () {
      var e = this.$texture;
      e ? (t.nativeRender && this.setBitmapDataToWasm(e), this.setImageData(e.$bitmapData, e.$bitmapX, e.$bitmapY, e.$bitmapWidth, e.$bitmapHeight, e.$offsetX, e.$offsetY, e.$getTextureWidth(), e.$getTextureHeight(), e.$sourceWidth, e.$sourceHeight)) : t.nativeRender && this.setBitmapDataToWasm(null);
    }, i.prototype.setImageData = function (t, e, i, r, n, a, o, s, h, c, l) {
      this.$bitmapData = t, this.$bitmapX = e, this.$bitmapY = i, this.$bitmapWidth = r, this.$bitmapHeight = n, this.$offsetX = a, this.$offsetY = o, this.$textureWidth = s, this.$textureHeight = h, this.$sourceWidth = c, this.$sourceHeight = l;
    }, Object.defineProperty(i.prototype, "scale9Grid", {
      get: function get() {
        return this.$scale9Grid;
      },
      set: function set(t) {
        this.$setScale9Grid(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setScale9Grid = function (e) {
      var i = this;
      if (i.$scale9Grid = e, i.$renderDirty = !0, t.nativeRender) e ? i.$nativeDisplayObject.setScale9Grid(e.x, e.y, e.width, e.height) : i.$nativeDisplayObject.setScale9Grid(0, 0, -1, -1);else {
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
    }, Object.defineProperty(i.prototype, "fillMode", {
      get: function get() {
        return this.$fillMode;
      },
      set: function set(t) {
        this.$setFillMode(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setFillMode = function (e) {
      var i = this;
      if (e == i.$fillMode) return !1;
      if (i.$fillMode = e, t.nativeRender) i.$nativeDisplayObject.setBitmapFillMode(i.$fillMode);else {
        i.$renderDirty = !0;
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
      return !0;
    }, Object.defineProperty(i.prototype, "smoothing", {
      get: function get() {
        return this.$smoothing;
      },
      set: function set(e) {
        var i = this;

        if (e != this.$smoothing && (this.$smoothing = e, this.$renderNode.smoothing = e, !t.nativeRender)) {
          var r = i.$parent;
          r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
          var n = i.$maskedObject;
          n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
        }
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setWidth = function (e) {
      var i = this;
      if (0 > e || e == i.$explicitBitmapWidth) return !1;
      if (i.$explicitBitmapWidth = e, i.$renderDirty = !0, t.nativeRender) i.$nativeDisplayObject.setWidth(e);else {
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
      return !0;
    }, i.prototype.$setHeight = function (e) {
      var i = this;
      if (0 > e || e == i.$explicitBitmapHeight) return !1;
      if (i.$explicitBitmapHeight = e, i.$renderDirty = !0, t.nativeRender) i.$nativeDisplayObject.setHeight(e);else {
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
      return !0;
    }, i.prototype.$getWidth = function () {
      return isNaN(this.$explicitBitmapWidth) ? this.$getContentBounds().width : this.$explicitBitmapWidth;
    }, i.prototype.$getHeight = function () {
      return isNaN(this.$explicitBitmapHeight) ? this.$getContentBounds().height : this.$explicitBitmapHeight;
    }, i.prototype.$measureContentBounds = function (t) {
      if (this.$bitmapData) {
        var e = isNaN(this.$explicitBitmapWidth) ? this.$textureWidth : this.$explicitBitmapWidth,
            i = isNaN(this.$explicitBitmapHeight) ? this.$textureHeight : this.$explicitBitmapHeight;
        t.setTo(0, 0, e, i);
      } else {
        var e = isNaN(this.$explicitBitmapWidth) ? 0 : this.$explicitBitmapWidth,
            i = isNaN(this.$explicitBitmapHeight) ? 0 : this.$explicitBitmapHeight;
        t.setTo(0, 0, e, i);
      }
    }, i.prototype.$updateRenderNode = function () {
      if (this.$texture) {
        var e = isNaN(this.$explicitBitmapWidth) ? this.$textureWidth : this.$explicitBitmapWidth,
            i = isNaN(this.$explicitBitmapHeight) ? this.$textureHeight : this.$explicitBitmapHeight,
            r = this.scale9Grid || this.$texture.scale9Grid;
        r ? (this.$renderNode instanceof t.sys.NormalBitmapNode && (this.$renderNode = new t.sys.BitmapNode()), t.sys.BitmapNode.$updateTextureDataWithScale9Grid(this.$renderNode, this.$bitmapData, r, this.$bitmapX, this.$bitmapY, this.$bitmapWidth, this.$bitmapHeight, this.$offsetX, this.$offsetY, this.$textureWidth, this.$textureHeight, e, i, this.$sourceWidth, this.$sourceHeight, this.$smoothing)) : (this.fillMode == t.BitmapFillMode.REPEAT && this.$renderNode instanceof t.sys.NormalBitmapNode && (this.$renderNode = new t.sys.BitmapNode()), t.sys.BitmapNode.$updateTextureData(this.$renderNode, this.$bitmapData, this.$bitmapX, this.$bitmapY, this.$bitmapWidth, this.$bitmapHeight, this.$offsetX, this.$offsetY, this.$textureWidth, this.$textureHeight, e, i, this.$sourceWidth, this.$sourceHeight, this.$fillMode, this.$smoothing));
      }
    }, Object.defineProperty(i.prototype, "pixelHitTest", {
      get: function get() {
        return this._pixelHitTest;
      },
      set: function set(t) {
        this._pixelHitTest = !!t;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$hitTest = function (t, i) {
      var r = e.prototype.$hitTest.call(this, t, i);

      if (r && this._pixelHitTest) {
        var n = this.hitTestPoint(t, i, !0);
        n || (r = null);
      }

      return r;
    }, i.defaultSmoothing = !0, i;
  }(t.DisplayObject);

  t.Bitmap = e, __reflect(e.prototype, "egret.Bitmap");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {
    var e = function () {
      function t() {
        this.type = 0, this.drawData = [], this.renderCount = 0;
      }

      return t.prototype.cleanBeforeRender = function () {
        this.drawData.length = 0, this.renderCount = 0;
      }, t.prototype.$getRenderCount = function () {
        return this.renderCount;
      }, t;
    }();

    t.RenderNode = e, __reflect(e.prototype, "egret.sys.RenderNode");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {
    var e = function () {
      function t() {
        this.type = 0, this.$commands = [], this.$data = [], this.commandPosition = 0, this.dataPosition = 0, this.$lastX = 0, this.$lastY = 0;
      }

      return t.prototype.moveTo = function (t, e) {
        this.$commands[this.commandPosition++] = 1;
        var i = this.dataPosition;
        this.$data[i++] = t, this.$data[i++] = e, this.dataPosition = i;
      }, t.prototype.lineTo = function (t, e) {
        this.$commands[this.commandPosition++] = 2;
        var i = this.dataPosition;
        this.$data[i++] = t, this.$data[i++] = e, this.dataPosition = i;
      }, t.prototype.curveTo = function (t, e, i, r) {
        this.$commands[this.commandPosition++] = 3;
        var n = this.dataPosition;
        this.$data[n++] = t, this.$data[n++] = e, this.$data[n++] = i, this.$data[n++] = r, this.dataPosition = n;
      }, t.prototype.cubicCurveTo = function (t, e, i, r, n, a) {
        this.$commands[this.commandPosition++] = 4;
        var o = this.dataPosition;
        this.$data[o++] = t, this.$data[o++] = e, this.$data[o++] = i, this.$data[o++] = r, this.$data[o++] = n, this.$data[o++] = a, this.dataPosition = o;
      }, t.prototype.drawRect = function (t, e, i, r) {
        var n = t + i,
            a = e + r;
        this.moveTo(t, e), this.lineTo(n, e), this.lineTo(n, a), this.lineTo(t, a), this.lineTo(t, e);
      }, t.prototype.drawRoundRect = function (t, e, i, r, n, a) {
        var o = .5 * n | 0,
            s = a ? .5 * a | 0 : o;
        if (!o || !s) return void this.drawRect(t, e, i, r);
        var h = .5 * i,
            c = .5 * r;
        if (o > h && (o = h), s > c && (s = c), h === o && c === s) return void (o === s ? this.drawCircle(t + o, e + s, o) : this.drawEllipse(t, e, 2 * o, 2 * s));
        var l = t + i,
            u = e + r,
            p = t + o,
            d = l - o,
            f = e + s,
            g = u - s;
        this.moveTo(l, g), this.curveTo(l, u, d, u), this.lineTo(p, u), this.curveTo(t, u, t, g), this.lineTo(t, f), this.curveTo(t, e, p, e), this.lineTo(d, e), this.curveTo(l, e, l, f), this.lineTo(l, g);
      }, t.prototype.drawCircle = function (t, e, i) {
        this.arcToBezier(t, e, i, i, 0, 2 * Math.PI);
      }, t.prototype.drawEllipse = function (t, e, i, r) {
        var n = .5 * i,
            a = .5 * r;
        t += n, e += a, this.arcToBezier(t, e, n, a, 0, 2 * Math.PI);
      }, t.prototype.drawArc = function (t, e, i, r, n, a) {
        a ? n >= r && (n -= 2 * Math.PI) : r >= n && (n += 2 * Math.PI), this.arcToBezier(t, e, i, i, r, n, a);
      }, t.prototype.arcToBezier = function (t, e, i, r, n, a, o) {
        var s = .5 * Math.PI,
            h = n,
            c = h;
        o ? (c += -s - h % s, a > c && (c = a)) : (c += s - h % s, c > a && (c = a));
        var l = t + Math.cos(h) * i,
            u = e + Math.sin(h) * r;
        (this.$lastX != l || this.$lastY != u) && this.moveTo(l, u);

        for (var p = Math.cos(h), d = Math.sin(h), f = 0; 4 > f; f++) {
          var g = c - h,
              $ = 4 * Math.tan(g / 4) / 3,
              y = l - d * $ * i,
              v = u + p * $ * r;
          p = Math.cos(c), d = Math.sin(c), l = t + p * i, u = e + d * r;
          var b = l + d * $ * i,
              m = u - p * $ * r;
          if (this.cubicCurveTo(y, v, b, m, l, u), c === a) break;
          h = c, o ? (c = h - s, a > c && (c = a)) : (c = h + s, c > a && (c = a));
        }
      }, t;
    }();

    t.Path2D = e, __reflect(e.prototype, "egret.sys.Path2D");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  t.fontMapping = {};
}(egret || (egret = {}));
var egret;
!function (t) {
  function e() {
    var t = Object.create(null);
    return t.__v8__ = void 0, delete t.__v8__, t;
  }

  t.createMap = e;
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (t) {
    function e(e, i, r, n, a, o, s, h) {
      void 0 === e && (e = 16711680), void 0 === i && (i = 1), void 0 === r && (r = 6), void 0 === n && (n = 6), void 0 === a && (a = 2), void 0 === o && (o = 1), void 0 === s && (s = !1), void 0 === h && (h = !1);
      var c = t.call(this) || this,
          l = c;
      return l.type = "glow", l.$color = e, l.$blue = 255 & e, l.$green = (65280 & e) >> 8, l.$red = e >> 16, l.$alpha = i, l.$blurX = r, l.$blurY = n, l.$strength = a, l.$quality = o, l.$inner = s, l.$knockout = h, l.$uniforms.color = {
        x: c.$red / 255,
        y: c.$green / 255,
        z: c.$blue / 255,
        w: 1
      }, l.$uniforms.alpha = i, l.$uniforms.blurX = r, l.$uniforms.blurY = n, l.$uniforms.strength = a, l.$uniforms.inner = s ? 1 : 0, l.$uniforms.knockout = h ? 0 : 1, l.$uniforms.dist = 0, l.$uniforms.angle = 0, l.$uniforms.hideObject = 0, l.onPropertyChange(), c;
    }

    return __extends(e, t), Object.defineProperty(e.prototype, "color", {
      get: function get() {
        return this.$color;
      },
      set: function set(t) {
        this.$color != t && (this.$color = t, this.$blue = 255 & t, this.$green = (65280 & t) >> 8, this.$red = t >> 16, this.$uniforms.color.x = this.$red / 255, this.$uniforms.color.y = this.$green / 255, this.$uniforms.color.z = this.$blue / 255);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "alpha", {
      get: function get() {
        return this.$alpha;
      },
      set: function set(t) {
        this.$alpha != t && (this.$alpha = t, this.$uniforms.alpha = t);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "blurX", {
      get: function get() {
        return this.$blurX;
      },
      set: function set(t) {
        var e = this;
        e.$blurX != t && (e.$blurX = t, e.$uniforms.blurX = t, e.onPropertyChange());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "blurY", {
      get: function get() {
        return this.$blurY;
      },
      set: function set(t) {
        var e = this;
        e.$blurY != t && (e.$blurY = t, e.$uniforms.blurY = t, e.onPropertyChange());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "strength", {
      get: function get() {
        return this.$strength;
      },
      set: function set(t) {
        this.$strength != t && (this.$strength = t, this.$uniforms.strength = t);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "quality", {
      get: function get() {
        return this.$quality;
      },
      set: function set(t) {
        this.$quality != t && (this.$quality = t);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "inner", {
      get: function get() {
        return this.$inner;
      },
      set: function set(t) {
        this.$inner != t && (this.$inner = t, this.$uniforms.inner = t ? 1 : 0);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "knockout", {
      get: function get() {
        return this.$knockout;
      },
      set: function set(t) {
        this.$knockout != t && (this.$knockout = t, this.$uniforms.knockout = t ? 0 : 1);
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.$toJson = function () {
      return '{"color": ' + this.$color + ', "red": ' + this.$red + ', "green": ' + this.$green + ', "blue": ' + this.$blue + ', "alpha": ' + this.$alpha + ', "blurX": ' + this.$blurX + ', "blurY": ' + this.blurY + ', "strength": ' + this.$strength + ', "quality": ' + this.$quality + ', "inner": ' + this.$inner + ', "knockout": ' + this.$knockout + "}";
    }, e.prototype.updatePadding = function () {
      var t = this;
      t.paddingLeft = t.blurX, t.paddingRight = t.blurX, t.paddingTop = t.blurY, t.paddingBottom = t.blurY;
    }, e;
  }(t.Filter);

  t.GlowFilter = e, __reflect(e.prototype, "egret.GlowFilter");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function t() {}

    return t.NORMAL = "normal", t.ADD = "add", t.ERASE = "erase", t;
  }();

  t.BlendMode = e, __reflect(e.prototype, "egret.BlendMode");
}(egret || (egret = {})), function (t) {
  var e;
  !function (t) {
    function e(t) {
      var e = n[t];
      return void 0 === e ? 0 : e;
    }

    function i(t) {
      var e = r[t];
      return void 0 === e ? "normal" : e;
    }

    for (var r = ["normal", "add", "erase"], n = {}, a = r.length, o = 0; a > o; o++) {
      var s = r[o];
      n[s] = o;
    }

    t.blendModeToNumber = e, t.numberToBlendMode = i;
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  t.CapsStyle = {
    NONE: "none",
    ROUND: "round",
    SQUARE: "square"
  };
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function e() {}

    return e.compileProgram = function (i, r, n) {
      var a = e.compileFragmentShader(i, n),
          o = e.compileVertexShader(i, r),
          s = i.createProgram();
      return i.attachShader(s, o), i.attachShader(s, a), i.linkProgram(s), i.getProgramParameter(s, i.LINK_STATUS) || t.$warn(1020), s;
    }, e.compileFragmentShader = function (t, i) {
      return e._compileShader(t, i, t.FRAGMENT_SHADER);
    }, e.compileVertexShader = function (t, i) {
      return e._compileShader(t, i, t.VERTEX_SHADER);
    }, e._compileShader = function (t, e, i) {
      var r = t.createShader(i);
      return t.shaderSource(r, e), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS) ? r : null;
    }, e.checkCanUseWebGL = function () {
      if (void 0 == e.canUseWebGL) try {
        var t = document.createElement("canvas");
        e.canUseWebGL = !(!window.WebGLRenderingContext || !t.getContext("webgl") && !t.getContext("experimental-webgl"));
      } catch (i) {
        e.canUseWebGL = !1;
      }
      return e.canUseWebGL;
    }, e.deleteWebGLTexture = function (t) {
      if (t) {
        var e = t.glContext;
        e && e.deleteTexture(t);
      }
    }, e;
  }();

  t.WebGLUtils = e, __reflect(e.prototype, "egret.WebGLUtils");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (t) {
    function e(e, i, r) {
      return void 0 === i && (i = !1), void 0 === r && (r = !1), t.call(this, e, i, r) || this;
    }

    return __extends(e, t), e.FOCUS_IN = "focusIn", e.FOCUS_OUT = "focusOut", e;
  }(t.Event);

  t.FocusEvent = e, __reflect(e.prototype, "egret.FocusEvent");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return __extends(e, t), e.PERMISSION_DENIED = "permissionDenied", e.UNAVAILABLE = "unavailable", e;
  }(t.Event);

  t.GeolocationEvent = e, __reflect(e.prototype, "egret.GeolocationEvent");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i(t, i, r) {
      void 0 === i && (i = !1), void 0 === r && (r = !1);
      var n = e.call(this, t, i, r) || this;
      return n._status = 0, n;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "status", {
      get: function get() {
        return this._status;
      },
      enumerable: !0,
      configurable: !0
    }), i.dispatchHTTPStatusEvent = function (e, r) {
      var n = t.Event.create(i, i.HTTP_STATUS);
      n._status = r;
      var a = e.dispatchEvent(n);
      return t.Event.release(n), a;
    }, i.HTTP_STATUS = "httpStatus", i;
  }(t.Event);

  t.HTTPStatusEvent = e, __reflect(e.prototype, "egret.HTTPStatusEvent");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i(t, i, r) {
      return void 0 === i && (i = !1), void 0 === r && (r = !1), e.call(this, t, i, r) || this;
    }

    return __extends(i, e), i.dispatchIOErrorEvent = function (e) {
      var r = t.Event.create(i, i.IO_ERROR),
          n = e.dispatchEvent(r);
      return t.Event.release(r), n;
    }, i.IO_ERROR = "ioError", i;
  }(t.Event);

  t.IOErrorEvent = e, __reflect(e.prototype, "egret.IOErrorEvent");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return __extends(e, t), e;
  }(t.Event);

  t.MotionEvent = e, __reflect(e.prototype, "egret.MotionEvent");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return __extends(e, t), e;
  }(t.Event);

  t.OrientationEvent = e, __reflect(e.prototype, "egret.OrientationEvent");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i(t, i, r, n, a) {
      void 0 === i && (i = !1), void 0 === r && (r = !1), void 0 === n && (n = 0), void 0 === a && (a = 0);
      var o = e.call(this, t, i, r) || this;
      return o.bytesLoaded = 0, o.bytesTotal = 0, o.bytesLoaded = n, o.bytesTotal = a, o;
    }

    return __extends(i, e), i.dispatchProgressEvent = function (e, r, n, a) {
      void 0 === n && (n = 0), void 0 === a && (a = 0);
      var o = t.Event.create(i, r);
      o.bytesLoaded = n, o.bytesTotal = a;
      var s = e.dispatchEvent(o);
      return t.Event.release(o), s;
    }, i.PROGRESS = "progress", i.SOCKET_DATA = "socketData", i;
  }(t.Event);

  t.ProgressEvent = e, __reflect(e.prototype, "egret.ProgressEvent");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i(t, i, r) {
      return void 0 === i && (i = !1), void 0 === r && (r = !1), e.call(this, t, i, r) || this;
    }

    return __extends(i, e), i.dispatchStageOrientationEvent = function (e, r) {
      var n = t.Event.create(i, r),
          a = e.dispatchEvent(n);
      return t.Event.release(n), a;
    }, i.ORIENTATION_CHANGE = "orientationChange", i;
  }(t.Event);

  t.StageOrientationEvent = e, __reflect(e.prototype, "egret.StageOrientationEvent");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i(t, i, r, n) {
      void 0 === i && (i = !1), void 0 === r && (r = !1), void 0 === n && (n = "");
      var a = e.call(this, t, i, r) || this;
      return a.text = n, a;
    }

    return __extends(i, e), i.dispatchTextEvent = function (e, r, n) {
      var a = t.Event.create(i, r);
      a.text = n;
      var o = e.dispatchEvent(a);
      return t.Event.release(a), o;
    }, i.LINK = "link", i;
  }(t.Event);

  t.TextEvent = e, __reflect(e.prototype, "egret.TextEvent");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i(t, i, r) {
      return e.call(this, t, i, r) || this;
    }

    return __extends(i, e), i.prototype.updateAfterEvent = function () {
      t.sys.$requestRenderingFlag = !0;
    }, i.dispatchTimerEvent = function (e, r, n, a) {
      var o = t.Event.create(i, r, n, a),
          s = e.dispatchEvent(o);
      return t.Event.release(o), s;
    }, i.TIMER = "timer", i.TIMER_COMPLETE = "timerComplete", i;
  }(t.Event);

  t.TimerEvent = e, __reflect(e.prototype, "egret.TimerEvent");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i(i) {
      var r = e.call(this) || this;

      if (r.format = "image", r.$deleteSource = !0, t.nativeRender) {
        var n = new egret_native.NativeBitmapData();
        n.$init(), r.$nativeBitmapData = n;
      }

      return r.source = i, r.width = i.width, r.height = i.height, r;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "source", {
      get: function get() {
        return this.$source;
      },
      set: function set(e) {
        this.$source = e, t.nativeRender && egret_native.NativeDisplayObject.setSourceToNativeBitmapData(this.$nativeBitmapData, e);
      },
      enumerable: !0,
      configurable: !0
    }), i.create = function (e, r, n) {
      var a = "";
      a = "arraybuffer" === e ? t.Base64Util.encode(r) : r;
      var o = "image/png";
      "/" === a.charAt(0) ? o = "image/jpeg" : "R" === a.charAt(0) ? o = "image/gif" : "i" === a.charAt(0) && (o = "image/png");
      var s = new Image();
      s.src = "data:" + o + ";base64," + a, s.crossOrigin = "*";
      var h = new i(s);
      return s.onload = function () {
        s.onload = void 0, h.source = s, h.height = s.height, h.width = s.width, n && n(h);
      }, h;
    }, i.prototype.$dispose = function () {
      "webgl" == t.Capabilities.renderMode && this.webGLTexture && (t.WebGLUtils.deleteWebGLTexture(this.webGLTexture), this.webGLTexture = null), this.source && this.source.dispose && this.source.dispose(), this.source = null, t.nativeRender && egret_native.NativeDisplayObject.disposeNativeBitmapData(this.$nativeBitmapData), i.$dispose(this);
    }, i.$addDisplayObject = function (t, e) {
      if (e) {
        var r = e.hashCode;

        if (r) {
          if (!i._displayList[r]) return void (i._displayList[r] = [t]);
          var n = i._displayList[r];
          n.indexOf(t) < 0 && n.push(t);
        }
      }
    }, i.$removeDisplayObject = function (t, e) {
      if (e) {
        var r = e.hashCode;

        if (r && i._displayList[r]) {
          var n = i._displayList[r],
              a = n.indexOf(t);
          a >= 0 && n.splice(a, 1);
        }
      }
    }, i.$invalidate = function (e) {
      if (e) {
        var r = e.hashCode;
        if (r && i._displayList[r]) for (var n = i._displayList[r], a = 0; a < n.length; a++) {
          n[a] instanceof t.Bitmap && n[a].$refreshImageData();
          var o = n[a];
          o.$renderDirty = !0;
          var s = o.$parent;
          s && !s.$cacheDirty && (s.$cacheDirty = !0, s.$cacheDirtyUp());
          var h = o.$maskedObject;
          h && !h.$cacheDirty && (h.$cacheDirty = !0, h.$cacheDirtyUp());
        }
      }
    }, i.$dispose = function (e) {
      if (e) {
        var r = e.hashCode;

        if (r && i._displayList[r]) {
          for (var n = i._displayList[r], a = 0, o = n; a < o.length; a++) {
            var s = o[a];
            s instanceof t.Bitmap && (s.$bitmapData = null), s.$renderDirty = !0;
            var h = s.$parent;
            h && !h.$cacheDirty && (h.$cacheDirty = !0, h.$cacheDirtyUp());
            var c = s.$maskedObject;
            c && !c.$cacheDirty && (c.$cacheDirty = !0, c.$cacheDirtyUp());
          }

          delete i._displayList[r];
        }
      }
    }, i._displayList = t.createMap(), i;
  }(t.HashObject);

  t.BitmapData = e, __reflect(e.prototype, "egret.BitmapData");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = new t.Point(),
      i = function (i) {
    function r(t, e, r, n, a, o) {
      var s = i.call(this, t, e, r) || this;
      return s.targetChanged = !0, s.touchDown = !1, s.$initTo(n, a, o), s;
    }

    return __extends(r, i), r.prototype.$initTo = function (t, e, i) {
      this.touchPointID = +i || 0, this.$stageX = +t || 0, this.$stageY = +e || 0;
    }, Object.defineProperty(r.prototype, "stageX", {
      get: function get() {
        return this.$stageX;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "stageY", {
      get: function get() {
        return this.$stageY;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "localX", {
      get: function get() {
        return this.targetChanged && this.getLocalXY(), this._localX;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "localY", {
      get: function get() {
        return this.targetChanged && this.getLocalXY(), this._localY;
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.getLocalXY = function () {
      this.targetChanged = !1;
      var t = this.$target.$getInvertedConcatenatedMatrix();
      t.transformPoint(this.$stageX, this.$stageY, e), this._localX = e.x, this._localY = e.y;
    }, r.prototype.$setTarget = function (t) {
      return this.$target = t, this.targetChanged = !!t, !0;
    }, r.prototype.updateAfterEvent = function () {
      t.sys.$requestRenderingFlag = !0;
    }, r.dispatchTouchEvent = function (e, i, n, a, o, s, h, c) {
      if (void 0 === c && (c = !1), !n && !e.hasEventListener(i)) return !0;
      var l = t.Event.create(r, i, n, a);
      l.$initTo(o, s, h), l.touchDown = c;
      var u = e.dispatchEvent(l);
      return t.Event.release(l), u;
    }, r.TOUCH_MOVE = "touchMove", r.TOUCH_BEGIN = "touchBegin", r.TOUCH_END = "touchEnd", r.TOUCH_CANCEL = "touchCancel", r.TOUCH_TAP = "touchTap", r.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside", r;
  }(t.Event);

  t.TouchEvent = i, __reflect(i.prototype, "egret.TouchEvent");
}(egret || (egret = {}));
var egret;
!function (t) {}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function n(t, n, a) {
      void 0 === t && (t = 4), void 0 === n && (n = 4), void 0 === a && (a = 1);
      var o = e.call(this) || this,
          s = o;
      return s.type = "blur", s.$blurX = t, s.$blurY = n, s.$quality = a, s.blurXFilter = new i(t), s.blurYFilter = new r(n), s.onPropertyChange(), o;
    }

    return __extends(n, e), Object.defineProperty(n.prototype, "blurX", {
      get: function get() {
        return this.$blurX;
      },
      set: function set(t) {
        var e = this;
        e.$blurX != t && (e.$blurX = t, e.blurXFilter.blurX = t, e.onPropertyChange());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "blurY", {
      get: function get() {
        return this.$blurY;
      },
      set: function set(t) {
        var e = this;
        e.$blurY != t && (e.$blurY = t, e.blurYFilter.blurY = t, e.onPropertyChange());
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$toJson = function () {
      return '{"blurX": ' + this.$blurX + ', "blurY": ' + this.$blurY + ', "quality": 1}';
    }, n.prototype.updatePadding = function () {
      var t = this;
      t.paddingLeft = t.blurX, t.paddingRight = t.blurX, t.paddingTop = t.blurY, t.paddingBottom = t.blurY;
    }, n.prototype.onPropertyChange = function () {
      var e = this;
      e.updatePadding(), t.nativeRender && (egret_native.NativeDisplayObject.setFilterPadding(e.blurXFilter.$id, 0, 0, e.paddingLeft, e.paddingRight), egret_native.NativeDisplayObject.setFilterPadding(e.blurYFilter.$id, e.paddingTop, e.paddingBottom, 0, 0), egret_native.NativeDisplayObject.setDataToFilter(e));
    }, n;
  }(t.Filter);

  t.BlurFilter = e, __reflect(e.prototype, "egret.BlurFilter");

  var i = function (e) {
    function i(i) {
      void 0 === i && (i = 4);
      var r = e.call(this) || this;
      return t.nativeRender ? r.type = "blur" : r.type = "blurX", r.$uniforms.blur = {
        x: i,
        y: 0
      }, r.onPropertyChange(), r;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "blurX", {
      get: function get() {
        return this.$uniforms.blur.x;
      },
      set: function set(t) {
        this.$uniforms.blur.x = t;
      },
      enumerable: !0,
      configurable: !0
    }), i;
  }(t.Filter);

  __reflect(i.prototype, "BlurXFilter", ["egret.IBlurXFilter"]);

  var r = function (e) {
    function i(i) {
      void 0 === i && (i = 4);
      var r = e.call(this) || this;
      return t.nativeRender ? r.type = "blur" : r.type = "blurY", r.$uniforms.blur = {
        x: 0,
        y: i
      }, r.onPropertyChange(), r;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "blurY", {
      get: function get() {
        return this.$uniforms.blur.y;
      },
      set: function set(t) {
        this.$uniforms.blur.y = t;
      },
      enumerable: !0,
      configurable: !0
    }), i;
  }(t.Filter);

  __reflect(r.prototype, "BlurYFilter", ["egret.IBlurYFilter"]);
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (t) {
    function e(e) {
      void 0 === e && (e = null);
      var i = t.call(this) || this;
      return i.$matrix = [], i.matrix2 = [], i.type = "colorTransform", i.$uniforms.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], i.$uniforms.colorAdd = {
        x: 0,
        y: 0,
        z: 0,
        w: 0
      }, i.setMatrix(e), i.onPropertyChange(), i;
    }

    return __extends(e, t), Object.defineProperty(e.prototype, "matrix", {
      get: function get() {
        for (var t = 0; 20 > t; t++) {
          this.matrix2[t] = this.$matrix[t];
        }

        return this.matrix2;
      },
      set: function set(t) {
        this.setMatrix(t);
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.setMatrix = function (t) {
      if (t) for (var e = 0; 20 > e; e++) {
        this.$matrix[e] = t[e];
      } else for (var e = 0; 20 > e; e++) {
        this.$matrix[e] = 0 == e || 6 == e || 12 == e || 18 == e ? 1 : 0;
      }

      for (var i = this.$matrix, r = this.$uniforms.matrix, n = this.$uniforms.colorAdd, e = 0, a = 0; e < i.length; e++) {
        4 === e ? n.x = i[e] / 255 : 9 === e ? n.y = i[e] / 255 : 14 === e ? n.z = i[e] / 255 : 19 === e ? n.w = i[e] / 255 : (r[a] = i[e], a++);
      }

      this.onPropertyChange();
    }, e.prototype.$toJson = function () {
      return '{"matrix": [' + this.$matrix.toString() + "]}";
    }, e;
  }(t.Filter);

  t.ColorMatrixFilter = e, __reflect(e.prototype, "egret.ColorMatrixFilter");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e,
      i = {},
      r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
      n = new Array(36),
      a = 0,
      o = function o() {
    for (var t = 0; 36 > t; t++) {
      8 === t || 13 === t || 18 === t || 23 === t ? n[t] = "-" : 14 === t ? n[t] = "4" : (2 >= a && (a = 33554432 + 16777216 * Math.random() | 0), e = 15 & a, a >>= 4, n[t] = r[19 === t ? 3 & e | 8 : e]);
    }

    return n.join("");
  },
      s = function (e) {
    function r(t, r, n) {
      void 0 === n && (n = {});
      var a = e.call(this) || this;
      a.$padding = 0, a.$vertexSrc = t, a.$fragmentSrc = r;
      var s = t + r;
      return i[s] || (i[s] = o()), a.$shaderKey = i[s], a.$uniforms = n, a.type = "custom", a;
    }

    return __extends(r, e), Object.defineProperty(r.prototype, "padding", {
      get: function get() {
        return this.$padding;
      },
      set: function set(t) {
        var e = this;
        e.$padding != t && (e.$padding = t, e.onPropertyChange());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "uniforms", {
      get: function get() {
        return this.$uniforms;
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.onPropertyChange = function () {
      if (t.nativeRender) {
        var e = this;
        egret_native.NativeDisplayObject.setFilterPadding(e.$id, e.$padding, e.$padding, e.$padding, e.$padding), egret_native.NativeDisplayObject.setDataToFilter(e);
      }
    }, r;
  }(t.Filter);

  t.CustomFilter = s, __reflect(s.prototype, "egret.CustomFilter");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i(t, i, r, n, a, o, s, h, c, l, u) {
      void 0 === t && (t = 4), void 0 === i && (i = 45), void 0 === r && (r = 0), void 0 === n && (n = 1), void 0 === a && (a = 4), void 0 === o && (o = 4), void 0 === s && (s = 1), void 0 === h && (h = 1), void 0 === c && (c = !1), void 0 === l && (l = !1), void 0 === u && (u = !1);
      var p = e.call(this, r, n, a, o, s, h, c, l) || this,
          d = p;
      return d.$distance = t, d.$angle = i, d.$hideObject = u, d.$uniforms.dist = t, d.$uniforms.angle = i / 180 * Math.PI, d.$uniforms.hideObject = u ? 1 : 0, d.onPropertyChange(), p;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "distance", {
      get: function get() {
        return this.$distance;
      },
      set: function set(t) {
        var e = this;
        e.$distance != t && (e.$distance = t, e.$uniforms.dist = t, e.onPropertyChange());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "angle", {
      get: function get() {
        return this.$angle;
      },
      set: function set(t) {
        var e = this;
        e.$angle != t && (e.$angle = t, e.$uniforms.angle = t / 180 * Math.PI, e.onPropertyChange());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "hideObject", {
      get: function get() {
        return this.$hideObject;
      },
      set: function set(t) {
        this.$hideObject != t && (this.$hideObject = t, this.$uniforms.hideObject = t ? 1 : 0);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$toJson = function () {
      return '{"distance": ' + this.$distance + ', "angle": ' + this.$angle + ', "color": ' + this.$color + ', "red": ' + this.$red + ', "green": ' + this.$green + ', "blue": ' + this.$blue + ', "alpha": ' + this.$alpha + ', "blurX": ' + this.$blurX + ', "blurY": ' + this.blurY + ', "strength": ' + this.$strength + ', "quality": ' + this.$quality + ', "inner": ' + this.$inner + ', "knockout": ' + this.$knockout + ', "hideObject": ' + this.$hideObject + "}";
    }, i.prototype.updatePadding = function () {
      var e = this;
      e.paddingLeft = e.blurX, e.paddingRight = e.blurX, e.paddingTop = e.blurY, e.paddingBottom = e.blurY;
      var i = e.distance || 0,
          r = e.angle || 0,
          n = 0,
          a = 0;
      0 != i && (n = i * t.NumberUtils.cos(r), n = n > 0 ? Math.ceil(n) : Math.floor(n), a = i * t.NumberUtils.sin(r), a = a > 0 ? Math.ceil(a) : Math.floor(a), e.paddingLeft += n, e.paddingRight += n, e.paddingTop += a, e.paddingBottom += a);
    }, i;
  }(t.GlowFilter);

  t.DropShadowFilter = e, __reflect(e.prototype, "egret.DropShadowFilter");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function t() {}

    return t.LINEAR = "linear", t.RADIAL = "radial", t;
  }();

  t.GradientType = e, __reflect(e.prototype, "egret.GradientType");
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(t) {
    return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t;
  }

  function i(t, e) {
    for (var i = [], n = 0; e > n; n++) {
      var a = r(t, n / e);
      a && i.push(a);
    }

    return i;
  }

  function r(e, i) {
    var r = 0,
        o = 0,
        s = 0,
        h = e.length;

    if (h / 2 == 3) {
      var c = e[r++],
          l = e[r++],
          u = e[r++],
          p = e[r++],
          d = e[r++],
          f = e[r++];
      o = n(c, u, d, i), s = n(l, p, f, i);
    } else if (h / 2 == 4) {
      var c = e[r++],
          l = e[r++],
          u = e[r++],
          p = e[r++],
          d = e[r++],
          f = e[r++],
          g = e[r++],
          $ = e[r++];
      o = a(c, u, d, g, i), s = a(l, p, f, $, i);
    }

    return t.Point.create(o, s);
  }

  function n(t, e, i, r) {
    var n = Math.pow(1 - r, 2) * t + 2 * r * (1 - r) * e + Math.pow(r, 2) * i;
    return n;
  }

  function a(t, e, i, r, n) {
    var a = Math.pow(1 - n, 3) * t + 3 * n * Math.pow(1 - n, 2) * e + 3 * (1 - n) * Math.pow(n, 2) * i + Math.pow(n, 3) * r;
    return a;
  }

  var o = function (r) {
    function n() {
      var e = r.call(this) || this;
      return e.lastX = 0, e.lastY = 0, e.fillPath = null, e.strokePath = null, e.topLeftStrokeWidth = 0, e.bottomRightStrokeWidth = 0, e.minX = 1 / 0, e.minY = 1 / 0, e.maxX = -(1 / 0), e.maxY = -(1 / 0), e.includeLastPosition = !0, e.$renderNode = new t.sys.GraphicsNode(), e;
    }

    return __extends(n, r), n.prototype.$setTarget = function (e) {
      this.$targetDisplay && (this.$targetDisplay.$renderNode = null), e.$renderNode = this.$renderNode, this.$targetDisplay = e, this.$targetIsSprite = e instanceof t.Sprite;
    }, n.prototype.setStrokeWidth = function (t) {
      switch (t) {
        case 1:
          this.topLeftStrokeWidth = 0, this.bottomRightStrokeWidth = 1;
          break;

        case 3:
          this.topLeftStrokeWidth = 1, this.bottomRightStrokeWidth = 2;
          break;

        default:
          var e = 0 | Math.ceil(.5 * t);
          this.topLeftStrokeWidth = e, this.bottomRightStrokeWidth = e;
      }
    }, n.prototype.beginFill = function (e, i) {
      void 0 === i && (i = 1), e = +e || 0, i = +i || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setBeginFill(e, i), this.fillPath = this.$renderNode.beginFill(e, i, this.strokePath), this.$renderNode.drawData.length > 1 && this.fillPath.moveTo(this.lastX, this.lastY);
    }, n.prototype.beginGradientFill = function (e, i, r, n, a) {
      void 0 === a && (a = null), t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setBeginGradientFill(e, i, r, n, a), this.fillPath = this.$renderNode.beginGradientFill(e, i, r, n, a, this.strokePath), this.$renderNode.drawData.length > 1 && this.fillPath.moveTo(this.lastX, this.lastY);
    }, n.prototype.endFill = function () {
      t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setEndFill(), this.fillPath = null;
    }, n.prototype.lineStyle = function (e, i, r, n, a, o, s, h, c) {
      void 0 === e && (e = 0 / 0), void 0 === i && (i = 0), void 0 === r && (r = 1), void 0 === n && (n = !1), void 0 === a && (a = "normal"), void 0 === o && (o = null), void 0 === s && (s = null), void 0 === h && (h = 3), e = +e || 0, i = +i || 0, r = +r || 0, h = +h || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setLineStyle(e, i, r, n, a, o, s, h), 0 >= e ? (this.strokePath = null, this.setStrokeWidth(0)) : (this.setStrokeWidth(e), this.strokePath = this.$renderNode.lineStyle(e, i, r, o, s, h, c), this.$renderNode.drawData.length > 1 && this.strokePath.moveTo(this.lastX, this.lastY));
    }, n.prototype.drawRect = function (e, i, r, n) {
      e = +e || 0, i = +i || 0, r = +r || 0, n = +n || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setDrawRect(e, i, r, n);
      var a = this.fillPath,
          o = this.strokePath;
      a && a.drawRect(e, i, r, n), o && o.drawRect(e, i, r, n), this.extendBoundsByPoint(e + r, i + n), this.updatePosition(e, i), this.dirty();
    }, n.prototype.drawRoundRect = function (e, i, r, n, a, o) {
      e = +e || 0, i = +i || 0, r = +r || 0, n = +n || 0, a = +a || 0, o = +o || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setDrawRoundRect(e, i, r, n, a, o);
      var s = this.fillPath,
          h = this.strokePath;
      s && s.drawRoundRect(e, i, r, n, a, o), h && h.drawRoundRect(e, i, r, n, a, o);
      var c = .5 * a | 0,
          l = o ? .5 * o | 0 : c,
          u = e + r,
          p = i + n,
          d = p - l;
      this.extendBoundsByPoint(e, i), this.extendBoundsByPoint(u, p), this.updatePosition(u, d), this.dirty();
    }, n.prototype.drawCircle = function (e, i, r) {
      e = +e || 0, i = +i || 0, r = +r || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setDrawCircle(e, i, r);
      var n = this.fillPath,
          a = this.strokePath;
      n && n.drawCircle(e, i, r), a && a.drawCircle(e, i, r), this.extendBoundsByPoint(e - r - 1, i - r - 1), this.extendBoundsByPoint(e + r + 2, i + r + 2), this.updatePosition(e + r, i), this.dirty();
    }, n.prototype.drawEllipse = function (e, i, r, n) {
      e = +e || 0, i = +i || 0, r = +r || 0, n = +n || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setDrawEllipse(e, i, r, n);
      var a = this.fillPath,
          o = this.strokePath;
      a && a.drawEllipse(e, i, r, n), o && o.drawEllipse(e, i, r, n), this.extendBoundsByPoint(e - 1, i - 1), this.extendBoundsByPoint(e + r + 2, i + n + 2), this.updatePosition(e + r, i + .5 * n), this.dirty();
    }, n.prototype.moveTo = function (e, i) {
      e = +e || 0, i = +i || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setMoveTo(e, i);
      var r = this.fillPath,
          n = this.strokePath;
      r && r.moveTo(e, i), n && n.moveTo(e, i), this.includeLastPosition = !1, this.lastX = e, this.lastY = i, this.dirty();
    }, n.prototype.lineTo = function (e, i) {
      e = +e || 0, i = +i || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setLineTo(e, i);
      var r = this.fillPath,
          n = this.strokePath;
      r && r.lineTo(e, i), n && n.lineTo(e, i), this.updatePosition(e, i), this.dirty();
    }, n.prototype.curveTo = function (e, r, n, a) {
      e = +e || 0, r = +r || 0, n = +n || 0, a = +a || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setCurveTo(e, r, n, a);
      var o = this.fillPath,
          s = this.strokePath;
      o && o.curveTo(e, r, n, a), s && s.curveTo(e, r, n, a);

      for (var h = this.lastX || 0, c = this.lastY || 0, l = i([h, c, e, r, n, a], 50), u = 0; u < l.length; u++) {
        var p = l[u];
        this.extendBoundsByPoint(p.x, p.y), t.Point.release(p);
      }

      this.extendBoundsByPoint(n, a), this.updatePosition(n, a), this.dirty();
    }, n.prototype.cubicCurveTo = function (e, r, n, a, o, s) {
      e = +e || 0, r = +r || 0, n = +n || 0, a = +a || 0, o = +o || 0, s = +s || 0, t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setCubicCurveTo(e, r, n, a, o, s);
      var h = this.fillPath,
          c = this.strokePath;
      h && h.cubicCurveTo(e, r, n, a, o, s), c && c.cubicCurveTo(e, r, n, a, o, s);

      for (var l = this.lastX || 0, u = this.lastY || 0, p = i([l, u, e, r, n, a, o, s], 50), d = 0; d < p.length; d++) {
        var f = p[d];
        this.extendBoundsByPoint(f.x, f.y), t.Point.release(f);
      }

      this.extendBoundsByPoint(o, s), this.updatePosition(o, s), this.dirty();
    }, n.prototype.drawArc = function (i, r, n, a, o, s) {
      if (!(0 > n || a === o)) {
        i = +i || 0, r = +r || 0, n = +n || 0, a = +a || 0, o = +o || 0, s = !!s, a = e(a), o = e(o), t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setDrawArc(i, r, n, a, o, s);
        var h = this.fillPath,
            c = this.strokePath;
        h && (h.$lastX = this.lastX, h.$lastY = this.lastY, h.drawArc(i, r, n, a, o, s)), c && (c.$lastX = this.lastX, c.$lastY = this.lastY, c.drawArc(i, r, n, a, o, s)), s ? this.arcBounds(i, r, n, o, a) : this.arcBounds(i, r, n, a, o);
        var l = i + Math.cos(o) * n,
            u = r + Math.sin(o) * n;
        this.updatePosition(l, u), this.dirty();
      }
    }, n.prototype.dirty = function () {
      var e = this;

      if (e.$renderNode.dirtyRender = !0, !t.nativeRender) {
        var i = e.$targetDisplay;
        i.$cacheDirty = !0;
        var r = i.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = i.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
    }, n.prototype.arcBounds = function (t, e, i, r, n) {
      var a = Math.PI;
      if (Math.abs(r - n) < .01) return this.extendBoundsByPoint(t - i, e - i), void this.extendBoundsByPoint(t + i, e + i);
      r > n && (n += 2 * a);

      for (var o = Math.cos(r) * i, s = Math.cos(n) * i, h = Math.min(o, s), c = Math.max(o, s), l = Math.sin(r) * i, u = Math.sin(n) * i, p = Math.min(l, u), d = Math.max(l, u), f = r / (.5 * a), g = n / (.5 * a), $ = Math.ceil(f); g >= $; $++) {
        switch ($ % 4) {
          case 0:
            c = i;
            break;

          case 1:
            d = i;
            break;

          case 2:
            h = -i;
            break;

          case 3:
            p = -i;
        }
      }

      h = Math.floor(h), p = Math.floor(p), c = Math.ceil(c), d = Math.ceil(d), this.extendBoundsByPoint(h + t, p + e), this.extendBoundsByPoint(c + t, d + e);
    }, n.prototype.clear = function () {
      t.nativeRender && this.$targetDisplay.$nativeDisplayObject.setGraphicsClear(), this.$renderNode.clear(), this.updatePosition(0, 0), this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -(1 / 0), this.maxY = -(1 / 0), this.dirty();
    }, n.prototype.extendBoundsByPoint = function (t, e) {
      this.extendBoundsByX(t), this.extendBoundsByY(e);
    }, n.prototype.extendBoundsByX = function (t) {
      this.minX = Math.min(this.minX, t - this.topLeftStrokeWidth), this.maxX = Math.max(this.maxX, t + this.bottomRightStrokeWidth), this.updateNodeBounds();
    }, n.prototype.extendBoundsByY = function (t) {
      this.minY = Math.min(this.minY, t - this.topLeftStrokeWidth), this.maxY = Math.max(this.maxY, t + this.bottomRightStrokeWidth), this.updateNodeBounds();
    }, n.prototype.updateNodeBounds = function () {
      var t = this.$renderNode;
      t.x = this.minX, t.y = this.minY, t.width = Math.ceil(this.maxX - this.minX), t.height = Math.ceil(this.maxY - this.minY);
    }, n.prototype.updatePosition = function (t, e) {
      this.includeLastPosition || (this.extendBoundsByPoint(this.lastX, this.lastY), this.includeLastPosition = !0), this.lastX = t, this.lastY = e, this.extendBoundsByPoint(t, e);
    }, n.prototype.$measureContentBounds = function (t) {
      this.minX === 1 / 0 ? t.setEmpty() : t.setTo(this.minX, this.minY, this.maxX - this.minX, this.maxY - this.minY);
    }, n.prototype.$hitTest = function (e, i) {
      var r = this.$targetDisplay,
          n = r.$getInvertedConcatenatedMatrix(),
          a = n.a * e + n.c * i + n.tx,
          o = n.b * e + n.d * i + n.ty,
          s = t.sys.canvasHitTestBuffer;
      s.resize(3, 3);
      var h = this.$renderNode,
          c = t.Matrix.create();
      c.identity(), c.translate(1 - a, 1 - o), t.sys.canvasRenderer.drawNodeToBuffer(h, s, c, !0), t.Matrix.release(c);

      try {
        var l = s.getPixels(1, 1);
        if (0 === l[3]) return null;
      } catch (u) {
        throw new Error(t.sys.tr(1039));
      }

      return r;
    }, n.prototype.$onRemoveFromStage = function () {
      this.$renderNode && this.$renderNode.clean(), t.nativeRender && egret_native.NativeDisplayObject.disposeGraphicData(this);
    }, n;
  }(t.HashObject);

  t.Graphics = o, __reflect(o.prototype, "egret.Graphics");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = Math.PI,
      i = 2 * e,
      r = e / 180,
      n = [],
      a = function (a) {
    function o(t, e, i, r, n, o) {
      void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 1), void 0 === n && (n = 0), void 0 === o && (o = 0);
      var s = a.call(this) || this;
      return s.a = t, s.b = e, s.c = i, s.d = r, s.tx = n, s.ty = o, s;
    }

    return __extends(o, a), o.release = function (t) {
      t && n.push(t);
    }, o.create = function () {
      var t = n.pop();
      return t || (t = new o()), t;
    }, o.prototype.clone = function () {
      return new o(this.a, this.b, this.c, this.d, this.tx, this.ty);
    }, o.prototype.concat = function (t) {
      var e = this.a * t.a,
          i = 0,
          r = 0,
          n = this.d * t.d,
          a = this.tx * t.a + t.tx,
          o = this.ty * t.d + t.ty;
      (0 !== this.b || 0 !== this.c || 0 !== t.b || 0 !== t.c) && (e += this.b * t.c, n += this.c * t.b, i += this.a * t.b + this.b * t.d, r += this.c * t.a + this.d * t.c, a += this.ty * t.c, o += this.tx * t.b), this.a = e, this.b = i, this.c = r, this.d = n, this.tx = a, this.ty = o;
    }, o.prototype.copyFrom = function (t) {
      return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this;
    }, o.prototype.identity = function () {
      this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0;
    }, o.prototype.invert = function () {
      this.$invertInto(this);
    }, o.prototype.$invertInto = function (t) {
      var e = this.a,
          i = this.b,
          r = this.c,
          n = this.d,
          a = this.tx,
          o = this.ty;
      if (0 == i && 0 == r) return t.b = t.c = 0, void (0 == e || 0 == n ? t.a = t.d = t.tx = t.ty = 0 : (e = t.a = 1 / e, n = t.d = 1 / n, t.tx = -e * a, t.ty = -n * o));
      var s = e * n - i * r;
      if (0 == s) return void t.identity();
      s = 1 / s;
      var h = t.a = n * s;
      i = t.b = -i * s, r = t.c = -r * s, n = t.d = e * s, t.tx = -(h * a + r * o), t.ty = -(i * a + n * o);
    }, o.prototype.rotate = function (e) {
      if (e = +e, 0 !== e) {
        e /= r;
        var i = t.NumberUtils.cos(e),
            n = t.NumberUtils.sin(e),
            a = this.a,
            o = this.b,
            s = this.c,
            h = this.d,
            c = this.tx,
            l = this.ty;
        this.a = a * i - o * n, this.b = a * n + o * i, this.c = s * i - h * n, this.d = s * n + h * i, this.tx = c * i - l * n, this.ty = c * n + l * i;
      }
    }, o.prototype.scale = function (t, e) {
      1 !== t && (this.a *= t, this.c *= t, this.tx *= t), 1 !== e && (this.b *= e, this.d *= e, this.ty *= e);
    }, o.prototype.setTo = function (t, e, i, r, n, a) {
      return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = a, this;
    }, o.prototype.transformPoint = function (e, i, r) {
      var n = this.a * e + this.c * i + this.tx,
          a = this.b * e + this.d * i + this.ty;
      return r ? (r.setTo(n, a), r) : new t.Point(n, a);
    }, o.prototype.translate = function (t, e) {
      this.tx += t, this.ty += e;
    }, o.prototype.equals = function (t) {
      return this.a == t.a && this.b == t.b && this.c == t.c && this.d == t.d && this.tx == t.tx && this.ty == t.ty;
    }, o.prototype.prepend = function (t, e, i, r, n, a) {
      var o = this.tx;

      if (1 != t || 0 != e || 0 != i || 1 != r) {
        var s = this.a,
            h = this.c;
        this.a = s * t + this.b * i, this.b = s * e + this.b * r, this.c = h * t + this.d * i, this.d = h * e + this.d * r;
      }

      return this.tx = o * t + this.ty * i + n, this.ty = o * e + this.ty * r + a, this;
    }, o.prototype.append = function (t, e, i, r, n, a) {
      var o = this.a,
          s = this.b,
          h = this.c,
          c = this.d;
      return (1 != t || 0 != e || 0 != i || 1 != r) && (this.a = t * o + e * h, this.b = t * s + e * c, this.c = i * o + r * h, this.d = i * s + r * c), this.tx = n * o + a * h + this.tx, this.ty = n * s + a * c + this.ty, this;
    }, o.prototype.deltaTransformPoint = function (e) {
      var i = this,
          r = i.a * e.x + i.c * e.y,
          n = i.b * e.x + i.d * e.y;
      return new t.Point(r, n);
    }, o.prototype.toString = function () {
      return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")";
    }, o.prototype.createBox = function (e, i, n, a, o) {
      void 0 === n && (n = 0), void 0 === a && (a = 0), void 0 === o && (o = 0);
      var s = this;

      if (0 !== n) {
        n /= r;
        var h = t.NumberUtils.cos(n),
            c = t.NumberUtils.sin(n);
        s.a = h * e, s.b = c * i, s.c = -c * e, s.d = h * i;
      } else s.a = e, s.b = 0, s.c = 0, s.d = i;

      s.tx = a, s.ty = o;
    }, o.prototype.createGradientBox = function (t, e, i, r, n) {
      void 0 === i && (i = 0), void 0 === r && (r = 0), void 0 === n && (n = 0), this.createBox(t / 1638.4, e / 1638.4, i, r + t / 2, n + e / 2);
    }, o.prototype.$transformBounds = function (t) {
      var e = this.a,
          i = this.b,
          r = this.c,
          n = this.d,
          a = this.tx,
          o = this.ty,
          s = t.x,
          h = t.y,
          c = s + t.width,
          l = h + t.height,
          u = e * s + r * h + a,
          p = i * s + n * h + o,
          d = e * c + r * h + a,
          f = i * c + n * h + o,
          g = e * c + r * l + a,
          $ = i * c + n * l + o,
          y = e * s + r * l + a,
          v = i * s + n * l + o,
          b = 0;
      u > d && (b = u, u = d, d = b), g > y && (b = g, g = y, y = b), t.x = Math.floor(g > u ? u : g), t.width = Math.ceil((d > y ? d : y) - t.x), p > f && (b = p, p = f, f = b), $ > v && (b = $, $ = v, v = b), t.y = Math.floor($ > p ? p : $), t.height = Math.ceil((f > v ? f : v) - t.y);
    }, o.prototype.getDeterminant = function () {
      return this.a * this.d - this.b * this.c;
    }, o.prototype.$getScaleX = function () {
      var t = this;
      if (0 == t.b) return t.a;
      var e = Math.sqrt(t.a * t.a + t.b * t.b);
      return this.getDeterminant() < 0 ? -e : e;
    }, o.prototype.$getScaleY = function () {
      var t = this;
      if (0 == t.c) return t.d;
      var e = Math.sqrt(t.c * t.c + t.d * t.d);
      return this.getDeterminant() < 0 ? -e : e;
    }, o.prototype.$getSkewX = function () {
      return this.d < 0 ? Math.atan2(this.d, this.c) + e / 2 : Math.atan2(this.d, this.c) - e / 2;
    }, o.prototype.$getSkewY = function () {
      return this.a < 0 ? Math.atan2(this.b, this.a) - e : Math.atan2(this.b, this.a);
    }, o.prototype.$updateScaleAndRotation = function (e, n, a, o) {
      if (!(0 != a && a != i || 0 != o && o != i)) return this.a = e, this.b = this.c = 0, void (this.d = n);
      a /= r, o /= r;
      var s = t.NumberUtils.cos(a),
          h = t.NumberUtils.sin(a);
      a == o ? (this.a = s * e, this.b = h * e) : (this.a = t.NumberUtils.cos(o) * e, this.b = t.NumberUtils.sin(o) * e), this.c = -h * n, this.d = s * n;
    }, o.prototype.$preMultiplyInto = function (t, e) {
      var i = t.a * this.a,
          r = 0,
          n = 0,
          a = t.d * this.d,
          o = t.tx * this.a + this.tx,
          s = t.ty * this.d + this.ty;
      (0 !== t.b || 0 !== t.c || 0 !== this.b || 0 !== this.c) && (i += t.b * this.c, a += t.c * this.b, r += t.a * this.b + t.b * this.d, n += t.c * this.a + t.d * this.c, o += t.ty * this.c, s += t.tx * this.b), e.a = i, e.b = r, e.c = n, e.d = a, e.tx = o, e.ty = s;
    }, o;
  }(t.HashObject);

  t.Matrix = a, __reflect(a.prototype, "egret.Matrix"), t.$TempMatrix = new a();
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = [],
      i = function (i) {
    function r(t, e, r, n) {
      void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 0);
      var a = i.call(this) || this;
      return a.x = t, a.y = e, a.width = r, a.height = n, a;
    }

    return __extends(r, i), r.release = function (t) {
      t && e.push(t);
    }, r.create = function () {
      var t = e.pop();
      return t || (t = new r()), t;
    }, Object.defineProperty(r.prototype, "right", {
      get: function get() {
        return this.x + this.width;
      },
      set: function set(t) {
        this.width = t - this.x;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "bottom", {
      get: function get() {
        return this.y + this.height;
      },
      set: function set(t) {
        this.height = t - this.y;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "left", {
      get: function get() {
        return this.x;
      },
      set: function set(t) {
        this.width += this.x - t, this.x = t;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "top", {
      get: function get() {
        return this.y;
      },
      set: function set(t) {
        this.height += this.y - t, this.y = t;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "topLeft", {
      get: function get() {
        return new t.Point(this.left, this.top);
      },
      set: function set(t) {
        this.top = t.y, this.left = t.x;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "bottomRight", {
      get: function get() {
        return new t.Point(this.right, this.bottom);
      },
      set: function set(t) {
        this.bottom = t.y, this.right = t.x;
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.copyFrom = function (t) {
      return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
    }, r.prototype.setTo = function (t, e, i, r) {
      return this.x = t, this.y = e, this.width = i, this.height = r, this;
    }, r.prototype.contains = function (t, e) {
      return this.x <= t && this.x + this.width >= t && this.y <= e && this.y + this.height >= e;
    }, r.prototype.intersection = function (t) {
      return this.clone().$intersectInPlace(t);
    }, r.prototype.inflate = function (t, e) {
      this.x -= t, this.width += 2 * t, this.y -= e, this.height += 2 * e;
    }, r.prototype.$intersectInPlace = function (t) {
      var e = this.x,
          i = this.y,
          r = t.x,
          n = t.y,
          a = Math.max(e, r),
          o = Math.min(e + this.width, r + t.width);

      if (o >= a) {
        var s = Math.max(i, n),
            h = Math.min(i + this.height, n + t.height);
        if (h >= s) return this.setTo(a, s, o - a, h - s), this;
      }

      return this.setEmpty(), this;
    }, r.prototype.intersects = function (t) {
      return Math.max(this.x, t.x) <= Math.min(this.right, t.right) && Math.max(this.y, t.y) <= Math.min(this.bottom, t.bottom);
    }, r.prototype.isEmpty = function () {
      return this.width <= 0 || this.height <= 0;
    }, r.prototype.setEmpty = function () {
      this.x = 0, this.y = 0, this.width = 0, this.height = 0;
    }, r.prototype.clone = function () {
      return new r(this.x, this.y, this.width, this.height);
    }, r.prototype.containsPoint = function (t) {
      return this.x <= t.x && this.x + this.width > t.x && this.y <= t.y && this.y + this.height > t.y ? !0 : !1;
    }, r.prototype.containsRect = function (t) {
      var e = t.x + t.width,
          i = t.y + t.height,
          r = this.x + this.width,
          n = this.y + this.height;
      return t.x >= this.x && t.x < r && t.y >= this.y && t.y < n && e > this.x && r >= e && i > this.y && n >= i;
    }, r.prototype.equals = function (t) {
      return this === t ? !0 : this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height;
    }, r.prototype.inflatePoint = function (t) {
      this.inflate(t.x, t.y);
    }, r.prototype.offset = function (t, e) {
      this.x += t, this.y += e;
    }, r.prototype.offsetPoint = function (t) {
      this.offset(t.x, t.y);
    }, r.prototype.toString = function () {
      return "(x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")";
    }, r.prototype.union = function (t) {
      var e = this.clone();
      if (t.isEmpty()) return e;
      if (e.isEmpty()) return e.copyFrom(t), e;
      var i = Math.min(e.x, t.x),
          r = Math.min(e.y, t.y);
      return e.setTo(i, r, Math.max(e.right, t.right) - i, Math.max(e.bottom, t.bottom) - r), e;
    }, r.prototype.$getBaseWidth = function (t) {
      var e = Math.abs(Math.cos(t)),
          i = Math.abs(Math.sin(t));
      return e * this.width + i * this.height;
    }, r.prototype.$getBaseHeight = function (t) {
      var e = Math.abs(Math.cos(t)),
          i = Math.abs(Math.sin(t));
      return i * this.width + e * this.height;
    }, r;
  }(t.HashObject);

  t.Rectangle = i, __reflect(i.prototype, "egret.Rectangle"), t.$TempRectangle = new i();
}(egret || (egret = {}));
var egret;
!function (t) {
  t.$locale_strings = t.$locale_strings || {}, t.$locale_strings.en_US = t.$locale_strings.en_US || {};
  var e = t.$locale_strings.en_US;
  e[1001] = "Could not find Egret entry class: {0}。", e[1002] = "Egret entry class '{0}' must inherit from egret.DisplayObject.", e[1003] = "Parameter {0} must be non-null.", e[1004] = "An object cannot be added as a child to one of it's children (or children's children, etc.).", e[1005] = "An object cannot be added as a child of itself.", e[1006] = "The supplied DisplayObject must be a child of the caller.", e[1007] = "An index specified for a parameter was out of range.", e[1008] = "Instantiate singleton error，singleton class {0} can not create multiple instances.", e[1009] = 'the Class {0} cannot use the property "{1}"', e[1010] = 'the property "{1}" of the Class "{0}" is readonly', e[1011] = "Stream Error. URL: {0}", e[1012] = "The type of parameter {0} must be Class.", e[1013] = "Variable assignment is NaN, please see the code!", e[1014] = 'the constant "{1}" of the Class "{0}" is read-only', e[1015] = "xml not found!", e[1016] = "{0}has been obsoleted", e[1017] = "The format of JSON file is incorrect: {0}\ndata: {1}", e[1018] = "the scale9Grid is not correct", e[1019] = "Network ab:{0}", e[1020] = "Cannot initialize Shader", e[1021] = "Current browser does not support webgl", e[1022] = "{0} ArgumentError", e[1023] = "This method is not available in the ScrollView!", e[1025] = "end of the file", e[1026] = "! EncodingError The code point {0} could not be encoded.", e[1027] = "DecodingError", e[1028] = ". called injection is not configured rule: {0}, please specify configuration during its initial years of injection rule, and then call the corresponding single case.", e[1029] = "Function.prototype.bind - what is trying to be bound is not callable", e[1033] = "Photos can not be used across domains toDataURL to convert base64", e[1034] = 'Music file decoding failed: "{0}", please use the standard conversion tool reconversion under mp3.', e[1035] = "Native does not support this feature!", e[1036] = "Sound has stopped, please recall Sound.play () to play the sound!", e[1037] = "Non-load the correct blob!", e[1038] = "XML format error!", e[1039] = "Cross domains pictures can not get pixel information!", e[1040] = "hitTestPoint can not detect crossOrigin images! Please check if the display object has crossOrigin elements.", e[1041] = "{0} is deprecated, please use {1} replace", e[1042] = "The parameters passed in the region needs is an integer in drawToTexture method. Otherwise, some browsers will draw abnormal.", e[1043] = "Compile errors in {0}, the attribute name: {1}, the attribute value: {2}.", e[1044] = "The current version of the Runtime does not support video playback, please use the latest version", e[1045] = "The resource url is not found", e[1046] = "BitmapText no corresponding characters: {0}, please check the configuration file", e[1047] = "egret.localStorage.setItem save failed,key={0}&value={1}", e[1048] = "Video loading failed", e[1049] = "In the absence of sound is not allowed to play after loading", e[1050] = "ExternalInterface calls the method without js registration: {0}", e[1051] = "runtime only support webgl render mode", e[3e3] = "Theme configuration file failed to load: {0}", e[3001] = "Cannot find the skin name which is configured in Theme: {0}", e[3002] = 'Index:"{0}" is out of the collection element index range', e[3003] = "Cannot be available in this component. If this component is container, please continue to use", e[3004] = "addChild(){0}addElement() replace", e[3005] = "addChildAt(){0}addElementAt() replace", e[3006] = "removeChild(){0}removeElement() replace", e[3007] = "removeChildAt(){0}removeElementAt() replace", e[3008] = "setChildIndex(){0}setElementIndex() replace", e[3009] = "swapChildren(){0}swapElements() replace", e[3010] = "swapChildrenAt(){0}swapElementsAt() replace", e[3011] = 'Index:"{0}" is out of the visual element index range', e[3012] = "This method is not available in Scroller component!", e[3013] = "UIStage is GUI root container, and only one such instant is in the display list！", e[3014] = "set fullscreen error", e[3100] = "Current browser does not support WebSocket", e[3101] = "Please connect Socket firstly", e[3102] = "Please set the type of binary type", e[4e3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)", e[4001] = "Abstract class can not be instantiated!", e[4002] = "Unnamed data!", e[4003] = "Nonsupport version!";
}(egret || (egret = {}));
var egret;
!function (t) {
  t.JointStyle = {
    BEVEL: "bevel",
    MITER: "miter",
    ROUND: "round"
  };
}(egret || (egret = {}));
var egret;
!function (t) {
  t.$locale_strings = t.$locale_strings || {}, t.$locale_strings.zh_CN = t.$locale_strings.zh_CN || {};
  var e = t.$locale_strings.zh_CN;
  e[1001] = "找不到Egret入口类: {0}。", e[1002] = "Egret入口类 {0} 必须继承自egret.DisplayObject。", e[1003] = "参数 {0} 不能为 null。", e[1004] = "无法将对象添加为它的一个子对象（或子对象的子对象等）的子对象。", e[1005] = "不能将对象添加为其自身的子对象。", e[1006] = "提供的 DisplayObject 必须是调用者的子级。", e[1007] = "为参数指定的索引不在范围内。", e[1008] = "实例化单例出错，不允许实例化多个 {0} 对象。", e[1009] = "类 {0} 不可以使用属性 {1}", e[1010] = "类 {0} 属性 {1} 是只读的", e[1011] = "流错误。URL: {0}", e[1012] = "参数 {0} 的类型必须为 Class。", e[1013] = "变量赋值为NaN，请查看代码！", e[1014] = "类 {0} 常量 {1} 是只读的", e[1015] = "xml not found!", e[1016] = "{0}已经废弃", e[1017] = "JSON文件格式不正确: {0}\ndata: {1}", e[1018] = "9宫格设置错误", e[1019] = "网络异常:{0}", e[1020] = "无法初始化着色器", e[1021] = "当前浏览器不支持webgl", e[1022] = "{0} ArgumentError", e[1023] = "此方法在ScrollView内不可用!", e[1025] = "遇到文件尾", e[1026] = "EncodingError! The code point {0} could not be encoded.", e[1027] = "DecodingError", e[1028] = "调用了未配置的注入规则:{0}。 请先在项目初始化里配置指定的注入规则，再调用对应单例。", e[1029] = "Function.prototype.bind - what is trying to be bound is not callable", e[1033] = "跨域图片不可以使用toDataURL来转换成base64", e[1034] = '音乐文件解码失败："{0}"，请使用标准的转换工具重新转换下mp3。', e[1035] = "Native 下暂未实现此功能！", e[1036] = "声音已停止，请重新调用 Sound.play() 来播放声音！", e[1037] = "非正确的blob加载！", e[1038] = "XML 格式错误!", e[1039] = "跨域图片不能获取像素信息!", e[1040] = "hitTestPoint 不能对跨域图片进行检测! 请检查该显示对象内是否含有跨域元素", e[1041] = "{0} 已废弃,请使用 {1} 代替", e[1042] = "drawToTexture方法传入的区域各个参数需要为整数,否则某些浏览器绘制会出现异常", e[1043] = "{0} 中存在编译错误，属性名 : {1}，属性值 : {2}", e[1044] = "当前的 runtime 版本不支持视频播放,请使用最新的版本", e[1045] = "没有设置要加载的资源地址", e[1046] = "BitmapText 找不到对应字符:{0}，请检查配置文件", e[1047] = "egret.localStorage.setItem保存失败,key={0}&value={1}", e[1048] = "视频加载失败", e[1049] = "声音在没有加载完之前不允许播放", e[1050] = "ExternalInterface调用了js没有注册的方法: {0}", e[1051] = "runtime 只支持 webgl 渲染模式", e[3e3] = "主题配置文件加载失败: {0}", e[3001] = "找不到主题中所配置的皮肤类名: {0}", e[3002] = '索引:"{0}"超出集合元素索引范围', e[3003] = "在此组件中不可用，若此组件为容器类，请使用", e[3004] = "addChild(){0}addElement()代替", e[3005] = "addChildAt(){0}addElementAt()代替", e[3006] = "removeChild(){0}removeElement()代替", e[3007] = "removeChildAt(){0}removeElementAt()代替", e[3008] = "setChildIndex(){0}setElementIndex()代替", e[3009] = "swapChildren(){0}swapElements()代替", e[3010] = "swapChildrenAt(){0}swapElementsAt()代替", e[3011] = '索引:"{0}"超出可视元素索引范围', e[3012] = "此方法在Scroller组件内不可用!", e[3013] = "UIStage是GUI根容器，只能有一个此实例在显示列表中！", e[3014] = "设置全屏模式失败", e[3100] = "当前浏览器不支持WebSocket", e[3101] = "请先连接WebSocket", e[3102] = "请先设置type为二进制类型", e[4e3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)", e[4001] = "Abstract class can not be instantiated!", e[4002] = "Unnamed data!", e[4003] = "Nonsupport version!";
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {}(e = t.localStorage || (t.localStorage = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {
    function e(t) {
      r.indexOf(t) < 0 && r.push(t);
    }

    function i(t) {
      var e = r.indexOf(t);
      return e >= 0 ? (r.splice(e, 1), !0) : !1;
    }

    var r = [];
    t.$pushSoundChannel = e, t.$popSoundChannel = i;
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {})), function (t) {}(egret || (egret = {}));
var egret;
!function (t) {}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {
    t.GET = "GET", t.POST = "POST";
  }(e = t.HttpMethod || (t.HttpMethod = {}));
}(egret || (egret = {}));
var egret;
!function (t) {}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function t() {}

    return t.TEXT = "text", t.ARRAY_BUFFER = "arraybuffer", t;
  }();

  t.HttpResponseType = e, __reflect(e.prototype, "egret.HttpResponseType");
}(egret || (egret = {}));
var egret;
!function (t) {}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (e) {
    var i = function (i) {
      function r(r) {
        var n = i.call(this) || this;
        return n.isStage = !1, n.$renderNode = new e.BitmapNode(), n.renderBuffer = null, n.offsetX = 0, n.offsetY = 0, n.offsetMatrix = new t.Matrix(), n.$canvasScaleX = 1, n.$canvasScaleY = 1, n.root = r, n.isStage = r instanceof t.Stage, n;
      }

      return __extends(r, i), r.create = function (i) {
        var r = new t.sys.DisplayList(i);

        try {
          var n = new e.RenderBuffer();
          r.renderBuffer = n;
        } catch (a) {
          return null;
        }

        return r.root = i, r;
      }, r.prototype.$getRenderNode = function () {
        return this.$renderNode;
      }, r.prototype.setClipRect = function (t, e) {
        t *= r.$canvasScaleX, e *= r.$canvasScaleY, this.renderBuffer.resize(t, e);
      }, r.prototype.drawToSurface = function () {
        var i = 0;
        this.$canvasScaleX = this.offsetMatrix.a = r.$canvasScaleX, this.$canvasScaleY = this.offsetMatrix.d = r.$canvasScaleY, this.isStage || this.changeSurfaceSize();
        var n = this.renderBuffer;

        if (n.clear(), i = e.systemRenderer.render(this.root, n, this.offsetMatrix), !this.isStage) {
          var a = n.surface,
              o = this.$renderNode;
          o.drawData.length = 0;
          var s = a.width,
              h = a.height;
          this.bitmapData ? (this.bitmapData.source = a, this.bitmapData.width = s, this.bitmapData.height = h) : this.bitmapData = new t.BitmapData(a), o.image = this.bitmapData, o.imageWidth = s, o.imageHeight = h, o.drawImage(0, 0, s, h, -this.offsetX, -this.offsetY, s / this.$canvasScaleX, h / this.$canvasScaleY);
        }

        return i;
      }, r.prototype.changeSurfaceSize = function () {
        var t = (this.root, this.offsetX),
            e = this.offsetY,
            i = this.root.$getOriginalBounds(),
            r = this.$canvasScaleX,
            n = this.$canvasScaleY;
        this.offsetX = -i.x, this.offsetY = -i.y, this.offsetMatrix.setTo(this.offsetMatrix.a, 0, 0, this.offsetMatrix.d, this.offsetX, this.offsetY);
        var a = this.renderBuffer,
            o = Math.max(257, i.width * r),
            s = Math.max(257, i.height * n);
        (this.offsetX != t || this.offsetY != e || a.surface.width != o || a.surface.height != s) && a.resize(o, s);
      }, r.$setCanvasScale = function (e, i) {
        r.$canvasScaleX = e, r.$canvasScaleY = i, t.nativeRender && egret_native.nrSetCanvasScaleFactor(r.$canvasScaleFactor, e, i);
      }, r.$canvasScaleFactor = 1, r.$canvasScaleX = 1, r.$canvasScaleY = 1, r;
    }(t.HashObject);

    e.DisplayList = i, __reflect(i.prototype, "egret.sys.DisplayList");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {}(egret || (egret = {}));
var egret;
!function (t) {}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (e) {
    function i(t) {
      for (var e = [], i = 0; i < t.length; i++) {
        e.push(t[i]);
      }

      return e;
    }

    var r = function (r) {
      function h(e, i, n) {
        var a = r.call(this) || this;
        return a.isPlaying = !1, a.entryClassName = n, a.stage = i, a.screenDisplayList = a.createDisplayList(i, e), a.showFPS = !1, a.showLog = !1, a.stageDisplayList = null, t.nativeRender && (egret_native.rootWebGLBuffer = e), a;
      }

      return __extends(h, r), h.prototype.createDisplayList = function (t, i) {
        var r = new e.DisplayList(t);
        return r.renderBuffer = i, t.$displayList = r, r;
      }, h.prototype.start = function () {
        !this.isPlaying && this.stage && (e.$TempStage = e.$TempStage || this.stage, this.isPlaying = !0, this.root || this.initialize(), t.ticker.$addPlayer(this));
      }, h.prototype.initialize = function () {
        var e;

        if (this.entryClassName && (e = t.getDefinitionByName(this.entryClassName)), e) {
          var i = new e();
          this.root = i, i instanceof t.DisplayObject && this.stage.addChild(i);
        }
      }, h.prototype.stop = function () {
        this.pause(), this.stage = null;
      }, h.prototype.pause = function () {
        this.isPlaying && (this.isPlaying = !1, t.ticker.$removePlayer(this));
      }, h.prototype.$render = function (e, i) {
        if (t.nativeRender) return egret_native.updateNativeRender(), void egret_native.nrRender();
        var r = this.stage,
            a = t.getTimer(),
            o = r.$displayList.drawToSurface(),
            s = t.getTimer();
        e && this.showFPS && n.update(o, s - a, i);
      }, h.prototype.updateStageSize = function (e, i) {
        var r = this.stage;
        r.$stageWidth = e, r.$stageHeight = i, t.nativeRender ? egret_native.nrResize(e, i) : (this.screenDisplayList.setClipRect(e, i), this.stageDisplayList && this.stageDisplayList.setClipRect(e, i)), r.dispatchEventWith(t.Event.RESIZE);
      }, h.prototype.displayFPS = function (r, h, c, l) {
        if (h = !!h, h && (t.log = function () {
          for (var t = arguments.length, r = "", n = 0; t > n; n++) {
            r += arguments[n] + " ";
          }

          e.$logToFPS(r), console.log.apply(console, i(arguments));
        }, t.warn = function () {
          for (var t = arguments.length, r = "", n = 0; t > n; n++) {
            r += arguments[n] + " ";
          }

          e.$warnToFPS(r), console.warn.apply(console, i(arguments));
        }, t.error = function () {
          for (var t = arguments.length, r = "", n = 0; t > n; n++) {
            r += arguments[n] + " ";
          }

          e.$errorToFPS(r), console.error.apply(console, i(arguments));
        }), this.showFPS = !!r, this.showLog = h, !n) {
          n = new FPS(this.stage, r, h, c, l);

          for (var u = a.length, p = 0; u > p; p++) {
            n.updateInfo(a[p]);
          }

          a = null;

          for (var d = o.length, p = 0; d > p; p++) {
            n.updateWarn(o[p]);
          }

          o = null;

          for (var f = s.length, p = 0; f > p; p++) {
            n.updateError(s[p]);
          }

          s = null;
        }
      }, h;
    }(t.HashObject);

    e.Player = r, __reflect(r.prototype, "egret.sys.Player");
    var n,
        a = [],
        o = [],
        s = [];
    e.$logToFPS = function (t) {
      return n ? void n.updateInfo(t) : void a.push(t);
    }, e.$warnToFPS = function (t) {
      return n ? void n.updateWarn(t) : void o.push(t);
    }, e.$errorToFPS = function (t) {
      return n ? void n.updateError(t) : void s.push(t);
    };

    var h = function () {
      function e(e, i, r, n, a) {
        this.showFPS = i, this.showLog = r, this.logFilter = n, this.styles = a, this.infoLines = [], this.totalTime = 0, this.totalTick = 0, this.lastTime = 0, this.drawCalls = 0, this.costRender = 0, this.costTicker = 0, this.infoLines = [], this.totalTime = 0, this.totalTick = 0, this.lastTime = 0, this.drawCalls = 0, this.costRender = 0, this.costTicker = 0, this._stage = e, this.showFPS = i, this.showLog = r, this.logFilter = n, this.styles = a, this.fpsDisplay = new t.FPSDisplay(e, i, r, n, a);
        var o;

        try {
          o = n ? new RegExp(n) : null;
        } catch (s) {
          t.log(s);
        }

        this.filter = function (t) {
          return o ? o.test(t) : !n || 0 == t.indexOf(n);
        };
      }

      return e.prototype.update = function (e, i, r) {
        var n = t.getTimer();

        if (this.totalTime += n - this.lastTime, this.lastTime = n, this.totalTick++, this.drawCalls += e, this.costRender += i, this.costTicker += r, this.totalTime >= 1e3) {
          var a = Math.min(Math.ceil(1e3 * this.totalTick / this.totalTime), t.ticker.$frameRate),
              o = Math.round(this.drawCalls / this.totalTick),
              s = Math.round(this.costRender / this.totalTick),
              h = Math.round(this.costTicker / this.totalTick);
          this.fpsDisplay.update({
            fps: a,
            draw: o,
            costTicker: h,
            costRender: s
          }), this.totalTick = 0, this.totalTime = this.totalTime % 1e3, this.drawCalls = 0, this.costRender = 0, this.costTicker = 0;
        }
      }, e.prototype.updateInfo = function (t) {
        t && this.showLog && this.filter(t) && this.fpsDisplay.updateInfo(t);
      }, e.prototype.updateWarn = function (t) {
        t && this.showLog && this.filter(t) && (this.fpsDisplay.updateWarn ? this.fpsDisplay.updateWarn(t) : this.fpsDisplay.updateInfo("[Warning]" + t));
      }, e.prototype.updateError = function (t) {
        t && this.showLog && this.filter(t) && (this.fpsDisplay.updateError ? this.fpsDisplay.updateError(t) : this.fpsDisplay.updateInfo("[Error]" + t));
      }, e;
    }();

    __reflect(h.prototype, "FPSImpl"), __global.FPS = h, t.warn = function () {
      console.warn.apply(console, i(arguments));
    }, t.error = function () {
      console.error.apply(console, i(arguments));
    }, t.assert = function () {
      console.assert.apply(console, i(arguments));
    }, t.log = function () {
      console.log.apply(console, i(arguments));
    };
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {})), function (t) {
  if (t.nativeRender = __global.nativeRender, t.nativeRender) {
    var e = egret_native.nrABIVersion,
        i = egret_native.nrMinEgretVersion,
        r = 5;

    if (r > e) {
      t.nativeRender = !1;
      var n = "需要升级微端版本到 0.1.14 才可以开启原生渲染加速";
      t.sys.$warnToFPS(n), t.warn(n);
    } else if (e > r) {
      t.nativeRender = !1;
      var n = "需要升级引擎版本到 " + i + " 才可以开启原生渲染加速";
      t.sys.$warnToFPS(n), t.warn(n);
    }
  }
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i(i) {
      var r = e.call(this, i) || this;
      return r._verticesDirty = !0, r._bounds = new t.Rectangle(), r.$renderNode = new t.sys.MeshNode(), r;
    }

    return __extends(i, e), i.prototype.createNativeDisplayObject = function () {
      this.$nativeDisplayObject = new egret_native.NativeDisplayObject(12);
    }, i.prototype.setBitmapDataToWasm = function (t) {
      this.$nativeDisplayObject.setBitmapDataToMesh(t);
    }, i.prototype.$updateRenderNode = function () {
      var e = this.$bitmapData;

      if (e) {
        var i = (t.$TextureScaleFactor, this.$renderNode);
        i.smoothing = this.$smoothing, i.image = e, i.imageWidth = this.$sourceWidth, i.imageHeight = this.$sourceHeight;
        var r = isNaN(this.$explicitBitmapWidth) ? this.$textureWidth : this.$explicitBitmapWidth,
            n = isNaN(this.$explicitBitmapHeight) ? this.$textureHeight : this.$explicitBitmapHeight,
            a = r / this.$textureWidth,
            o = n / this.$textureHeight,
            s = this.$bitmapWidth,
            h = this.$bitmapHeight;
        i.drawMesh(this.$bitmapX, this.$bitmapY, s, h, this.$offsetX * a, this.$offsetY * o, a * s, o * h);
      }
    }, i.prototype.$updateVertices = function () {
      var e = this;

      if (e._verticesDirty = !0, e.$renderDirty = !0, t.nativeRender) {
        var i = this.$renderNode;
        this.$nativeDisplayObject.setDataToMesh(i.vertices, i.indices, i.uvs);
      } else {
        var r = e.$parent;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
        var n = e.$maskedObject;
        n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
      }
    }, i.prototype.$measureContentBounds = function (t) {
      if (this._verticesDirty) {
        this._verticesDirty = !1;
        var e = this.$renderNode,
            i = e.vertices;

        if (i.length) {
          this._bounds.setTo(Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);

          for (var r = 0, n = i.length; n > r; r += 2) {
            var a = i[r],
                o = i[r + 1];
            this._bounds.x > a && (this._bounds.x = a), this._bounds.width < a && (this._bounds.width = a), this._bounds.y > o && (this._bounds.y = o), this._bounds.height < o && (this._bounds.height = o);
          }

          this._bounds.width -= this._bounds.x, this._bounds.height -= this._bounds.y;
        } else this._bounds.setTo(0, 0, 0, 0);

        e.bounds.copyFrom(this._bounds);
      }

      t.copyFrom(this._bounds);
    }, i;
  }(t.Bitmap);

  t.Mesh = e, __reflect(e.prototype, "egret.Mesh");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (e) {
    var i = function (e) {
      function i() {
        return e.call(this) || this;
      }

      return __extends(i, e), i.prototype.calculateStageSize = function (e, i, r, n, a) {
        var o = i,
            s = r,
            h = n,
            c = a,
            l = i / h || 0,
            u = r / c || 0;

        switch (e) {
          case t.StageScaleMode.EXACT_FIT:
            break;

          case t.StageScaleMode.FIXED_HEIGHT:
            h = Math.round(i / u);
            break;

          case t.StageScaleMode.FIXED_WIDTH:
            c = Math.round(r / l);
            break;

          case t.StageScaleMode.NO_BORDER:
            l > u ? s = Math.round(c * l) : o = Math.round(h * u);
            break;

          case t.StageScaleMode.SHOW_ALL:
            l > u ? o = Math.round(h * u) : s = Math.round(c * l);
            break;

          case t.StageScaleMode.FIXED_NARROW:
            l > u ? h = Math.round(i / u) : c = Math.round(r / l);
            break;

          case t.StageScaleMode.FIXED_WIDE:
            l > u ? c = Math.round(r / l) : h = Math.round(i / u);
            break;

          default:
            h = i, c = r;
        }

        return t.Capabilities.runtimeType != t.RuntimeType.WXGAME && (h % 2 != 0 && (h += 1), c % 2 != 0 && (c += 1), o % 2 != 0 && (o += 1), s % 2 != 0 && (s += 1)), {
          stageWidth: h,
          stageHeight: c,
          displayWidth: o,
          displayHeight: s
        };
      }, i;
    }(t.HashObject);

    e.DefaultScreenAdapter = i, __reflect(i.prototype, "egret.sys.DefaultScreenAdapter", ["egret.sys.IScreenAdapter"]);
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function t() {}

    return t.NO_SCALE = "noScale", t.SHOW_ALL = "showAll", t.NO_BORDER = "noBorder", t.EXACT_FIT = "exactFit", t.FIXED_WIDTH = "fixedWidth", t.FIXED_HEIGHT = "fixedHeight", t.FIXED_NARROW = "fixedNarrow", t.FIXED_WIDE = "fixedWide", t;
  }();

  t.StageScaleMode = e, __reflect(e.prototype, "egret.StageScaleMode");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {}(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (e) {
    e.$START_TIME = 0, e.$invalidateRenderFlag = !1, e.$requestRenderingFlag = !1;

    var i = function () {
      function i() {
        this.playerList = [], this.callBackList = [], this.thisObjectList = [], this.$frameRate = 30, this.lastTimeStamp = 0, this.costEnterFrame = 0, this.isPaused = !1, e.$START_TIME = Date.now(), this.frameDeltaTime = 1e3 / this.$frameRate, this.lastCount = this.frameInterval = Math.round(6e4 / this.$frameRate);
      }

      return i.prototype.$addPlayer = function (t) {
        -1 == this.playerList.indexOf(t) && (this.playerList = this.playerList.concat(), this.playerList.push(t));
      }, i.prototype.$removePlayer = function (t) {
        var e = this.playerList.indexOf(t);

        if (-1 !== e) {
          this.playerList = this.playerList.concat(), this.playerList.splice(e, 1);
        }
      }, i.prototype.$startTick = function (t, e) {
        var i = this.getTickIndex(t, e);
        -1 == i && (this.concatTick(), this.callBackList.push(t), this.thisObjectList.push(e));
      }, i.prototype.$stopTick = function (t, e) {
        var i = this.getTickIndex(t, e);
        -1 != i && (this.concatTick(), this.callBackList.splice(i, 1), this.thisObjectList.splice(i, 1));
      }, i.prototype.getTickIndex = function (t, e) {
        for (var i = this.callBackList, r = this.thisObjectList, n = i.length - 1; n >= 0; n--) {
          if (i[n] == t && r[n] == e) return n;
        }

        return -1;
      }, i.prototype.concatTick = function () {
        this.callBackList = this.callBackList.concat(), this.thisObjectList = this.thisObjectList.concat();
      }, i.prototype.$setFrameRate = function (t) {
        return 0 >= t ? !1 : this.$frameRate == t ? !1 : (this.$frameRate = t, t > 60 && (t = 60), this.frameDeltaTime = 1e3 / t, this.lastCount = this.frameInterval = Math.round(6e4 / t), !0);
      }, i.prototype.pause = function () {
        this.isPaused = !0;
      }, i.prototype.resume = function () {
        this.isPaused = !1;
      }, i.prototype.update = function () {
        for (var i = t.getTimer(), r = this.callBackList, n = this.thisObjectList, a = r.length, o = e.$requestRenderingFlag, s = t.getTimer(), h = t.lifecycle.contexts, c = 0, l = h; c < l.length; c++) {
          var u = l[c];
          u.onUpdate && u.onUpdate();
        }

        if (this.isPaused) return void (this.lastTimeStamp = s);
        this.callLaterAsyncs();

        for (var p = 0; a > p; p++) {
          r[p].call(n[p], s) && (o = !0);
        }

        var d = t.getTimer(),
            f = s - this.lastTimeStamp;
        if (this.lastTimeStamp = s, f >= this.frameDeltaTime) this.lastCount = this.frameInterval;else {
          if (this.lastCount -= 1e3, this.lastCount > 0) return void (o && this.render(!1, this.costEnterFrame + d - i));
          this.lastCount += this.frameInterval;
        }
        this.render(!0, this.costEnterFrame + d - i);
        var g = t.getTimer();
        this.broadcastEnterFrame();
        var $ = t.getTimer();
        this.costEnterFrame = $ - g;
      }, i.prototype.render = function (t, i) {
        var r = this.playerList,
            n = r.length;

        if (0 != n) {
          this.callLaters(), e.$invalidateRenderFlag && (this.broadcastRender(), e.$invalidateRenderFlag = !1);

          for (var a = 0; n > a; a++) {
            r[a].$render(t, i);
          }

          e.$requestRenderingFlag = !1;
        }
      }, i.prototype.broadcastEnterFrame = function () {
        var e = t.DisplayObject.$enterFrameCallBackList,
            i = e.length;

        if (0 != i) {
          e = e.concat();

          for (var r = 0; i > r; r++) {
            e[r].dispatchEventWith(t.Event.ENTER_FRAME);
          }
        }
      }, i.prototype.broadcastRender = function () {
        var e = t.DisplayObject.$renderCallBackList,
            i = e.length;

        if (0 != i) {
          e = e.concat();

          for (var r = 0; i > r; r++) {
            e[r].dispatchEventWith(t.Event.RENDER);
          }
        }
      }, i.prototype.callLaters = function () {
        var e, i, r;
        if (t.$callLaterFunctionList.length > 0 && (e = t.$callLaterFunctionList, t.$callLaterFunctionList = [], i = t.$callLaterThisList, t.$callLaterThisList = [], r = t.$callLaterArgsList, t.$callLaterArgsList = []), e) for (var n = e.length, a = 0; n > a; a++) {
          var o = e[a];
          null != o && o.apply(i[a], r[a]);
        }
      }, i.prototype.callLaterAsyncs = function () {
        if (t.$callAsyncFunctionList.length > 0) {
          var e = t.$callAsyncFunctionList,
              i = t.$callAsyncThisList,
              r = t.$callAsyncArgsList;
          t.$callAsyncFunctionList = [], t.$callAsyncThisList = [], t.$callAsyncArgsList = [];

          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            null != a && a.apply(i[n], r[n]);
          }
        }
      }, i;
    }();

    e.SystemTicker = i, __reflect(i.prototype, "egret.sys.SystemTicker");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {})), function (t) {
  var e;
  !function (e) {
    function i(t) {
      var i = new n();
      e.contexts.push(i), t(i);
    }

    e.contexts = [];

    var r = !0,
        n = function () {
      function i() {}

      return i.prototype.pause = function () {
        r && (r = !1, e.stage.dispatchEvent(new t.Event(t.Event.DEACTIVATE)), e.onPause && e.onPause());
      }, i.prototype.resume = function () {
        r || (r = !0, e.stage.dispatchEvent(new t.Event(t.Event.ACTIVATE)), e.onResume && e.onResume());
      }, i;
    }();

    e.LifecycleContext = n, __reflect(n.prototype, "egret.lifecycle.LifecycleContext"), e.addLifecycleListener = i;
  }(e = t.lifecycle || (t.lifecycle = {})), t.ticker = new t.sys.SystemTicker();
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (e) {
    var i = function (e) {
      function i(t) {
        var i = e.call(this) || this;
        return i.maxTouches = 0, i.useTouchesCount = 0, i.touchDownTarget = {}, i.lastTouchX = -1, i.lastTouchY = -1, i.stage = t, i;
      }

      return __extends(i, e), i.prototype.$initMaxTouches = function () {
        this.maxTouches = this.stage.$maxTouches;
      }, i.prototype.onTouchBegin = function (e, i, r) {
        if (!(this.useTouchesCount >= this.maxTouches)) {
          this.lastTouchX = e, this.lastTouchY = i;
          var n = this.findTarget(e, i);
          null == this.touchDownTarget[r] && (this.touchDownTarget[r] = n, this.useTouchesCount++), t.TouchEvent.dispatchTouchEvent(n, t.TouchEvent.TOUCH_BEGIN, !0, !0, e, i, r, !0);
        }
      }, i.prototype.onTouchMove = function (e, i, r) {
        if (null != this.touchDownTarget[r] && (this.lastTouchX != e || this.lastTouchY != i)) {
          this.lastTouchX = e, this.lastTouchY = i;
          var n = this.findTarget(e, i);
          t.TouchEvent.dispatchTouchEvent(n, t.TouchEvent.TOUCH_MOVE, !0, !0, e, i, r, !0);
        }
      }, i.prototype.onTouchEnd = function (e, i, r) {
        if (null != this.touchDownTarget[r]) {
          var n = this.findTarget(e, i),
              a = this.touchDownTarget[r];
          delete this.touchDownTarget[r], this.useTouchesCount--, t.TouchEvent.dispatchTouchEvent(n, t.TouchEvent.TOUCH_END, !0, !0, e, i, r, !1), a == n ? t.TouchEvent.dispatchTouchEvent(n, t.TouchEvent.TOUCH_TAP, !0, !0, e, i, r, !1) : t.TouchEvent.dispatchTouchEvent(a, t.TouchEvent.TOUCH_RELEASE_OUTSIDE, !0, !0, e, i, r, !1);
        }
      }, i.prototype.findTarget = function (t, e) {
        var i = this.stage.$hitTest(t, e);
        return i || (i = this.stage), i;
      }, i;
    }(t.HashObject);

    e.TouchHandler = i, __reflect(i.prototype, "egret.sys.TouchHandler");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (e) {
    var i = function (e) {
      function i() {
        var t = e.call(this) || this;
        return t.image = null, t.smoothing = !0, t.blendMode = null, t.alpha = 0 / 0, t.filter = null, t.rotated = !1, t.type = 1, t;
      }

      return __extends(i, e), i.prototype.drawImage = function (t, e, i, r, n, a, o, s) {
        this.drawData.push(t, e, i, r, n, a, o, s), this.renderCount++;
      }, i.prototype.cleanBeforeRender = function () {
        e.prototype.cleanBeforeRender.call(this), this.image = null, this.matrix = null, this.blendMode = null, this.alpha = 0 / 0, this.filter = null;
      }, i.$updateTextureData = function (e, r, n, a, o, s, h, c, l, u, p, d, f, g, $, y) {
        if (r) {
          var v = t.$TextureScaleFactor;

          if (e.smoothing = y, e.image = r, e.imageWidth = f, e.imageHeight = g, $ == t.BitmapFillMode.SCALE) {
            var b = p / l * v,
                m = d / u * v;
            e.drawImage(n, a, o, s, b * h, m * c, b * o, m * s);
          } else if ($ == t.BitmapFillMode.CLIP) {
            var x = Math.min(l, p),
                T = Math.min(u, d),
                _ = o * v,
                D = s * v;

            i.drawClipImage(e, v, n, a, _, D, h, c, x, T);
          } else for (var _ = o * v, D = s * v, O = 0; p > O; O += l) {
            for (var w = 0; d > w; w += u) {
              var x = Math.min(p - O, l),
                  T = Math.min(d - w, u);
              i.drawClipImage(e, v, n, a, _, D, h, c, x, T, O, w);
            }
          }
        }
      }, i.$updateTextureDataWithScale9Grid = function (e, i, r, n, a, o, s, h, c, l, u, p, d, f, g, $) {
        e.smoothing = $, e.image = i, e.imageWidth = f, e.imageHeight = g;
        var y = o,
            v = s;
        p -= l - o * t.$TextureScaleFactor, d -= u - s * t.$TextureScaleFactor;

        var b = r.x - h,
            m = r.y - c,
            x = b / t.$TextureScaleFactor,
            T = m / t.$TextureScaleFactor,
            _ = r.width / t.$TextureScaleFactor,
            D = r.height / t.$TextureScaleFactor;

        0 == D && (D = 1, T >= v && T--), 0 == _ && (_ = 1, x >= y && x--);
        var O = n,
            w = O + x,
            E = w + _,
            R = y - x - _,
            S = a,
            F = S + T,
            P = F + D,
            C = v - T - D,
            M = R * t.$TextureScaleFactor,
            j = C * t.$TextureScaleFactor;
        if ((x + R) * t.$TextureScaleFactor > p || (T + C) * t.$TextureScaleFactor > d) return void e.drawImage(n, a, o, s, h, c, p, d);
        var A = h,
            B = A + b,
            N = A + (p - M),
            k = p - b - M,
            L = c,
            I = L + m,
            U = L + d - j,
            X = d - m - j;
        T > 0 && (x > 0 && e.drawImage(O, S, x, T, A, L, b, m), _ > 0 && e.drawImage(w, S, _, T, B, L, k, m), R > 0 && e.drawImage(E, S, R, T, N, L, M, m)), D > 0 && (x > 0 && e.drawImage(O, F, x, D, A, I, b, X), _ > 0 && e.drawImage(w, F, _, D, B, I, k, X), R > 0 && e.drawImage(E, F, R, D, N, I, M, X)), C > 0 && (x > 0 && e.drawImage(O, P, x, C, A, U, b, j), _ > 0 && e.drawImage(w, P, _, C, B, U, k, j), R > 0 && e.drawImage(E, P, R, C, N, U, M, j));
      }, i.drawClipImage = function (t, e, i, r, n, a, o, s, h, c, l, u) {
        void 0 === l && (l = 0), void 0 === u && (u = 0);
        var p = o + n - h;
        p > 0 && (n -= p), p = s + a - c, p > 0 && (a -= p), t.drawImage(i, r, n / e, a / e, l + o, u + s, n, a);
      }, i;
    }(e.RenderNode);

    e.BitmapNode = i, __reflect(i.prototype, "egret.sys.BitmapNode");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (e) {
    var i = ["none", "round", "square"],
        r = ["bevel", "miter", "round"],
        n = function (n) {
      function a() {
        var t = n.call(this) || this;
        return t.dirtyRender = !0, t.type = 3, t;
      }

      return __extends(a, n), a.prototype.beginFill = function (t, i, r) {
        void 0 === i && (i = 1);
        var n = new e.FillPath();

        if (n.fillColor = t, n.fillAlpha = i, r) {
          var a = this.drawData.lastIndexOf(r);
          this.drawData.splice(a, 0, n);
        } else this.drawData.push(n);

        return this.renderCount++, n;
      }, a.prototype.beginGradientFill = function (i, r, n, a, o, s) {
        var h = new t.Matrix();
        o ? (h.a = 819.2 * o.a, h.b = 819.2 * o.b, h.c = 819.2 * o.c, h.d = 819.2 * o.d, h.tx = o.tx, h.ty = o.ty) : (h.a = 100, h.d = 100);
        var c = new e.GradientFillPath();

        if (c.gradientType = i, c.colors = r, c.alphas = n, c.ratios = a, c.matrix = h, s) {
          var l = this.drawData.lastIndexOf(s);
          this.drawData.splice(l, 0, c);
        } else this.drawData.push(c);

        return this.renderCount++, c;
      }, a.prototype.lineStyle = function (n, a, o, s, h, c, l) {
        void 0 === o && (o = 1), void 0 === c && (c = 3), void 0 === l && (l = []), -1 == i.indexOf(s) && (s = "round"), -1 == r.indexOf(h) && (h = "round");
        var u = new e.StrokePath();
        return u.lineWidth = n, u.lineColor = a, u.lineAlpha = o, u.caps = s || t.CapsStyle.ROUND, u.joints = h, u.miterLimit = c, u.lineDash = l, this.drawData.push(u), this.renderCount++, u;
      }, a.prototype.clear = function () {
        this.drawData.length = 0, this.dirtyRender = !0, this.renderCount = 0;
      }, a.prototype.cleanBeforeRender = function () {}, a.prototype.clean = function () {
        this.$texture && (t.WebGLUtils.deleteWebGLTexture(this.$texture), this.$texture = null, this.dirtyRender = !0);
      }, a;
    }(e.RenderNode);

    e.GraphicsNode = n, __reflect(n.prototype, "egret.sys.GraphicsNode");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {
    var e = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.type = 4, e;
      }

      return __extends(e, t), e.prototype.addNode = function (t) {
        this.drawData.push(t);
      }, e.prototype.cleanBeforeRender = function () {
        for (var t = this.drawData, e = t.length - 1; e >= 0; e--) {
          t[e].cleanBeforeRender();
        }
      }, e.prototype.$getRenderCount = function () {
        for (var t = 0, e = this.drawData, i = e.length - 1; i >= 0; i--) {
          t += e[i].$getRenderCount();
        }

        return t;
      }, e;
    }(t.RenderNode);

    t.GroupNode = e, __reflect(e.prototype, "egret.sys.GroupNode");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (e) {
    var i = function (e) {
      function i() {
        var i = e.call(this) || this;
        return i.image = null, i.smoothing = !0, i.bounds = new t.Rectangle(), i.blendMode = null, i.alpha = 0 / 0, i.filter = null, i.rotated = !1, i.type = 5, i.vertices = [], i.uvs = [], i.indices = [], i;
      }

      return __extends(i, e), i.prototype.drawMesh = function (t, e, i, r, n, a, o, s) {
        this.drawData.push(t, e, i, r, n, a, o, s), this.renderCount++;
      }, i.prototype.cleanBeforeRender = function () {
        e.prototype.cleanBeforeRender.call(this), this.image = null, this.matrix = null;
      }, i;
    }(e.RenderNode);

    e.MeshNode = i, __reflect(i.prototype, "egret.sys.MeshNode");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {
    var e = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.image = null, e.smoothing = !0, e.rotated = !1, e.type = 6, e;
      }

      return __extends(e, t), e.prototype.drawImage = function (t, e, i, r, n, a, o, s) {
        var h = this;
        h.sourceX = t, h.sourceY = e, h.sourceW = i, h.sourceH = r, h.drawX = n, h.drawY = a, h.drawW = o, h.drawH = s, h.renderCount = 1;
      }, e.prototype.cleanBeforeRender = function () {
        t.prototype.cleanBeforeRender.call(this), this.image = null;
      }, e;
    }(t.RenderNode);

    t.NormalBitmapNode = e, __reflect(e.prototype, "egret.sys.NormalBitmapNode");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  t.OrientationMode = {
    AUTO: "auto",
    PORTRAIT: "portrait",
    LANDSCAPE: "landscape",
    LANDSCAPE_FLIPPED: "landscapeFlipped"
  };
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (e) {
    var i = function (e) {
      function i() {
        var t = e.call(this) || this;
        return t.textColor = 16777215, t.strokeColor = 0, t.size = 30, t.stroke = 0, t.bold = !1, t.italic = !1, t.fontFamily = "Arial", t.dirtyRender = !0, t.type = 2, t;
      }

      return __extends(i, e), i.prototype.drawText = function (t, e, i, r) {
        this.drawData.push(t, e, i, r), this.renderCount++, this.dirtyRender = !0;
      }, i.prototype.clean = function () {
        this.$texture && (t.WebGLUtils.deleteWebGLTexture(this.$texture), this.$texture = null, this.dirtyRender = !0);
      }, i.prototype.cleanBeforeRender = function () {
        e.prototype.cleanBeforeRender.call(this), this.dirtyRender = !0;
      }, i;
    }(e.RenderNode);

    e.TextNode = i, __reflect(i.prototype, "egret.sys.TextNode");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {
    var e = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.type = 1, e;
      }

      return __extends(e, t), e;
    }(t.Path2D);

    t.FillPath = e, __reflect(e.prototype, "egret.sys.FillPath");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {
    var e = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.type = 2, e;
      }

      return __extends(e, t), e;
    }(t.Path2D);

    t.GradientFillPath = e, __reflect(e.prototype, "egret.sys.GradientFillPath");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      i.$renderBuffer = new t.sys.RenderBuffer();
      var r = new t.BitmapData(i.$renderBuffer.surface);
      return r.$deleteSource = !1, i._setBitmapData(r), i;
    }

    return __extends(i, e), i.prototype.drawToTexture = function (e, i, r) {
      if (void 0 === r && (r = 1), i && (0 == i.width || 0 == i.height)) return !1;
      var n = i || e.$getOriginalBounds();
      if (0 == n.width || 0 == n.height) return !1;
      r /= t.$TextureScaleFactor;
      var a = (n.x + n.width) * r,
          o = (n.y + n.height) * r;
      i && (a = n.width * r, o = n.height * r);
      var s = this.$renderBuffer;
      if (!s) return !1;

      if (s.resize(a, o), this.$bitmapData.width = a, this.$bitmapData.height = o, t.nativeRender) {
        egret_native.activateBuffer(this.$renderBuffer);
        var h = !1,
            c = 0,
            l = 0,
            u = 0,
            p = 0;
        i && (h = !0, c = i.x, l = i.y, u = i.width, p = i.height), egret_native.updateNativeRender(), egret_native.nrRenderDisplayObject(e.$nativeDisplayObject.id, r, h, c, l, u, p), egret_native.activateBuffer(null);
      } else {
        var d = t.Matrix.create();
        d.identity(), d.scale(r, r), i && d.translate(-i.x, -i.y), t.sys.systemRenderer.render(e, s, d, !0), t.Matrix.release(d);
      }

      return this.$initData(0, 0, a, o, 0, 0, a, o, a, o), !0;
    }, i.prototype.getPixel32 = function (e, i) {
      var r;

      if (this.$renderBuffer) {
        var n = t.$TextureScaleFactor;
        e = Math.round(e / n), i = Math.round(i / n), r = this.$renderBuffer.getPixels(e, i, 1, 1);
      }

      return r;
    }, i.prototype.dispose = function () {
      e.prototype.dispose.call(this), this.$renderBuffer = null;
    }, i;
  }(t.Texture);

  t.RenderTexture = e, __reflect(e.prototype, "egret.RenderTexture");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {
    var e = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.type = 3, e;
      }

      return __extends(e, t), e;
    }(t.Path2D);

    t.StrokePath = e, __reflect(e.prototype, "egret.sys.StrokePath");
  }(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(t, e) {
    var i = null == e.italic ? t.italic : e.italic,
        r = null == e.bold ? t.bold : e.bold,
        n = null == e.size ? t.size : e.size,
        a = e.fontFamily || t.fontFamily,
        o = i ? "italic " : "normal ";
    return o += r ? "bold " : "normal ", o += n + "px " + a;
  }

  function i(t, e) {
    var i = t >> 16,
        r = t >> 8 & 255,
        n = 255 & t;
    return "rgba(" + i + "," + r + "," + n + "," + e + ")";
  }

  function r(e, r, n, a, o, s) {
    var h;
    h = r == t.GradientType.LINEAR ? e.createLinearGradient(-1, 0, 1, 0) : e.createRadialGradient(0, 0, 0, 0, 0, 1);

    for (var c = n.length, l = 0; c > l; l++) {
      h.addColorStop(o[l] / 255, i(n[l], a[l]));
    }

    return h;
  }

  function n(t, e, i) {
    void 0 === i && (i = 0);

    for (var r = 0, n = e.length; n > r; r++) {
      t[r + i] = e[r];
    }
  }

  function a(t, e, i, r) {
    for (var n = r[0], a = r[1], o = r[2], s = r[3], h = r[4], c = r[5], l = r[6], u = r[7], p = r[8], d = r[9], f = r[10], g = r[11], $ = r[12], y = r[13], v = r[14], b = r[15], m = r[16], x = r[17], T = r[18], _ = r[19], D = 0, O = e * i * 4; O > D; D += 4) {
      var w = t[D + 0],
          E = t[D + 1],
          R = t[D + 2],
          S = t[D + 3];
      t[D + 0] = n * w + a * E + o * R + s * S + h, t[D + 1] = c * w + l * E + u * R + p * S + d, t[D + 2] = f * w + g * E + $ * R + y * S + v, t[D + 3] = b * w + m * E + x * R + T * S + _;
    }
  }

  function o(t, e, i, r, n) {
    s(t, e, i, r), h(t, e, i, n);
  }

  function s(t, e, i, r) {
    var a;
    a = _ ? new Uint8ClampedArray(4 * e) : new Array(4 * e);

    for (var o = 4 * e, s = 2 * r + 1, h = 0; i > h; h++) {
      for (var c = h * o, l = 0, u = 0, p = 0, d = 0, f = 0, g = 0, $ = 4 * -r, y = 4 * r + 4; y > $; $ += 4) {
        var v = c + $;
        c > v || v >= c + o || (f = t[v + 3], l += t[v + 0] * f, u += t[v + 1] * f, p += t[v + 2] * f, d += f);
      }

      for (var $ = c, y = c + o, b = 0, m = $ - 4 * r, x = $ + 4 * (r + 1); y > $; $ += 4, b += 4, x += 4, m += 4) {
        0 === d ? (a[b + 0] = 0, a[b + 1] = 0, a[b + 2] = 0, a[b + 3] = 0) : (a[b + 0] = l / d, a[b + 1] = u / d, a[b + 2] = p / d, a[b + 3] = d / s), f = t[x + 3], g = t[m + 3], f || 0 == f ? g || 0 == g ? (l += t[x + 0] * f - t[m + 0] * g, u += t[x + 1] * f - t[m + 1] * g, p += t[x + 2] * f - t[m + 2] * g, d += f - g) : (l += t[x + 0] * f, u += t[x + 1] * f, p += t[x + 2] * f, d += f) : (g || 0 == g) && (l += -t[m + 0] * g, u += -t[m + 1] * g, p += -t[m + 2] * g, d += -g);
      }

      _ ? t.set(a, c) : n(t, a, c);
    }
  }

  function h(t, e, i, r) {
    var n;
    n = _ ? new Uint8ClampedArray(4 * i) : new Array(4 * i);

    for (var a = 4 * e, o = 2 * r + 1, s = 0; e > s; s++) {
      for (var h = 4 * s, c = 0, l = 0, u = 0, p = 0, d = 0, f = 0, g = -r * a, $ = r * a + a; $ > g; g += a) {
        var y = h + g;
        h > y || y >= h + i * a || (d = t[y + 3], c += t[y + 0] * d, l += t[y + 1] * d, u += t[y + 2] * d, p += d);
      }

      for (var g = h, $ = h + i * a, v = 0, b = h - r * a, m = h + (r + 1) * a; $ > g; g += a, v += 4, m += a, b += a) {
        0 === p ? (n[v + 0] = 0, n[v + 1] = 0, n[v + 2] = 0, n[v + 3] = 0) : (n[v + 0] = c / p, n[v + 1] = l / p, n[v + 2] = u / p, n[v + 3] = p / o), d = t[m + 3], f = t[b + 3], d || 0 == d ? f || 0 == f ? (c += t[m + 0] * d - t[b + 0] * f, l += t[m + 1] * d - t[b + 1] * f, u += t[m + 2] * d - t[b + 2] * f, p += d - f) : (c += t[m + 0] * d, l += t[m + 1] * d, u += t[m + 2] * d, p += d) : (f || 0 == f) && (c += -t[b + 0] * f, l += -t[b + 1] * f, u += -t[b + 2] * f, p += -f);
      }

      for (var x = 4 * s, $ = x + i * a, T = 0; $ > x; x += a, T += 4) {
        t[x + 0] = n[T + 0], t[x + 1] = n[T + 1], t[x + 2] = n[T + 2], t[x + 3] = n[T + 3];
      }
    }
  }

  function c(t, e, i, r, a, s, h, c, f) {
    var g = l(t, r);
    u(g, e, i, h, c), o(g, e, i, a, s), p(g, f), d(g, t), t.set(g), _ ? t.set(g) : n(t, g);
  }

  function l(t, e) {
    e || (e = [0, 0, 0, 0]);
    var i;
    _ ? i = new Uint8ClampedArray(t) : (i = new Array(t.length), n(i, t));

    for (var r = e[0], a = e[1], o = e[2], s = e[3], h = 0, c = i.length; c > h; h += 4) {
      var l = i[h + 3];
      i[h + 0] = r * l, i[h + 1] = a * l, i[h + 2] = o * l, i[h + 3] = s * l;
    }

    return i;
  }

  function u(t, e, i, r, a) {
    var o,
        s,
        h = Math.sin(r) * a | 0,
        c = Math.cos(r) * a | 0;

    if (_) {
      o = new Int32Array(t.buffer), s = new Int32Array(o.length);

      for (var l = 0; i > l; l++) {
        var u = l + h;
        if (!(0 > u || u > i)) for (var p = 0; e > p; p++) {
          var d = p + c;
          0 > d || d > e || (s[u * e + d] = o[l * e + p]);
        }
      }

      o.set(s);
    } else {
      o = t, s = new Array(o.length);

      for (var l = 0; i > l; l++) {
        var u = l + h;
        if (!(0 > u || u > i)) for (var p = 0; e > p; p++) {
          var d = p + c;
          0 > d || d > e || (s[4 * (u * e + d) + 0] = o[4 * (l * e + p) + 0], s[4 * (u * e + d) + 1] = o[4 * (l * e + p) + 1], s[4 * (u * e + d) + 2] = o[4 * (l * e + p) + 2], s[4 * (u * e + d) + 3] = o[4 * (l * e + p) + 3]);
        }
      }

      n(o, s);
    }
  }

  function p(t, e) {
    for (var i = 0, r = t.length; r > i; i += 4) {
      t[i + 3] *= e;
    }
  }

  function d(t, e) {
    for (var i = 0, r = t.length; r > i; i += 4) {
      var n = t[i + 0],
          a = t[i + 1],
          o = t[i + 2],
          s = t[i + 3] / 255,
          h = e[i + 0],
          c = e[i + 1],
          l = e[i + 2],
          u = e[i + 3] / 255;
      t[i + 0] = h + n * (1 - u), t[i + 1] = c + a * (1 - u), t[i + 2] = l + o * (1 - u), t[i + 3] = 255 * (u + s * (1 - u));
    }
  }

  function f(t, e, i) {
    return t * (1 - i) + e * i;
  }

  function g(t, e, i, r, a, o, s, h, c, l, u, p) {
    var d;
    d = _ ? new Uint8ClampedArray(t.length) : new Array(t.length);

    for (var g, $, y = r[3], v = 0, b = 0, m = h * Math.cos(s), x = h * Math.sin(s), T = 7, D = 12, O = 3.141592653589793, w = a / T, E = o / T, R = 0; e > R; R++) {
      for (var S = 0; i > S; S++) {
        for (var F = 0, P = S * e * 4 + 4 * R, C = 0, M = 0, j = t[P + 0] / 255, A = t[P + 1] / 255, B = t[P + 2] / 255, N = t[P + 3] / 255, k = 0; 2 * O >= k; k += 2 * O / D) {
          g = Math.cos(k + F), $ = Math.sin(k + F);

          for (var L = 0; T > L; L++) {
            v = L * w * g, b = L * E * $;
            var I = Math.round(R + v - m),
                U = Math.round(S + b - x),
                X = 0;
            if (I >= e || 0 > I || 0 > U || U >= i) X = 0;else {
              var H = U * e * 4 + 4 * I;
              X = t[H + 3] / 255;
            }
            C += (T - L) * X, M += T - L;
          }
        }

        N = Math.max(N, 1e-4);
        var Y = C / M * c * y * (1 - l) * Math.max(Math.min(p, u), 1 - N),
            W = (M - C) / M * c * y * l * N;
        N = Math.max(N * u * (1 - p), 1e-4);
        var G = W / (W + N),
            z = f(j, r[0], G),
            V = f(A, r[1], G),
            q = f(B, r[2], G),
            J = Y / (W + N + Y),
            K = f(z, r[0], J),
            Q = f(V, r[1], J),
            Z = f(q, r[2], J),
            te = Math.min(N + Y + W, 1);
        d[P + 0] = 255 * K, d[P + 1] = 255 * Q, d[P + 2] = 255 * Z, d[P + 3] = 255 * te;
      }
    }

    _ ? t.set(d) : n(t, d);
  }

  var $ = ["source-over", "lighter", "destination-out"],
      y = "source-over",
      v = "#000000",
      b = {
    none: "butt",
    square: "square",
    round: "round"
  },
      m = [],
      x = [],
      T = function () {
    function n() {
      this.nestLevel = 0, this.renderingMask = !1;
    }

    return n.prototype.render = function (e, i, r, n) {
      this.nestLevel++;
      var a = i.context;
      a.transform(r.a, r.b, r.c, r.d, 0, 0);
      var o = this.drawDisplayObject(e, a, r.tx, r.ty, !0),
          s = t.Matrix.create();

      if (r.$invertInto(s), a.transform(s.a, s.b, s.c, s.d, 0, 0), t.Matrix.release(s), this.nestLevel--, 0 === this.nestLevel) {
        m.length > 6 && (m.length = 6);

        for (var h = m.length, c = 0; h > c; c++) {
          m[c].resize(0, 0);
        }
      }

      return o;
    }, n.prototype.drawDisplayObject = function (e, i, r, n, a) {
      var o,
          s = 0,
          h = e.$displayList;

      if (h && !a ? ((e.$cacheDirty || e.$renderDirty || h.$canvasScaleX != t.sys.DisplayList.$canvasScaleX || h.$canvasScaleY != t.sys.DisplayList.$canvasScaleY) && (s += h.drawToSurface()), o = h.$renderNode) : o = e.$renderDirty ? e.$getRenderNode() : e.$renderNode, e.$cacheDirty = !1, o) {
        switch (s++, i.$offsetX = r, i.$offsetY = n, o.type) {
          case 1:
            this.renderBitmap(o, i);
            break;

          case 2:
            this.renderText(o, i);
            break;

          case 3:
            this.renderGraphics(o, i);
            break;

          case 4:
            this.renderGroup(o, i);
            break;

          case 5:
            this.renderMesh(o, i);
            break;

          case 6:
            this.renderNormalBitmap(o, i);
        }

        i.$offsetX = 0, i.$offsetY = 0;
      }

      if (h && !a) return s;
      var c = e.$children;
      if (c) for (var l = c.length, u = 0; l > u; u++) {
        var p = c[u],
            d = void 0,
            f = void 0;

        if (p.$useTranslate) {
          var g = p.$getMatrix();
          d = r + p.$x, f = n + p.$y, i.save(), i.transform(g.a, g.b, g.c, g.d, d, f), d = -p.$anchorOffsetX, f = -p.$anchorOffsetY;
        } else d = r + p.$x - p.$anchorOffsetX, f = n + p.$y - p.$anchorOffsetY;

        var $ = void 0;

        switch (1 != p.$alpha && ($ = i.globalAlpha, i.globalAlpha *= p.$alpha), p.$renderMode) {
          case 1:
            break;

          case 2:
            s += this.drawWithFilter(p, i, d, f);
            break;

          case 3:
            s += this.drawWithClip(p, i, d, f);
            break;

          case 4:
            s += this.drawWithScrollRect(p, i, d, f);
            break;

          default:
            s += this.drawDisplayObject(p, i, d, f);
        }

        p.$useTranslate ? i.restore() : $ && (i.globalAlpha = $);
      }
      return s;
    }, n.prototype.drawWithFilter = function (t, e, i, r) {
      if (t.$children && 0 == t.$children.length && (!t.$renderNode || 0 == t.$renderNode.$getRenderCount())) return 0;
      var n,
          s = 0,
          h = t.$filters,
          l = h.length,
          u = 0 !== t.$blendMode;
      u && (n = $[t.$blendMode], n || (n = y));
      var p = t.$getOriginalBounds(),
          d = p.x,
          f = p.y,
          v = p.width,
          b = p.height;
      if (0 >= v || 0 >= b) return s;
      var m = this.createRenderBuffer(v - d, b - f, !0),
          T = m.context;

      if (s += t.$mask ? this.drawWithClip(t, T, -d, -f) : t.$scrollRect || t.$maskRect ? this.drawWithScrollRect(t, T, -d, -f) : this.drawDisplayObject(t, T, -d, -f), s > 0) {
        u && (e.globalCompositeOperation = n), s++;

        for (var _ = T.getImageData(0, 0, m.surface.width, m.surface.height), D = 0; l > D; D++) {
          var O = h[D];
          if ("colorTransform" == O.type) a(_.data, m.surface.width, m.surface.height, O.$matrix);else if ("blur" == O.type) o(_.data, m.surface.width, m.surface.height, O.$blurX, O.$blurY);else if ("glow" == O.type) {
            var w = O.$red,
                E = O.$green,
                R = O.$blue,
                S = O.$alpha;
            O.$inner || O.$knockout || O.$hideObject ? g(_.data, m.surface.width, m.surface.height, [w / 255, E / 255, R / 255, S], O.$blurX, O.$blurY, O.$angle ? O.$angle / 180 * Math.PI : 0, O.$distance || 0, O.$strength, O.$inner ? 1 : 0, O.$knockout ? 0 : 1, O.$hideObject ? 1 : 0) : c(_.data, m.surface.width, m.surface.height, [w / 255, E / 255, R / 255, S], O.$blurX, O.$blurY, O.$angle ? O.$angle / 180 * Math.PI : 0, O.$distance || 0, O.$strength);
          } else "custom" == O.type;
        }

        T.putImageData(_, 0, 0), e.drawImage(m.surface, i + d, r + f), u && (e.globalCompositeOperation = y);
      }

      return x.push(m), s;
    }, n.prototype.drawWithClip = function (e, i, r, n) {
      var a,
          o = 0,
          s = 0 !== e.$blendMode;
      s && (a = $[e.$blendMode], a || (a = y));
      var h = e.$scrollRect ? e.$scrollRect : e.$maskRect,
          c = e.$mask;

      if (c) {
        var l = c.$getMatrix();
        if (0 == l.a && 0 == l.b || 0 == l.c && 0 == l.d) return o;
      }

      if (!(c || e.$children && 0 != e.$children.length)) return h && (i.save(), i.beginPath(), i.rect(h.x + r, h.y + n, h.width, h.height), i.clip()), s && (i.globalCompositeOperation = a), o += this.drawDisplayObject(e, i, r, n), s && (i.globalCompositeOperation = y), h && i.restore(), o;

      if (c) {
        var u = c.$getRenderNode();

        if ((!c.$children || 0 == c.$children.length) && u && 3 == u.type && 1 == u.drawData.length && 1 == u.drawData[0].type && 1 == u.drawData[0].fillAlpha) {
          this.renderingMask = !0, i.save();
          var p = t.Matrix.create();
          p.copyFrom(c.$getConcatenatedMatrix()), c.$getConcatenatedMatrixAt(e, p), p.prepend(1, 0, 0, 1, r, n), i.transform(p.a, p.b, p.c, p.d, p.tx, p.ty);
          var d = this.drawDisplayObject(c, i, 0, 0);
          return this.renderingMask = !1, p.$invertInto(p), i.transform(p.a, p.b, p.c, p.d, p.tx, p.ty), t.Matrix.release(p), h && (i.beginPath(), i.rect(h.x + r, h.y + n, h.width, h.height), i.clip()), d += this.drawDisplayObject(e, i, r, n), i.restore(), d;
        }
      }

      var f = e.$getOriginalBounds(),
          g = f.x,
          v = f.y,
          b = f.width,
          x = f.height;
      if (0 >= b || 0 >= x) return o;
      var T = this.createRenderBuffer(b, x),
          _ = T.context;
      if (!_) return o += this.drawDisplayObject(e, i, r, n);

      if (o += this.drawDisplayObject(e, _, -g, -v), c) {
        var u = c.$getRenderNode(),
            p = t.Matrix.create();
        if (p.copyFrom(c.$getConcatenatedMatrix()), c.$getConcatenatedMatrixAt(e, p), p.translate(-g, -v), u && 1 == u.$getRenderCount() || c.$displayList) _.globalCompositeOperation = "destination-in", _.save(), _.setTransform(p.a, p.b, p.c, p.d, p.tx, p.ty), o += this.drawDisplayObject(c, _, 0, 0), _.restore();else {
          var D = this.createRenderBuffer(b, x),
              O = D.context;
          O.setTransform(p.a, p.b, p.c, p.d, p.tx, p.ty), o += this.drawDisplayObject(c, O, 0, 0), _.globalCompositeOperation = "destination-in", _.drawImage(D.surface, 0, 0), m.push(D);
        }
        t.Matrix.release(p);
      }

      return o > 0 && (o++, s && (i.globalCompositeOperation = a), h && (i.save(), i.beginPath(), i.rect(h.x + r, h.y + n, h.width, h.height), i.clip()), i.drawImage(T.surface, r + g, n + v), h && i.restore(), s && (i.globalCompositeOperation = y)), m.push(T), o;
    }, n.prototype.drawWithScrollRect = function (t, e, i, r) {
      var n = 0,
          a = t.$scrollRect ? t.$scrollRect : t.$maskRect;
      return a.isEmpty() ? n : (t.$scrollRect && (i -= a.x, r -= a.y), e.save(), e.beginPath(), e.rect(a.x + i, a.y + r, a.width, a.height), e.clip(), n += this.drawDisplayObject(t, e, i, r), e.restore(), n);
    }, n.prototype.drawNodeToBuffer = function (t, e, i, r) {
      var n = e.context;
      n.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty), this.renderNode(t, n, r);
    }, n.prototype.drawDisplayToBuffer = function (t, e, i) {
      var r = e.context;
      i && r.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty);
      var n;
      n = t.$renderDirty ? t.$getRenderNode() : t.$renderNode;
      var a = 0;
      if (n) switch (a++, n.type) {
        case 1:
          this.renderBitmap(n, r);
          break;

        case 2:
          this.renderText(n, r);
          break;

        case 3:
          this.renderGraphics(n, r);
          break;

        case 4:
          this.renderGroup(n, r);
          break;

        case 5:
          this.renderMesh(n, r);
          break;

        case 6:
          this.renderNormalBitmap(n, r);
      }
      var o = t.$children;
      if (o) for (var s = o.length, h = 0; s > h; h++) {
        var c = o[h];

        switch (c.$renderMode) {
          case 1:
            break;

          case 2:
            a += this.drawWithFilter(c, r, 0, 0);
            break;

          case 3:
            a += this.drawWithClip(c, r, 0, 0);
            break;

          case 4:
            a += this.drawWithScrollRect(c, r, 0, 0);
            break;

          default:
            a += this.drawDisplayObject(c, r, 0, 0);
        }
      }
      return a;
    }, n.prototype.renderNode = function (t, e, i) {
      var r = 0;

      switch (t.type) {
        case 1:
          r = this.renderBitmap(t, e);
          break;

        case 2:
          r = 1, this.renderText(t, e);
          break;

        case 3:
          r = this.renderGraphics(t, e, i);
          break;

        case 4:
          r = this.renderGroup(t, e);
          break;

        case 5:
          r = this.renderMesh(t, e);
          break;

        case 6:
          r += this.renderNormalBitmap(t, e);
      }

      return r;
    }, n.prototype.renderNormalBitmap = function (t, e) {
      var i = t.image;
      if (!i || !i.source) return 0;

      if (e.$imageSmoothingEnabled != t.smoothing && (e.imageSmoothingEnabled = t.smoothing, e.$imageSmoothingEnabled = t.smoothing), t.rotated) {
        var r = t.sourceX,
            n = t.sourceY,
            a = t.sourceW,
            o = t.sourceH,
            s = t.drawX,
            h = t.drawY,
            c = t.drawW,
            l = t.drawH;
        e.save(), e.transform(0, -1, 1, 0, 0, l), e.drawImage(i.source, r, n, o, a, s + e.$offsetX, h + e.$offsetY, l, c), e.restore();
      } else e.drawImage(i.source, t.sourceX, t.sourceY, t.sourceW, t.sourceH, t.drawX + e.$offsetX, t.drawY + e.$offsetY, t.drawW, t.drawH);

      return 1;
    }, n.prototype.renderBitmap = function (t, e) {
      var i = t.image;
      if (!i || !i.source) return 0;
      e.$imageSmoothingEnabled != t.smoothing && (e.imageSmoothingEnabled = t.smoothing, e.$imageSmoothingEnabled = t.smoothing);
      var r,
          n,
          o = t.drawData,
          s = o.length,
          h = 0,
          c = t.matrix,
          l = t.blendMode,
          u = t.alpha,
          p = !1;
      c && (e.save(), p = !0, (0 != e.$offsetX || 0 != e.$offsetY) && (e.translate(e.$offsetX, e.$offsetY), r = e.$offsetX, n = e.$offsetY, e.$offsetX = e.$offsetY = 0), e.transform(c.a, c.b, c.c, c.d, c.tx, c.ty)), l && (e.globalCompositeOperation = $[l]);
      var d;
      u == u && (d = e.globalAlpha, e.globalAlpha *= u);
      var f = 0,
          g = t.filter;

      if (g && 8 == s) {
        var v = o[0],
            b = o[1],
            x = o[2],
            T = o[3],
            _ = o[4],
            D = o[5],
            O = o[6],
            w = o[7];
        t.rotated && (x = o[3], T = o[2], O = o[7], w = o[6]);
        var E = this.createRenderBuffer(O, w),
            R = E.context;
        f++, t.rotated && e.transform(0, -1, 1, 0, 0, O), R.drawImage(i.source, v, b, x, T, 0, 0, O, w), f++;
        var S = R.getImageData(0, 0, O, w);
        a(S.data, O, w, g.$matrix), R.putImageData(S, 0, 0), e.drawImage(E.surface, 0, 0, O, w, _ + e.$offsetX, D + e.$offsetY, O, w), m.push(E);
      } else for (; s > h;) {
        if (f++, t.rotated) {
          var v = o[h++],
              b = o[h++],
              T = o[h++],
              x = o[h++],
              F = o[h++],
              P = o[h++],
              w = o[h++],
              O = o[h++];
          e.save(), e.transform(0, -1, 1, 0, 0, O), e.drawImage(i.source, v, b, x, T, F + e.$offsetX, P + e.$offsetY, O, w), e.restore();
        } else e.drawImage(i.source, o[h++], o[h++], o[h++], o[h++], o[h++] + e.$offsetX, o[h++] + e.$offsetY, o[h++], o[h++]);
      }

      return p ? e.restore() : (l && (e.globalCompositeOperation = y), u == u && (e.globalAlpha = d)), r && (e.$offsetX = r), n && (e.$offsetY = n), f;
    }, n.prototype.renderMesh = function (t, e) {
      return 0;
    }, n.prototype.renderText = function (i, r) {
      r.textAlign = "left", r.textBaseline = "middle", r.lineJoin = "round";

      for (var n = i.drawData, a = n.length, o = 0; a > o;) {
        var s = n[o++],
            h = n[o++],
            c = n[o++],
            l = n[o++];
        r.font = e(i, l);
        var u = null == l.textColor ? i.textColor : l.textColor,
            p = null == l.strokeColor ? i.strokeColor : l.strokeColor,
            d = null == l.stroke ? i.stroke : l.stroke;
        r.fillStyle = t.toColorString(u), r.strokeStyle = t.toColorString(p), d && (r.lineWidth = 2 * d, r.strokeText(c, s + r.$offsetX, h + r.$offsetY)), r.fillText(c, s + r.$offsetX, h + r.$offsetY);
      }
    }, n.prototype.renderGraphics = function (t, e, n) {
      var a = t.drawData,
          o = a.length;
      n = !!n;

      for (var s = 0; o > s; s++) {
        var h = a[s];

        switch (h.type) {
          case 1:
            var c = h;
            e.fillStyle = n ? v : i(c.fillColor, c.fillAlpha), this.renderPath(h, e), this.renderingMask ? e.clip() : e.fill();
            break;

          case 2:
            var l = h;
            e.fillStyle = n ? v : r(e, l.gradientType, l.colors, l.alphas, l.ratios, l.matrix), e.save();
            var u = l.matrix;
            this.renderPath(h, e), e.transform(u.a, u.b, u.c, u.d, u.tx, u.ty), e.fill(), e.restore();
            break;

          case 3:
            var p = h,
                d = p.lineWidth;
            e.lineWidth = d, e.strokeStyle = n ? v : i(p.lineColor, p.lineAlpha), e.lineCap = b[p.caps], e.lineJoin = p.joints, e.miterLimit = p.miterLimit, e.setLineDash && e.setLineDash(p.lineDash);
            var f = 1 === d || 3 === d;
            f && e.translate(.5, .5), this.renderPath(h, e), e.stroke(), f && e.translate(-.5, -.5);
        }
      }

      return 0 == o ? 0 : 1;
    }, n.prototype.renderPath = function (t, e) {
      e.beginPath();

      for (var i = t.$data, r = t.$commands, n = r.length, a = 0, o = 0; n > o; o++) {
        var s = r[o];

        switch (s) {
          case 4:
            e.bezierCurveTo(i[a++] + e.$offsetX, i[a++] + e.$offsetY, i[a++] + e.$offsetX, i[a++] + e.$offsetY, i[a++] + e.$offsetX, i[a++] + e.$offsetY);
            break;

          case 3:
            e.quadraticCurveTo(i[a++] + e.$offsetX, i[a++] + e.$offsetY, i[a++] + e.$offsetX, i[a++] + e.$offsetY);
            break;

          case 2:
            e.lineTo(i[a++] + e.$offsetX, i[a++] + e.$offsetY);
            break;

          case 1:
            e.moveTo(i[a++] + e.$offsetX, i[a++] + e.$offsetY);
        }
      }
    }, n.prototype.renderGroup = function (t, e) {
      var i,
          r,
          n = t.matrix,
          a = !1;
      n && (e.save(), a = !0, (0 != e.$offsetX || 0 != e.$offsetY) && (e.translate(e.$offsetX, e.$offsetY), i = e.$offsetX, r = e.$offsetY, e.$offsetX = e.$offsetY = 0), e.transform(n.a, n.b, n.c, n.d, n.tx, n.ty));

      for (var o = 0, s = t.drawData, h = s.length, c = 0; h > c; c++) {
        var l = s[c];
        o += this.renderNode(l, e);
      }

      return a && e.restore(), i && (e.$offsetX = i), r && (e.$offsetY = r), o;
    }, n.prototype.createRenderBuffer = function (e, i, r) {
      var n = r ? x.pop() : m.pop();
      return n ? n.resize(e, i, !0) : n = new t.sys.CanvasRenderBuffer(e, i), n;
    }, n;
  }();

  t.CanvasRenderer = T, __reflect(T.prototype, "egret.CanvasRenderer"), t.getFontString = e, t.getRGBAString = i;

  var _ = !1;

  try {
    _ = void 0 !== (typeof Uint8ClampedArray === "undefined" ? "undefined" : _typeof(Uint8ClampedArray));
  } catch (D) {}
}(egret || (egret = {}));
var egret;
!function (t) {
  t.DeviceOrientation = null;
}(egret || (egret = {}));
var egret;
!function (t) {}(egret || (egret = {}));
var egret;
!function (t) {}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {
    t.WEB = "web", t.NATIVE = "native", t.RUNTIME2 = "runtime2", t.WXGAME = "wxgame", t.BAIDUGAME = "baidugame";
  }(e = t.RuntimeType || (t.RuntimeType = {}));

  var i = function () {
    function e() {}

    return e.language = "zh-CN", e.os = "Unknown", e.runtimeType = t.RuntimeType.WEB, e.engineVersion = "5.2.13", e.renderMode = "Unknown", e.boundingClientWidth = 0, e.boundingClientHeight = 0, e;
  }();

  t.Capabilities = i, __reflect(i.prototype, "egret.Capabilities");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i.$graphics = new t.Graphics(), i.$graphics.$setTarget(i), i;
    }

    return __extends(i, e), i.prototype.createNativeDisplayObject = function () {
      this.$nativeDisplayObject = new egret_native.NativeDisplayObject(8);
    }, Object.defineProperty(i.prototype, "graphics", {
      get: function get() {
        return this.$graphics;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$measureContentBounds = function (t) {
      this.$graphics.$measureContentBounds(t);
    }, i.prototype.$hitTest = function (t, i) {
      var r = e.prototype.$hitTest.call(this, t, i);
      return r == this && (r = this.$graphics.$hitTest(t, i)), r;
    }, i.prototype.$onRemoveFromStage = function () {
      e.prototype.$onRemoveFromStage.call(this), this.$graphics && this.$graphics.$onRemoveFromStage();
    }, i;
  }(t.DisplayObject);

  t.Shape = e, __reflect(e.prototype, "egret.Shape");
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(t, e) {
    r[t] = e;
  }

  function i(t) {
    return r[t];
  }

  var r = {};
  t.registerImplementation = e, t.getImplementation = i;
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i.$graphics = new t.Graphics(), i.$graphics.$setTarget(i), i;
    }

    return __extends(i, e), i.prototype.createNativeDisplayObject = function () {
      this.$nativeDisplayObject = new egret_native.NativeDisplayObject(9);
    }, Object.defineProperty(i.prototype, "graphics", {
      get: function get() {
        return this.$graphics;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$hitTest = function (e, i) {
      if (!this.$visible) return null;
      var r = this.$getInvertedConcatenatedMatrix(),
          n = r.a * e + r.c * i + r.tx,
          a = r.b * e + r.d * i + r.ty,
          o = this.$scrollRect ? this.$scrollRect : this.$maskRect;
      if (o && !o.contains(n, a)) return null;
      if (this.$mask && !this.$mask.$hitTest(e, i)) return null;

      for (var s = this.$children, h = !1, c = null, l = s.length - 1; l >= 0; l--) {
        var u = s[l];

        if (!u.$maskedObject && (c = u.$hitTest(e, i))) {
          if (h = !0, c.$touchEnabled) break;
          c = null;
        }
      }

      return c ? this.$touchChildren ? c : this : h ? this : (c = t.DisplayObject.prototype.$hitTest.call(this, e, i), c && (c = this.$graphics.$hitTest(e, i)), c);
    }, i.prototype.$measureContentBounds = function (t) {
      this.$graphics.$measureContentBounds(t);
    }, i.prototype.$onRemoveFromStage = function () {
      e.prototype.$onRemoveFromStage.call(this), this.$graphics && this.$graphics.$onRemoveFromStage();
    }, i;
  }(t.DisplayObjectContainer);

  t.Sprite = e, __reflect(e.prototype, "egret.Sprite");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (t) {
    function e(e, i) {
      var r = t.call(this, e) || this;
      return r.firstCharHeight = 0, "string" == typeof i ? r.charList = r.parseConfig(i) : i && i.hasOwnProperty("frames") ? r.charList = i.frames : r.charList = {}, r;
    }

    return __extends(e, t), e.prototype.getTexture = function (t) {
      var e = this._textureMap[t];

      if (!e) {
        var i = this.charList[t];
        if (!i) return null;
        e = this.createTexture(t, i.x, i.y, i.w, i.h, i.offX, i.offY, i.sourceW, i.sourceH), this._textureMap[t] = e;
      }

      return e;
    }, e.prototype.getConfig = function (t, e) {
      return this.charList[t] ? this.charList[t][e] : 0;
    }, e.prototype._getFirstCharHeight = function () {
      if (0 == this.firstCharHeight) for (var t in this.charList) {
        var e = this.charList[t];

        if (e) {
          var i = e.sourceH;

          if (void 0 === i) {
            var r = e.h;
            void 0 === r && (r = 0);
            var n = e.offY;
            void 0 === n && (n = 0), i = r + n;
          }

          if (0 >= i) continue;
          this.firstCharHeight = i;
          break;
        }
      }
      return this.firstCharHeight;
    }, e.prototype.parseConfig = function (t) {
      t = t.split("\r\n").join("\n");

      for (var e = t.split("\n"), i = this.getConfigByKey(e[3], "count"), r = {}, n = 4; 4 + i > n; n++) {
        var a = e[n],
            o = String.fromCharCode(this.getConfigByKey(a, "id")),
            s = {};
        r[o] = s, s.x = this.getConfigByKey(a, "x"), s.y = this.getConfigByKey(a, "y"), s.w = this.getConfigByKey(a, "width"), s.h = this.getConfigByKey(a, "height"), s.offX = this.getConfigByKey(a, "xoffset"), s.offY = this.getConfigByKey(a, "yoffset"), s.xadvance = this.getConfigByKey(a, "xadvance");
      }

      return r;
    }, e.prototype.getConfigByKey = function (t, e) {
      for (var i = t.split(" "), r = 0, n = i.length; n > r; r++) {
        var a = i[r];

        if (e == a.substring(0, e.length)) {
          var o = a.substring(e.length + 1);
          return parseInt(o);
        }
      }

      return 0;
    }, e;
  }(t.SpriteSheet);

  t.BitmapFont = e, __reflect(e.prototype, "egret.BitmapFont");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i.$smoothing = t.Bitmap.defaultSmoothing, i.$text = "", i.$textFieldWidth = 0 / 0, i.$textLinesChanged = !1, i.$textFieldHeight = 0 / 0, i.$font = null, i.$fontStringChanged = !1, i.$lineSpacing = 0, i.$letterSpacing = 0, i.$textAlign = t.HorizontalAlign.LEFT, i.$verticalAlign = t.VerticalAlign.TOP, i.$textWidth = 0 / 0, i.$textHeight = 0 / 0, i.$textOffsetX = 0, i.$textOffsetY = 0, i.$textStartX = 0, i.$textStartY = 0, i.textLines = [], i.$lineHeights = [], t.nativeRender || (i.$renderNode = new t.sys.BitmapNode()), i;
    }

    return __extends(i, e), i.prototype.createNativeDisplayObject = function () {
      this.$nativeDisplayObject = new egret_native.NativeDisplayObject(11);
    }, Object.defineProperty(i.prototype, "smoothing", {
      get: function get() {
        return this.$smoothing;
      },
      set: function set(e) {
        var i = this;

        if (e != i.$smoothing && (i.$smoothing = e, !t.nativeRender)) {
          var r = i.$parent;
          r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
          var n = i.$maskedObject;
          n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp());
        }
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "text", {
      get: function get() {
        return this.$text;
      },
      set: function set(t) {
        this.$setText(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setText = function (t) {
      t = null == t ? "" : String(t);
      var e = this;
      return t == e.$text ? !1 : (e.$text = t, e.$invalidateContentBounds(), !0);
    }, i.prototype.$getWidth = function () {
      var t = this,
          e = t.$textFieldWidth;
      return isNaN(e) ? t.$getContentBounds().width : e;
    }, i.prototype.$setWidth = function (t) {
      var e = this;
      return 0 > t || t == e.$textFieldWidth ? !1 : (e.$textFieldWidth = t, e.$invalidateContentBounds(), !0);
    }, i.prototype.$invalidateContentBounds = function () {
      this.$renderDirty = !0, this.$textLinesChanged = !0, this.$updateRenderNode();
    }, i.prototype.$getHeight = function () {
      var t = this,
          e = t.$textFieldHeight;
      return isNaN(e) ? t.$getContentBounds().height : e;
    }, i.prototype.$setHeight = function (t) {
      var e = this;
      return 0 > t || t == e.$textFieldHeight ? !1 : (e.$textFieldHeight = t, e.$invalidateContentBounds(), !0);
    }, Object.defineProperty(i.prototype, "font", {
      get: function get() {
        return this.$font;
      },
      set: function set(t) {
        this.$setFont(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setFont = function (t) {
      var e = this;
      return e.$font == t ? !1 : (e.$font = t, e.$fontStringChanged = !0, this.$invalidateContentBounds(), !0);
    }, Object.defineProperty(i.prototype, "lineSpacing", {
      get: function get() {
        return this.$lineSpacing;
      },
      set: function set(t) {
        this.$setLineSpacing(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setLineSpacing = function (t) {
      var e = this;
      return e.$lineSpacing == t ? !1 : (e.$lineSpacing = t, e.$invalidateContentBounds(), !0);
    }, Object.defineProperty(i.prototype, "letterSpacing", {
      get: function get() {
        return this.$letterSpacing;
      },
      set: function set(t) {
        this.$setLetterSpacing(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setLetterSpacing = function (t) {
      var e = this;
      return e.$letterSpacing == t ? !1 : (e.$letterSpacing = t, e.$invalidateContentBounds(), !0);
    }, Object.defineProperty(i.prototype, "textAlign", {
      get: function get() {
        return this.$textAlign;
      },
      set: function set(t) {
        this.$setTextAlign(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setTextAlign = function (t) {
      var e = this;
      return e.$textAlign == t ? !1 : (e.$textAlign = t, e.$invalidateContentBounds(), !0);
    }, Object.defineProperty(i.prototype, "verticalAlign", {
      get: function get() {
        return this.$verticalAlign;
      },
      set: function set(t) {
        this.$setVerticalAlign(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setVerticalAlign = function (t) {
      var e = this;
      return e.$verticalAlign == t ? !1 : (e.$verticalAlign = t, e.$invalidateContentBounds(), !0);
    }, i.prototype.$updateRenderNode = function () {
      var e = this,
          r = this.$getTextLines(),
          n = r.length;
      if (0 == n) return void (t.nativeRender && e.$font && (e.$nativeDisplayObject.setDataToBitmapNode(e.$nativeDisplayObject.id, e.$font.$texture, []), e.$nativeDisplayObject.setWidth(0), e.$nativeDisplayObject.setHeight(0)));
      var a,
          o = [],
          s = this.$textLinesWidth,
          h = e.$font;
      t.nativeRender || (a = this.$renderNode, h.$texture && (a.image = h.$texture.$bitmapData), a.smoothing = e.$smoothing);

      for (var c = h._getFirstCharHeight(), l = Math.ceil(c * i.EMPTY_FACTOR), u = !isNaN(e.$textFieldHeight), p = e.$textWidth, d = e.$textFieldWidth, f = e.$textFieldHeight, g = e.$textAlign, $ = this.$textOffsetY + this.$textStartY, y = this.$lineHeights, v = 0; n > v; v++) {
        var b = y[v];
        if (u && v > 0 && $ + b > f) break;
        var m = r[v],
            x = m.length,
            T = this.$textOffsetX;

        if (g != t.HorizontalAlign.LEFT) {
          var _ = d > p ? d : p;

          g == t.HorizontalAlign.RIGHT ? T += _ - s[v] : g == t.HorizontalAlign.CENTER && (T += Math.floor((_ - s[v]) / 2));
        }

        for (var D = 0; x > D; D++) {
          var O = m.charAt(D),
              w = h.getTexture(O);

          if (w) {
            var E = w.$bitmapWidth,
                R = w.$bitmapHeight;
            t.nativeRender ? o.push(w.$bitmapX, w.$bitmapY, E, R, T + w.$offsetX, $ + w.$offsetY, w.$getScaleBitmapWidth(), w.$getScaleBitmapHeight(), w.$sourceWidth, w.$sourceHeight) : (a.imageWidth = w.$sourceWidth, a.imageHeight = w.$sourceHeight, a.drawImage(w.$bitmapX, w.$bitmapY, E, R, T + w.$offsetX, $ + w.$offsetY, w.$getScaleBitmapWidth(), w.$getScaleBitmapHeight())), T += (h.getConfig(O, "xadvance") || w.$getTextureWidth()) + e.$letterSpacing;
          } else " " == O ? T += l : t.$warn(1046, O);
        }

        $ += b + e.$lineSpacing;
      }

      if (t.nativeRender) {
        e.$nativeDisplayObject.setDataToBitmapNode(e.$nativeDisplayObject.id, h.$texture, o);
        var S = e.$getContentBounds();
        e.$nativeDisplayObject.setWidth(S.width), e.$nativeDisplayObject.setHeight(S.height);
      }
    }, i.prototype.$measureContentBounds = function (t) {
      var e = this.$getTextLines();
      0 == e.length ? t.setEmpty() : t.setTo(this.$textOffsetX + this.$textStartX, this.$textOffsetY + this.$textStartY, this.$textWidth - this.$textOffsetX, this.$textHeight - this.$textOffsetY);
    }, Object.defineProperty(i.prototype, "textWidth", {
      get: function get() {
        return this.$getTextLines(), this.$textWidth;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "textHeight", {
      get: function get() {
        return this.$getTextLines(), this.$textHeight;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$getTextLines = function () {
      function e(t) {
        return b && n.length > 0 && f > b ? !1 : (f += c + u, s || h || (l -= p), n.push(t), o.push(c), a.push(l), d = Math.max(l, d), !0);
      }

      var r = this;
      if (!r.$textLinesChanged) return r.textLines;
      var n = [];
      r.textLines = n;
      var a = [];
      r.$textLinesWidth = a, r.$textLinesChanged = !1;
      var o = [];
      if (r.$lineHeights = o, !r.$text || !r.$font) return r.$textWidth = 0, r.$textHeight = 0, n;

      for (var s, h, c, l, u = r.$lineSpacing, p = r.$letterSpacing, d = 0, f = 0, g = 0, $ = 0, y = !isNaN(r.$textFieldWidth), v = r.$textFieldWidth, b = r.$textFieldHeight, m = r.$font, x = m._getFirstCharHeight(), T = Math.ceil(x * i.EMPTY_FACTOR), _ = r.$text, D = _.split(/(?:\r\n|\r|\n)/), O = D.length, w = !0, E = 0; O > E; E++) {
        var R = D[E],
            S = R.length;
        c = 0, l = 0, s = !0, h = !1;

        for (var F = 0; S > F; F++) {
          s || (l += p);
          var P = R.charAt(F),
              C = void 0,
              M = void 0,
              j = 0,
              A = 0,
              B = m.getTexture(P);
          if (B) C = B.$getTextureWidth(), M = B.$getTextureHeight(), j = B.$offsetX, A = B.$offsetY;else {
            if (" " != P) {
              t.$warn(1046, P), s && (s = !1);
              continue;
            }

            C = T, M = x;
          }

          if (s && (s = !1, g = Math.min(j, g)), w && (w = !1, $ = Math.min(A, $)), y && F > 0 && l + C > v) {
            if (!e(R.substring(0, F))) break;
            R = R.substring(F), S = R.length, F = 0, l = F == S - 1 ? C : m.getConfig(P, "xadvance") || C, c = M;
          } else l += F == S - 1 ? C : m.getConfig(P, "xadvance") || C, c = Math.max(M, c);
        }

        if (b && E > 0 && f > b) break;
        if (h = !0, !e(R)) break;
      }

      f -= u, r.$textWidth = d, r.$textHeight = f, this.$textOffsetX = g, this.$textOffsetY = $, this.$textStartX = 0, this.$textStartY = 0;
      var N;
      return v > d && (N = r.$textAlign, N == t.HorizontalAlign.RIGHT ? this.$textStartX = v - d : N == t.HorizontalAlign.CENTER && (this.$textStartX = Math.floor((v - d) / 2))), b > f && (N = r.$verticalAlign, N == t.VerticalAlign.BOTTOM ? this.$textStartY = b - f : N == t.VerticalAlign.MIDDLE && (this.$textStartY = Math.floor((b - f) / 2))), n;
    }, i.EMPTY_FACTOR = .33, i;
  }(t.DisplayObject);

  t.BitmapText = e, __reflect(e.prototype, "egret.BitmapText");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function t() {}

    return t.LEFT = "left", t.RIGHT = "right", t.CENTER = "center", t.JUSTIFY = "justify", t.CONTENT_JUSTIFY = "contentJustify", t;
  }();

  t.HorizontalAlign = e, __reflect(e.prototype, "egret.HorizontalAlign");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function e() {
      this.replaceArr = [], this.resutlArr = [], this.initReplaceArr();
    }

    return e.prototype.initReplaceArr = function () {
      this.replaceArr = [], this.replaceArr.push([/&lt;/g, "<"]), this.replaceArr.push([/&gt;/g, ">"]), this.replaceArr.push([/&amp;/g, "&"]), this.replaceArr.push([/&quot;/g, '"']), this.replaceArr.push([/&apos;/g, "'"]);
    }, e.prototype.replaceSpecial = function (t) {
      for (var e = 0; e < this.replaceArr.length; e++) {
        var i = this.replaceArr[e][0],
            r = this.replaceArr[e][1];
        t = t.replace(i, r);
      }

      return t;
    }, e.prototype.parse = function (e) {
      this.stackArray = [], this.resutlArr = [];

      for (var i = 0, r = e.length; r > i;) {
        var n = e.indexOf("<", i);
        if (0 > n) this.addToResultArr(e.substring(i)), i = r;else {
          this.addToResultArr(e.substring(i, n));
          var a = e.indexOf(">", n);
          -1 == a ? (t.$error(1038), a = n) : "/" == e.charAt(n + 1) ? this.stackArray.pop() : this.addToArray(e.substring(n + 1, a)), i = a + 1;
        }
      }

      return this.resutlArr;
    }, e.prototype.parser = function (t) {
      return this.parse(t);
    }, e.prototype.addToResultArr = function (t) {
      "" != t && (t = this.replaceSpecial(t), this.stackArray.length > 0 ? this.resutlArr.push({
        text: t,
        style: this.stackArray[this.stackArray.length - 1]
      }) : this.resutlArr.push({
        text: t
      }));
    }, e.prototype.changeStringToObject = function (t) {
      t = t.trim();
      var e = {},
          i = [];
      if ("i" == t.charAt(0) || "b" == t.charAt(0) || "u" == t.charAt(0)) this.addProperty(e, t, "true");else if (i = t.match(/^(font|a)\s/)) {
        t = t.substring(i[0].length).trim();

        for (var r = 0, n = void 0; n = t.match(this.getHeadReg());) {
          var a = n[0],
              o = "";
          t = t.substring(a.length).trim(), '"' == t.charAt(0) ? (r = t.indexOf('"', 1), o = t.substring(1, r), r += 1) : "'" == t.charAt(0) ? (r = t.indexOf("'", 1), o = t.substring(1, r), r += 1) : (o = t.match(/(\S)+/)[0], r = o.length), this.addProperty(e, a.substring(0, a.length - 1).trim(), o.trim()), t = t.substring(r).trim();
        }
      }
      return e;
    }, e.prototype.getHeadReg = function () {
      return /^(color|textcolor|strokecolor|stroke|b|bold|i|italic|u|size|fontfamily|href|target)(\s)*=/;
    }, e.prototype.addProperty = function (t, e, i) {
      switch (e.toLowerCase()) {
        case "color":
        case "textcolor":
          i = i.replace(/#/, "0x"), t.textColor = parseInt(i);
          break;

        case "strokecolor":
          i = i.replace(/#/, "0x"), t.strokeColor = parseInt(i);
          break;

        case "stroke":
          t.stroke = parseInt(i);
          break;

        case "b":
        case "bold":
          t.bold = "true" == i;
          break;

        case "u":
          t.underline = "true" == i;
          break;

        case "i":
        case "italic":
          t.italic = "true" == i;
          break;

        case "size":
          t.size = parseInt(i);
          break;

        case "fontfamily":
          t.fontFamily = i;
          break;

        case "href":
          t.href = this.replaceSpecial(i);
          break;

        case "target":
          t.target = this.replaceSpecial(i);
      }
    }, e.prototype.addToArray = function (t) {
      var e = this.changeStringToObject(t);
      if (0 == this.stackArray.length) this.stackArray.push(e);else {
        var i = this.stackArray[this.stackArray.length - 1];

        for (var r in i) {
          null == e[r] && (e[r] = i[r]);
        }

        this.stackArray.push(e);
      }
    }, e;
  }();

  t.HtmlTextParser = e, __reflect(e.prototype, "egret.HtmlTextParser");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t.stageTextAdded = !1, t._text = null, t._isFocus = !1, t;
    }

    return __extends(i, e), i.prototype.init = function (e) {
      this._text = e, this.stageText = new t.StageText(), this.stageText.$setTextField(this._text);
    }, i.prototype._addStageText = function () {
      this.stageTextAdded || (this._text.$inputEnabled || (this._text.$touchEnabled = !0), this.tempStage = this._text.stage, this.stageText.$addToStage(), this.stageText.addEventListener("updateText", this.updateTextHandler, this), this._text.addEventListener(t.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this), this.stageText.addEventListener("blur", this.blurHandler, this), this.stageText.addEventListener("focus", this.focusHandler, this), this.stageTextAdded = !0);
    }, i.prototype._removeStageText = function () {
      this.stageTextAdded && (this._text.$inputEnabled || (this._text.$touchEnabled = !1), this.stageText.$removeFromStage(), this.stageText.removeEventListener("updateText", this.updateTextHandler, this), this._text.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this), this.tempStage.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this), this.stageText.removeEventListener("blur", this.blurHandler, this), this.stageText.removeEventListener("focus", this.focusHandler, this), this.stageTextAdded = !1);
    }, i.prototype._getText = function () {
      return this.stageText.$getText();
    }, i.prototype._setText = function (t) {
      this.stageText.$setText(t);
    }, i.prototype._setColor = function (t) {
      this.stageText.$setColor(t);
    }, i.prototype.focusHandler = function (e) {
      this._isFocus || (this._isFocus = !0, e.showing || this._text.$setIsTyping(!0), this._text.dispatchEvent(new t.FocusEvent(t.FocusEvent.FOCUS_IN, !0)));
    }, i.prototype.blurHandler = function (e) {
      this._isFocus && (this._isFocus = !1, this.tempStage.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this), this._text.$setIsTyping(!1), this.stageText.$onBlur(), this._text.dispatchEvent(new t.FocusEvent(t.FocusEvent.FOCUS_OUT, !0)));
    }, i.prototype.onMouseDownHandler = function (t) {
      this.$onFocus();
    }, i.prototype.$onFocus = function () {
      var e = this;
      this._text.visible && (this._isFocus || (this.tempStage.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this), t.callLater(function () {
        e.tempStage.addEventListener(t.TouchEvent.TOUCH_BEGIN, e.onStageDownHandler, e);
      }, this), t.nativeRender && this.stageText.$setText(this._text.$TextField[13]), this.stageText.$show()));
    }, i.prototype.onStageDownHandler = function (t) {
      t.$target != this._text && this.stageText.$hide();
    }, i.prototype.updateTextHandler = function (e) {
      var i,
          r,
          n = this._text.$TextField,
          a = this.stageText.$getText(),
          o = !1;
      null != n[35] && (i = new RegExp("[" + n[35] + "]", "g"), r = a.match(i), a = r ? r.join("") : "", o = !0), null != n[36] && (i = new RegExp("[^" + n[36] + "]", "g"), r = a.match(i), a = r ? r.join("") : "", o = !0), o && this.stageText.$getText() != a && this.stageText.$setText(a), this.resetText(), this._text.dispatchEvent(new t.Event(t.Event.CHANGE, !0));
    }, i.prototype.resetText = function () {
      this._text.$setBaseText(this.stageText.$getText());
    }, i.prototype._hideInput = function () {
      this.stageText.$removeFromStage();
    }, i.prototype.updateInput = function () {
      !this._text.$visible && this.stageText && this._hideInput();
    }, i.prototype._updateProperties = function () {
      return this._isFocus ? (this.stageText.$resetStageText(), void this.updateInput()) : (this.stageText.$setText(this._text.$TextField[13]), this.stageText.$resetStageText(), void this.updateInput());
    }, i;
  }(t.HashObject);

  t.InputController = e, __reflect(e.prototype, "egret.InputController");
}(egret || (egret = {}));
var egret;
!function (t) {}(egret || (egret = {}));
var egret;
!function (t) {
  function e(e, i, n) {
    n = n || {};
    var a = null == n.italic ? i[16] : n.italic,
        o = null == n.bold ? i[15] : n.bold,
        s = null == n.size ? i[0] : n.size,
        h = n.fontFamily || i[8] || r.default_fontFamily;
    return t.sys.measureText(e, h, s, o, a);
  }

  var i = new RegExp("(?=[\\u00BF-\\u1FFF\\u2C00-\\uD7FF]|\\b|\\s)(?![\u3002\uFF0C\uFF01\u3001\u300B\u2026\uFF09)}\u201D\u3011\\.\\,\\!\\?\\]\\:])"),
      r = function (r) {
    function n() {
      var e = r.call(this) || this;
      e.$inputEnabled = !1, e.inputUtils = null, e.$graphicsNode = null, e.isFlow = !1, e.textArr = [], e.linesArr = [], e.$isTyping = !1;
      var i = new t.sys.TextNode();
      return i.fontFamily = n.default_fontFamily, e.textNode = i, e.$renderNode = i, e.$TextField = {
        0: n.default_size,
        1: 0,
        2: n.default_textColor,
        3: 0 / 0,
        4: 0 / 0,
        5: 0,
        6: 0,
        7: 0,
        8: n.default_fontFamily,
        9: "left",
        10: "top",
        11: "#ffffff",
        12: "",
        13: "",
        14: [],
        15: !1,
        16: !1,
        17: !0,
        18: !1,
        19: !1,
        20: !1,
        21: 0,
        22: 0,
        23: 0,
        24: t.TextFieldType.DYNAMIC,
        25: 0,
        26: "#000000",
        27: 0,
        28: -1,
        29: 0,
        30: !1,
        31: !1,
        32: 0,
        33: !1,
        34: 16777215,
        35: null,
        36: null,
        37: t.TextFieldInputType.TEXT,
        38: !1
      }, e;
    }

    return __extends(n, r), n.prototype.createNativeDisplayObject = function () {
      this.$nativeDisplayObject = new egret_native.NativeDisplayObject(7);
    }, n.prototype.isInput = function () {
      return this.$TextField[24] == t.TextFieldType.INPUT;
    }, n.prototype.$setTouchEnabled = function (t) {
      r.prototype.$setTouchEnabled.call(this, t), this.isInput() && (this.$inputEnabled = !0);
    }, Object.defineProperty(n.prototype, "fontFamily", {
      get: function get() {
        return this.$TextField[8];
      },
      set: function set(t) {
        this.$setFontFamily(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setFontFamily = function (e) {
      var i = this.$TextField;
      return i[8] == e ? !1 : (i[8] = e, this.invalidateFontString(), t.nativeRender && this.$nativeDisplayObject.setFontFamily(e), !0);
    }, Object.defineProperty(n.prototype, "size", {
      get: function get() {
        return this.$TextField[0];
      },
      set: function set(t) {
        this.$setSize(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setSize = function (e) {
      var i = this.$TextField;
      return i[0] == e ? !1 : (i[0] = e, this.invalidateFontString(), t.nativeRender && this.$nativeDisplayObject.setFontSize(e), !0);
    }, Object.defineProperty(n.prototype, "bold", {
      get: function get() {
        return this.$TextField[15];
      },
      set: function set(t) {
        this.$setBold(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setBold = function (e) {
      var i = this.$TextField;
      return e == i[15] ? !1 : (i[15] = e, this.invalidateFontString(), t.nativeRender && this.$nativeDisplayObject.setBold(e), !0);
    }, Object.defineProperty(n.prototype, "italic", {
      get: function get() {
        return this.$TextField[16];
      },
      set: function set(t) {
        this.$setItalic(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setItalic = function (e) {
      var i = this.$TextField;
      return e == i[16] ? !1 : (i[16] = e, this.invalidateFontString(), t.nativeRender && this.$nativeDisplayObject.setItalic(e), !0);
    }, n.prototype.invalidateFontString = function () {
      this.$TextField[17] = !0, this.$invalidateTextField();
    }, Object.defineProperty(n.prototype, "textAlign", {
      get: function get() {
        return this.$TextField[9];
      },
      set: function set(t) {
        this.$setTextAlign(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setTextAlign = function (e) {
      var i = this.$TextField;
      return i[9] == e ? !1 : (i[9] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setTextAlign(e), !0);
    }, Object.defineProperty(n.prototype, "verticalAlign", {
      get: function get() {
        return this.$TextField[10];
      },
      set: function set(t) {
        this.$setVerticalAlign(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setVerticalAlign = function (e) {
      var i = this.$TextField;
      return i[10] == e ? !1 : (i[10] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setVerticalAlign(e), !0);
    }, Object.defineProperty(n.prototype, "lineSpacing", {
      get: function get() {
        return this.$TextField[1];
      },
      set: function set(t) {
        this.$setLineSpacing(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setLineSpacing = function (e) {
      var i = this.$TextField;
      return i[1] == e ? !1 : (i[1] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setLineSpacing(e), !0);
    }, Object.defineProperty(n.prototype, "textColor", {
      get: function get() {
        return this.$TextField[2];
      },
      set: function set(t) {
        this.$setTextColor(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setTextColor = function (e) {
      var i = this.$TextField;
      return i[2] == e ? !1 : (i[2] = e, this.inputUtils && this.inputUtils._setColor(this.$TextField[2]), this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setTextColor(e), !0);
    }, Object.defineProperty(n.prototype, "wordWrap", {
      get: function get() {
        return this.$TextField[19];
      },
      set: function set(t) {
        this.$setWordWrap(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setWordWrap = function (e) {
      var i = this.$TextField;
      e != i[19] && (i[20] || (i[19] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setWordWrap(e)));
    }, Object.defineProperty(n.prototype, "type", {
      get: function get() {
        return this.$TextField[24];
      },
      set: function set(t) {
        this.$setType(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setType = function (e) {
      var i = this.$TextField;
      return i[24] != e ? (i[24] = e, t.nativeRender && this.$nativeDisplayObject.setType(e), e == t.TextFieldType.INPUT ? (isNaN(i[3]) && this.$setWidth(100), isNaN(i[4]) && this.$setHeight(30), this.$setTouchEnabled(!0), null == this.inputUtils && (this.inputUtils = new t.InputController()), this.inputUtils.init(this), this.$invalidateTextField(), this.$stage && this.inputUtils._addStageText()) : (this.inputUtils && (this.inputUtils._removeStageText(), this.inputUtils = null), this.$setTouchEnabled(!1)), !0) : !1;
    }, Object.defineProperty(n.prototype, "inputType", {
      get: function get() {
        return this.$TextField[37];
      },
      set: function set(e) {
        this.$TextField[37] != e && (this.$TextField[37] = e, t.nativeRender && this.$nativeDisplayObject.setInputType(e));
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "text", {
      get: function get() {
        return this.$getText();
      },
      set: function set(t) {
        this.$setText(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$getText = function () {
      return this.$TextField[24] == t.TextFieldType.INPUT ? this.inputUtils._getText() : this.$TextField[13];
    }, n.prototype.$setBaseText = function (e) {
      e = null == e ? "" : e.toString(), this.isFlow = !1;
      var i = this.$TextField;

      if (i[13] != e) {
        this.$invalidateTextField(), i[13] = e;
        var r = "";
        return r = i[20] ? this.changeToPassText(e) : e, t.nativeRender && this.$nativeDisplayObject.setText(r), this.setMiddleStyle([{
          text: r
        }]), !0;
      }

      return !1;
    }, n.prototype.$setText = function (t) {
      null == t && (t = "");
      var e = this.$setBaseText(t);
      return this.inputUtils && this.inputUtils._setText(this.$TextField[13]), e;
    }, Object.defineProperty(n.prototype, "displayAsPassword", {
      get: function get() {
        return this.$TextField[20];
      },
      set: function set(t) {
        this.$setDisplayAsPassword(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setDisplayAsPassword = function (e) {
      var i = this.$TextField;

      if (i[20] != e) {
        i[20] = e, this.$invalidateTextField();
        var r = "";
        return r = e ? this.changeToPassText(i[13]) : i[13], t.nativeRender && this.$nativeDisplayObject.setText(r), this.setMiddleStyle([{
          text: r
        }]), !0;
      }

      return !1;
    }, Object.defineProperty(n.prototype, "strokeColor", {
      get: function get() {
        return this.$TextField[25];
      },
      set: function set(t) {
        this.$setStrokeColor(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setStrokeColor = function (e) {
      var i = this.$TextField;
      return i[25] != e ? (this.$invalidateTextField(), i[25] = e, t.nativeRender && this.$nativeDisplayObject.setStrokeColor(e), i[26] = t.toColorString(e), !0) : !1;
    }, Object.defineProperty(n.prototype, "stroke", {
      get: function get() {
        return this.$TextField[27];
      },
      set: function set(t) {
        this.$setStroke(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setStroke = function (e) {
      return this.$TextField[27] != e ? (this.$invalidateTextField(), this.$TextField[27] = e, t.nativeRender && this.$nativeDisplayObject.setStroke(e), !0) : !1;
    }, Object.defineProperty(n.prototype, "maxChars", {
      get: function get() {
        return this.$TextField[21];
      },
      set: function set(t) {
        this.$setMaxChars(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setMaxChars = function (e) {
      return this.$TextField[21] != e ? (this.$TextField[21] = e, t.nativeRender && this.$nativeDisplayObject.setMaxChars(e), !0) : !1;
    }, Object.defineProperty(n.prototype, "scrollV", {
      get: function get() {
        return Math.min(Math.max(this.$TextField[28], 1), this.maxScrollV);
      },
      set: function set(e) {
        e = Math.max(e, 1), e != this.$TextField[28] && (this.$TextField[28] = e, t.nativeRender && this.$nativeDisplayObject.setScrollV(e), this.$invalidateTextField());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "maxScrollV", {
      get: function get() {
        return this.$getLinesArr(), Math.max(this.$TextField[29] - t.TextFieldUtils.$getScrollNum(this) + 1, 1);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "selectionBeginIndex", {
      get: function get() {
        return 0;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "selectionEndIndex", {
      get: function get() {
        return 0;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "caretIndex", {
      get: function get() {
        return 0;
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setSelection = function (t, e) {
      return !1;
    }, n.prototype.$getLineHeight = function () {
      return this.$TextField[1] + this.$TextField[0];
    }, Object.defineProperty(n.prototype, "numLines", {
      get: function get() {
        return this.$getLinesArr(), this.$TextField[29];
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "multiline", {
      get: function get() {
        return this.$TextField[30];
      },
      set: function set(t) {
        this.$setMultiline(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setMultiline = function (e) {
      return this.$TextField[30] == e ? !1 : (this.$TextField[30] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setMultiline(e), !0);
    }, Object.defineProperty(n.prototype, "restrict", {
      get: function get() {
        var t = this.$TextField,
            e = null;
        return null != t[35] && (e = t[35]), null != t[36] && (null == e && (e = ""), e += "^" + t[36]), e;
      },
      set: function set(t) {
        var e = this.$TextField;
        if (null == t) e[35] = null, e[36] = null;else {
          for (var i = -1; i < t.length && (i = t.indexOf("^", i), 0 != i) && i > 0 && "\\" == t.charAt(i - 1);) {
            i++;
          }

          0 == i ? (e[35] = null, e[36] = t.substring(i + 1)) : i > 0 ? (e[35] = t.substring(0, i), e[36] = t.substring(i + 1)) : (e[35] = t, e[36] = null);
        }
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setWidth = function (e) {
      t.nativeRender && this.$nativeDisplayObject.setTextFieldWidth(e);
      var i = this.$TextField;

      if (isNaN(e)) {
        if (isNaN(i[3])) return !1;
        i[3] = 0 / 0;
      } else {
        if (i[3] == e) return !1;
        i[3] = e;
      }

      return e = +e, 0 > e ? !1 : (this.$invalidateTextField(), !0);
    }, n.prototype.$setHeight = function (e) {
      t.nativeRender && this.$nativeDisplayObject.setTextFieldHeight(e);
      var i = this.$TextField;

      if (isNaN(e)) {
        if (isNaN(i[4])) return !1;
        i[4] = 0 / 0;
      } else {
        if (i[4] == e) return !1;
        i[4] = e;
      }

      return e = +e, 0 > e ? !1 : (this.$invalidateTextField(), !0);
    }, n.prototype.$getWidth = function () {
      var t = this.$TextField;
      return isNaN(t[3]) ? this.$getContentBounds().width : t[3];
    }, n.prototype.$getHeight = function () {
      var t = this.$TextField;
      return isNaN(t[4]) ? this.$getContentBounds().height : t[4];
    }, Object.defineProperty(n.prototype, "border", {
      get: function get() {
        return this.$TextField[31];
      },
      set: function set(t) {
        this.$setBorder(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setBorder = function (e) {
      e = !!e, this.$TextField[31] != e && (this.$TextField[31] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setBorder(e));
    }, Object.defineProperty(n.prototype, "borderColor", {
      get: function get() {
        return this.$TextField[32];
      },
      set: function set(t) {
        this.$setBorderColor(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setBorderColor = function (e) {
      e = +e || 0, this.$TextField[32] != e && (this.$TextField[32] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setBorderColor(e));
    }, Object.defineProperty(n.prototype, "background", {
      get: function get() {
        return this.$TextField[33];
      },
      set: function set(t) {
        this.$setBackground(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setBackground = function (e) {
      this.$TextField[33] != e && (this.$TextField[33] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setBackground(e));
    }, Object.defineProperty(n.prototype, "backgroundColor", {
      get: function get() {
        return this.$TextField[34];
      },
      set: function set(t) {
        this.$setBackgroundColor(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setBackgroundColor = function (e) {
      this.$TextField[34] != e && (this.$TextField[34] = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setBackgroundColor(e));
    }, n.prototype.fillBackground = function (e) {
      var i = this.$graphicsNode;
      i && i.clear();
      var r = this.$TextField;

      if (r[33] || r[31] || e && e.length > 0) {
        if (!i) if (i = this.$graphicsNode = new t.sys.GraphicsNode(), t.nativeRender) this.$renderNode = this.textNode;else {
          var n = new t.sys.GroupNode();
          n.addNode(i), n.addNode(this.textNode), this.$renderNode = n;
        }
        var a = void 0,
            o = void 0;
        if (r[33] && (a = i.beginFill(r[34]), a.drawRect(0, 0, this.$getWidth(), this.$getHeight())), r[31] && (o = i.lineStyle(1, r[32]), o.drawRect(0, 0, this.$getWidth() - 1, this.$getHeight() - 1)), e && e.length > 0) for (var s = r[2], h = -1, c = e.length, l = 0; c > l; l += 4) {
          var u = e[l],
              p = e[l + 1],
              d = e[l + 2],
              f = e[l + 3] || s;
          (0 > h || h != f) && (h = f, o = i.lineStyle(2, f, 1, t.CapsStyle.NONE)), o.moveTo(u, p), o.lineTo(u + d, p);
        }
      }

      if (i) {
        var g = this.$getRenderBounds();
        i.x = g.x, i.y = g.y, i.width = g.width, i.height = g.height, t.Rectangle.release(g);
      }
    }, n.prototype.setFocus = function () {
      this.type == t.TextFieldType.INPUT && this.$stage && this.inputUtils.$onFocus();
    }, n.prototype.$onRemoveFromStage = function () {
      r.prototype.$onRemoveFromStage.call(this), this.removeEvent(), this.$TextField[24] == t.TextFieldType.INPUT && this.inputUtils._removeStageText(), this.textNode && (this.textNode.clean(), t.nativeRender && egret_native.NativeDisplayObject.disposeTextData(this));
    }, n.prototype.$onAddToStage = function (e, i) {
      r.prototype.$onAddToStage.call(this, e, i), this.addEvent(), this.$TextField[24] == t.TextFieldType.INPUT && this.inputUtils._addStageText();
    }, n.prototype.$invalidateTextField = function () {
      var e = this;
      if (e.$renderDirty = !0, e.$TextField[18] = !0, e.$TextField[38] = !0, t.nativeRender) ;else {
        var i = e.$parent;
        i && !i.$cacheDirty && (i.$cacheDirty = !0, i.$cacheDirtyUp());
        var r = e.$maskedObject;
        r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp());
      }
    }, n.prototype.$getRenderBounds = function () {
      var e = this.$getContentBounds(),
          i = t.Rectangle.create();
      i.copyFrom(e), this.$TextField[31] && (i.width += 2, i.height += 2);
      var r = 2 * this.$TextField[27];
      return r > 0 && (i.width += 2 * r, i.height += 2 * r), i.x -= r + 2, i.y -= r + 2, i.width = Math.ceil(i.width) + 4, i.height = Math.ceil(i.height) + 4, i;
    }, n.prototype.$measureContentBounds = function (e) {
      this.$getLinesArr();
      var i = 0,
          r = 0;
      t.nativeRender ? (i = egret_native.nrGetTextFieldWidth(this.$nativeDisplayObject.id), r = egret_native.nrGetTextFieldHeight(this.$nativeDisplayObject.id)) : (i = isNaN(this.$TextField[3]) ? this.$TextField[5] : this.$TextField[3], r = isNaN(this.$TextField[4]) ? t.TextFieldUtils.$getTextHeight(this) : this.$TextField[4]), e.setTo(0, 0, i, r);
    }, n.prototype.$updateRenderNode = function () {
      if (this.$TextField[24] == t.TextFieldType.INPUT) {
        if (this.inputUtils._updateProperties(), this.$isTyping) return void this.fillBackground();
      } else if (0 == this.$TextField[3]) {
        var e = this.$graphicsNode;
        return void (e && e.clear());
      }

      var i = this.drawText();
      this.fillBackground(i);
      var r = this.$getRenderBounds(),
          n = this.textNode;
      n.x = r.x, n.y = r.y, n.width = Math.ceil(r.width), n.height = Math.ceil(r.height), t.Rectangle.release(r);
    }, Object.defineProperty(n.prototype, "textFlow", {
      get: function get() {
        return this.textArr;
      },
      set: function set(e) {
        this.isFlow = !0;
        var i = "";
        null == e && (e = []);

        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          i += n.text;
        }

        this.$TextField[20] ? this.$setBaseText(i) : (this.$TextField[13] = i, this.setMiddleStyle(e), t.nativeRender && this.$nativeDisplayObject.setTextFlow(e));
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.changeToPassText = function (t) {
      if (this.$TextField[20]) {
        for (var e = "", i = 0, r = t.length; r > i; i++) {
          switch (t.charAt(i)) {
            case "\n":
              e += "\n";
              break;

            case "\r":
              break;

            default:
              e += "*";
          }
        }

        return e;
      }

      return t;
    }, n.prototype.setMiddleStyle = function (t) {
      this.$TextField[18] = !0, this.$TextField[38] = !0, this.textArr = t, this.$invalidateTextField();
    }, Object.defineProperty(n.prototype, "textWidth", {
      get: function get() {
        return this.$getLinesArr(), t.nativeRender ? egret_native.nrGetTextWidth(this.$nativeDisplayObject.id) : this.$TextField[5];
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "textHeight", {
      get: function get() {
        return this.$getLinesArr(), t.nativeRender ? egret_native.nrGetTextHeight(this.$nativeDisplayObject.id) : t.TextFieldUtils.$getTextHeight(this);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.appendText = function (t) {
      this.appendElement({
        text: t
      });
    }, n.prototype.appendElement = function (e) {
      var i = this.$TextField[13] + e.text;
      return t.nativeRender ? (this.textArr.push(e), this.$TextField[13] = i, this.$TextField[18] = !0, this.$TextField[38] = !0, void this.$nativeDisplayObject.setTextFlow(this.textArr)) : void (this.$TextField[20] ? this.$setBaseText(i) : (this.$TextField[13] = i, this.textArr.push(e), this.setMiddleStyle(this.textArr)));
    }, n.prototype.$getLinesArr = function () {
      var e = this.$TextField;
      return t.nativeRender && e[38] ? (egret_native.updateNativeRender(), void (e[38] = !1)) : this.$getLinesArr2();
    }, n.prototype.$getLinesArr2 = function () {
      var r = this.$TextField;
      if (!r[18]) return this.linesArr;
      r[18] = !1;
      var n = this.textArr;
      this.linesArr.length = 0, r[6] = 0, r[5] = 0;
      var a = r[3];
      if (!isNaN(a) && 0 == a) return r[29] = 0, [{
        width: 0,
        height: 0,
        charNum: 0,
        elements: [],
        hasNextLine: !1
      }];

      for (var o, s = this.linesArr, h = 0, c = 0, l = 0, u = 0, p = 0, d = n.length; d > p; p++) {
        var f = n[p];

        if (f.text) {
          f.style = f.style || {};

          for (var g = f.text.toString(), $ = g.split(/(?:\r\n|\r|\n)/), y = 0, v = $.length; v > y; y++) {
            null == s[u] && (o = {
              width: 0,
              height: 0,
              elements: [],
              charNum: 0,
              hasNextLine: !1
            }, s[u] = o, h = 0, l = 0, c = 0), l = r[24] == t.TextFieldType.INPUT ? r[0] : Math.max(l, f.style.size || r[0]);
            var b = !0;
            if ("" == $[y]) y == v - 1 && (b = !1);else {
              var m = e($[y], r, f.style);
              if (isNaN(a)) h += m, c += $[y].length, o.elements.push({
                width: m,
                text: $[y],
                style: f.style
              }), y == v - 1 && (b = !1);else if (a >= h + m) o.elements.push({
                width: m,
                text: $[y],
                style: f.style
              }), h += m, c += $[y].length, y == v - 1 && (b = !1);else {
                var x = 0,
                    T = 0,
                    _ = $[y],
                    D = void 0;
                D = r[19] ? _.split(i) : _.match(/./g);

                for (var O = D.length, w = 0; O > x; x++) {
                  var E = D[x].length,
                      R = !1;

                  if (1 == E && O - 1 > x) {
                    var S = D[x].charCodeAt(0),
                        F = D[x + 1].charCodeAt(0);

                    if (S >= 55296 && 56319 >= S && 56320 == (64512 & F)) {
                      var P = D[x] + D[x + 1];
                      E = 2, R = !0, m = e(P, r, f.style);
                    } else m = e(D[x], r, f.style);
                  } else m = e(D[x], r, f.style);

                  if (0 != h && h + m > a && h + x != 0) break;
                  if (T + m > a) for (var C = D[x].match(/./g), M = 0, j = C.length; j > M; M++) {
                    var E = C[M].length,
                        A = !1;

                    if (1 == E && j - 1 > M) {
                      var S = C[M].charCodeAt(0),
                          F = C[M + 1].charCodeAt(0);

                      if (S >= 55296 && 56319 >= S && 56320 == (64512 & F)) {
                        var P = C[M] + C[M + 1];
                        E = 2, A = !0, m = e(P, r, f.style);
                      } else m = e(C[M], r, f.style);
                    } else m = e(C[M], r, f.style);

                    if (M > 0 && h + m > a) break;
                    w += E, T += m, h += m, c += w, A && M++;
                  } else w += E, T += m, h += m, c += w;
                  R && x++;
                }

                if (x > 0) {
                  o.elements.push({
                    width: T,
                    text: _.substring(0, w),
                    style: f.style
                  });

                  var B = _.substring(w),
                      N = void 0,
                      k = B.length;

                  for (N = 0; k > N && " " == B.charAt(N); N++) {
                    ;
                  }

                  $[y] = B.substring(N);
                }

                "" != $[y] && (y--, b = !1);
              }
            }
            b && (c++, o.hasNextLine = !0), y < $.length - 1 && (o.width = h, o.height = l, o.charNum = c, r[5] = Math.max(r[5], h), r[6] += l, u++);
          }

          p == n.length - 1 && o && (o.width = h, o.height = l, o.charNum = c, r[5] = Math.max(r[5], h), r[6] += l);
        } else o && (o.width = h, o.height = l, o.charNum = c, r[5] = Math.max(r[5], h), r[6] += l);
      }

      return r[29] = s.length, s;
    }, n.prototype.$setIsTyping = function (e) {
      this.$isTyping = e, this.$invalidateTextField(), t.nativeRender && this.$nativeDisplayObject.setIsTyping(e);
    }, n.prototype.drawText = function () {
      var e = this.textNode,
          i = this.$TextField;
      e.bold = i[15], e.fontFamily = i[8] || n.default_fontFamily, e.italic = i[16], e.size = i[0], e.stroke = i[27], e.strokeColor = i[25], e.textColor = i[2];
      var r = this.$getLinesArr();
      if (0 == i[5]) return [];
      var a = isNaN(i[3]) ? i[5] : i[3],
          o = t.TextFieldUtils.$getTextHeight(this),
          s = 0,
          h = t.TextFieldUtils.$getStartLine(this),
          c = i[4];

      if (!isNaN(c) && c > o) {
        var l = t.TextFieldUtils.$getValign(this);
        s += l * (c - o);
      }

      s = Math.round(s);

      for (var u = t.TextFieldUtils.$getHalign(this), p = 0, d = [], f = h, g = i[29]; g > f; f++) {
        var $ = r[f],
            y = $.height;

        if (s += y / 2, f != h) {
          if (i[24] == t.TextFieldType.INPUT && !i[30]) break;
          if (!isNaN(c) && s > c) break;
        }

        p = Math.round((a - $.width) * u);

        for (var v = 0, b = $.elements.length; b > v; v++) {
          var m = $.elements[v],
              x = m.style.size || i[0];
          e.drawText(p, s + (y - x) / 2, m.text, m.style), m.style.underline && d.push(p, s + y / 2, m.width, m.style.textColor), p += m.width;
        }

        s += y / 2 + i[1];
      }

      return d;
    }, n.prototype.addEvent = function () {
      this.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTapHandler, this);
    }, n.prototype.removeEvent = function () {
      this.removeEventListener(t.TouchEvent.TOUCH_TAP, this.onTapHandler, this);
    }, n.prototype.onTapHandler = function (e) {
      if (this.$TextField[24] != t.TextFieldType.INPUT) {
        var i = t.TextFieldUtils.$getTextElement(this, e.localX, e.localY);

        if (null != i) {
          var r = i.style;
          if (r && r.href) if (r.href.match(/^event:/)) {
            var n = r.href.match(/^event:/)[0];
            t.TextEvent.dispatchTextEvent(this, t.TextEvent.LINK, r.href.substring(n.length));
          } else open(r.href, r.target || "_blank");
        }
      }
    }, n.default_fontFamily = "Arial", n.default_size = 30, n.default_textColor = 16777215, n;
  }(t.DisplayObject);

  t.TextField = r, __reflect(r.prototype, "egret.TextField");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function t() {}

    return t.TEXT = "text", t.TEL = "tel", t.PASSWORD = "password", t;
  }();

  t.TextFieldInputType = e, __reflect(e.prototype, "egret.TextFieldInputType");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function t() {}

    return t.DYNAMIC = "dynamic", t.INPUT = "input", t;
  }();

  t.TextFieldType = e, __reflect(e.prototype, "egret.TextFieldType");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function e() {}

    return e.$getStartLine = function (t) {
      var i = t.$TextField,
          r = e.$getTextHeight(t),
          n = 0,
          a = i[4];
      return isNaN(a) || (a > r || r > a && (n = Math.max(i[28] - 1, 0), n = Math.min(i[29] - 1, n)), i[30] || (n = Math.max(i[28] - 1, 0), i[29] > 0 && (n = Math.min(i[29] - 1, n)))), n;
    }, e.$getHalign = function (e) {
      var i = e.$getLinesArr2(),
          r = 0;
      return e.$TextField[9] == t.HorizontalAlign.CENTER ? r = .5 : e.$TextField[9] == t.HorizontalAlign.RIGHT && (r = 1), e.$TextField[24] == t.TextFieldType.INPUT && !e.$TextField[30] && i.length > 1 && (r = 0), r;
    }, e.$getTextHeight = function (e) {
      var i = t.TextFieldType.INPUT != e.$TextField[24] || e.$TextField[30] ? e.$TextField[6] + (e.$TextField[29] - 1) * e.$TextField[1] : e.$TextField[0];
      return i;
    }, e.$getValign = function (i) {
      var r = e.$getTextHeight(i),
          n = i.$TextField[4];

      if (!isNaN(n) && n > r) {
        var a = 0;
        return i.$TextField[10] == t.VerticalAlign.MIDDLE ? a = .5 : i.$TextField[10] == t.VerticalAlign.BOTTOM && (a = 1), a;
      }

      return 0;
    }, e.$getTextElement = function (t, i, r) {
      var n = e.$getHit(t, i, r),
          a = t.$getLinesArr2();
      return n && a[n.lineIndex] && a[n.lineIndex].elements[n.textElementIndex] ? a[n.lineIndex].elements[n.textElementIndex] : null;
    }, e.$getHit = function (t, i, r) {
      var n = t.$getLinesArr2();
      if (0 == t.$TextField[3]) return null;
      var a = 0,
          o = e.$getTextHeight(t),
          s = 0,
          h = t.$TextField[4];

      if (!isNaN(h) && h > o) {
        var c = e.$getValign(t);
        s = c * (h - o), 0 != s && (r -= s);
      }

      for (var l = e.$getStartLine(t), u = 0, p = l; p < n.length; p++) {
        var d = n[p];

        if (u + d.height >= r) {
          r > u && (a = p + 1);
          break;
        }

        if (u += d.height, u + t.$TextField[1] > r) return null;
        u += t.$TextField[1];
      }

      if (0 == a) return null;
      var f = n[a - 1],
          g = t.$TextField[3];
      isNaN(g) && (g = t.textWidth);
      var $ = e.$getHalign(t);
      i -= $ * (g - f.width);

      for (var y = 0, p = 0; p < f.elements.length; p++) {
        var v = f.elements[p];
        if (y + v.width <= i) y += v.width;else if (i > y) return {
          lineIndex: a - 1,
          textElementIndex: p
        };
      }

      return null;
    }, e.$getScrollNum = function (t) {
      var e = 1;

      if (t.$TextField[30]) {
        var i = t.height,
            r = t.size,
            n = t.lineSpacing;
        e = Math.floor(i / (r + n));
        var a = i - (r + n) * e;
        a > r / 2 && e++;
      }

      return e;
    }, e;
  }();

  t.TextFieldUtils = e, __reflect(e.prototype, "egret.TextFieldUtils");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {}(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function t() {}

    return t.TOP = "top", t.BOTTOM = "bottom", t.MIDDLE = "middle", t.JUSTIFY = "justify", t.CONTENT_JUSTIFY = "contentJustify", t;
  }();

  t.VerticalAlign = e, __reflect(e.prototype, "egret.VerticalAlign");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function t() {}

    return t.encode = function (t) {
      for (var e = new Uint8Array(t), i = e.length, r = "", n = 0; i > n; n += 3) {
        r += chars[e[n] >> 2], r += chars[(3 & e[n]) << 4 | e[n + 1] >> 4], r += chars[(15 & e[n + 1]) << 2 | e[n + 2] >> 6], r += chars[63 & e[n + 2]];
      }

      return i % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : i % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="), r;
    }, t.decode = function (t) {
      var e = .75 * t.length,
          i = t.length,
          r = 0,
          n = 0,
          a = 0,
          o = 0,
          s = 0;
      "=" === t[t.length - 1] && (e--, "=" === t[t.length - 2] && e--);

      for (var h = new ArrayBuffer(e), c = new Uint8Array(h), l = 0; i > l; l += 4) {
        n = lookup[t.charCodeAt(l)], a = lookup[t.charCodeAt(l + 1)], o = lookup[t.charCodeAt(l + 2)], s = lookup[t.charCodeAt(l + 3)], c[r++] = n << 2 | a >> 4, c[r++] = (15 & a) << 4 | o >> 2, c[r++] = (3 & o) << 6 | 63 & s;
      }

      return h;
    }, t;
  }();

  t.Base64Util = e, __reflect(e.prototype, "egret.Base64Util");
}(egret || (egret = {}));

for (var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup = new Uint8Array(256), i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}

var egret;
!function (t) {
  var e = function () {
    function t() {}

    return t.LITTLE_ENDIAN = "littleEndian", t.BIG_ENDIAN = "bigEndian", t;
  }();

  t.Endian = e, __reflect(e.prototype, "egret.Endian");

  var i = function () {
    function i(t, i) {
      void 0 === i && (i = 0), this.bufferExtSize = 0, this.EOF_byte = -1, this.EOF_code_point = -1, 0 > i && (i = 0), this.bufferExtSize = i;
      var r,
          n = 0;

      if (t) {
        var a = void 0;
        if (t instanceof Uint8Array ? (a = t, n = t.length) : (n = t.byteLength, a = new Uint8Array(t)), 0 == i) r = new Uint8Array(n);else {
          var o = (n / i | 0) + 1;
          r = new Uint8Array(o * i);
        }
        r.set(a);
      } else r = new Uint8Array(i);

      this.write_position = n, this._position = 0, this._bytes = r, this.data = new DataView(r.buffer), this.endian = e.BIG_ENDIAN;
    }

    return Object.defineProperty(i.prototype, "endian", {
      get: function get() {
        return 0 == this.$endian ? e.LITTLE_ENDIAN : e.BIG_ENDIAN;
      },
      set: function set(t) {
        this.$endian = t == e.LITTLE_ENDIAN ? 0 : 1;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.setArrayBuffer = function (t) {}, Object.defineProperty(i.prototype, "readAvailable", {
      get: function get() {
        return this.write_position - this._position;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "buffer", {
      get: function get() {
        return this.data.buffer.slice(0, this.write_position);
      },
      set: function set(t) {
        var e,
            i = t.byteLength,
            r = new Uint8Array(t),
            n = this.bufferExtSize;
        if (0 == n) e = new Uint8Array(i);else {
          var a = (i / n | 0) + 1;
          e = new Uint8Array(a * n);
        }
        e.set(r), this.write_position = i, this._bytes = e, this.data = new DataView(e.buffer);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "rawBuffer", {
      get: function get() {
        return this.data.buffer;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "bytes", {
      get: function get() {
        return this._bytes;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "dataView", {
      get: function get() {
        return this.data;
      },
      set: function set(t) {
        this.buffer = t.buffer;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "bufferOffset", {
      get: function get() {
        return this.data.byteOffset;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "position", {
      get: function get() {
        return this._position;
      },
      set: function set(t) {
        this._position = t, t > this.write_position && (this.write_position = t);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "length", {
      get: function get() {
        return this.write_position;
      },
      set: function set(t) {
        this.write_position = t, this.data.byteLength > t && (this._position = t), this._validateBuffer(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype._validateBuffer = function (t) {
      if (this.data.byteLength < t) {
        var e = this.bufferExtSize,
            i = void 0;
        if (0 == e) i = new Uint8Array(t);else {
          var r = ((t / e >> 0) + 1) * e;
          i = new Uint8Array(r);
        }
        i.set(this._bytes), this._bytes = i, this.data = new DataView(i.buffer);
      }
    }, Object.defineProperty(i.prototype, "bytesAvailable", {
      get: function get() {
        return this.data.byteLength - this._position;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.clear = function () {
      var t = new ArrayBuffer(this.bufferExtSize);
      this.data = new DataView(t), this._bytes = new Uint8Array(t), this._position = 0, this.write_position = 0;
    }, i.prototype.readBoolean = function () {
      return this.validate(1) ? !!this._bytes[this.position++] : void 0;
    }, i.prototype.readByte = function () {
      return this.validate(1) ? this.data.getInt8(this.position++) : void 0;
    }, i.prototype.readBytes = function (e, i, r) {
      if (void 0 === i && (i = 0), void 0 === r && (r = 0), e) {
        var n = this._position,
            a = this.write_position - n;
        if (0 > a) return void t.$error(1025);
        if (0 == r) r = a;else if (r > a) return void t.$error(1025);
        var o = e._position;
        e._position = 0, e.validateBuffer(i + r), e._position = o, e._bytes.set(this._bytes.subarray(n, n + r), i), this.position += r;
      }
    }, i.prototype.readDouble = function () {
      if (this.validate(8)) {
        var t = this.data.getFloat64(this._position, 0 == this.$endian);
        return this.position += 8, t;
      }
    }, i.prototype.readFloat = function () {
      if (this.validate(4)) {
        var t = this.data.getFloat32(this._position, 0 == this.$endian);
        return this.position += 4, t;
      }
    }, i.prototype.readInt = function () {
      if (this.validate(4)) {
        var t = this.data.getInt32(this._position, 0 == this.$endian);
        return this.position += 4, t;
      }
    }, i.prototype.readShort = function () {
      if (this.validate(2)) {
        var t = this.data.getInt16(this._position, 0 == this.$endian);
        return this.position += 2, t;
      }
    }, i.prototype.readUnsignedByte = function () {
      return this.validate(1) ? this._bytes[this.position++] : void 0;
    }, i.prototype.readUnsignedInt = function () {
      if (this.validate(4)) {
        var t = this.data.getUint32(this._position, 0 == this.$endian);
        return this.position += 4, t;
      }
    }, i.prototype.readUnsignedShort = function () {
      if (this.validate(2)) {
        var t = this.data.getUint16(this._position, 0 == this.$endian);
        return this.position += 2, t;
      }
    }, i.prototype.readUTF = function () {
      var t = this.readUnsignedShort();
      return t > 0 ? this.readUTFBytes(t) : "";
    }, i.prototype.readUTFBytes = function (t) {
      if (this.validate(t)) {
        var e = this.data,
            i = new Uint8Array(e.buffer, e.byteOffset + this._position, t);
        return this.position += t, this.decodeUTF8(i);
      }
    }, i.prototype.writeBoolean = function (t) {
      this.validateBuffer(1), this._bytes[this.position++] = +t;
    }, i.prototype.writeByte = function (t) {
      this.validateBuffer(1), this._bytes[this.position++] = 255 & t;
    }, i.prototype.writeBytes = function (t, e, i) {
      void 0 === e && (e = 0), void 0 === i && (i = 0);
      var r;
      0 > e || 0 > i || (r = 0 == i ? t.length - e : Math.min(t.length - e, i), r > 0 && (this.validateBuffer(r), this._bytes.set(t._bytes.subarray(e, e + r), this._position), this.position = this._position + r));
    }, i.prototype.writeDouble = function (t) {
      this.validateBuffer(8), this.data.setFloat64(this._position, t, 0 == this.$endian), this.position += 8;
    }, i.prototype.writeFloat = function (t) {
      this.validateBuffer(4), this.data.setFloat32(this._position, t, 0 == this.$endian), this.position += 4;
    }, i.prototype.writeInt = function (t) {
      this.validateBuffer(4), this.data.setInt32(this._position, t, 0 == this.$endian), this.position += 4;
    }, i.prototype.writeShort = function (t) {
      this.validateBuffer(2), this.data.setInt16(this._position, t, 0 == this.$endian), this.position += 2;
    }, i.prototype.writeUnsignedInt = function (t) {
      this.validateBuffer(4), this.data.setUint32(this._position, t, 0 == this.$endian), this.position += 4;
    }, i.prototype.writeUnsignedShort = function (t) {
      this.validateBuffer(2), this.data.setUint16(this._position, t, 0 == this.$endian), this.position += 2;
    }, i.prototype.writeUTF = function (t) {
      var e = this.encodeUTF8(t),
          i = e.length;
      this.validateBuffer(2 + i), this.data.setUint16(this._position, i, 0 == this.$endian), this.position += 2, this._writeUint8Array(e, !1);
    }, i.prototype.writeUTFBytes = function (t) {
      this._writeUint8Array(this.encodeUTF8(t));
    }, i.prototype.toString = function () {
      return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable;
    }, i.prototype._writeUint8Array = function (t, e) {
      void 0 === e && (e = !0);
      var i = this._position,
          r = i + t.length;
      e && this.validateBuffer(r), this.bytes.set(t, i), this.position = r;
    }, i.prototype.validate = function (e) {
      var i = this._bytes.length;
      return i > 0 && this._position + e <= i ? !0 : void t.$error(1025);
    }, i.prototype.validateBuffer = function (t) {
      this.write_position = t > this.write_position ? t : this.write_position, t += this._position, this._validateBuffer(t);
    }, i.prototype.encodeUTF8 = function (t) {
      for (var e = 0, i = this.stringToCodePoints(t), r = []; i.length > e;) {
        var n = i[e++];
        if (this.inRange(n, 55296, 57343)) this.encoderError(n);else if (this.inRange(n, 0, 127)) r.push(n);else {
          var a = void 0,
              o = void 0;

          for (this.inRange(n, 128, 2047) ? (a = 1, o = 192) : this.inRange(n, 2048, 65535) ? (a = 2, o = 224) : this.inRange(n, 65536, 1114111) && (a = 3, o = 240), r.push(this.div(n, Math.pow(64, a)) + o); a > 0;) {
            var s = this.div(n, Math.pow(64, a - 1));
            r.push(128 + s % 64), a -= 1;
          }
        }
      }

      return new Uint8Array(r);
    }, i.prototype.decodeUTF8 = function (t) {
      for (var e, i = !1, r = 0, n = "", a = 0, o = 0, s = 0, h = 0; t.length > r;) {
        var c = t[r++];
        if (c == this.EOF_byte) e = 0 != o ? this.decoderError(i) : this.EOF_code_point;else if (0 == o) this.inRange(c, 0, 127) ? e = c : (this.inRange(c, 194, 223) ? (o = 1, h = 128, a = c - 192) : this.inRange(c, 224, 239) ? (o = 2, h = 2048, a = c - 224) : this.inRange(c, 240, 244) ? (o = 3, h = 65536, a = c - 240) : this.decoderError(i), a *= Math.pow(64, o), e = null);else if (this.inRange(c, 128, 191)) {
          if (s += 1, a += (c - 128) * Math.pow(64, o - s), s !== o) e = null;else {
            var l = a,
                u = h;
            a = 0, o = 0, s = 0, h = 0, e = this.inRange(l, u, 1114111) && !this.inRange(l, 55296, 57343) ? l : this.decoderError(i, c);
          }
        } else a = 0, o = 0, s = 0, h = 0, r--, e = this.decoderError(i, c);
        null !== e && e !== this.EOF_code_point && (65535 >= e ? e > 0 && (n += String.fromCharCode(e)) : (e -= 65536, n += String.fromCharCode(55296 + (e >> 10 & 1023)), n += String.fromCharCode(56320 + (1023 & e))));
      }

      return n;
    }, i.prototype.encoderError = function (e) {
      t.$error(1026, e);
    }, i.prototype.decoderError = function (e, i) {
      return e && t.$error(1027), i || 65533;
    }, i.prototype.inRange = function (t, e, i) {
      return t >= e && i >= t;
    }, i.prototype.div = function (t, e) {
      return Math.floor(t / e);
    }, i.prototype.stringToCodePoints = function (t) {
      for (var e = [], i = 0, r = t.length; i < t.length;) {
        var n = t.charCodeAt(i);
        if (this.inRange(n, 55296, 57343)) {
          if (this.inRange(n, 56320, 57343)) e.push(65533);else if (i == r - 1) e.push(65533);else {
            var a = t.charCodeAt(i + 1);

            if (this.inRange(a, 56320, 57343)) {
              var o = 1023 & n,
                  s = 1023 & a;
              i += 1, e.push(65536 + (o << 10) + s);
            } else e.push(65533);
          }
        } else e.push(n);
        i += 1;
      }

      return e;
    }, i;
  }();

  t.ByteArray = i, __reflect(i.prototype, "egret.ByteArray");
}(egret || (egret = {}));
var egret;
!function (t) {
  t.BitmapFillMode = {
    REPEAT: "repeat",
    SCALE: "scale",
    CLIP: "clip"
  };
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(t, e, i) {
    var r = t.prototype;
    r.__class__ = e;
    var n = [e];
    i && (n = n.concat(i));
    var a = r.__types__;
    if (r.__types__) for (var o = a.length, s = 0; o > s; s++) {
      var h = a[s];
      -1 == n.indexOf(h) && n.push(h);
    }
    r.__types__ = n;
  }

  t.registerClass = e;
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i.$stageWidth = 0, i.$stageHeight = 0, i.$scaleMode = t.StageScaleMode.SHOW_ALL, i.$orientation = t.OrientationMode.AUTO, i.$maxTouches = 99, i.$stage = i, i.$nestLevel = 1, i;
    }

    return __extends(i, e), i.prototype.createNativeDisplayObject = function () {
      this.$nativeDisplayObject = new egret_native.NativeDisplayObject(13);
    }, Object.defineProperty(i.prototype, "frameRate", {
      get: function get() {
        return t.ticker.$frameRate;
      },
      set: function set(e) {
        t.ticker.$setFrameRate(e);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "stageWidth", {
      get: function get() {
        return this.$stageWidth;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "stageHeight", {
      get: function get() {
        return this.$stageHeight;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.invalidate = function () {
      t.sys.$invalidateRenderFlag = !0;
    }, i.prototype.registerImplementation = function (e, i) {
      t.registerImplementation(e, i);
    }, i.prototype.getImplementation = function (e) {
      return t.getImplementation(e);
    }, Object.defineProperty(i.prototype, "scaleMode", {
      get: function get() {
        return this.$scaleMode;
      },
      set: function set(t) {
        this.$scaleMode != t && (this.$scaleMode = t, this.$screen.updateScreenSize());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "orientation", {
      get: function get() {
        return this.$orientation;
      },
      set: function set(t) {
        this.$orientation != t && (this.$orientation = t, this.$screen.updateScreenSize());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "textureScaleFactor", {
      get: function get() {
        return t.$TextureScaleFactor;
      },
      set: function set(e) {
        t.$TextureScaleFactor = e;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "maxTouches", {
      get: function get() {
        return this.$maxTouches;
      },
      set: function set(t) {
        this.$maxTouches != t && (this.$maxTouches = t, this.$screen.updateMaxTouches());
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.setContentSize = function (t, e) {
      this.$screen.setContentSize(t, e);
    }, i;
  }(t.DisplayObjectContainer);

  t.Stage = e, __reflect(e.prototype, "egret.Stage");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function t() {}

    return Object.defineProperty(t, "logLevel", {
      set: function set(t) {},
      enumerable: !0,
      configurable: !0
    }), t.ALL = "all", t.DEBUG = "debug", t.INFO = "info", t.WARN = "warn", t.ERROR = "error", t.OFF = "off", t;
  }();

  t.Logger = e, __reflect(e.prototype, "egret.Logger");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function () {
    function t() {}

    return t.isNumber = function (t) {
      return "number" == typeof t && !isNaN(t);
    }, t.sin = function (e) {
      var i = Math.floor(e),
          r = i + 1,
          n = t.sinInt(i);
      if (i == e) return n;
      var a = t.sinInt(r);
      return (e - i) * a + (r - e) * n;
    }, t.sinInt = function (t) {
      return t %= 360, 0 > t && (t += 360), egret_sin_map[t];
    }, t.cos = function (e) {
      var i = Math.floor(e),
          r = i + 1,
          n = t.cosInt(i);
      if (i == e) return n;
      var a = t.cosInt(r);
      return (e - i) * a + (r - e) * n;
    }, t.cosInt = function (t) {
      return t %= 360, 0 > t && (t += 360), egret_cos_map[t];
    }, t;
  }();

  t.NumberUtils = e, __reflect(e.prototype, "egret.NumberUtils");
}(egret || (egret = {}));

for (var egret_sin_map = {}, egret_cos_map = {}, DEG_TO_RAD = Math.PI / 180, NumberUtils_i = 0; 360 > NumberUtils_i; NumberUtils_i++) {
  egret_sin_map[NumberUtils_i] = Math.sin(NumberUtils_i * DEG_TO_RAD), egret_cos_map[NumberUtils_i] = Math.cos(NumberUtils_i * DEG_TO_RAD);
}

egret_sin_map[90] = 1, egret_cos_map[90] = 0, egret_sin_map[180] = 0, egret_cos_map[180] = -1, egret_sin_map[270] = -1, egret_cos_map[270] = 0, Function.prototype.bind || (Function.prototype.bind = function (t) {
  "function" != typeof this && egret.$error(1029);

  var e = Array.prototype.slice.call(arguments, 1),
      i = this,
      r = function r() {},
      n = function n() {
    return i.apply(this instanceof r && t ? this : t, e.concat(Array.prototype.slice.call(arguments)));
  };

  return r.prototype = this.prototype, n.prototype = new r(), n;
});
var egret;
!function (t) {
  var e = function (e) {
    function i(t, i) {
      void 0 === i && (i = 0);
      var r = e.call(this) || this;
      return r._delay = 0, r._currentCount = 0, r._running = !1, r.updateInterval = 1e3, r.lastCount = 1e3, r.lastTimeStamp = 0, r.delay = t, r.repeatCount = 0 | +i, r;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "delay", {
      get: function get() {
        return this._delay;
      },
      set: function set(t) {
        1 > t && (t = 1), this._delay != t && (this._delay = t, this.lastCount = this.updateInterval = Math.round(60 * t));
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "currentCount", {
      get: function get() {
        return this._currentCount;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "running", {
      get: function get() {
        return this._running;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.reset = function () {
      this.stop(), this._currentCount = 0;
    }, i.prototype.start = function () {
      this._running || (this.lastCount = this.updateInterval, this.lastTimeStamp = t.getTimer(), t.ticker.$startTick(this.$update, this), this._running = !0);
    }, i.prototype.stop = function () {
      this._running && (t.stopTick(this.$update, this), this._running = !1);
    }, i.prototype.$update = function (e) {
      var i = e - this.lastTimeStamp;
      if (i >= this._delay) this.lastCount = this.updateInterval;else {
        if (this.lastCount -= 1e3, this.lastCount > 0) return !1;
        this.lastCount += this.updateInterval;
      }
      this.lastTimeStamp = e, this._currentCount++;
      var r = this.repeatCount > 0 && this._currentCount >= this.repeatCount;
      return t.TimerEvent.dispatchTimerEvent(this, t.TimerEvent.TIMER), r && (this.stop(), t.TimerEvent.dispatchTimerEvent(this, t.TimerEvent.TIMER_COMPLETE)), !1;
    }, i;
  }(t.EventDispatcher);

  t.Timer = e, __reflect(e.prototype, "egret.Timer");
}(egret || (egret = {}));
var egret;
!function (t) {}(egret || (egret = {}));
var egret;
!function (t) {
  function e(e, i) {
    for (var r = [], n = 2; n < arguments.length; n++) {
      r[n - 2] = arguments[n];
    }

    t.$callLaterFunctionList.push(e), t.$callLaterThisList.push(i), t.$callLaterArgsList.push(r);
  }

  function i(e, i) {
    for (var r = [], n = 2; n < arguments.length; n++) {
      r[n - 2] = arguments[n];
    }

    t.$callAsyncFunctionList.push(e), t.$callAsyncThisList.push(i), t.$callAsyncArgsList.push(r);
  }

  t.$callLaterFunctionList = [], t.$callLaterThisList = [], t.$callLaterArgsList = [], t.callLater = e, t.$callAsyncFunctionList = [], t.$callAsyncThisList = [], t.$callAsyncArgsList = [], t.$callAsync = i;
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(t, e, i) {
    for (var r = [], n = 3; n < arguments.length; n++) {
      r[n - 3] = arguments[n];
    }

    var a,
        o = t.prototype;
    t.hasOwnProperty("__sets__") || Object.defineProperty(t, "__sets__", {
      value: {}
    }), a = t.__sets__;
    var s = a[i];
    if (s) return s.apply(e, r);
    var h = Object.getPrototypeOf(o);

    if (null != h) {
      for (; !h.hasOwnProperty(i);) {
        if (h = Object.getPrototypeOf(h), null == h) return;
      }

      s = Object.getOwnPropertyDescriptor(h, i).set, a[i] = s, s.apply(e, r);
    }
  }

  function i(t, e, i) {
    var r,
        n = t.prototype;
    t.hasOwnProperty("__gets__") || Object.defineProperty(t, "__gets__", {
      value: {}
    }), r = t.__gets__;
    var a = r[i];
    if (a) return a.call(e);
    var o = Object.getPrototypeOf(n);

    if (null != o) {
      for (; !o.hasOwnProperty(i);) {
        if (o = Object.getPrototypeOf(o), null == o) return;
      }

      return a = Object.getOwnPropertyDescriptor(o, i).get, r[i] = a, a.call(e);
    }
  }

  t.superSetter = e, t.superGetter = i;
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(t) {
    if (!t) return null;
    var e = i[t];
    if (e) return e;
    var r = t.split("."),
        n = r.length;
    e = global;

    for (var a = 0; n > a; a++) {
      var o = r[a];
      if (e = e[o], !e) return null;
    }

    return i[t] = e, e;
  }

  var i = {};
  t.getDefinitionByName = e;
}(egret || (egret = {}));
var egret;
!function (t) {}(egret || (egret = {}));
var egret;
!function (t) {
  function e(t) {
    var e = _typeof(t);

    if (!t || "object" != e && !t.prototype) return e;
    var i = t.prototype ? t.prototype : Object.getPrototypeOf(t);
    if (i.hasOwnProperty("__class__")) return i.__class__;
    var r = i.constructor.toString().trim(),
        n = r.indexOf("("),
        a = r.substring(9, n);
    return Object.defineProperty(i, "__class__", {
      value: a,
      enumerable: !1,
      writable: !0
    }), a;
  }

  t.getQualifiedClassName = e;
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(e) {
    if (!e || "object" != _typeof(e) && !e.prototype) return null;
    var i = e.prototype ? e.prototype : Object.getPrototypeOf(e),
        r = Object.getPrototypeOf(i);
    if (!r) return null;
    var n = t.getQualifiedClassName(r.constructor);
    return n ? n : null;
  }

  t.getQualifiedSuperclassName = e;
}(egret || (egret = {}));
var egret;
!function (t) {
  function e() {
    return Date.now() - t.sys.$START_TIME;
  }

  t.getTimer = e;
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(e) {
    var i = t.getDefinitionByName(e);
    return i ? !0 : !1;
  }

  t.hasDefinition = e;
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(t, e) {
    if (!t || "object" != _typeof(t)) return !1;
    var i = Object.getPrototypeOf(t),
        r = i ? i.__types__ : null;
    return r ? -1 !== r.indexOf(e) : !1;
  }

  t.is = e;
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(e, i) {
    t.ticker.$startTick(e, i);
  }

  t.startTick = e;
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(e, i) {
    t.ticker.$stopTick(e, i);
  }

  t.stopTick = e;
}(egret || (egret = {}));
var egret;
!function (t) {
  function e(t) {
    0 > t && (t = 0), t > 16777215 && (t = 16777215);

    for (var e = t.toString(16).toUpperCase(); e.length > 6;) {
      e = e.slice(1, e.length);
    }

    for (; e.length < 6;) {
      e = "0" + e;
    }

    return "#" + e;
  }

  t.toColorString = e;
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (t) {}(e = t.sys || (t.sys = {}));
}(egret || (egret = {}));
;
window.egret = egret;

/***/ }),

/***/ "./src/js/eui.min.js":
/*!***************************!*\
  !*** ./src/js/eui.min.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var egret = window.egret;

var __reflect = void 0 && (void 0).__reflect || function (t, e, i) {
  t.__class__ = e, i ? i.push(e) : i = [e], t.__types__ = t.__types__ ? i.concat(t.__types__) : i;
},
    __extends = void 0 && (void 0).__extends || function (t, e) {
  function i() {
    this.constructor = t;
  }

  for (var n in e) {
    e.hasOwnProperty(n) && (t[n] = e[n]);
  }

  i.prototype = e.prototype, t.prototype = new i();
},
    eui;

!function (t) {
  var e;
  !function (t) {
    var e = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.targetLevel = Number.POSITIVE_INFINITY, e.invalidatePropertiesFlag = !1, e.invalidateClientPropertiesFlag = !1, e.invalidatePropertiesQueue = new i(), e.invalidateSizeFlag = !1, e.invalidateClientSizeFlag = !1, e.invalidateSizeQueue = new i(), e.invalidateDisplayListFlag = !1, e.invalidateDisplayListQueue = new i(), e.eventDisplay = new egret.Bitmap(), e.listenersAttached = !1, e;
      }

      return __extends(e, t), e.prototype.invalidateProperties = function (t) {
        this.invalidatePropertiesFlag || (this.invalidatePropertiesFlag = !0, this.listenersAttached || this.attachListeners()), this.targetLevel <= t.$nestLevel && (this.invalidateClientPropertiesFlag = !0), this.invalidatePropertiesQueue.insert(t);
      }, e.prototype.validateProperties = function () {
        for (var t = this.invalidatePropertiesQueue, e = t.shift(); e;) {
          e.$stage && e.validateProperties(), e = t.shift();
        }

        t.isEmpty() && (this.invalidatePropertiesFlag = !1);
      }, e.prototype.invalidateSize = function (t) {
        this.invalidateSizeFlag || (this.invalidateSizeFlag = !0, this.listenersAttached || this.attachListeners()), this.targetLevel <= t.$nestLevel && (this.invalidateClientSizeFlag = !0), this.invalidateSizeQueue.insert(t);
      }, e.prototype.validateSize = function () {
        for (var t = this.invalidateSizeQueue, e = t.pop(); e;) {
          e.$stage && e.validateSize(), e = t.pop();
        }

        t.isEmpty() && (this.invalidateSizeFlag = !1);
      }, e.prototype.invalidateDisplayList = function (t) {
        this.invalidateDisplayListFlag || (this.invalidateDisplayListFlag = !0, this.listenersAttached || this.attachListeners()), this.invalidateDisplayListQueue.insert(t);
      }, e.prototype.validateDisplayList = function () {
        for (var t = this.invalidateDisplayListQueue, e = t.shift(); e;) {
          e.$stage && e.validateDisplayList(), e = t.shift();
        }

        t.isEmpty() && (this.invalidateDisplayListFlag = !1);
      }, e.prototype.attachListeners = function () {
        this.eventDisplay.addEventListener(egret.Event.ENTER_FRAME, this.doPhasedInstantiationCallBack, this), this.eventDisplay.addEventListener(egret.Event.RENDER, this.doPhasedInstantiationCallBack, this), egret.sys.$invalidateRenderFlag = !0, this.listenersAttached = !0;
      }, e.prototype.doPhasedInstantiationCallBack = function (t) {
        this.eventDisplay.removeEventListener(egret.Event.ENTER_FRAME, this.doPhasedInstantiationCallBack, this), this.eventDisplay.removeEventListener(egret.Event.RENDER, this.doPhasedInstantiationCallBack, this), this.doPhasedInstantiation();
      }, e.prototype.doPhasedInstantiation = function () {
        this.invalidatePropertiesFlag && this.validateProperties(), this.invalidateSizeFlag && this.validateSize(), this.invalidateDisplayListFlag && this.validateDisplayList(), this.invalidatePropertiesFlag || this.invalidateSizeFlag || this.invalidateDisplayListFlag ? this.attachListeners() : this.listenersAttached = !1;
      }, e.prototype.validateClient = function (t) {
        var e,
            i = !1,
            n = this.targetLevel;
        this.targetLevel === Number.POSITIVE_INFINITY && (this.targetLevel = t.$nestLevel);

        for (var r = this.invalidatePropertiesQueue, o = this.invalidateSizeQueue, s = this.invalidateDisplayListQueue; !i;) {
          for (i = !0, e = r.removeSmallestChild(t); e;) {
            e.$stage && e.validateProperties(), e = r.removeSmallestChild(t);
          }

          for (r.isEmpty() && (this.invalidatePropertiesFlag = !1), this.invalidateClientPropertiesFlag = !1, e = o.removeLargestChild(t); e;) {
            if (e.$stage && e.validateSize(), this.invalidateClientPropertiesFlag && (e = r.removeSmallestChild(t))) {
              r.insert(e), i = !1;
              break;
            }

            e = o.removeLargestChild(t);
          }

          for (o.isEmpty() && (this.invalidateSizeFlag = !1), this.invalidateClientPropertiesFlag = !1, this.invalidateClientSizeFlag = !1, e = s.removeSmallestChild(t); e;) {
            if (e.$stage && e.validateDisplayList(), this.invalidateClientPropertiesFlag && (e = r.removeSmallestChild(t))) {
              r.insert(e), i = !1;
              break;
            }

            if (this.invalidateClientSizeFlag && (e = o.removeLargestChild(t))) {
              o.insert(e), i = !1;
              break;
            }

            e = s.removeSmallestChild(t);
          }

          s.isEmpty() && (this.invalidateDisplayListFlag = !1);
        }

        n === Number.POSITIVE_INFINITY && (this.targetLevel = Number.POSITIVE_INFINITY);
      }, e;
    }(egret.EventDispatcher);

    t.Validator = e, __reflect(e.prototype, "eui.sys.Validator");

    var i = function () {
      function t() {
        this.depthBins = {}, this.minDepth = 0, this.maxDepth = -1;
      }

      return t.prototype.insert = function (t) {
        var e = t.$nestLevel;
        this.maxDepth < this.minDepth ? this.minDepth = this.maxDepth = e : (e < this.minDepth && (this.minDepth = e), e > this.maxDepth && (this.maxDepth = e));
        var i = this.depthBins[e];
        i || (i = this.depthBins[e] = new n()), i.insert(t);
      }, t.prototype.pop = function () {
        var t,
            e = this.minDepth;

        if (e <= this.maxDepth) {
          for (var i = this.depthBins[this.maxDepth]; !i || 0 === i.length;) {
            if (this.maxDepth--, this.maxDepth < e) return null;
            i = this.depthBins[this.maxDepth];
          }

          for (t = i.pop(); !(i && 0 != i.length || (this.maxDepth--, this.maxDepth < e));) {
            i = this.depthBins[this.maxDepth];
          }
        }

        return t;
      }, t.prototype.shift = function () {
        var t,
            e = this.maxDepth;

        if (this.minDepth <= e) {
          for (var i = this.depthBins[this.minDepth]; !i || 0 === i.length;) {
            if (this.minDepth++, this.minDepth > e) return null;
            i = this.depthBins[this.minDepth];
          }

          for (t = i.pop(); !(i && 0 != i.length || (this.minDepth++, this.minDepth > e));) {
            i = this.depthBins[this.minDepth];
          }
        }

        return t;
      }, t.prototype.removeLargestChild = function (t) {
        for (var e = t.$hashCode, i = t.$nestLevel, n = this.maxDepth, r = i; n >= r;) {
          var o = this.depthBins[n];

          if (o && o.length > 0) {
            if (n === i) {
              if (o.map[e]) return o.remove(t), t;
            } else {
              if (!egret.is(t, "egret.DisplayObjectContainer")) break;

              for (var s = o.items, a = o.length, h = 0; a > h; h++) {
                var l = s[h];
                if (t.contains(l)) return o.remove(l), l;
              }
            }

            n--;
          } else if (n == this.maxDepth && this.maxDepth--, n--, r > n) break;
        }

        return null;
      }, t.prototype.removeSmallestChild = function (t) {
        for (var e = t.$nestLevel, i = e, n = this.maxDepth, r = t.$hashCode; n >= i;) {
          var o = this.depthBins[i];

          if (o && o.length > 0) {
            if (i === e) {
              if (o.map[r]) return o.remove(t), t;
            } else {
              if (!egret.is(t, "egret.DisplayObjectContainer")) break;

              for (var s = o.items, a = o.length, h = 0; a > h; h++) {
                var l = s[h];
                if (t.contains(l)) return o.remove(l), l;
              }
            }

            i++;
          } else if (i == this.minDepth && this.minDepth++, i++, i > n) break;
        }

        return null;
      }, t.prototype.isEmpty = function () {
        return this.minDepth > this.maxDepth;
      }, t;
    }();

    __reflect(i.prototype, "DepthQueue");

    var n = function () {
      function t() {
        this.map = {}, this.items = [], this.length = 0;
      }

      return t.prototype.insert = function (t) {
        var e = t.$hashCode;
        this.map[e] || (this.map[e] = !0, this.length++, this.items.push(t));
      }, t.prototype.pop = function () {
        var t = this.items.pop();
        return t && (this.length--, 0 === this.length ? this.map = {} : this.map[t.$hashCode] = !1), t;
      }, t.prototype.remove = function (t) {
        var e = this.items.indexOf(t);
        e >= 0 && (this.items.splice(e, 1), this.length--, 0 === this.length ? this.map = {} : this.map[t.$hashCode] = !1);
      }, t;
    }();

    __reflect(n.prototype, "DepthBin");
  }(e = t.sys || (t.sys = {}));
}(eui || (eui = {}));
var eui;
!function (t) {
  function e(t, e, i, n) {
    var r = t.prototype;
    r.__meta__ = r.__meta__ || {}, r.__meta__[e] = i, n && (r.__defaultProperty__ = e);
  }

  t.registerProperty = e;
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i(t, i) {
      void 0 === i && (i = []);
      var n = e.call(this) || this;
      return n.name = t, n.overrides = i, n;
    }

    return __extends(i, e), i.prototype.initialize = function (e, i) {
      for (var n = this.overrides, r = n.length, o = 0; r > o; o++) {
        var s = n[o];

        if (s instanceof t.AddItems) {
          var a = e[s.target];
          a && a instanceof t.Image && !a.$parent && (i.addChild(a), i.removeChild(a));
        }
      }
    }, i;
  }(egret.HashObject);

  t.State = e, __reflect(e.prototype, "eui.State");
}(eui || (eui = {})), function (t) {
  var e;
  !function (t) {
    var e = function () {
      function t() {}

      return Object.defineProperty(t.prototype, "states", {
        get: function get() {
          return this.$stateValues.states;
        },
        set: function set(t) {
          t || (t = []);
          var e = this.$stateValues;
          e.states = t;

          for (var i = {}, n = t.length, r = 0; n > r; r++) {
            var o = t[r];
            i[o.name] = o;
          }

          e.statesMap = i, e.parent && this.commitCurrentState();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "currentState", {
        get: function get() {
          return this.$stateValues.currentState;
        },
        set: function set(t) {
          var e = this.$stateValues;
          e.explicitState = t, e.currentState = t, this.commitCurrentState();
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.commitCurrentState = function () {
        var t = this.$stateValues;

        if (t.parent) {
          var e = t.statesMap[t.currentState];

          if (!e) {
            if (!(t.states.length > 0)) return;
            t.currentState = t.states[0].name;
          }

          if (t.oldState != t.currentState) {
            var i = t.parent,
                n = t.statesMap[t.oldState];
            if (n) for (var r = n.overrides, o = r.length, s = 0; o > s; s++) {
              r[s].remove(this, i);
            }
            if (t.oldState = t.currentState, n = t.statesMap[t.currentState]) for (var r = n.overrides, a = r.length, s = 0; a > s; s++) {
              r[s].apply(this, i);
            }
          }
        }
      }, t.prototype.hasState = function (t) {
        return !!this.$stateValues.statesMap[t];
      }, t.prototype.initializeStates = function (t) {
        this.$stateValues.intialized = !0;

        for (var e = this.states, i = e.length, n = 0; i > n; n++) {
          e[n].initialize(this, t);
        }
      }, t;
    }();

    t.StateClient = e, __reflect(e.prototype, "eui.sys.StateClient");

    var i = function () {
      function t() {
        this.intialized = !1, this.statesMap = {}, this.states = [], this.oldState = null, this.explicitState = null, this.currentState = null, this.parent = null, this.stateIsDirty = !1;
      }

      return t;
    }();

    t.StateValues = i, __reflect(i.prototype, "eui.sys.StateValues");
  }(e = t.sys || (t.sys = {}));
}(eui || (eui = {}));
var eui;
!function (t) {
  function e(e, i, n) {
    var r = egret.getImplementation("eui.IAssetAdapter");
    r || (r = new t.DefaultAssetAdapter()), r.getAsset(e, function (t) {
      i.call(n, t);
    }, this);
  }

  function i(e, i) {
    var n = egret.getImplementation("eui.IThemeAdapter");
    n || (n = new t.DefaultThemeAdapter()), n.getTheme(e, function (t) {
      i(t);
    }, function (t) {
      console.log(t);
    }, this);
  }

  t.getAssets = e, t.getTheme = i;
}(eui || (eui = {})), function (t) {
  var e;
  !function (e) {
    function i(t) {
      return 1 === t.a && 0 === t.b && 0 === t.c && 1 === t.d;
    }

    function n(t, e) {
      if ("function" != typeof t[e]) return !1;
      var i = t[e].toString(),
          n = i.indexOf("{"),
          r = i.lastIndexOf("}");
      return i = i.substring(n + 1, r), "" == i.trim();
    }

    function r(t, e) {
      for (var i in e) {
        "prototype" != i && e.hasOwnProperty(i) && (t[i] = e[i]);
      }

      for (var r = t.prototype, o = e.prototype, s = Object.keys(o), a = s.length, h = 0; a > h; h++) {
        var l = s[h];

        if ("__meta__" != l && (!r.hasOwnProperty(l) || n(r, l))) {
          var u = Object.getOwnPropertyDescriptor(o, l);
          Object.defineProperty(r, l, u);
        }
      }
    }

    function o(e, i, n) {
      r(e, h);
      var o = e.prototype;
      o.$super = i.prototype, t.registerProperty(e, "left", "Percentage"), t.registerProperty(e, "right", "Percentage"), t.registerProperty(e, "top", "Percentage"), t.registerProperty(e, "bottom", "Percentage"), t.registerProperty(e, "horizontalCenter", "Percentage"), t.registerProperty(e, "verticalCenter", "Percentage"), n && (o.$childAdded = function (t, e) {
        this.invalidateSize(), this.invalidateDisplayList();
      }, o.$childRemoved = function (t, e) {
        this.invalidateSize(), this.invalidateDisplayList();
      });
    }

    var s = "eui.UIComponent",
        a = new e.Validator(),
        h = function (n) {
      function r() {
        var t = n.call(this) || this;
        return t.initializeUIValues(), t;
      }

      return __extends(r, n), r.prototype.initializeUIValues = function () {
        this.$UIComponent = {
          0: 0 / 0,
          1: 0 / 0,
          2: 0 / 0,
          3: 0 / 0,
          4: 0 / 0,
          5: 0 / 0,
          6: 0 / 0,
          7: 0 / 0,
          8: 0 / 0,
          9: 0 / 0,
          10: 0,
          11: 0,
          12: 0,
          13: 1e5,
          14: 0,
          15: 1e5,
          16: 0,
          17: 0,
          18: 0 / 0,
          19: 0 / 0,
          20: 0,
          21: 0,
          22: 0,
          23: 0,
          24: !0,
          25: !0,
          26: !0,
          27: !1,
          28: !1,
          29: !1
        }, this.$includeInLayout = !0, this.$touchEnabled = !0;
      }, r.prototype.createChildren = function () {}, r.prototype.childrenCreated = function () {}, r.prototype.commitProperties = function () {
        var e = this.$UIComponent;
        (e[22] != e[10] || e[23] != e[11]) && (this.dispatchEventWith(egret.Event.RESIZE), e[22] = e[10], e[23] = e[11]), (e[20] != this.$getX() || e[21] != this.$getY()) && (t.UIEvent.dispatchUIEvent(this, t.UIEvent.MOVE), e[20] = this.$getX(), e[21] = this.$getY());
      }, r.prototype.measure = function () {}, r.prototype.updateDisplayList = function (t, e) {}, Object.defineProperty(r.prototype, "includeInLayout", {
        get: function get() {
          return this.$includeInLayout;
        },
        set: function set(t) {
          t = !!t, this.$includeInLayout !== t && (this.$includeInLayout = !0, this.invalidateParentLayout(), this.$includeInLayout = t);
        },
        enumerable: !0,
        configurable: !0
      }), r.prototype.$onAddToStage = function (e, i) {
        this.$super.$onAddToStage.call(this, e, i), this.checkInvalidateFlag();
        var n = this.$UIComponent;
        n[29] || (n[29] = !0, this.createChildren(), this.childrenCreated(), t.UIEvent.dispatchUIEvent(this, t.UIEvent.CREATION_COMPLETE));
      }, r.prototype.checkInvalidateFlag = function (t) {
        var e = this.$UIComponent;
        e[24] && a.invalidateProperties(this), e[25] && a.invalidateSize(this), e[26] && a.invalidateDisplayList(this);
      }, Object.defineProperty(r.prototype, "left", {
        get: function get() {
          return this.$UIComponent[0];
        },
        set: function set(t) {
          t = t && "number" != typeof t ? t.toString().trim() : +t;
          var e = this.$UIComponent;
          e[0] !== t && (e[0] = t, this.invalidateParentLayout());
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "right", {
        get: function get() {
          return this.$UIComponent[1];
        },
        set: function set(t) {
          t = t && "number" != typeof t ? t.toString().trim() : +t;
          var e = this.$UIComponent;
          e[1] !== t && (e[1] = t, this.invalidateParentLayout());
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "top", {
        get: function get() {
          return this.$UIComponent[2];
        },
        set: function set(t) {
          t = t && "number" != typeof t ? t.toString().trim() : +t;
          var e = this.$UIComponent;
          e[2] !== t && (e[2] = t, this.invalidateParentLayout());
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "bottom", {
        get: function get() {
          return this.$UIComponent[3];
        },
        set: function set(t) {
          t = t && "number" != typeof t ? t.toString().trim() : +t;
          var e = this.$UIComponent;
          e[3] != t && (e[3] = t, this.invalidateParentLayout());
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "horizontalCenter", {
        get: function get() {
          return this.$UIComponent[4];
        },
        set: function set(t) {
          t = t && "number" != typeof t ? t.toString().trim() : +t;
          var e = this.$UIComponent;
          e[4] !== t && (e[4] = t, this.invalidateParentLayout());
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "verticalCenter", {
        get: function get() {
          return this.$UIComponent[5];
        },
        set: function set(t) {
          t = t && "number" != typeof t ? t.toString().trim() : +t;
          var e = this.$UIComponent;
          e[5] !== t && (e[5] = t, this.invalidateParentLayout());
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "percentWidth", {
        get: function get() {
          return this.$UIComponent[6];
        },
        set: function set(t) {
          t = +t;
          var e = this.$UIComponent;
          e[6] !== t && (e[6] = t, this.invalidateParentLayout());
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "percentHeight", {
        get: function get() {
          return this.$UIComponent[7];
        },
        set: function set(t) {
          t = +t;
          var e = this.$UIComponent;
          e[7] !== t && (e[7] = t, this.invalidateParentLayout());
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "explicitWidth", {
        get: function get() {
          return this.$UIComponent[8];
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "explicitHeight", {
        get: function get() {
          return this.$UIComponent[9];
        },
        enumerable: !0,
        configurable: !0
      }), r.prototype.$getWidth = function () {
        return this.validateSizeNow(), this.$UIComponent[10];
      }, r.prototype.$setWidth = function (t) {
        t = +t;
        var e = this.$UIComponent;
        return 0 > t || e[10] === t && e[8] === t ? !1 : (e[8] = t, isNaN(t) && this.invalidateSize(), this.invalidateProperties(), this.invalidateDisplayList(), this.invalidateParentLayout(), !0);
      }, r.prototype.validateSizeNow = function () {
        this.validateSize(!0), this.updateFinalSize();
      }, r.prototype.$getHeight = function () {
        return this.validateSizeNow(), this.$UIComponent[11];
      }, r.prototype.$setHeight = function (t) {
        t = +t;
        var e = this.$UIComponent;
        return 0 > t || e[11] === t && e[9] === t ? !1 : (e[9] = t, isNaN(t) && this.invalidateSize(), this.invalidateProperties(), this.invalidateDisplayList(), this.invalidateParentLayout(), !0);
      }, Object.defineProperty(r.prototype, "minWidth", {
        get: function get() {
          return this.$UIComponent[12];
        },
        set: function set(t) {
          t = +t || 0;
          var e = this.$UIComponent;
          0 > t || e[12] === t || (e[12] = t, this.invalidateSize(), this.invalidateParentLayout());
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "maxWidth", {
        get: function get() {
          return this.$UIComponent[13];
        },
        set: function set(t) {
          t = +t || 0;
          var e = this.$UIComponent;
          0 > t || e[13] === t || (e[13] = t, this.invalidateSize(), this.invalidateParentLayout());
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "minHeight", {
        get: function get() {
          return this.$UIComponent[14];
        },
        set: function set(t) {
          t = +t || 0;
          var e = this.$UIComponent;
          0 > t || e[14] === t || (e[14] = t, this.invalidateSize(), this.invalidateParentLayout());
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "maxHeight", {
        get: function get() {
          return this.$UIComponent[15];
        },
        set: function set(t) {
          t = +t || 0;
          var e = this.$UIComponent;
          0 > t || e[15] === t || (e[15] = t, this.invalidateSize(), this.invalidateParentLayout());
        },
        enumerable: !0,
        configurable: !0
      }), r.prototype.setMeasuredSize = function (t, e) {
        var i = this.$UIComponent;
        i[16] = Math.ceil(+t || 0), i[17] = Math.ceil(+e || 0);
      }, r.prototype.setActualSize = function (t, e) {
        var i = !1,
            n = this.$UIComponent;
        n[10] !== t && (n[10] = t, i = !0), n[11] !== e && (n[11] = e, i = !0), i && (this.invalidateDisplayList(), this.dispatchEventWith(egret.Event.RESIZE));
      }, r.prototype.$updateUseTransform = function () {
        this.$super.$updateUseTransform.call(this), this.invalidateParentLayout();
      }, r.prototype.$setMatrix = function (t, e) {
        return void 0 === e && (e = !0), this.$super.$setMatrix.call(this, t, e), this.invalidateParentLayout(), !0;
      }, r.prototype.$setAnchorOffsetX = function (t) {
        return this.$super.$setAnchorOffsetX.call(this, t), this.invalidateParentLayout(), !0;
      }, r.prototype.$setAnchorOffsetY = function (t) {
        return this.$super.$setAnchorOffsetY.call(this, t), this.invalidateParentLayout(), !0;
      }, r.prototype.$setX = function (t) {
        var e = this.$super.$setX.call(this, t);
        return e && (this.invalidateParentLayout(), this.invalidateProperties()), e;
      }, r.prototype.$setY = function (t) {
        var e = this.$super.$setY.call(this, t);
        return e && (this.invalidateParentLayout(), this.invalidateProperties()), e;
      }, r.prototype.invalidateProperties = function () {
        var t = this.$UIComponent;
        t[24] || (t[24] = !0, this.$stage && a.invalidateProperties(this));
      }, r.prototype.validateProperties = function () {
        var t = this.$UIComponent;
        t[24] && (this.commitProperties(), t[24] = !1);
      }, r.prototype.invalidateSize = function () {
        var t = this.$UIComponent;
        t[25] || (t[25] = !0, this.$stage && a.invalidateSize(this));
      }, r.prototype.validateSize = function (t) {
        if (t) {
          var e = this.$children;
          if (e) for (var i = e.length, n = 0; i > n; n++) {
            var r = e[n];
            egret.is(r, s) && r.validateSize(!0);
          }
        }

        var o = this.$UIComponent;

        if (o[25]) {
          var a = this.measureSizes();
          a && (this.invalidateDisplayList(), this.invalidateParentLayout()), o[25] = !1;
        }
      }, r.prototype.measureSizes = function () {
        var t = !1,
            e = this.$UIComponent;
        if (!e[25]) return t;
        (isNaN(e[8]) || isNaN(e[9])) && (this.measure(), e[16] < e[12] && (e[16] = e[12]), e[16] > e[13] && (e[16] = e[13]), e[17] < e[14] && (e[17] = e[14]), e[17] > e[15] && (e[17] = e[15]));
        var i = this.getPreferredUWidth(),
            n = this.getPreferredUHeight();
        return (i !== e[18] || n !== e[19]) && (e[18] = i, e[19] = n, t = !0), t;
      }, r.prototype.invalidateDisplayList = function () {
        var t = this.$UIComponent;
        t[26] || (t[26] = !0, this.$stage && a.invalidateDisplayList(this));
      }, r.prototype.validateDisplayList = function () {
        var t = this.$UIComponent;
        t[26] && (this.updateFinalSize(), this.updateDisplayList(t[10], t[11]), t[26] = !1);
      }, r.prototype.updateFinalSize = function () {
        var t = 0,
            e = 0,
            i = this.$UIComponent;
        t = i[27] ? i[10] : isNaN(i[8]) ? i[16] : i[8], e = i[28] ? i[11] : isNaN(i[9]) ? i[17] : i[9], this.setActualSize(t, e);
      }, r.prototype.validateNow = function () {
        this.$stage && a.validateClient(this);
      }, r.prototype.invalidateParentLayout = function () {
        var t = this.$parent;
        t && this.$includeInLayout && egret.is(t, s) && (t.invalidateSize(), t.invalidateDisplayList());
      }, r.prototype.setLayoutBoundsSize = function (t, n) {
        if (n = +n, t = +t, !(0 > n || 0 > t)) {
          var r,
              o,
              s = this.$UIComponent,
              a = s[13],
              h = s[15],
              l = Math.min(s[12], a),
              u = Math.min(s[14], h);
          isNaN(t) ? (s[27] = !1, r = this.getPreferredUWidth()) : (s[27] = !0, r = Math.max(l, Math.min(a, t))), isNaN(n) ? (s[28] = !1, o = this.getPreferredUHeight()) : (s[28] = !0, o = Math.max(u, Math.min(h, n)));
          var p = this.getAnchorMatrix();
          if (i(p)) return void this.setActualSize(r, o);
          var c = e.MatrixUtil.fitBounds(t, n, p, s[8], s[9], this.getPreferredUWidth(), this.getPreferredUHeight(), l, u, a, h);
          c || (c = egret.Point.create(l, u)), this.setActualSize(c.x, c.y), egret.Point.release(c);
        }
      }, r.prototype.setLayoutBoundsPosition = function (e, n) {
        var r = this.$getMatrix();

        if (!i(r) || 0 != this.anchorOffsetX || 0 != this.anchorOffsetY) {
          var o = egret.$TempRectangle;
          this.getLayoutBounds(o), e += this.$getX() - o.x, n += this.$getY() - o.y;
        }

        var s = this.$super.$setX.call(this, e);
        (this.$super.$setY.call(this, n) || s) && t.UIEvent.dispatchUIEvent(this, t.UIEvent.MOVE);
      }, r.prototype.getLayoutBounds = function (t) {
        var e,
            i = this.$UIComponent;
        e = i[27] ? i[10] : isNaN(i[8]) ? i[16] : i[8];
        var n;
        n = i[28] ? i[11] : isNaN(i[9]) ? i[17] : i[9], this.applyMatrix(t, e, n);
      }, r.prototype.getPreferredUWidth = function () {
        var t = this.$UIComponent;
        return isNaN(t[8]) ? t[16] : t[8];
      }, r.prototype.getPreferredUHeight = function () {
        var t = this.$UIComponent;
        return isNaN(t[9]) ? t[17] : t[9];
      }, r.prototype.getPreferredBounds = function (t) {
        var e = this.getPreferredUWidth(),
            i = this.getPreferredUHeight();
        this.applyMatrix(t, e, i);
      }, r.prototype.applyMatrix = function (t, e, n) {
        t.setTo(0, 0, e, n);
        var r = this.getAnchorMatrix();
        i(r) ? (t.x += r.tx, t.y += r.ty) : r.$transformBounds(t);
      }, r.prototype.getAnchorMatrix = function () {
        var t = this.$getMatrix(),
            e = this.anchorOffsetX,
            i = this.anchorOffsetY;

        if (0 != e || 0 != i) {
          var n = egret.$TempMatrix;
          return t.$preMultiplyInto(n.setTo(1, 0, 0, 1, -e, -i), n), n;
        }

        return t;
      }, r;
    }(egret.DisplayObject);

    e.UIComponentImpl = h, __reflect(h.prototype, "eui.sys.UIComponentImpl", ["eui.UIComponent", "egret.DisplayObject"]), e.mixin = r, e.implementUIComponent = o;
  }(e = t.sys || (t.sys = {}));
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i.$layout = null, i.$stateValues = new t.sys.StateValues(), i.initializeUIValues(), i.$Group = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: !1,
        5: !1
      }, i.$stateValues.parent = i, i;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "elementsContent", {
      set: function set(t) {
        if (t) for (var e = t.length, i = 0; e > i; i++) {
          this.addChild(t[i]);
        }
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "layout", {
      get: function get() {
        return this.$layout;
      },
      set: function set(t) {
        this.$setLayout(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setLayout = function (t) {
      return this.$layout == t ? !1 : (this.$layout && (this.$layout.target = null), this.$layout = t, t && (t.target = this), this.invalidateSize(), this.invalidateDisplayList(), !0);
    }, Object.defineProperty(i.prototype, "contentWidth", {
      get: function get() {
        return this.$Group[0];
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "contentHeight", {
      get: function get() {
        return this.$Group[1];
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.setContentSize = function (e, i) {
      e = Math.ceil(+e || 0), i = Math.ceil(+i || 0);
      var n = this.$Group,
          r = n[0] !== e,
          o = n[1] !== i;
      (r || o) && (n[0] = e, n[1] = i, r && t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "contentWidth"), o && t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "contentHeight"));
    }, Object.defineProperty(i.prototype, "scrollEnabled", {
      get: function get() {
        return this.$Group[4];
      },
      set: function set(t) {
        t = !!t;
        var e = this.$Group;
        t !== e[4] && (e[4] = t, this.updateScrollRect());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "scrollH", {
      get: function get() {
        return this.$Group[2];
      },
      set: function set(e) {
        e = +e || 0;
        var i = this.$Group;
        e !== i[2] && (i[2] = e, this.updateScrollRect() && this.$layout && this.$layout.scrollPositionChanged(), t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "scrollH"));
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "scrollV", {
      get: function get() {
        return this.$Group[3];
      },
      set: function set(e) {
        e = +e || 0;
        var i = this.$Group;
        e != i[3] && (i[3] = e, this.updateScrollRect() && this.$layout && this.$layout.scrollPositionChanged(), t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "scrollV"));
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.updateScrollRect = function () {
      var t = this.$Group,
          e = t[4];

      if (e) {
        var i = this.$UIComponent;
        this.scrollRect = egret.$TempRectangle.setTo(t[2], t[3], i[10], i[11]);
      } else this.$scrollRect && (this.scrollRect = null);

      return e;
    }, Object.defineProperty(i.prototype, "numElements", {
      get: function get() {
        return this.$children.length;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.getElementAt = function (t) {
      return this.$children[t];
    }, i.prototype.getVirtualElementAt = function (t) {
      return this.getElementAt(t);
    }, i.prototype.setVirtualElementIndicesInView = function (t, e) {}, Object.defineProperty(i.prototype, "touchThrough", {
      get: function get() {
        return this.$Group[5];
      },
      set: function set(t) {
        this.$Group[5] = !!t;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$hitTest = function (t, i) {
      var n = e.prototype.$hitTest.call(this, t, i);
      if (n || this.$Group[5]) return n;
      if (!this.$visible || !this.touchEnabled || 0 === this.scaleX || 0 === this.scaleY || 0 === this.width || 0 === this.height) return null;
      var r = this.globalToLocal(t, i, egret.$TempPoint),
          o = this.$UIComponent,
          s = egret.$TempRectangle.setTo(0, 0, o[10], o[11]),
          a = this.$scrollRect;
      return a && (s.x = a.x, s.y = a.y), s.contains(r.x, r.y) ? this : null;
    }, i.prototype.invalidateState = function () {
      var t = this.$stateValues;
      t.stateIsDirty || (t.stateIsDirty = !0, this.invalidateProperties());
    }, i.prototype.getCurrentState = function () {
      return "";
    }, i.prototype.createChildren = function () {
      this.$layout || this.$setLayout(new t.BasicLayout()), this.initializeStates(this.$stage);
    }, i.prototype.childrenCreated = function () {}, i.prototype.commitProperties = function () {
      t.sys.UIComponentImpl.prototype.commitProperties.call(this);
      var e = this.$stateValues;
      e.stateIsDirty && (e.stateIsDirty = !1, e.explicitState || (e.currentState = this.getCurrentState(), this.commitCurrentState()));
    }, i.prototype.measure = function () {
      return this.$layout ? void this.$layout.measure() : void this.setMeasuredSize(0, 0);
    }, i.prototype.updateDisplayList = function (t, e) {
      this.$layout && this.$layout.updateDisplayList(t, e), this.updateScrollRect();
    }, i.prototype.invalidateParentLayout = function () {}, i.prototype.setMeasuredSize = function (t, e) {}, i.prototype.invalidateProperties = function () {}, i.prototype.validateProperties = function () {}, i.prototype.invalidateSize = function () {}, i.prototype.validateSize = function (t) {}, i.prototype.invalidateDisplayList = function () {}, i.prototype.validateDisplayList = function () {}, i.prototype.validateNow = function () {}, i.prototype.setLayoutBoundsSize = function (t, e) {}, i.prototype.setLayoutBoundsPosition = function (t, e) {}, i.prototype.getLayoutBounds = function (t) {}, i.prototype.getPreferredBounds = function (t) {}, i;
  }(egret.DisplayObjectContainer);

  t.Group = e, __reflect(e.prototype, "eui.Group", ["eui.IViewport", "eui.UIComponent", "egret.DisplayObject"]), t.sys.implementUIComponent(e, egret.DisplayObjectContainer, !0), t.sys.mixin(e, t.sys.StateClient), t.registerProperty(e, "elementsContent", "Array", !0), t.registerProperty(e, "states", "State[]");
}(eui || (eui = {}));
var eui;
!function (t) {
  function e(t, e) {
    if (t.hasOwnProperty(i)) t[i].push(e);else {
      var n = [e];
      t[i] && (n = t[i].concat(n)), t[i] = n;
    }
  }

  var i = "__bindables__";
  t.registerBindable = e;
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t.initializeUIValues(), t.$Component = {
        0: null,
        1: null,
        2: "",
        3: !0,
        4: !1,
        5: !1,
        6: !0,
        7: !0,
        8: null
      }, t.$touchEnabled = !0, t;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "hostComponentKey", {
      get: function get() {
        return this.$Component[0];
      },
      set: function set(t) {
        this.$Component[0] = t;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "skinName", {
      get: function get() {
        return this.$Component[1];
      },
      set: function set(t) {
        var e = this.$Component;

        if (e[5] = !0, e[1] != t) {
          if (t) e[1] = t;else {
            var i = egret.getImplementation("eui.Theme");

            if (i) {
              var n = i.getSkinName(this);
              n && (e[1] = n);
            }
          }
          this.$parseSkinName();
        }
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$parseSkinName = function () {
      var t,
          e = this.skinName;
      if (e) if (e.prototype) t = new e();else if ("string" == typeof e) {
        var i = void 0,
            n = e.trim();
        if ("<" == n.charAt(0)) i = EXML.parse(n);else if (i = egret.getDefinitionByName(e), !i && -1 != n.toLowerCase().indexOf(".exml")) return void EXML.load(e, this.onExmlLoaded, this, !0);
        i && (t = new i());
      } else t = e;
      this.setSkin(t);
    }, i.prototype.onExmlLoaded = function (t, e) {
      if (this.skinName == e) {
        var i = new t();
        this.setSkin(i);
      }
    }, Object.defineProperty(i.prototype, "skin", {
      get: function get() {
        return this.$Component[8];
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.setSkin = function (e) {
      !e || e instanceof t.Skin || (e = null);
      var i = this.$Component,
          n = i[8];

      if (n) {
        for (var r = n.skinParts, o = r.length, s = 0; o > s; s++) {
          var a = r[s];
          this[a] && this.setSkinPart(a, null);
        }

        var h = n.$elementsContent;

        if (h) {
          o = h.length;

          for (var s = 0; o > s; s++) {
            var l = h[s];
            l.$parent == this && this.removeChild(l);
          }
        }

        n.hostComponent = null;
      }

      if (i[8] = e, e) {
        for (var r = e.skinParts, u = r.length, s = 0; u > s; s++) {
          var a = r[s],
              p = e[a];
          p && this.setSkinPart(a, p);
        }

        var h = e.$elementsContent;
        if (h) for (var s = h.length - 1; s >= 0; s--) {
          this.addChildAt(h[s], 0);
        }
        e.hostComponent = this;
      }

      this.invalidateSize(), this.invalidateDisplayList(), this.dispatchEventWith(egret.Event.COMPLETE);
    }, i.prototype.setSkinPart = function (t, e) {
      var i = this[t];
      i && this.partRemoved(t, i), this[t] = e, e && this.partAdded(t, e);
    }, i.prototype.partAdded = function (t, e) {}, i.prototype.partRemoved = function (t, e) {}, i.prototype.$setTouchChildren = function (t) {
      t = !!t;
      var i = this.$Component;
      return i[6] = t, i[3] ? (i[6] = t, e.prototype.$setTouchChildren.call(this, t)) : !0;
    }, i.prototype.$setTouchEnabled = function (t) {
      t = !!t;
      var i = this.$Component;
      i[7] = t, i[3] && e.prototype.$setTouchEnabled.call(this, t);
    }, Object.defineProperty(i.prototype, "enabled", {
      get: function get() {
        return this.$Component[3];
      },
      set: function set(t) {
        t = !!t, this.$setEnabled(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setEnabled = function (t) {
      var e = this.$Component;
      return t === e[3] ? !1 : (e[3] = t, t ? (this.$touchEnabled = e[7], this.$touchChildren = e[6]) : (this.$touchEnabled = !1, this.$touchChildren = !1), this.invalidateState(), !0);
    }, Object.defineProperty(i.prototype, "currentState", {
      get: function get() {
        var t = this.$Component;
        return t[2] ? t[2] : this.getCurrentState();
      },
      set: function set(t) {
        var e = this.$Component;
        t != e[2] && (e[2] = t, this.invalidateState());
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.invalidateState = function () {
      var t = this.$Component;
      t[4] || (t[4] = !0, this.invalidateProperties());
    }, i.prototype.getCurrentState = function () {
      return "";
    }, i.prototype.createChildren = function () {
      var t = this.$Component;

      if (!t[1]) {
        var e = egret.getImplementation("eui.Theme");

        if (e) {
          var i = e.getSkinName(this);
          i && (t[1] = i, this.$parseSkinName());
        }
      }
    }, i.prototype.childrenCreated = function () {}, i.prototype.commitProperties = function () {
      t.sys.UIComponentImpl.prototype.commitProperties.call(this);
      var e = this.$Component;
      e[4] && (e[4] = !1, e[8] && (e[8].currentState = this.currentState));
    }, i.prototype.measure = function () {
      t.sys.measure(this);
      var e = this.$Component[8];

      if (e) {
        var i = this.$UIComponent;
        isNaN(e.width) ? (i[16] < e.minWidth && (i[16] = e.minWidth), i[16] > e.maxWidth && (i[16] = e.maxWidth)) : i[16] = e.width, isNaN(e.height) ? (i[17] < e.minHeight && (i[17] = e.minHeight), i[17] > e.maxHeight && (i[17] = e.maxHeight)) : i[17] = e.height;
      }
    }, i.prototype.updateDisplayList = function (e, i) {
      t.sys.updateDisplayList(this, e, i);
    }, i.prototype.invalidateParentLayout = function () {}, i.prototype.setMeasuredSize = function (t, e) {}, i.prototype.invalidateProperties = function () {}, i.prototype.validateProperties = function () {}, i.prototype.invalidateSize = function () {}, i.prototype.validateSize = function (t) {}, i.prototype.invalidateDisplayList = function () {}, i.prototype.validateDisplayList = function () {}, i.prototype.validateNow = function () {}, i.prototype.setLayoutBoundsSize = function (t, e) {}, i.prototype.setLayoutBoundsPosition = function (t, e) {}, i.prototype.getLayoutBounds = function (t) {}, i.prototype.getPreferredBounds = function (t) {}, i;
  }(egret.DisplayObjectContainer);

  t.Component = e, __reflect(e.prototype, "eui.Component", ["eui.UIComponent", "egret.DisplayObject"]), t.registerProperty(e, "skinName", "Class"), t.sys.implementUIComponent(e, egret.DisplayObjectContainer, !0);
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t.$dataProviderChanged = !1, t.$dataProvider = null, t.$indexToRenderer = [], t.$DataGroup = {
        0: !0,
        1: !1,
        2: {},
        3: {},
        4: !1,
        5: !1,
        6: null,
        7: null,
        8: !1,
        9: null,
        10: !1,
        11: !1,
        12: null,
        13: null,
        14: !1
      }, t;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "useVirtualLayout", {
      get: function get() {
        return this.$layout ? this.$layout.$useVirtualLayout : this.$DataGroup[0];
      },
      set: function set(t) {
        t = !!t;
        var e = this.$DataGroup;
        t !== e[0] && (e[0] = t, this.$layout && (this.$layout.useVirtualLayout = t));
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setLayout = function (t) {
      if (t == this.$layout) return !1;
      this.$layout && (this.$layout.setTypicalSize(0, 0), this.$layout.removeEventListener("useVirtualLayoutChanged", this.onUseVirtualLayoutChanged, this)), this.$layout && t && this.$layout.$useVirtualLayout != t.$useVirtualLayout && this.onUseVirtualLayoutChanged();
      var i = e.prototype.$setLayout.call(this, t);

      if (t) {
        var n = this.$DataGroup[9];
        n && t.setTypicalSize(n.width, n.height), t.useVirtualLayout = this.$DataGroup[0], t.addEventListener("useVirtualLayoutChanged", this.onUseVirtualLayoutChanged, this);
      }

      return i;
    }, i.prototype.onUseVirtualLayoutChanged = function (t) {
      var e = this.$DataGroup;
      e[1] = !0, e[10] = !0, this.removeDataProviderListener(), this.invalidateProperties();
    }, i.prototype.setVirtualElementIndicesInView = function (t, e) {
      if (this.$layout && this.$layout.$useVirtualLayout) for (var i = this.$indexToRenderer, n = Object.keys(i), r = n.length, o = 0; r > o; o++) {
        var s = +n[o];
        (t > s || s > e) && this.freeRendererByIndex(s);
      }
    }, i.prototype.getElementAt = function (t) {
      return this.$indexToRenderer[t];
    }, i.prototype.getVirtualElementAt = function (t) {
      if (t = 0 | +t, 0 > t || t >= this.$dataProvider.length) return null;
      var e = this.$indexToRenderer[t];

      if (!e) {
        var i = this.$dataProvider.getItemAt(t);
        e = this.createVirtualRenderer(i), this.$indexToRenderer[t] = e, this.updateRenderer(e, t, i);
        var n = this.$DataGroup;
        n[4] && (e.validateNow(), n[4] = !1, this.rendererAdded(e, t, i));
      }

      return e;
    }, i.prototype.freeRendererByIndex = function (t) {
      var e = this.$indexToRenderer[t];
      e && (delete this.$indexToRenderer[t], this.doFreeRenderer(e));
    }, i.prototype.doFreeRenderer = function (t) {
      var e = this.$DataGroup,
          i = e[2][t.$hashCode],
          n = i.$hashCode;
      e[3][n] || (e[3][n] = []), e[3][n].push(t), t.visible = !1;
    }, i.prototype.invalidateSize = function () {
      this.$DataGroup[4] || e.prototype.invalidateSize.call(this);
    }, i.prototype.createVirtualRenderer = function (t) {
      var e,
          i = this.itemToRendererClass(t),
          n = i.$hashCode,
          r = this.$DataGroup,
          o = r[3];
      return o[n] && o[n].length > 0 ? (e = o[n].pop(), e.visible = !0, this.invalidateDisplayList(), e) : (r[4] = !0, this.createOneRenderer(i));
    }, i.prototype.createOneRenderer = function (t) {
      var e = new t(),
          i = this.$DataGroup;
      return i[2][e.$hashCode] = t, egret.is(e, "eui.IItemRenderer") ? (i[13] && this.setItemRenderSkinName(e, i[13]), this.addChild(e), e) : null;
    }, i.prototype.setItemRenderSkinName = function (e, i) {
      if (e && e instanceof t.Component) {
        var n = e;
        n.$Component[5] || (n.skinName = i, n.$Component[5] = !1);
      }
    }, Object.defineProperty(i.prototype, "dataProvider", {
      get: function get() {
        return this.$dataProvider;
      },
      set: function set(t) {
        this.$setDataProvider(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setDataProvider = function (t) {
      return this.$dataProvider == t || t && !t.getItemAt ? !1 : (this.removeDataProviderListener(), this.$dataProvider = t, this.$dataProviderChanged = !0, this.$DataGroup[10] = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList(), !0);
    }, i.prototype.removeDataProviderListener = function () {
      this.$dataProvider && this.$dataProvider.removeEventListener(t.CollectionEvent.COLLECTION_CHANGE, this.onCollectionChange, this);
    }, i.prototype.onCollectionChange = function (e) {
      switch (e.kind) {
        case t.CollectionEventKind.ADD:
          this.itemAddedHandler(e.items, e.location);
          break;

        case t.CollectionEventKind.REMOVE:
          this.itemRemovedHandler(e.items, e.location);
          break;

        case t.CollectionEventKind.UPDATE:
        case t.CollectionEventKind.REPLACE:
          this.itemUpdatedHandler(e.items[0], e.location);
          break;

        case t.CollectionEventKind.RESET:
        case t.CollectionEventKind.REFRESH:
          if (this.$layout && this.$layout.$useVirtualLayout) for (var i = this.$indexToRenderer, n = Object.keys(i), r = n.length, o = r - 1; o >= 0; o--) {
            var s = +n[o];
            this.freeRendererByIndex(s);
          }
          this.$dataProviderChanged = !0, this.invalidateProperties();
      }

      this.invalidateSize(), this.invalidateDisplayList();
    }, i.prototype.itemAddedHandler = function (t, e) {
      for (var i = t.length, n = 0; i > n; n++) {
        this.itemAdded(t[n], e + n);
      }

      this.resetRenderersIndices();
    }, i.prototype.itemRemovedHandler = function (t, e) {
      for (var i = t.length, n = i - 1; n >= 0; n--) {
        this.itemRemoved(t[n], e + n);
      }

      this.resetRenderersIndices();
    }, i.prototype.itemAdded = function (t, e) {
      if (this.$layout && this.$layout.elementAdded(e), this.$layout && this.$layout.$useVirtualLayout) return void this.$indexToRenderer.splice(e, 0, null);
      var i = this.createVirtualRenderer(t);

      if (this.$indexToRenderer.splice(e, 0, i), i) {
        this.updateRenderer(i, e, t);
        var n = this.$DataGroup;
        n[4] && (n[4] = !1, this.rendererAdded(i, e, t));
      }
    }, i.prototype.itemRemoved = function (t, e) {
      this.$layout && this.$layout.elementRemoved(e);
      var i = this.$indexToRenderer[e];
      this.$indexToRenderer.length > e && this.$indexToRenderer.splice(e, 1), i && (this.$layout && this.$layout.$useVirtualLayout ? this.doFreeRenderer(i) : (this.rendererRemoved(i, e, t), this.removeChild(i)));
    }, i.prototype.resetRenderersIndices = function () {
      var t = this.$indexToRenderer;
      if (0 != t.length) if (this.$layout && this.$layout.$useVirtualLayout) for (var e = Object.keys(t), i = e.length, n = 0; i > n; n++) {
        var r = +e[n];
        this.resetRendererItemIndex(r);
      } else for (var o = t.length, r = 0; o > r; r++) {
        this.resetRendererItemIndex(r);
      }
    }, i.prototype.itemUpdatedHandler = function (t, e) {
      if (!this.$DataGroup[11]) {
        var i = this.$indexToRenderer[e];
        i && this.updateRenderer(i, e, t);
      }
    }, i.prototype.resetRendererItemIndex = function (t) {
      var e = this.$indexToRenderer[t];
      e && (e.itemIndex = t);
    }, Object.defineProperty(i.prototype, "itemRenderer", {
      get: function get() {
        return this.$DataGroup[6];
      },
      set: function set(t) {
        var e = this.$DataGroup;
        e[6] != t && (e[6] = t, e[5] = !0, e[8] = !0, e[10] = !0, this.removeDataProviderListener(), this.invalidateProperties());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "itemRendererSkinName", {
      get: function get() {
        return this.$DataGroup[13];
      },
      set: function set(t) {
        var e = this.$DataGroup;
        e[13] != t && (e[13] = t, this.$UIComponent[29] && (e[14] = !0, this.invalidateProperties()));
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "itemRendererFunction", {
      get: function get() {
        return this.$DataGroup[7];
      },
      set: function set(t) {
        var e = this.$DataGroup;
        e[7] != t && (e[7] = t, e[5] = !0, e[8] = !0, this.removeDataProviderListener(), this.invalidateProperties());
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.itemToRendererClass = function (e) {
      var i,
          n = this.$DataGroup;
      return n[7] && (i = n[7](e)), i || (i = n[6]), i || (i = t.ItemRenderer), i.$hashCode || (i.$hashCode = egret.$hashCount++), i;
    }, i.prototype.createChildren = function () {
      if (!this.$layout) {
        var i = new t.VerticalLayout();
        i.gap = 0, i.horizontalAlign = t.JustifyAlign.CONTENT_JUSTIFY, this.$setLayout(i);
      }

      e.prototype.createChildren.call(this);
    }, i.prototype.commitProperties = function () {
      var i = this.$DataGroup;

      if ((i[5] || this.$dataProviderChanged || i[1]) && (this.removeAllRenderers(), this.$layout && this.$layout.clearVirtualLayoutCache(), this.setTypicalLayoutRect(null), i[1] = !1, i[5] = !1, this.$dataProvider && this.$dataProvider.addEventListener(t.CollectionEvent.COLLECTION_CHANGE, this.onCollectionChange, this), this.$layout && this.$layout.$useVirtualLayout ? (this.invalidateSize(), this.invalidateDisplayList()) : this.createRenderers(), this.$dataProviderChanged && (this.$dataProviderChanged = !1, this.scrollV = this.scrollH = 0)), e.prototype.commitProperties.call(this), i[8] && (i[8] = !1, this.$dataProvider && this.$dataProvider.length > 0 && (i[12] = this.$dataProvider.getItemAt(0), this.measureRendererSize())), i[14]) {
        i[14] = !1;

        for (var n = i[13], r = this.$indexToRenderer, o = Object.keys(r), s = o.length, a = 0; s > a; a++) {
          var h = o[a];
          this.setItemRenderSkinName(r[h], n);
        }

        var l = i[3];
        o = Object.keys(l), s = o.length;

        for (var a = 0; s > a; a++) {
          for (var u = o[a], p = l[u], c = p.length, d = 0; c > d; d++) {
            this.setItemRenderSkinName(p[d], n);
          }
        }
      }
    }, i.prototype.measure = function () {
      this.$layout && this.$layout.$useVirtualLayout && this.ensureTypicalLayoutElement(), e.prototype.measure.call(this);
    }, i.prototype.updateDisplayList = function (t, i) {
      var n = this.$layout && this.$layout.$useVirtualLayout;
      n && this.ensureTypicalLayoutElement(), e.prototype.updateDisplayList.call(this, t, i);
      var r = this.$DataGroup;

      if (n) {
        var o = r[9];

        if (o) {
          var s = this.$indexToRenderer[0];

          if (s) {
            var a = egret.$TempRectangle;
            s.getPreferredBounds(a), (a.width != o.width || a.height != o.height) && (r[9] = null);
          }
        }
      }
    }, i.prototype.ensureTypicalLayoutElement = function () {
      this.$DataGroup[9] || this.$dataProvider && this.$dataProvider.length > 0 && (this.$DataGroup[12] = this.$dataProvider.getItemAt(0), this.measureRendererSize());
    }, i.prototype.measureRendererSize = function () {
      var t = this.$DataGroup;
      if (void 0 == t[12]) return void this.setTypicalLayoutRect(null);
      var e = this.createVirtualRenderer(t[12]);
      if (!e) return void this.setTypicalLayoutRect(null);
      this.updateRenderer(e, 0, t[12]), e.validateNow();
      var i = egret.$TempRectangle;
      e.getPreferredBounds(i);
      var n = new egret.Rectangle(0, 0, i.width, i.height);
      this.$layout && this.$layout.$useVirtualLayout ? (t[4] && this.rendererAdded(e, 0, t[12]), this.doFreeRenderer(e)) : this.removeChild(e), this.setTypicalLayoutRect(n), t[4] = !1;
    }, i.prototype.setTypicalLayoutRect = function (t) {
      this.$DataGroup[9] = t, this.$layout && (t ? this.$layout.setTypicalSize(t.width, t.height) : this.$layout.setTypicalSize(0, 0));
    }, i.prototype.removeAllRenderers = function () {
      for (var t = this.$indexToRenderer, e = Object.keys(t), i = e.length, n = 0; i > n; n++) {
        var r = e[n],
            o = t[r];
        o && (this.rendererRemoved(o, o.itemIndex, o.data), this.removeChild(o));
      }

      this.$indexToRenderer = [];
      var s = this.$DataGroup;

      if (s[10]) {
        for (var a = s[3], h = Object.keys(a), l = h.length, n = 0; l > n; n++) {
          for (var u = h[n], p = a[u], c = p.length, d = 0; c > d; d++) {
            var o = p[d];
            this.rendererRemoved(o, o.itemIndex, o.data), this.removeChild(o);
          }
        }

        s[3] = {}, s[2] = {}, s[10] = !1;
      }
    }, i.prototype.createRenderers = function () {
      if (this.$dataProvider) for (var t = 0, e = this.$dataProvider.length, i = 0; e > i; i++) {
        var n = this.$dataProvider.getItemAt(i),
            r = this.itemToRendererClass(n),
            o = this.createOneRenderer(r);
        o && (this.$indexToRenderer[t] = o, this.updateRenderer(o, t, n), this.rendererAdded(o, t, n), t++);
      }
    }, i.prototype.updateRenderer = function (t, e, i) {
      var n = this.$DataGroup;
      return n[11] = !0, t.itemIndex = e, t.parent == this && this.setChildIndex(t, e), t.data = i, n[11] = !1, t;
    }, Object.defineProperty(i.prototype, "numElements", {
      get: function get() {
        return this.$dataProvider ? this.$dataProvider.length : 0;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.rendererAdded = function (t, e, i) {}, i.prototype.rendererRemoved = function (t, e, i) {}, i;
  }(t.Group);

  t.DataGroup = e, __reflect(e.prototype, "eui.DataGroup"), t.registerProperty(e, "itemRenderer", "Class"), t.registerProperty(e, "itemRendererSkinName", "Class"), t.registerProperty(e, "dataProvider", "eui.ICollection", !0);
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e() {
      var e = t.call(this) || this;
      return e.labelDisplay = null, e._label = "", e.iconDisplay = null, e._icon = null, e.touchCaptured = !1, e.touchChildren = !1, e.addEventListener(egret.TouchEvent.TOUCH_BEGIN, e.onTouchBegin, e), e;
    }

    return __extends(e, t), Object.defineProperty(e.prototype, "label", {
      get: function get() {
        return this._label;
      },
      set: function set(t) {
        this._label = t, this.labelDisplay && (this.labelDisplay.text = t);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "icon", {
      get: function get() {
        return this._icon;
      },
      set: function set(t) {
        this._icon = t, this.iconDisplay && (this.iconDisplay.source = t);
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.onTouchCancle = function (t) {
      var e = t.$currentTarget;
      e.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this), e.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this), this.touchCaptured = !1, this.invalidateState();
    }, e.prototype.onTouchBegin = function (t) {
      this.$stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this), this.$stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this), this.touchCaptured = !0, this.invalidateState(), t.updateAfterEvent();
    }, e.prototype.onStageTouchEnd = function (t) {
      var e = t.$currentTarget;
      e.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this), e.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this), this.contains(t.target) && this.buttonReleased(), this.touchCaptured = !1, this.invalidateState();
    }, e.prototype.getCurrentState = function () {
      return this.enabled ? this.touchCaptured ? "down" : "up" : "disabled";
    }, e.prototype.partAdded = function (t, e) {
      e === this.labelDisplay ? this.labelDisplay.text = this._label : e == this.iconDisplay && (this.iconDisplay.source = this._icon);
    }, e.prototype.buttonReleased = function () {}, e;
  }(t.Component);

  t.Button = e, __reflect(e.prototype, "eui.Button");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t.$Range = {
        0: 100,
        1: !1,
        2: 0,
        3: !1,
        4: 0,
        5: 0,
        6: !1,
        7: 1,
        8: !1,
        9: !1
      }, t;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "maximum", {
      get: function get() {
        return this.$Range[0];
      },
      set: function set(t) {
        t = +t || 0;
        var e = this.$Range;
        t !== e[0] && (e[0] = t, e[1] = !0, this.invalidateProperties(), this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "minimum", {
      get: function get() {
        return this.$Range[2];
      },
      set: function set(t) {
        t = +t || 0;
        var e = this.$Range;
        t !== e[2] && (e[2] = t, e[3] = !0, this.invalidateProperties(), this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "value", {
      get: function get() {
        var t = this.$Range;
        return t[6] ? t[5] : t[4];
      },
      set: function set(t) {
        t = +t || 0, this.$setValue(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setValue = function (t) {
      if (t === this.value) return !1;
      var e = this.$Range;
      return e[5] = t, e[6] = !0, this.invalidateProperties(), !0;
    }, Object.defineProperty(i.prototype, "snapInterval", {
      get: function get() {
        return this.$Range[7];
      },
      set: function set(t) {
        var e = this.$Range;
        e[9] = !0, t = +t || 0, t !== e[7] && (isNaN(t) ? (e[7] = 1, e[9] = !1) : e[7] = t, e[8] = !0, this.invalidateProperties());
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.commitProperties = function () {
      e.prototype.commitProperties.call(this);
      var t = this.$Range;

      if (t[2] > t[0] && (t[1] ? t[0] = t[2] : t[2] = t[0]), t[6] || t[1] || t[3] || t[8]) {
        var i = t[6] ? t[5] : t[4];
        t[6] = !1, t[1] = !1, t[3] = !1, t[8] = !1, this.setValue(this.nearestValidValue(i, t[7]));
      }
    }, i.prototype.nearestValidSize = function (t) {
      var e = this.snapInterval;
      if (0 == e) return t;
      var i = Math.round(t / e) * e;
      return Math.abs(i) < e ? e : i;
    }, i.prototype.nearestValidValue = function (t, e) {
      var i = this.$Range;
      if (0 == e) return Math.max(i[2], Math.min(i[0], t));
      var n = i[0] - i[2],
          r = 1;

      if (t -= i[2], e != Math.round(e)) {
        var o = (1 + e).toString().split(".");
        r = Math.pow(10, o[1].length), n *= r, t = Math.round(t * r), e = Math.round(e * r);
      }

      var s = Math.max(0, Math.floor(t / e) * e),
          a = Math.min(n, Math.floor((t + e) / e) * e),
          h = t - s >= (a - s) / 2 ? a : s;
      return h / r + i[2];
    }, i.prototype.setValue = function (e) {
      var i = this.$Range;
      i[4] !== e && (i[0] > i[2] ? i[4] = Math.min(i[0], Math.max(i[2], e)) : i[4] = e, i[6] = !1, this.invalidateDisplayList(), t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "value"));
    }, i.prototype.updateDisplayList = function (t, i) {
      e.prototype.updateDisplayList.call(this, t, i), this.updateSkinDisplayList();
    }, i.prototype.updateSkinDisplayList = function () {}, i;
  }(t.Component);

  t.Range = e, __reflect(e.prototype, "eui.Range"), t.registerBindable(e.prototype, "value");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e() {
      var e = t.call(this) || this;
      return e.$target = null, e.$useVirtualLayout = !1, e.$typicalWidth = 71, e.$typicalHeight = 22, e;
    }

    return __extends(e, t), Object.defineProperty(e.prototype, "target", {
      get: function get() {
        return this.$target;
      },
      set: function set(t) {
        this.$target !== t && (this.$target = t, this.clearVirtualLayoutCache());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "useVirtualLayout", {
      get: function get() {
        return this.$useVirtualLayout;
      },
      set: function set(t) {
        t = !!t, this.$useVirtualLayout != t && (this.$useVirtualLayout = t, this.dispatchEventWith("useVirtualLayoutChanged"), this.$useVirtualLayout && !t && this.clearVirtualLayoutCache(), this.target && this.target.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.setTypicalSize = function (t, e) {
      t = +t || 71, e = +e || 22, (t !== this.$typicalWidth || e !== this.$typicalHeight) && (this.$typicalWidth = t, this.$typicalHeight = e, this.$target && this.$target.invalidateSize());
    }, e.prototype.scrollPositionChanged = function () {}, e.prototype.clearVirtualLayoutCache = function () {}, e.prototype.elementAdded = function (t) {}, e.prototype.elementRemoved = function (t) {}, e.prototype.getElementIndicesInView = function () {
      return null;
    }, e.prototype.measure = function () {}, e.prototype.updateDisplayList = function (t, e) {}, e;
  }(egret.EventDispatcher);

  t.LayoutBase = e, __reflect(e.prototype, "eui.LayoutBase");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t.$ListBase = {
        0: !1,
        1: !1,
        2: -2,
        3: -1,
        4: !1,
        5: void 0,
        6: !1,
        7: null,
        8: !1
      }, t;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "requireSelection", {
      get: function get() {
        return this.$ListBase[0];
      },
      set: function set(t) {
        t = !!t;
        var e = this.$ListBase;
        t !== e[0] && (e[0] = t, t && (e[1] = !0, this.invalidateProperties()));
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "selectedIndex", {
      get: function get() {
        return this.$getSelectedIndex();
      },
      set: function set(t) {
        t = 0 | +t, this.setSelectedIndex(t, !1);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$getSelectedIndex = function () {
      var t = this.$ListBase;
      return t[2] != i.NO_PROPOSED_SELECTION ? t[2] : t[3];
    }, i.prototype.setSelectedIndex = function (t, e) {
      if (t != this.selectedIndex) {
        var i = this.$ListBase;
        e && (i[4] = i[4] || e), i[2] = t, this.invalidateProperties();
      }
    }, Object.defineProperty(i.prototype, "selectedItem", {
      get: function get() {
        var t = this.$ListBase;
        if (void 0 !== t[5]) return t[5];
        var e = this.$getSelectedIndex();
        if (e != i.NO_SELECTION && null != this.$dataProvider) return this.$dataProvider.length > e ? this.$dataProvider.getItemAt(e) : void 0;
      },
      set: function set(t) {
        this.setSelectedItem(t, !1);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.setSelectedItem = function (t, e) {
      if (void 0 === e && (e = !1), this.selectedItem !== t) {
        var i = this.$ListBase;
        e && (i[4] = i[4] || e), i[5] = t, this.invalidateProperties();
      }
    }, i.prototype.commitProperties = function () {
      var n = this.$dataProviderChanged;
      e.prototype.commitProperties.call(this);
      var r = this.$ListBase,
          o = this.$getSelectedIndex(),
          s = this.$dataProvider;
      n && (o >= 0 && s && o < s.length ? this.itemSelected(o, !0) : this.requireSelection ? r[2] = 0 : this.setSelectedIndex(-1, !1)), r[1] && (r[1] = !1, r[0] && o == i.NO_SELECTION && s && s.length > 0 && (r[2] = 0)), void 0 !== r[5] && (s ? r[2] = s.getItemIndex(r[5]) : r[2] = i.NO_SELECTION, r[5] = void 0);
      var a = !1;
      r[2] != i.NO_PROPOSED_SELECTION && (a = this.commitSelection()), r[6] && (r[6] = !1, a || t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "selectedIndex"));
    }, i.prototype.updateRenderer = function (t, i, n) {
      return this.itemSelected(i, this.$isItemIndexSelected(i)), e.prototype.updateRenderer.call(this, t, i, n);
    }, i.prototype.itemSelected = function (t, e) {
      var i = this.$indexToRenderer[t];
      i && (i.selected = e);
    }, i.prototype.$isItemIndexSelected = function (t) {
      return t == this.selectedIndex;
    }, i.prototype.commitSelection = function (e) {
      void 0 === e && (e = !0);
      var n = this.$dataProvider,
          r = this.$ListBase,
          o = n ? n.length - 1 : -1,
          s = r[3],
          a = r[2];
      if (a < i.NO_SELECTION && (a = i.NO_SELECTION), a > o && (a = o), r[0] && a == i.NO_SELECTION && n && n.length > 0) return r[2] = i.NO_PROPOSED_SELECTION, r[4] = !1, !1;

      if (r[4]) {
        var h = this.dispatchEventWith(egret.Event.CHANGING, !1, !0, !0);
        if (!h) return this.itemSelected(r[2], !1), r[2] = i.NO_PROPOSED_SELECTION, r[4] = !1, !1;
      }

      return r[3] = a, r[2] = i.NO_PROPOSED_SELECTION, s != i.NO_SELECTION && this.itemSelected(s, !1), r[3] != i.NO_SELECTION && this.itemSelected(r[3], !0), e && (r[4] && (this.dispatchEventWith(egret.Event.CHANGE), r[4] = !1), t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "selectedIndex"), t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "selectedItem")), !0;
    }, i.prototype.adjustSelection = function (t, e) {
      void 0 === e && (e = !1);
      var n = this.$ListBase;
      n[2] != i.NO_PROPOSED_SELECTION ? n[2] = t : n[3] = t, n[6] = !0, this.invalidateProperties();
    }, i.prototype.itemAdded = function (t, n) {
      e.prototype.itemAdded.call(this, t, n);
      var r = this.$getSelectedIndex();
      r == i.NO_SELECTION ? this.$ListBase[0] && this.adjustSelection(n, !0) : r >= n && this.adjustSelection(r + 1, !0);
    }, i.prototype.itemRemoved = function (t, n) {
      if (e.prototype.itemRemoved.call(this, t, n), this.selectedIndex != i.NO_SELECTION) {
        var r = this.$getSelectedIndex();
        n == r ? this.requireSelection && this.$dataProvider && this.$dataProvider.length > 0 ? 0 == n ? (this.$ListBase[2] = 0, this.invalidateProperties()) : this.setSelectedIndex(0, !1) : this.adjustSelection(-1, !1) : r > n && this.adjustSelection(r - 1, !1);
      }
    }, i.prototype.onCollectionChange = function (n) {
      e.prototype.onCollectionChange.call(this, n), n.kind == t.CollectionEventKind.RESET ? 0 == this.$dataProvider.length && this.setSelectedIndex(i.NO_SELECTION, !1) : n.kind == t.CollectionEventKind.REFRESH && this.dataProviderRefreshed();
    }, i.prototype.dataProviderRefreshed = function () {
      this.setSelectedIndex(i.NO_SELECTION, !1);
    }, i.prototype.rendererAdded = function (t, e, i) {
      t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRendererTouchBegin, this), t.addEventListener(egret.TouchEvent.TOUCH_END, this.onRendererTouchEnd, this), t.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onRendererTouchCancle, this);
    }, i.prototype.rendererRemoved = function (t, e, i) {
      t.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRendererTouchBegin, this), t.removeEventListener(egret.TouchEvent.TOUCH_END, this.onRendererTouchEnd, this), t.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onRendererTouchCancle, this);
    }, i.prototype.onRendererTouchBegin = function (t) {
      if (this.$stage) {
        var e = this.$ListBase;
        t.$isDefaultPrevented || (e[8] = !1, e[7] = t.$currentTarget, this.$stage.addEventListener(egret.TouchEvent.TOUCH_END, this.stage_touchEndHandler, this));
      }
    }, i.prototype.onRendererTouchCancle = function (t) {
      var e = this.$ListBase;
      e[7] = null, e[8] = !0, this.$stage && this.$stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.stage_touchEndHandler, this);
    }, i.prototype.onRendererTouchEnd = function (e) {
      var i = this.$ListBase,
          n = e.$currentTarget,
          r = i[7];
      n == r && (i[8] || (this.setSelectedIndex(n.itemIndex, !0), t.ItemTapEvent.dispatchItemTapEvent(this, t.ItemTapEvent.ITEM_TAP, n)), i[8] = !1);
    }, i.prototype.stage_touchEndHandler = function (t) {
      var e = t.$currentTarget;
      e.removeEventListener(egret.TouchEvent.TOUCH_END, this.stage_touchEndHandler, this), this.$ListBase[7] = null;
    }, i.NO_SELECTION = -1, i.NO_PROPOSED_SELECTION = -2, i;
  }(t.DataGroup);

  t.ListBase = e, __reflect(e.prototype, "eui.ListBase"), t.registerBindable(e.prototype, "selectedIndex"), t.registerBindable(e.prototype, "selectedItem");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t.thumb = null, t.$viewport = null, t.autoVisibility = !0, t;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "viewport", {
      get: function get() {
        return this.$viewport;
      },
      set: function set(e) {
        if (e != this.$viewport) {
          var i = this.$viewport;
          i && (i.removeEventListener(t.PropertyEvent.PROPERTY_CHANGE, this.onPropertyChanged, this), i.removeEventListener(egret.Event.RESIZE, this.onViewportResize, this)), this.$viewport = e, e && (e.addEventListener(t.PropertyEvent.PROPERTY_CHANGE, this.onPropertyChanged, this), e.addEventListener(egret.Event.RESIZE, this.onViewportResize, this)), this.invalidateDisplayList();
        }
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.onViewportResize = function (t) {
      this.invalidateDisplayList();
    }, i.prototype.onPropertyChanged = function (t) {}, i;
  }(t.Component);

  t.ScrollBarBase = e, __reflect(e.prototype, "eui.ScrollBarBase");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t.trackHighlight = null, t.thumb = null, t.track = null, t.$SliderBase = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: null,
        5: null,
        6: 300,
        7: 0,
        8: 0,
        9: !0
      }, t.maximum = 10, t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.onTouchBegin, t), t;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "slideDuration", {
      get: function get() {
        return this.$SliderBase[6];
      },
      set: function set(t) {
        this.$SliderBase[6] = +t || 0;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.pointToValue = function (t, e) {
      return this.minimum;
    }, Object.defineProperty(i.prototype, "liveDragging", {
      get: function get() {
        return this.$SliderBase[9];
      },
      set: function set(t) {
        this.$SliderBase[9] = !!t;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "pendingValue", {
      get: function get() {
        return this.$SliderBase[7];
      },
      set: function set(t) {
        t = +t || 0;
        var e = this.$SliderBase;
        t !== e[7] && (e[7] = t, this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.setValue = function (t) {
      this.$SliderBase[7] = t, e.prototype.setValue.call(this, t);
    }, i.prototype.partAdded = function (t, i) {
      e.prototype.partAdded.call(this, t, i), i == this.thumb ? (this.thumb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onThumbTouchBegin, this), this.thumb.addEventListener(egret.Event.RESIZE, this.onTrackOrThumbResize, this)) : i == this.track ? (this.track.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrackTouchBegin, this), this.track.addEventListener(egret.Event.RESIZE, this.onTrackOrThumbResize, this)) : i === this.trackHighlight && (this.trackHighlight.touchEnabled = !1, egret.is(this.trackHighlight, "egret.DisplayObjectContainer") && (this.trackHighlight.touchChildren = !1));
    }, i.prototype.partRemoved = function (t, i) {
      e.prototype.partRemoved.call(this, t, i), i == this.thumb ? (this.thumb.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onThumbTouchBegin, this), this.thumb.removeEventListener(egret.Event.RESIZE, this.onTrackOrThumbResize, this)) : i == this.track && (this.track.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrackTouchBegin, this), this.track.removeEventListener(egret.Event.RESIZE, this.onTrackOrThumbResize, this));
    }, i.prototype.onTrackOrThumbResize = function (t) {
      this.updateSkinDisplayList();
    }, i.prototype.onThumbTouchBegin = function (e) {
      var i = this.$SliderBase;
      i[5] && i[5].isPlaying && this.stopAnimation();
      var n = this.$stage;
      n.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onStageTouchMove, this), n.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this);
      var r = this.thumb.globalToLocal(e.stageX, e.stageY, egret.$TempPoint);
      i[0] = r.x, i[1] = r.y, t.UIEvent.dispatchUIEvent(this, t.UIEvent.CHANGE_START);
    }, i.prototype.onStageTouchMove = function (t) {
      var e = this.$SliderBase;
      e[2] = t.$stageX, e[3] = t.$stageY;
      var i = this.track;

      if (i) {
        var n = i.globalToLocal(e[2], e[3], egret.$TempPoint),
            r = this.pointToValue(n.x - e[0], n.y - e[1]);
        r = this.nearestValidValue(r, this.snapInterval), this.updateWhenTouchMove(r), t.updateAfterEvent();
      }
    }, i.prototype.updateWhenTouchMove = function (t) {
      t != this.$SliderBase[7] && (this.liveDragging ? (this.setValue(t), this.dispatchEventWith(egret.Event.CHANGE)) : this.pendingValue = t);
    }, i.prototype.onStageTouchEnd = function (e) {
      var i = e.$currentTarget;
      i.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onStageTouchMove, this), i.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this), t.UIEvent.dispatchUIEvent(this, t.UIEvent.CHANGE_END);
      var n = this.$SliderBase;
      this.liveDragging || this.value == n[7] || (this.setValue(n[7]), this.dispatchEventWith(egret.Event.CHANGE));
    }, i.prototype.onTouchBegin = function (t) {
      this.$stage.addEventListener(egret.TouchEvent.TOUCH_END, this.stageTouchEndHandler, this), this.$SliderBase[4] = t.$target;
    }, i.prototype.stageTouchEndHandler = function (t) {
      var e = t.$target,
          i = this.$SliderBase;
      t.$currentTarget.removeEventListener(egret.TouchEvent.TOUCH_END, this.stageTouchEndHandler, this), i[4] != e && this.contains(e) && egret.TouchEvent.dispatchTouchEvent(this, egret.TouchEvent.TOUCH_TAP, !0, !0, t.$stageX, t.$stageY, t.touchPointID), i[4] = null;
    }, i.prototype.$animationUpdateHandler = function (t) {
      this.pendingValue = t.currentValue;
    }, i.prototype.animationEndHandler = function (e) {
      this.setValue(this.$SliderBase[8]), this.dispatchEventWith(egret.Event.CHANGE), t.UIEvent.dispatchUIEvent(this, t.UIEvent.CHANGE_END);
    }, i.prototype.stopAnimation = function () {
      this.$SliderBase[5].stop(), this.setValue(this.nearestValidValue(this.pendingValue, this.snapInterval)), this.dispatchEventWith(egret.Event.CHANGE), t.UIEvent.dispatchUIEvent(this, t.UIEvent.CHANGE_END);
    }, i.prototype.onTrackTouchBegin = function (e) {
      var i = this.thumb ? this.thumb.width : 0,
          n = this.thumb ? this.thumb.height : 0,
          r = e.$stageX - i / 2,
          o = e.$stageY - n / 2,
          s = this.track.globalToLocal(r, o, egret.$TempPoint),
          a = this.$Range,
          h = this.pointToValue(s.x, s.y);
      h = this.nearestValidValue(h, a[7]);
      var l = this.$SliderBase;
      if (h != l[7]) if (0 != l[6]) {
        l[5] || (l[5] = new t.sys.Animation(this.$animationUpdateHandler, this), l[5].endFunction = this.animationEndHandler);
        var u = l[5];
        u.isPlaying && this.stopAnimation(), l[8] = h, u.duration = l[6] * (Math.abs(l[7] - l[8]) / (a[0] - a[2])), u.from = l[7], u.to = l[8], t.UIEvent.dispatchUIEvent(this, t.UIEvent.CHANGE_START), u.play();
      } else this.setValue(h), this.dispatchEventWith(egret.Event.CHANGE);
    }, i;
  }(t.Range);

  t.SliderBase = e, __reflect(e.prototype, "eui.SliderBase");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e;
  !function (t) {
    function e(t) {
      if (!t) return "";

      for (var e = "  at <" + t.name, i = t.attributes, n = Object.keys(i), r = n.length, o = 0; r > o; o++) {
        var s = n[o],
            a = i[s];
        ("id" != s || "__" != a.substring(0, 2)) && (e += " " + s + '="' + a + '"');
      }

      return e += 0 == t.children.length ? "/>" : ">";
    }

    function i(t) {
      var i = e(t.parent),
          n = e(t).substring(5);
      return i + "\n      	" + n;
    }

    var n = [],
        r = 1,
        o = "hostComponent",
        s = "eui.Skin",
        a = "Declarations",
        h = "egret.Rectangle",
        l = "Class",
        u = "Array",
        p = "Percentage",
        c = "State[]",
        d = "skinName",
        f = [u, "boolean", "string", "number"],
        y = ["id", "locked", "includeIn", "excludeFrom"],
        g = [["<", "&lt;"], [">", "&gt;"], ["&", "&amp;"], ['"', "&quot;"], ["'", "&apos;"]],
        v = ["null", "NaN", "undefined", "true", "false"],
        m = function () {
      function e() {
        this.delayAssignmentDic = {};
      }

      return e.prototype.$parseCode = function (t, e) {
        var i = e ? e : "$exmlClass" + r++,
            n = eval,
            o = n(t),
            s = !0;

        if (s && o) {
          egret.registerClass(o, i);

          for (var a = i.split("."), h = a.length, l = __global, u = 0; h - 1 > u; u++) {
            var p = a[u];
            l = l[p] || (l[p] = {});
          }

          l[a[h - 1]] || (l[a[h - 1]] = o);
        }

        return o;
      }, e.prototype.parse = function (t) {
        var e = null;
        e = egret.XML.parse(t);
        var i = !1,
            n = "";
        e.attributes["class"] ? (n = e.attributes["class"], delete e.attributes["class"], i = !!n) : n = "$exmlClass" + r++;
        var o = this.parseClass(e, n),
            s = o.toCode(),
            a = null,
            h = eval;

        if (a = h(s), i && a) {
          egret.registerClass(a, n);

          for (var l = n.split("."), u = l.length, p = __global, c = 0; u - 1 > c; c++) {
            var d = l[c];
            p = p[d] || (p[d] = {});
          }

          p[l[u - 1]] || (p[l[u - 1]] = a);
        }

        return a;
      }, e.prototype.parseClass = function (e, i) {
        t.exmlConfig || (t.exmlConfig = new t.EXMLConfig()), this.currentXML = e, this.currentClassName = i, this.delayAssignmentDic = {}, this.idDic = {}, this.stateCode = [], this.stateNames = [], this.skinParts = [], this.bindings = [], this.declarations = null, this.currentClass = new t.EXClass(), this.stateIds = [];
        var n = i.lastIndexOf(".");
        -1 != n ? this.currentClass.className = i.substring(n + 1) : this.currentClass.className = i, this.startCompile();
        var r = this.currentClass;
        return this.currentClass = null, r;
      }, e.prototype.startCompile = function () {
        var e = this.getClassNameOfNode(this.currentXML);
        this.isSkinClass = e == s, this.currentClass.superClass = e, this.getStateNames();
        var i = this.currentXML.children;
        if (i) for (var n = i.length, r = 0; n > r; r++) {
          var o = i[r];

          if (1 === o.nodeType && o.namespace == t.NS_W && o.localName == a) {
            this.declarations = o;
            break;
          }
        }
        this.currentXML.namespace && (this.addIds(this.currentXML.children), this.createConstructFunc());
      }, e.prototype.addIds = function (e) {
        if (e) for (var i = e.length, n = 0; i > n; n++) {
          var r = e[n];
          if (1 == r.nodeType && r.namespace && !this.isInnerClass(r)) if (this.addIds(r.children), r.namespace != t.NS_W && r.localName) {
            if (this.isProperty(r)) {
              var o = r.localName,
                  s = o.indexOf("."),
                  a = r.children;
              if (-1 == s || !a || 0 == a.length) continue;
              var h = a[0];
              this.stateIds.push(h.attributes.id);
            } else if (1 === r.nodeType) {
              var l = r.attributes.id;

              if (l) {
                var u = new RegExp("^[a-zA-Z_$]{1}[a-z0-9A-Z_$]*");
                null == l.match(u) && egret.$warn(2022, l), null != l.match(new RegExp(/ /g)) && egret.$warn(2022, l), -1 == this.skinParts.indexOf(l) && this.skinParts.push(l), this.createVarForNode(r), this.isStateNode(r) && this.stateIds.push(l);
              } else this.createIdForNode(r), this.isStateNode(r) && this.stateIds.push(r.attributes.id);
            }
          } else ;
        }
      }, e.prototype.isInnerClass = function (e) {
        if (e.hasOwnProperty("isInnerClass")) return e.isInnerClass;
        var i = "Skin" == e.localName && e.namespace == t.NS_S;
        if (!i) if (this.isProperty(e)) i = !1;else {
          var n = void 0,
              r = e.parent;

          if (this.isProperty(r)) {
            n = r.localName;
            var o = n.indexOf(".");

            if (-1 != o) {
              n.substring(o + 1);
              n = n.substring(0, o);
            }

            r = r.parent;
          } else n = t.exmlConfig.getDefaultPropById(r.localName, r.namespace);

          var s = t.exmlConfig.getClassNameById(r.localName, r.namespace);
          i = t.exmlConfig.getPropertyType(n, s) == l;
        }
        return e.isInnerClass = i, i;
      }, e.prototype.containsState = function (t) {
        var e = t.attributes;
        if (e.includeIn || e.excludeFrom) return !0;

        for (var i = Object.keys(e), n = i.length, r = 0; n > r; r++) {
          var o = i[r];
          if (-1 != o.indexOf(".")) return !0;
        }

        return !1;
      }, e.prototype.createIdForNode = function (t) {
        var e = this.getNodeId(t);
        this.idDic[e] ? this.idDic[e]++ : this.idDic[e] = 1, e += this.idDic[e], t.attributes.id = e;
      }, e.prototype.getNodeId = function (t) {
        return t.attributes.id ? t.attributes.id : "_" + t.localName;
      }, e.prototype.createVarForNode = function (e) {
        var i = this.getClassNameOfNode(e);
        "" != i && (this.currentClass.getVariableByName(e.attributes.id) || this.currentClass.addVariable(new t.EXVariable(e.attributes.id)));
      }, e.prototype.createFuncForNode = function (e) {
        var i = e.localName,
            n = this.isBasicTypeData(i);
        if (n) return this.createBasicTypeForNode(e);
        var r = this.getClassNameOfNode(e),
            o = new t.EXFunction(),
            s = "_i",
            a = e.attributes.id;
        o.name = a + s, this.currentClass.addFunction(o);
        var h = new t.EXCodeBlock();
        o.codeBlock = h;
        var l = "t";
        "Object" == i ? h.addVar(l, "{}") : h.addVar(l, "new " + r + "()");
        var u = !!this.currentClass.getVariableByName(a);
        u && h.addAssignment("this." + a, l), this.addAttributesToCodeBlock(h, l, e), this.initlizeChildNode(e, h, l);
        var p = this.delayAssignmentDic[a];
        if (p) for (var c = p.length, d = 0; c > d; d++) {
          var f = p[d];
          h.concat(f);
        }
        return h.addReturn(l), "this." + o.name + "()";
      }, e.prototype.isBasicTypeData = function (t) {
        return -1 != f.indexOf(t);
      }, e.prototype.createBasicTypeForNode = function (t) {
        var e = t.localName,
            i = "",
            n = this.currentClass.getVariableByName(t.attributes.id),
            r = t.children,
            o = "";

        if (r && r.length > 0) {
          var s = r[0];
          3 == s.nodeType && (o = s.text.trim());
        }

        switch (e) {
          case u:
            var a = [];
            if (r) for (var h = r.length, l = 0; h > l; l++) {
              var p = r[l];
              1 == p.nodeType && a.push(this.createFuncForNode(p));
            }
            i = "[" + a.join(",") + "]";
            break;

          case "boolean":
            i = "false" != o && o ? "true" : "false";
            break;

          case "number":
            i = o, -1 != i.indexOf("%") && (i = i.substring(0, i.length - 1));
            break;

          case "string":
            i = this.formatString(o);
        }

        return n && (n.defaultValue = i), i;
      }, e.prototype.addAttributesToCodeBlock = function (e, i, n) {
        var r,
            o,
            s = n.attributes,
            a = Object.keys(s);
        a.sort();

        for (var h = a.length, l = 0; h > l; l++) {
          if (r = a[l], this.isNormalKey(r) && (o = s[r], r = this.formatKey(r, o), o = this.formatValue(r, o, n))) {
            if (this.currentClass.getVariableByName(o)) {
              var u = "this.",
                  p = s.id,
                  c = u + p + " = t;";
              this.currentClass.getVariableByName(p) || this.createVarForNode(n), e.containsCodeLine(c) || e.addCodeLineAt(c, 1);
              var d = new t.EXCodeBlock();
              "this" == i ? d.addAssignment(i, u + o, r) : (d.startIf(u + p), d.addAssignment(u + p, u + o, r), d.endBlock()), this.delayAssignmentDic[o] || (this.delayAssignmentDic[o] = []), this.delayAssignmentDic[o].push(d), o = u + o;
            }

            e.addAssignment(i, o, r);
          }
        }
      }, e.prototype.initlizeChildNode = function (e, n, r) {
        var o = e.children;

        if (o && 0 != o.length) {
          for (var s, a = t.exmlConfig.getClassNameById(e.localName, e.namespace), h = [], l = o.length, u = [], p = 0; l > p; p++) {
            var c = o[p];
            if (1 == c.nodeType && c.namespace != t.NS_W) if (this.isInnerClass(c)) {
              if ("Skin" == c.localName) {
                var f = this.parseInnerClass(c),
                    y = t.exmlConfig.getPropertyType(d, a);
                y ? n.addAssignment(r, f, d) : egret.$error(2005, this.currentClassName, d, i(c));
              }
            } else {
              var g = c.localName;

              if (this.isProperty(c)) {
                if (!this.isNormalKey(g)) continue;
                var y = t.exmlConfig.getPropertyType(c.localName, a);
                if (!y) continue;
                if (!c.children || 0 == c.children.length) continue;
                this.addChildrenToProp(c.children, y, g, n, r, s, u, e);
              } else h.push(c);
            }
          }

          if (0 != h.length) {
            var v = t.exmlConfig.getDefaultPropById(e.localName, e.namespace),
                m = t.exmlConfig.getPropertyType(v, a);
            v && m && this.addChildrenToProp(h, m, v, n, r, s, u, e);
          }
        }
      }, e.prototype.parseInnerClass = function (t) {
        var i = n.pop();
        i || (i = new e());
        var o = this.currentClass.className + "$" + t.localName + r++,
            s = i.parseClass(t, o);
        return this.currentClass.addInnerClass(s), n.push(i), o;
      }, e.prototype.addChildrenToProp = function (t, e, i, n, r, o, s, a) {
        var h = "",
            p = t.length;

        if (p > 1) {
          if (e != u) return;

          for (var c = [], d = 0; p > d; d++) {
            var f = t[d];

            if (1 == f.nodeType) {
              h = this.createFuncForNode(f);
              this.getClassNameOfNode(f);
              this.isStateNode(f) || c.push(h);
            }
          }

          h = "[" + c.join(",") + "]";
        } else {
          var y = t[0];
          if (e == u) {
            if (y.localName == u) {
              var c = [];
              if (y.children) for (var g = y.children.length, v = 0; g > v; v++) {
                var f = y.children[v];

                if (1 == f.nodeType) {
                  h = this.createFuncForNode(f);
                  this.getClassNameOfNode(f);
                  this.isStateNode(f) || c.push(h);
                }
              }
              h = "[" + c.join(",") + "]";
            } else {
              h = this.createFuncForNode(y);
              this.getClassNameOfNode(y);
              h = this.isStateNode(y) ? "[]" : "[" + h + "]";
            }
          } else if (1 == y.nodeType) {
            if (e == l) {
              if (p > 1) return;
              h = this.parseInnerClass(t[0]);
            } else {
              this.getClassNameOfNode(y);
              h = this.createFuncForNode(y);
            }
          } else h = this.formatValue(i, y.text, a);
        }

        "" != h && (-1 == h.indexOf("()") && (i = this.formatKey(i, h)), -1 == s.indexOf(i) && s.push(i), n.addAssignment(r, h, i));
      }, e.prototype.isProperty = function (e) {
        if (e.hasOwnProperty("isProperty")) return e.isProperty;
        var i,
            n = e.localName;

        if (n && 1 === e.nodeType && e.parent && !this.isBasicTypeData(n)) {
          var r = e.parent,
              o = n.indexOf(".");
          -1 != o && (n = n.substr(0, o));
          var s = t.exmlConfig.getClassNameById(r.localName, r.namespace);
          i = !!t.exmlConfig.getPropertyType(n, s);
        } else i = !1;

        return e.isProperty = i, i;
      }, e.prototype.isNormalKey = function (t) {
        return t && -1 == t.indexOf(".") && -1 == t.indexOf(":") && -1 == y.indexOf(t) ? !0 : !1;
      }, e.prototype.formatKey = function (t, e) {
        return -1 != e.indexOf("%") && ("height" == t ? t = "percentHeight" : "width" == t && (t = "percentWidth")), t;
      }, e.prototype.formatValue = function (e, i, n) {
        i || (i = "");
        var r = i;
        i = i.trim();
        var o = this.getClassNameOfNode(n),
            s = t.exmlConfig.getPropertyType(e, o),
            a = this.formatBinding(e, i, n);

        if (a) {
          this.checkIdForState(n);
          var u = "this";
          n !== this.currentXML && (u += "." + n.attributes.id), this.bindings.push(new t.EXBinding(u, e, a.templates, a.chainIndex)), i = "";
        } else if (s == h) {
          i = "new " + h + "(" + i + ")";
        } else if (s == p) -1 != i.indexOf("%") && (i = this.formatString(i));else {
          switch (s) {
            case l:
              e == d && (i = this.formatString(r));
              break;

            case "number":
              0 == i.indexOf("#") ? i = "0x" + i.substring(1) : -1 != i.indexOf("%") && (i = parseFloat(i.substr(0, i.length - 1)).toString());
              break;

            case "boolean":
              i = "false" != i && i ? "true" : "false";
              break;

            case "string":
            case "any":
              i = this.formatString(r);
          }
        }

        return i;
      }, e.prototype.formatString = function (t) {
        return t = this.unescapeHTMLEntity(t), t = t.split("\n").join("\\n"), t = t.split("\r").join("\\n"), t = t.split('"').join('\\"'), t = '"' + t + '"';
      }, e.prototype.formatBinding = function (t, e, i) {
        if (!e) return null;
        if (e = e.trim(), "{" != e.charAt(0) || "}" != e.charAt(e.length - 1)) return null;
        e = e.substring(1, e.length - 1).trim();

        for (var n = -1 == e.indexOf("+") ? [e] : this.parseTemplates(e), r = [], s = n.length, a = 0; s > a; a++) {
          var h = n[a].trim();

          if (h) {
            var l = h.charAt(0);

            if (!("'" == l || '"' == l || l >= "0" && "9" >= l || "-" == l || -1 == h.indexOf(".") && -1 != v.indexOf(h))) {
              0 == h.indexOf("this.") && (h = h.substring(5));
              var u = h.split(".")[0];
              u != o && -1 == this.skinParts.indexOf(u) && (h = o + "." + h), n[a] = '"' + h + '"', r.push(a);
            }
          } else n.splice(a, 1), a--, s--;
        }

        return {
          templates: n,
          chainIndex: r
        };
      }, e.prototype.parseTemplates = function (t) {
        if (-1 == t.indexOf("'")) return t.split("+");
        var e = !1,
            i = "";

        for (t = t.split("\\'").join("0"); t.length > 0;) {
          var n = t.indexOf("'");

          if (-1 == n) {
            i += t;
            break;
          }

          i += t.substring(0, n + 1), t = t.substring(n + 1), n = t.indexOf("'"), -1 == n && (n = t.length - 1, e = !0);
          var r = t.substring(0, n + 1);
          i += r.split("+").join("1"), t = t.substring(n + 1);
        }

        t = i.split("0").join("\\'"), e && (t += "'");

        for (var o = t.split("+"), s = o.length, a = 0; s > a; a++) {
          o[a] = o[a].split("1").join("+");
        }

        return o;
      }, e.prototype.unescapeHTMLEntity = function (t) {
        if (!t) return "";

        for (var e = g.length, i = 0; e > i; i++) {
          var n = g[i],
              r = n[0],
              o = n[1];
          t = t.split(o).join(r);
        }

        return t;
      }, e.prototype.createConstructFunc = function () {
        var e = new t.EXCodeBlock();
        e.addEmptyLine();
        var i = "this";

        if (this.addAttributesToCodeBlock(e, i, this.currentXML), this.declarations) {
          var n = this.declarations.children;
          if (n && n.length > 0) for (var r = n.length, o = 0; r > o; o++) {
            var s = n[o];

            if (1 == s.nodeType) {
              var a = this.createFuncForNode(s);
              a && e.addCodeLine(a + ";");
            }
          }
        }

        this.initlizeChildNode(this.currentXML, e, i);
        var h,
            l,
            u = this.stateIds;

        if (u.length > 0) {
          l = u.length;

          for (var o = 0; l > o; o++) {
            h = u[o], e.addCodeLine("this." + h + "_i();");
          }

          e.addEmptyLine();
        }

        var p = this.skinParts,
            c = "[]";

        if (l = p.length, l > 0) {
          for (var o = 0; l > o; o++) {
            p[o] = '"' + p[o] + '"';
          }

          c = "[" + p.join(",") + "]";
        }

        var d = new t.EXFunction();
        d.name = "skinParts", d.isGet = !0;
        var f = new t.EXCodeBlock();
        f.addReturn(c), d.codeBlock = f, this.currentClass.addFunction(d), this.currentXML.attributes.id = "", this.createStates(this.currentXML);

        for (var y, g = this.currentXML, v = (this.getClassNameOfNode(g), g.attributes), m = Object.keys(v), $ = m.length, E = 0; $ > E; E++) {
          var C = m[E],
              _ = v[C],
              b = C.indexOf(".");

          if (-1 != b) {
            var S = C.substring(0, b);
            S = this.formatKey(S, _);
            var T = this.formatValue(S, _, g);
            if (!T) continue;
            var x = C.substr(b + 1);
            y = this.getStateByName(x, g);
            var I = y.length;
            if (I > 0) for (var o = 0; I > o; o++) {
              var P = y[o];
              P.addOverride(new t.EXSetProperty("", S, T));
            }
          }
        }

        var L = this.stateCode;

        if (l = L.length, l > 0) {
          var N = "	";
          e.addCodeLine("this.states = [");

          for (var O = !0, o = 0; l > o; o++) {
            var P = L[o];
            O ? O = !1 : e.addCodeLine(N + ",");

            for (var A = P.toCode().split("\n"), D = 0; D < A.length;) {
              var B = A[D];
              B && e.addCodeLine(N + B), D++;
            }
          }

          e.addCodeLine("];");
        }

        var R = this.bindings;

        if (l = R.length, l > 0) {
          e.addEmptyLine();

          for (var o = 0; l > o; o++) {
            var M = R[o];
            e.addCodeLine(M.toCode());
          }
        }

        this.currentClass.constructCode = e;
      }, e.prototype.isStateNode = function (t) {
        var e = t.attributes;
        return e.hasOwnProperty("includeIn") || e.hasOwnProperty("excludeFrom");
      }, e.prototype.getStateNames = function () {
        var e = this.currentXML,
            i = t.exmlConfig.getClassNameById(e.localName, e.namespace),
            n = t.exmlConfig.getPropertyType("states", i);

        if (n == c) {
          var r = e.attributes.states;
          r && delete e.attributes.states;
          var o,
              s,
              a = this.stateNames,
              h = e.children;
          if (h) for (var l = h.length, u = 0; l > u; u++) {
            if (s = h[u], 1 == s.nodeType && "states" == s.localName) {
              s.namespace = t.NS_W, o = s.children;
              break;
            }
          }
          if (o || r) if (r) for (var p = r.split(","), d = p.length, u = 0; d > u; u++) {
            var f = p[u].trim();
            f && (-1 == a.indexOf(f) && a.push(f), this.stateCode.push(new t.EXState(f)));
          } else for (var y = o.length, u = 0; y > u; u++) {
            var g = o[u];

            if (1 == g.nodeType) {
              var v = [],
                  m = g.attributes;
              if (m.stateGroups) for (var $ = m.stateGroups.split(","), E = $.length, C = 0; E > C; C++) {
                var _ = $[C].trim();

                _ && (-1 == a.indexOf(_) && a.push(_), v.push(_));
              }
              var f = m.name;
              -1 == a.indexOf(f) && a.push(f), this.stateCode.push(new t.EXState(f, v));
            }
          }
        }
      }, e.prototype.createStates = function (e) {
        var i = e.children;
        if (i) for (var n = i.length, r = 0; n > r; r++) {
          var o = i[r];
          if (1 == o.nodeType && !this.isInnerClass(o) && (this.createStates(o), o.namespace != t.NS_W && o.localName)) if (this.isProperty(o)) {
            var s = o.localName,
                a = s.indexOf("."),
                h = o.children;
            if (-1 == a || !h || 0 == h.length) continue;
            var l = s.substring(a + 1);
            s = s.substring(0, a);
            var p = this.getClassNameOfNode(e),
                c = (t.exmlConfig.getPropertyType(s, p), h[0]),
                d = void 0;
            1 == c.nodeType ? (this.createFuncForNode(c), this.checkIdForState(c), d = "this." + c.attributes.id) : d = this.formatValue(s, c.text, e);
            var f = this.getStateByName(l, o),
                y = f.length;
            if (y > 0) for (var g = 0; y > g; g++) {
              var v = f[g];
              v.addOverride(new t.EXSetProperty(e.attributes.id, s, d));
            }
          } else if (this.containsState(o)) {
            var m = o.attributes,
                $ = m.id;
            this.getClassNameOfNode(o);
            this.checkIdForState(o);
            var l = void 0,
                f = void 0,
                v = void 0;

            if (this.isStateNode(o)) {
              var E = "",
                  C = o.parent;
              C.localName == u && (C = C.parent), C && C.parent && this.isProperty(C) && (C = C.parent), C && C != this.currentXML && (E = C.attributes.id, this.checkIdForState(C));

              var _ = this.findNearNodeId(o),
                  b = [];

              if (m.includeIn) b = m.includeIn.split(",");else {
                for (var S = m.excludeFrom.split(","), T = S.length, g = 0; T > g; g++) {
                  var x = S[g];
                  this.getStateByName(x, o);
                }

                T = this.stateCode.length;

                for (var g = 0; T > g; g++) {
                  v = this.stateCode[g], -1 == S.indexOf(v.name) && b.push(v.name);
                }
              }

              for (var I = b.length, P = 0; I > P; P++) {
                if (l = b[P], f = this.getStateByName(l, o), f.length > 0) for (var y = f.length, g = 0; y > g; g++) {
                  v = f[g], v.addOverride(new t.EXAddItems($, E, _.position, _.relativeTo));
                }
              }
            }

            for (var L = Object.keys(m), N = L.length, O = 0; N > O; O++) {
              var A = L[O],
                  d = m[A],
                  a = A.indexOf(".");

              if (-1 != a) {
                var D = A.substring(0, a);
                D = this.formatKey(D, d);
                var B = this.formatBinding(D, d, o);
                if (!B && (d = this.formatValue(D, d, o), !d)) continue;
                l = A.substr(a + 1), f = this.getStateByName(l, o);
                var y = f.length;
                if (y > 0) for (var g = 0; y > g; g++) {
                  v = f[g], B ? v.addOverride(new t.EXSetStateProperty($, D, B.templates, B.chainIndex)) : v.addOverride(new t.EXSetProperty($, D, d));
                }
              }
            }
          }
        }
      }, e.prototype.checkIdForState = function (t) {
        if (t && !this.currentClass.getVariableByName(t.attributes.id)) {
          this.createVarForNode(t);
          var e = t.attributes.id,
              i = e + "_i",
              n = this.currentClass.getFuncByName(i);

          if (n) {
            var r = "this." + e + " = t;",
                o = n.codeBlock;
            o && (o.containsCodeLine(r) || o.addCodeLineAt(r, 1));
          }
        }
      }, e.prototype.getStateByName = function (t, e) {
        for (var i = [], n = this.stateCode, r = n.length, o = 0; r > o; o++) {
          var s = n[o];
          if (s.name == t) -1 == i.indexOf(s) && i.push(s);else if (s.stateGroups.length > 0) {
            for (var a = !1, h = s.stateGroups.length, l = 0; h > l; l++) {
              var u = s.stateGroups[l];

              if (u == t) {
                a = !0;
                break;
              }
            }

            a && -1 == i.indexOf(s) && i.push(s);
          }
        }

        return i;
      }, e.prototype.findNearNodeId = function (t) {
        for (var e, i, n, r = t.parent, o = "", s = -1, a = !1, h = r.children, l = h.length, u = 0; l > u; u++) {
          var p = h[u];
          this.isProperty(p) || (p == t ? (a = !0, s = u) : !a || n || this.isStateNode(p) || (n = p), a || this.isStateNode(p) || (i = p));
        }

        return 0 == s ? (e = 0, {
          position: e,
          relativeTo: o
        }) : s == l - 1 ? (e = 1, {
          position: e,
          relativeTo: o
        }) : n && (e = 2, o = n.attributes.id) ? (this.checkIdForState(n), {
          position: e,
          relativeTo: o
        }) : {
          position: 1,
          relativeTo: o
        };
      }, e.prototype.getClassNameOfNode = function (e) {
        var i = t.exmlConfig.getClassNameById(e.localName, e.namespace);
        return i;
      }, e;
    }();

    t.EXMLParser = m, __reflect(m.prototype, "eui.sys.EXMLParser");
  }(e = t.sys || (t.sys = {}));
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.$selected = !1, t.$autoSelected = !0, t;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "selected", {
      get: function get() {
        return this.$selected;
      },
      set: function set(t) {
        this.$setSelected(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setSelected = function (e) {
      return e = !!e, e === this.$selected ? !1 : (this.$selected = e, this.invalidateState(), t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "selected"), !0);
    }, i.prototype.getCurrentState = function () {
      var t = e.prototype.getCurrentState.call(this);

      if (this.$selected) {
        var i = t + "AndSelected",
            n = this.skin;
        return n && n.hasState(i) ? i : "disabled" == t ? "disabled" : "down";
      }

      return t;
    }, i.prototype.buttonReleased = function () {
      this.$autoSelected && (this.selected = !this.$selected, this.dispatchEventWith(egret.Event.CHANGE));
    }, i;
  }(t.Button);

  t.ToggleButton = e, __reflect(e.prototype, "eui.ToggleButton"), t.registerBindable(e.prototype, "selected");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e() {
      var e = null !== t && t.apply(this, arguments) || this;
      return e.$horizontalAlign = "left", e.$verticalAlign = "top", e.$gap = 6, e.$paddingLeft = 0, e.$paddingRight = 0, e.$paddingTop = 0, e.$paddingBottom = 0, e.elementSizeTable = [], e.startIndex = -1, e.endIndex = -1, e.indexInViewCalculated = !1, e.maxElementSize = 0, e;
    }

    return __extends(e, t), Object.defineProperty(e.prototype, "horizontalAlign", {
      get: function get() {
        return this.$horizontalAlign;
      },
      set: function set(t) {
        this.$horizontalAlign != t && (this.$horizontalAlign = t, this.$target && this.$target.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "verticalAlign", {
      get: function get() {
        return this.$verticalAlign;
      },
      set: function set(t) {
        this.$verticalAlign != t && (this.$verticalAlign = t, this.$target && this.$target.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "gap", {
      get: function get() {
        return this.$gap;
      },
      set: function set(t) {
        t = +t || 0, this.$gap !== t && (this.$gap = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "paddingLeft", {
      get: function get() {
        return this.$paddingLeft;
      },
      set: function set(t) {
        t = +t || 0, this.$paddingLeft !== t && (this.$paddingLeft = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "paddingRight", {
      get: function get() {
        return this.$paddingRight;
      },
      set: function set(t) {
        t = +t || 0, this.$paddingRight !== t && (this.$paddingRight = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "paddingTop", {
      get: function get() {
        return this.$paddingTop;
      },
      set: function set(t) {
        t = +t || 0, this.$paddingTop !== t && (this.$paddingTop = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "paddingBottom", {
      get: function get() {
        return this.$paddingBottom;
      },
      set: function set(t) {
        t = +t || 0, this.$paddingBottom !== t && (this.$paddingBottom = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.invalidateTargetLayout = function () {
      var t = this.$target;
      t && (t.invalidateSize(), t.invalidateDisplayList());
    }, e.prototype.measure = function () {
      this.$target && (this.$useVirtualLayout ? this.measureVirtual() : this.measureReal());
    }, e.prototype.measureReal = function () {}, e.prototype.measureVirtual = function () {}, e.prototype.updateDisplayList = function (t, e) {
      var i = this.$target;
      if (i) return 0 == i.numElements ? void i.setContentSize(Math.ceil(this.$paddingLeft + this.$paddingRight), Math.ceil(this.$paddingTop + this.$paddingBottom)) : void (this.$useVirtualLayout ? this.updateDisplayListVirtual(t, e) : this.updateDisplayListReal(t, e));
    }, e.prototype.getStartPosition = function (t) {
      return 0;
    }, e.prototype.getElementSize = function (t) {
      return 0;
    }, e.prototype.getElementTotalSize = function () {
      return 0;
    }, e.prototype.elementRemoved = function (e) {
      this.$useVirtualLayout && (t.prototype.elementRemoved.call(this, e), this.elementSizeTable.splice(e, 1));
    }, e.prototype.clearVirtualLayoutCache = function () {
      this.$useVirtualLayout && (this.elementSizeTable = [], this.maxElementSize = 0);
    }, e.prototype.findIndexAt = function (t, e, i) {
      var n = .5 * (e + i) | 0,
          r = this.getStartPosition(n),
          o = this.getElementSize(n);
      return t >= r && t < r + o + this.$gap ? n : e == i ? -1 : r > t ? this.findIndexAt(t, e, Math.max(e, n - 1)) : this.findIndexAt(t, Math.min(n + 1, i), i);
    }, e.prototype.scrollPositionChanged = function () {
      if (t.prototype.scrollPositionChanged.call(this), this.$useVirtualLayout) {
        var e = this.getIndexInView();
        e && (this.indexInViewCalculated = !0, this.target.invalidateDisplayList());
      }
    }, e.prototype.getIndexInView = function () {
      return !1;
    }, e.prototype.updateDisplayListVirtual = function (t, e) {}, e.prototype.updateDisplayListReal = function (t, e) {}, e.prototype.flexChildrenProportionally = function (t, e, i, n) {
      var r,
          o = n.length;

      do {
        r = !0;
        var s = e - t * i / 100;
        s > 0 ? e -= s : s = 0;

        for (var a = e / i, h = 0; o > h; h++) {
          var l = n[h],
              u = l.percent * a;

          if (u < l.min) {
            var p = l.min;
            l.size = p, n[h] = n[--o], n[o] = l, i -= l.percent, s >= p ? s -= p : (e -= p - s, s = 0), r = !1;
            break;
          }

          if (u > l.max) {
            var c = l.max;
            l.size = c, n[h] = n[--o], n[o] = l, i -= l.percent, s >= c ? s -= c : (e -= c - s, s = 0), r = !1;
            break;
          }

          l.size = u;
        }
      } while (!r);
    }, e;
  }(t.LayoutBase);

  t.LinearLayoutBase = e, __reflect(e.prototype, "eui.LinearLayoutBase");
}(eui || (eui = {})), function (t) {
  var e;
  !function (t) {
    var e = function () {
      function t() {
        this.layoutElement = null, this.size = 0, this.percent = 0 / 0, this.min = 0 / 0, this.max = 0 / 0;
      }

      return t;
    }();

    t.ChildInfo = e, __reflect(e.prototype, "eui.sys.ChildInfo");
  }(e = t.sys || (t.sys = {}));
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e() {
      return t.call(this) || this;
    }

    return __extends(e, t), e.prototype.pointToValue = function (t, e) {
      if (!this.thumb || !this.track) return 0;
      var i = this.$Range,
          n = i[0] - i[2],
          r = this.getThumbRange();
      return i[2] + (0 != r ? t / r * n : 0);
    }, e.prototype.getThumbRange = function () {
      var t = egret.$TempRectangle;
      this.track.getLayoutBounds(t);
      var e = t.width;
      return this.thumb.getLayoutBounds(t), e - t.width;
    }, e.prototype.updateSkinDisplayList = function () {
      if (this.thumb && this.track) {
        var t = this.$Range,
            e = this.getThumbRange(),
            i = t[0] - t[2],
            n = i > 0 ? (this.pendingValue - t[2]) / i * e : 0,
            r = this.track.localToGlobal(n, 0, egret.$TempPoint),
            o = r.x,
            s = r.y,
            a = this.thumb.$parent.globalToLocal(o, s, egret.$TempPoint).x,
            h = egret.$TempRectangle;

        if (this.thumb.getLayoutBounds(h), this.thumb.setLayoutBoundsPosition(Math.round(a), h.y), this.trackHighlight && this.trackHighlight.$parent) {
          var l = this.trackHighlight.$parent.globalToLocal(o, s, egret.$TempPoint).x - n;
          this.trackHighlight.x = Math.round(l), this.trackHighlight.width = Math.round(n);
        }
      }
    }, e;
  }(t.SliderBase);

  t.HSlider = e, __reflect(e.prototype, "eui.HSlider");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = [],
      i = {},
      n = {},
      r = function () {
    function t() {}

    return t.prototype.getAsset = function (t, r, o) {
      var s = i[t];
      if (s) return void s.push([r, o]);
      var a = e.pop();
      a || (a = new egret.ImageLoader()), i[t] = [[r, o]], n[a.$hashCode] = t, a.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this), a.load(t);
    }, t.prototype.onLoadFinish = function (t) {
      var r = t.currentTarget;
      r.removeEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), r.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this);
      var o;
      t.$type == egret.Event.COMPLETE && (o = new egret.Texture(), o._setBitmapData(r.data), r.data = null), e.push(r);
      var s = n[r.$hashCode];
      delete n[r.$hashCode];
      var a = i[s];
      delete i[s];

      for (var h = a.length, l = 0; h > l; l++) {
        var u = a[l];
        u[0].call(u[1], o, s);
      }
    }, t;
  }();

  t.DefaultAssetAdapter = r, __reflect(r.prototype, "eui.DefaultAssetAdapter", ["eui.IAssetAdapter"]);
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i(t) {
      var i = e.call(this) || this;
      return i.sourceChanged = !1, i._source = null, i.initializeUIValues(), t && (i.source = t), i;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "scale9Grid", {
      get: function get() {
        return this.$scale9Grid;
      },
      set: function set(t) {
        this.$setScale9Grid(t), this.invalidateDisplayList();
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillMode", {
      get: function get() {
        return this.$fillMode;
      },
      set: function set(t) {
        t != this.$fillMode && (e.prototype.$setFillMode.call(this, t), this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setFillMode = function (t) {
      var i = e.prototype.$setFillMode.call(this, t);
      return this.invalidateDisplayList(), i;
    }, Object.defineProperty(i.prototype, "source", {
      get: function get() {
        return this._source;
      },
      set: function set(t) {
        t != this._source && (this._source = t, this.$stage ? this.parseSource() : (this.sourceChanged = !0, this.invalidateProperties()));
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setTexture = function (t) {
      if (t == this.$texture) return !1;
      var i = e.prototype.$setTexture.call(this, t);
      return this.sourceChanged = !1, this.invalidateSize(), this.invalidateDisplayList(), i;
    }, i.prototype.parseSource = function () {
      this.sourceChanged = !1;
      var e = this._source;
      e && "string" == typeof e ? t.getAssets(this._source, function (t) {
        e === this._source && egret.is(t, "egret.Texture") && (this.$setTexture(t), t && this.dispatchEventWith(egret.Event.COMPLETE));
      }, this) : this.$setTexture(e);
    }, i.prototype.$measureContentBounds = function (t) {
      var e = this.$texture;

      if (e) {
        var i = this.$UIComponent,
            n = i[10],
            r = i[11];
        if (isNaN(n) || isNaN(r)) return void t.setEmpty();
        "clip" == this.$fillMode && (n > e.$getTextureWidth() && (n = e.$getTextureWidth()), r > e.$getTextureHeight() && (r = e.$getTextureHeight())), t.setTo(0, 0, n, r);
      } else t.setEmpty();
    }, i.prototype.createChildren = function () {
      this.sourceChanged && this.parseSource();
    }, i.prototype.setActualSize = function (i, n) {
      t.sys.UIComponentImpl.prototype.setActualSize.call(this, i, n), e.prototype.$setWidth.call(this, i), e.prototype.$setHeight.call(this, n);
    }, i.prototype.childrenCreated = function () {}, i.prototype.commitProperties = function () {
      t.sys.UIComponentImpl.prototype.commitProperties.call(this), this.sourceChanged && this.parseSource();
    }, i.prototype.measure = function () {
      var t = this.$texture;
      t ? this.setMeasuredSize(t.$getTextureWidth(), t.$getTextureHeight()) : this.setMeasuredSize(0, 0);
    }, i.prototype.updateDisplayList = function (t, e) {
      this.$renderDirty = !0;
    }, i.prototype.invalidateParentLayout = function () {}, i.prototype.setMeasuredSize = function (t, e) {}, i.prototype.invalidateProperties = function () {}, i.prototype.validateProperties = function () {}, i.prototype.invalidateSize = function () {}, i.prototype.validateSize = function (t) {}, i.prototype.invalidateDisplayList = function () {}, i.prototype.validateDisplayList = function () {}, i.prototype.validateNow = function () {}, i.prototype.setLayoutBoundsSize = function (t, e) {}, i.prototype.setLayoutBoundsPosition = function (t, e) {}, i.prototype.getLayoutBounds = function (t) {}, i.prototype.getPreferredBounds = function (t) {}, i;
  }(egret.Bitmap);

  t.Image = e, __reflect(e.prototype, "eui.Image", ["eui.UIComponent", "egret.DisplayObject"]), t.sys.implementUIComponent(e, egret.Bitmap), t.registerProperty(e, "scale9Grid", "egret.Rectangle");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t._data = null, t._selected = !1, t.itemIndex = -1, t.touchCaptured = !1, t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.onTouchBegin, t), t;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "data", {
      get: function get() {
        return this._data;
      },
      set: function set(e) {
        this._data = e, t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "data"), this.dataChanged();
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.dataChanged = function () {}, Object.defineProperty(i.prototype, "selected", {
      get: function get() {
        return this._selected;
      },
      set: function set(t) {
        this._selected != t && (this._selected = t, this.invalidateState());
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.onTouchCancle = function (t) {
      this.touchCaptured = !1;
      var e = t.$currentTarget;
      e.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this), e.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this), this.invalidateState();
    }, i.prototype.onTouchBegin = function (t) {
      this.$stage && (this.$stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this), this.$stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this), this.touchCaptured = !0, this.invalidateState(), t.updateAfterEvent());
    }, i.prototype.onStageTouchEnd = function (t) {
      var e = t.$currentTarget;
      e.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancle, this), e.removeEventListener(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd, this), this.touchCaptured = !1, this.invalidateState();
    }, i.prototype.getCurrentState = function () {
      var t = "up";

      if (this.enabled || (t = "disabled"), this.touchCaptured && (t = "down"), this._selected) {
        var e = t + "AndSelected",
            i = this.skin;
        return i && i.hasState(e) ? e : "disabled" == t ? "disabled" : "down";
      }

      return t;
    }, i;
  }(t.Component);

  t.ItemRenderer = e, __reflect(e.prototype, "eui.ItemRenderer", ["eui.IItemRenderer"]), t.registerBindable(e.prototype, "data");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = t.sys.UIComponentImpl,
      i = function (i) {
    function n(t) {
      var e = i.call(this) || this;
      return e.$styleSetMap = {
        fontFamily: !0,
        size: !0,
        bold: !0,
        italic: !0,
        textAlign: !0,
        verticalAlign: !0,
        lineSpacing: !0,
        textColor: !0,
        wordWrap: !0,
        displayAsPassword: !0,
        strokeColor: !0,
        stroke: !0,
        maxChars: !0,
        multiline: !0,
        border: !0,
        borderColor: !0,
        background: !0,
        backgroundColor: !0
      }, e.$revertStyle = {}, e.$style = null, e.$changeFromStyle = !1, e._widthConstraint = 0 / 0, e.initializeUIValues(), e.text = t, e;
    }

    return __extends(n, i), Object.defineProperty(n.prototype, "style", {
      get: function get() {
        return this.$style;
      },
      set: function set(t) {
        this.$setStyle(t);
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setStyle = function (t) {
      if (this.$style != t) {
        this.$style = t;
        var e = egret.getImplementation("eui.Theme");

        if (e) {
          this.$changeFromStyle = !0;

          for (var i in this.$revertStyle) {
            this[i] = this.$revertStyle[i];
          }

          if (this.$revertStyle = {}, null == t) return void (this.$changeFromStyle = !1);

          for (var n = t.split(","), r = 0; r < n.length; r++) {
            var o = e.$getStyleConfig(n[r]);
            if (o) for (var i in o) {
              if (this.$styleSetMap[i]) {
                var s = this[i];
                this[i] = o[i], this.$revertStyle[i] = s;
              }
            }
          }

          this.$changeFromStyle = !1;
        }
      }
    }, n.prototype.$setFontFamily = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.fontFanily, this.$styleSetMap.fontFanily = !1), i.prototype.$setFontFamily.call(this, t);
    }, n.prototype.$setSize = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.size, this.$styleSetMap.size = !1), i.prototype.$setSize.call(this, t);
    }, n.prototype.$setBold = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.bold, this.$styleSetMap.bold = !1), i.prototype.$setBold.call(this, t);
    }, n.prototype.$setItalic = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.italic, this.$styleSetMap.italic = !1), i.prototype.$setItalic.call(this, t);
    }, n.prototype.$setTextAlign = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.textAlign, this.$styleSetMap.textAlign = !1), i.prototype.$setTextAlign.call(this, t);
    }, n.prototype.$setVerticalAlign = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.verticalAlign, this.$styleSetMap.verticalAlign = !1), i.prototype.$setVerticalAlign.call(this, t);
    }, n.prototype.$setLineSpacing = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.lineSpacing, this.$styleSetMap.lineSpacing = !1), i.prototype.$setLineSpacing.call(this, t);
    }, n.prototype.$setTextColor = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.textColor, this.$styleSetMap.textColor = !1), i.prototype.$setTextColor.call(this, t);
    }, n.prototype.$setWordWrap = function (t) {
      this.$changeFromStyle || (delete this.$revertStyle.wordWrap, this.$styleSetMap.wordWrap = !1), i.prototype.$setWordWrap.call(this, t);
    }, n.prototype.$setDisplayAsPassword = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.displayAsPassword, this.$styleSetMap.displayAsPassword = !1), i.prototype.$setDisplayAsPassword.call(this, t);
    }, n.prototype.$setStrokeColor = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.strokeColor, this.$styleSetMap.strokeColor = !1), i.prototype.$setStrokeColor.call(this, t);
    }, n.prototype.$setStroke = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.stroke, this.$styleSetMap.stroke = !1), i.prototype.$setStroke.call(this, t);
    }, n.prototype.$setMaxChars = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.maxChars, this.$styleSetMap.maxChars = !1), i.prototype.$setMaxChars.call(this, t);
    }, n.prototype.$setMultiline = function (t) {
      return this.$changeFromStyle || (delete this.$revertStyle.multiline, this.$styleSetMap.multiline = !1), i.prototype.$setMultiline.call(this, t);
    }, n.prototype.$setBorder = function (t) {
      this.$changeFromStyle || (delete this.$revertStyle.border, this.$styleSetMap.border = !1), i.prototype.$setBorder.call(this, t);
    }, n.prototype.$setBorderColor = function (t) {
      this.$changeFromStyle || (delete this.$revertStyle.borderColor, this.$styleSetMap.borderColor = !1), i.prototype.$setBorderColor.call(this, t);
    }, n.prototype.$setBackground = function (t) {
      this.$changeFromStyle || (delete this.$revertStyle.background, this.$styleSetMap.background = !1), i.prototype.$setBackground.call(this, t);
    }, n.prototype.$setBackgroundColor = function (t) {
      this.$changeFromStyle || (delete this.$revertStyle.backgroundColor, this.$styleSetMap.backgroundColor = !1), i.prototype.$setBackgroundColor.call(this, t);
    }, n.prototype.$invalidateTextField = function () {
      i.prototype.$invalidateTextField.call(this), this.invalidateSize();
    }, n.prototype.$setWidth = function (t) {
      var n = i.prototype.$setWidth.call(this, t),
          r = e.prototype.$setWidth.call(this, t);
      return n && r;
    }, n.prototype.$setHeight = function (t) {
      var n = i.prototype.$setHeight.call(this, t),
          r = e.prototype.$setHeight.call(this, t);
      return n && r;
    }, n.prototype.$setText = function (e) {
      var n = i.prototype.$setText.call(this, e);
      return t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "text"), n;
    }, n.prototype.createChildren = function () {}, n.prototype.childrenCreated = function () {}, n.prototype.commitProperties = function () {}, n.prototype.measure = function () {
      var t = this.$UIComponent,
          e = this.$TextField,
          n = e[3],
          r = 0 / 0;
      isNaN(this._widthConstraint) ? isNaN(t[8]) ? 1e5 != t[13] && (r = t[13]) : r = t[8] : (r = this._widthConstraint, this._widthConstraint = 0 / 0), i.prototype.$setWidth.call(this, r), this.setMeasuredSize(this.textWidth, this.textHeight), i.prototype.$setWidth.call(this, n);
    }, n.prototype.updateDisplayList = function (t, e) {
      i.prototype.$setWidth.call(this, t), i.prototype.$setHeight.call(this, e);
    }, n.prototype.invalidateParentLayout = function () {}, n.prototype.setMeasuredSize = function (t, e) {}, n.prototype.invalidateProperties = function () {}, n.prototype.validateProperties = function () {}, n.prototype.invalidateSize = function () {}, n.prototype.validateSize = function (t) {}, n.prototype.invalidateDisplayList = function () {}, n.prototype.validateDisplayList = function () {}, n.prototype.validateNow = function () {}, n.prototype.setLayoutBoundsSize = function (t, i) {
      if (e.prototype.setLayoutBoundsSize.call(this, t, i), isNaN(t) || t === this._widthConstraint || 0 == t) return void (this._widthConstraint = t);
      this._widthConstraint = t;
      var n = this.$UIComponent;
      isNaN(n[9]) && t != n[16] && this.invalidateSize();
    }, n.prototype.setLayoutBoundsPosition = function (t, e) {}, n.prototype.getLayoutBounds = function (t) {}, n.prototype.getPreferredBounds = function (t) {}, n;
  }(egret.TextField);

  t.Label = i, __reflect(i.prototype, "eui.Label", ["eui.UIComponent", "egret.DisplayObject", "eui.IDisplayText"]), t.sys.implementUIComponent(i, egret.TextField), t.registerBindable(i.prototype, "text");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t.allowMultipleSelection = !1, t._selectedIndices = [], t.isValidIndex = function (e, i, n) {
        return t.$dataProvider && e >= 0 && e < t.$dataProvider.length && e % 1 == 0;
      }, t;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "selectedIndices", {
      get: function get() {
        return this._proposedSelectedIndices ? this._proposedSelectedIndices : this._selectedIndices;
      },
      set: function set(t) {
        this.setSelectedIndices(t, !1);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "selectedIndex", {
      get: function get() {
        return this._proposedSelectedIndices ? this._proposedSelectedIndices.length > 0 ? this._proposedSelectedIndices[0] : -1 : this.$getSelectedIndex();
      },
      set: function set(t) {
        this.setSelectedIndex(t);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "selectedItems", {
      get: function get() {
        var t = [],
            e = this.selectedIndices;
        if (e) for (var i = e.length, n = 0; i > n; n++) {
          t[n] = this.$dataProvider.getItemAt(e[n]);
        }
        return t;
      },
      set: function set(t) {
        var e = [];
        if (t) for (var i = t.length, n = 0; i > n; n++) {
          var r = this.$dataProvider.getItemIndex(t[n]);

          if (-1 != r && e.splice(0, 0, r), -1 == r) {
            e = [];
            break;
          }
        }
        this.setSelectedIndices(e, !1);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.setSelectedIndices = function (t, e) {
      var i = this.$ListBase;
      e && (i[4] = i[4] || e), t ? this._proposedSelectedIndices = t : this._proposedSelectedIndices = [], this.invalidateProperties();
    }, i.prototype.commitProperties = function () {
      e.prototype.commitProperties.call(this), this._proposedSelectedIndices && this.commitSelection();
    }, i.prototype.commitSelection = function (i) {
      void 0 === i && (i = !0);
      var n = this.$ListBase,
          r = n[3];

      if (this._proposedSelectedIndices) {
        if (this._proposedSelectedIndices = this._proposedSelectedIndices.filter(this.isValidIndex), !this.allowMultipleSelection && this._proposedSelectedIndices.length > 0) {
          var o = [];
          o.push(this._proposedSelectedIndices[0]), this._proposedSelectedIndices = o;
        }

        this._proposedSelectedIndices.length > 0 ? n[2] = this._proposedSelectedIndices[0] : n[2] = -1;
      }

      var s = e.prototype.commitSelection.call(this, !1);
      if (!s) return this._proposedSelectedIndices = null, !1;
      var a = this.$getSelectedIndex();
      return a > t.ListBase.NO_SELECTION && (this._proposedSelectedIndices ? -1 == this._proposedSelectedIndices.indexOf(a) && this._proposedSelectedIndices.push(a) : this._proposedSelectedIndices = [a]), this._proposedSelectedIndices && (-1 != this._proposedSelectedIndices.indexOf(r) && this.itemSelected(r, !0), this.commitMultipleSelection()), i && s && (n[4] && (this.dispatchEventWith(egret.Event.CHANGE), n[4] = !1), t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "selectedIndex"), t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "selectedItem")), s;
    }, i.prototype.commitMultipleSelection = function () {
      var t,
          e,
          i = [],
          n = [],
          r = this._selectedIndices,
          o = this._proposedSelectedIndices;

      if (r.length > 0 && o.length > 0) {
        for (e = o.length, t = 0; e > t; t++) {
          -1 == r.indexOf(o[t]) && n.push(o[t]);
        }

        for (e = r.length, t = 0; e > t; t++) {
          -1 == o.indexOf(r[t]) && i.push(r[t]);
        }
      } else r.length > 0 ? i = r : o.length > 0 && (n = o);

      if (this._selectedIndices = o, i.length > 0) for (e = i.length, t = 0; e > t; t++) {
        this.itemSelected(i[t], !1);
      }
      if (n.length > 0) for (e = n.length, t = 0; e > t; t++) {
        this.itemSelected(n[t], !0);
      }
      this._proposedSelectedIndices = null;
    }, i.prototype.$isItemIndexSelected = function (t) {
      return this.allowMultipleSelection ? -1 != this._selectedIndices.indexOf(t) : e.prototype.$isItemIndexSelected.call(this, t);
    }, i.prototype.dataProviderRefreshed = function () {
      this.allowMultipleSelection || e.prototype.dataProviderRefreshed.call(this);
    }, i.prototype.calculateSelectedIndices = function (t) {
      var e = [],
          i = this._selectedIndices,
          n = i.length;

      if (n > 0) {
        if (1 == n && i[0] == t) return this.$ListBase[0] ? (e.splice(0, 0, i[0]), e) : e;

        for (var r = !1, o = 0; n > o; o++) {
          i[o] == t ? r = !0 : i[o] != t && e.splice(0, 0, i[o]);
        }

        return r || e.splice(0, 0, t), e;
      }

      return e.splice(0, 0, t), e;
    }, i.prototype.onRendererTouchEnd = function (i) {
      if (this.allowMultipleSelection) {
        var n = i.currentTarget,
            r = this.$ListBase[7];
        if (n != r) return;
        this.setSelectedIndices(this.calculateSelectedIndices(n.itemIndex), !0), t.ItemTapEvent.dispatchItemTapEvent(this, t.ItemTapEvent.ITEM_TAP, n);
      } else e.prototype.onRendererTouchEnd.call(this, i);
    }, i;
  }(t.ListBase);

  t.List = e, __reflect(e.prototype, "eui.List");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t.closeButton = null, t.moveArea = null, t.titleDisplay = null, t._title = "", t.offsetPointX = 0, t.offsetPointY = 0, t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.onWindowTouchBegin, t, !1, 100), t;
    }

    return __extends(i, e), i.prototype.onWindowTouchBegin = function (t) {
      this.$parent.addChild(this);
    }, Object.defineProperty(i.prototype, "elementsContent", {
      set: function set(t) {
        if (t) for (var e = t.length, i = 0; e > i; i++) {
          this.addChild(t[i]);
        }
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "title", {
      get: function get() {
        return this._title;
      },
      set: function set(t) {
        this._title = t, this.titleDisplay && (this.titleDisplay.text = this.title);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.partAdded = function (t, i) {
      e.prototype.partAdded.call(this, t, i), i == this.titleDisplay ? this.titleDisplay.text = this._title : i == this.moveArea ? this.moveArea.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this) : i == this.closeButton && this.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
    }, i.prototype.partRemoved = function (t, i) {
      e.prototype.partRemoved.call(this, t, i), i == this.moveArea ? this.moveArea.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this) : i == this.closeButton && this.closeButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
    }, i.prototype.onCloseButtonClick = function (e) {
      t.UIEvent.dispatchUIEvent(this, t.UIEvent.CLOSING, !0, !0) && this.close();
    }, i.prototype.close = function () {
      this.$parent && this.$parent.removeChild(this);
    }, i.prototype.onTouchBegin = function (t) {
      this.$includeInLayout = !1, this.offsetPointX = this.x - t.$stageX, this.offsetPointY = this.y - t.$stageY, this.$stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.$stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    }, i.prototype.onTouchMove = function (t) {
      this.x = t.$stageX + this.offsetPointX, this.y = t.$stageY + this.offsetPointY;
    }, i.prototype.onTouchEnd = function (t) {
      var e = t.$currentTarget;
      e.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), e.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    }, i;
  }(t.Component);

  t.Panel = e, __reflect(e.prototype, "eui.Panel"), t.registerProperty(e, "elementsContent", "Array", !0);
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i.thumb = null, i.labelDisplay = null, i._labelFunction = null, i._slideDuration = 500, i._direction = t.Direction.LTR, i.slideToValue = 0, i.animationValue = 0, i.thumbInitX = 0, i.thumbInitY = 0, i.animation = new t.sys.Animation(i.animationUpdateHandler, i), i;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "labelFunction", {
      get: function get() {
        return this._labelFunction;
      },
      set: function set(t) {
        this._labelFunction != t && (this._labelFunction = t, this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.valueToLabel = function (t, e) {
      return null != this.labelFunction ? this._labelFunction(t, e) : t + " / " + e;
    }, Object.defineProperty(i.prototype, "slideDuration", {
      get: function get() {
        return this._slideDuration;
      },
      set: function set(t) {
        t = 0 | +t, this._slideDuration !== t && (this._slideDuration = t, this.animation.isPlaying && (this.animation.stop(), this.setValue(this.slideToValue)));
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "direction", {
      get: function get() {
        return this._direction;
      },
      set: function set(t) {
        this._direction != t && (this.thumb && (this.thumb.x = this.thumbInitX), this.thumb && (this.thumb.y = this.thumbInitY), this._direction = t, this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.$setValue = function (t) {
      if (this.value === t) return !1;
      var i = this.$Range,
          n = e.prototype.$setValue.call(this, t);

      if (this._slideDuration > 0 && this.$stage) {
        this.validateProperties();
        var r = this.animation;
        if (r.isPlaying && (this.animationValue = this.slideToValue, this.invalidateDisplayList(), r.stop()), this.slideToValue = this.nearestValidValue(t, i[7]), this.slideToValue === this.animationValue) return n;
        var o = this._slideDuration * (Math.abs(this.animationValue - this.slideToValue) / (i[0] - i[2]));
        r.duration = o === 1 / 0 ? 0 : o, r.from = this.animationValue, r.to = this.slideToValue, r.play();
      } else this.animationValue = this.value;

      return n;
    }, i.prototype.animationUpdateHandler = function (t) {
      var e = this.$Range,
          i = this.nearestValidValue(t.currentValue, e[7]);
      this.animationValue = Math.min(e[0], Math.max(e[2], i)), this.invalidateDisplayList();
    }, i.prototype.partAdded = function (t, i) {
      e.prototype.partAdded.call(this, t, i), i === this.thumb && (this.thumb.x && (this.thumbInitX = this.thumb.x), this.thumb.y && (this.thumbInitY = this.thumb.y), this.thumb.addEventListener(egret.Event.RESIZE, this.onThumbResize, this));
    }, i.prototype.partRemoved = function (t, i) {
      e.prototype.partRemoved.call(this, t, i), i === this.thumb && this.thumb.removeEventListener(egret.Event.RESIZE, this.onThumbResize, this);
    }, i.prototype.onThumbResize = function (t) {
      this.updateSkinDisplayList();
    }, i.prototype.updateSkinDisplayList = function () {
      var e = this.animation.isPlaying ? this.animationValue : this.value,
          i = this.maximum,
          n = this.thumb;

      if (n) {
        var r = n.width,
            o = n.height,
            s = Math.round(e / i * r);
        (0 > s || s === 1 / 0) && (s = 0);
        var a = Math.round(e / i * o);
        (0 > a || a === 1 / 0) && (a = 0);
        var h = n.$scrollRect;
        h || (h = egret.$TempRectangle), h.setTo(0, 0, r, o);
        var l = n.x - h.x,
            u = n.y - h.y;

        switch (this._direction) {
          case t.Direction.LTR:
            h.width = s, n.x = l;
            break;

          case t.Direction.RTL:
            h.width = s, h.x = r - s, n.x = h.x;
            break;

          case t.Direction.TTB:
            h.height = a, n.y = u;
            break;

          case t.Direction.BTT:
            h.height = a, h.y = o - a, n.y = h.y;
        }

        n.scrollRect = h;
      }

      this.labelDisplay && (this.labelDisplay.text = this.valueToLabel(e, i));
    }, i;
  }(t.Range);

  t.ProgressBar = e, __reflect(e.prototype, "eui.ProgressBar");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = {},
      i = function (i) {
    function n() {
      var t = i.call(this) || this;
      return t.$indexNumber = 0, t.$radioButtonGroup = null, t._group = null, t.groupChanged = !1, t._groupName = "radioGroup", t._value = null, t.groupName = "radioGroup", t;
    }

    return __extends(n, i), Object.defineProperty(n.prototype, "enabled", {
      get: function get() {
        return this.$Component[3] ? !this.$radioButtonGroup || this.$radioButtonGroup.$enabled : !1;
      },
      set: function set(t) {
        this.$setEnabled(t);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "group", {
      get: function get() {
        if (!this._group && this._groupName) {
          var i = e[this._groupName];
          i || (i = new t.RadioButtonGroup(), i.$name = this._groupName, e[this._groupName] = i), this._group = i;
        }

        return this._group;
      },
      set: function set(t) {
        this._group != t && (this.$radioButtonGroup && this.$radioButtonGroup.$removeInstance(this, !1), this._group = t, this._groupName = t ? this.group.$name : "radioGroup", this.groupChanged = !0, this.invalidateProperties(), this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "groupName", {
      get: function get() {
        return this._groupName;
      },
      set: function set(t) {
        t && "" != t && (this._groupName = t, this.$radioButtonGroup && this.$radioButtonGroup.$removeInstance(this, !1), this._group = null, this.groupChanged = !0, this.invalidateProperties(), this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$setSelected = function (t) {
      var e = i.prototype.$setSelected.call(this, t);
      return this.invalidateDisplayList(), e;
    }, Object.defineProperty(n.prototype, "value", {
      get: function get() {
        return this._value;
      },
      set: function set(e) {
        this._value != e && (this._value = e, this.$selected && this.group && t.PropertyEvent.dispatchPropertyEvent(this.group, t.PropertyEvent.PROPERTY_CHANGE, "selectedValue"));
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.commitProperties = function () {
      this.groupChanged && (this.addToGroup(), this.groupChanged = !1), i.prototype.commitProperties.call(this);
    }, n.prototype.updateDisplayList = function (t, e) {
      i.prototype.updateDisplayList.call(this, t, e), this.group && (this.$selected ? this._group.$setSelection(this, !1) : this.group.selection == this && this._group.$setSelection(null, !1));
    }, n.prototype.buttonReleased = function () {
      this.enabled && !this.selected && (this.$radioButtonGroup || this.addToGroup(), i.prototype.buttonReleased.call(this), this.group.$setSelection(this, !0));
    }, n.prototype.addToGroup = function () {
      var t = this.group;
      return t && t.$addInstance(this), t;
    }, n;
  }(t.ToggleButton);

  t.RadioButton = i, __reflect(i.prototype, "eui.RadioButton");
}(eui || (eui = {}));
var eui;
!function (t) {
  function e(t, i) {
    var n = t.parent,
        r = i.parent;
    if (!n || !r) return 0;
    var o = t.$nestLevel,
        s = i.$nestLevel,
        a = 0,
        h = 0;
    return n == r && (a = n.getChildIndex(t), h = r.getChildIndex(i)), o > s || a > h ? 1 : s > o || h > a ? -1 : t == i ? 0 : e(n, r);
  }

  var i = 0,
      n = function (n) {
    function r() {
      var t = n.call(this) || this;
      return t.$name = null, t.radioButtons = [], t.$enabled = !0, t._selectedValue = null, t._selection = null, t.$name = "_radioButtonGroup" + i++, t;
    }

    return __extends(r, n), r.prototype.getRadioButtonAt = function (t) {
      return this.radioButtons[t];
    }, Object.defineProperty(r.prototype, "enabled", {
      get: function get() {
        return this.$enabled;
      },
      set: function set(t) {
        if (t = !!t, this.$enabled !== t) {
          this.$enabled = t;

          for (var e = this.radioButtons, i = e.length, n = 0; i > n; n++) {
            e[n].invalidateState();
          }
        }
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "numRadioButtons", {
      get: function get() {
        return this.radioButtons.length;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "selectedValue", {
      get: function get() {
        return this.selection ? null != this.selection.value ? this.selection.value : this.selection.label : null;
      },
      set: function set(e) {
        if (this._selectedValue = e, null == e) return void this.$setSelection(null, !1);

        for (var i = this.numRadioButtons, n = 0; i > n; n++) {
          var r = this.radioButtons[n];

          if (r.value == e || r.label == e) {
            this.changeSelection(n, !1), this._selectedValue = null, t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "selectedValue");
            break;
          }
        }
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(r.prototype, "selection", {
      get: function get() {
        return this._selection;
      },
      set: function set(t) {
        this._selection != t && this.$setSelection(t, !1);
      },
      enumerable: !0,
      configurable: !0
    }), r.prototype.$addInstance = function (t) {
      t.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removedHandler, this);
      var i = this.radioButtons;
      i.push(t), i.sort(e);

      for (var n = i.length, r = 0; n > r; r++) {
        i[r].$indexNumber = r;
      }

      this._selectedValue && (this.selectedValue = this._selectedValue), 1 == t.selected && (this.selection = t), t.$radioButtonGroup = this, t.invalidateState();
    }, r.prototype.$removeInstance = function (t, e) {
      if (t) for (var i = !1, n = this.radioButtons, r = n.length, o = 0; r > o; o++) {
        var s = n[o];
        i ? s.$indexNumber = s.$indexNumber - 1 : s == t && (e && t.addEventListener(egret.Event.ADDED_TO_STAGE, this.addedHandler, this), t == this._selection && (this._selection = null), t.$radioButtonGroup = null, t.invalidateState(), this.radioButtons.splice(o, 1), i = !0, o--, r--);
      }
    }, r.prototype.$setSelection = function (e, i) {
      if (this._selection == e) return !1;

      if (e) {
        for (var n = this.numRadioButtons, r = 0; n > r; r++) {
          if (e == this.getRadioButtonAt(r)) {
            this.changeSelection(r, i);
            break;
          }
        }
      } else this._selection && (this._selection.selected = !1, this._selection = null, i && this.dispatchEventWith(egret.Event.CHANGE));

      return t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "selectedValue"), !0;
    }, r.prototype.changeSelection = function (t, e) {
      var i = this.getRadioButtonAt(t);
      i && i != this._selection && (this._selection && (this._selection.selected = !1), this._selection = i, this._selection.selected = !0, e && this.dispatchEventWith(egret.Event.CHANGE));
    }, r.prototype.addedHandler = function (t) {
      var e = t.target;
      e == t.currentTarget && (e.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addedHandler, this), this.$addInstance(e));
    }, r.prototype.removedHandler = function (t) {
      var e = t.target;
      e == t.currentTarget && (e.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removedHandler, this), this.$removeInstance(e, !0));
    }, r;
  }(egret.EventDispatcher);

  t.RadioButtonGroup = n, __reflect(n.prototype, "eui.RadioButtonGroup"), t.registerBindable(n.prototype, "selectedValue");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e(e, i, n) {
      var r = t.call(this) || this;
      return r.$fillColor = 0, r.$fillAlpha = 1, r.$strokeColor = 4473924, r.$strokeAlpha = 1, r.$strokeWeight = 0, r.$ellipseWidth = 0, r.$ellipseHeight = 0, r.touchChildren = !1, r.$graphics = new egret.Graphics(), r.$graphics.$setTarget(r), r.width = e, r.height = i, r.fillColor = n, r;
    }

    return __extends(e, t), e.prototype.createNativeDisplayObject = function () {
      this.$nativeDisplayObject = new egret_native.NativeDisplayObject(8);
    }, Object.defineProperty(e.prototype, "graphics", {
      get: function get() {
        return this.$graphics;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.$measureContentBounds = function (t) {
      this.$graphics && t.setTo(0, 0, this.width, this.height);
    }, Object.defineProperty(e.prototype, "fillColor", {
      get: function get() {
        return this.$fillColor;
      },
      set: function set(t) {
        void 0 != t && this.$fillColor != t && (this.$fillColor = t, this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "fillAlpha", {
      get: function get() {
        return this.$fillAlpha;
      },
      set: function set(t) {
        this.$fillAlpha != t && (this.$fillAlpha = t, this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "strokeColor", {
      get: function get() {
        return this.$strokeColor;
      },
      set: function set(t) {
        this.$strokeColor != t && (this.$strokeColor = t, this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "strokeAlpha", {
      get: function get() {
        return this.$strokeAlpha;
      },
      set: function set(t) {
        this.$strokeAlpha != t && (this.$strokeAlpha = t, this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "strokeWeight", {
      get: function get() {
        return this.$strokeWeight;
      },
      set: function set(t) {
        this.$strokeWeight != t && (this.$strokeWeight = t, this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "ellipseWidth", {
      get: function get() {
        return this.$ellipseWidth;
      },
      set: function set(t) {
        this.$ellipseWidth != t && (this.$ellipseWidth = t, this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "ellipseHeight", {
      get: function get() {
        return this.$ellipseHeight;
      },
      set: function set(t) {
        this.$ellipseHeight != t && (this.$ellipseHeight = t, this.invalidateDisplayList());
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.updateDisplayList = function (t, e) {
      var i = this.graphics;
      i.clear(), this.$strokeWeight > 0 && (i.beginFill(this.$fillColor, 0), i.lineStyle(this.$strokeWeight, this.$strokeColor, this.$strokeAlpha, !0, "normal", "square", "miter"), 0 == this.$ellipseWidth && 0 == this.$ellipseHeight ? i.drawRect(this.$strokeWeight / 2, this.$strokeWeight / 2, t - this.$strokeWeight, e - this.$strokeWeight) : i.drawRoundRect(this.$strokeWeight / 2, this.$strokeWeight / 2, t - this.$strokeWeight, e - this.$strokeWeight, this.$ellipseWidth, this.$ellipseHeight), i.endFill()), i.beginFill(this.$fillColor, this.$fillAlpha), i.lineStyle(this.$strokeWeight, this.$strokeColor, 0, !0, "normal", "square", "miter"), 0 == this.$ellipseWidth && 0 == this.$ellipseHeight ? i.drawRect(this.$strokeWeight, this.$strokeWeight, t - 2 * this.$strokeWeight, e - 2 * this.$strokeWeight) : i.drawRoundRect(this.$strokeWeight, this.$strokeWeight, t - 2 * this.$strokeWeight, e - 2 * this.$strokeWeight, this.$ellipseWidth, this.$ellipseHeight), i.endFill();
    }, e.prototype.$onRemoveFromStage = function () {
      t.prototype.$onRemoveFromStage.call(this), this.$graphics && this.$graphics.$onRemoveFromStage();
    }, e;
  }(t.Component);

  t.Rect = e, __reflect(e.prototype, "eui.Rect");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e,
      i = function (i) {
    function n() {
      var e = i.call(this) || this;
      e.$bounces = !0, e.horizontalScrollBar = null, e.verticalScrollBar = null;
      var n = new t.sys.TouchScroll(e.horizontalUpdateHandler, e.horizontalEndHandler, e),
          r = new t.sys.TouchScroll(e.verticalUpdateHandler, e.verticalEndHanlder, e);
      return e.$Scroller = {
        0: "auto",
        1: "auto",
        2: null,
        3: 0,
        4: 0,
        5: !1,
        6: !1,
        7: !1,
        8: n,
        9: r,
        10: null,
        11: !1,
        12: !1
      }, e;
    }

    return __extends(n, i), Object.defineProperty(n.prototype, "bounces", {
      get: function get() {
        return this.$bounces;
      },
      set: function set(t) {
        this.$bounces = !!t;
        var e = this.$Scroller[8];
        e && (e.$bounces = this.$bounces);
        var i = this.$Scroller[9];
        i && (i.$bounces = this.$bounces);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "throwSpeed", {
      get: function get() {
        return this.$Scroller[8].$scrollFactor;
      },
      set: function set(t) {
        t = +t, 0 > t && (t = 0), this.$Scroller[8].$scrollFactor = t, this.$Scroller[9].$scrollFactor = t;
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.$getThrowInfo = function (i, n) {
      return e ? (e.currentPos = i, e.toPos = n) : e = new t.ScrollerThrowEvent(t.ScrollerThrowEvent.THROW, !1, !1, i, n), e;
    }, Object.defineProperty(n.prototype, "scrollPolicyV", {
      get: function get() {
        return this.$Scroller[0];
      },
      set: function set(t) {
        var e = this.$Scroller;
        e[0] != t && (e[0] = t, this.checkScrollPolicy());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "scrollPolicyH", {
      get: function get() {
        return this.$Scroller[1];
      },
      set: function set(t) {
        var e = this.$Scroller;
        e[1] != t && (e[1] = t, this.checkScrollPolicy());
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.stopAnimation = function () {
      var e = this.$Scroller,
          i = e[9],
          n = e[8];
      i.animation.isPlaying ? t.UIEvent.dispatchUIEvent(this, t.UIEvent.CHANGE_END) : n.animation.isPlaying && t.UIEvent.dispatchUIEvent(this, t.UIEvent.CHANGE_END), i.stop(), n.stop();
      var r = this.verticalScrollBar,
          o = this.horizontalScrollBar;
      r && r.autoVisibility && (r.visible = !1), o && o.autoVisibility && (o.visible = !1);
    }, Object.defineProperty(n.prototype, "viewport", {
      get: function get() {
        return this.$Scroller[10];
      },
      set: function set(t) {
        var e = this.$Scroller;
        t != e[10] && (this.uninstallViewport(), e[10] = t, e[11] = !1, this.installViewport());
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.installViewport = function () {
      var t = this.viewport;
      t && (this.addChildAt(t, 0), t.scrollEnabled = !0, t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginCapture, this, !0), t.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndCapture, this, !0), t.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapCapture, this, !0), t.addEventListener(egret.Event.REMOVED, this.onViewPortRemove, this)), this.horizontalScrollBar && (this.horizontalScrollBar.viewport = t), this.verticalScrollBar && (this.verticalScrollBar.viewport = t);
    }, n.prototype.uninstallViewport = function () {
      this.horizontalScrollBar && (this.horizontalScrollBar.viewport = null), this.verticalScrollBar && (this.verticalScrollBar.viewport = null);
      var t = this.viewport;
      t && (t.scrollEnabled = !1, t.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginCapture, this, !0), t.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndCapture, this, !0), t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTapCapture, this, !0), t.removeEventListener(egret.Event.REMOVED, this.onViewPortRemove, this), 0 == this.$Scroller[11] && this.removeChild(t));
    }, n.prototype.onViewPortRemove = function (t) {
      t.target == this.viewport && (this.$Scroller[11] = !0, this.viewport = null);
    }, n.prototype.setSkin = function (t) {
      i.prototype.setSkin.call(this, t);
      var e = this.viewport;
      e && this.addChildAt(e, 0);
    }, n.prototype.onTouchBeginCapture = function (t) {
      if (this.$stage) {
        this.$Scroller[12] = !1;
        var e = this.checkScrollPolicy();
        e && this.onTouchBegin(t);
      }
    }, n.prototype.onTouchEndCapture = function (t) {
      this.$Scroller[12] && (t.$bubbles = !1, this.dispatchBubbleEvent(t), t.$bubbles = !0, t.stopPropagation(), this.onTouchEnd(t));
    }, n.prototype.onTouchTapCapture = function (t) {
      this.$Scroller[12] && (t.$bubbles = !1, this.dispatchBubbleEvent(t), t.$bubbles = !0, t.stopPropagation());
    }, n.prototype.checkScrollPolicy = function () {
      var t = this.$Scroller,
          e = t[10];
      if (!e) return !1;
      var i,
          n = e.$UIComponent;

      switch (t[1]) {
        case "auto":
          i = e.contentWidth > n[10] || 0 !== e.scrollH ? !0 : !1;
          break;

        case "on":
          i = !0;
          break;

        case "off":
          i = !1;
      }

      t[6] = i;
      var r;

      switch (t[0]) {
        case "auto":
          r = e.contentHeight > n[11] || 0 !== e.scrollV ? !0 : !1;
          break;

        case "on":
          r = !0;
          break;

        case "off":
          r = !1;
      }

      return t[7] = r, i || r;
    }, n.prototype.onTouchBegin = function (t) {
      if (!t.isDefaultPrevented() && this.checkScrollPolicy()) {
        this.downTarget = t.target;
        var e = this.$Scroller;
        this.stopAnimation(), e[3] = t.$stageX, e[4] = t.$stageY, e[6] && e[8].start(t.$stageX), e[7] && e[9].start(t.$stageY);
        var i = this.$stage;
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), i.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, !0), this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this), this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveListeners, this), this.tempStage = i;
      }
    }, n.prototype.onTouchMove = function (e) {
      if (!e.isDefaultPrevented()) {
        var i = this.$Scroller;

        if (!i[5]) {
          var r = void 0;
          r = Math.abs(i[3] - e.$stageX) < n.scrollThreshold ? !1 : !0;
          var o = void 0;
          if (o = Math.abs(i[4] - e.$stageY) < n.scrollThreshold ? !1 : !0, !r && !o) return;
          if (!o && r && "off" == i[1]) return;
          if (!r && o && "off" == i[0]) return;
          i[12] = !0, i[5] = !0, this.dispatchCancelEvent(e);
          var s = this.horizontalScrollBar,
              a = this.verticalScrollBar;
          s && s.autoVisibility && i[6] && (s.visible = !0), a && a.autoVisibility && i[7] && (a.visible = !0), i[2] && i[2].reset(), t.UIEvent.dispatchUIEvent(this, t.UIEvent.CHANGE_START), this.$stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        }

        e.preventDefault();
        var h = i[10],
            l = h.$UIComponent;
        i[6] && i[8].update(e.$stageX, h.contentWidth - l[10], h.scrollH), i[7] && i[9].update(e.$stageY, h.contentHeight - l[11], h.scrollV);
      }
    }, n.prototype.onTouchCancel = function (t) {
      this.$Scroller[5] || this.onRemoveListeners();
    }, n.prototype.dispatchBubbleEvent = function (t) {
      var e = this.$Scroller[10];

      if (e) {
        var i = egret.Event.create(egret.TouchEvent, t.type, t.bubbles, t.cancelable);
        i.$initTo(t.$stageX, t.$stageY, t.touchPointID);
        var n = this.downTarget;
        i.$setTarget(n);

        for (var r = this.$getPropagationList(n), o = r.length, s = .5 * r.length, a = -1, h = 0; o > h; h++) {
          if (r[h] === e) {
            a = h;
            break;
          }
        }

        r.splice(0, r.length - a + 1), s = 0, this.$dispatchPropagationEvent(i, r, s), egret.Event.release(i);
      }
    }, n.prototype.dispatchCancelEvent = function (t) {
      var e = this.$Scroller[10];

      if (e) {
        var i = egret.Event.create(egret.TouchEvent, egret.TouchEvent.TOUCH_CANCEL, t.bubbles, t.cancelable);
        i.$initTo(t.$stageX, t.$stageY, t.touchPointID);
        var n = this.downTarget;
        i.$setTarget(n);

        for (var r = this.$getPropagationList(n), o = r.length, s = .5 * r.length, a = -1, h = 0; o > h; h++) {
          if (r[h] === e) {
            a = h;
            break;
          }
        }

        r.splice(0, a + 1 - 2), r.splice(r.length - 1 - a + 2, a + 1 - 2), s -= a + 1, this.$dispatchPropagationEvent(i, r, s), egret.Event.release(i);
      }
    }, n.prototype.onTouchEnd = function (t) {
      var e = this.$Scroller;
      e[5] = !1, this.onRemoveListeners();
      var i = e[10],
          n = i.$UIComponent;
      e[8].isStarted() && e[8].finish(i.scrollH, i.contentWidth - n[10]), e[9].isStarted() && e[9].finish(i.scrollV, i.contentHeight - n[11]);
    }, n.prototype.onRemoveListeners = function () {
      var t = this.tempStage || this.$stage;
      this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), t.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, !0), t.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this), this.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this), this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveListeners, this);
    }, n.prototype.horizontalUpdateHandler = function (t) {
      var e = this.$Scroller[10];
      e && (e.scrollH = t), this.dispatchEventWith(egret.Event.CHANGE);
    }, n.prototype.verticalUpdateHandler = function (t) {
      var e = this.$Scroller[10];
      e && (e.scrollV = t), this.dispatchEventWith(egret.Event.CHANGE);
    }, n.prototype.horizontalEndHandler = function () {
      this.$Scroller[9].isPlaying() || this.onChangeEnd();
    }, n.prototype.verticalEndHanlder = function () {
      this.$Scroller[8].isPlaying() || this.onChangeEnd();
    }, n.prototype.onChangeEnd = function () {
      var e = this.$Scroller,
          i = this.horizontalScrollBar,
          n = this.verticalScrollBar;
      (i && i.visible || n && n.visible) && (e[2] || (e[2] = new egret.Timer(200, 1), e[2].addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onAutoHideTimer, this)), e[2].reset(), e[2].start()), t.UIEvent.dispatchUIEvent(this, t.UIEvent.CHANGE_END);
    }, n.prototype.onAutoHideTimer = function (t) {
      var e = this.horizontalScrollBar,
          i = this.verticalScrollBar;
      e && e.autoVisibility && (e.visible = !1), i && i.autoVisibility && (i.visible = !1);
    }, n.prototype.updateDisplayList = function (t, e) {
      i.prototype.updateDisplayList.call(this, t, e);
      var n = this.viewport;
      n && (n.setLayoutBoundsSize(t, e), n.setLayoutBoundsPosition(0, 0));
    }, n.prototype.partAdded = function (t, e) {
      i.prototype.partAdded.call(this, t, e), e == this.horizontalScrollBar ? (this.horizontalScrollBar.touchChildren = !1, this.horizontalScrollBar.touchEnabled = !1, this.horizontalScrollBar.viewport = this.viewport, this.horizontalScrollBar.autoVisibility && (this.horizontalScrollBar.visible = !1)) : e == this.verticalScrollBar && (this.verticalScrollBar.touchChildren = !1, this.verticalScrollBar.touchEnabled = !1, this.verticalScrollBar.viewport = this.viewport, this.verticalScrollBar.autoVisibility && (this.verticalScrollBar.visible = !1));
    }, n.scrollThreshold = 5, n;
  }(t.Component);

  t.Scroller = i, __reflect(i.prototype, "eui.Scroller"), t.registerProperty(i, "viewport", "eui.IViewport", !0);
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var i = null !== e && e.apply(this, arguments) || this;
      return i.maxWidth = 1e5, i.minWidth = 0, i.maxHeight = 1e5, i.minHeight = 0, i.width = 0 / 0, i.height = 0 / 0, i.$elementsContent = [], i._hostComponent = null, i.$stateValues = new t.sys.StateValues(), i;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "elementsContent", {
      set: function set(t) {
        this.$elementsContent = t;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "hostComponent", {
      get: function get() {
        return this._hostComponent;
      },
      set: function set(e) {
        if (this._hostComponent != e) {
          this._hostComponent && this._hostComponent.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this), this._hostComponent = e;
          var i = this.$stateValues;
          i.parent = e, e && (this.commitCurrentState(), this.$stateValues.intialized || (e.$stage ? this.initializeStates(e.$stage) : e.once(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this))), t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "hostComponent");
        }
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.onAddedToStage = function (t) {
      this.initializeStates(this._hostComponent.$stage);
    }, i;
  }(egret.EventDispatcher);

  t.Skin = e, __reflect(e.prototype, "eui.Skin"), t.sys.mixin(e, t.sys.StateClient), t.registerProperty(e, "elementsContent", "Array", !0), t.registerProperty(e, "states", "State[]"), t.registerBindable(e.prototype, "hostComponent");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t.indexBeingUpdated = !1, t.requireSelection = !0, t.useVirtualLayout = !1, t;
    }

    return __extends(i, e), i.prototype.createChildren = function () {
      if (!this.$layout) {
        var i = new t.HorizontalLayout();
        i.gap = 0, i.horizontalAlign = t.JustifyAlign.JUSTIFY, i.verticalAlign = t.JustifyAlign.CONTENT_JUSTIFY, this.$setLayout(i);
      }

      e.prototype.createChildren.call(this);
    }, i.prototype.$setDataProvider = function (i) {
      var n = this.$dataProvider;
      return n && n instanceof t.ViewStack && (n.removeEventListener(t.PropertyEvent.PROPERTY_CHANGE, this.onViewStackIndexChange, this), this.removeEventListener(egret.Event.CHANGE, this.onIndexChanged, this)), i && i instanceof t.ViewStack && (i.addEventListener(t.PropertyEvent.PROPERTY_CHANGE, this.onViewStackIndexChange, this), this.addEventListener(egret.Event.CHANGE, this.onIndexChanged, this)), e.prototype.$setDataProvider.call(this, i);
    }, i.prototype.onIndexChanged = function (t) {
      this.indexBeingUpdated = !0, this.$dataProvider.selectedIndex = this.selectedIndex, this.indexBeingUpdated = !1;
    }, i.prototype.onViewStackIndexChange = function (t) {
      "selectedIndex" != t.property || this.indexBeingUpdated || this.setSelectedIndex(this.$dataProvider.selectedIndex, !1);
    }, i;
  }(t.ListBase);

  t.TabBar = e, __reflect(e.prototype, "eui.TabBar");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = egret.FocusEvent,
      i = function (i) {
    function n() {
      var t = i.call(this) || this;
      return t.isFocus = !1, t.$TextInput = {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: "",
        7: null,
        8: egret.TextFieldInputType.TEXT
      }, t;
    }

    return __extends(n, i), Object.defineProperty(n.prototype, "prompt", {
      get: function get() {
        return this.promptDisplay ? this.promptDisplay.text : this.$TextInput[0];
      },
      set: function set(t) {
        this.$TextInput[0] = t, this.promptDisplay && (this.promptDisplay.text = t), this.invalidateProperties(), this.invalidateState();
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "displayAsPassword", {
      get: function get() {
        if (this.textDisplay) return this.textDisplay.displayAsPassword;
        var t = this.$TextInput[1];
        return t ? t : !1;
      },
      set: function set(t) {
        this.$TextInput[1] = t, this.textDisplay && (this.textDisplay.displayAsPassword = t), this.invalidateProperties();
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "inputType", {
      get: function get() {
        return this.textDisplay ? this.textDisplay.inputType : this.$TextInput[8];
      },
      set: function set(t) {
        this.$TextInput[8] = t, this.textDisplay && (this.textDisplay.inputType = t), this.invalidateProperties();
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "textColor", {
      get: function get() {
        return this.textDisplay ? this.textDisplay.textColor : this.$TextInput[2];
      },
      set: function set(t) {
        this.$TextInput[2] = t, this.textDisplay && (this.textDisplay.textColor = t), this.invalidateProperties();
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "maxChars", {
      get: function get() {
        if (this.textDisplay) return this.textDisplay.maxChars;
        var t = this.$TextInput[3];
        return t ? t : 0;
      },
      set: function set(t) {
        this.$TextInput[3] = t, this.textDisplay && (this.textDisplay.maxChars = t), this.invalidateProperties();
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "maxWidth", {
      get: function get() {
        if (this.textDisplay) return this.textDisplay.maxWidth;
        var t = this.$TextInput[4];
        return t ? t : 1e5;
      },
      set: function set(t) {
        this.$TextInput[4] = t, this.textDisplay && (this.textDisplay.maxWidth = t), this.invalidateProperties();
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "maxHeight", {
      get: function get() {
        this.textDisplay;
        var t = this.$TextInput[5];
        return t ? t : 1e5;
      },
      set: function set(t) {
        this.$TextInput[5] = t, this.textDisplay && (this.textDisplay.maxHeight = t), this.invalidateProperties();
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "text", {
      get: function get() {
        return this.textDisplay ? this.textDisplay.text : this.$TextInput[6];
      },
      set: function set(t) {
        this.$TextInput[6] = t, this.textDisplay && (this.textDisplay.text = t), this.invalidateProperties(), this.invalidateState();
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "restrict", {
      get: function get() {
        return this.textDisplay ? this.textDisplay.restrict : this.$TextInput[7];
      },
      set: function set(t) {
        this.$TextInput[7] = t, this.textDisplay && (this.textDisplay.restrict = t), this.invalidateProperties();
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.focusInHandler = function (t) {
      this.isFocus = !0, this.invalidateState();
    }, n.prototype.focusOutHandler = function (t) {
      this.isFocus = !1, this.invalidateState();
    }, n.prototype.getCurrentState = function () {
      var t = this.skin;
      return !this.prompt || this.isFocus || this.text ? this.enabled ? "normal" : "disabled" : this.enabled && t.hasState("normalWithPrompt") ? "normalWithPrompt" : !this.enabled && t.hasState("disabledWithPrompt") ? "disabledWithPrompt" : void 0;
    }, n.prototype.partAdded = function (n, r) {
      i.prototype.partAdded.call(this, n, r);
      var o = this.$TextInput;
      r == this.textDisplay ? (this.textDisplayAdded(), this.textDisplay instanceof t.EditableText && (this.textDisplay.addEventListener(e.FOCUS_IN, this.focusInHandler, this), this.textDisplay.addEventListener(e.FOCUS_OUT, this.focusOutHandler, this))) : r == this.promptDisplay && o[0] && (this.promptDisplay.text = o[0]);
    }, n.prototype.partRemoved = function (n, r) {
      i.prototype.partRemoved.call(this, n, r), r == this.textDisplay ? (this.textDisplayRemoved(), this.textDisplay instanceof t.EditableText && (this.textDisplay.removeEventListener(e.FOCUS_IN, this.focusInHandler, this), this.textDisplay.removeEventListener(e.FOCUS_OUT, this.focusOutHandler, this))) : r == this.promptDisplay && (this.$TextInput[0] = this.promptDisplay.text);
    }, n.prototype.textDisplayAdded = function () {
      var t = this.$TextInput;
      t[1] && (this.textDisplay.displayAsPassword = t[1]), t[2] && (this.textDisplay.textColor = t[2]), t[3] && (this.textDisplay.maxChars = t[3]), t[4] && (this.textDisplay.maxWidth = t[4]), t[5] && (this.textDisplay.maxHeight = t[5]), t[6] && (this.textDisplay.text = t[6]), t[7] && (this.textDisplay.restrict = t[7]), t[8] && (this.textDisplay.inputType = t[8]);
    }, n.prototype.textDisplayRemoved = function () {
      var t = this.$TextInput;
      t[1] = this.textDisplay.displayAsPassword, t[2] = this.textDisplay.textColor, t[3] = this.textDisplay.maxChars, t[4] = this.textDisplay.maxWidth, t[5] = this.textDisplay.maxHeight, t[6] = this.textDisplay.text, t[7] = this.textDisplay.restrict, t[8] = this.textDisplay.inputType;
    }, n;
  }(t.Component);

  t.TextInput = i, __reflect(i.prototype, "eui.TextInput");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e() {
      return t.call(this) || this;
    }

    return __extends(e, t), e;
  }(t.ToggleButton);

  t.CheckBox = e, __reflect(e.prototype, "eui.CheckBox");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e() {
      return t.call(this) || this;
    }

    return __extends(e, t), e;
  }(t.ToggleButton);

  t.ToggleSwitch = e, __reflect(e.prototype, "eui.ToggleSwitch");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e() {
      var e = t.call(this) || this;
      return e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAddToStage, e), e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.onRemoveFromStage, e), e;
    }

    return __extends(e, t), e.prototype.onAddToStage = function (t) {
      this.$stage.addEventListener(egret.Event.RESIZE, this.onResize, this), this.onResize();
    }, e.prototype.onRemoveFromStage = function (t) {
      this.$stage.removeEventListener(egret.Event.RESIZE, this.onResize, this);
    }, e.prototype.onResize = function (t) {
      var e = this.$stage;
      this.$setWidth(e.$stageWidth), this.$setHeight(e.$stageHeight);
    }, e;
  }(t.Group);

  t.UILayer = e, __reflect(e.prototype, "eui.UILayer");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return __extends(e, t), e.prototype.updateDisplayList = function (e, i) {
      t.prototype.updateDisplayList.call(this, e, i);
      var n = this.thumb,
          r = this.$viewport;

      if (n && r) {
        var o = egret.$TempRectangle;
        n.getPreferredBounds(o);
        var s = o.height,
            a = o.x,
            h = r.scrollV,
            l = r.contentHeight,
            u = r.height;

        if (0 >= h) {
          var p = s * (1 - -h / (.5 * u));
          p = Math.max(5, Math.round(p)), n.setLayoutBoundsSize(0 / 0, p), n.setLayoutBoundsPosition(a, 0);
        } else if (h >= l - u) {
          var p = s * (1 - (h - l + u) / (.5 * u));
          p = Math.max(5, Math.round(p)), n.setLayoutBoundsSize(0 / 0, p), n.setLayoutBoundsPosition(a, i - p);
        } else {
          var c = (i - s) * h / (l - u);
          n.setLayoutBoundsSize(0 / 0, 0 / 0), n.setLayoutBoundsPosition(a, c);
        }
      }
    }, e.prototype.onPropertyChanged = function (t) {
      switch (t.property) {
        case "scrollV":
        case "contentHeight":
          this.invalidateDisplayList();
      }
    }, e;
  }(t.ScrollBarBase);

  t.VScrollBar = e, __reflect(e.prototype, "eui.VScrollBar");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e() {
      return t.call(this) || this;
    }

    return __extends(e, t), e.prototype.pointToValue = function (t, e) {
      if (!this.thumb || !this.track) return 0;
      var i = this.$Range,
          n = i[0] - i[2],
          r = this.getThumbRange();
      return i[2] + (0 != r ? (r - e) / r * n : 0);
    }, e.prototype.getThumbRange = function () {
      var t = egret.$TempRectangle;
      this.track.getLayoutBounds(t);
      var e = t.height;
      return this.thumb.getLayoutBounds(t), e - t.height;
    }, e.prototype.updateSkinDisplayList = function () {
      if (this.thumb && this.track) {
        var t = this.$Range,
            e = this.getThumbRange(),
            i = t[0] - t[2],
            n = i > 0 ? e - (this.pendingValue - t[2]) / i * e : 0,
            r = this.track.localToGlobal(0, n, egret.$TempPoint),
            o = r.x,
            s = r.y,
            a = this.thumb.$parent.globalToLocal(o, s, egret.$TempPoint).y,
            h = egret.$TempRectangle,
            l = h.height;

        if (this.thumb.getLayoutBounds(h), this.thumb.setLayoutBoundsPosition(h.x, Math.round(a)), this.trackHighlight) {
          var u = this.trackHighlight.$parent.globalToLocal(o, s, egret.$TempPoint).y;
          this.trackHighlight.y = Math.round(u + l), this.trackHighlight.height = Math.round(e - u);
        }
      }
    }, e;
  }(t.SliderBase);

  t.VSlider = e, __reflect(e.prototype, "eui.VSlider");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i._selectedChild = null, i.proposedSelectedIndex = t.ListBase.NO_PROPOSED_SELECTION, i._selectedIndex = -1, i;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "layout", {
      get: function get() {
        return this.$layout;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "selectedChild", {
      get: function get() {
        var t = this.selectedIndex;
        return t >= 0 && t < this.numChildren ? this.getChildAt(t) : null;
      },
      set: function set(t) {
        var e = this.getChildIndex(t);
        e >= 0 && e < this.numChildren && this.setSelectedIndex(e);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "selectedIndex", {
      get: function get() {
        return this.proposedSelectedIndex != t.ListBase.NO_PROPOSED_SELECTION ? this.proposedSelectedIndex : this._selectedIndex;
      },
      set: function set(t) {
        t = 0 | +t, this.setSelectedIndex(t);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.setSelectedIndex = function (e) {
      e != this.selectedIndex && (this.proposedSelectedIndex = e, this.invalidateProperties(), t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "selectedIndex"));
    }, i.prototype.$childAdded = function (i, n) {
      e.prototype.$childAdded.call(this, i, n), this.showOrHide(i, !1);
      var r = this.selectedIndex;
      -1 == r ? this.setSelectedIndex(n) : n <= this.selectedIndex && this.$stage && this.setSelectedIndex(r + 1), t.CollectionEvent.dispatchCollectionEvent(this, t.CollectionEvent.COLLECTION_CHANGE, t.CollectionEventKind.ADD, n, -1, [i.name]);
    }, i.prototype.$childRemoved = function (i, n) {
      e.prototype.$childRemoved.call(this, i, n), this.showOrHide(i, !0);
      var r = this.selectedIndex;
      n == r ? this.numChildren > 0 ? 0 == n ? (this.proposedSelectedIndex = 0, this.invalidateProperties()) : this.setSelectedIndex(0) : this.setSelectedIndex(-1) : r > n && this.setSelectedIndex(r - 1), t.CollectionEvent.dispatchCollectionEvent(this, t.CollectionEvent.COLLECTION_CHANGE, t.CollectionEventKind.REMOVE, n, -1, [i.name]);
    }, i.prototype.commitProperties = function () {
      e.prototype.commitProperties.call(this), this.proposedSelectedIndex != t.ListBase.NO_PROPOSED_SELECTION && (this.commitSelection(this.proposedSelectedIndex), this.proposedSelectedIndex = t.ListBase.NO_PROPOSED_SELECTION);
    }, i.prototype.commitSelection = function (t) {
      t >= 0 && t < this.numChildren ? (this._selectedIndex = t, this._selectedChild && this.showOrHide(this._selectedChild, !1), this._selectedChild = this.getElementAt(this._selectedIndex), this.showOrHide(this._selectedChild, !0)) : (this._selectedChild = null, this._selectedIndex = -1), this.invalidateSize(), this.invalidateDisplayList();
    }, i.prototype.showOrHide = function (t, e) {
      egret.is(t, "eui.UIComponent") && (t.includeInLayout = e), t.visible = e;
    }, Object.defineProperty(i.prototype, "length", {
      get: function get() {
        return this.$children.length;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.getItemAt = function (t) {
      var e = this.$children[t];
      return e ? e.name : "";
    }, i.prototype.getItemIndex = function (t) {
      for (var e = this.$children, i = e.length, n = 0; i > n; n++) {
        if (e[n].name == t) return n;
      }

      return -1;
    }, i;
  }(t.Group);

  t.ViewStack = e, __reflect(e.prototype, "eui.ViewStack", ["eui.ICollection", "egret.IEventDispatcher"]), t.registerBindable(e.prototype, "selectedIndex");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e;
  !function (t) {
    function e(t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    }

    var i = function () {
      function t(t, i) {
        this.easerFunction = e, this.isPlaying = !1, this.duration = 500, this.currentValue = 0, this.from = 0, this.to = 0, this.startTime = 0, this.endFunction = null, this.updateFunction = t, this.thisObject = i;
      }

      return t.prototype.play = function () {
        this.stop(), this.start();
      }, t.prototype.start = function () {
        this.isPlaying = !1, this.currentValue = 0, this.startTime = egret.getTimer(), this.doInterval(this.startTime), egret.startTick(this.doInterval, this);
      }, t.prototype.stop = function () {
        this.isPlaying = !1, this.startTime = 0, egret.stopTick(this.doInterval, this);
      }, t.prototype.doInterval = function (t) {
        var e = t - this.startTime;
        this.isPlaying || (this.isPlaying = !0);
        var i = this.duration,
            n = 0 == i ? 1 : Math.min(e, i) / i;
        this.easerFunction && (n = this.easerFunction(n)), this.currentValue = this.from + (this.to - this.from) * n, this.updateFunction && this.updateFunction.call(this.thisObject, this);
        var r = e >= i;
        return r && this.stop(), r && this.endFunction && this.endFunction.call(this.thisObject, this), !0;
      }, t;
    }();

    t.Animation = i, __reflect(i.prototype, "eui.sys.Animation");
  }(e = t.sys || (t.sys = {}));
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function () {
    function t() {}

    return t.prototype.getTheme = function (t, e, i, n) {
      function r(t) {
        var i = t.target;
        e.call(n, i.response);
      }

      function o(t) {
        i.call(n);
      }

      var s = new egret.HttpRequest();
      s.addEventListener(egret.Event.COMPLETE, r, n), s.addEventListener(egret.IOErrorEvent.IO_ERROR, o, n), s.responseType = egret.HttpResponseType.TEXT, s.open(t), s.send();
    }, t;
  }();

  t.DefaultThemeAdapter = e, __reflect(e.prototype, "eui.DefaultThemeAdapter", ["eui.IThemeAdapter"]);
}(eui || (eui = {}));
var eui;
!function (t) {
  function e(t, i) {
    var n = Object.getOwnPropertyDescriptor(t, i);
    if (n) return n;
    var r = Object.getPrototypeOf(t);
    return r ? e(r, i) : null;
  }

  function i(t, e) {
    for (var i = t[n], r = i.length, o = 0; r > o; o += 2) {
      var s = i[o],
          a = i[o + 1];
      s.call(a, e);
    }
  }

  var n = "__listeners__",
      r = "__bindables__",
      o = 0,
      s = function () {
    function s(t, e, i, n) {
      this.isExecuting = !1, this.property = t, this.handler = e, this.next = n, this.thisObject = i;
    }

    return s.watch = function (t, e, i, n) {
      if (e.length > 0) {
        var r = e.shift(),
            o = s.watch(null, e, i, n),
            a = new s(r, i, n, o);
        return a.reset(t), a;
      }

      return null;
    }, s.checkBindable = function (s, a) {
      var h = s[r];
      if (h && -1 != h.indexOf(a)) return !0;
      var l = egret.is(s, "egret.IEventDispatcher");
      l || s[n] || (s[n] = []);
      var u = e(s, a);

      if (u && u.set && u.get) {
        var p = u.set;

        u.set = function (e) {
          this[a] != e && (p.call(this, e), l ? t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, a) : i(this, a));
        };
      } else {
        if (u && (u.get || u.set)) return !1;
        o++;
        var c = "_" + o + a;
        s[c] = u ? u.value : null, u = {
          enumerable: !0,
          configurable: !0
        }, u.get = function () {
          return this[c];
        }, u.set = function (e) {
          this[c] != e && (this[c] = e, l ? t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, a) : i(this, a));
        };
      }

      Object.defineProperty(s, a, u), t.registerBindable(s, a);
    }, s.prototype.unwatch = function () {
      this.reset(null), this.handler = null, this.next && (this.next.handler = null);
    }, s.prototype.getValue = function () {
      return this.next ? this.next.getValue() : this.getHostPropertyValue();
    }, s.prototype.setHandler = function (t, e) {
      this.handler = t, this.thisObject = e, this.next && this.next.setHandler(t, e);
    }, s.prototype.reset = function (e) {
      var i = this.host;
      if (i) if (egret.is(i, "egret.IEventDispatcher")) i.removeEventListener(t.PropertyEvent.PROPERTY_CHANGE, this.wrapHandler, this);else {
        var r = i[n],
            o = r.indexOf(this);
        r.splice(o - 1, 2);
      }
      if (this.host = e, e) if (s.checkBindable(e, this.property), egret.is(e, "egret.IEventDispatcher")) e.addEventListener(t.PropertyEvent.PROPERTY_CHANGE, this.wrapHandler, this, !1, 100);else {
        var r = e[n];
        r.push(this.onPropertyChange), r.push(this);
      }
      this.next && this.next.reset(this.getHostPropertyValue());
    }, s.prototype.getHostPropertyValue = function () {
      return this.host ? this.host[this.property] : null;
    }, s.prototype.wrapHandler = function (t) {
      this.onPropertyChange(t.property);
    }, s.prototype.onPropertyChange = function (t) {
      if (t == this.property && !this.isExecuting) try {
        this.isExecuting = !0, this.next && this.next.reset(this.getHostPropertyValue()), this.handler.call(this.thisObject, this.getValue());
      } finally {
        this.isExecuting = !1;
      }
    }, s;
  }();

  t.Watcher = s, __reflect(s.prototype, "eui.Watcher");
}(eui || (eui = {}));
var eui;
!function (t) {
  function e(e) {
    for (var i = e[0], n = i instanceof t.Watcher ? i.getValue() : i, r = e.length, o = 1; r > o; o++) {
      var s = e[o];
      s instanceof t.Watcher && (s = s.getValue()), n += s;
    }

    return n;
  }

  var i = function () {
    function i() {}

    return i.bindProperty = function (e, i, n, r) {
      var o = t.Watcher.watch(e, i, null, null);

      if (o) {
        var s = function s(t) {
          n[r] = t;
        };

        o.setHandler(s, null), s(o.getValue());
      }

      return o;
    }, i.bindHandler = function (e, i, n, r) {
      var o = t.Watcher.watch(e, i, n, r);
      return o && n.call(r, o.getValue()), o;
    }, i.$bindProperties = function (n, r, o, s, a) {
      if (1 == r.length && 1 == o.length) return i.bindProperty(n, r[0].split("."), s, a);

      for (var h, l = function l() {
        s[a] = e(r);
      }, u = o.length, p = 0; u > p; p++) {
        var c = o[p],
            d = r[c].split(".");
        h = t.Watcher.watch(n, d, null, null), h && (r[c] = h, h.setHandler(l, null));
      }

      return l(), h;
    }, i;
  }();

  t.Binding = i, __reflect(i.prototype, "eui.Binding");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i(t) {
      var i = e.call(this) || this;
      return t ? i._source = t : i._source = [], i;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "source", {
      get: function get() {
        return this._source;
      },
      set: function set(e) {
        e || (e = []), this._source = e, this.dispatchCoEvent(t.CollectionEventKind.RESET);
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.refresh = function () {
      this.dispatchCoEvent(t.CollectionEventKind.REFRESH);
    }, Object.defineProperty(i.prototype, "length", {
      get: function get() {
        return this._source.length;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.addItem = function (e) {
      this._source.push(e), this.dispatchCoEvent(t.CollectionEventKind.ADD, this._source.length - 1, -1, [e]);
    }, i.prototype.addItemAt = function (e, i) {
      0 > i || i > this._source.length, this._source.splice(i, 0, e), this.dispatchCoEvent(t.CollectionEventKind.ADD, i, -1, [e]);
    }, i.prototype.getItemAt = function (t) {
      return this._source[t];
    }, i.prototype.getItemIndex = function (t) {
      for (var e = this._source.length, i = 0; e > i; i++) {
        if (this._source[i] === t) return i;
      }

      return -1;
    }, i.prototype.itemUpdated = function (e) {
      var i = this.getItemIndex(e);
      -1 != i && this.dispatchCoEvent(t.CollectionEventKind.UPDATE, i, -1, [e]);
    }, i.prototype.removeAll = function () {
      var e = this._source.concat();

      this._source = [], this.dispatchCoEvent(t.CollectionEventKind.REMOVE, 0, -1, e);
    }, i.prototype.removeItemAt = function (e) {
      if (!(0 > e || e >= this._source.length)) {
        var i = this._source.splice(e, 1)[0];

        return this.dispatchCoEvent(t.CollectionEventKind.REMOVE, e, -1, [i]), i;
      }
    }, i.prototype.replaceItemAt = function (e, i) {
      if (!(0 > i || i >= this._source.length)) {
        var n = this._source.splice(i, 1, e)[0];

        return this.dispatchCoEvent(t.CollectionEventKind.REPLACE, i, -1, [e], [n]), n;
      }
    }, i.prototype.replaceAll = function (t) {
      t || (t = []);

      for (var e = t.length, i = this._source.length, n = e; i > n; n++) {
        this.removeItemAt(e);
      }

      for (var n = 0; e > n; n++) {
        n >= i ? this.addItemAt(t[n], n) : this.replaceItemAt(t[n], n);
      }

      this._source = t;
    }, i.prototype.dispatchCoEvent = function (e, i, n, r, o) {
      t.CollectionEvent.dispatchCollectionEvent(this, t.CollectionEvent.COLLECTION_CHANGE, e, i, n, r, o);
    }, i;
  }(egret.EventDispatcher);

  t.ArrayCollection = e, __reflect(e.prototype, "eui.ArrayCollection", ["eui.ICollection", "egret.IEventDispatcher"]), t.registerProperty(e, "source", "Array", !0);
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = t.sys.UIComponentImpl,
      i = function (i) {
    function n() {
      var t = i.call(this) || this;
      return t._widthConstraint = 0 / 0, t.$isShowPrompt = !1, t.$promptColor = 6710886, t.$isFocusIn = !1, t.initializeUIValues(), t.type = egret.TextFieldType.INPUT, t.$EditableText = {
        0: null,
        1: 16777215,
        2: !1
      }, t;
    }

    return __extends(n, i), n.prototype.$invalidateTextField = function () {
      i.prototype.$invalidateTextField.call(this), this.invalidateSize();
    }, n.prototype.$setWidth = function (t) {
      var n = i.prototype.$setWidth.call(this, t),
          r = e.prototype.$setWidth.call(this, t);
      return n && r;
    }, n.prototype.$setHeight = function (t) {
      var n = i.prototype.$setHeight.call(this, t),
          r = e.prototype.$setHeight.call(this, t);
      return n && r;
    }, n.prototype.$getText = function () {
      var t = i.prototype.$getText.call(this);
      return t == this.$EditableText[0] && (t = ""), t;
    }, n.prototype.$setText = function (e) {
      var n = this.$EditableText[0];
      (n != e || null == n) && (this.$isShowPrompt = !1, this.textColor = this.$EditableText[1], this.displayAsPassword = this.$EditableText[2]), this.$isFocusIn || ("" == e || null == e) && (e = n, this.$isShowPrompt = !0, i.prototype.$setTextColor.call(this, this.$promptColor), i.prototype.$setDisplayAsPassword.call(this, !1));
      var r = i.prototype.$setText.call(this, e);
      return t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "text"), r;
    }, n.prototype.$onAddToStage = function (e, i) {
      t.sys.UIComponentImpl.prototype.$onAddToStage.call(this, e, i), this.addEventListener(egret.FocusEvent.FOCUS_IN, this.onfocusIn, this), this.addEventListener(egret.FocusEvent.FOCUS_OUT, this.onfocusOut, this);
    }, n.prototype.$onRemoveFromStage = function () {
      i.prototype.$onRemoveFromStage.call(this), this.removeEventListener(egret.FocusEvent.FOCUS_IN, this.onfocusIn, this), this.removeEventListener(egret.FocusEvent.FOCUS_OUT, this.onfocusOut, this);
    }, Object.defineProperty(n.prototype, "prompt", {
      get: function get() {
        return this.$EditableText[0];
      },
      set: function set(t) {
        var e = this.$EditableText,
            i = e[0];

        if (i != t) {
          e[0] = t;
          var n = this.text;
          n && n != i || this.showPromptText();
        }
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "promptColor", {
      get: function get() {
        return this.$promptColor;
      },
      set: function set(t) {
        if (t = 0 | +t, this.$promptColor != t) {
          this.$promptColor = t;
          var e = this.text;
          e && e != this.$EditableText[0] || this.showPromptText();
        }
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.onfocusOut = function () {
      this.$isFocusIn = !1, this.text || this.showPromptText();
    }, n.prototype.onfocusIn = function () {
      this.$isFocusIn = !0, this.$isShowPrompt = !1, this.displayAsPassword = this.$EditableText[2];
      var t = this.$EditableText,
          e = this.text;
      e && e != t[0] || (this.textColor = t[1], this.text = "");
    }, n.prototype.showPromptText = function () {
      var t = this.$EditableText;
      this.$isShowPrompt = !0, i.prototype.$setTextColor.call(this, this.$promptColor), i.prototype.$setDisplayAsPassword.call(this, !1), this.text = t[0];
    }, n.prototype.$setTextColor = function (t) {
      return t = 0 | +t, this.$EditableText[1] = t, this.$isShowPrompt || i.prototype.$setTextColor.call(this, t), !0;
    }, n.prototype.$setDisplayAsPassword = function (t) {
      return this.$EditableText[2] = t, this.$isShowPrompt || i.prototype.$setDisplayAsPassword.call(this, t), !0;
    }, n.prototype.createChildren = function () {
      this.onfocusOut();
    }, n.prototype.childrenCreated = function () {}, n.prototype.commitProperties = function () {}, n.prototype.measure = function () {
      var t = this.$UIComponent,
          e = this.$TextField,
          n = e[3],
          r = 0 / 0;
      isNaN(this._widthConstraint) ? isNaN(t[8]) ? 1e5 != t[13] && (r = t[13]) : r = t[8] : (r = this._widthConstraint, this._widthConstraint = 0 / 0), i.prototype.$setWidth.call(this, r), this.setMeasuredSize(this.textWidth, this.textHeight), i.prototype.$setWidth.call(this, n);
    }, n.prototype.updateDisplayList = function (t, e) {
      i.prototype.$setWidth.call(this, t), i.prototype.$setHeight.call(this, e);
    }, n.prototype.invalidateParentLayout = function () {}, n.prototype.setMeasuredSize = function (t, e) {}, n.prototype.invalidateProperties = function () {}, n.prototype.validateProperties = function () {}, n.prototype.invalidateSize = function () {}, n.prototype.validateSize = function (t) {}, n.prototype.invalidateDisplayList = function () {}, n.prototype.validateDisplayList = function () {}, n.prototype.validateNow = function () {}, n.prototype.setLayoutBoundsSize = function (t, i) {
      if (e.prototype.setLayoutBoundsSize.call(this, t, i), !isNaN(t) && t !== this._widthConstraint && 0 != t) {
        var n = this.$UIComponent;
        isNaN(n[9]) && t != n[16] && (this._widthConstraint = t, this.invalidateSize());
      }
    }, n.prototype.setLayoutBoundsPosition = function (t, e) {}, n.prototype.getLayoutBounds = function (t) {}, n.prototype.getPreferredBounds = function (t) {}, n;
  }(egret.TextField);

  t.EditableText = i, __reflect(i.prototype, "eui.EditableText", ["eui.UIComponent", "egret.DisplayObject", "eui.IDisplayText"]), t.sys.implementUIComponent(i, egret.TextField), t.registerBindable(i.prototype, "text");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e;
  !function (t) {
    function e(t) {
      var e = t - 1;
      return e * e * e + 1;
    }

    var i = 4,
        n = [1, 1.33, 1.66, 2],
        r = 2.33,
        o = .02,
        s = .998,
        a = .95,
        h = Math.log(s),
        l = function () {
      function l(i, n, r) {
        this.$scrollFactor = 1, this.previousTime = 0, this.velocity = 0, this.previousVelocity = [], this.currentPosition = 0, this.previousPosition = 0, this.currentScrollPos = 0, this.maxScrollPos = 0, this.offsetPoint = 0, this.$bounces = !0, this.started = !0, this.updateFunction = i, this.endFunction = n, this.target = r, this.animation = new t.Animation(this.onScrollingUpdate, this), this.animation.endFunction = this.finishScrolling, this.animation.easerFunction = e;
      }

      return l.prototype.isPlaying = function () {
        return this.animation.isPlaying;
      }, l.prototype.stop = function () {
        this.animation.stop(), egret.stopTick(this.onTick, this), this.started = !1;
      }, l.prototype.isStarted = function () {
        return this.started;
      }, l.prototype.start = function (t) {
        this.started = !0, this.velocity = 0, this.previousVelocity.length = 0, this.previousTime = egret.getTimer(), this.previousPosition = this.currentPosition = t, this.offsetPoint = t, egret.startTick(this.onTick, this);
      }, l.prototype.update = function (t, e, i) {
        e = Math.max(e, 0), this.currentPosition = t, this.maxScrollPos = e;
        var n = this.offsetPoint - t,
            r = n + i;
        this.offsetPoint = t, 0 > r && (this.$bounces ? r -= .5 * n : r = 0), r > e && (this.$bounces ? r -= .5 * n : r = e), this.currentScrollPos = r, this.updateFunction.call(this.target, r);
      }, l.prototype.finish = function (t, e) {
        egret.stopTick(this.onTick, this), this.started = !1;

        for (var i = this.velocity * r, l = this.previousVelocity, u = l.length, p = r, c = 0; u > c; c++) {
          var d = n[c];
          i += l[0] * d, p += d;
        }

        var f = i / p,
            y = Math.abs(f),
            g = 0,
            v = 0;
        if (y > o) {
          if (v = t + (f - o) / h * 2 * this.$scrollFactor, 0 > v || v > e) for (v = t; Math.abs(f) > o;) {
            v -= f, f *= 0 > v || v > e ? s * a : s, g++;
          } else g = Math.log(o / y) / h;
        } else v = t;

        if (this.target.$getThrowInfo) {
          var m = this.target.$getThrowInfo(t, v);
          v = m.toPos;
        }

        g > 0 ? (this.$bounces || (0 > v ? v = 0 : v > e && (v = e)), this.throwTo(v, g)) : this.finishScrolling();
      }, l.prototype.onTick = function (t) {
        var e = t - this.previousTime;

        if (e > 10) {
          var n = this.previousVelocity;
          n.length >= i && n.shift(), this.velocity = (this.currentPosition - this.previousPosition) / e, n.push(this.velocity), this.previousTime = t, this.previousPosition = this.currentPosition;
        }

        return !0;
      }, l.prototype.finishScrolling = function (t) {
        var e = this.currentScrollPos,
            i = this.maxScrollPos,
            n = e;
        0 > e && (n = 0), e > i && (n = i), this.throwTo(n, 300);
      }, l.prototype.throwTo = function (t, e) {
        void 0 === e && (e = 500);
        var i = this.currentScrollPos;
        if (i == t) return void this.endFunction.call(this.target);
        var n = this.animation;
        n.duration = e, n.from = i, n.to = t, n.play();
      }, l.prototype.onScrollingUpdate = function (t) {
        this.currentScrollPos = t.currentValue, this.updateFunction.call(this.target, t.currentValue);
      }, l;
    }();

    t.TouchScroll = l, __reflect(l.prototype, "eui.sys.TouchScroll");
  }(e = t.sys || (t.sys = {}));
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function () {
    function t() {}

    return t.LTR = "ltr", t.RTL = "rtl", t.TTB = "ttb", t.BTT = "btt", t;
  }();

  t.Direction = e, __reflect(e.prototype, "eui.Direction");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function () {
    function t() {}

    return t.AUTO = "auto", t.OFF = "off", t.ON = "on", t;
  }();

  t.ScrollPolicy = e, __reflect(e.prototype, "eui.ScrollPolicy");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i(t, i) {
      var n = e.call(this) || this;
      return n.delayList = [], n.skinMap = {}, n.$styles = {}, n.initialized = !t, i && egret.registerImplementation("eui.Theme", n), n.$configURL = t, n.load(t), n;
    }

    return __extends(i, e), i.prototype.load = function (e) {
      var i = this;
      t.getTheme(e, function (t) {
        return i.onConfigLoaded(t);
      });
    }, i.prototype.onConfigLoaded = function (t) {
      var e;
      if ("string" == typeof t) try {
        e = JSON.parse(t);
      } catch (i) {
        egret.$error(3e3);
      } else e = t;
      if (e && e.skins) for (var n = this.skinMap, r = e.skins, o = Object.keys(r), s = o.length, a = 0; s > a; a++) {
        var h = o[a];
        n[h] || this.mapSkin(h, r[h]);
      }
      e.styles && (this.$styles = e.styles);
      var l = e.paths;

      for (var u in l) {
        EXML.update(u, l[u]);
      }

      e.exmls && 0 != e.exmls.length ? e.exmls[0].gjs ? (e.exmls.forEach(function (t) {
        return EXML.$parseURLContentAsJs(t.path, t.gjs, t.className);
      }), this.onLoaded()) : e.exmls[0].content ? (e.exmls.forEach(function (t) {
        return EXML.$parseURLContent(t.path, t.content);
      }), this.onLoaded()) : EXML.$loadAll(e.exmls, this.onLoaded, this, !0) : this.onLoaded();
    }, i.prototype.onLoaded = function (t, e) {
      this.initialized = !0, this.handleDelayList(), this.dispatchEventWith(egret.Event.COMPLETE);
    }, i.prototype.handleDelayList = function () {
      for (var t = this.delayList, e = t.length, i = 0; e > i; i++) {
        var n = t[i];

        if (!n.$Component[5]) {
          var r = this.getSkinName(n);
          r && (n.$Component[1] = r, n.$parseSkinName());
        }
      }

      t.length = 0;
    }, i.prototype.getSkinName = function (t) {
      if (!this.initialized) return -1 == this.delayList.indexOf(t) && this.delayList.push(t), "";
      var e = this.skinMap,
          i = e[t.hostComponentKey];
      return i || (i = this.findSkinName(t)), i;
    }, i.prototype.findSkinName = function (t) {
      if (!t) return "";
      var e = t.__class__;
      if (void 0 === e) return "";
      var i = this.skinMap[e];
      return i || "eui.Component" == e ? i : this.findSkinName(Object.getPrototypeOf(t));
    }, i.prototype.mapSkin = function (t, e) {
      this.skinMap[t] = e;
    }, i.prototype.$getStyleConfig = function (t) {
      return this.$styles[t];
    }, i;
  }(egret.EventDispatcher);

  t.Theme = e, __reflect(e.prototype, "eui.Theme");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e(e, i, n, r, o, s, a, h) {
      var l = t.call(this, e, i, n) || this;
      return l.$initTo(r, o, s, a, h), l;
    }

    return __extends(e, t), e.prototype.$initTo = function (t, e, i, n, r) {
      this.kind = t, this.location = 0 | +e, this.oldLocation = 0 | +i, this.items = n || [], this.oldItems = r || [];
    }, e.prototype.clean = function () {
      t.prototype.clean.call(this), this.items = this.oldItems = null;
    }, e.dispatchCollectionEvent = function (t, i, n, r, o, s, a) {
      if (!t.hasEventListener(i)) return !0;
      var h = egret.Event.create(e, i);
      h.$initTo(n, r, o, s, a);
      var l = t.dispatchEvent(h);
      return egret.Event.release(h), l;
    }, e.COLLECTION_CHANGE = "collectionChange", e;
  }(egret.Event);

  t.CollectionEvent = e, __reflect(e.prototype, "eui.CollectionEvent");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function () {
    function t() {}

    return t.ADD = "add", t.REFRESH = "refresh", t.REMOVE = "remove", t.REPLACE = "replace", t.RESET = "reset", t.UPDATE = "update", t;
  }();

  t.CollectionEventKind = e, __reflect(e.prototype, "eui.CollectionEventKind");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e() {
      var e = null !== t && t.apply(this, arguments) || this;
      return e.item = null, e.itemRenderer = null, e.itemIndex = -1, e;
    }

    return __extends(e, t), e.prototype.clean = function () {
      t.prototype.clean.call(this), this.item = this.itemRenderer = null;
    }, e.dispatchItemTapEvent = function (t, i, n) {
      if (!t.hasEventListener(i)) return !0;
      var r = egret.Event.create(e, i);
      r.item = n.data, r.itemIndex = n.itemIndex, r.itemRenderer = n;
      var o = t.dispatchEvent(r);
      return egret.Event.release(r), o;
    }, e.ITEM_TAP = "itemTap", e;
  }(egret.Event);

  t.ItemTapEvent = e, __reflect(e.prototype, "eui.ItemTapEvent");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e(e, i, n, r) {
      var o = t.call(this, e, i, n) || this;
      return o.property = r, o;
    }

    return __extends(e, t), e.dispatchPropertyEvent = function (t, i, n) {
      if (!t.hasEventListener(i)) return !0;
      var r = egret.Event.create(e, i);
      r.property = n;
      var o = t.dispatchEvent(r);
      return egret.Event.release(r), o;
    }, e.PROPERTY_CHANGE = "propertyChange", e;
  }(egret.Event);

  t.PropertyEvent = e, __reflect(e.prototype, "eui.PropertyEvent");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e(e, i, n, r, o) {
      var s = t.call(this, e, i, n) || this;
      return r = +r, o = +o, s.currentPos = r, s.toPos = o, s;
    }

    return __extends(e, t), e.THROW = "throw", e;
  }(egret.Event);

  t.ScrollerThrowEvent = e, __reflect(e.prototype, "eui.ScrollerThrowEvent");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e(e, i, n) {
      return t.call(this, e, i, n) || this;
    }

    return __extends(e, t), e.dispatchUIEvent = function (t, i, n, r) {
      if (!t.hasEventListener(i)) return !0;
      var o = egret.Event.create(e, i, n, r),
          s = t.dispatchEvent(o);
      return egret.Event.release(o), s;
    }, e.CREATION_COMPLETE = "creationComplete", e.CHANGE_END = "changeEnd", e.CHANGE_START = "changeStart", e.CLOSING = "closing", e.MOVE = "move", e;
  }(egret.Event);

  t.UIEvent = e, __reflect(e.prototype, "eui.UIEvent");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e;
  !function (t) {
    var e = "eui.State",
        i = "eui.AddItems",
        n = "eui.SetProperty",
        r = "eui.SetStateProperty",
        o = "eui.Binding.$bindProperties",
        s = function () {
      function t() {
        this.indent = 0;
      }

      return t.prototype.toCode = function () {
        return "";
      }, t.prototype.getIndent = function (t) {
        void 0 === t && (t = this.indent);

        for (var e = "", i = 0; t > i; i++) {
          e += "	";
        }

        return e;
      }, t;
    }();

    t.CodeBase = s, __reflect(s.prototype, "eui.sys.CodeBase");

    var a = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.className = "", e.superClass = "", e.innerClassBlock = [], e.variableBlock = [], e.functionBlock = [], e;
      }

      return __extends(e, t), e.prototype.addInnerClass = function (t) {
        -1 == this.innerClassBlock.indexOf(t) && this.innerClassBlock.push(t);
      }, e.prototype.addVariable = function (t) {
        -1 == this.variableBlock.indexOf(t) && this.variableBlock.push(t);
      }, e.prototype.getVariableByName = function (t) {
        for (var e = this.variableBlock, i = e.length, n = 0; i > n; n++) {
          var r = e[n];
          if (r.name == t) return r;
        }

        return null;
      }, e.prototype.addFunction = function (t) {
        -1 == this.functionBlock.indexOf(t) && this.functionBlock.push(t);
      }, e.prototype.getFuncByName = function (t) {
        for (var e = this.functionBlock, i = e.length, n = 0; i > n; n++) {
          var r = e[n];
          if (r.name == t) return r;
        }

        return null;
      }, e.prototype.toCode = function () {
        var t = this.indent,
            e = this.getIndent(t),
            i = this.getIndent(t + 1),
            n = this.getIndent(t + 2),
            r = e + "(function (";
        r += this.superClass ? "_super) {\n" + i + "__extends(" + this.className + ", _super);\n" : ") {\n";

        for (var o = this.innerClassBlock, s = o.length, a = 0; s > a; a++) {
          var h = o[a];
          h.indent = t + 1, r += i + "var " + h.className + " = " + h.toCode() + "\n\n";
        }

        r += i + "function " + this.className + "() {\n", this.superClass && (r += n + "_super.call(this);\n");
        var l = this.variableBlock;
        s = l.length;

        for (var a = 0; s > a; a++) {
          var u = l[a];
          u.defaultValue && (r += n + u.toCode() + "\n");
        }

        if (this.constructCode) {
          var p = this.constructCode.toCode().split("\n");
          s = p.length;

          for (var a = 0; s > a; a++) {
            var c = p[a];
            r += n + c + "\n";
          }
        }

        r += i + "}\n", r += i + "var _proto = " + this.className + ".prototype;\n\n";
        var d = this.functionBlock;
        s = d.length;

        for (var a = 0; s > a; a++) {
          var f = d[a];
          f.indent = t + 1, r += f.toCode() + "\n";
        }

        return r += i + "return " + this.className + ";\n" + e, r += this.superClass ? "})(" + this.superClass + ");" : "})();";
      }, e;
    }(s);

    t.EXClass = a, __reflect(a.prototype, "eui.sys.EXClass");

    var h = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.lines = [], e;
      }

      return __extends(e, t), e.prototype.addVar = function (t, e) {
        var i = e ? " = " + e : "";
        this.addCodeLine("var " + t + i + ";");
      }, e.prototype.addAssignment = function (t, e, i) {
        var n = i ? "." + i : "";
        this.addCodeLine(t + n + " = " + e + ";");
      }, e.prototype.addReturn = function (t) {
        this.addCodeLine("return " + t + ";");
      }, e.prototype.addEmptyLine = function () {
        this.addCodeLine("");
      }, e.prototype.startIf = function (t) {
        this.addCodeLine("if(" + t + ")"), this.startBlock();
      }, e.prototype.startElse = function () {
        this.addCodeLine("else"), this.startBlock();
      }, e.prototype.startElseIf = function (t) {
        this.addCodeLine("else if(" + t + ")"), this.startBlock();
      }, e.prototype.startBlock = function () {
        this.addCodeLine("{"), this.indent++;
      }, e.prototype.endBlock = function () {
        this.indent--, this.addCodeLine("}");
      }, e.prototype.doFunction = function (t, e) {
        var i = e.join(",");
        this.addCodeLine(t + "(" + i + ")");
      }, e.prototype.addCodeLine = function (t) {
        this.lines.push(this.getIndent() + t);
      }, e.prototype.addCodeLineAt = function (t, e) {
        this.lines.splice(e, 0, this.getIndent() + t);
      }, e.prototype.containsCodeLine = function (t) {
        return -1 != this.lines.indexOf(t);
      }, e.prototype.concat = function (t) {
        this.lines = this.lines.concat(t.lines);
      }, e.prototype.toCode = function () {
        return this.lines.join("\n");
      }, e;
    }(s);

    t.EXCodeBlock = h, __reflect(h.prototype, "eui.sys.EXCodeBlock");

    var l = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.codeBlock = null, e.isGet = !1, e.name = "", e;
      }

      return __extends(e, t), e.prototype.toCode = function () {
        var t,
            e = this.getIndent(),
            i = this.getIndent(this.indent + 1),
            n = e;
        if (this.isGet ? (t = this.getIndent(this.indent + 2), n += 'Object.defineProperty(_proto, "skinParts", {\n', n += i + "get: function () {\n") : (t = i, n += "_proto." + this.name + " = function () {\n"), this.codeBlock) for (var r = this.codeBlock.toCode().split("\n"), o = r.length, s = 0; o > s; s++) {
          var a = r[s];
          n += t + a + "\n";
        }
        return n += this.isGet ? i + "},\n" + i + "enumerable: true,\n" + i + "configurable: true\n" + e + "});" : e + "};";
      }, e;
    }(s);

    t.EXFunction = l, __reflect(l.prototype, "eui.sys.EXFunction");

    var u = function (t) {
      function e(e, i) {
        var n = t.call(this) || this;
        return n.indent = 2, n.name = e, n.defaultValue = i, n;
      }

      return __extends(e, t), e.prototype.toCode = function () {
        return this.defaultValue ? "this." + this.name + " = " + this.defaultValue + ";" : "";
      }, e;
    }(s);

    t.EXVariable = u, __reflect(u.prototype, "eui.sys.EXVariable");

    var p = function (t) {
      function i(e, i) {
        var n = t.call(this) || this;
        return n.name = "", n.stateGroups = [], n.addItems = [], n.setProperty = [], n.name = e, i && (n.stateGroups = i), n;
      }

      return __extends(i, t), i.prototype.addOverride = function (t) {
        t instanceof c ? this.addItems.push(t) : this.setProperty.push(t);
      }, i.prototype.toCode = function () {
        for (var t = this.getIndent(1), i = "new " + e + ' ("' + this.name + '",\n' + t + "[\n", n = 0, r = !0, o = this.addItems.concat(this.setProperty); n < o.length;) {
          r ? r = !1 : i += ",\n";

          for (var s = o[n], a = s.toCode().split("\n"), h = a.length, l = 0; h > l; l++) {
            var u = a[l];
            a[l] = t + t + u;
          }

          i += a.join("\n"), n++;
        }

        return i += "\n" + t + "])";
      }, i;
    }(s);

    t.EXState = p, __reflect(p.prototype, "eui.sys.EXState");

    var c = function (t) {
      function e(e, i, n, r) {
        var o = t.call(this) || this;
        return o.target = e, o.property = i, o.position = n, o.relativeTo = r, o;
      }

      return __extends(e, t), e.prototype.toCode = function () {
        var t = "new " + i + '("' + this.target + '","' + this.property + '",' + this.position + ',"' + this.relativeTo + '")';
        return t;
      }, e;
    }(s);

    t.EXAddItems = c, __reflect(c.prototype, "eui.sys.EXAddItems");

    var d = function (t) {
      function e(e, i, n) {
        var r = t.call(this) || this;
        return r.target = e, r.name = i, r.value = n, r;
      }

      return __extends(e, t), e.prototype.toCode = function () {
        return "new " + n + '("' + this.target + '","' + this.name + '",' + this.value + ")";
      }, e;
    }(s);

    t.EXSetProperty = d, __reflect(d.prototype, "eui.sys.EXSetProperty");

    var f = function (t) {
      function e(e, i, n, r) {
        var o = t.call(this) || this;
        return e = e ? "this." + e : "this", o.target = e, o.property = i, o.templates = n, o.chainIndex = r, o;
      }

      return __extends(e, t), e.prototype.toCode = function () {
        var t = this.templates.join(","),
            e = this.chainIndex.join(",");
        return "new " + r + "(this, [" + t + "],[" + e + "]," + this.target + ',"' + this.property + '")';
      }, e;
    }(s);

    t.EXSetStateProperty = f, __reflect(f.prototype, "eui.sys.EXSetStateProperty");

    var y = function (t) {
      function e(e, i, n, r) {
        var o = t.call(this) || this;
        return o.target = e, o.property = i, o.templates = n, o.chainIndex = r, o;
      }

      return __extends(e, t), e.prototype.toCode = function () {
        var t = this.templates.join(","),
            e = this.chainIndex.join(",");
        return o + "(this, [" + t + "],[" + e + "]," + this.target + ',"' + this.property + '")';
      }, e;
    }(s);

    t.EXBinding = y, __reflect(y.prototype, "eui.sys.EXBinding");
  }(e = t.sys || (t.sys = {}));
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = t.sys.UIComponentImpl,
      i = function (i) {
    function n(t) {
      var e = i.call(this) || this;
      return e.$createChildrenCalled = !1, e.$fontChanged = !1, e._widthConstraint = 0 / 0, e._heightConstraint = 0 / 0, e.initializeUIValues(), e.text = t, e;
    }

    return __extends(n, i), n.prototype.$invalidateContentBounds = function () {
      i.prototype.$invalidateContentBounds.call(this), this.invalidateSize();
    }, n.prototype.$setWidth = function (t) {
      var n = i.prototype.$setWidth.call(this, t),
          r = e.prototype.$setWidth.call(this, t);
      return n && r;
    }, n.prototype.$setHeight = function (t) {
      var n = i.prototype.$setHeight.call(this, t),
          r = e.prototype.$setHeight.call(this, t);
      return n && r;
    }, n.prototype.$setText = function (e) {
      var n = i.prototype.$setText.call(this, e);
      return t.PropertyEvent.dispatchPropertyEvent(this, t.PropertyEvent.PROPERTY_CHANGE, "text"), n;
    }, n.prototype.$setFont = function (t) {
      return this.$fontForBitmapLabel == t ? !1 : (this.$fontForBitmapLabel = t, this.$createChildrenCalled ? this.$parseFont() : this.$fontChanged = !0, this.$fontStringChanged = !0, !0);
    }, n.prototype.$parseFont = function () {
      this.$fontChanged = !1;
      var e = this.$fontForBitmapLabel;
      "string" == typeof e ? t.getAssets(e, function (t) {
        this.$setFontData(t, e);
      }, this) : this.$setFontData(e);
    }, n.prototype.$setFontData = function (t, e) {
      return e && e != this.$fontForBitmapLabel ? void 0 : t == this.$font ? !1 : (this.$font = t, this.$invalidateContentBounds(), !0);
    }, n.prototype.createChildren = function () {
      this.$fontChanged && this.$parseFont(), this.$createChildrenCalled = !0;
    }, n.prototype.childrenCreated = function () {}, n.prototype.commitProperties = function () {}, n.prototype.measure = function () {
      var t = this.$UIComponent,
          e = this.$textFieldWidth,
          n = this.$textFieldHeight,
          r = 0 / 0;
      isNaN(this._widthConstraint) ? isNaN(t[8]) ? 1e5 != t[13] && (r = t[13]) : r = t[8] : (r = this._widthConstraint, this._widthConstraint = 0 / 0), i.prototype.$setWidth.call(this, r);
      var o = 0 / 0;
      isNaN(this._heightConstraint) ? isNaN(t[9]) ? 1e5 != t[15] && (o = t[15]) : o = t[9] : (o = this._heightConstraint, this._heightConstraint = 0 / 0), i.prototype.$setHeight.call(this, o), this.setMeasuredSize(this.textWidth, this.textHeight), i.prototype.$setWidth.call(this, e), i.prototype.$setHeight.call(this, n);
    }, n.prototype.updateDisplayList = function (t, e) {
      i.prototype.$setWidth.call(this, t), i.prototype.$setHeight.call(this, e);
    }, n.prototype.invalidateParentLayout = function () {}, n.prototype.setMeasuredSize = function (t, e) {}, n.prototype.invalidateProperties = function () {}, n.prototype.validateProperties = function () {}, n.prototype.invalidateSize = function () {}, n.prototype.validateSize = function (t) {}, n.prototype.invalidateDisplayList = function () {}, n.prototype.validateDisplayList = function () {}, n.prototype.validateNow = function () {}, n.prototype.setLayoutBoundsSize = function (t, i) {
      if (e.prototype.setLayoutBoundsSize.call(this, t, i), !isNaN(t) && t !== this._widthConstraint && 0 != t) {
        var n = this.$UIComponent;
        isNaN(n[9]) && t != n[16] && (this._widthConstraint = t, this._heightConstraint = i, this.invalidateSize());
      }
    }, n.prototype.setLayoutBoundsPosition = function (t, e) {}, n.prototype.getLayoutBounds = function (t) {}, n.prototype.getPreferredBounds = function (t) {}, n;
  }(egret.BitmapText);

  t.BitmapLabel = i, __reflect(i.prototype, "eui.BitmapLabel", ["eui.UIComponent", "egret.DisplayObject", "eui.IDisplayText"]), t.sys.implementUIComponent(i, egret.BitmapText), t.registerBindable(i.prototype, "text");
}(eui || (eui = {}));
var EXML;
!function (t) {
  function e(t) {
    return l.parse(t);
  }

  function i(t, e, i, n) {
    if (void 0 === n && (n = !1), n && t in p) return void (e && e.call(i, p[t], t));
    var r = u[t];
    return r ? void r.push([e, i]) : (u[t] = [[e, i]], void h(t, a));
  }

  function n(t, e, i, n) {
    if (void 0 === n && (n = !1), !t || 0 == t.length) return void (e && e.call(i, [], t));
    var o = [];
    t.forEach(function (s) {
      var a = function a(n, s) {
        o[n] = s, o.push(n), o.length == t.length && r(t, o, e, i);
      };

      return n && s in p ? void a(s, "") : void h(s, a);
    });
  }

  function r(t, e, i, n) {
    var r = [];
    t.forEach(function (t, i) {
      if (t in p && !e[t]) return void (r[i] = p[t]);
      var n = e[t],
          o = a(t, n);
      r[i] = o;
    }), i && i.call(n, r, t);
  }

  function o(t, e) {
    p[t] = e;
    var i = u[t];
    delete u[t];

    for (var n = i ? i.length : 0, r = 0; n > r; r++) {
      var o = i[r];
      o[0] && o[1] && o[0].call(o[1], e, t);
    }
  }

  function s(t, e, i) {
    var n = null;
    e && (n = l.$parseCode(e, i), o(t, n));
  }

  function a(t, i) {
    var n = null;
    if (i && "string" == typeof i) try {
      n = e(i);
    } catch (r) {
      console.error(t + "\n" + r.message);
    }

    if (i && i.prototype && (n = i), t) {
      n && (p[t] = n);
      var o = u[t];
      delete u[t];

      for (var s = o ? o.length : 0, a = 0; s > a; a++) {
        var h = o[a];
        h[0] && h[1] && h[0].call(h[1], n, t);
      }
    }

    return n;
  }

  function h(t, e) {
    var i = t;
    -1 == t.indexOf("://") && (i = c + t);

    var n = function n(i) {
      i || (i = ""), e(t, i);
    };

    eui.getTheme(i, n);
  }

  var l = new eui.sys.EXMLParser(),
      u = {},
      p = {},
      c = "";
  Object.defineProperty(t, "prefixURL", {
    get: function get() {
      return c;
    },
    set: function set(t) {
      c = t;
    },
    enumerable: !0,
    configurable: !0
  }), t.parse = e, t.load = i, t.$loadAll = n, t.update = o, t.$parseURLContentAsJs = s, t.$parseURLContent = a;
}(EXML || (EXML = {}));
var eui;
!function (t) {
  var e;
  !function (t) {
    function e(t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    }

    function i(t) {
      var e = egret.getDefinitionByName(t);
      return e ? e.prototype : null;
    }

    function n(t) {
      if (!t) return null;
      var e;
      return e = new t();
    }

    t.NS_S = "http://ns.egret.com/eui", t.NS_W = "http://ns.egret.com/wing";

    var r = ["Point", "Matrix", "Rectangle"],
        o = ["Array", "boolean", "string", "number"],
        s = "eui.",
        a = 0,
        h = {},
        l = function () {
      function l() {}

      return l.prototype.$describe = function (t) {
        if (!t) return null;
        var i = Object.getPrototypeOf(t);
        if (!i) return null;
        var r;
        if (i.hasOwnProperty("__hashCode__") && (r = h[i.__hashCode__])) return r;
        var s = Object.getPrototypeOf(i);
        if (!s) return null;
        var l = n(s.constructor),
            u = this.$describe(l);

        if (u) {
          var p = function p() {};

          p.prototype = u, r = new p();
        } else r = {};

        for (var c = Object.keys(i).concat(Object.keys(t)), d = c.length, f = t.__meta__, y = 0; d > y; y++) {
          var g = c[y];

          if ("constructor" != g && "_" != g.charAt(0) && "$" != g.charAt(0)) {
            var v = void 0;
            if (f && f[g]) v = f[g];else if (e(t[g])) v = "Array";else {
              if (v = _typeof(t[g]), "function" == v) continue;
              -1 == o.indexOf(v) && (v = "any");
            }
            r[g] = v;
          }
        }

        return Object.getPrototypeOf(s) && (i.__hashCode__ = a++, h[i.__hashCode__] = r), r;
      }, l.prototype.getClassNameById = function (e, n) {
        if (n == t.NS_S) {
          if ("Object" == e) return e;
          if (-1 != r.indexOf(e)) return "egret." + e;
        }

        var a = "";
        return -1 != o.indexOf(e) ? e : (n == t.NS_W || (a = n && n != t.NS_S ? n.substring(0, n.length - 1) + e : s + e), i(a) || (a = ""), a);
      }, l.prototype.getDefaultPropById = function (t, e) {
        var n,
            r = this.getClassNameById(t, e),
            o = i(r);
        return o && (n = o.__defaultProperty__), n ? n : "";
      }, l.prototype.getPropertyType = function (t, e) {
        if ("Object" == e) return "any";
        var r = "",
            o = i(e);

        if (o) {
          if (!o.hasOwnProperty("__hashCode__")) {
            var s = egret.getDefinitionByName(e),
                a = n(s);
            if (!a) return r;
            this.$describe(a);
          }

          var l = h[o.__hashCode__];
          l && (r = l[t]);
        }

        return r;
      }, l;
    }();

    t.EXMLConfig = l, __reflect(l.prototype, "eui.sys.EXMLConfig");
  }(e = t.sys || (t.sys = {}));
}(eui || (eui = {}));
var eui;
!function (t) {
  egret.$locale_strings = egret.$locale_strings || {}, egret.$locale_strings.en_US = egret.$locale_strings.en_US || {};
  var e = egret.$locale_strings.en_US;
  e[2001] = "EXML parsing error {0}: EXML file can't be found ", e[2002] = "EXML parsing error : invalid XML file:\n{0}", e[2003] = "EXML parsing error {0}: the class definitions corresponding to nodes can't be found  \n {1}", e[2004] = "EXML parsing error {0}: nodes cannot contain id property with the same name \n {1}", e[2005] = "EXML parsing error {0}: property with the name of '{1}' does not exist on the node, or the property does not have a default value: \n {2}", e[2006] = "EXML parsing error {0}: undefined view state name: '{1}' \n {2}", e[2007] = "EXML parsing error {0}: only UIComponent objects within the container can use the includeIn and excludeFrom properties\n {1}", e[2008] = "EXML parsing error {0}: fail to assign values of '{1}' class to property: '{2}' \n {3}", e[2009] = "EXML parsing error {0}: only one ID can be referenced in the node property value '{}' label; and complex expression is not allowed to use \n {1}", e[2010] = "EXML parsing error {0}: ID referenced by property: '{1}':  '{2}' does not exist \n {3}", e[2011] = "EXML parsing error {0}: fail to assign more than one child nodes to the same property: '{1}' \n {2}", e[2012] = "EXML parsing error {0}: no default property exists on the node; and you must explicitly declare the property name that the child node  is assigned to \n {1}", e[2013] = "EXML parsing error {0}: view state grammar is not allowed to use on property nodes of Array class \n {1} ", e[2014] = "EXML parsing error {0}: assigning the skin class itself to the node property is not allowed \n {1}", e[2015] = "EXML parsing error {0}: class definition referenced by node: {1} does not exist \n {2}", e[2016] = "EXML parsing error {0}: format error of 'scale9Grid' property value on the node: {1}", e[2017] = "EXML parsing error {0}: namespace prefix missing on the node: {1}", e[2018] = "EXML parsing error {0}: format error of 'skinName' property value on the node: {1}", e[2019] = "EXML parsing error {0}: the container’s child item must be visible nodes: {1}", e[2020] = "EXML parsing error {0}: for child nodes in w: Declarations, the includeIn and excludeFrom properties are not allowed to use \n {1}", e[2021] = "Compile errors in {0}, the attribute name: {1}, the attribute value: {2}.", e[2022] = "EXML parsing error: there contains illegal characters in the id `{0}`", e[2101] = "EXML parsing warnning : fail to register the class property : {0},there is already a class with the same name in the global,please try to rename the class name for the exml. \n {1}", e[2102] = "EXML parsing warnning {0}: no child node can be found on the property code \n {1}", e[2103] = "EXML parsing warnning {0}: the same property '{1}' on the node is assigned multiple times \n {2}", e[2104] = "EXML parsing warnning, Instantiate class {0} error，the parameters of its constructor method must be empty.", e[2201] = "BasicLayout doesn't support virtualization.", e[2202] = "parse skinName error，the parsing result of skinName must be a instance of eui.Skin.", e[2203] = "Could not find the skin class '{0}'。", e[2301] = "parse source failed，could not find asset from URL：{0} .";
}(eui || (eui = {}));
var eui;
!function (t) {
  egret.$locale_strings = egret.$locale_strings || {}, egret.$locale_strings.zh_CN = egret.$locale_strings.zh_CN || {};
  var e = egret.$locale_strings.zh_CN;
  e[2001] = "EXML解析错误 {0}: 找不到EXML文件", e[2002] = "EXML解析错误: 不是有效的XML文件:\n{0}", e[2003] = "EXML解析错误 {0}: 无法找到节点所对应的类定义\n{1}", e[2004] = "EXML解析错误 {0}: 节点不能含有同名的id属性\n{1}", e[2005] = "EXML解析错误 {0}: 节点上不存在名为'{1}'的属性，或者该属性没有初始值:\n{2}", e[2006] = "EXML解析错误 {0}: 未定义的视图状态名称:'{1}'\n{2}", e[2007] = "EXML解析错误 {0}: 只有处于容器内的 UIComponent 对象可以使用includeIn和excludeFrom属性\n{1}", e[2008] = "EXML解析错误 {0}: 无法将'{1}'类型的值赋给属性:'{2}'\n{3}", e[2009] = "EXML解析错误 {0}: 在节点属性值的‘{}’标签内只能引用一个ID，不允许使用复杂表达式\n{1}", e[2010] = "EXML解析错误 {0}: 属性:'{1}'所引用的ID: '{2}'不存在\n{3}", e[2011] = "EXML解析错误 {0}: 无法将多个子节点赋值给同一个属性:'{1}'\n{2}", e[2012] = "EXML解析错误 {0}: 节点上不存在默认属性，必须显式声明子节点要赋值到的属性名\n{1}", e[2013] = "EXML解析错误 {0}: 类型为Array的属性节点上不允许使用视图状态语法\n{1}", e[2014] = "EXML解析错误 {0}: 不允许将皮肤类自身赋值给节点属性\n{1}", e[2015] = "EXML解析错误 {0}: 节点引用的类定义:{1}不存在\n{2}", e[2016] = "EXML解析错误 {0}: 节点上'scale9Grid'属性值的格式错误:{1}", e[2017] = "EXML解析错误 {0}: 节点上缺少命名空间前缀:{1}", e[2018] = "EXML解析错误 {0}: 节点上'skinName'属性值的格式错误:{1}", e[2019] = "EXML解析错误 {0}: 容器的子项必须是可视节点:{1}", e[2020] = "EXML解析错误 {0}: 在w:Declarations内的子节点，不允许使用includeIn和excludeFrom属性\n{1}", e[2021] = "{0} 中存在编译错误，属性名 : {1}，属性值 : {2}", e[2022] = "EXML解析错误: id `{0}` 中含有非法字符", e[2101] = "EXML解析警告: 在EXML根节点上声明的 class 属性: {0} 注册失败，所对应的类已经存在，请尝试重命名要注册的类名。\n{1}", e[2102] = "EXML解析警告 {0}: 在属性节点上找不到任何子节点\n{1}", e[2103] = "EXML解析警告 {0}: 节点上的同一个属性'{1}'被多次赋值\n{2}", e[2104] = "EXML解析警告，无法直接实例化自定义组件：{0} ，在EXML中使用的自定义组件必须要能直接被实例化，否则可能导致后续EXML解析报错。", e[2201] = "BasicLayout 不支持虚拟化。", e[2202] = "皮肤解析出错，属性 skinName 的值必须要能够解析为一个 eui.Skin 的实例。", e[2203] = "找不到指定的皮肤类 '{0}'。", e[2301] = "素材解析失败，找不到URL：{0} 所对应的资源。";
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (e) {
    function i() {
      return e.call(this) || this;
    }

    return __extends(i, e), i.prototype.measure = function () {
      e.prototype.measure.call(this), t.sys.measure(this.$target);
    }, i.prototype.updateDisplayList = function (i, n) {
      e.prototype.updateDisplayList.call(this, i, n);
      var r = this.$target,
          o = t.sys.updateDisplayList(r, i, n);
      r.setContentSize(Math.ceil(o.x), Math.ceil(o.y));
    }, i;
  }(t.LayoutBase);

  t.BasicLayout = e, __reflect(e.prototype, "eui.BasicLayout");
}(eui || (eui = {})), function (t) {
  var e;
  !function (t) {
    function e(t, e) {
      if (!t || "number" == typeof t) return t;
      var i = t,
          n = i.indexOf("%");
      if (-1 == n) return +i;
      var r = +i.substring(0, n);
      return .01 * r * e;
    }

    function i(t) {
      if (t) {
        for (var e = 0, i = 0, n = egret.$TempRectangle, o = t.numChildren, s = 0; o > s; s++) {
          var a = t.getChildAt(s);

          if (egret.is(a, r) && a.$includeInLayout) {
            var h = a.$UIComponent,
                l = +h[4],
                u = +h[5],
                p = +h[0],
                c = +h[1],
                d = +h[2],
                f = +h[3],
                y = void 0,
                g = void 0;
            a.getPreferredBounds(n), isNaN(p) || isNaN(c) ? isNaN(l) ? isNaN(p) && isNaN(c) ? y = n.x : (y = isNaN(p) ? 0 : p, y += isNaN(c) ? 0 : c) : y = 2 * Math.abs(l) : y = p + c, isNaN(d) || isNaN(f) ? isNaN(u) ? isNaN(d) && isNaN(f) ? g = n.y : (g = isNaN(d) ? 0 : d, g += isNaN(f) ? 0 : f) : g = 2 * Math.abs(u) : g = d + f;
            var v = n.width,
                m = n.height;
            e = Math.ceil(Math.max(e, y + v)), i = Math.ceil(Math.max(i, g + m));
          }
        }

        t.setMeasuredSize(e, i);
      }
    }

    function n(t, i, n) {
      if (t) {
        for (var o = t.numChildren, s = 0, a = 0, h = egret.$TempRectangle, l = 0; o > l; l++) {
          var u = t.getChildAt(l);

          if (egret.is(u, r) && u.$includeInLayout) {
            var p = u.$UIComponent,
                c = e(p[4], .5 * i),
                d = e(p[5], .5 * n),
                f = e(p[0], i),
                y = e(p[1], i),
                g = e(p[2], n),
                v = e(p[3], n),
                m = p[6],
                $ = p[7],
                E = 0 / 0,
                C = 0 / 0;
            isNaN(f) || isNaN(y) ? isNaN(m) || (E = Math.round(i * Math.min(.01 * m, 1))) : E = i - y - f, isNaN(g) || isNaN(v) ? isNaN($) || (C = Math.round(n * Math.min(.01 * $, 1))) : C = n - v - g, u.setLayoutBoundsSize(E, C), u.getLayoutBounds(h);
            var _ = h.width,
                b = h.height,
                S = 0 / 0,
                T = 0 / 0;
            S = isNaN(c) ? isNaN(f) ? isNaN(y) ? h.x : i - _ - y : f : Math.round((i - _) / 2 + c), T = isNaN(d) ? isNaN(g) ? isNaN(v) ? h.y : n - b - v : g : Math.round((n - b) / 2 + d), u.setLayoutBoundsPosition(S, T), s = Math.max(s, S + _), a = Math.max(a, T + b);
          }
        }

        return egret.$TempPoint.setTo(s, a);
      }
    }

    var r = "eui.UIComponent";
    t.measure = i, t.updateDisplayList = n;
  }(e = t.sys || (t.sys = {}));
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function () {
    function t() {}

    return t.LEFT = "left", t.JUSTIFY_USING_GAP = "justifyUsingGap", t.JUSTIFY_USING_WIDTH = "justifyUsingWidth", t;
  }();

  t.ColumnAlign = e, __reflect(e.prototype, "eui.ColumnAlign");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = "eui.UIComponent",
      i = function (i) {
    function n() {
      return null !== i && i.apply(this, arguments) || this;
    }

    return __extends(n, i), n.prototype.measureReal = function () {
      for (var t = this.$target, i = t.numElements, n = i, r = 0, o = 0, s = egret.$TempRectangle, a = 0; i > a; a++) {
        var h = t.getElementAt(a);
        egret.is(h, e) && h.$includeInLayout ? (h.getPreferredBounds(s), r += s.width, o = Math.max(o, s.height)) : n--;
      }

      r += (n - 1) * this.$gap;
      var l = this.$paddingLeft + this.$paddingRight,
          u = this.$paddingTop + this.$paddingBottom;
      t.setMeasuredSize(r + l, o + u);
    }, n.prototype.measureVirtual = function () {
      for (var t = this.$target, i = this.$typicalWidth, n = this.getElementTotalSize(), r = Math.max(this.maxElementSize, this.$typicalHeight), o = egret.$TempRectangle, s = this.endIndex, a = this.elementSizeTable, h = this.startIndex; s > h; h++) {
        var l = t.getElementAt(h);
        egret.is(l, e) && l.$includeInLayout && (l.getPreferredBounds(o), n += o.width, n -= isNaN(a[h]) ? i : a[h], r = Math.max(r, o.height));
      }

      var u = this.$paddingLeft + this.$paddingRight,
          p = this.$paddingTop + this.$paddingBottom;
      t.setMeasuredSize(n + u, r + p);
    }, n.prototype.updateDisplayListReal = function (i, n) {
      var r = this.$target,
          o = this.$paddingLeft,
          s = this.$paddingRight,
          a = this.$paddingTop,
          h = this.$paddingBottom,
          l = this.$gap,
          u = Math.max(0, i - o - s),
          p = Math.max(0, n - a - h),
          c = this.$horizontalAlign == t.JustifyAlign.JUSTIFY,
          d = this.$verticalAlign == t.JustifyAlign.JUSTIFY || this.$verticalAlign == t.JustifyAlign.CONTENT_JUSTIFY,
          f = 0;
      d || (this.$verticalAlign == egret.VerticalAlign.MIDDLE ? f = .5 : this.$verticalAlign == egret.VerticalAlign.BOTTOM && (f = 1));
      var y,
          g,
          v,
          m = r.numElements,
          $ = m,
          E = o,
          C = a,
          _ = 0,
          b = 0,
          S = [],
          T = u,
          x = this.maxElementSize,
          I = egret.$TempRectangle;

      for (y = 0; m > y; y++) {
        var P = r.getElementAt(y);
        if (egret.is(P, e) && P.$includeInLayout) {
          if (P.getPreferredBounds(I), x = Math.max(x, I.height), c) _ += I.width;else {
            var L = P.$UIComponent;
            isNaN(L[6]) ? T -= I.width : (b += L[6], v = new t.sys.ChildInfo(), v.layoutElement = P, v.percent = L[6], v.min = L[12], v.max = L[13], S.push(v));
          }
        } else $--;
      }

      T -= l * ($ - 1), T = T > 0 ? T : 0;
      var N,
          O = u - _ - l * ($ - 1),
          A = $,
          D = {};

      if (c) {
        if (0 > O) {
          for (N = T / $, y = 0; m > y; y++) {
            g = r.getElementAt(y), egret.is(g, e) && g.$includeInLayout && (g.getPreferredBounds(I), I.width <= N && (T -= I.width, A--));
          }

          T = T > 0 ? T : 0;
        }
      } else if (b > 0) {
        this.flexChildrenProportionally(u, T, b, S);
        var B = 0,
            R = S.length;

        for (y = 0; R > y; y++) {
          v = S[y];
          var M = Math.round(v.size + B);
          B += v.size - M, D[v.layoutElement.$hashCode] = M, T -= M;
        }

        T = T > 0 ? T : 0;
      }

      this.$horizontalAlign == egret.HorizontalAlign.CENTER ? E = o + .5 * T : this.$horizontalAlign == egret.HorizontalAlign.RIGHT && (E = o + T);
      var w = o,
          V = a,
          H = 0,
          z = 0,
          U = Math.ceil(p);
      this.$verticalAlign == t.JustifyAlign.CONTENT_JUSTIFY && (U = Math.ceil(Math.max(p, x)));
      var k,
          F,
          G = 0;

      for (y = 0; m > y; y++) {
        var j = 0;

        if (g = r.getElementAt(y), egret.is(g, e) && g.$includeInLayout) {
          if (g.getPreferredBounds(I), k = 0 / 0, c ? (F = 0 / 0, O > 0 ? F = T * I.width / _ : 0 > O && I.width > N && (F = T / A), isNaN(F) || (k = Math.round(F + G), G += F - k)) : k = D[g.$hashCode], d) C = a, g.setLayoutBoundsSize(k, U), g.getLayoutBounds(I);else {
            var W = 0 / 0,
                L = g.$UIComponent;

            if (!isNaN(g.percentHeight)) {
              var X = Math.min(100, L[7]);
              W = Math.round(p * X * .01);
            }

            g.setLayoutBoundsSize(k, W), g.getLayoutBounds(I), j = (p - I.height) * f, j = j > 0 ? j : 0, C = a + j;
          }
          g.setLayoutBoundsPosition(Math.round(E), Math.round(C)), H = Math.ceil(I.width), z = Math.ceil(I.height), w = Math.max(w, E + H), V = Math.max(V, C + z), E += H + l;
        }
      }

      this.maxElementSize = x, r.setContentSize(w + s, V + h);
    }, n.prototype.updateDisplayListVirtual = function (i, n) {
      var r = this.$target;
      this.indexInViewCalculated ? this.indexInViewCalculated = !1 : this.getIndexInView();
      var o,
          s = this.$paddingRight,
          a = this.$paddingTop,
          h = this.$paddingBottom,
          l = this.$gap,
          u = r.numElements;
      if (-1 == this.startIndex || -1 == this.endIndex) return o = this.getStartPosition(u) - l + s, void r.setContentSize(o, r.contentHeight);
      var p = this.endIndex;
      r.setVirtualElementIndicesInView(this.startIndex, p);
      var c = this.$verticalAlign == t.JustifyAlign.JUSTIFY || this.$verticalAlign == t.JustifyAlign.CONTENT_JUSTIFY,
          d = this.$verticalAlign == t.JustifyAlign.CONTENT_JUSTIFY,
          f = 0;
      c || (this.$verticalAlign == egret.VerticalAlign.MIDDLE ? f = .5 : this.$verticalAlign == egret.VerticalAlign.BOTTOM && (f = 1));

      var y,
          g = egret.$TempRectangle,
          v = Math.max(0, n - a - h),
          m = Math.ceil(v),
          $ = this.$typicalHeight,
          E = this.$typicalWidth,
          C = this.maxElementSize,
          _ = Math.max($, this.maxElementSize);

      if (d) {
        for (var b = this.startIndex; p >= b; b++) {
          y = r.getVirtualElementAt(b), egret.is(y, e) && y.$includeInLayout && (y.getPreferredBounds(g), C = Math.max(C, g.height));
        }

        m = Math.ceil(Math.max(v, C));
      }

      for (var S, T = 0, x = 0, I = 0, P = !1, L = this.elementSizeTable, N = this.startIndex; p >= N; N++) {
        var O = 0;
        y = r.getVirtualElementAt(N), egret.is(y, e) && y.$includeInLayout && (y.getPreferredBounds(g), d || (C = Math.max(C, g.height)), c ? (x = a, y.setLayoutBoundsSize(0 / 0, m), y.getLayoutBounds(g)) : (y.getLayoutBounds(g), O = (v - g.height) * f, O = O > 0 ? O : 0, x = a + O), I = Math.max(I, g.height), P || (S = isNaN(L[N]) ? E : L[N], S != g.width && (P = !0)), L[N] = g.width, T = this.getStartPosition(N), y.setLayoutBoundsPosition(Math.round(T), Math.round(x)));
      }

      I += a + h, o = this.getStartPosition(u) - l + s, this.maxElementSize = C, r.setContentSize(o, I), (P || _ < this.maxElementSize) && r.invalidateSize();
    }, n.prototype.getStartPosition = function (t) {
      if (!this.$useVirtualLayout && this.$target) {
        var e = this.$target.getElementAt(t);
        if (e) return e.x;
      }

      for (var i = this.$typicalWidth, n = this.$paddingLeft, r = this.$gap, o = this.elementSizeTable, s = 0; t > s; s++) {
        var a = o[s];
        isNaN(a) && (a = i), n += a + r;
      }

      return n;
    }, n.prototype.getElementSize = function (t) {
      if (this.$useVirtualLayout) {
        var e = this.elementSizeTable[t];
        return isNaN(e) && (e = this.$typicalWidth), e;
      }

      return this.$target ? this.$target.getElementAt(t).width : 0;
    }, n.prototype.getElementTotalSize = function () {
      for (var t = this.$typicalWidth, e = this.$gap, i = 0, n = this.$target.numElements, r = this.elementSizeTable, o = 0; n > o; o++) {
        var s = r[o];
        isNaN(s) && (s = t), i += s + e;
      }

      return i -= e;
    }, n.prototype.elementAdded = function (t) {
      this.useVirtualLayout && (i.prototype.elementAdded.call(this, t), this.elementSizeTable.splice(t, 0, this.$typicalWidth));
    }, n.prototype.getIndexInView = function () {
      var t = this.$target;
      if (!t || 0 == t.numElements) return this.startIndex = this.endIndex = -1, !1;
      var e = t.$UIComponent;
      if (e[10] <= 0 || e[11] <= 0) return this.startIndex = this.endIndex = -1, !1;
      var i = t.numElements,
          n = this.getStartPosition(i - 1) + this.elementSizeTable[i - 1] + this.$paddingRight,
          r = t.scrollH;
      if (r > n - this.$paddingRight) return this.startIndex = -1, this.endIndex = -1, !1;
      var o = t.scrollH + e[10];
      if (o < this.$paddingLeft) return this.startIndex = -1, this.endIndex = -1, !1;
      var s = this.startIndex,
          a = this.endIndex;
      return this.startIndex = this.findIndexAt(r, 0, i - 1), -1 == this.startIndex && (this.startIndex = 0), this.endIndex = this.findIndexAt(o, 0, i - 1), -1 == this.endIndex && (this.endIndex = i - 1), s != this.startIndex || a != this.endIndex;
    }, n;
  }(t.LinearLayoutBase);

  t.HorizontalLayout = i, __reflect(i.prototype, "eui.HorizontalLayout");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function () {
    function t() {}

    return t.JUSTIFY = "justify", t.CONTENT_JUSTIFY = "contentJustify", t;
  }();

  t.JustifyAlign = e, __reflect(e.prototype, "eui.JustifyAlign");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function () {
    function t() {}

    return t.TOP = "top", t.JUSTIFY_USING_GAP = "justifyUsingGap", t.JUSTIFY_USING_HEIGHT = "justifyUsingHeight", t;
  }();

  t.RowAlign = e, __reflect(e.prototype, "eui.RowAlign");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = "eui.UIComponent",
      i = function (i) {
    function n() {
      var e = i.call(this) || this;
      return e.explicitHorizontalGap = 0 / 0, e._horizontalGap = 6, e.explicitVerticalGap = 0 / 0, e._verticalGap = 6, e._columnCount = -1, e._requestedColumnCount = 0, e._rowCount = -1, e._requestedRowCount = 0, e.explicitColumnWidth = 0 / 0, e._columnWidth = 0 / 0, e.explicitRowHeight = 0 / 0, e._rowHeight = 0 / 0, e._paddingLeft = 0, e._paddingRight = 0, e._paddingTop = 0, e._paddingBottom = 0, e._horizontalAlign = t.JustifyAlign.JUSTIFY, e._verticalAlign = t.JustifyAlign.JUSTIFY, e._columnAlign = t.ColumnAlign.LEFT, e._rowAlign = t.RowAlign.TOP, e._orientation = t.TileOrientation.ROWS, e.maxElementWidth = 0, e.maxElementHeight = 0, e.startIndex = -1, e.endIndex = -1, e.indexInViewCalculated = !1, e;
    }

    return __extends(n, i), Object.defineProperty(n.prototype, "horizontalGap", {
      get: function get() {
        return this._horizontalGap;
      },
      set: function set(t) {
        t = +t, t !== this._horizontalGap && (this.explicitHorizontalGap = t, this._horizontalGap = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "verticalGap", {
      get: function get() {
        return this._verticalGap;
      },
      set: function set(t) {
        t = +t, t !== this._verticalGap && (this.explicitVerticalGap = t, this._verticalGap = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "columnCount", {
      get: function get() {
        return this._columnCount;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "requestedColumnCount", {
      get: function get() {
        return this._requestedColumnCount;
      },
      set: function set(t) {
        t = +t || 0, this._requestedColumnCount !== t && (this._requestedColumnCount = t, this._columnCount = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "rowCount", {
      get: function get() {
        return this._rowCount;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "requestedRowCount", {
      get: function get() {
        return this._requestedRowCount;
      },
      set: function set(t) {
        t = +t || 0, this._requestedRowCount != t && (this._requestedRowCount = t, this._rowCount = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "columnWidth", {
      get: function get() {
        return this._columnWidth;
      },
      set: function set(t) {
        t = +t, t !== this._columnWidth && (this.explicitColumnWidth = t, this._columnWidth = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "rowHeight", {
      get: function get() {
        return this._rowHeight;
      },
      set: function set(t) {
        t = +t, t !== this._rowHeight && (this.explicitRowHeight = t, this._rowHeight = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "paddingLeft", {
      get: function get() {
        return this._paddingLeft;
      },
      set: function set(t) {
        t = +t || 0, this._paddingLeft != t && (this._paddingLeft = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "paddingRight", {
      get: function get() {
        return this._paddingRight;
      },
      set: function set(t) {
        t = +t || 0, this._paddingRight !== t && (this._paddingRight = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "paddingTop", {
      get: function get() {
        return this._paddingTop;
      },
      set: function set(t) {
        t = +t || 0, this._paddingTop != t && (this._paddingTop = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "paddingBottom", {
      get: function get() {
        return this._paddingBottom;
      },
      set: function set(t) {
        t = +t || 0, this._paddingBottom !== t && (this._paddingBottom = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "horizontalAlign", {
      get: function get() {
        return this._horizontalAlign;
      },
      set: function set(t) {
        this._horizontalAlign != t && (this._horizontalAlign = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "verticalAlign", {
      get: function get() {
        return this._verticalAlign;
      },
      set: function set(t) {
        this._verticalAlign != t && (this._verticalAlign = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "columnAlign", {
      get: function get() {
        return this._columnAlign;
      },
      set: function set(t) {
        this._columnAlign != t && (this._columnAlign = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "rowAlign", {
      get: function get() {
        return this._rowAlign;
      },
      set: function set(t) {
        this._rowAlign != t && (this._rowAlign = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(n.prototype, "orientation", {
      get: function get() {
        return this._orientation;
      },
      set: function set(t) {
        this._orientation != t && (this._orientation = t, this.invalidateTargetLayout());
      },
      enumerable: !0,
      configurable: !0
    }), n.prototype.invalidateTargetLayout = function () {
      var t = this.$target;
      t && (t.invalidateSize(), t.invalidateDisplayList());
    }, n.prototype.measure = function () {
      var t = this.$target;

      if (t) {
        var e = this._columnCount,
            i = this._rowCount,
            n = this._columnWidth,
            r = this._rowHeight,
            o = 0,
            s = 0,
            a = t.$UIComponent;
        this.calculateRowAndColumn(a[8], a[9]);
        var h = this._requestedColumnCount > 0 ? this._requestedColumnCount : this._columnCount,
            l = this._requestedRowCount > 0 ? this._requestedRowCount : this._rowCount,
            u = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
            p = isNaN(this._verticalGap) ? 0 : this._verticalGap;
        h > 0 && (o = h * (this._columnWidth + u) - u), l > 0 && (s = l * (this._rowHeight + p) - p);
        var c = this._paddingLeft + this._paddingRight,
            d = this._paddingTop + this._paddingBottom;
        t.setMeasuredSize(o + c, s + d), this._columnCount = e, this._rowCount = i, this._columnWidth = n, this._rowHeight = r;
      }
    }, n.prototype.calculateRowAndColumn = function (i, n) {
      var r = this.$target,
          o = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
          s = isNaN(this._verticalGap) ? 0 : this._verticalGap;
      this._rowCount = this._columnCount = -1;

      for (var a = r.numElements, h = a, l = 0; h > l; l++) {
        var u = r.getElementAt(l);
        !u || egret.is(u, e) && u.$includeInLayout || a--;
      }

      if (0 == a) return void (this._rowCount = this._columnCount = 0);
      (isNaN(this.explicitColumnWidth) || isNaN(this.explicitRowHeight)) && this.updateMaxElementSize(), isNaN(this.explicitColumnWidth) ? this._columnWidth = this.maxElementWidth : this._columnWidth = this.explicitColumnWidth, isNaN(this.explicitRowHeight) ? this._rowHeight = this.maxElementHeight : this._rowHeight = this.explicitRowHeight;
      var p = this._columnWidth + o;
      0 >= p && (p = 1);
      var c = this._rowHeight + s;
      0 >= c && (c = 1);
      var d = this._orientation == t.TileOrientation.COLUMNS,
          f = !isNaN(i),
          y = !isNaN(n),
          g = this._paddingLeft,
          v = this._paddingRight,
          m = this._paddingTop,
          $ = this._paddingBottom;
      if (this._requestedColumnCount > 0 || this._requestedRowCount > 0) this._requestedRowCount > 0 && (this._rowCount = Math.min(this._requestedRowCount, a)), this._requestedColumnCount > 0 && (this._columnCount = Math.min(this._requestedColumnCount, a));else if (f || y) {
        if (!f || y && d) {
          var E = Math.max(0, n - m - $);
          this._rowCount = Math.floor((E + s) / c), this._rowCount = Math.max(1, Math.min(this._rowCount, a));
        } else {
          var C = Math.max(0, i - g - v);
          this._columnCount = Math.floor((C + o) / p), this._columnCount = Math.max(1, Math.min(this._columnCount, a));
        }
      } else {
        var _ = Math.sqrt(a * p * c);

        d ? this._rowCount = Math.max(1, Math.round(_ / c)) : this._columnCount = Math.max(1, Math.round(_ / p));
      }
      -1 == this._rowCount && (this._rowCount = Math.max(1, Math.ceil(a / this._columnCount))), -1 == this._columnCount && (this._columnCount = Math.max(1, Math.ceil(a / this._rowCount))), this._requestedColumnCount > 0 && this._requestedRowCount > 0 && (this._orientation == t.TileOrientation.ROWS ? this._rowCount = Math.max(1, Math.ceil(a / this._requestedColumnCount)) : this._columnCount = Math.max(1, Math.ceil(a / this._requestedRowCount)));
    }, n.prototype.updateMaxElementSize = function () {
      this.$target && (this.$useVirtualLayout ? (this.maxElementWidth = Math.max(this.maxElementWidth, this.$typicalWidth), this.maxElementHeight = Math.max(this.maxElementHeight, this.$typicalHeight), this.doUpdateMaxElementSize(this.startIndex, this.endIndex)) : this.doUpdateMaxElementSize(0, this.$target.numElements - 1));
    }, n.prototype.doUpdateMaxElementSize = function (t, i) {
      var n = this.maxElementWidth,
          r = this.maxElementHeight,
          o = egret.$TempRectangle,
          s = this.$target;
      if (-1 != t && -1 != i) for (var a = t; i >= a; a++) {
        var h = s.getVirtualElementAt(a);
        egret.is(h, e) && h.$includeInLayout && (h.getPreferredBounds(o), n = Math.max(n, o.width), r = Math.max(r, o.height));
      }
      this.maxElementWidth = n, this.maxElementHeight = r;
    }, n.prototype.clearVirtualLayoutCache = function () {
      i.prototype.clearVirtualLayoutCache.call(this), this.maxElementWidth = 0, this.maxElementHeight = 0;
    }, n.prototype.scrollPositionChanged = function () {
      if (this.$useVirtualLayout) {
        var t = this.getIndexInView();
        t && (this.indexInViewCalculated = !0, this.$target.invalidateDisplayList());
      }
    }, n.prototype.getIndexInView = function () {
      if (!this.$target || 0 == this.$target.numElements) return this.startIndex = this.endIndex = -1, !1;
      var e = this.$target,
          i = e.numElements;
      if (!this.$useVirtualLayout) return this.startIndex = 0, this.endIndex = i - 1, !1;
      var n = e.$UIComponent;
      if (0 == n[10] || 0 == n[11]) return this.startIndex = this.endIndex = -1, !1;
      var r = this.startIndex,
          o = this.endIndex,
          s = this._paddingLeft,
          a = this._paddingTop,
          h = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
          l = isNaN(this._verticalGap) ? 0 : this._verticalGap;

      if (this._orientation == t.TileOrientation.COLUMNS) {
        var u = this._columnWidth + h;
        if (0 >= u) return this.startIndex = 0, this.endIndex = i - 1, !1;
        var p = e.scrollH,
            c = p + n[10],
            d = Math.floor((p - s) / u);
        0 > d && (d = 0);
        var f = Math.ceil((c - s) / u);
        0 > f && (f = 0), this.startIndex = Math.min(i - 1, Math.max(0, d * this._rowCount)), this.endIndex = Math.min(i - 1, Math.max(0, f * this._rowCount - 1));
      } else {
        var y = this._rowHeight + l;
        if (0 >= y) return this.startIndex = 0, this.endIndex = i - 1, !1;
        var g = e.scrollV,
            v = g + n[11],
            m = Math.floor((g - a) / y);
        0 > m && (m = 0);
        var $ = Math.ceil((v - a) / y);
        0 > $ && ($ = 0), this.startIndex = Math.min(i - 1, Math.max(0, m * this._columnCount)), this.endIndex = Math.min(i - 1, Math.max(0, $ * this._columnCount - 1));
      }

      return this.startIndex != r || this.endIndex != o;
    }, n.prototype.updateDisplayList = function (n, r) {
      if (i.prototype.updateDisplayList.call(this, n, r), this.$target) {
        var o = this.$target,
            s = this._paddingLeft,
            a = this._paddingRight,
            h = this._paddingTop,
            l = this._paddingBottom;
        if (this.indexInViewCalculated) this.indexInViewCalculated = !1;else {
          if (this.calculateRowAndColumn(n, r), 0 == this._rowCount || 0 == this._columnCount) return void o.setContentSize(s + a, h + l);
          this.adjustForJustify(n, r), this.getIndexInView();
        }
        if (this.$useVirtualLayout && (this.calculateRowAndColumn(n, r), this.adjustForJustify(n, r)), -1 == this.startIndex || -1 == this.endIndex) return void o.setContentSize(0, 0);
        var u = this.endIndex;
        o.setVirtualElementIndicesInView(this.startIndex, u);

        for (var p, c, d, f, y, g = this._orientation == t.TileOrientation.COLUMNS, v = this.startIndex, m = isNaN(this._horizontalGap) ? 0 : this._horizontalGap, $ = isNaN(this._verticalGap) ? 0 : this._verticalGap, E = this._rowCount, C = this._columnCount, _ = this._columnWidth, b = this._rowHeight, S = this.startIndex; u >= S; S++) {
          if (p = this.$useVirtualLayout ? this.target.getVirtualElementAt(S) : this.target.getElementAt(S), egret.is(p, e) && p.$includeInLayout) {
            switch (g ? (f = Math.ceil((v + 1) / E) - 1, y = Math.ceil((v + 1) % E) - 1, -1 == y && (y = E - 1)) : (f = Math.ceil((v + 1) % C) - 1, -1 == f && (f = C - 1), y = Math.ceil((v + 1) / C) - 1), this._horizontalAlign) {
              case egret.HorizontalAlign.RIGHT:
                c = n - (f + 1) * (_ + m) + m - a;
                break;

              case egret.HorizontalAlign.LEFT:
                c = f * (_ + m) + s;
                break;

              default:
                c = f * (_ + m) + s;
            }

            switch (this._verticalAlign) {
              case egret.VerticalAlign.TOP:
                d = y * (b + $) + h;
                break;

              case egret.VerticalAlign.BOTTOM:
                d = r - (y + 1) * (b + $) + $ - l;
                break;

              default:
                d = y * (b + $) + h;
            }

            this.sizeAndPositionElement(p, c, d, _, b), v++;
          }
        }

        var T = s + a,
            x = h + l,
            I = (_ + m) * C - m,
            P = (b + $) * E - $;
        o.setContentSize(I + T, P + x);
      }
    }, n.prototype.sizeAndPositionElement = function (e, i, n, r, o) {
      var s = 0 / 0,
          a = 0 / 0,
          h = e.$UIComponent;
      this._horizontalAlign == t.JustifyAlign.JUSTIFY ? s = r : isNaN(h[6]) || (s = r * h[6] * .01), this._verticalAlign == t.JustifyAlign.JUSTIFY ? a = o : isNaN(h[7]) || (a = o * h[7] * .01), e.setLayoutBoundsSize(Math.round(s), Math.round(a));
      var l = i,
          u = egret.$TempRectangle;

      switch (e.getLayoutBounds(u), this._horizontalAlign) {
        case egret.HorizontalAlign.RIGHT:
          l += r - u.width;
          break;

        case egret.HorizontalAlign.CENTER:
          l = i + (r - u.width) / 2;
      }

      var p = n;

      switch (this._verticalAlign) {
        case egret.VerticalAlign.BOTTOM:
          p += o - u.height;
          break;

        case egret.VerticalAlign.MIDDLE:
          p += (o - u.height) / 2;
      }

      e.setLayoutBoundsPosition(Math.round(l), Math.round(p));
    }, n.prototype.adjustForJustify = function (e, i) {
      var n = this._paddingLeft,
          r = this._paddingRight,
          o = this._paddingTop,
          s = this._paddingBottom,
          a = Math.max(0, e - n - r),
          h = Math.max(0, i - o - s);
      isNaN(this.explicitVerticalGap) || (this._verticalGap = this.explicitVerticalGap), isNaN(this.explicitHorizontalGap) || (this._horizontalGap = this.explicitHorizontalGap), this._verticalGap = isNaN(this._verticalGap) ? 0 : this._verticalGap, this._horizontalGap = isNaN(this._horizontalGap) ? 0 : this._horizontalGap;
      var l,
          u = h - this._rowHeight * this._rowCount,
          p = a - this._columnWidth * this._columnCount;
      u > 0 && (this._rowAlign == t.RowAlign.JUSTIFY_USING_GAP ? (l = Math.max(1, this._rowCount - 1), this._verticalGap = u / l) : this._rowAlign == t.RowAlign.JUSTIFY_USING_HEIGHT && this._rowCount > 0 && (this._rowHeight += (u - (this._rowCount - 1) * this._verticalGap) / this._rowCount)), p > 0 && (this._columnAlign == t.ColumnAlign.JUSTIFY_USING_GAP ? (l = Math.max(1, this._columnCount - 1), this._horizontalGap = p / l) : this._columnAlign == t.ColumnAlign.JUSTIFY_USING_WIDTH && this._columnCount > 0 && (this._columnWidth += (p - (this._columnCount - 1) * this._horizontalGap) / this._columnCount));
    }, n;
  }(t.LayoutBase);

  t.TileLayout = i, __reflect(i.prototype, "eui.TileLayout");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function () {
    function t() {}

    return t.ROWS = "rows", t.COLUMNS = "columns", t;
  }();

  t.TileOrientation = e, __reflect(e.prototype, "eui.TileOrientation");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = "eui.UIComponent",
      i = function (i) {
    function n() {
      return null !== i && i.apply(this, arguments) || this;
    }

    return __extends(n, i), n.prototype.measureReal = function () {
      for (var t = this.$target, i = t.numElements, n = i, r = 0, o = 0, s = egret.$TempRectangle, a = 0; i > a; a++) {
        var h = t.getElementAt(a);
        egret.is(h, e) && h.$includeInLayout ? (h.getPreferredBounds(s), o += s.height, r = Math.max(r, s.width)) : n--;
      }

      o += (n - 1) * this.$gap;
      var l = this.$paddingLeft + this.$paddingRight,
          u = this.$paddingTop + this.$paddingBottom;
      t.setMeasuredSize(r + l, o + u);
    }, n.prototype.measureVirtual = function () {
      for (var t = this.$target, i = this.$typicalHeight, n = this.getElementTotalSize(), r = Math.max(this.maxElementSize, this.$typicalWidth), o = egret.$TempRectangle, s = this.endIndex, a = this.elementSizeTable, h = this.startIndex; s > h; h++) {
        var l = t.getElementAt(h);
        egret.is(l, e) && l.$includeInLayout && (l.getPreferredBounds(o), n += o.height, n -= isNaN(a[h]) ? i : a[h], r = Math.max(r, o.width));
      }

      var u = this.$paddingLeft + this.$paddingRight,
          p = this.$paddingTop + this.$paddingBottom;
      t.setMeasuredSize(r + u, n + p);
    }, n.prototype.updateDisplayListReal = function (i, n) {
      var r = this.$target,
          o = this.$paddingLeft,
          s = this.$paddingRight,
          a = this.$paddingTop,
          h = this.$paddingBottom,
          l = this.$gap,
          u = Math.max(0, i - o - s),
          p = Math.max(0, n - a - h),
          c = this.$verticalAlign == t.JustifyAlign.JUSTIFY,
          d = this.$horizontalAlign == t.JustifyAlign.JUSTIFY || this.$horizontalAlign == t.JustifyAlign.CONTENT_JUSTIFY,
          f = 0;
      d || (this.$horizontalAlign == egret.HorizontalAlign.CENTER ? f = .5 : this.$horizontalAlign == egret.HorizontalAlign.RIGHT && (f = 1));
      var y,
          g,
          v,
          m = r.numElements,
          $ = m,
          E = o,
          C = a,
          _ = 0,
          b = 0,
          S = [],
          T = p,
          x = this.maxElementSize,
          I = egret.$TempRectangle;

      for (y = 0; m > y; y++) {
        var P = r.getElementAt(y);
        if (egret.is(P, e) && P.$includeInLayout) {
          if (P.getPreferredBounds(I), x = Math.max(x, I.width), c) _ += I.height;else {
            var L = P.$UIComponent;
            isNaN(L[7]) ? T -= I.height : (b += L[7], v = new t.sys.ChildInfo(), v.layoutElement = P, v.percent = L[7], v.min = L[14], v.max = L[15], S.push(v));
          }
        } else $--;
      }

      T -= l * ($ - 1), T = T > 0 ? T : 0;
      var N,
          O = p - _ - l * ($ - 1),
          A = $,
          D = {};

      if (c) {
        if (0 > O) {
          for (N = T / $, y = 0; m > y; y++) {
            g = r.getElementAt(y), egret.is(g, e) && g.$includeInLayout && (g.getPreferredBounds(I), I.height <= N && (T -= I.height, A--));
          }

          T = T > 0 ? T : 0;
        }
      } else if (b > 0) {
        this.flexChildrenProportionally(p, T, b, S);
        var B = 0,
            R = S.length;

        for (y = 0; R > y; y++) {
          v = S[y];
          var M = Math.round(v.size + B);
          B += v.size - M, D[v.layoutElement.$hashCode] = M, T -= M;
        }

        T = T > 0 ? T : 0;
      }

      this.$verticalAlign == egret.VerticalAlign.MIDDLE ? C = a + .5 * T : this.$verticalAlign == egret.VerticalAlign.BOTTOM && (C = a + T);
      var w = o,
          V = a,
          H = 0,
          z = 0,
          U = Math.ceil(u);
      this.$horizontalAlign == t.JustifyAlign.CONTENT_JUSTIFY && (U = Math.ceil(Math.max(u, x)));
      var k,
          F,
          G = 0;

      for (y = 0; m > y; y++) {
        var j = 0;

        if (g = r.getElementAt(y), egret.is(g, e) && g.$includeInLayout) {
          if (g.getPreferredBounds(I), k = 0 / 0, c ? (F = 0 / 0, O > 0 ? F = T * I.height / _ : 0 > O && I.height > N && (F = T / A), isNaN(F) || (k = Math.round(F + G), G += F - k)) : k = D[g.$hashCode], d) E = o, g.setLayoutBoundsSize(U, k), g.getLayoutBounds(I);else {
            var W = 0 / 0,
                L = g.$UIComponent;

            if (!isNaN(L[6])) {
              var X = Math.min(100, L[6]);
              W = Math.round(u * X * .01);
            }

            g.setLayoutBoundsSize(W, k), g.getLayoutBounds(I), j = (u - I.width) * f, j = j > 0 ? j : 0, E = o + j;
          }
          g.setLayoutBoundsPosition(Math.round(E), Math.round(C)), H = Math.ceil(I.width), z = Math.ceil(I.height), w = Math.max(w, E + H), V = Math.max(V, C + z), C += z + l;
        }
      }

      this.maxElementSize = x, r.setContentSize(w + s, V + h);
    }, n.prototype.updateDisplayListVirtual = function (i, n) {
      var r = this.$target;
      this.indexInViewCalculated ? this.indexInViewCalculated = !1 : this.getIndexInView();
      var o,
          s = this.$paddingBottom,
          a = this.$paddingLeft,
          h = this.$paddingRight,
          l = this.$gap,
          u = r.numElements;
      if (-1 == this.startIndex || -1 == this.endIndex) return o = this.getStartPosition(u) - l + s, void r.setContentSize(r.contentWidth, o);
      var p = this.endIndex;
      r.setVirtualElementIndicesInView(this.startIndex, p);
      var c = this.$horizontalAlign == t.JustifyAlign.JUSTIFY || this.$horizontalAlign == t.JustifyAlign.CONTENT_JUSTIFY,
          d = this.$horizontalAlign == t.JustifyAlign.CONTENT_JUSTIFY,
          f = 0;
      c || (this.$horizontalAlign == egret.HorizontalAlign.CENTER ? f = .5 : this.$horizontalAlign == egret.HorizontalAlign.RIGHT && (f = 1));

      var y,
          g = egret.$TempRectangle,
          v = Math.max(0, i - a - h),
          m = Math.ceil(v),
          $ = this.$typicalHeight,
          E = this.$typicalWidth,
          C = this.maxElementSize,
          _ = Math.max(E, this.maxElementSize);

      if (d) {
        for (var b = this.startIndex; p >= b; b++) {
          y = r.getVirtualElementAt(b), egret.is(y, e) && y.$includeInLayout && (y.getPreferredBounds(g), C = Math.max(C, g.width));
        }

        m = Math.ceil(Math.max(v, C));
      }

      for (var S, T = 0, x = 0, I = 0, P = !1, L = this.elementSizeTable, N = this.startIndex; p >= N; N++) {
        var O = 0;
        y = r.getVirtualElementAt(N), egret.is(y, e) && y.$includeInLayout && (y.getPreferredBounds(g), d || (C = Math.max(C, g.width)), c ? (T = a, y.setLayoutBoundsSize(m, 0 / 0), y.getLayoutBounds(g)) : (y.getLayoutBounds(g), O = (v - g.width) * f, O = O > 0 ? O : 0, T = a + O), I = Math.max(I, g.width), P || (S = isNaN(L[N]) ? $ : L[N], S != g.height && (P = !0)), L[N] = g.height, x = this.getStartPosition(N), y.setLayoutBoundsPosition(Math.round(T), Math.round(x)));
      }

      I += a + h, o = this.getStartPosition(u) - l + s, this.maxElementSize = C, r.setContentSize(I, o), (P || _ < this.maxElementSize) && r.invalidateSize();
    }, n.prototype.getStartPosition = function (t) {
      if (!this.$useVirtualLayout && this.$target) {
        var e = this.$target.getElementAt(t);
        if (e) return e.y;
      }

      for (var i = this.$typicalHeight, n = this.$paddingTop, r = this.$gap, o = this.elementSizeTable, s = 0; t > s; s++) {
        var a = o[s];
        isNaN(a) && (a = i), n += a + r;
      }

      return n;
    }, n.prototype.getElementSize = function (t) {
      if (this.$useVirtualLayout) {
        var e = this.elementSizeTable[t];
        return isNaN(e) && (e = this.$typicalHeight), e;
      }

      return this.$target ? this.$target.getElementAt(t).height : 0;
    }, n.prototype.getElementTotalSize = function () {
      for (var t = this.$typicalHeight, e = this.$gap, i = 0, n = this.$target.numElements, r = this.elementSizeTable, o = 0; n > o; o++) {
        var s = r[o];
        isNaN(s) && (s = t), i += s + e;
      }

      return i -= e;
    }, n.prototype.elementAdded = function (t) {
      this.$useVirtualLayout && (i.prototype.elementAdded.call(this, t), this.elementSizeTable.splice(t, 0, this.$typicalHeight));
    }, n.prototype.getIndexInView = function () {
      var t = this.$target;
      if (!t || 0 == t.numElements) return this.startIndex = this.endIndex = -1, !1;
      var e = t.$UIComponent;
      if (0 == e[10] || 0 == e[11]) return this.startIndex = this.endIndex = -1, !1;
      var i = t.numElements,
          n = this.getStartPosition(i - 1) + this.elementSizeTable[i - 1] + this.$paddingBottom,
          r = t.scrollV;
      if (r > n - this.$paddingBottom) return this.startIndex = -1, this.endIndex = -1, !1;
      var o = t.scrollV + e[11];
      if (o < this.$paddingTop) return this.startIndex = -1, this.endIndex = -1, !1;
      var s = this.startIndex,
          a = this.endIndex;
      return this.startIndex = this.findIndexAt(r, 0, i - 1), -1 == this.startIndex && (this.startIndex = 0), this.endIndex = this.findIndexAt(o, 0, i - 1), -1 == this.endIndex && (this.endIndex = i - 1), s != this.startIndex || a != this.endIndex;
    }, n;
  }(t.LinearLayoutBase);

  t.VerticalLayout = i, __reflect(i.prototype, "eui.VerticalLayout");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return __extends(e, t), e.prototype.updateDisplayList = function (e, i) {
      t.prototype.updateDisplayList.call(this, e, i);
      var n = this.thumb,
          r = this.$viewport;

      if (n && r) {
        var o = egret.$TempRectangle;
        n.getPreferredBounds(o);
        var s = o.width,
            a = o.y,
            h = r.scrollH,
            l = r.contentWidth,
            u = r.width;

        if (0 >= h) {
          var p = s * (1 - -h / (.5 * u));
          p = Math.max(5, Math.round(p)), n.setLayoutBoundsSize(p, 0 / 0), n.setLayoutBoundsPosition(0, a);
        } else if (h >= l - u) {
          var p = s * (1 - (h - l + u) / (.5 * u));
          p = Math.max(5, Math.round(p)), n.setLayoutBoundsSize(p, 0 / 0), n.setLayoutBoundsPosition(e - p, a);
        } else {
          var c = (e - s) * h / (l - u);
          n.setLayoutBoundsSize(0 / 0, 0 / 0), n.setLayoutBoundsPosition(c, a);
        }
      }
    }, e.prototype.onPropertyChanged = function (t) {
      switch (t.property) {
        case "scrollH":
        case "contentWidth":
          this.invalidateDisplayList();
      }
    }, e;
  }(t.ScrollBarBase);

  t.HScrollBar = e, __reflect(e.prototype, "eui.HScrollBar");
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function () {
    function t(t, e, i, n) {
      this.target = t, this.propertyName = e, this.position = i, this.relativeTo = n;
    }

    return t.prototype.apply = function (t, e) {
      var i,
          n = t[this.relativeTo],
          r = t[this.target],
          o = this.propertyName ? t[this.propertyName] : e;

      if (r && o) {
        switch (this.position) {
          case 0:
            i = 0;
            break;

          case 1:
            i = -1;
            break;

          case 2:
            i = o.getChildIndex(n);
            break;

          case 3:
            i = o.getChildIndex(n) + 1;
        }

        -1 == i && (i = o.numChildren), egret.is(o, "eui.Component") && o.$Component[8].$elementsContent.push(r), o.addChildAt(r, i);
      }
    }, t.prototype.remove = function (t, e) {
      var i = this.propertyName ? t[this.propertyName] : e,
          n = t[this.target];

      if (n && i && (n.$parent === i && i.removeChild(n), egret.is(i, "eui.Component"))) {
        var r = i.$Component[8].$elementsContent,
            o = r.indexOf(n);
        o > -1 && r.splice(o, 1);
      }
    }, t;
  }();

  t.AddItems = e, __reflect(e.prototype, "eui.AddItems", ["eui.IOverride"]);
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function () {
    function t(t, e, i) {
      this.target = t, this.name = e, this.value = i;
    }

    return t.prototype.apply = function (t, e) {
      var i = this.target ? t[this.target] : t;
      i && (this.oldValue = i[this.name], this.setPropertyValue(i, this.name, this.value, this.oldValue));
    }, t.prototype.remove = function (t, e) {
      var i = this.target ? t[this.target] : t;
      i && (this.setPropertyValue(i, this.name, this.oldValue, this.oldValue), this.oldValue = null);
    }, t.prototype.setPropertyValue = function (t, e, i, n) {
      void 0 === i || null === i ? t[e] = i : "number" == typeof n ? t[e] = +i : "boolean" == typeof n ? t[e] = this.toBoolean(i) : t[e] = i;
    }, t.prototype.toBoolean = function (t) {
      return "string" == typeof t ? "true" == t.toLowerCase() : 0 != t;
    }, t;
  }();

  t.SetProperty = e, __reflect(e.prototype, "eui.SetProperty", ["eui.IOverride"]);
}(eui || (eui = {}));
var eui;
!function (t) {
  var e = function () {
    function e(t, e, i, n, r) {
      this.host = t, this.templates = e, this.chainIndex = i, this.target = n, this.prop = r;
    }

    return e.prototype.apply = function (e, i) {
      if (this.target) {
        var n = this.target[this.prop];
        this.oldValue && this.setPropertyValue(this.target, this.prop, this.oldValue, this.oldValue), n && (this.oldValue = n), t.Binding.$bindProperties(this.host, this.templates.concat(), this.chainIndex.concat(), this.target, this.prop);
      }
    }, e.prototype.remove = function (t, e) {
      if (this.target) {
        var i = this.oldValue;
        this.target[this.prop] && (this.oldValue = this.target[this.prop]), i && this.setPropertyValue(this.target, this.prop, i, i);
      }
    }, e.prototype.setPropertyValue = function (t, e, i, n) {
      void 0 === i || null === i ? t[e] = i : "number" == typeof n ? t[e] = +i : "boolean" == typeof n ? t[e] = this.toBoolean(i) : t[e] = i;
    }, e.prototype.toBoolean = function (t) {
      return "string" == typeof t ? "true" == t.toLowerCase() : 0 != t;
    }, e;
  }();

  t.SetStateProperty = e, __reflect(e.prototype, "eui.SetStateProperty", ["eui.IOverride"]);
}(eui || (eui = {}));
var eui;
!function (t) {
  var e;
  !function (t) {
    function e(t, e, i, n, o, s, a, h, l, u) {
      var p;

      if (!isNaN(i) && isNaN(n)) {
        if (p = r(t, e, i, s, i, h, i, u)) return p;
      } else if (isNaN(i) && !isNaN(n) && (p = r(t, e, o, n, a, n, l, n))) return p;

      return p = r(t, e, o, s, a, h, l, u);
    }

    function i(t, e, i, r, o, s, a, h, l, u) {
      var p;

      if (!isNaN(i) && isNaN(r)) {
        if (p = n(t, e, i, s, i, h, i, u)) return p;
      } else if (isNaN(i) && !isNaN(r) && (p = n(t, e, o, r, a, r, l, r))) return p;

      return p = n(t, e, o, s, a, h, l, u);
    }

    function n(t, e, i, n, r, s, h, l) {
      var u = e.b,
          p = e.d;
      if (u > -1e-9 && 1e-9 > u && (u = 0), p > -1e-9 && 1e-9 > p && (p = 0), 0 == u && 0 == p) return null;
      if (0 == u && 0 == p) return null;
      if (0 == u) return egret.Point.create(i, t / Math.abs(p));
      if (0 == p) return egret.Point.create(t / Math.abs(u), n);
      var c,
          d,
          f,
          y = u * p >= 0 ? p : -p;

      if (0 != y && i > 0) {
        var g = 1 / y;
        i = Math.max(r, Math.min(h, i)), d = i, f = (t - u * d) * g, f >= s && l >= f && u * d + y * f >= 0 && (c = egret.Point.create(d, f)), f = (-t - u * d) * g, f >= s && l >= f && 0 > u * d + y * f && (!c || a(c.x, c.y, e).width > a(d, f, e).width) && (egret.Point.release(c), c = egret.Point.create(d, f));
      }

      if (0 != u && n > 0) {
        var v = 1 / u;
        n = Math.max(s, Math.min(l, n)), f = n, d = (t - y * f) * v, d >= r && h >= d && u * d + y * f >= 0 && (!c || a(c.x, c.y, e).width > a(d, f, e).width) && (c = egret.Point.create(d, f)), d = (-t - y * f) * v, d >= r && h >= d && 0 > u * d + y * f && (!c || a(c.x, c.y, e).width > a(d, f, e).width) && (egret.Point.release(c), c = egret.Point.create(d, f));
      }

      if (c) return c;
      var m = e.a,
          $ = e.c,
          E = m * $ >= 0 ? $ : -$;
      return o(u, y, t, r, s, h, l, m, E);
    }

    function r(t, e, i, n, r, s, h, l) {
      var u = e.a,
          p = e.c;
      if (u > -1e-9 && 1e-9 > u && (u = 0), p > -1e-9 && 1e-9 > p && (p = 0), 0 == u && 0 == p) return null;
      if (0 == u) return egret.Point.create(i, t / Math.abs(p));
      if (0 == p) return egret.Point.create(t / Math.abs(u), n);
      var c,
          d,
          f,
          y = u * p >= 0 ? p : -p;

      if (0 != y && i > 0) {
        var g = 1 / y;
        i = Math.max(r, Math.min(h, i)), d = i, f = (t - u * d) * g, f >= s && l >= f && u * d + y * f >= 0 && (c = egret.Point.create(d, f)), f = (-t - u * d) * g, f >= s && l >= f && 0 > u * d + y * f && (!c || a(c.x, c.y, e).height > a(d, f, e).height) && (egret.Point.release(c), c = egret.Point.create(d, f));
      }

      if (0 != u && n > 0) {
        var v = 1 / u;
        n = Math.max(s, Math.min(l, n)), f = n, d = (t - y * f) * v, d >= r && h >= d && u * d + y * f >= 0 && (!c || a(c.x, c.y, e).height > a(d, f, e).height) && (egret.Point.release(c), c = egret.Point.create(d, f)), d = (-t - y * f) * v, d >= r && h >= d && 0 > u * d + y * f && (!c || a(c.x, c.y, e).height > a(d, f, e).height) && (egret.Point.release(c), c = egret.Point.create(d, f));
      }

      if (c) return c;
      var m = e.b,
          $ = e.d,
          E = m * $ >= 0 ? $ : -$;
      return o(u, y, t, r, s, h, l, m, E);
    }

    function o(t, e, i, n, r, o, s, a, h) {
      if (0 == t || 0 == e) return null;
      var l,
          u,
          p = (i - n * t) / e,
          c = (i - o * t) / e,
          d = Math.max(r, Math.min(p, c)),
          f = Math.min(s, Math.max(p, c)),
          y = a * e - t * h;
      return f >= d ? (u = Math.abs(y) < 1e-9 ? i / (t + e) : a * i / y, u = Math.max(d, Math.min(u, f)), l = (i - e * u) / t, egret.Point.create(l, u)) : (p = -(n * t + i) / e, c = -(o * t + i) / e, d = Math.max(r, Math.min(p, c)), f = Math.min(s, Math.max(p, c)), f >= d ? (u = Math.abs(y) < 1e-9 ? -i / (t + e) : -a * i / y, u = Math.max(d, Math.min(u, f)), l = (-i - e * u) / t, egret.Point.create(l, u)) : null);
    }

    function s(t, e, i, n, r, s, a) {
      var l = i.a,
          u = i.b,
          p = i.c,
          c = i.d;
      if (l > -1e-9 && 1e-9 > l && (l = 0), u > -1e-9 && 1e-9 > u && (u = 0), p > -1e-9 && 1e-9 > p && (p = 0), c > -1e-9 && 1e-9 > c && (c = 0), 0 == u && 0 == p) return 0 == l || 0 == c ? null : egret.Point.create(t / Math.abs(l), e / Math.abs(c));
      if (0 == l && 0 == c) return 0 == u || 0 == p ? null : egret.Point.create(e / Math.abs(u), t / Math.abs(p));
      var d = l * p >= 0 ? p : -p,
          f = u * c >= 0 ? c : -c,
          y = l * f - u * d;
      if (Math.abs(y) < 1e-9) return 0 == d || 0 == l || l == -d ? null : Math.abs(l * e - u * t) > 1e-9 ? null : o(l, d, t, n, n, s, a, u, f);
      var g = 1 / y;
      t *= g, e *= g;
      var v;
      return v = h(l, d, u, f, t, e), v && n <= v.x && v.x <= s && r <= v.y && v.y <= a && l * v.x + d * v.x >= 0 && u * v.x + f * v.y >= 0 ? v : (v = h(l, d, u, f, t, -e), v && n <= v.x && v.x <= s && r <= v.y && v.y <= a && l * v.x + d * v.x >= 0 && u * v.x + f * v.y < 0 ? v : (v = h(l, d, u, f, -t, e), v && n <= v.x && v.x <= s && r <= v.y && v.y <= a && l * v.x + d * v.x < 0 && u * v.x + f * v.y >= 0 ? v : (v = h(l, d, u, f, -t, -e), v && n <= v.x && v.x <= s && r <= v.y && v.y <= a && l * v.x + d * v.x < 0 && u * v.x + f * v.y < 0 ? v : (egret.Point.release(v), null))));
    }

    function a(t, e, i) {
      var n = egret.$TempRectangle.setTo(0, 0, t, e);
      return i.$transformBounds(n), n;
    }

    function h(t, e, i, n, r, o) {
      return egret.Point.create(n * r - e * o, t * o - i * r);
    }

    var l = .1,
        u = .1,
        p = function () {
      function t() {}

      return t.fitBounds = function (t, n, r, o, h, p, c, d, f, y, g) {
        if (isNaN(t) && isNaN(n)) return egret.Point.create(p, c);
        var v,
            m = u > d ? 0 : d - u,
            $ = u > f ? 0 : f - u,
            E = y + u,
            C = g + u;
        if (isNaN(t) || isNaN(n)) return isNaN(t) ? i(n, r, o, h, p, c, m, $, E, C) : e(t, r, o, h, p, c, m, $, E, C);

        if (v = s(t, n, r, m, $, E, C), !v) {
          var _ = void 0;

          if (_ = e(t, r, o, h, p, c, m, $, E, C)) {
            var b = a(_.x, _.y, r).height;
            b - l > n && (egret.Point.release(_), _ = null);
          }

          var S = void 0;

          if (S = i(n, r, o, h, p, c, m, $, E, C)) {
            var T = a(S.x, S.y, r).width;
            T - l > t && (egret.Point.release(S), S = null);
          }

          v = _ && S ? _.x * _.y > S.x * S.y ? _ : S : _ ? _ : S, egret.Point.release(_), egret.Point.release(S);
        }

        return v;
      }, t;
    }();

    t.MatrixUtil = p, __reflect(p.prototype, "eui.sys.MatrixUtil");
  }(e = t.sys || (t.sys = {}));
}(eui || (eui = {}));
;
window.eui = eui;

/***/ }),

/***/ "./src/js/main.min.js":
/*!****************************!*\
  !*** ./src/js/main.min.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var system = __webpack_require__(/*! @system */ "@system");

var egret = window.egret,
    __reflect = void 0 && (void 0).__reflect || function (e, t, r) {
  e.__class__ = t, r ? r.push(t) : r = [t], e.__types__ = e.__types__ ? r.concat(e.__types__) : r;
},
    __extends = void 0 && (void 0).__extends || function (e, t) {
  function r() {
    this.constructor = e;
  }

  for (var n in t) {
    t.hasOwnProperty(n) && (e[n] = t[n]);
  }

  r.prototype = t.prototype, e.prototype = new r();
},
    __awaiter = void 0 && (void 0).__awaiter || function (e, t, r, n) {
  return new (r || (r = Promise))(function (i, o) {
    function a(e) {
      try {
        l(n.next(e));
      } catch (t) {
        o(t);
      }
    }

    function s(e) {
      try {
        l(n["throw"](e));
      } catch (t) {
        o(t);
      }
    }

    function l(e) {
      e.done ? i(e.value) : new r(function (t) {
        t(e.value);
      }).then(a, s);
    }

    l((n = n.apply(e, t || [])).next());
  });
},
    __generator = void 0 && (void 0).__generator || function (e, t) {
  function r(e) {
    return function (t) {
      return n([e, t]);
    };
  }

  function n(r) {
    if (i) throw new TypeError("Generator is already executing.");

    for (; l;) {
      try {
        if (i = 1, o && (a = o[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(a = a.call(o, r[1])).done) return a;

        switch (o = 0, a && (r = [0, a.value]), r[0]) {
          case 0:
          case 1:
            a = r;
            break;

          case 4:
            return l.label++, {
              value: r[1],
              done: !1
            };

          case 5:
            l.label++, o = r[1], r = [0];
            continue;

          case 7:
            r = l.ops.pop(), l.trys.pop();
            continue;

          default:
            if (a = l.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
              l = 0;
              continue;
            }

            if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
              l.label = r[1];
              break;
            }

            if (6 === r[0] && l.label < a[1]) {
              l.label = a[1], a = r;
              break;
            }

            if (a && l.label < a[2]) {
              l.label = a[2], l.ops.push(r);
              break;
            }

            a[2] && l.ops.pop(), l.trys.pop();
            continue;
        }

        r = t.call(e, l);
      } catch (n) {
        r = [6, n], o = 0;
      } finally {
        i = a = 0;
      }
    }

    if (5 & r[0]) throw r[1];
    return {
      value: r[0] ? r[1] : void 0,
      done: !0
    };
  }

  var i,
      o,
      a,
      s,
      l = {
    label: 0,
    sent: function sent() {
      if (1 & a[0]) throw a[1];
      return a[1];
    },
    trys: [],
    ops: []
  };
  return s = {
    next: r(0),
    "throw": r(1),
    "return": r(2)
  }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
    return this;
  }), s;
},
    AssetAdapter = function () {
  function e() {}

  return e.prototype.getAsset = function (e, t, r) {
    function n(n) {
      t.call(r, n, e);
    }

    if (RES.hasRes(e)) {
      var i = RES.getRes(e);
      i ? n(i) : RES.getResAsync(e, n, this);
    } else RES.getResByUrl(e, n, this, RES.ResourceItem.TYPE_IMAGE);
  }, e;
}();

__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);

var LoadingUI = function (e) {
  function t() {
    var t = e.call(this) || this;
    return t.createView(), t;
  }

  return __extends(t, e), t.prototype.createView = function () {
    this.textField = new egret.TextField(), this.addChild(this.textField), this.textField.y = 300, this.textField.width = 480, this.textField.height = 100, this.textField.textAlign = "center";
  }, t.prototype.onProgress = function (e, t) {
    this.textField.text = "Loading..." + e + "/" + t;
  }, t;
}(egret.Sprite);

__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);

var Main = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this;
  }

  return __extends(t, e), t.prototype.createChildren = function () {
    e.prototype.createChildren.call(this), egret.lifecycle.addLifecycleListener(function (e) {}), egret.lifecycle.onPause = function () {
      egret.ticker.pause();
    }, egret.lifecycle.onResume = function () {
      egret.ticker.resume();
    };
    var t = new AssetAdapter();
    egret.registerImplementation("eui.IAssetAdapter", t), egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter()), this.runGame()["catch"](function (e) {
      console.log(e);
    });
  }, t.prototype.runGame = function () {
    return __awaiter(this, void 0, void 0, function () {
      var e, t;
      return __generator(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, this.loadResource()];

          case 1:
            return r.sent(), this.createGameScene(), [4, RES.getResAsync("description_json")];

          case 2:
            return e = r.sent(), this.startAnimation(e), [4, platform.login()];

          case 3:
            return r.sent(), [4, platform.getUserInfo()];

          case 4:
            return t = r.sent(), console.log(t), [2];
        }
      });
    });
  }, t.prototype.loadResource = function () {
    return __awaiter(this, void 0, void 0, function () {
      var e, t;
      return __generator(this, function (r) {
        switch (r.label) {
          case 0:
            return r.trys.push([0, 4,, 5]), e = new LoadingUI(), this.stage.addChild(e), [4, RES.loadConfig("resource/default.res.json", "resource/")];

          case 1:
            return r.sent(), [4, this.loadTheme()];

          case 2:
            return r.sent(), [4, RES.loadGroup("preload", 0, e)];

          case 3:
            return r.sent(), this.stage.removeChild(e), [3, 5];

          case 4:
            return t = r.sent(), console.error(t), [3, 5];

          case 5:
            return [2];
        }
      });
    });
  }, t.prototype.loadTheme = function () {
    var e = this;
    return new Promise(function (t, r) {
      var n = new eui.Theme("resource/default.thm.json", e.stage);
      n.addEventListener(eui.UIEvent.COMPLETE, function () {
        t();
      }, e);
    });
  }, t.prototype.createGameScene = function () {
    var e = this.createBitmapByName("bg_jpg");
    this.addChild(e);
    var t = this.stage.stageWidth,
        r = this.stage.stageHeight;
    e.width = t, e.height = r;
    var n = new egret.Shape();
    n.graphics.beginFill(0, .5), n.graphics.drawRect(0, 0, t, 172), n.graphics.endFill(), n.y = 33, this.addChild(n);
    var i = this.createBitmapByName("egret_icon_png");
    this.addChild(i), i.x = 26, i.y = 33;
    var o = new egret.Shape();
    o.graphics.lineStyle(2, 16777215), o.graphics.moveTo(0, 0), o.graphics.lineTo(0, 117), o.graphics.endFill(), o.x = 172, o.y = 61, this.addChild(o);
    var a = new egret.TextField();
    a.textColor = 16777215, a.width = t - 172, a.textAlign = "center", a.text = "Hello Egret", a.size = 24, a.x = 172, a.y = 80, this.addChild(a);
    var s = new egret.TextField();
    this.addChild(s), s.alpha = 0, s.width = t - 172, s.textAlign = egret.HorizontalAlign.CENTER, s.size = 24, s.textColor = 16777215, s.x = 172, s.y = 135, this.textfield = s;
    var l = new eui.Button();
    l.label = "Click!", l.horizontalCenter = 0, l.verticalCenter = 0, this.addChild(l), l.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
  }, t.prototype.createBitmapByName = function (e) {
    var t = new egret.Bitmap(),
        r = RES.getRes(e);
    return t.texture = r, t;
  }, t.prototype.startAnimation = function (e) {
    var t = this,
        r = new egret.HtmlTextParser(),
        n = e.map(function (e) {
      return r.parse(e);
    }),
        i = this.textfield,
        o = -1,
        a = function a() {
      o++, o >= n.length && (o = 0);
      var e = n[o];
      i.textFlow = e;
      var r = egret.Tween.get(i);
      r.to({
        alpha: 1
      }, 200), r.wait(2e3), r.to({
        alpha: 0
      }, 200), r.call(a, t);
    };

    a();
  }, t.prototype.onButtonClick = function (e) {
    var t = new eui.Panel();
    t.title = "Title", t.horizontalCenter = 0, t.verticalCenter = 0, this.addChild(t);
  }, t;
}(eui.UILayer);

__reflect(Main.prototype, "Main");

var DebugPlatform = function () {
  function e() {}

  return e.prototype.getUserInfo = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (e) {
        return [2, {
          nickName: "username"
        }];
      });
    });
  }, e.prototype.login = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (e) {
        return [2];
      });
    });
  }, e;
}();

__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]), window.platform || (window.platform = new DebugPlatform());

var ThemeAdapter = function () {
  function e() {}

  return e.prototype.getTheme = function (e, t, r, n) {
    function i(e) {
      t.call(n, e);
    }

    function o(t) {
      t.resItem.url == e && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, o, null), r.call(n));
    }

    var a = this;
    if ("undefined" != typeof generateEUI) egret.callLater(function () {
      t.call(n, generateEUI);
    }, this);else if ("undefined" != typeof generateEUI2) RES.getResByUrl("resource/gameEui.json", function (e, r) {
      window.JSONParseClass.setData(e), egret.callLater(function () {
        t.call(n, generateEUI2);
      }, a);
    }, this, RES.ResourceItem.TYPE_JSON);else if ("undefined" != typeof generateJSON) {
      if (e.indexOf(".exml") > -1) {
        var s = e.split("/");
        s.pop();
        var l = s.join("/") + "_EUI.json";
        generateJSON.paths[e] ? egret.callLater(function () {
          t.call(n, generateJSON.paths[e]);
        }, this) : RES.getResByUrl(l, function (r) {
          window.JSONParseClass.setData(r), egret.callLater(function () {
            t.call(n, generateJSON.paths[e]);
          }, a);
        }, this, RES.ResourceItem.TYPE_JSON);
      } else egret.callLater(function () {
        t.call(n, generateJSON);
      }, this);
    } else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, o, null), RES.getResByUrl(e, i, this, RES.ResourceItem.TYPE_TEXT);
  }, e;
}();

__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]), window.Main = Main;

/***/ }),

/***/ "./src/js/tween.min.js":
/*!*****************************!*\
  !*** ./src/js/tween.min.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var egret = window.egret;

var __reflect = void 0 && (void 0).__reflect || function (t, e, n) {
  t.__class__ = e, n ? n.push(e) : n = [e], t.__types__ = t.__types__ ? n.concat(t.__types__) : n;
},
    __extends = void 0 && (void 0).__extends || function (t, e) {
  function n() {
    this.constructor = t;
  }

  for (var i in e) {
    e.hasOwnProperty(i) && (t[i] = e[i]);
  }

  n.prototype = e.prototype, t.prototype = new n();
},
    egret;

!function (t) {
  var e = function () {
    function e() {
      t.$error(1014);
    }

    return e.get = function (t) {
      return -1 > t && (t = -1), t > 1 && (t = 1), function (e) {
        return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t));
      };
    }, e.getPowIn = function (t) {
      return function (e) {
        return Math.pow(e, t);
      };
    }, e.getPowOut = function (t) {
      return function (e) {
        return 1 - Math.pow(1 - e, t);
      };
    }, e.getPowInOut = function (t) {
      return function (e) {
        return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t));
      };
    }, e.sineIn = function (t) {
      return 1 - Math.cos(t * Math.PI / 2);
    }, e.sineOut = function (t) {
      return Math.sin(t * Math.PI / 2);
    }, e.sineInOut = function (t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    }, e.getBackIn = function (t) {
      return function (e) {
        return e * e * ((t + 1) * e - t);
      };
    }, e.getBackOut = function (t) {
      return function (e) {
        return --e * e * ((t + 1) * e + t) + 1;
      };
    }, e.getBackInOut = function (t) {
      return t *= 1.525, function (e) {
        return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
      };
    }, e.circIn = function (t) {
      return -(Math.sqrt(1 - t * t) - 1);
    }, e.circOut = function (t) {
      return Math.sqrt(1 - --t * t);
    }, e.circInOut = function (t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    }, e.bounceIn = function (t) {
      return 1 - e.bounceOut(1 - t);
    }, e.bounceOut = function (t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    }, e.bounceInOut = function (t) {
      return .5 > t ? .5 * e.bounceIn(2 * t) : .5 * e.bounceOut(2 * t - 1) + .5;
    }, e.getElasticIn = function (t, e) {
      var n = 2 * Math.PI;
      return function (i) {
        if (0 == i || 1 == i) return i;
        var s = e / n * Math.asin(1 / t);
        return -(t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - s) * n / e));
      };
    }, e.getElasticOut = function (t, e) {
      var n = 2 * Math.PI;
      return function (i) {
        if (0 == i || 1 == i) return i;
        var s = e / n * Math.asin(1 / t);
        return t * Math.pow(2, -10 * i) * Math.sin((i - s) * n / e) + 1;
      };
    }, e.getElasticInOut = function (t, e) {
      var n = 2 * Math.PI;
      return function (i) {
        var s = e / n * Math.asin(1 / t);
        return (i *= 2) < 1 ? -.5 * (t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - s) * n / e)) : t * Math.pow(2, -10 * (i -= 1)) * Math.sin((i - s) * n / e) * .5 + 1;
      };
    }, e.quadIn = e.getPowIn(2), e.quadOut = e.getPowOut(2), e.quadInOut = e.getPowInOut(2), e.cubicIn = e.getPowIn(3), e.cubicOut = e.getPowOut(3), e.cubicInOut = e.getPowInOut(3), e.quartIn = e.getPowIn(4), e.quartOut = e.getPowOut(4), e.quartInOut = e.getPowInOut(4), e.quintIn = e.getPowIn(5), e.quintOut = e.getPowOut(5), e.quintInOut = e.getPowInOut(5), e.backIn = e.getBackIn(1.7), e.backOut = e.getBackOut(1.7), e.backInOut = e.getBackInOut(1.7), e.elasticIn = e.getElasticIn(1, .3), e.elasticOut = e.getElasticOut(1, .3), e.elasticInOut = e.getElasticInOut(1, .3 * 1.5), e;
  }();

  t.Ease = e, __reflect(e.prototype, "egret.Ease");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e = function (e) {
    function n(t, n, i) {
      var s = e.call(this) || this;
      return s._target = null, s._useTicks = !1, s.ignoreGlobalPause = !1, s.loop = !1, s.pluginData = null, s._steps = null, s.paused = !1, s.duration = 0, s._prevPos = -1, s.position = null, s._prevPosition = 0, s._stepPosition = 0, s.passive = !1, s.initialize(t, n, i), s;
    }

    return __extends(n, e), n.get = function (t, e, i, s) {
      return void 0 === i && (i = null), void 0 === s && (s = !1), s && n.removeTweens(t), new n(t, e, i);
    }, n.removeTweens = function (t) {
      if (t.tween_count) {
        for (var e = n._tweens, i = e.length - 1; i >= 0; i--) {
          e[i]._target == t && (e[i].paused = !0, e.splice(i, 1));
        }

        t.tween_count = 0;
      }
    }, n.pauseTweens = function (e) {
      if (e.tween_count) for (var n = t.Tween._tweens, i = n.length - 1; i >= 0; i--) {
        n[i]._target == e && (n[i].paused = !0);
      }
    }, n.resumeTweens = function (e) {
      if (e.tween_count) for (var n = t.Tween._tweens, i = n.length - 1; i >= 0; i--) {
        n[i]._target == e && (n[i].paused = !1);
      }
    }, n.tick = function (t, e) {
      void 0 === e && (e = !1);
      var i = t - n._lastTime;
      n._lastTime = t;

      for (var s = n._tweens.concat(), r = s.length - 1; r >= 0; r--) {
        var o = s[r];
        e && !o.ignoreGlobalPause || o.paused || o.$tick(o._useTicks ? 1 : i);
      }

      return !1;
    }, n._register = function (e, i) {
      var s = e._target,
          r = n._tweens;
      if (i) s && (s.tween_count = s.tween_count > 0 ? s.tween_count + 1 : 1), r.push(e), n._inited || (n._lastTime = t.getTimer(), t.ticker.$startTick(n.tick, null), n._inited = !0);else {
        s && s.tween_count--;

        for (var o = r.length; o--;) {
          if (r[o] == e) return void r.splice(o, 1);
        }
      }
    }, n.removeAllTweens = function () {
      for (var t = n._tweens, e = 0, i = t.length; i > e; e++) {
        var s = t[e];
        s.paused = !0, s._target.tween_count = 0;
      }

      t.length = 0;
    }, n.prototype.initialize = function (t, e, i) {
      this._target = t, e && (this._useTicks = e.useTicks, this.ignoreGlobalPause = e.ignoreGlobalPause, this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), e.override && n.removeTweens(t)), this.pluginData = i || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], e && e.paused ? this.paused = !0 : n._register(this, !0), e && null != e.position && this.setPosition(e.position, n.NONE);
    }, n.prototype.setPosition = function (t, e) {
      void 0 === e && (e = 1), 0 > t && (t = 0);
      var n = t,
          i = !1;
      if (n >= this.duration) if (this.loop) {
        var s = n % this.duration;
        n = n > 0 && 0 === s ? this.duration : s;
      } else n = this.duration, i = !0;
      if (n == this._prevPos) return i;
      i && this.setPaused(!0);
      var r = this._prevPos;

      if (this.position = this._prevPos = n, this._prevPosition = t, this._target && this._steps.length > 0) {
        for (var o = this._steps.length, u = -1, a = 0; o > a && !("step" == this._steps[a].type && (u = a, this._steps[a].t <= n && this._steps[a].t + this._steps[a].d >= n)); a++) {
          ;
        }

        for (var a = 0; o > a; a++) {
          if ("action" == this._steps[a].type) 0 != e && (this._useTicks ? this._runAction(this._steps[a], n, n) : 1 == e && r > n ? (r != this.duration && this._runAction(this._steps[a], r, this.duration), this._runAction(this._steps[a], 0, n, !0)) : this._runAction(this._steps[a], r, n));else if ("step" == this._steps[a].type && u == a) {
            var p = this._steps[u];

            this._updateTargetProps(p, Math.min((this._stepPosition = n - p.t) / p.d, 1));
          }
        }
      }

      return this.dispatchEventWith("change"), i;
    }, n.prototype._runAction = function (t, e, n, i) {
      void 0 === i && (i = !1);
      var s = e,
          r = n;
      e > n && (s = n, r = e);
      var o = t.t;
      (o == r || o > s && r > o || i && o == e) && t.f.apply(t.o, t.p);
    }, n.prototype._updateTargetProps = function (t, e) {
      var i, s, r, o, u, a;

      if (t || 1 != e) {
        if (this.passive = !!t.v, this.passive) return;
        t.e && (e = t.e(e, 0, 1, 1)), i = t.p0, s = t.p1;
      } else this.passive = !1, i = s = this._curQueueProps;

      for (var p in this._initQueueProps) {
        null == (o = i[p]) && (i[p] = o = this._initQueueProps[p]), null == (u = s[p]) && (s[p] = u = o), r = o == u || 0 == e || 1 == e || "number" != typeof o ? 1 == e ? u : o : o + (u - o) * e;
        var h = !1;
        if (a = n._plugins[p]) for (var c = 0, _ = a.length; _ > c; c++) {
          var f = a[c].tween(this, p, r, i, s, e, !!t && i == s, !t);
          f == n.IGNORE ? h = !0 : r = f;
        }
        h || (this._target[p] = r);
      }
    }, n.prototype.setPaused = function (t) {
      return this.paused == t ? this : (this.paused = t, n._register(this, !t), this);
    }, n.prototype._cloneProps = function (t) {
      var e = {};

      for (var n in t) {
        e[n] = t[n];
      }

      return e;
    }, n.prototype._addStep = function (t) {
      return t.d > 0 && (t.type = "step", this._steps.push(t), t.t = this.duration, this.duration += t.d), this;
    }, n.prototype._appendQueueProps = function (t) {
      var e, i, s, r, o;

      for (var u in t) {
        if (void 0 === this._initQueueProps[u]) {
          if (i = this._target[u], e = n._plugins[u]) for (s = 0, r = e.length; r > s; s++) {
            i = e[s].init(this, u, i);
          }
          this._initQueueProps[u] = this._curQueueProps[u] = void 0 === i ? null : i;
        } else i = this._curQueueProps[u];
      }

      for (var u in t) {
        if (i = this._curQueueProps[u], e = n._plugins[u]) for (o = o || {}, s = 0, r = e.length; r > s; s++) {
          e[s].step && e[s].step(this, u, i, t[u], o);
        }
        this._curQueueProps[u] = t[u];
      }

      return o && this._appendQueueProps(o), this._curQueueProps;
    }, n.prototype._addAction = function (t) {
      return t.t = this.duration, t.type = "action", this._steps.push(t), this;
    }, n.prototype._set = function (t, e) {
      for (var n in t) {
        e[n] = t[n];
      }
    }, n.prototype.wait = function (t, e) {
      if (null == t || 0 >= t) return this;

      var n = this._cloneProps(this._curQueueProps);

      return this._addStep({
        d: t,
        p0: n,
        p1: n,
        v: e
      });
    }, n.prototype.to = function (t, e, n) {
      return void 0 === n && (n = void 0), (isNaN(e) || 0 > e) && (e = 0), this._addStep({
        d: e || 0,
        p0: this._cloneProps(this._curQueueProps),
        e: n,
        p1: this._cloneProps(this._appendQueueProps(t))
      }), this.set(t);
    }, n.prototype.call = function (t, e, n) {
      return void 0 === e && (e = void 0), void 0 === n && (n = void 0), this._addAction({
        f: t,
        p: n ? n : [],
        o: e ? e : this._target
      });
    }, n.prototype.set = function (t, e) {
      return void 0 === e && (e = null), this._appendQueueProps(t), this._addAction({
        f: this._set,
        o: this,
        p: [t, e ? e : this._target]
      });
    }, n.prototype.play = function (t) {
      return t || (t = this), this.call(t.setPaused, t, [!1]);
    }, n.prototype.pause = function (t) {
      return t || (t = this), this.call(t.setPaused, t, [!0]);
    }, n.prototype.$tick = function (t) {
      this.paused || this.setPosition(this._prevPosition + t);
    }, n.NONE = 0, n.LOOP = 1, n.REVERSE = 2, n._tweens = [], n.IGNORE = {}, n._plugins = {}, n._inited = !1, n._lastTime = 0, n;
  }(t.EventDispatcher);

  t.Tween = e, __reflect(e.prototype, "egret.Tween");
}(egret || (egret = {}));
var egret;
!function (t) {
  var e;
  !function (e) {
    function n(e) {
      if ("function" == typeof e) return e;
      var n = t.Ease[e];
      return "function" == typeof n ? n : null;
    }

    function i(t, e, n, i) {
      var s = t.prototype;
      s.__meta__ = s.__meta__ || {}, s.__meta__[e] = n, i && (s.__defaultProperty__ = e);
    }

    var s = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.name = "", e;
      }

      return __extends(e, t), e;
    }(t.EventDispatcher);

    e.BasePath = s, __reflect(s.prototype, "egret.tween.BasePath");

    var r = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.props = void 0, e.duration = 500, e.ease = void 0, e;
      }

      return __extends(e, t), e;
    }(s);

    e.To = r, __reflect(r.prototype, "egret.tween.To");

    var o = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.duration = 500, e.passive = void 0, e;
      }

      return __extends(e, t), e;
    }(s);

    e.Wait = o, __reflect(o.prototype, "egret.tween.Wait");

    var u = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.props = void 0, e;
      }

      return __extends(e, t), e;
    }(s);

    e.Set = u, __reflect(u.prototype, "egret.tween.Set");

    var a = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.delta = 0, e;
      }

      return __extends(e, t), e;
    }(s);

    e.Tick = a, __reflect(a.prototype, "egret.tween.Tick");

    var p = function (e) {
      function i() {
        var t = e.call(this) || this;
        return t.isStop = !1, t;
      }

      return __extends(i, e), Object.defineProperty(i.prototype, "props", {
        get: function get() {
          return this._props;
        },
        set: function set(t) {
          this._props = t;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(i.prototype, "target", {
        get: function get() {
          return this._target;
        },
        set: function set(t) {
          this._target = t;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(i.prototype, "paths", {
        get: function get() {
          return this._paths;
        },
        set: function set(t) {
          this._paths = t || [];
        },
        enumerable: !0,
        configurable: !0
      }), i.prototype.play = function (t) {
        this.tween ? (this.tween.setPaused(!1), this.isStop && void 0 == t && (t = 0, this.isStop = !1), void 0 !== t && null !== t && this.tween.setPosition(t)) : this.createTween(t);
      }, i.prototype.pause = function () {
        this.tween && this.tween.setPaused(!0);
      }, i.prototype.stop = function () {
        this.pause(), this.isStop = !0;
      }, i.prototype.createTween = function (e) {
        this.tween = t.Tween.get(this._target, this._props), this._paths && this.applyPaths(), void 0 !== e && null !== e && this.tween.setPosition(e);
      }, i.prototype.applyPaths = function () {
        for (var t = 0; t < this._paths.length; t++) {
          var e = this._paths[t];
          this.applyPath(e);
        }
      }, i.prototype.applyPath = function (t) {
        var e = this;
        t instanceof r ? this.tween.to(t.props, t.duration, n(t.ease)) : t instanceof o ? this.tween.wait(t.duration, t.passive) : t instanceof u ? this.tween.set(t.props) : t instanceof a && this.tween.$tick(t.delta), this.tween.call(function () {
          return e.pathComplete(t);
        });
      }, i.prototype.pathComplete = function (t) {
        t.dispatchEventWith("complete"), this.dispatchEventWith("pathComplete", !1, t);

        var e = this._paths.indexOf(t);

        e >= 0 && e === this._paths.length - 1 && this.dispatchEventWith("complete");
      }, i;
    }(t.EventDispatcher);

    e.TweenItem = p, __reflect(p.prototype, "egret.tween.TweenItem"), i(p, "paths", "Array", !0);

    var h = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.completeCount = 0, e;
      }

      return __extends(e, t), Object.defineProperty(e.prototype, "items", {
        get: function get() {
          return this._items;
        },
        set: function set(t) {
          this.completeCount = 0, this.registerEvent(!1), this._items = t, this.registerEvent(!0);
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.registerEvent = function (t) {
        var e = this;
        this._items && this._items.forEach(function (n) {
          t ? n.addEventListener("complete", e.itemComplete, e) : n.removeEventListener("complete", e.itemComplete, e);
        });
      }, e.prototype.play = function (t) {
        if (this._items) for (var e = 0; e < this._items.length; e++) {
          var n = this._items[e];
          n.play(t);
        }
      }, e.prototype.pause = function () {
        if (this._items) for (var t = 0; t < this._items.length; t++) {
          var e = this._items[t];
          e.pause();
        }
      }, e.prototype.stop = function () {
        if (this._items) for (var t = 0; t < this._items.length; t++) {
          var e = this._items[t];
          e.stop();
        }
      }, e.prototype.itemComplete = function (t) {
        var e = t.currentTarget;
        this.completeCount++, this.dispatchEventWith("itemComplete", !1, e), this.completeCount === this.items.length && (this.dispatchEventWith("complete"), this.completeCount = 0);
      }, e;
    }(t.EventDispatcher);

    e.TweenGroup = h, __reflect(h.prototype, "egret.tween.TweenGroup"), i(h, "items", "Array", !0);
  }(e = t.tween || (t.tween = {}));
}(egret || (egret = {}));

/***/ }),

/***/ "./src/library/binary.js":
/*!*******************************!*\
  !*** ./src/library/binary.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fileutil = __webpack_require__(/*! ./file-util */ "./src/library/file-util.js");

var path = fileutil.path;
var fs = fileutil.fs;

var BinaryProcessor =
/*#__PURE__*/
function () {
  function BinaryProcessor() {
    _classCallCheck(this, BinaryProcessor);
  }

  _createClass(BinaryProcessor, [{
    key: "onLoadStart",
    value: function onLoadStart(host, resource) {
      var root = resource.root,
          url = resource.url;
      var xhrURL = url.indexOf('://') >= 0 ? url : root + url;

      if (RES['getVirtualUrl']) {
        xhrURL = RES['getVirtualUrl'](xhrURL);
      }

      if (path.isRemotePath(xhrURL)) {
        //判断是本地加载还是网络加载
        if (!needCache(xhrURL)) {
          //通过缓存机制判断是否本地加载
          console.log('无需缓存加载');
          return loadBinary(xhrURL);
        } else {
          console.log('本地读取缓存');
          var fullname = 'internal://files/' + path.getLocalFilePath(xhrURL);
          return fs.existsSync(fullname).then(function () {
            console.log("buffer.本地有缓存");
            return loadBinary(fullname);
          }, function () {
            console.log("buffer.本地没有缓存");
            return fs.downloadFile(xhrURL, fullname).then(function () {
              console.log("下载完成，再从缓存里读取");
              return loadBinary(fullname);
            }, function () {
              return;
            });
          });
        }
      } else {
        console.log('本地加载Buffer', xhrURL);
        return loadBinary(xhrURL);
      }
    }
  }, {
    key: "onRemoveStart",
    value: function onRemoveStart(host, resource) {
      return Promise.resolve();
    }
  }]);

  return BinaryProcessor;
}();

function loadBinary(xhrURL) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "arraybuffer";

    xhr.onload = function () {
      resolve(xhr.response);
    };

    xhr.onerror = function (e) {
      var error = new RES.ResourceManagerError(1001, xhrURL);
      console.error(e);
      reject(error);
    };

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

var processor = new BinaryProcessor();
RES.processor.map("bin", processor);

/***/ }),

/***/ "./src/library/file-util.js":
/*!**********************************!*\
  !*** ./src/library/file-util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.path = exports.fs = void 0;

var system = __webpack_require__(/*! @system */ "@system");

var fs_cache = {};
var fs = {
  /**
   * 检查文件是否存在
   */
  existsSync: function existsSync(p) {
    return new Promise(function (resolve, reject) {
      var cache = fs_cache[p]; // console.log('existsSync', cache)

      if (cache == 0) {
        reject();
      } else if (cache == 1) {
        resolve();
      } else {
        // console.log('读取uri', p)
        getFile(p).then(function succ() {
          console.log("本地文件存在", p);
          fs_cache[p] = 1;
          resolve();
        }, function fail() {
          console.log("本地文件不存在", p);
          fs_cache[p] = 0;
          reject();
        });
      }
    });
  },
  downloadFile: function downloadFile(src, target) {
    console.log('downloadFile');
    return new Promise(function (resolve, reject) {
      //1.下载
      system.request.download({
        url: src,
        success: function success(data) {
          console.log('start download', data); //2.监听下载完成

          system.request.onDownloadComplete({
            token: data.token,
            success: function success(data2) {
              console.log('onDownloadComplete', data2); //3.把下载好的移动到files分区

              system.file.move({
                srcUri: data2.uri,
                dstUri: target,
                success: function success(uri) {
                  console.log("move success: ".concat(uri));
                  resolve();
                },
                fail: function fail(data, code) {
                  console.log("handling fail, code = ".concat(code));
                  reject();
                }
              });
            },
            fail: function fail(data2, code) {
              console.log("handling fail, code = ".concat(code));
              reject(data2);
            }
          });
        },
        fail: function fail(data, code) {
          console.log("handling fail, code = ".concat(code));
          reject(data);
        }
      });
    });
  }
};
exports.fs = fs;

function getFile(p) {
  return new Promise(function (resolve, reject) {
    system.file.get({
      uri: p,
      success: function success(data) {
        if (data.type == 'file') {
          resolve();
        } else {
          reject();
        }
      },
      fail: function fail(data, code) {
        reject();
      }
    });
  });
}

var path = {
  isRemotePath: function isRemotePath(p) {
    return p.indexOf("http://") == 0 || p.indexOf("https://") == 0;
  },
  normailze: function normailze(p) {
    var arr = p.split("/");
    var original = p.split("/");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var a = _step.value;

        if (a == '' || a == null) {
          var index = original.indexOf(a);
          original.splice(index, 1);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (original.length > 0) {
      return original.join('/');
    }
  },
  // 根据key值表获取本地缓存路径
  // 通过本函数可将网络地址转化为本地缓存地址
  // 可通过编辑key值表来创建多个缓存路径
  getLocalFilePath: function getLocalFilePath(p) {
    for (var key in path.localFileMap) {
      if (p.indexOf(key) >= 0) {
        p = p.replace(key, path.localFileMap[key]);
        return path.normailze(p);
      }
    } //未设置key值，将按照地址名整理出资源路径，进行存储


    if (p.indexOf(":") >= 0 || p.indexOf('#') >= 0 || p.indexOf('?') >= 0) {
      p = p.replace(/[^a-z0-9.]/gi, "/");
    }

    return path.normailze(p);
  },
  // 本地资源文件key值表
  // 可按照网络资源地址分配本地地址，可修改
  // 以下为示例，开发者可根据需要进行修改
  localFileMap: {// 'http://10.0.5.52:8080/resource/assets': 'cache_crc32/assets/',
    // 'http://XXXXX/resource/config/': 'temp_text/',
    // 'http://XXXXX/resource/bin/': 'temp_bin/'
  }
};
exports.path = path;

/***/ }),

/***/ "./src/library/image.js":
/*!******************************!*\
  !*** ./src/library/image.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fileutil = __webpack_require__(/*! ./file-util */ "./src/library/file-util.js");

var path = fileutil.path;
var fs = fileutil.fs;
/**
 * 重写的图片加载器，代替引擎默认的图片加载器
 * 该代码中包含了大量日志用于辅助开发者调试
 * 正式上线时请开发者手动删除这些注释
 */

var ImageProcessor =
/*#__PURE__*/
function () {
  function ImageProcessor() {
    _classCallCheck(this, ImageProcessor);
  }

  _createClass(ImageProcessor, [{
    key: "onLoadStart",
    value: function onLoadStart(host, resource) {
      var scale9Grid;
      var root = resource.root,
          url = resource.url,
          scale9grid = resource.scale9grid;
      console.log('ImageProcessor', resource);

      if (scale9grid) {
        var list = resource.scale9grid.split(",");
        scale9Grid = new egret.Rectangle(parseInt(list[0]), parseInt(list[1]), parseInt(list[2]), parseInt(list[3]));
      } // console.log('scale9Grid', scale9Grid)


      var imageSrc = root + url;

      if (RES['getVirtualUrl']) {
        imageSrc = RES['getVirtualUrl'](imageSrc);
      }

      if (path.isRemotePath(imageSrc)) {
        //判断是本地加载还是网络加载
        console.log('网络加载');

        if (!needCache(imageSrc)) {
          console.log('无需缓存加载');
          return loadImage(imageSrc, scale9Grid);
        } else {
          //通过缓存机制加载
          console.log('通过缓存机制加载');
          var fullname = 'internal://files/' + path.getLocalFilePath(imageSrc);
          return fs.existsSync(fullname).then(function () {
            console.log("本地有缓存");
            return loadImage(fullname);
          }, function () {
            console.log("本地没有缓存");
            return fs.downloadFile(imageSrc, fullname).then(function () {
              console.log("下载完成，再从缓存里读取");
              return loadImage(fullname, scale9Grid);
            }, function () {
              return;
            });
          });
        }
      } else {
        console.log('本地加载');
        return loadImage(imageSrc, scale9Grid);
      }
    }
  }, {
    key: "onRemoveStart",
    value: function onRemoveStart(host, resource) {
      var texture = host.get(resource);
      texture.dispose();
      return Promise.resolve();
    }
  }]);

  return ImageProcessor;
}();

function loadImage(imageURL, scale9grid) {
  return new Promise(function (resolve, reject) {
    var image = new Image();

    image.onload = function (event) {
      var bitmapdata = new egret.BitmapData(image);
      var texture = new egret.Texture();

      texture._setBitmapData(bitmapdata);

      if (scale9grid) {
        texture["scale9Grid"] = scale9grid;
      }

      setTimeout(function () {
        resolve(texture);
      }, 0);
    };

    image.onerror = function () {
      reject();
    };

    image.src = imageURL;
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

var processor = new ImageProcessor();
RES.processor.map("image", processor);

/***/ }),

/***/ "./src/library/sound.js":
/*!******************************!*\
  !*** ./src/library/sound.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fileutil = __webpack_require__(/*! ./file-util */ "./src/library/file-util.js");

var path = fileutil.path;
var fs = fileutil.fs;
/**
 * 重写的声音加载器，代替引擎默认的声音加载器
 * 该代码中包含了大量日志用于辅助开发者调试
 * 正式上线时请开发者手动删除这些注释
 */

var SoundProcessor =
/*#__PURE__*/
function () {
  function SoundProcessor() {
    _classCallCheck(this, SoundProcessor);
  }

  _createClass(SoundProcessor, [{
    key: "onLoadStart",
    value: function onLoadStart(host, resource) {
      var root = resource.root,
          url = resource.url;
      var soundSrc = root + url;

      if (RES['getVirtualUrl']) {
        soundSrc = RES['getVirtualUrl'](soundSrc);
      }

      if (path.isRemotePath(soundSrc)) {
        //判断是本地加载还是网络加载
        console.log('网络加载');

        if (!needCache(soundSrc)) {
          console.log('无需缓存加载');
          return loadSound(soundSrc);
        } else {
          //通过缓存机制加载
          console.log('通过缓存机制加载');
          var fullname = 'internal://files/' + path.getLocalFilePath(soundSrc);
          return fs.existsSync(fullname).then(function () {
            console.log("本地有缓存");
            return loadSound(fullname);
          }, function () {
            console.log("本地没有缓存");
            return fs.downloadFile(soundSrc, fullname).then(function () {
              console.log("下载完成，再从缓存里读取");
              return loadSound(soundSrc);
            }, function () {
              return;
            });
          });
        }
      } else {
        console.log('本地加载');
        return loadSound(soundSrc);
      }
    }
  }, {
    key: "onRemoveStart",
    value: function onRemoveStart(host, resource) {
      return Promise.resolve();
    }
  }]);

  return SoundProcessor;
}();

function loadSound(soundURL) {
  var _this = this;

  return new Promise(function (resolve, reject) {
    var sound = new egret.Sound();
    sound.load(soundURL);

    var onSuccess = function onSuccess() {
      resolve(sound);
    };

    var onError = function onError() {
      var e = new RES.ResourceManagerError(1001, soundURL);
      reject(e);
    };

    sound.addEventListener(egret.Event.COMPLETE, onSuccess, _this);
    sound.addEventListener(egret.IOErrorEvent.IO_ERROR, onError, _this);
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

var processor = new SoundProcessor();
RES.processor.map("sound", processor);

/***/ }),

/***/ "./src/library/text.js":
/*!*****************************!*\
  !*** ./src/library/text.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fileutil = __webpack_require__(/*! ./file-util */ "./src/library/file-util.js");

var path = fileutil.path;
var fs = fileutil.fs;

var system = __webpack_require__(/*! @system */ "@system");
/**
 * 重写的文本加载器，代替引擎默认的文本加载器
 * 该代码中包含了大量日志用于辅助开发者调试
 * 正式上线时请开发者手动删除这些注释
 */


var TextProcessor =
/*#__PURE__*/
function () {
  function TextProcessor() {
    _classCallCheck(this, TextProcessor);
  }

  _createClass(TextProcessor, [{
    key: "onLoadStart",
    value: function onLoadStart(host, resource) {
      var root = resource.root,
          url = resource.url; // console.log('res 加载源',resource)

      var xhrURL = url.indexOf('://') >= 0 ? url : root + url; //获取网络加载url

      if (RES['getVirtualUrl']) {
        xhrURL = RES['getVirtualUrl'](xhrURL);
      }

      if (path.isRemotePath(xhrURL)) {
        //判断是本地加载还是网络加载
        if (needCache(xhrURL)) {
          console.log('本地读取缓存'); //通过缓存机制判断是否本地加载

          var targetFilename = 'internal://files/' + path.getLocalFilePath(xhrURL); // console.log('需要缓存',targetFilename)

          return fs.existsSync(targetFilename).then(function () {
            console.log('缓存命中');
            return readLoaclText(targetFilename);
          }, function () {
            console.log('没有缓存命中,通过url加载，加载成功后加入本地缓存');
            return loadText(xhrURL).then(function (content) {
              return writeText(targetFilename, content);
            });
          });
        } else {
          console.log('不需要缓存,', xhrURL); //无需缓存，正常url加载

          return loadText(xhrURL);
        }
      } else {
        //本地加载
        console.log('本地加载文本', xhrURL);
        return readLoaclText(xhrURL);
      }
    }
  }, {
    key: "onRemoveStart",
    value: function onRemoveStart(host, resource) {
      return Promise.resolve();
    }
  }]);

  return TextProcessor;
}();

function writeText(targetFilename, content) {
  return new Promise(function (resolve, reject) {
    system.file.writeText({
      uri: targetFilename,
      text: content,
      success: function success() {
        console.log('write succ', content);
        resolve(content);
      },
      fail: function fail(data, code) {
        // console.log("write txt fail",data,code)
        reject();
      }
    });
  });
}

function readLoaclText(targetFilename) {
  return new Promise(function (resolve, reject) {
    system.file.readText({
      uri: targetFilename,
      success: function success(data) {
        resolve(data.text);
      },
      fail: function fail(data, code) {
        reject();
      }
    });
  });
}

function loadText(xhrURL) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.status >= 400) {
        var message = "\u52A0\u8F7D\u5931\u8D25:".concat(xhrURL);
        console.error(message);
        reject(message);
      } else {
        // console.log('loadText:', xhr.responseText)
        resolve(xhr.responseText);
      }
    };

    xhr.onerror = function (e) {
      var error = new RES.ResourceManagerError(1001, xhrURL);
      console.error(e);
      reject(error);
    };

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

var processor = new TextProcessor();
RES.processor.map("text", processor);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./manifest.js */ "./src/manifest.js");

__webpack_require__(/*! ./egret.miqgame.js */ "./src/egret.miqgame.js"); // 启动小米快游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 只有使用 assetsmanager 的项目可以使用


if (window.RES && RES.processor) {
  __webpack_require__(/*! ./library/image.js */ "./src/library/image.js");

  __webpack_require__(/*! ./library/text.js */ "./src/library/text.js");

  __webpack_require__(/*! ./library/sound.js */ "./src/library/sound.js");

  __webpack_require__(/*! ./library/binary.js */ "./src/library/binary.js");
}

var system = __webpack_require__(/*! @system */ "@system");

window.misystem = system;
var info = system.device.getInfoSync();
var runOptions = {
  //以下为自动修改，请勿修改
  //The following is automatically modified, please do not modify
  //----auto option start----
  entryClassName: "Main",
  orientation: "auto",
  frameRate: 30,
  scaleMode: "fixedWidth",
  contentWidth: 640,
  contentHeight: 1136,
  showFPS: false,
  fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
  showLog: false,
  maxTouches: 2,
  //----auto option end----
  audioType: 0,
  renderMode: "webgl",
  calculateCanvasScaleFactor: function calculateCanvasScaleFactor(context) {
    return info.screenDensity;
  }
};
egret.runEgret(runOptions);
console.log('runtimeType', egret.Capabilities.runtimeType);

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./js/egret.min.js */ "./src/js/egret.min.js");

__webpack_require__(/*! ./js/eui.min.js */ "./src/js/eui.min.js");

__webpack_require__(/*! ./js/assetsmanager.min.js */ "./src/js/assetsmanager.min.js");

__webpack_require__(/*! ./js/tween.min.js */ "./src/js/tween.min.js");

__webpack_require__(/*! ./js/default.thm.js */ "./src/js/default.thm.js");

__webpack_require__(/*! ./js/main.min.js */ "./src/js/main.min.js");

/***/ }),

/***/ "@system":
/*!************************************************!*\
  !*** external "$require$(\"@module/system\")" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = $require$("@module/system");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map