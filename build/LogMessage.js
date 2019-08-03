"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogMessage = (function () {
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
exports.LogMessage = LogMessage;
//# sourceMappingURL=LogMessage.js.map