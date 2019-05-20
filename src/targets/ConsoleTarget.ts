import { ILogTarget, Log, LogMessage } from "../";

/* tslint:disable:no-console */
export class ConsoleTarget implements ILogTarget {

    public filters: string[];
    public level: number;

    public startTime: number;
    public timeStampOffset: number = 0;

    constructor(level: number = 0, filters: string[] = []) {
        this.startTime = new Date().getTime();

        this.level = level;
        this.filters = filters;
    }

    public output(logMessage: LogMessage): void {
        if (!this.canOutput(logMessage)) { return; }

        let output: string[];
        let message: string = `(${this.getTimeStamp()})${Log.resolveLevelName(logMessage.level) + Log.formatCategory(logMessage.category)}: `;

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
    protected write(level: number, output: any): void {
        switch (level) {
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

    public clear(): void {
        this.timeStampOffset = this.getTimer();
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
