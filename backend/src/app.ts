import express from "express";
import { router } from "./routes";

const app = express();
app.use(express.json()); // Enable JSON request body parsing
app.use(router); // Register application routes

export { app };
