import { LogMessage } from "./";

export interface ILogger {
    readonly category: string;

    clear(): void;
    trace(...args: any[]): LogMessage;
    debug(...args: any[]): LogMessage;
    log(...args: any[]): LogMessage;
    print(...args: any[]): LogMessage;
    info(...args: any[]): LogMessage;
    notice(...args: any[]): LogMessage;
    warn(...args: any[]): LogMessage;
    error(...args: any[]): LogMessage;
    critical(...args: any[]): LogMessage;
    fatal(...args: any[]): LogMessage;
    mark(...args: any[]): LogMessage;
    command(...args: any[]): LogMessage;
    assert(...args: any[]): LogMessage;
}
