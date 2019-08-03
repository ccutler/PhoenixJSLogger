import { ILogTarget, LogMessage } from "../";
export declare class ConsoleTarget implements ILogTarget {
    filters: string[];
    level: number;
    startTime: number;
    timeStampOffset: number;
    constructor(level?: number, filters?: string[]);
    output(logMessage: LogMessage): void;
    canOutput(logMessage: LogMessage): boolean;
    protected write(level: number, output: any): void;
    clear(): void;
    protected getTimeStamp(): number;
    protected getTimer(): number;
    destroy(): void;
}
