import { ILogTarget, Log, LogLevel, LogMessage } from "../";
import { ConsoleTarget } from "./ConsoleTarget";

enum LogColorLight {
    COLOR_TRACE = "#CCCCCC",
    COLOR_DEBUG = "#999999",
    COLOR_LOG = "#666666",
    COLOR_INFO = "#333333",
    COLOR_PRINT = "#000000",
    COLOR_NOTICE = "#0066FF",
    COLOR_WARN = "#FF6600",
    COLOR_CRITICAL = "#FF0000",
    COLOR_ERROR = "#FF0000",
    COLOR_FATAL = "#FF0000",
    COLOR_ASSERT = "#FF6600",
    COLOR_COMMAND = "#6666FF",
}

enum LogColorDark {
    COLOR_TRACE = "#666666",
    COLOR_DEBUG = "#999999",
    COLOR_LOG = "#CCCCCC",
    COLOR_INFO = "#EDEDED",
    COLOR_PRINT = "#FFFFFF",
    COLOR_NOTICE = "#0066FF",
    COLOR_WARN = "#FF6600",
    COLOR_CRITICAL = "#FF0000",
    COLOR_ERROR = "#FF0000",
    COLOR_FATAL = "#FF0000",
    COLOR_ASSERT = "#FF6600",
    COLOR_COMMAND = "#6666FF",
}

export class BrowserConsoleTarget extends ConsoleTarget implements ILogTarget {

    private static THEME: any;
    public constructor(theme: "light" | "dark" = "dark", level: number = 0, filters: string[] = []) {
        super(level, filters);

        if (theme === "light") {
            BrowserConsoleTarget.THEME = LogColorLight;
        }

        if (theme === "dark") {
            BrowserConsoleTarget.THEME = LogColorDark;
        }
    }

    public output(logMessage: LogMessage): void {
        if (!this.canOutput(logMessage)) { return; }

        let output: any[];
        let message: string = `%c(${this.getTimeStamp()})${Log.resolveLevelName(logMessage.level) + Log.formatCategory(logMessage.category)}: `;

        if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
            message += logMessage.message;
            output = [message, `color: ${this.getColor(logMessage.level)}`];
        } else {
            output = [message, `color: ${this.getColor(logMessage.level)}`, logMessage.message[0]];
        }

        this.write(logMessage.level, output);
    }

    /* istanbul ignore next */
    private getColor(level: number): string {
        switch (level) {
            case LogLevel.TRACE:
                return BrowserConsoleTarget.THEME.COLOR_TRACE;

            case LogLevel.DEBUG:
                return BrowserConsoleTarget.THEME.COLOR_DEBUG;

            case LogLevel.LOG:
                return BrowserConsoleTarget.THEME.COLOR_LOG;

            case LogLevel.PRINT:
                return BrowserConsoleTarget.THEME.COLOR_PRINT;

            case LogLevel.INFO:
                return BrowserConsoleTarget.THEME.COLOR_INFO;

            case LogLevel.NOTICE:
                return BrowserConsoleTarget.THEME.COLOR_NOTICE;

            case LogLevel.WARN:
                return BrowserConsoleTarget.THEME.COLOR_WARN;

            case LogLevel.ERROR:
                return BrowserConsoleTarget.THEME.COLOR_ERROR;

            case LogLevel.CRITICAL:
                return BrowserConsoleTarget.THEME.COLOR_CRITICAL;

            case LogLevel.FATAL:
                return BrowserConsoleTarget.THEME.COLOR_FATAL;

            case LogLevel.COMMAND:
                return BrowserConsoleTarget.THEME.COLOR_COMMAND;

            case LogLevel.ASSERT:
                return BrowserConsoleTarget.THEME.COLOR_ASSERT;

            default:
                return BrowserConsoleTarget.THEME.COLOR_LOG;
        }
    }
}
