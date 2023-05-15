import express from 'express'
import bodyParser from "body-parser"
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'

import clientRoutes from "./routes/client"
import generalRoutes from "./routes/general"
import managementRoutes from "./routes/management"
import salesRoutes from "./routes/sales"

dotenv.config();
const app=express();

app.use(express.json())
app.use(helmet())
//if we need to make API calls to a different server
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(cors())

app.use("/client",clientRoutes)
app.use("/general",generalRoutes)
app.use("/management",managementRoutes)
app.use("/sales",salesRoutes)









