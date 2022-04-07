import { io } from "socket.io-client"

const socket = io("http://localhost:3333", {})

export async function addNumber(number) {
    socket.emit("sum", { number })
}

socket.on("total-sum", ({ totalSum }) => {
    alert(`Soma total: ${totalSum}`)
})