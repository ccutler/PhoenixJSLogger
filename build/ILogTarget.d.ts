import { LogMessage } from "./LogMessage";
export interface ILogTarget {
    filters: string[];
    level: number;
    output(logMessage: LogMessage): void;
    clear(): void;
    destroy(): void;
}
