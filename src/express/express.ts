import express, { Application, NextFunction, Request, Response } from "express";
import favicon from "serve-favicon";
import path from "path";
import logger from "morgan";
import dotenv from "dotenv";

const app: Application = express();

const __dirname = path.resolve();
dotenv.config();

// Get port from environment and store in Express.
const port = process.env.PORT || "4000";
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/graphql", (req: Request, res: Response, next: NextFunction) => {
  if (req.body.query) {
    console.log(req.body.query);
  }
  next();
});

export default app;
