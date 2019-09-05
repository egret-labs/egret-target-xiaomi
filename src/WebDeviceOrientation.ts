namespace egret.qgame {

    /**
     * @private
     */
    export class WebDeviceOrientation extends EventDispatcher implements DeviceOrientation {

        /**
         * @private
         * 
         */
        start() {
            qg.onCompassChange(this.onChange.bind(this))
            qg.startCompass();
        }

        /**
         * @private
         * 
         */
        stop() {
            qg.stopCompass();
        }

        /**
         * @private
         */
        protected onChange = (e: any) => {
            let event = new OrientationEvent(Event.CHANGE);
            event.beta = 0;
            event.gamma = 0;
            event.alpha = e.direction;
            this.dispatchEvent(event);
        }
    }
}

egret.DeviceOrientation = egret.qgame.WebDeviceOrientation;
