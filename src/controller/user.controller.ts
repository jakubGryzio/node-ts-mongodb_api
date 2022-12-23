import { Request, Response } from "express";
import logger from "../utils/logger";
import { CreateUser } from "../service/user.service";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await CreateUser(req.body);
    return user;
  } catch (err: any) {
    logger.error(err);
    return res.status(409).send(err.message);
  }
}
