"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Log_1 = require("./Log");
var LogMessage_1 = require("./LogMessage");
var Logger = /** @class */ (function () {
    function Logger(category) {
        this.category = this.getName(category);
    }
    Logger.prototype.clear = function () {
        Log_1.Log.clear();
    };
    Logger.prototype.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.TRACE, this.category, args));
    };
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.DEBUG, this.category, args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.LOG, this.category, args));
    };
    Logger.prototype.print = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.PRINT, this.category, args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.INFO, this.category, args));
    };
    Logger.prototype.notice = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.NOTICE, this.category, args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.WARN, this.category, args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.ERROR, this.category, args));
    };
    Logger.prototype.critical = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.CRITICAL, this.category, args));
    };
    Logger.prototype.fatal = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.FATAL, this.category, args));
    };
    Logger.prototype.mark = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.MARK, this.category, args));
    };
    Logger.prototype.command = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.COMMAND, this.category, args));
    };
    Logger.prototype.assert = function (condition) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!condition) {
            Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.ASSERT, this.category, args));
        }
    };
    Logger.prototype.getName = function (reference) {
        var result = "";
        if (reference.constructor && reference.constructor.toString) {
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
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map