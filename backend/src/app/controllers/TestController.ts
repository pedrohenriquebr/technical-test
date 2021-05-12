import { Request, Response } from "express";
import { TestingService } from "../services/TestingService";

class TestController {
    async test(req: Request, res: Response) {
        const service = new TestingService();

        const result = await service.test();
        res.json(result);
    }
}

export { TestController }