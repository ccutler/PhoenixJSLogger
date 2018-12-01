import { ILogger, Log, LogMessage } from "../src/";

const NAME: string = "LoggerTest";

describe("Logger Tests", () => {
    const logger: ILogger = Log.getLogger(NAME);

    test(`Logger.category equals '${NAME}'`, () => {
        expect(logger.category).toBe(NAME);
    });

    test("Logger.level equals 'TRACE'", () => {
        const logMessage: LogMessage = logger.trace("Trace");
        expect(logMessage.level).toBe(Log.TRACE);
    });

    test("Logger.level equals 'DEBUG'", () => {
        const logMessage: LogMessage = logger.debug("Debug");
        expect(logMessage.level).toBe(Log.DEBUG);
    });

    test("Logger.level equals 'LOG'", () => {
        const logMessage: LogMessage = logger.log("Log");
        expect(logMessage.level).toBe(Log.LOG);
    });

    test("Logger.level equals 'PRINT'", () => {
        const logMessage: LogMessage = logger.print("Print");
        expect(logMessage.level).toBe(Log.PRINT);
    });

    test("Logger.level equals 'INFO'", () => {
        const logMessage: LogMessage = logger.info("Info");
        expect(logMessage.level).toBe(Log.INFO);
    });

    test("Logger.level equals 'NOTICE'", () => {
        const logMessage: LogMessage = logger.notice("Notice");
        expect(logMessage.level).toBe(Log.NOTICE);
    });

    test("Logger.level equals 'WARN'", () => {
        const logMessage: LogMessage = logger.warn("Warn");
        expect(logMessage.level).toBe(Log.WARN);
    });

    test("Logger.level equals 'ERROR'", () => {
        const logMessage: LogMessage = logger.error("Error");
        expect(logMessage.level).toBe(Log.ERROR);
    });

    test("Logger.level equals 'CRITICAL'", () => {
        const logMessage: LogMessage = logger.critical("Critical");
        expect(logMessage.level).toBe(Log.CRITICAL);
    });

    test("Logger.level equals 'FATAL'", () => {
        const logMessage: LogMessage = logger.fatal("Fatal");
        expect(logMessage.level).toBe(Log.FATAL);
    });

    test("Logger.level equals 'MARK'", () => {
        const logMessage: LogMessage = logger.mark("Mark");
        expect(logMessage.level).toBe(Log.MARK);
    });

    test("Logger.level equals 'COMMAND'", () => {
        const logMessage: LogMessage = logger.command("Command");
        expect(logMessage.level).toBe(Log.COMMAND);
    });

    test("Logger.level equals 'ASSERT'", () => {
        const logMessage: LogMessage = logger.assert(false, "Assert");
        expect(logMessage.level).toBe(Log.ASSERT);
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
