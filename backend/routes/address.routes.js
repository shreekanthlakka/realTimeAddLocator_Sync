import express from "express";
import { forwardGeoCoadingHandler } from "../controllers/address.controller.js";
const router = express.Router();

router.route("/").get(forwardGeoCoadingHandler);

export default router;
