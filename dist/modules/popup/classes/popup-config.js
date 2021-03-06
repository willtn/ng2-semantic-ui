import { PositioningPlacement } from "../../../misc/util";
export var PopupTrigger = {
    Hover: "hover",
    Click: "click",
    OutsideClick: "outsideClick",
    Focus: "focus",
    Manual: "manual"
};
var PopupConfig = (function () {
    function PopupConfig(defaults) {
        if (defaults === void 0) { defaults = {}; }
        this.placement = PositioningPlacement.TopLeft;
        this.trigger = PopupTrigger.Hover;
        this.isInverted = false;
        this.delay = 0;
        this.isBasic = false;
        this.transition = "scale";
        this.transitionDuration = 200;
        Object.assign(this, defaults);
    }
    PopupConfig.prototype.batch = function (config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, config);
    };
    return PopupConfig;
}());
export { PopupConfig };
//# sourceMappingURL=popup-config.js.map