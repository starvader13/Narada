import { Router } from "express";
import userRouter from "./userRouter";
import parserRouter from "./parserRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/parser", parserRouter);

export default router;
