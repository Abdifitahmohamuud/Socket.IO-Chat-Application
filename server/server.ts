import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new SocketIOServer(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Store userName => socket.id
const users: Record<string, string> = {};

io.on('connection', (socket: Socket) => {
  const userName = (socket.handshake.query.userName || '') as string;

  if (userName) {
    users[userName] = socket.id;
    console.log(`User name of ${userName} has ID: ${socket.id}`);
  }

  socket.on('message', ({ user, msg }: { user: string; msg: string }) => {
    if (user && msg) {
      const userId = users[user];
      if (userId) {
        io.to(userId).emit('msg', msg);
      } else {
        console.log('Username not found in database');
      }
    } else {
      console.log('Missing user or message');
    }
  });

  io.emit('tst', 'Welcome pro..........');

  socket.on('disconnect', () => {
    for (const user in users) {
      if (users[user] === socket.id) {
        delete users[user];
        console.log(`User logged out: ${user}, ID was: ${socket.id}`);
        break;
      }
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
