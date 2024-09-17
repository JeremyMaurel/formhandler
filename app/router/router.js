import { Router } from "express";
import sendMail from "../sendmail.js";

const router = Router();

router.post("/form/submit", sendMail);

export default router;
