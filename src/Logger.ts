import { ILogger, Log, LogMessage } from "./";

export class Logger implements ILogger {
    public readonly category: string;

    constructor(category: string) {
        this.category = this.getName(category);
    }

    public clear(): void {
        Log.clear();
    }

    public trace(...args: any[]): LogMessage {
        return Log.log(new LogMessage(Log.TRACE, this.category, args));
    }

    public debug(...args: any[]): LogMessage {
        return Log.log(new LogMessage(Log.DEBUG, this.category, args));
    }

    public log(...args: any[]): LogMessage {
        return Log.log(new LogMessage(Log.LOG, this.category, args));
    }

    public print(...args: any[]): LogMessage {
        return Log.log(new LogMessage(Log.PRINT, this.category, args));
    }

    public info(...args: any[]): LogMessage {
        return Log.log(new LogMessage(Log.INFO, this.category, args));
    }

    public notice(...args: any[]): LogMessage {
        return Log.log(new LogMessage(Log.NOTICE, this.category, args));
    }

    public warn(...args: any[]): LogMessage {
        return Log.log(new LogMessage(Log.WARN, this.category, args));
    }

    public error(...args: any[]): LogMessage {
        return Log.log(new LogMessage(Log.ERROR, this.category, args));
    }

    public critical(...args: any[]): LogMessage {
        return Log.log(new LogMessage(Log.CRITICAL, this.category, args));
    }

    public fatal(...args: any[]): LogMessage {
        return Log.log(new LogMessage(Log.FATAL, this.category, args));
    }

    public mark(...args: any[]): LogMessage {
        return Log.log(new LogMessage(Log.MARK, this.category, args));
    }

    public command(...args: any[]): LogMessage {
        return Log.log(new LogMessage(Log.COMMAND, this.category, args));
    }

    public assert(condition: boolean, ...args: any[]): LogMessage {
        const logMessage: LogMessage = new LogMessage(Log.ASSERT, this.category, args);
        if (!condition) {
            return Log.log(logMessage);
        }

        return null;
    }

    /* istanbul ignore next */
    private getName(reference: any): string {
        let result: string = "";
        if (typeof reference !== "string" && reference.constructor && reference.constructor.toString) {
            const info: string[] = reference.constructor.toString().match(/function\s*(\w+)/);
            if (info && info.length === 2) {
                result = info[1];
            }
        } else {
            reference = reference.toString();
            result = (reference.indexOf("[object ") !== -1) ? "[" + reference.substring(8) : reference;
        }

        return result;
    }
}
