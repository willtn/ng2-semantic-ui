// Helper class to support method chaining when calling `SuiModalService.open(...)`.
var ActiveModal = (function () {
    function ActiveModal(instance, componentRef) {
        var _this = this;
        this._config = instance;
        this._componentRef = componentRef;
        // Automatically destroy the modal component when it has been dismissed.
        this.component.onDismiss.subscribe(function () { return _this._componentRef.destroy(); });
    }
    Object.defineProperty(ActiveModal.prototype, "component", {
        // Shorthand for direct access to the `SuiModal` instance.
        get: function () {
            return this._componentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    // Registers a callback for when `onApprove` is fired.
    ActiveModal.prototype.onApprove = function (callback) {
        this.component.onApprove.subscribe(function (res) { return callback(res); });
        return this;
    };
    // Registers a callback for when `onDeny` is fired.
    ActiveModal.prototype.onDeny = function (callback) {
        this.component.onDeny.subscribe(function (res) { return callback(res); });
        return this;
    };
    // Fires the approve event of the modal manually.
    ActiveModal.prototype.approve = function (result) {
        this.component.approve(result);
    };
    // Fires the deny event of the modal manually.
    ActiveModal.prototype.deny = function (result) {
        this.component.deny(result);
    };
    // Removes the modal component instantly, without transitions or firing any events.
    ActiveModal.prototype.destroy = function () {
        this._componentRef.destroy();
    };
    return ActiveModal;
}());
export { ActiveModal };
//# sourceMappingURL=active-modal.js.map