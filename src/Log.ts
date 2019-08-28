import { ILogger } from "./ILogger";
import { ILogTarget } from "./ILogTarget";
import { Logger } from "./Logger";
import { LogLevel } from "./LogLevel";
import { LogMessage } from "./LogMessage";

export class Log {

    public static targets: ILogTarget[] = [];

    public static getLogger(category?: any): ILogger {
        if (!Log.targets) { Log.targets = []; }
        return new Logger(category);
    }

    public static log(logMessage: LogMessage): LogMessage {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].output(logMessage);
        }

        return logMessage;
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
        for (let i = 0; i < Log.targets.length; i++) {
            const logTarget: ILogTarget = Log.targets.splice(Log.targets.indexOf(target), 1)[0];
            logTarget.destroy();
        }
    }

    public static removeAllTargets(): void {
        for (let i: number = 0; i < Log.targets.length; i++) {
            const target: ILogTarget = Log.targets[i];
            target.destroy();
        }

        Log.targets = [];
    }

    public static getTargetByType(type: any): ILogTarget {
        let target: ILogTarget;
        for (const key in Log.targets) {
            const targetType = Log.targets[key];
            if (targetType instanceof type) {
                target = targetType;
            }
        }

        return target;
    }

    public static setLevel(level: LogLevel): void {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].level = level;
        }
    }

    public static setFilters(filters: string[]): void {
        for (let i = 0; i < Log.targets.length; i++) {
            Log.targets[i].filters = filters;
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
