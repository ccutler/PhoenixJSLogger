"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Log_1 = require("../Log");
var BrowserConsoleTarget = /** @class */ (function () {
    function BrowserConsoleTarget(level, filters) {
        if (level === void 0) { level = 0; }
        if (filters === void 0) { filters = []; }
        this.timeStampOffset = 0;
        this.startTime = new Date().getTime();
        this.level = level;
        this.filters = filters;
    }
    BrowserConsoleTarget.prototype.output = function (logMessage) {
        if (logMessage.level >= this.level) {
            if (this.filters.length > 0) {
                var canOutput = false;
                for (var i = 0; i < this.filters.length; i++) {
                    if (this.filters[i] === logMessage.category) {
                        canOutput = true;
                    }
                }
                if (!canOutput) {
                    return;
                }
            }
            var output = void 0;
            var message = "%c";
            message += "(" + this.getTimeStamp() + ")";
            message += Log_1.Log.resolveLevelName(logMessage.level) + " ";
            message += Log_1.Log.formatCategory(logMessage.category) + ": ";
            if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
                message += logMessage.message;
                output = [message, "color: " + this.getColor(logMessage.level)];
            }
            else {
                output = [logMessage.message[0]];
            }
            switch (logMessage.level) {
                default:
                case Log_1.Log.TRACE:
                case Log_1.Log.DEBUG:
                case Log_1.Log.LOG:
                case Log_1.Log.PRINT:
                    if (output.length === 1) {
                        console.log.apply(console, [message, "color: " + this.getColor(logMessage.level)]);
                    }
                    console.log.apply(console, output);
                    break;
                case Log_1.Log.INFO:
                    if (output.length === 1) {
                        console.info.apply(console, [message, "color: " + this.getColor(logMessage.level)]);
                    }
                    console.info.apply(console, output);
                    break;
                case Log_1.Log.WARN:
                    if (output.length === 1) {
                        console.warn.apply(console, [message, "color: " + this.getColor(logMessage.level)]);
                    }
                    console.warn.apply(console, output);
                    break;
                case Log_1.Log.ERROR:
                case Log_1.Log.CRITICAL:
                case Log_1.Log.FATAL:
                    if (output.length === 1) {
                        console.error.apply(console, [message, "color: " + this.getColor(logMessage.level)]);
                    }
                    console.error.apply(console, output);
                    break;
                case Log_1.Log.ASSERT:
                    if (output.length === 1) {
                        console.warn.apply(console, [message, "color: " + this.getColor(logMessage.level)]);
                    }
                    console.warn.apply(console, output);
                    break;
                case Log_1.Log.MARK:
                    if (output.length === 1) {
                        console.timeStamp.apply(console, [message, "color: " + this.getColor(logMessage.level)]);
                    }
                    console.timeStamp.apply(console, output);
                    break;
            }
        }
    };
    BrowserConsoleTarget.prototype.clear = function () {
        this.timeStampOffset = this.getTimer();
    };
    BrowserConsoleTarget.prototype.getColor = function (level) {
        switch (level) {
            case Log_1.Log.TRACE:
                return BrowserConsoleTarget.COLOR_TRACE;
            case Log_1.Log.DEBUG:
                return BrowserConsoleTarget.COLOR_DEBUG;
            case Log_1.Log.LOG:
                return BrowserConsoleTarget.COLOR_LOG;
            case Log_1.Log.PRINT:
                return BrowserConsoleTarget.COLOR_PRINT;
            case Log_1.Log.INFO:
                return BrowserConsoleTarget.COLOR_INFO;
            case Log_1.Log.NOTICE:
                return BrowserConsoleTarget.COLOR_NOTICE;
            case Log_1.Log.WARN:
                return BrowserConsoleTarget.COLOR_WARN;
            case Log_1.Log.ERROR:
                return BrowserConsoleTarget.COLOR_ERROR;
            case Log_1.Log.CRITICAL:
                return BrowserConsoleTarget.COLOR_CRITICAL;
            case Log_1.Log.FATAL:
                return BrowserConsoleTarget.COLOR_FATAL;
            case Log_1.Log.COMMAND:
                return BrowserConsoleTarget.COLOR_COMMAND;
            case Log_1.Log.ASSERT:
                return BrowserConsoleTarget.COLOR_ASSERT;
            default:
                return BrowserConsoleTarget.COLOR_LOG;
        }
    };
    BrowserConsoleTarget.prototype.getTimeStamp = function () {
        return this.getTimer() - this.timeStampOffset;
    };
    BrowserConsoleTarget.prototype.getTimer = function () {
        return (new Date().getTime() - this.startTime);
    };
    BrowserConsoleTarget.prototype.destroy = function () {
        this.filters = null;
    };
    BrowserConsoleTarget.COLOR_TRACE = "#CCCCCC";
    BrowserConsoleTarget.COLOR_DEBUG = "#999999";
    BrowserConsoleTarget.COLOR_LOG = "#666666";
    BrowserConsoleTarget.COLOR_INFO = "#333333";
    BrowserConsoleTarget.COLOR_PRINT = "#000000";
    BrowserConsoleTarget.COLOR_NOTICE = "#0066FF";
    BrowserConsoleTarget.COLOR_WARN = "#FF6600";
    BrowserConsoleTarget.COLOR_CRITICAL = "#FF0000";
    BrowserConsoleTarget.COLOR_ERROR = "#FF0000";
    BrowserConsoleTarget.COLOR_FATAL = "#FF0000";
    BrowserConsoleTarget.COLOR_ASSERT = "#FF6600";
    BrowserConsoleTarget.COLOR_COMMAND = "#6666FF";
    return BrowserConsoleTarget;
}());
exports.BrowserConsoleTarget = BrowserConsoleTarget;
//# sourceMappingURL=BrowserConsoleTarget.js.map