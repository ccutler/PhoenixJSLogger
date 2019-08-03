"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
var ConsoleTarget_1 = require("./ConsoleTarget");
var BrowserConsoleTarget = (function (_super) {
    __extends(BrowserConsoleTarget, _super);
    function BrowserConsoleTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserConsoleTarget.prototype.output = function (logMessage) {
        if (!this.canOutput(logMessage)) {
            return;
        }
        var output;
        var message = "%c(" + this.getTimeStamp() + ")" + (__1.Log.resolveLevelName(logMessage.level) + __1.Log.formatCategory(logMessage.category)) + ": ";
        if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
            message += logMessage.message;
            output = [message, "color: " + this.getColor(logMessage.level)];
        }
        else {
            output = [message, "color: " + this.getColor(logMessage.level), logMessage.message[0]];
        }
        this.write(logMessage.level, output);
    };
    BrowserConsoleTarget.prototype.getColor = function (level) {
        switch (level) {
            case __1.Log.TRACE:
                return BrowserConsoleTarget.COLOR_TRACE;
            case __1.Log.DEBUG:
                return BrowserConsoleTarget.COLOR_DEBUG;
            case __1.Log.LOG:
                return BrowserConsoleTarget.COLOR_LOG;
            case __1.Log.PRINT:
                return BrowserConsoleTarget.COLOR_PRINT;
            case __1.Log.INFO:
                return BrowserConsoleTarget.COLOR_INFO;
            case __1.Log.NOTICE:
                return BrowserConsoleTarget.COLOR_NOTICE;
            case __1.Log.WARN:
                return BrowserConsoleTarget.COLOR_WARN;
            case __1.Log.ERROR:
                return BrowserConsoleTarget.COLOR_ERROR;
            case __1.Log.CRITICAL:
                return BrowserConsoleTarget.COLOR_CRITICAL;
            case __1.Log.FATAL:
                return BrowserConsoleTarget.COLOR_FATAL;
            case __1.Log.COMMAND:
                return BrowserConsoleTarget.COLOR_COMMAND;
            case __1.Log.ASSERT:
                return BrowserConsoleTarget.COLOR_ASSERT;
            default:
                return BrowserConsoleTarget.COLOR_LOG;
        }
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
}(ConsoleTarget_1.ConsoleTarget));
exports.BrowserConsoleTarget = BrowserConsoleTarget;
//# sourceMappingURL=BrowserConsoleTarget.js.map