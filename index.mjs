import express from "express";
const app = express();
import indexRouter from "./routers/indexRouter.mjs";
import newUserRouter from "./routers/newUserRouter.mjs";
import "dotenv/config";

app.use(express.urlencoded({ extended: true }));

app.use("/new", newUserRouter);
app.use("/", indexRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})