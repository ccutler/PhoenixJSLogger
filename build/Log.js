"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var Log = (function () {
    function Log() {
    }
    Log.getLogger = function (category) {
        if (!Log.targets) {
            Log.targets = [];
        }
        return new _1.Logger(category);
    };
    Log.log = function (logMessage) {
        for (var i = 0; i < Log.targets.length; i++) {
            Log.targets[i].output(logMessage);
        }
        return logMessage;
    };
    Log.clear = function () {
        for (var i = 0; i < Log.targets.length; i++) {
            Log.targets[i].clear();
        }
    };
    Log.addTarget = function (target) {
        if (Log.targets.indexOf(target) === -1) {
            Log.targets.push(target);
        }
    };
    Log.removeTarget = function (target) {
        for (var i = 0; i < Log.targets.length; i++) {
            var logTarget = Log.targets.splice(Log.targets.indexOf(target), 1)[0];
            logTarget.destroy();
        }
    };
    Log.removeAllTargets = function () {
        for (var i = 0; i < Log.targets.length; i++) {
            var target = Log.targets[i];
            target.destroy();
        }
        Log.targets = [];
    };
    Log.getTargetByType = function (type) {
        var target;
        for (var key in Log.targets) {
            var targetType = Log.targets[key];
            if (targetType instanceof type) {
                target = targetType;
            }
        }
        return target;
    };
    Log.setLevel = function (level) {
        for (var i = 0; i < Log.targets.length; i++) {
            Log.targets[i].level = level;
        }
    };
    Log.setFilters = function (filters) {
        for (var i = 0; i < Log.targets.length; i++) {
            Log.targets[i].filters = filters;
        }
    };
    Log.formatCategory = function (category) {
        return "[" + category + "]";
    };
    Log.resolveLevelName = function (level) {
        switch (level) {
            default:
            case 0:
                return "|   ALL| ";
            case 1:
                return "| TRACE| ";
            case 2:
                return "| DEBUG| ";
            case 3:
                return "|   LOG| ";
            case 5:
                return "| PRINT| ";
            case 4:
                return "|  INFO| ";
            case 6:
                return "|NOTICE| ";
            case 7:
                return "|  WARN| ";
            case 9:
                return "| ERROR| ";
            case 8:
                return "|  CRIT| ";
            case 10:
                return "| FATAL| ";
            case 100:
                return "|   CMD| ";
            case 11:
                return "|ASSERT| ";
        }
    };
    Log.destroy = function () {
        for (var i = 0; i < Log.targets.length; i++) {
            Log.targets[i].destroy();
            Log.targets[i] = null;
        }
        Log.targets = null;
    };
    Log.targets = [];
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=Log.js.map