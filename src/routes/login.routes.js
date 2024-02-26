import { Router } from "express";
import { Login } from "../controllers/login.controller.js"

const router = Router()

router.post("/acceso", Login)

export default router