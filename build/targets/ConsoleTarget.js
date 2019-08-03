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
            case 1:
            case 2:
            case 3:
            case 5:
                console.log.apply(console, output);
                break;
            case 4:
                console.info.apply(console, output);
                break;
            case 7:
                console.warn.apply(console, output);
                break;
            case 9:
            case 8:
            case 10:
                console.error.apply(console, output);
                break;
            case 11:
                console.warn.apply(console, output);
                break;
            case -1:
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