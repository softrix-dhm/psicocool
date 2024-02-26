import { Router } from "express";
import { Grupo } from "../controllers/grupo.controller.js";


const router = Router()

router.get("/listado", Grupo)

export default router