import express from 'express'
import cors from 'cors'
import { connectDB } from './config'
import setupRoutes from './routes'
import path from 'path'

require('dotenv').config()

const app = express()

const port = process.env.PORT || 4000
const url_server = process.env.url_server
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3001'],
    credentials: true
  })
)
app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use('/img', express.static(path.join(__dirname, 'publics/img')))

connectDB()
setupRoutes(app)

app.listen(port, () => {
  console.log(`Server is listening at ${url_server}${port}`)
})
