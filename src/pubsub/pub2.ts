import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');

  // Enviar uma mensagem para o servidor
  socket.emit('message', 'Hello, server from SUB2');
});

socket.on('message', (data) => {
  console.log('Received message from server:', data);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
