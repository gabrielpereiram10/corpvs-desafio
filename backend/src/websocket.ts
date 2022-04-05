import { Server } from "socket.io"
import { calculateSumEvent } from "./calculateSumEvent"


/**
 * 
 * @param server Http server
 */
export const createWebSocketServer = (server: any) => {
    const io = new Server(server)
    io.on("connection", socket => {
        calculateSumEvent(io, socket)
    })
}
