import { ConsoleTarget } from "./ConsoleTarget";
import { ILogTarget } from "../ILogTarget";
import { LogMessage } from "../LogMessage";
export declare class NodeConsoleTarget extends ConsoleTarget implements ILogTarget {
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
    private static COLOR_ASSERT;
    private static COLOR_COMMAND;
    private static COLOR_RESET;
    output(logMessage: LogMessage): void;
    private getColor;
}
