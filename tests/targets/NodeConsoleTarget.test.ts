import { ILogger, Log, LogMessage } from "../../src/";
import { NodeConsoleTarget } from "../../src/targets/";

const NAME: string = "NodeConsoleTargetTest";
const MESSAGE: string = "NodeConsoleTargetMessage";

describe("NodeConsoleTarget Tests", () => {
    const logger: ILogger = Log.getLogger(NAME);

    afterEach(() => {
        if (Log.targets) { Log.removeAllTargets(); }
    });

    test("NodeConsoleTarget.level should be Log.ALL", () => {
        const target: NodeConsoleTarget = new NodeConsoleTarget(Log.ALL);
        expect(target.level).toBe(Log.ALL);
    });

    test(`NodeConsoleTarget.filters should contain '${NAME}'`, () => {
        const target: NodeConsoleTarget = new NodeConsoleTarget(Log.ALL, [NAME]);
        expect(target.filters).toContain(NAME);
    });

    test("NodeConsoleTarget.canOutput should be true for LogLevel", () => {
        const target: NodeConsoleTarget = new NodeConsoleTarget(Log.LOG);
        const logMessage: LogMessage = new LogMessage(Log.NOTICE, NAME, MESSAGE);
        expect(target.canOutput(logMessage)).toBeTruthy();
    });

    test("NodeConsoleTarget.canOutput should be false for LogLevel", () => {
        const target: NodeConsoleTarget = new NodeConsoleTarget(Log.NOTICE);
        const logMessage: LogMessage = new LogMessage(Log.LOG, NAME, MESSAGE);
        expect(target.canOutput(logMessage)).toBeFalsy();
    });

    test("NodeConsoleTarget.canOutput should be true for LogFilter", () => {
        const target: NodeConsoleTarget = new NodeConsoleTarget(Log.ALL, [NAME]);
        const logMessage: LogMessage = new LogMessage(Log.LOG, NAME, MESSAGE);
        expect(target.canOutput(logMessage)).toBeTruthy();
    });

    test("NodeConsoleTarget.canOutput should be false for LogFilter", () => {
        const target: NodeConsoleTarget = new NodeConsoleTarget(Log.ALL, [NAME]);
        const logMessage: LogMessage = new LogMessage(Log.LOG, null, MESSAGE);
        expect(target.canOutput(logMessage)).toBeFalsy();
    });

    test("NodeConsoleTarget.output should output string", () => {
        const target: NodeConsoleTarget = new NodeConsoleTarget();
        const mock = jest.spyOn(target, "output");
        Log.addTarget(target);
        logger.log(MESSAGE);
        expect(mock).toHaveBeenCalled();
    });

    test("NodeConsoleTarget.output should output object", () => {
        const target: NodeConsoleTarget = new NodeConsoleTarget();
        const mock = jest.spyOn(target, "output");
        Log.addTarget(target);
        logger.log({ test: "this" });
        expect(mock).toHaveBeenCalled();
    });

    test("NodeConsoleTarget.output should not output", () => {
        const target: NodeConsoleTarget = new NodeConsoleTarget(Log.LOG);
        const mock = jest.spyOn(target, "output");
        Log.addTarget(target);
        logger.debug(MESSAGE);
        expect(mock).toHaveBeenCalled();
    });

    test("NodeConsoleTarget.clear should clear", () => {
        const target: NodeConsoleTarget = new NodeConsoleTarget();
        const mock = jest.spyOn(target, "clear");
        Log.addTarget(target);
        logger.clear();
        expect(mock).toHaveBeenCalled();
    });

    test("NodeConsoleTarget.destroy nulls values", () => {
        const target: NodeConsoleTarget = new NodeConsoleTarget();
        target.destroy();
        expect(target.filters).toBeNull();
    });
});
