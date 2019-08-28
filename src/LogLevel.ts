export const enum LogLevel {
    MARK = -1,
    ALL = 0,
    TRACE = 1,
    DEBUG = 2,
    LOG = 3,
    PRINT = 4,
    INFO = 5,
    NOTICE = 6,
    WARN = 7,
    ERROR = 8,
    CRITICAL = 9,
    FATAL = 10,
    ASSERT = 99,
    COMMAND = 100,
}

export type LogLevelType = "TRACE" | "DEBUG" | "LOG" | "PRINT" | "INFO" | "NOTICE" | "WARN" | "ERROR" | "CRITICAL" | "FATAL" | "ASSERT" | "MARK";

export function toType(level: LogLevel): LogLevelType {
    switch (level) {
        default:
        case LogLevel.TRACE:
            return "TRACE";

        case LogLevel.DEBUG:
            return "DEBUG";

        case LogLevel.LOG:
            return "LOG";

        case LogLevel.PRINT:
            return "PRINT";

        case LogLevel.INFO:
            return "INFO";

        case LogLevel.NOTICE:
            return "NOTICE";

        case LogLevel.WARN:
            return "WARN";

        case LogLevel.ERROR:
            return "ERROR";

        case LogLevel.CRITICAL:
            return "CRITICAL";

        case LogLevel.FATAL:
            return "FATAL";

        case LogLevel.ASSERT:
            return "ASSERT";

        case LogLevel.MARK:
            return "MARK";
    }
}

export function toLevel(level: LogLevelType): LogLevel {
    switch (level) {
        default:
        case "TRACE":
            return LogLevel.TRACE;

        case "DEBUG":
            return LogLevel.DEBUG;

        case "LOG":
            return LogLevel.LOG;

        case "PRINT":
            return LogLevel.PRINT;

        case "INFO":
            return LogLevel.INFO;

        case "NOTICE":
            return LogLevel.NOTICE;

        case "WARN":
            return LogLevel.WARN;

        case "ERROR":
            return LogLevel.ERROR;

        case "CRITICAL":
            return LogLevel.CRITICAL;

        case "FATAL":
            return LogLevel.FATAL;

        case "ASSERT":
            return LogLevel.ASSERT;

        case "MARK":
            return LogLevel.MARK;
    }
}
