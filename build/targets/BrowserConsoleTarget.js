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
var LogColorLight;
(function (LogColorLight) {
    LogColorLight["COLOR_TRACE"] = "#CCCCCC";
    LogColorLight["COLOR_DEBUG"] = "#999999";
    LogColorLight["COLOR_LOG"] = "#666666";
    LogColorLight["COLOR_INFO"] = "#333333";
    LogColorLight["COLOR_PRINT"] = "#000000";
    LogColorLight["COLOR_NOTICE"] = "#0066FF";
    LogColorLight["COLOR_WARN"] = "#FF6600";
    LogColorLight["COLOR_CRITICAL"] = "#FF0000";
    LogColorLight["COLOR_ERROR"] = "#FF0000";
    LogColorLight["COLOR_FATAL"] = "#FF0000";
    LogColorLight["COLOR_ASSERT"] = "#FF6600";
    LogColorLight["COLOR_COMMAND"] = "#6666FF";
})(LogColorLight || (LogColorLight = {}));
var LogColorDark;
(function (LogColorDark) {
    LogColorDark["COLOR_TRACE"] = "#666666";
    LogColorDark["COLOR_DEBUG"] = "#999999";
    LogColorDark["COLOR_LOG"] = "#CCCCCC";
    LogColorDark["COLOR_INFO"] = "#EDEDED";
    LogColorDark["COLOR_PRINT"] = "#FFFFFF";
    LogColorDark["COLOR_NOTICE"] = "#0066FF";
    LogColorDark["COLOR_WARN"] = "#FF6600";
    LogColorDark["COLOR_CRITICAL"] = "#FF0000";
    LogColorDark["COLOR_ERROR"] = "#FF0000";
    LogColorDark["COLOR_FATAL"] = "#FF0000";
    LogColorDark["COLOR_ASSERT"] = "#FF6600";
    LogColorDark["COLOR_COMMAND"] = "#6666FF";
})(LogColorDark || (LogColorDark = {}));
var BrowserConsoleTarget = (function (_super) {
    __extends(BrowserConsoleTarget, _super);
    function BrowserConsoleTarget(theme, level, filters) {
        if (theme === void 0) { theme = "dark"; }
        if (level === void 0) { level = 0; }
        if (filters === void 0) { filters = []; }
        var _this = _super.call(this, level, filters) || this;
        if (theme === "light") {
            BrowserConsoleTarget.THEME = LogColorLight;
        }
        if (theme === "dark") {
            BrowserConsoleTarget.THEME = LogColorDark;
        }
        return _this;
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
            case 1:
                return BrowserConsoleTarget.THEME.COLOR_TRACE;
            case 2:
                return BrowserConsoleTarget.THEME.COLOR_DEBUG;
            case 3:
                return BrowserConsoleTarget.THEME.COLOR_LOG;
            case 5:
                return BrowserConsoleTarget.THEME.COLOR_PRINT;
            case 4:
                return BrowserConsoleTarget.THEME.COLOR_INFO;
            case 6:
                return BrowserConsoleTarget.THEME.COLOR_NOTICE;
            case 7:
                return BrowserConsoleTarget.THEME.COLOR_WARN;
            case 9:
                return BrowserConsoleTarget.THEME.COLOR_ERROR;
            case 8:
                return BrowserConsoleTarget.THEME.COLOR_CRITICAL;
            case 10:
                return BrowserConsoleTarget.THEME.COLOR_FATAL;
            case 100:
                return BrowserConsoleTarget.THEME.COLOR_COMMAND;
            case 11:
                return BrowserConsoleTarget.THEME.COLOR_ASSERT;
            default:
                return BrowserConsoleTarget.THEME.COLOR_LOG;
        }
    };
    return BrowserConsoleTarget;
}(ConsoleTarget_1.ConsoleTarget));
exports.BrowserConsoleTarget = BrowserConsoleTarget;
//# sourceMappingURL=BrowserConsoleTarget.js.map