import { Router } from "express";
import * as newUserController from "../controllers/newUserController.mjs";

const newUserRouter = Router();

newUserRouter.get("/", newUserController.newUserFormGet);

newUserRouter.post("/", newUserController.newUserFormPost);

export default newUserRouter;