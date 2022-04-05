import { ClientData, IClientRepository, } from "./ports";

export class ClientRepository implements IClientRepository {
    private clients: ClientData[] = []
    constructor() { }

    update(id: string, number: number): void {
        const findedClient = this.clients.find(clientItem => clientItem.clientId === id)
        if (findedClient) {
            findedClient.clientId = id
            findedClient.totalSum += number
        }
    }
    create(data: ClientData): void {
        this.clients.push(data)
    }
    find(id: string): ClientData | null {
        return this.clients.find(client => client.clientId === id) || null
    }
    findAll(): ClientData[] {
        return this.clients
    }
    delete(id: string): void {
        this.clients = this.clients.filter(client => client.clientId !== id)
    }
}