import express from "express";
import db from "./db/db.js";
import FilmeRouter from "./router/FilmesRouter.js"
import cors from "cors";

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());
server.use(FilmeRouter);

db.sync().then(()=>{
    server.listen(port, ()=>{
        console.log(`Server listen on port: ${port}`);
    });
});