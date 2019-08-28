import { ILogTarget } from "../ILogTarget";
import { LogLevel } from "../LogLevel";
import { LogMessage } from "../LogMessage";

/* tslint:disable:no-console */
export class ConsoleTarget implements ILogTarget {

    public filters: string[];
    public level: LogLevel;

    public startTime: number;
    public timeStampOffset: number = 0;

    constructor(level: LogLevel = 0, filters: string[] = []) {
        this.startTime = new Date().getTime();

        this.level = level;
        this.filters = filters;
    }

    public clear(): void {
        this.timeStampOffset = this.getTimer();
    }

    public output(logMessage: LogMessage): void {
        if (!this.canOutput(logMessage)) { return; }

        let output: string[];
        let message: string = `(${this.getTimeStamp()})${this.resolveLevelName(logMessage.level) + this.formatCategory(logMessage.category)}: `;

        if (typeof logMessage.message[0] === "string" || typeof logMessage.message[0] === "number" || typeof logMessage.message[0] === "boolean") {
            message += logMessage.message;
            output = [message];
        } else {
            output = [message, JSON.stringify(logMessage.message[0], null, 2)];
        }

        this.write(logMessage.level, output);
    }

    public canOutput(logMessage: LogMessage): boolean {
        if (logMessage.level < this.level) {
            return false;
        }

        if (this.filters.length > 0) {
            for (let i: number = 0; i < this.filters.length; i++) {
                if (this.filters[i] === logMessage.category) {
                    return true;
                }
            }

            return false;
        }

        return true;
    }

    /* istanbul ignore next */
    protected write(level: LogLevel, output: any): void {
        switch (level) {
            default:
            case LogLevel.TRACE:
            case LogLevel.DEBUG:
                console.debug.apply(console, output);
                break;

            case LogLevel.LOG:
            case LogLevel.PRINT:
                console.log.apply(console, output);
                break;

            case LogLevel.INFO:
            case LogLevel.NOTICE:
                console.info.apply(console, output);
                break;

            case LogLevel.WARN:
                console.warn.apply(console, output);
                break;

            case LogLevel.ERROR:
            case LogLevel.CRITICAL:
            case LogLevel.FATAL:
                console.error.apply(console, output);
                break;

            case LogLevel.ASSERT:
                console.warn.apply(console, output);
                break;

            case LogLevel.MARK:
                console.timeStamp.apply(console, output);
                break;
        }
    }

    /* istanbul ignore next */
    protected formatCategory(category: string): string {
        return `[${category}]`;
    }

    /* istanbul ignore next */
    protected resolveLevelName(level: LogLevel): string {
        switch (level) {
            default:
            case LogLevel.TRACE:
                return "| TRACE| ";
            case LogLevel.DEBUG:
                return "| DEBUG| ";
            case LogLevel.LOG:
                return "|   LOG| ";
            case LogLevel.PRINT:
                return "| PRINT| ";
            case LogLevel.INFO:
                return "|  INFO| ";
            case LogLevel.NOTICE:
                return "|NOTICE| ";
            case LogLevel.WARN:
                return "|  WARN| ";
            case LogLevel.ERROR:
                return "| ERROR| ";
            case LogLevel.CRITICAL:
                return "|  CRIT| ";
            case LogLevel.FATAL:
                return "| FATAL| ";
            case LogLevel.COMMAND:
                return "|   CMD| ";
            case LogLevel.ASSERT:
                return "|ASSERT| ";
        }
    }

    protected getTimeStamp(): number {
        return this.getTimer() - this.timeStampOffset;
    }

    protected getTimer(): number {
        return (new Date().getTime() - this.startTime);
    }

    public destroy(): void {
        this.filters = null;
    }
}
