import { Server, Socket } from "socket.io"
import { ClientRepository } from "./repository"
import { CalculateSumUseCase } from "./CalculateSumUseCase"
import { TotalSumSenderAdapter } from "./TotalSumSenderAdapter"

export const calculateSumEvent = (server: Server, socket: Socket) => {
    const repo = new ClientRepository()
    const totalSumSender = new TotalSumSenderAdapter(server, socket, repo)
    const useCase = new CalculateSumUseCase(totalSumSender, repo)
    socket.on("sum", ({ number }: { number: number }) => useCase.calculate({ clientId: socket.id, number }))
}