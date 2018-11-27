import { ILogger } from "./ILogger";
import { Log } from "./Log";
import { LogMessage } from "./LogMessage";

export class Logger implements ILogger {
    private category: string;

    constructor(category: string) {
        this.category = this.getName(category);
    }

    public clear(): void {
        Log.clear();
    }

    public trace(...args: any[]): void {
        Log.log(new LogMessage(Log.TRACE, this.category, args));
    }

    public debug(...args: any[]): void {
        Log.log(new LogMessage(Log.DEBUG, this.category, args));
    }

    public log(...args: any[]): void {
        Log.log(new LogMessage(Log.LOG, this.category, args));
    }

    public print(...args: any[]): void {
        Log.log(new LogMessage(Log.PRINT, this.category, args));
    }

    public info(...args: any[]): void {
        Log.log(new LogMessage(Log.INFO, this.category, args));
    }

    public notice(...args: any[]): void {
        Log.log(new LogMessage(Log.NOTICE, this.category, args));
    }

    public warn(...args: any[]): void {
        Log.log(new LogMessage(Log.WARN, this.category, args));
    }

    public error(...args: any[]): void {
        Log.log(new LogMessage(Log.ERROR, this.category, args));
    }

    public critical(...args: any[]): void {
        Log.log(new LogMessage(Log.CRITICAL, this.category, args));
    }

    public fatal(...args: any[]): void {
        Log.log(new LogMessage(Log.FATAL, this.category, args));
    }

    public mark(...args: any[]): void {
        Log.log(new LogMessage(Log.MARK, this.category, args));
    }

    public command(...args: any[]): void {
        Log.log(new LogMessage(Log.COMMAND, this.category, args));
    }

    public assert(condition: boolean, ...args: any[]): void {
        if (!condition) {
            Log.log(new LogMessage(Log.ASSERT, this.category, args));
        }
    }

    private getName(reference: any): string {
        let result: string = "";
        if (reference.constructor && reference.constructor.toString) {
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
