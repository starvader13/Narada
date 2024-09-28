import express, { Request, Response, NextFunction } from "express";
import StatusCodes from "./enums/StatusCodes";
import mainRouter from "./router/mainRouter";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use("/api/v1", mainRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg: "Internal Server Error",
    route: req.path,
    error: "Route not defined",
  });
});
