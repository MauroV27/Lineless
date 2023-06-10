import express from "express";
import { router } from "./Routes/routes.js";

const server = express();

server.use(express.json());
server.use(router);

const port = 5000;

server.listen(port, () => {
  console.log(`Backend app running in port ${port}`)
});