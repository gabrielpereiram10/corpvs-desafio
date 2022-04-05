import express from "express"
import http from "http"
import { createWebSocketServer } from "./websocket"

export const createApp = () => {
    const app = express()
    const server = http.createServer(app)
    createWebSocketServer(server)
    server.listen(3000, () => console.log("Server is runnig on PORT 3000"))
}