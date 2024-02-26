import { Router } from "express"
import {
    TestConn
} from '../controllers/connection.controller.js'

const router = Router()

router.post("/Conn", TestConn)

export default router