import { NextFunction, Request, Response } from "express";
import findRepositoryByUserAndRepo from "../../utils/findRepositoryByUserAndRepo";
import StatusCodes from "../../enums/StatusCodes";

const doesUserAndRepoExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const url = req.body.url;
  const repo = await findRepositoryByUserAndRepo(req.user.user_id, url);
  if (repo !== null) {
    res.status(StatusCodes.CONFLICT).json({
      msg: "Repo already exist for you",
      error: "Similar entry in the database",
    });
  }

  return next();
};
