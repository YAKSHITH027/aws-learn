import express from "express";
import {
  getProperties,
  getProperty,
  createProperty,
  deleteAllProperties,
} from "../controllers/propertyControllers";

import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", getProperties);
router.get("/:id", getProperty);
router.post("/", authMiddleware(["manager"]), createProperty);
router.get("/deleteall77", deleteAllProperties); // temp route to delete all properties for testing

export default router;
