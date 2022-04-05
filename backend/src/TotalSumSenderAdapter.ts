import { Server, Socket } from "socket.io";
import { ClientData, IClientRepository, TotalSumSender } from "./ports";

export class TotalSumSenderAdapter implements TotalSumSender {
    constructor (private readonly server: Server, private readonly socket: Socket, private readonly repo: IClientRepository) {}

    send(client: ClientData): void {
        this.server.to(client.clientId).emit("total-sum", { totalSum: client.totalSum })
        this.repo.delete(client.clientId)
        console.log(`The total sum of client with id ${client.clientId} is ${client.totalSum}.`)
        this.socket.disconnect()
    }
}