export declare class LogMessage {
    level: number;
    category: string;
    message: any;
    constructor(level: number, category: string, message: any);
    destroy(): void;
}
