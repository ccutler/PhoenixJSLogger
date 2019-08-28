import { ILogger } from "./ILogger";
import { Log } from "./Log";
import { LogLevel } from "./LogLevel";
import { LogMessage } from "./LogMessage";

export class Logger implements ILogger {
    public readonly category: string;

    constructor(category: string) {
        this.category = this.getName(category);
    }

    public clear(): void {
        Log.clear();
    }

    public trace(...args: any[]): LogMessage {
        return Log.log(new LogMessage(LogLevel.TRACE, this.category, args));
    }

    public debug(...args: any[]): LogMessage {
        return Log.log(new LogMessage(LogLevel.DEBUG, this.category, args));
    }

    public log(...args: any[]): LogMessage {
        return Log.log(new LogMessage(LogLevel.LOG, this.category, args));
    }

    public print(...args: any[]): LogMessage {
        return Log.log(new LogMessage(LogLevel.PRINT, this.category, args));
    }

    public info(...args: any[]): LogMessage {
        return Log.log(new LogMessage(LogLevel.INFO, this.category, args));
    }

    public notice(...args: any[]): LogMessage {
        return Log.log(new LogMessage(LogLevel.NOTICE, this.category, args));
    }

    public warn(...args: any[]): LogMessage {
        return Log.log(new LogMessage(LogLevel.WARN, this.category, args));
    }

    public error(...args: any[]): LogMessage {
        return Log.log(new LogMessage(LogLevel.ERROR, this.category, args));
    }

    public critical(...args: any[]): LogMessage {
        return Log.log(new LogMessage(LogLevel.CRITICAL, this.category, args));
    }

    public fatal(...args: any[]): LogMessage {
        return Log.log(new LogMessage(LogLevel.FATAL, this.category, args));
    }

    public mark(...args: any[]): LogMessage {
        return Log.log(new LogMessage(LogLevel.MARK, this.category, args));
    }

    public command(...args: any[]): LogMessage {
        return Log.log(new LogMessage(LogLevel.COMMAND, this.category, args));
    }

    public assert(condition: boolean, ...args: any[]): LogMessage {
        const logMessage: LogMessage = new LogMessage(LogLevel.ASSERT, this.category, args);
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
