import { Router } from "express";
import { register,login } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();
router.get("/test", (req, res) => {
  res.send("auth route working");
});
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "JWT verified successfully" });
});
router.post("/register", register);
router.post("/login", login);


export default router;
