import express from "express"
import http from "http"
import { createWebSocketServer } from "./websocket"
import cors from "cors"

export const createApp = () => {
    const app = express()
    app.use(cors)
    const server = http.createServer(app)
    createWebSocketServer(server)
    server.listen(3333, () => console.log("Server is runnig on PORT 3333"))
}