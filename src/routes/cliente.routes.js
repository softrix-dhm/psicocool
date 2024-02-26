import { Router } from "express";
import { Cliente, CtrlInsCliente, CtrlUpdCliente, CtrlDelCliente } from "../controllers/cliente.controller.js";


const router = Router()

router.get("/listado", Cliente)
router.post("/nuevo", CtrlInsCliente)
router.post("/editar", CtrlUpdCliente)
router.post("/eliminar", CtrlDelCliente)

export default router