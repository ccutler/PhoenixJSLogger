import { ILogTarget } from "../ILogTarget";
import { Log } from "../Log";
import { LogMessage } from "../LogMessage";

export class BrowserConsoleTarget implements ILogTarget {
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
    private static COLOR_COMMAND: string = "#6666FF";

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
            let message: string = "%c";
            message += "(" + this.getTimeStamp() + ")";
            message += Log.resolveLevelName(logMessage.level) + " ";
            message += Log.formatCategory(logMessage.category) + ": ";

            if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
                message += logMessage.message;
                output = [message, "color: " + this.getColor(logMessage.level)];
            } else {
                output = [logMessage.message[0]];
            }

            switch (logMessage.level) {
                default:
                case Log.TRACE:
                case Log.DEBUG:
                case Log.LOG:
                case Log.PRINT:
                    if (output.length === 1) {
                        console.log.apply(console, [message, "color: " + this.getColor(logMessage.level)]);
                    }
                    console.log.apply(console, output);
                    break;

                case Log.INFO:
                    if (output.length === 1) {
                        console.info.apply(console, [message, "color: " + this.getColor(logMessage.level)]);
                    }
                    console.info.apply(console, output);
                    break;

                case Log.WARN:
                    if (output.length === 1) {
                        console.warn.apply(console, [message, "color: " + this.getColor(logMessage.level)]);
                    }
                    console.warn.apply(console, output);
                    break;

                case Log.ERROR:
                case Log.CRITICAL:
                case Log.FATAL:
                    if (output.length === 1) {
                        console.error.apply(console, [message, "color: " + this.getColor(logMessage.level)]);
                    }
                    console.error.apply(console, output);
                    break;
            }
        }
    }

    public clear(): void {
        this.timeStampOffset = this.getTimer();
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

            default:
                return BrowserConsoleTarget.COLOR_LOG;
        }
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
