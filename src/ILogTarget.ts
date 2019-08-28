import { LogMessage } from "./LogMessage";
import { LogLevel } from "./LogLevel";

export interface ILogTarget {
    filters: string[];
    level: LogLevel;

    output(logMessage: LogMessage): void;
    clear(): void;

    destroy(): void;
}
