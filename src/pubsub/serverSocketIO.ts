import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket: Socket) => {
  console.log('Client connected');

  socket.on('message', (data) => {
    console.log('Received message:', data);

    // Enviar mensagem de volta para o cliente
    socket.emit('message', `Echo: ${data}`);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

httpServer.listen(3000, () => {
  console.log('Server listening on port 3000');
});
