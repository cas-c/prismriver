import Discord from 'discord.js';
import io from 'socket.io-client';
import config from '../config';

const bot = new Discord.Client();

const socket = io('http://localhost:3000');

bot.once('ready', () => {
	console.log('prismriver online');
	socket.emit('ready', 'alive');
});

bot.on('typingStart', (channel, user) => {
	console.log(`${user} typing in ${channel}`);
	socket.emit('typingStart', `someone started typing`)
});

bot.on('typingStop', (channel, user) => {
	console.log(`${user} stopped typing in ${channel}`);
	socket.emit('typingStop', `someone stopped typing`)
});

bot.on('message', (message) => {
	console.log(`message in ${message.channel}`);
	socket.emit('message', `someone sent a message`);
});

bot.on('presenceUpdate', () => {
	socket.emit('pupdate', 'someones presence updated');
});
bot.login(config.token);

