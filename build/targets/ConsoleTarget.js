import { Log } from "../Log";
var ConsoleTarget = /** @class */ (function () {
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
        var message = "(" + this.getTimeStamp() + ")" + (Log.resolveLevelName(logMessage.level) + Log.formatCategory(logMessage.category)) + ": ";
        if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
            message += logMessage.message;
            output = [message];
        }
        else {
            output = [message, logMessage.message[0]];
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
export { ConsoleTarget };
//# sourceMappingURL=ConsoleTarget.js.map