import { Router } from "express";
import { Producto } from '../controllers/producto.controller.js'

const router = Router()

router.post("/listado", Producto)

export default router