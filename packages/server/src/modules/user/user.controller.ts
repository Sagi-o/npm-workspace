import { Router, Request, Response } from "express";
import userService from "./user.service";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  const data = await userService.getAllUsers();
  res.json(data);
});
// router.post("/", createUser);
// router.get("/:id", authenticate, getUserById);
// router.put("/:id", authenticate, updateUser);
// router.delete("/:id", authenticate, deleteUser);

export default router;
