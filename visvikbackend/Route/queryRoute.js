import express from "express";
import verifyUser from "../middleware/authMiddleware.js";
import {
  createQuery,
  deleteQuery,
  getQueries,
} from "../controller/queryController.js";

const queryRouter = express.Router();

queryRouter.get("/", verifyUser, getQueries);
queryRouter.post("/", createQuery);
queryRouter.delete("/:id", verifyUser, deleteQuery);

export default queryRouter;
