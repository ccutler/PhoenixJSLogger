import { ILogTarget } from "../ILogTarget";
import { LogMessage } from "../LogMessage";
export declare class NodeConsoleTarget implements ILogTarget {
    private static COLOR_TRACE;
    private static COLOR_DEBUG;
    private static COLOR_LOG;
    private static COLOR_INFO;
    private static COLOR_PRINT;
    private static COLOR_NOTICE;
    private static COLOR_WARN;
    private static COLOR_CRITICAL;
    private static COLOR_ERROR;
    private static COLOR_FATAL;
    private static COLOR_COMMAND;
    filters: string[];
    level: number;
    private startTime;
    private timeStampOffset;
    constructor(level?: number, filters?: string[]);
    output(logMessage: LogMessage): void;
    private getColor(level);
    clear(): void;
    private getTimeStamp();
    private getTimer();
    destroy(): void;
}
