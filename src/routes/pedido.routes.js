import { Router } from "express"
import { FormaPagoCtrl, LocalCtrl, PedidosInsCtrl,PedidosSelCtrl,PedidosDelCtrl, TipoComprobanteCtrl } from '../controllers/pedido.controller.js'

const router = Router()

router.post("/nuevo", PedidosInsCtrl)
router.post("/listado", PedidosSelCtrl)
router.post("/eliminado", PedidosDelCtrl)
router.get("/tipo-comprobante", TipoComprobanteCtrl)
router.get("/forma-pago", FormaPagoCtrl)
router.get("/local", LocalCtrl)

export default router