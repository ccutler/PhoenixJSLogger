import { LogLevel, LogMessage } from "../src/";

const NAME: string = "LogMessageTest";
const MESSAGE: string = "LogMessageMessage";

describe("LogMessage Tests", () => {
    const logMessage: LogMessage = new LogMessage(LogLevel.ALL, NAME, MESSAGE);

    test("LogMessage.level equals 'Log.ALL'", () => {
        expect(logMessage.level).toBe(LogLevel.ALL);
    });

    test(`LogMessage.category equals '${NAME}'`, () => {
        expect(logMessage.category).toBe(NAME);
    });

    test(`LogMessage.message equals '${MESSAGE}'`, () => {
        expect(logMessage.message).toBe(MESSAGE);
    });

    test("LogMessage.destroy nulls values", () => {
        logMessage.destroy();
        expect(logMessage.category).toBeNull();
        expect(logMessage.message).toBeNull();
    });
});
