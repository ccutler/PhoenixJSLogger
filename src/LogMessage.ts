import { LogLevel } from "./LogLevel";

export class LogMessage {
    public level: LogLevel;
    public category: string;
    public message: any;

    constructor(level: LogLevel, category: string, message: any) {
        this.level = level;
        this.category = category;
        this.message = message;
    }

    public destroy(): void {
        this.category = null;
        this.message = null;
    }
}
