import { Router } from "express";
import {
  addSweet,
  getSweets,
  searchSweets,
  purchaseSweet,
  restockSweet,
  deleteSweet,
  updateSweet
} from "../controllers/sweet.controller";

import { adminMiddleware } from "../middleware/admin.middleware";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authMiddleware, addSweet);
router.get("/", authMiddleware, getSweets);
router.get("/search", authMiddleware, searchSweets);
router.post("/:id/purchase", authMiddleware, purchaseSweet);
router.post("/:id/restock", authMiddleware, adminMiddleware, restockSweet);
router.delete("/:id", authMiddleware, adminMiddleware, deleteSweet);
router.put("/:id", authMiddleware, updateSweet);


export default router;
