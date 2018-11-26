"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("./Log");
const LogMessage_1 = require("./LogMessage");
class Logger {
    constructor(category) {
        this.category = this.getName(category);
    }
    clear() {
        Log_1.Log.clear();
    }
    trace(...args) {
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.TRACE, this.category, args));
    }
    debug(...args) {
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.DEBUG, this.category, args));
    }
    log(...args) {
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.LOG, this.category, args));
    }
    print(...args) {
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.PRINT, this.category, args));
    }
    info(...args) {
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.INFO, this.category, args));
    }
    notice(...args) {
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.NOTICE, this.category, args));
    }
    warn(...args) {
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.WARN, this.category, args));
    }
    error(...args) {
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.ERROR, this.category, args));
    }
    critical(...args) {
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.CRITICAL, this.category, args));
    }
    fatal(...args) {
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.FATAL, this.category, args));
    }
    mark(...args) {
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.MARK, this.category, args));
    }
    command(...args) {
        Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.COMMAND, this.category, args));
    }
    assert(condition, ...args) {
        if (!condition) {
            Log_1.Log.log(new LogMessage_1.LogMessage(Log_1.Log.WARN, this.category, args));
        }
    }
    getName(reference) {
        let result = "";
        if (reference.constructor && reference.constructor.toString) {
            const info = reference.constructor.toString().match(/function\s*(\w+)/);
            if (info && info.length === 2) {
                result = info[1];
            }
        }
        else {
            reference = reference.toString();
            result = (reference.indexOf("[object ") !== -1) ? "[" + reference.substring(8) : reference;
        }
        return result;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map