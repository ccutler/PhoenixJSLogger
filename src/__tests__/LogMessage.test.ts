import { Log, LogMessage } from "../";

const NAME: string = "LogMessageTest";
const MESSAGE: string = "LogMessage";

describe("LogMessage Tests", () => {
    const logMessage: LogMessage = new LogMessage(Log.ALL, NAME, MESSAGE);

    test("LogMessage.level equals 'Log.ALL'", () => {
        expect(logMessage.level).toBe(Log.ALL);
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
