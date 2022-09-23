commands = require('./../../commands.js').commands;

exports.main = async (interaction) => {
	let text = '';
	
	text = text + '**Commands\n**';
	text = text + 'All commands start with "/" as a prefix.\n\n';	

	commands.forEach((item, index) => {
		text = text + `> \`${item.name}\`\t\t${item.description}\n`;
	});
	
	interaction.reply(text);
}
