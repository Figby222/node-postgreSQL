import { Router } from "express";
import * as indexController from "../controllers/indexController.mjs";

const indexRouter = Router();

indexRouter.get("/", indexController.usersListGet);

indexRouter.post("/", indexController.deleteUsersPost);

export default indexRouter;