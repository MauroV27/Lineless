import dotenv from 'dotenv';

import express from "express";
import { router } from "./Routes/routes.js";

dotenv.config()

const server = express();

server.use(express.json());
server.use(router);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Backend app running in port ${port}`)
});