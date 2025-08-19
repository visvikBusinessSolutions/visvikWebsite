import express from "express";
import cors from "cors";
import dotenv from "dotenv"; // <-- use this
dotenv.config();
import morgan from "morgan";

import connectToDatabase from "./config/db.js";
import authRouter from "./Route/auth.js";
import { seedAdmin } from "./userSeed.js";
import teamMemberRouter from "./Route/teamMemberRoute.js";
import companyJobRouter from "./Route/companyJob.js";
import applyRouter from "./Route/applyRouter.js";
import queryRouter from "./Route/queryRoute.js";
import getInTouchRouter from "./Route/getInTouchRoute.js";
import mailRouter from "./Route/mailRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public/uploads"));
app.use(morgan());

const startServer = async () => {
  try {
    await connectToDatabase();
    await seedAdmin();
    console.log("✅ Admin seed check complete");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();

app.use("/v1/auth", authRouter);
// app.use("/v1/department", departmentRouter);
app.use("/v1/team", teamMemberRouter);
app.use("/v1/jobs", companyJobRouter);
app.use("/v1/applications", applyRouter);
app.use("/v1/queries", queryRouter);
app.use("/v1/get-in-touch", getInTouchRouter);
app.use("/v1/mail", mailRouter);
