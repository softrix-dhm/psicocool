import express from 'express'
import multer from 'multer'
import path from 'path'
import morgan from "morgan"
import cors from 'cors'

const app = express()
app.use(cors())

// Middlewares
app.use(morgan("dev"))
app.use(express.json())

import connectionRoutes from './routes/connection.routes.js'
import loginRoutes from './routes/login.routes.js'
import paramRoutes from './routes/parametros.routes.js'
import cuestionarioRoutes from './routes/cuestionarios.routes.js'

app.use("/api/connection", connectionRoutes)
app.use("/api/login", loginRoutes)
app.use("/api/parametros", paramRoutes)
app.use("/api/cuestionarios", cuestionarioRoutes)

export default app