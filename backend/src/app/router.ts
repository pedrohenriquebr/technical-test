import express, { Router } from "express";
import {TestController} from "./controllers/TestController";
import {WorldClockController} from "./controllers/WorldClockController";

const router: Router = express.Router();

const testController = new TestController();
const worldclockController = new WorldClockController();

router.get('/test', testController.test);
router.get('/json/utc/now', worldclockController.utcTime);

export { router }