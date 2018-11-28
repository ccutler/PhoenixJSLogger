var LogMessage = /** @class */ (function () {
    function LogMessage(level, category, message) {
        this.level = level;
        this.category = category;
        this.message = message;
    }
    LogMessage.prototype.destroy = function () {
        this.category = null;
        this.message = null;
    };
    return LogMessage;
}());
export { LogMessage };
//# sourceMappingURL=LogMessage.js.map