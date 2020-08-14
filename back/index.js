const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require('./router');

const { addUser, deleteUser, getUser, getUsersRoom } = require('./controllers/users.js');

const PORT = process.env.PORT || 5000;
app.use(router);
server.listen(PORT, () => console.log(`Servidor inciado en el puerto ${PORT}`));

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({id: socket.id, name, room});
    if (error) return callback(error);
    socket.emit('message', {user: 'admin', text: `${user.name} Bienvenido a la sala ${user.room}`});
    socket.broadcast.to(user.room).emit('message', {user: 'admin', text:`${user.name}, se ha unido!`})
    socket.join(user.room);
    io.to(user.room).emit('roomData', {room: user.room, users: getUsersRoom(user.room)})
    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', {user: user.name, text: message});
    io.to(user.room).emit('roomData', {room: user.room, users: getUsersRoom(user.room)});
    callback();
  });

  socket.on('disconnect', () => {
    const user = deleteUser(socket.id);
    if (user) {
      io.to(user.room).emit('message', {user: 'admin', text: `${user.name} se ha desconectado.`})
    }
  })
});
