import { Log } from "./Log";
import { LogMessage } from "./LogMessage";
var Logger = /** @class */ (function () {
    function Logger(category) {
        this.category = this.getName(category);
    }
    Logger.prototype.clear = function () {
        Log.clear();
    };
    Logger.prototype.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.log(new LogMessage(Log.TRACE, this.category, args));
    };
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.log(new LogMessage(Log.DEBUG, this.category, args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.log(new LogMessage(Log.LOG, this.category, args));
    };
    Logger.prototype.print = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.log(new LogMessage(Log.PRINT, this.category, args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.log(new LogMessage(Log.INFO, this.category, args));
    };
    Logger.prototype.notice = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.log(new LogMessage(Log.NOTICE, this.category, args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.log(new LogMessage(Log.WARN, this.category, args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.log(new LogMessage(Log.ERROR, this.category, args));
    };
    Logger.prototype.critical = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.log(new LogMessage(Log.CRITICAL, this.category, args));
    };
    Logger.prototype.fatal = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.log(new LogMessage(Log.FATAL, this.category, args));
    };
    Logger.prototype.mark = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.log(new LogMessage(Log.MARK, this.category, args));
    };
    Logger.prototype.command = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log.log(new LogMessage(Log.COMMAND, this.category, args));
    };
    Logger.prototype.assert = function (condition) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!condition) {
            Log.log(new LogMessage(Log.ASSERT, this.category, args));
        }
    };
    Logger.prototype.getName = function (reference) {
        var result = "";
        if (typeof reference !== "string" && reference.constructor && reference.constructor.toString) {
            var info = reference.constructor.toString().match(/function\s*(\w+)/);
            if (info && info.length === 2) {
                result = info[1];
            }
        }
        else {
            reference = reference.toString();
            result = (reference.indexOf("[object ") !== -1) ? "[" + reference.substring(8) : reference;
        }
        return result;
    };
    return Logger;
}());
export { Logger };
//# sourceMappingURL=Logger.js.map