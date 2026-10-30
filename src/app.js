import express, { urlencoded } from "express"
import cors from "cors"
import cookieparser from "cookie-parser"

const app = express()
app.use(cors({
  origin :process.env.CORS_ORIGIN,
  credentials:true
}))

app.use(express.json({limit:"10kb"}))
app.use(urlencoded({extended:true , limit:"10kb"}))
app.use(express.static("public"))

export { app }