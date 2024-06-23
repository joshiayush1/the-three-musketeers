import express from "express";
import {
  getModels,
  lastUpdatedModel,
  getAllModels
} from "../controllers/model.controller.js";

const router = express.Router();

router.post("/model", getModels);
router.get("/lastUpdatedModel", lastUpdatedModel);
router.post("/allmodels", getAllModels);

export default router;
