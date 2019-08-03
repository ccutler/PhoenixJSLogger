import { ILogTarget, LogMessage } from "../";
import { ConsoleTarget } from "./ConsoleTarget";
export declare class BrowserConsoleTarget extends ConsoleTarget implements ILogTarget {
    private static THEME;
    constructor(theme?: "light" | "dark", level?: number, filters?: string[]);
    output(logMessage: LogMessage): void;
    private getColor;
}
