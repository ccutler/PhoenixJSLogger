import { ILogger } from "./ILogger";
export declare class Logger implements ILogger {
    private category;
    constructor(category: string);
    clear(): void;
    trace(...args: any[]): void;
    debug(...args: any[]): void;
    log(...args: any[]): void;
    print(...args: any[]): void;
    info(...args: any[]): void;
    notice(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    critical(...args: any[]): void;
    fatal(...args: any[]): void;
    mark(...args: any[]): void;
    command(...args: any[]): void;
    assert(condition: boolean, ...args: any[]): void;
    private getName;
}
