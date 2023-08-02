import { Router } from "express";
import { getStats } from "../controllers/stats.controller";

const router = Router();

router.get("/notes/stats", getStats);

export default router;
