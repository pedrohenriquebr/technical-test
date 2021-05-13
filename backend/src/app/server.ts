import express, { Application } from "express";
import cors  from "cors";
import { router } from "./router";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

export { app }