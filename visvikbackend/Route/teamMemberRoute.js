import express from "express";
import upload from "../middleware/upload.js";
import {
  addTeamMember,
  deleteTeamMember,
  getAllTeamMembers,
  getTeamMemberById,
  updateTeamMember,
} from "../controller/teamMemberController.js";
import verifyUser from "../middleware/authMiddleware.js";

const teamMemberRouter = express.Router();

teamMemberRouter.post("/", verifyUser, upload.single("image"), addTeamMember);
teamMemberRouter.get("/", getAllTeamMembers);
teamMemberRouter.get("/:id", verifyUser, getTeamMemberById);
teamMemberRouter.put(
  "/:id",
  verifyUser,
  upload.single("image"),
  updateTeamMember
);
teamMemberRouter.delete("/:id", verifyUser, deleteTeamMember);

export default teamMemberRouter;
