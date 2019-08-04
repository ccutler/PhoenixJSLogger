import { ILogger, Log, LogLevel, LogMessage } from "../../src/";
import { ConsoleTarget } from "../../src/targets/";

const NAME: string = "ConsoleTargetTest";
const MESSAGE: string = "ConsoleTargetMessage";

describe("ConsoleTarget Tests", () => {
    const logger: ILogger = Log.getLogger(NAME);

    afterEach(() => {
        if (Log.targets) { Log.removeAllTargets(); }
    });

    test("ConsoleTarget.level should be Log.ALL", () => {
        const target: ConsoleTarget = new ConsoleTarget(LogLevel.ALL);
        expect(target.level).toBe(LogLevel.ALL);
    });

    test(`ConsoleTarget.filters should contain '${NAME}'`, () => {
        const target: ConsoleTarget = new ConsoleTarget(LogLevel.ALL, [NAME]);
        expect(target.filters).toContain(NAME);
    });

    test("ConsoleTarget.canOutput should be true for LogLevel", () => {
        const target: ConsoleTarget = new ConsoleTarget(LogLevel.LOG);
        const logMessage: LogMessage = new LogMessage(LogLevel.NOTICE, NAME, MESSAGE);
        expect(target.canOutput(logMessage)).toBeTruthy();
    });

    test("ConsoleTarget.canOutput should be false for LogLevel", () => {
        const target: ConsoleTarget = new ConsoleTarget(LogLevel.NOTICE);
        const logMessage: LogMessage = new LogMessage(LogLevel.LOG, NAME, MESSAGE);
        expect(target.canOutput(logMessage)).toBeFalsy();
    });

    test("ConsoleTarget.canOutput should be true for LogFilter", () => {
        const target: ConsoleTarget = new ConsoleTarget(LogLevel.ALL, [NAME]);
        const logMessage: LogMessage = new LogMessage(LogLevel.LOG, NAME, MESSAGE);
        expect(target.canOutput(logMessage)).toBeTruthy();
    });

    test("ConsoleTarget.canOutput should be false for LogFilter", () => {
        const target: ConsoleTarget = new ConsoleTarget(LogLevel.ALL, [NAME]);
        const logMessage: LogMessage = new LogMessage(LogLevel.LOG, null, MESSAGE);
        expect(target.canOutput(logMessage)).toBeFalsy();
    });

    test("ConsoleTarget.output should output string", () => {
        const target: ConsoleTarget = new ConsoleTarget();
        const mock = jest.spyOn(target, "output");
        Log.addTarget(target);
        logger.log(MESSAGE);
        expect(mock).toHaveBeenCalled();
    });

    test("ConsoleTarget.output should output object", () => {
        const target: ConsoleTarget = new ConsoleTarget();
        const mock = jest.spyOn(target, "output");
        Log.addTarget(target);
        logger.log({ test: "this" });
        expect(mock).toHaveBeenCalled();
    });

    test("ConsoleTarget.output should not output", () => {
        const target: ConsoleTarget = new ConsoleTarget(LogLevel.LOG);
        const mock = jest.spyOn(target as any, "write");
        Log.addTarget(target);
        logger.debug(MESSAGE);
        expect(mock).not.toHaveBeenCalled();
    });

    test("ConsoleTarget.clear should clear", () => {
        const target: ConsoleTarget = new ConsoleTarget();
        const mock = jest.spyOn(target, "clear");
        Log.addTarget(target);
        logger.clear();
        expect(mock).toHaveBeenCalled();
    });

    test("ConsoleTarget.destroy nulls values", () => {
        const target: ConsoleTarget = new ConsoleTarget();
        target.destroy();
        expect(target.filters).toBeNull();
    });
});
