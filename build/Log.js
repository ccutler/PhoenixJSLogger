"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("./Logger");
class Log {
    static getLogger(category) {
        return new Logger_1.Logger(category);
    }
    static log(logMessage) {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].output(logMessage);
        }
    }
    static clear() {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].clear();
        }
    }
    static addTarget(target) {
        if (Log.targets.indexOf(target) === -1) {
            Log.targets.push(target);
        }
    }
    static removeTarget(target) {
        let logTarget;
        for (let i = 0; i < Log.targets.length; i++) {
            logTarget = Log.targets.splice(Log.targets.indexOf(target), 1)[0];
            logTarget.destroy();
        }
    }
    static removeAllTargets() {
        let target;
        for (let i = 0; i < Log.targets.length; i++) {
            target = Log.targets[i];
            target.destroy();
        }
        Log.targets = [];
    }
    static getTargetByType(type) {
        let target;
        let targetType;
        for (const key in Log.targets) {
            if (Log.targets.hasOwnProperty(key)) {
                targetType = Log.targets[key];
                if (targetType instanceof type) {
                    target = targetType;
                }
            }
        }
        return target;
    }
    static setLevel(level) {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].level = level;
        }
    }
    static setFilters(filters) {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].filters = filters;
        }
    }
    static formatCategory(category) {
        return (category) ? "[" + category + "]: " : "";
    }
    static resolveLevelName(level) {
        switch (level) {
            default:
            case Log.ALL:
                return "|   ALL| ";
            case Log.TRACE:
                return "| TRACE| ";
            case Log.DEBUG:
                return "| DEBUG| ";
            case Log.LOG:
                return "|   LOG| ";
            case Log.PRINT:
                return "| PRINT| ";
            case Log.INFO:
                return "|  INFO| ";
            case Log.NOTICE:
                return "|NOTICE| ";
            case Log.WARN:
                return "|  WARN| ";
            case Log.ERROR:
                return "| ERROR| ";
            case Log.CRITICAL:
                return "|CRITICAL| ";
            case Log.FATAL:
                return "| FATAL| ";
            case Log.COMMAND:
                return "|   CMD| ";
        }
    }
    static destroy() {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].destroy();
            Log.targets[i] = null;
        }
        Log.targets = null;
    }
}
Log.MARK = -1;
Log.ALL = 0;
Log.TRACE = 1;
Log.DEBUG = 2;
Log.LOG = 3;
Log.INFO = 4;
Log.PRINT = 5;
Log.NOTICE = 6;
Log.WARN = 7;
Log.CRITICAL = 8;
Log.ERROR = 9;
Log.FATAL = 10;
Log.COMMAND = 100;
Log.targets = [];
exports.Log = Log;
//# sourceMappingURL=Log.js.map