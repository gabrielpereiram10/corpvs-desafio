import { Data, IClientRepository, TotalSumSender } from "./ports"

export class CalculateSumUseCase {
    constructor(private readonly totalSumSender: TotalSumSender, private readonly repo: IClientRepository) { }

    calculate({ clientId, number }: Data) {
        let client = this.repo.find(clientId)
        if (client) {
            client.totalSum += number
        } else {
            client = {
                clientId: clientId,
                totalSum: number
            }

            this.repo.create(client)
        }

        if (number === 0) {
            this.totalSumSender.send(client)
        }

        console.log(this.repo.findAll())
    }
}