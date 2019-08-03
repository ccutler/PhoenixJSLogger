import { ILogger, ILogTarget, LogMessage } from "./";
export declare class Log {
    static targets: ILogTarget[];
    static getLogger(category?: any): ILogger;
    static log(logMessage: LogMessage): LogMessage;
    static clear(): void;
    static addTarget(target: ILogTarget): void;
    static removeTarget(target: ILogTarget): void;
    static removeAllTargets(): void;
    static getTargetByType(type: any): ILogTarget;
    static setLevel(level: number): void;
    static setFilters(filters: string[]): void;
    static formatCategory(category: string): string;
    static resolveLevelName(level: number): string;
    static destroy(): void;
}
