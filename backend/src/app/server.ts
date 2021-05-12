import express, { Application } from "express";
import { router } from "./router";

const app: Application = express();

app.use(express.json());
app.use('/api',router);

export { app }