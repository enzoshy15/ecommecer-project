import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import db from "./database/mongoConfig.js"

const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())
db.connect()

import userRouter from "./routes/userRoutes.js"
app.use("/usuario", userRouter)

import catRouter from "./routes/catRouter.js"
app.use("/categoria", catRouter)
 
export default app
