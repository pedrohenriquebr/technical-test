import express from "express";
import path from "path";
import { config } from "dotenv";
import { app as server } from "./app/server";
import { renderFile } from "ejs";

config();

const DEV = process.env['SERVER_DEV'] || false;
const PORT = DEV ? 3333 : 80;
if (!DEV) {
    server.engine('html', renderFile);
    server.use(express.static(path.join(__dirname,  '../../frontend/build')));
    server.get('/', (req, res) => {
        res.render('index.html');
    })
}

server.listen(PORT, () => console.log(`Listening on ${PORT} port`));