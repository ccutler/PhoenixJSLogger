import { Log } from "../Log";
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
            message += Log.resolveLevelName(logMessage.level) + " ";
            message += Log.formatCategory(logMessage.category) + ": ";
            if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
                message += logMessage.message;
                output = [message, "color: " + this.getColor(logMessage.level)];
            }
            else {
                output = [message, "color: " + this.getColor(logMessage.level), logMessage.message[0]];
            }
            switch (logMessage.level) {
                default:
                case Log.TRACE:
                case Log.DEBUG:
                case Log.LOG:
                case Log.PRINT:
                    console.log.apply(console, output);
                    break;
                case Log.INFO:
                    console.info.apply(console, output);
                    break;
                case Log.WARN:
                    console.warn.apply(console, output);
                    break;
                case Log.ERROR:
                case Log.CRITICAL:
                case Log.FATAL:
                    console.error.apply(console, output);
                    break;
                case Log.ASSERT:
                    console.warn.apply(console, output);
                    break;
                case Log.MARK:
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
            case Log.TRACE:
                return BrowserConsoleTarget.COLOR_TRACE;
            case Log.DEBUG:
                return BrowserConsoleTarget.COLOR_DEBUG;
            case Log.LOG:
                return BrowserConsoleTarget.COLOR_LOG;
            case Log.PRINT:
                return BrowserConsoleTarget.COLOR_PRINT;
            case Log.INFO:
                return BrowserConsoleTarget.COLOR_INFO;
            case Log.NOTICE:
                return BrowserConsoleTarget.COLOR_NOTICE;
            case Log.WARN:
                return BrowserConsoleTarget.COLOR_WARN;
            case Log.ERROR:
                return BrowserConsoleTarget.COLOR_ERROR;
            case Log.CRITICAL:
                return BrowserConsoleTarget.COLOR_CRITICAL;
            case Log.FATAL:
                return BrowserConsoleTarget.COLOR_FATAL;
            case Log.COMMAND:
                return BrowserConsoleTarget.COLOR_COMMAND;
            case Log.ASSERT:
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
export { BrowserConsoleTarget };
//# sourceMappingURL=BrowserConsoleTarget.js.map