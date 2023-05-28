import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')


socket.on('msg', (msg) => {
    console.log("aqui",msg)
}
)

socket.emit('msg', 'mensagem enviada do client')