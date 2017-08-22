'use strict';

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bot = new _discord2.default.Client();

var socket = (0, _socket2.default)('http://localhost:3000');

bot.once('ready', function () {
	console.log('prismriver online');
	socket.emit('ready', 'alive');
});

bot.on('typingStart', function (channel, user) {
	console.log(user + ' typing in ' + channel);
	socket.emit('typingStart', user.username + ' typing in ' + channel.name);
});

bot.on('typingStop', function (channel, user) {
	console.log(user + ' stopped typing in ' + channel);
	socket.emit('typingStop', user.username + ' stopped typing in ' + channel.name);
});

bot.on('message', function (message) {
	console.log('message in ' + message.channel);
	socket.emit('message', 'message in ' + message.channel);
});

bot.on('presenceUpdate', function () {
	socket.emit('pupdate');
});
bot.login(_config2.default.token);