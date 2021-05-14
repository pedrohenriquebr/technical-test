import api from "../core/api";

class WorldClockService {
  async getUTCTime() {
    const { data } = await api.get("/json/utc/now");
    return data.currentDateTime;
  }
}

export { WorldClockService };
