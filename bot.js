// index.js

// Register the commands
const { REST, Routes } = require('discord.js');
const { prefix, token, clientId, channels } = require('./config.js').config;
const { commands, route } = require('./commands.js');
const { sendChatMessageToChannel, sendChatMessageToMcServer } = require('./mc-server-chat.js');

class Bot {
	constructor(mcServer) {
		const rest = new REST({ version: '10' }).setToken(token); // Initialize discord's REST API

		(async () => {
			try {
				console.log('Started refreshing application (/) commands.');
				await rest.put(Routes.applicationCommands(clientId), { body: commands });
				console.log('Succesfully reloaded application (/) commands.');
			} catch (err) {
				console.error(err);
			}
		})();


		// Register the bot
		const { Client, GatewayIntentBits } = require('discord.js');
		const client = new Client({ intents: [GatewayIntentBits.Guilds] });
		client.login(token);

		// Event handlers
		client.on('ready', () => { // When the bot is ready
			console.log(`Logged in as ${client.user.tag}.`);
		});

		client.on('interactionCreate', async interaction => { // When a command is inputted
			route(interaction); // Route the interaction to commands.js
		});
		mcServer.stdout.on('data', (data) => { // Check for chat message on minecraft server
			sendChatMessageToChannel(client, data, mcServer);
		});
		// TODO make a way for channel messages to be sent to mc server
	}
}

exports.Bot = Bot;
