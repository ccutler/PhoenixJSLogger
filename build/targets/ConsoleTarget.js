"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
var ConsoleTarget = (function () {
    function ConsoleTarget(level, filters) {
        if (level === void 0) { level = 0; }
        if (filters === void 0) { filters = []; }
        this.timeStampOffset = 0;
        this.startTime = new Date().getTime();
        this.level = level;
        this.filters = filters;
    }
    ConsoleTarget.prototype.output = function (logMessage) {
        if (!this.canOutput(logMessage)) {
            return;
        }
        var output;
        var message = "(" + this.getTimeStamp() + ")" + (__1.Log.resolveLevelName(logMessage.level) + __1.Log.formatCategory(logMessage.category)) + ": ";
        if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
            message += logMessage.message;
            output = [message];
        }
        else {
            output = [message, JSON.stringify(logMessage.message[0], null, 2)];
        }
        this.write(logMessage.level, output);
    };
    ConsoleTarget.prototype.canOutput = function (logMessage) {
        if (logMessage.level < this.level) {
            return false;
        }
        if (this.filters.length > 0) {
            for (var i = 0; i < this.filters.length; i++) {
                if (this.filters[i] === logMessage.category) {
                    return true;
                }
            }
            return false;
        }
        return true;
    };
    ConsoleTarget.prototype.write = function (level, output) {
        switch (level) {
            default:
            case __1.Log.TRACE:
            case __1.Log.DEBUG:
            case __1.Log.LOG:
            case __1.Log.PRINT:
                console.log.apply(console, output);
                break;
            case __1.Log.INFO:
                console.info.apply(console, output);
                break;
            case __1.Log.WARN:
                console.warn.apply(console, output);
                break;
            case __1.Log.ERROR:
            case __1.Log.CRITICAL:
            case __1.Log.FATAL:
                console.error.apply(console, output);
                break;
            case __1.Log.ASSERT:
                console.warn.apply(console, output);
                break;
            case __1.Log.MARK:
                console.timeStamp.apply(console, output);
                break;
        }
    };
    ConsoleTarget.prototype.clear = function () {
        this.timeStampOffset = this.getTimer();
    };
    ConsoleTarget.prototype.getTimeStamp = function () {
        return this.getTimer() - this.timeStampOffset;
    };
    ConsoleTarget.prototype.getTimer = function () {
        return (new Date().getTime() - this.startTime);
    };
    ConsoleTarget.prototype.destroy = function () {
        this.filters = null;
    };
    return ConsoleTarget;
}());
exports.ConsoleTarget = ConsoleTarget;
//# sourceMappingURL=ConsoleTarget.js.map