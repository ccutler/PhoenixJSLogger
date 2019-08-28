import { ILogTarget } from "../ILogTarget";
import { LogLevel } from "../LogLevel";
import { LogMessage } from "../LogMessage";
import { ConsoleTarget } from "./ConsoleTarget";

export class NodeConsoleTarget extends ConsoleTarget implements ILogTarget {
    private static readonly COLOR_TRACE: string = "\x1b[1m\x1b[30m";
    private static readonly COLOR_DEBUG: string = "\x1b[2m\x1b[37m";
    private static readonly COLOR_LOG: string = "\x1b[2m\x1b[37m";
    private static readonly COLOR_INFO: string = "\x1b[1m\x1b[37m";
    private static readonly COLOR_PRINT: string = "\x1b[37m";
    private static readonly COLOR_NOTICE: string = "\x1b[1m\x1b[34m";
    private static readonly COLOR_WARN: string = "\x1b[1m\x1b[33m";
    private static readonly COLOR_CRITICAL: string = "\x1b[1m\x1b[31m";
    private static readonly COLOR_ERROR: string = "\x1b[31m";
    private static readonly COLOR_FATAL: string = "\x1b[41m";
    private static readonly COLOR_ASSERT: string = "\x1b[1m\x1b[33m";
    private static readonly COLOR_COMMAND: string = "\x1b[1m\x1b[36m";
    private static readonly COLOR_RESET: string = "\x1b[0m";

    public output(logMessage: LogMessage): void {
        if (!this.canOutput(logMessage)) { return; }

        let output: any[];
        let message: string = `(${this.getTimeStamp()})${this.resolveLevelName(logMessage.level) + this.formatCategory(logMessage.category)}: `;

        if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
            message += logMessage.message;
            output = [this.getColor(logMessage.level) + message + NodeConsoleTarget.COLOR_RESET];
        } else {
            output = [this.getColor(logMessage.level) + message + JSON.stringify(logMessage.message[0], null, 2) + NodeConsoleTarget.COLOR_RESET];
        }

        this.write(logMessage.level, output);
    }

    /* istanbul ignore next */
    private getColor(level: LogLevel): string {
        switch (level) {
            case LogLevel.TRACE:
                return NodeConsoleTarget.COLOR_TRACE;

            case LogLevel.DEBUG:
                return NodeConsoleTarget.COLOR_DEBUG;

            case LogLevel.LOG:
                return NodeConsoleTarget.COLOR_LOG;

            case LogLevel.PRINT:
                return NodeConsoleTarget.COLOR_PRINT;

            case LogLevel.INFO:
                return NodeConsoleTarget.COLOR_INFO;

            case LogLevel.NOTICE:
                return NodeConsoleTarget.COLOR_NOTICE;

            case LogLevel.WARN:
                return NodeConsoleTarget.COLOR_WARN;

            case LogLevel.ERROR:
                return NodeConsoleTarget.COLOR_ERROR;

            case LogLevel.CRITICAL:
                return NodeConsoleTarget.COLOR_CRITICAL;

            case LogLevel.FATAL:
                return NodeConsoleTarget.COLOR_FATAL;

            case LogLevel.ASSERT:
                return NodeConsoleTarget.COLOR_ASSERT;

            case LogLevel.COMMAND:
                return NodeConsoleTarget.COLOR_COMMAND;

            default:
                return NodeConsoleTarget.COLOR_LOG;
        }
    }
}
