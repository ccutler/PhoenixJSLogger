
export class LogMessage {
    public level: number;
    public category: any;
    public message: any;

    constructor(level: number, category: any, message: any) {
        this.level = level;
        this.category = category;
        this.message = message;
    }

    public destroy(): void {
        this.category = null;
        this.message = null;
    }
}
