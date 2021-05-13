import { UTCTime } from "../models/UTCTime";

class WorldClockService {
    async utcTime(): Promise<UTCTime> {
        return {
            currentDateTime: new Date().toISOString()
        }
    }
}

export { WorldClockService }