import { ILogTarget, LogMessage } from "../";
import { ConsoleTarget } from "./ConsoleTarget";
export declare class BrowserConsoleTarget extends ConsoleTarget implements ILogTarget {
    private static readonly COLOR_TRACE;
    private static readonly COLOR_DEBUG;
    private static readonly COLOR_LOG;
    private static readonly COLOR_INFO;
    private static readonly COLOR_PRINT;
    private static readonly COLOR_NOTICE;
    private static readonly COLOR_WARN;
    private static readonly COLOR_CRITICAL;
    private static readonly COLOR_ERROR;
    private static readonly COLOR_FATAL;
    private static readonly COLOR_ASSERT;
    private static readonly COLOR_COMMAND;
    output(logMessage: LogMessage): void;
    private getColor;
}
