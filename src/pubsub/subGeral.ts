import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.onAny((event, ...args) => {
  console.log(`Received event '${event}':`, args);
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
