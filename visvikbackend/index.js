import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";

import connectToDatabase from "./config/db.js";
import authRouter from "./Route/auth.js";
import teamMemberRouter from "./Route/teamMemberRoute.js";
import companyJobRouter from "./Route/companyJob.js";
import applyRouter from "./Route/applyRouter.js";
import queryRouter from "./Route/queryRoute.js";
import getInTouchRouter from "./Route/getInTouchRoute.js";
import mailRouter from "./Route/mailRoutes.js";
import { seedAdmin } from "./userSeed.js";

const app = express();

// ✅ CORS allow frontend domain
app.use(cors({
  origin: "https://visvik.in",
  credentials: true
}));

// ✅ Body parser
app.use(express.json());

// ✅ Static files (uploads folder)
app.use(express.static("public/uploads"));

// ✅ Logger
app.use(morgan("dev"));

// ✅ Routes
app.use("/v1/auth", authRouter);
app.use("/v1/team", teamMemberRouter);
app.use("/v1/jobs", companyJobRouter);
app.use("/v1/applications", applyRouter);
app.use("/v1/queries", queryRouter);
app.use("/v1/get-in-touch", getInTouchRouter);
app.use("/v1/mail", mailRouter);

// ✅ Test route (root)
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// ✅ Start server
const startServer = async () => {
  try {
    await connectToDatabase();
    await seedAdmin();
    console.log("✅ Database connected and admin seeded");

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Backend running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
