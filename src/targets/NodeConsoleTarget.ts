import { ConsoleTarget } from "./ConsoleTarget";
import { ILogTarget } from "../ILogTarget";
import { Log } from "../Log";
import { LogMessage } from "../LogMessage";

export class NodeConsoleTarget extends ConsoleTarget implements ILogTarget {
    private static COLOR_TRACE: string = "\x1b[1m\x1b[30m";
    private static COLOR_DEBUG: string = "\x1b[2m\x1b[37m";
    private static COLOR_LOG: string = "\x1b[2m\x1b[37m";
    private static COLOR_INFO: string = "\x1b[1m\x1b[37m";
    private static COLOR_PRINT: string = "\x1b[37m";
    private static COLOR_NOTICE: string = "\x1b[1m\x1b[34m";
    private static COLOR_WARN: string = "\x1b[1m\x1b[33m";
    private static COLOR_CRITICAL: string = "\x1b[1m\x1b[31m";
    private static COLOR_ERROR: string = "\x1b[31m";
    private static COLOR_FATAL: string = "\x1b[41m";
    private static COLOR_ASSERT: string = "\x1b[1m\x1b[33m";
    private static COLOR_COMMAND: string = "\x1b[1m\x1b[36m";
    private static COLOR_RESET: string = "\x1b[0m";

    public output(logMessage: LogMessage): void {
        if (!this.canOutput(logMessage)) { return; }

        let output: any[];
        let message: string = `(${this.getTimeStamp()})${Log.resolveLevelName(logMessage.level) + Log.formatCategory(logMessage.category)}: `;

        if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
            message += logMessage.message;
            output = [this.getColor(logMessage.level) + message + NodeConsoleTarget.COLOR_RESET];
        } else {
            output = [this.getColor(logMessage.level) + message + JSON.stringify(logMessage.message[0], null, 2) + NodeConsoleTarget.COLOR_RESET];
        }

        this.write(logMessage.level, output);
    }

    private getColor(level: number): string {
        switch (level) {
            case Log.TRACE:
                return NodeConsoleTarget.COLOR_TRACE;

            case Log.DEBUG:
                return NodeConsoleTarget.COLOR_DEBUG;

            case Log.LOG:
                return NodeConsoleTarget.COLOR_LOG;

            case Log.PRINT:
                return NodeConsoleTarget.COLOR_PRINT;

            case Log.INFO:
                return NodeConsoleTarget.COLOR_INFO;

            case Log.NOTICE:
                return NodeConsoleTarget.COLOR_NOTICE;

            case Log.WARN:
                return NodeConsoleTarget.COLOR_WARN;

            case Log.ERROR:
                return NodeConsoleTarget.COLOR_ERROR;

            case Log.CRITICAL:
                return NodeConsoleTarget.COLOR_CRITICAL;

            case Log.FATAL:
                return NodeConsoleTarget.COLOR_FATAL;

            case Log.ASSERT:
                return NodeConsoleTarget.COLOR_ASSERT;

            case Log.COMMAND:
                return NodeConsoleTarget.COLOR_COMMAND;

            default:
                return NodeConsoleTarget.COLOR_LOG;
        }
    }
}
