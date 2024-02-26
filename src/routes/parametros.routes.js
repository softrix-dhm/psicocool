import { Router } from "express";
import { NivelCtrl,GradoCtrl,SeccionCtrl,EstudiantesCtrl,CuestionarioCtrl } from '../controllers/parametros.controller.js'

const router = Router()

router.post("/listado-nivel", NivelCtrl)
router.post("/listado-grado", GradoCtrl)
router.post("/listado-seccion", SeccionCtrl)
router.post("/listado-estudiantes", EstudiantesCtrl)
router.post("/listado-cuestionario", CuestionarioCtrl)

export default router