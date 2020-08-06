const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require('./router');

const PORT = process.env.PORT || 5000;
app.use(router);
server.listen(PORT, () => console.log(`Servidor inciado en el puerto ${PORT}`));