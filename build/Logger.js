"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Logger = (function () {
    function Logger(category) {
        this.category = this.getName(category);
    }
    Logger.prototype.clear = function () {
        _1.Log.clear();
    };
    Logger.prototype.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Log.log(new _1.LogMessage(_1.Log.TRACE, this.category, args));
    };
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Log.log(new _1.LogMessage(_1.Log.DEBUG, this.category, args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Log.log(new _1.LogMessage(_1.Log.LOG, this.category, args));
    };
    Logger.prototype.print = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Log.log(new _1.LogMessage(_1.Log.PRINT, this.category, args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Log.log(new _1.LogMessage(_1.Log.INFO, this.category, args));
    };
    Logger.prototype.notice = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Log.log(new _1.LogMessage(_1.Log.NOTICE, this.category, args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Log.log(new _1.LogMessage(_1.Log.WARN, this.category, args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Log.log(new _1.LogMessage(_1.Log.ERROR, this.category, args));
    };
    Logger.prototype.critical = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Log.log(new _1.LogMessage(_1.Log.CRITICAL, this.category, args));
    };
    Logger.prototype.fatal = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Log.log(new _1.LogMessage(_1.Log.FATAL, this.category, args));
    };
    Logger.prototype.mark = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Log.log(new _1.LogMessage(_1.Log.MARK, this.category, args));
    };
    Logger.prototype.command = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _1.Log.log(new _1.LogMessage(_1.Log.COMMAND, this.category, args));
    };
    Logger.prototype.assert = function (condition) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var logMessage = new _1.LogMessage(_1.Log.ASSERT, this.category, args);
        if (!condition) {
            return _1.Log.log(logMessage);
        }
        return null;
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
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map