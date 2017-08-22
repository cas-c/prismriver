import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();

app.use(express.static(__dirname + '/public'));

const server = http.Server(app);
const io = socketio(server);

io.on('connection', socket => {
	console.log('user connected');
	socket.on('disconnect', () => {
		console.log('disconnected');
	});
	socket.on('typingStart', msg => {
		io.emit('typingStart', msg);
		console.log('typing!!: ' + msg);
	});
	socket.on('typingStop', msg => {
		io.emit('typingStop', msg);
		console.log('typing stopped: ' + msg);
	})
	socket.on('message', msg => {
		io.emit('message', msg);
		console.log('message: ' + msg);
	})
	socket.on('pupdate', () => {
		io.emit('pupdate');
		console.log('pupdate');
	})
});

server.listen(3000, () => {
	console.log('im on 3000');
});
