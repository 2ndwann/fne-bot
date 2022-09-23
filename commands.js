const { version } = require('./config.js').config;

// Register the discord "slash" commands
exports.commands = [
	{
		name: 'help',
		description: 'Shows the help menu.',
	},
	{
		name: 'about',
		description: 'Gives you the version and details of the bot.',
	},
	{
		name: 'list',
		description: 'List the players in the minecraft FNE minecraft server.',
	},
	{
		name: 'ip',
		description: 'Gets the minecraft FNE SMP server IP.',
	},
	{
		name: 'ping',
		description: 'Gets the latency (ping) of the FNE minecraft server.',
	},
];

// Route the commands that come from index.js
exports.route = async (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	
	switch (interaction.commandName) {
		case 'about':
			await interaction.reply(`**FNE Bot**\nVersion: ${version}\nAuthor: 2ndwann.\nFor help, type /help`);
			break;
		case 'list':
			require('./modules/list/index.js').main(interaction);
			break;
		case 'ip':
			require('./modules/ip/index.js').main(interaction);
			break;
		case 'help':
			require('./modules/help/index.js').main(interaction);
			break;
		case 'ping':
			require('./modules/ping/index.js').main(interaction);
			break;
	}
}
