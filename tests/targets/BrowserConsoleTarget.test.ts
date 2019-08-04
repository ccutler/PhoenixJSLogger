import { ILogger, Log, LogLevel, LogMessage } from "../../src/";
import { BrowserConsoleTarget } from "../../src/targets/";

const NAME: string = "BrowserConsoleTargetTest";
const MESSAGE: string = "BrowserConsoleTargetMessage";

describe("BrowserConsoleTarget Tests", () => {
    const logger: ILogger = Log.getLogger(NAME);

    afterEach(() => {
        if (Log.targets) { Log.removeAllTargets(); }
    });

    test("BrowserConsoleTarget.level should be Log.ALL", () => {
        const target: BrowserConsoleTarget = new BrowserConsoleTarget("dark", LogLevel.ALL);
        expect(target.level).toBe(LogLevel.ALL);
    });

    test(`BrowserConsoleTarget.filters should contain '${NAME}'`, () => {
        const target: BrowserConsoleTarget = new BrowserConsoleTarget("dark", LogLevel.ALL, [NAME]);
        expect(target.filters).toContain(NAME);
    });

    test("BrowserConsoleTarget.canOutput should be true for LogLevel", () => {
        const target: BrowserConsoleTarget = new BrowserConsoleTarget("dark", LogLevel.LOG);
        const logMessage: LogMessage = new LogMessage(LogLevel.NOTICE, NAME, MESSAGE);
        expect(target.canOutput(logMessage)).toBeTruthy();
    });

    test("BrowserConsoleTarget.canOutput should be false for LogLevel", () => {
        const target: BrowserConsoleTarget = new BrowserConsoleTarget("dark", LogLevel.NOTICE);
        const logMessage: LogMessage = new LogMessage(LogLevel.LOG, NAME, MESSAGE);
        expect(target.canOutput(logMessage)).toBeFalsy();
    });

    test("BrowserConsoleTarget.canOutput should be true for LogFilter", () => {
        const target: BrowserConsoleTarget = new BrowserConsoleTarget("dark", LogLevel.ALL, [NAME]);
        const logMessage: LogMessage = new LogMessage(LogLevel.LOG, NAME, MESSAGE);
        expect(target.canOutput(logMessage)).toBeTruthy();
    });

    test("BrowserConsoleTarget.canOutput should be false for LogFilter", () => {
        const target: BrowserConsoleTarget = new BrowserConsoleTarget("dark", LogLevel.ALL, [NAME]);
        const logMessage: LogMessage = new LogMessage(LogLevel.LOG, null, MESSAGE);
        expect(target.canOutput(logMessage)).toBeFalsy();
    });

    test("BrowserConsoleTarget.output should output string", () => {
        const target: BrowserConsoleTarget = new BrowserConsoleTarget();
        const mock = jest.spyOn(target, "output");
        Log.addTarget(target);
        logger.log(MESSAGE);
        expect(mock).toHaveBeenCalled();
    });

    test("BrowserConsoleTarget.output should output object", () => {
        const target: BrowserConsoleTarget = new BrowserConsoleTarget();
        const mock = jest.spyOn(target, "output");
        Log.addTarget(target);
        logger.log({ test: "this" });
        expect(mock).toHaveBeenCalled();
    });

    test("BrowserConsoleTarget.output should not output", () => {
        const target: BrowserConsoleTarget = new BrowserConsoleTarget("light", LogLevel.LOG);
        const mock = jest.spyOn(target, "output");
        Log.addTarget(target);
        logger.debug(MESSAGE);
        expect(mock).toHaveBeenCalled();
    });

    test("BrowserConsoleTarget.clear should clear", () => {
        const target: BrowserConsoleTarget = new BrowserConsoleTarget();
        const mock = jest.spyOn(target, "clear");
        Log.addTarget(target);
        logger.clear();
        expect(mock).toHaveBeenCalled();
    });

    test("BrowserConsoleTarget.destroy nulls values", () => {
        const target: BrowserConsoleTarget = new BrowserConsoleTarget();
        target.destroy();
        expect(target.filters).toBeNull();
    });
});
