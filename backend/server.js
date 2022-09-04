import express from "express"
import dotenv from "dotenv"
import { db } from "./config/db.js"
import vedioPostRoute from "./routes/vedioPostRoute.js"
import path from "path"
import { fileURLToPath } from "url"
dotenv.config()
const app = express()
app.use(express.json())
const __filename = fileURLToPath(import.meta.url)

const __dirname = path.resolve()

app.use("/public", express.static(path.join(__dirname, "public")))
console.log(__dirname)
db(process.env.DB_URL)
app.use("/api/v1/media", vedioPostRoute)
app.listen(process.env.PORT, () => {
  console.log(`server running ${process.env.PORT}`)
})
