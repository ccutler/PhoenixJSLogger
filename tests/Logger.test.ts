import { ILogger, Log, LogLevel, LogMessage } from "../src/";

const NAME: string = "LoggerTest";

describe("Logger Tests", () => {
    const logger: ILogger = Log.getLogger(NAME);

    test(`Logger.category equals '${NAME}'`, () => {
        expect(logger.category).toBe(NAME);
    });

    test("Logger.level equals 'TRACE'", () => {
        const logMessage: LogMessage = logger.trace("Trace");
        expect(logMessage.level).toBe(LogLevel.TRACE);
    });

    test("Logger.level equals 'DEBUG'", () => {
        const logMessage: LogMessage = logger.debug("Debug");
        expect(logMessage.level).toBe(LogLevel.DEBUG);
    });

    test("Logger.level equals 'LOG'", () => {
        const logMessage: LogMessage = logger.log("Log");
        expect(logMessage.level).toBe(LogLevel.LOG);
    });

    test("Logger.level equals 'PRINT'", () => {
        const logMessage: LogMessage = logger.print("Print");
        expect(logMessage.level).toBe(LogLevel.PRINT);
    });

    test("Logger.level equals 'INFO'", () => {
        const logMessage: LogMessage = logger.info("Info");
        expect(logMessage.level).toBe(LogLevel.INFO);
    });

    test("Logger.level equals 'NOTICE'", () => {
        const logMessage: LogMessage = logger.notice("Notice");
        expect(logMessage.level).toBe(LogLevel.NOTICE);
    });

    test("Logger.level equals 'WARN'", () => {
        const logMessage: LogMessage = logger.warn("Warn");
        expect(logMessage.level).toBe(LogLevel.WARN);
    });

    test("Logger.level equals 'ERROR'", () => {
        const logMessage: LogMessage = logger.error("Error");
        expect(logMessage.level).toBe(LogLevel.ERROR);
    });

    test("Logger.level equals 'CRITICAL'", () => {
        const logMessage: LogMessage = logger.critical("Critical");
        expect(logMessage.level).toBe(LogLevel.CRITICAL);
    });

    test("Logger.level equals 'FATAL'", () => {
        const logMessage: LogMessage = logger.fatal("Fatal");
        expect(logMessage.level).toBe(LogLevel.FATAL);
    });

    test("Logger.level equals 'MARK'", () => {
        const logMessage: LogMessage = logger.mark("Mark");
        expect(logMessage.level).toBe(LogLevel.MARK);
    });

    test("Logger.level equals 'COMMAND'", () => {
        const logMessage: LogMessage = logger.command("Command");
        expect(logMessage.level).toBe(LogLevel.COMMAND);
    });

    test("Logger.level equals 'ASSERT'", () => {
        const logMessage: LogMessage = logger.assert(false, "Assert");
        expect(logMessage.level).toBe(LogLevel.ASSERT);
    });

    test("Logger.assert should output", () => {
        const logMessage: LogMessage = logger.assert(false, "Assert");
        expect(logMessage).not.toBeNull();
    });

    test("Logger.assert should not output", () => {
        const logMessage: LogMessage = logger.assert(true, "Assert");
        expect(logMessage).toBeNull();
    });

    test("Logger should be cleared", () => {
        const mock = jest.spyOn(Log, "clear");
        logger.clear();
        expect(mock).toHaveBeenCalled();
    });
});
