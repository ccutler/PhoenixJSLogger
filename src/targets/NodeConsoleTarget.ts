import { ILogTarget } from "../ILogTarget";
import { Log } from "../Log";
import { LogMessage } from "../LogMessage";

export class NodeConsoleTarget implements ILogTarget {
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

    public filters: string[];
    public level: number;

    private startTime: number;
    private timeStampOffset: number = 0;

    constructor(level: number = 0, filters: string[] = []) {
        this.startTime = new Date().getTime();

        this.level = level;
        this.filters = filters;
    }

    public output(logMessage: LogMessage): void {
        if (logMessage.level >= this.level) {
            if (this.filters.length > 0) {
                let canOutput: boolean = false;
                for (let i = 0; i < this.filters.length; i++) {
                    if (this.filters[i] === logMessage.category) {
                        canOutput = true;
                    }
                }

                if (!canOutput) {
                    return;
                }
            }

            let output: any[];
            let message: string = "(" + this.getTimeStamp() + ")";
            message += Log.resolveLevelName(logMessage.level) + " ";
            message += Log.formatCategory(logMessage.category) + ": ";

            if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
                message += logMessage.message;
                output = [this.getColor(logMessage.level) + message + "\x1b[0m"];
            } else {
                output = [logMessage.message[0]];
            }

            switch (logMessage.level) {
                default:
                case Log.TRACE:
                case Log.DEBUG:
                case Log.LOG:
                case Log.PRINT:
                    console.log.apply(console, output);
                    break;

                case Log.INFO:
                    console.info.apply(console, output);
                    break;

                case Log.WARN:
                    console.warn.apply(console, output);
                    break;

                case Log.ERROR:
                case Log.CRITICAL:
                case Log.FATAL:
                    console.error.apply(console, output);
                    break;

                case Log.ASSERT:
                    console.warn.apply(console, output);
                    break;

                case Log.MARK:
                    console.timeStamp.apply(console, output);
                    break;
            }
        }
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

    public clear(): void {
        this.timeStampOffset = this.getTimer();
    }

    private getTimeStamp(): number {
        return this.getTimer() - this.timeStampOffset;
    }

    private getTimer(): number {
        return (new Date().getTime() - this.startTime);
    }

    public destroy(): void {
        this.filters = null;
    }
}
