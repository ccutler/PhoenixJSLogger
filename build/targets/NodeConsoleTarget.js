import { Log } from "../Log";
var NodeConsoleTarget = /** @class */ (function () {
    function NodeConsoleTarget(level, filters) {
        if (level === void 0) { level = 0; }
        if (filters === void 0) { filters = []; }
        this.timeStampOffset = 0;
        this.startTime = new Date().getTime();
        this.level = level;
        this.filters = filters;
    }
    NodeConsoleTarget.prototype.output = function (logMessage) {
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
            var message = "(" + this.getTimeStamp() + ")";
            message += Log.resolveLevelName(logMessage.level) + " ";
            message += Log.formatCategory(logMessage.category) + ": ";
            if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
                message += logMessage.message;
                output = [this.getColor(logMessage.level) + message + "\x1b[0m"];
            }
            else {
                output = [this.getColor(logMessage.level) + message + JSON.stringify(logMessage.message[0]) + "\x1b[0m"];
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
    NodeConsoleTarget.prototype.getColor = function (level) {
        switch (level) {
            case Log.TRACE:
                return NodeConsoleTarget.COLOR_TRACE;
            case Log.DEBUG:
                return NodeConsoleTarget.COLOR_DEBUG;
            case Log.LOG:
                return NodeConsoleTarget.COLOR_LOG;
            case Log.PRINT:
                return NodeConsoleTarget.COLOR_PRINT;
            case Log.INFO:
                return NodeConsoleTarget.COLOR_INFO;
            case Log.NOTICE:
                return NodeConsoleTarget.COLOR_NOTICE;
            case Log.WARN:
                return NodeConsoleTarget.COLOR_WARN;
            case Log.ERROR:
                return NodeConsoleTarget.COLOR_ERROR;
            case Log.CRITICAL:
                return NodeConsoleTarget.COLOR_CRITICAL;
            case Log.FATAL:
                return NodeConsoleTarget.COLOR_FATAL;
            case Log.ASSERT:
                return NodeConsoleTarget.COLOR_ASSERT;
            case Log.COMMAND:
                return NodeConsoleTarget.COLOR_COMMAND;
            default:
                return NodeConsoleTarget.COLOR_LOG;
        }
    };
    NodeConsoleTarget.prototype.clear = function () {
        this.timeStampOffset = this.getTimer();
    };
    NodeConsoleTarget.prototype.getTimeStamp = function () {
        return this.getTimer() - this.timeStampOffset;
    };
    NodeConsoleTarget.prototype.getTimer = function () {
        return (new Date().getTime() - this.startTime);
    };
    NodeConsoleTarget.prototype.destroy = function () {
        this.filters = null;
    };
    NodeConsoleTarget.COLOR_TRACE = "\x1b[1m\x1b[30m";
    NodeConsoleTarget.COLOR_DEBUG = "\x1b[2m\x1b[37m";
    NodeConsoleTarget.COLOR_LOG = "\x1b[2m\x1b[37m";
    NodeConsoleTarget.COLOR_INFO = "\x1b[1m\x1b[37m";
    NodeConsoleTarget.COLOR_PRINT = "\x1b[37m";
    NodeConsoleTarget.COLOR_NOTICE = "\x1b[1m\x1b[34m";
    NodeConsoleTarget.COLOR_WARN = "\x1b[1m\x1b[33m";
    NodeConsoleTarget.COLOR_CRITICAL = "\x1b[1m\x1b[31m";
    NodeConsoleTarget.COLOR_ERROR = "\x1b[31m";
    NodeConsoleTarget.COLOR_FATAL = "\x1b[41m";
    NodeConsoleTarget.COLOR_ASSERT = "\x1b[1m\x1b[33m";
    NodeConsoleTarget.COLOR_COMMAND = "\x1b[1m\x1b[36m";
    return NodeConsoleTarget;
}());
export { NodeConsoleTarget };
//# sourceMappingURL=NodeConsoleTarget.js.map