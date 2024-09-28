import express, { Request, Response, NextFunction } from "express";
import StatusCodes from "./enums/StatusCodes";

const app = express();

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg: "Internal Server Error",
    route: req.path,
  });
});
