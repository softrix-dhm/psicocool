import { Router } from "express"
import { ListarTrabEmpresas } from '../controllers/nomina.controller.js'

const router = Router()

router.post("/TrabajadorEmpresa", ListarTrabEmpresas)

export default router