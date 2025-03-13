import express from "express";
import { router } from "./routes";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();
app.use(express.json()); // Enable JSON request body parsing
app.use(router); // Register application routes
app.use(errorMiddleware); // Middleware to handle errors

export { app };
