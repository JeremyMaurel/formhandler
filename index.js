import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./app/router/router.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5500" }));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(4836);
