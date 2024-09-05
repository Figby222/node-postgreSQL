import { Router } from "express";
import indexController from "../controllers/indexController.mjs";

const indexRouter = Router();

indexRouter.get("/", indexController.usersListGet);

export default indexRouter;