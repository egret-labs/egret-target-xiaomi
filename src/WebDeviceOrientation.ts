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
            // window.addEventListener("deviceorientation", this.onChange);
            system.sensor.subscribeAccelerometer({
                callback:this.onChange.bind(this)
            })
        }

        /**
         * @private
         * 
         */
        stop() {
            // window.removeEventListener("deviceorientation", this.onChange);
            system.sensor.unsubscribeAccelerometer();
        }

        /**
         * @private
         */
        protected onChange = (e: any) => {
            let event = new OrientationEvent(Event.CHANGE);
            event.beta = e.x;
            event.gamma = e.y;
            event.alpha = e.z;
            this.dispatchEvent(event);
        }
    }
}

egret.DeviceOrientation = egret.qgame.WebDeviceOrientation;
