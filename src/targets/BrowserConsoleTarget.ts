import { ConsoleTarget } from "./ConsoleTarget";
import { ILogTarget } from "../ILogTarget";
import { Log } from "../Log";
import { LogMessage } from "../LogMessage";

export class BrowserConsoleTarget extends ConsoleTarget implements ILogTarget {
    private static COLOR_TRACE: string = "#CCCCCC";
    private static COLOR_DEBUG: string = "#999999";
    private static COLOR_LOG: string = "#666666";
    private static COLOR_INFO: string = "#333333";
    private static COLOR_PRINT: string = "#000000";
    private static COLOR_NOTICE: string = "#0066FF";
    private static COLOR_WARN: string = "#FF6600";
    private static COLOR_CRITICAL: string = "#FF0000";
    private static COLOR_ERROR: string = "#FF0000";
    private static COLOR_FATAL: string = "#FF0000";
    private static COLOR_ASSERT: string = "#FF6600";
    private static COLOR_COMMAND: string = "#6666FF";

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

    private getColor(level: number): string {
        switch (level) {
            case Log.TRACE:
                return BrowserConsoleTarget.COLOR_TRACE;

            case Log.DEBUG:
                return BrowserConsoleTarget.COLOR_DEBUG;

            case Log.LOG:
                return BrowserConsoleTarget.COLOR_LOG;

            case Log.PRINT:
                return BrowserConsoleTarget.COLOR_PRINT;

            case Log.INFO:
                return BrowserConsoleTarget.COLOR_INFO;

            case Log.NOTICE:
                return BrowserConsoleTarget.COLOR_NOTICE;

            case Log.WARN:
                return BrowserConsoleTarget.COLOR_WARN;

            case Log.ERROR:
                return BrowserConsoleTarget.COLOR_ERROR;

            case Log.CRITICAL:
                return BrowserConsoleTarget.COLOR_CRITICAL;

            case Log.FATAL:
                return BrowserConsoleTarget.COLOR_FATAL;

            case Log.COMMAND:
                return BrowserConsoleTarget.COLOR_COMMAND;

            case Log.ASSERT:
                return BrowserConsoleTarget.COLOR_ASSERT;

            default:
                return BrowserConsoleTarget.COLOR_LOG;
        }
    }
}
