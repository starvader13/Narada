import { Router, Request, Response } from "express";
import StatusCodes from "../enums/StatusCodes";

const router = Router();

router.use("/*", (req: Request, res: Response) => {
  res.status(StatusCodes.SEE_OTHER).send(`<h1> Galat Jagah aa gaye bhai </h1>`);
});

export default router;
