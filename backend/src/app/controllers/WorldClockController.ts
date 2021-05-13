import { Request, Response } from "express";
import { WorldClockService } from "../services/WorldClockService";
import { UTCTime } from "../models/UTCTime";
class WorldClockController {
    async utcTime(req: Request, res: Response) {
        const service = new WorldClockService();
        const result: UTCTime = await service.utcTime();
        res.json(result);
    }
}

export { WorldClockController }