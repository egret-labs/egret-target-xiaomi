require('./qg-adapter.js');
require('./manifest.js');
require('./egret.qgame.js');

// 启动小米快游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 只有使用 assetsmanager 的项目可以使用
if(window.RES && RES.processor) {
    require('./library/image.js');
    require('./library/text.js');
    require('./library/sound.js');
    require('./library/binary.js');
}

var info = qg.getSystemInfoSync();
const runOptions = {
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
    renderMode:"webgl",
    calculateCanvasScaleFactor: function (context) {
        return info.pixelRatio;
    }
};
egret.runEgret(runOptions);