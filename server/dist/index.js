'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(__dirname + '/public'));

var server = _http2.default.Server(app);
var io = (0, _socket2.default)(server);

io.on('connection', function (socket) {
	console.log('user connected');
	socket.on('disconnect', function () {
		console.log('disconnected');
	});
	socket.on('typingStart', function (msg) {
		io.emit('typingStart', msg);
		console.log('typing!!: ' + msg);
	});
	socket.on('typingStop', function (msg) {
		io.emit('typingStop', msg);
		console.log('typing stopped: ' + msg);
	});
	socket.on('message', function (msg) {
		io.emit('message', msg);
		console.log('message: ' + msg);
	});
	socket.on('pupdate', function () {
		io.emit('pupdate');
		console.log('pupdate');
	});
});

server.listen(3000, function () {
	console.log('im on 3000');
});