import { ILogTarget } from "../ILogTarget";
import { LogMessage } from "../LogMessage";
export declare class ConsoleTarget implements ILogTarget {
    filters: string[];
    level: number;
    protected startTime: number;
    protected timeStampOffset: number;
    constructor(level?: number, filters?: string[]);
    output(logMessage: LogMessage): void;
    protected canOutput(logMessage: LogMessage): boolean;
    protected write(level: number, output: any): void;
    clear(): void;
    protected getTimeStamp(): number;
    protected getTimer(): number;
    destroy(): void;
}
