import { ILogger } from "./ILogger";
import { ILogTarget } from "./ILogTarget";
import { Logger } from "./Logger";
import { LogMessage } from "./LogMessage";

export class Log {
    public static MARK: number = -1;
    public static ALL: number = 0;
    public static TRACE: number = 1;
    public static DEBUG: number = 2;
    public static LOG: number = 3;
    public static INFO: number = 4;
    public static PRINT: number = 5;
    public static NOTICE: number = 6;
    public static WARN: number = 7;
    public static CRITICAL: number = 8;
    public static ERROR: number = 9;
    public static FATAL: number = 10;
    public static ASSERT: number = 11;
    public static COMMAND: number = 100;

    public static targets: ILogTarget[] = [];

    public static getLogger(category?: any): ILogger {
        return new Logger(category);
    }

    public static log(logMessage: LogMessage): void {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].output(logMessage);
        }
    }

    public static clear(): void {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].clear();
        }
    }

    public static addTarget(target: ILogTarget): void {
        if (Log.targets.indexOf(target) === -1) {
            Log.targets.push(target);
        }
    }

    public static removeTarget(target: ILogTarget): void {
        let logTarget: ILogTarget;
        for (let i = 0; i < Log.targets.length; i++) {
            logTarget = Log.targets.splice(Log.targets.indexOf(target), 1)[0];
            logTarget.destroy();
        }
    }

    public static removeAllTargets(): void {
        let target: ILogTarget;
        for (let i: number = 0; i < Log.targets.length; i++) {
            target = Log.targets[i];
            target.destroy();
        }

        Log.targets = [];
    }

    public static getTargetByType(type: any): ILogTarget {
        let target: ILogTarget;
        let targetType: ILogTarget;
        for (const key in Log.targets) {
            if (Log.targets.hasOwnProperty(key)) {
                targetType = Log.targets[key];
                if (targetType instanceof type) {
                    target = targetType;
                }
            }
        }

        return target;
    }

    public static setLevel(level: number): void {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].level = level;
        }
    }

    public static setFilters(filters: string[]): void {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].filters = filters;
        }
    }

    public static formatCategory(category: string): string {
        return (category) ? "[" + category + "]: " : "";
    }

    public static resolveLevelName(level: number): string {
        switch (level) {
            default:
            case Log.ALL:
                return "|   ALL| ";
            case Log.TRACE:
                return "| TRACE| ";
            case Log.DEBUG:
                return "| DEBUG| ";
            case Log.LOG:
                return "|   LOG| ";
            case Log.PRINT:
                return "| PRINT| ";
            case Log.INFO:
                return "|  INFO| ";
            case Log.NOTICE:
                return "|NOTICE| ";
            case Log.WARN:
                return "|  WARN| ";
            case Log.ERROR:
                return "| ERROR| ";
            case Log.CRITICAL:
                return "|  CRIT| ";
            case Log.FATAL:
                return "| FATAL| ";
            case Log.ASSERT:
                return "|ASSERT| ";
            case Log.COMMAND:
                return "|   CMD| ";
        }
    }

    public static destroy(): void {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].destroy();
            Log.targets[i] = null;
        }

        Log.targets = null;
    }
}
