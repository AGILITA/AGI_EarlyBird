import { AppService } from "./app.service";
export declare class UITest {
    private readonly appService;
    constructor(appService: AppService);
    getTest(): String;
    render(): {
        message: string;
    };
}
