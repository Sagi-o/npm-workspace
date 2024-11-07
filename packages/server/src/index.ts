import express from "express";
import userController from "./modules/user/user.controller";
import { getSharedFunc } from "@org/shared";

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use("/users", userController);

app.listen(PORT, () => {
  getSharedFunc()
  console.log(`Server is running on http://localhost:${PORT}`);
});
