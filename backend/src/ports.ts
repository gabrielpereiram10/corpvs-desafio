export interface ClientData {
    clientId: string
    totalSum: number
}

interface IRepository<T> {
    create(data: T): void
    find(id: string): T | null
    findAll(): T[]
    delete(id: string): void
}

export interface IClientRepository extends IRepository<ClientData> {
    update(id: string, number: number): void
} 

export interface TotalSumSender {
    send(client: ClientData): void
}

export interface Data {
    clientId: string
    number: number
}