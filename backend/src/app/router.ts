import express, { Router } from "express";
import {TestController} from "./controllers/TestController";

const router: Router = express.Router();

const testController = new TestController();

router.get('/test', testController.test);

export { router }