import { ILogTarget, Logger, Log, LogLevel, LogMessage } from "../src/";
import { ConsoleTarget, NodeConsoleTarget, BrowserConsoleTarget } from "../src/targets/";

const NAME: string = "LogTest";
const MESSAGE: string = "LogTestMessage";

describe("Log Tests", () => {
    afterEach(() => {
        if (Log.targets) { Log.removeAllTargets(); }
    });

    afterAll(() => {
        Log.targets = [];
    });

    test("Log.getLogger returns ILogger", () => {
        expect(Log.getLogger(NAME)).toBeInstanceOf(Logger);
    });

    test("Log.getLogger restores targets when null", () => {
        Log.targets = null;
        Log.getLogger(NAME);
        expect(Log.targets).not.toBeNull();
    });

    test("Log.log returns LogMessage", () => {
        const target: ILogTarget = new MockTarget();
        Log.addTarget(target);
        expect(Log.log(new LogMessage(LogLevel.ALL, NAME, MESSAGE))).toBeInstanceOf(LogMessage);
    });

    test("Log.clear clears logs", () => {
        const target: ILogTarget = new MockTarget();
        const mock = jest.spyOn(target, "clear");
        Log.addTarget(target);
        Log.clear();
        expect(mock).toHaveBeenCalled();
    });

    test("Log.addTarget adds LogTarget", () => {
        const target: ILogTarget = new MockTarget();
        Log.addTarget(target);
        expect(Log.targets).toContain(target);
    });

    test("Log.addTarget does not add duplicate LogTarget", () => {
        const target: ILogTarget = new MockTarget();
        Log.addTarget(target);
        Log.addTarget(target);
        expect(Log.targets).toHaveLength(1);
    });

    test("Log.removeTarget removes LogTarget", () => {
        const target: ILogTarget = new MockTarget();
        Log.addTarget(target);
        Log.removeTarget(target);
        expect(Log.targets).not.toContain(target);
    });

    test("Log.removeAllTargets removes all LogTargets", () => {
        const target: ILogTarget = new MockTarget();
        Log.addTarget(target);
        Log.removeAllTargets();
        expect(Log.targets).not.toContain(target);
        expect(Log.targets).toHaveLength(0);
    });

    test("Log.getTargetByType returns correct LogTarget", () => {
        const target: ILogTarget = new MockTarget();
        Log.addTarget(target);
        expect(Log.getTargetByType(MockTarget)).toBe(target);
        expect(Log.getTargetByType(ConsoleTarget)).toBeUndefined();
        expect(Log.getTargetByType(NodeConsoleTarget)).toBeUndefined();
        expect(Log.getTargetByType(BrowserConsoleTarget)).toBeUndefined();
    });

    test("Log.setLevel sets correct LogLevel on LogTargets", () => {
        const target: ILogTarget = new MockTarget();
        Log.addTarget(target);
        Log.setLevel(LogLevel.PRINT);
        expect(target.level).toBe(LogLevel.PRINT);
    });

    test("Log.setFilters sets correct filter on LogTargets", () => {
        const target: ILogTarget = new MockTarget();
        Log.addTarget(target);
        Log.setFilters([NAME]);
        expect(target.filters).toContain(NAME);
    });

    test("Log.formatCategory returns formatted category", () => {
        expect(Log.formatCategory(NAME)).toBe(`[${NAME}]`);
    });

    test("Log.resolveLevelName returns correct name", () => {
        expect(Log.resolveLevelName(-1234)).toBe("|   ALL| ");
        expect(Log.resolveLevelName(LogLevel.ALL)).toBe("|   ALL| ");
        expect(Log.resolveLevelName(LogLevel.TRACE)).toBe("| TRACE| ");
        expect(Log.resolveLevelName(LogLevel.DEBUG)).toBe("| DEBUG| ");
        expect(Log.resolveLevelName(LogLevel.LOG)).toBe("|   LOG| ");
        expect(Log.resolveLevelName(LogLevel.PRINT)).toBe("| PRINT| ");
        expect(Log.resolveLevelName(LogLevel.INFO)).toBe("|  INFO| ");
        expect(Log.resolveLevelName(LogLevel.NOTICE)).toBe("|NOTICE| ");
        expect(Log.resolveLevelName(LogLevel.WARN)).toBe("|  WARN| ");
        expect(Log.resolveLevelName(LogLevel.ERROR)).toBe("| ERROR| ");
        expect(Log.resolveLevelName(LogLevel.CRITICAL)).toBe("|  CRIT| ");
        expect(Log.resolveLevelName(LogLevel.FATAL)).toBe("| FATAL| ");
        expect(Log.resolveLevelName(LogLevel.COMMAND)).toBe("|   CMD| ");
        expect(Log.resolveLevelName(LogLevel.ASSERT)).toBe("|ASSERT| ");
    });

    test("Log.destroy removes all targets", () => {
        const target: ILogTarget = new MockTarget();
        Log.addTarget(target);
        Log.destroy();
        expect(Log.targets).toBeNull();
    });
});

export class MockTarget implements ILogTarget {
    public filters: string[];
    public level: number;

    public startTime: number;
    public timeStampOffset: number = 0;

    constructor(level: number = 0, filters: string[] = []) {
        this.startTime = new Date().getTime();

        this.level = level;
        this.filters = filters;
    }

    // tslint:disable-next-line:variable-name
    public output(_logMessage: LogMessage): void {
        //
    }

    public clear(): void {
        //
    }

    public destroy(): void {
        this.filters = null;
    }
}
