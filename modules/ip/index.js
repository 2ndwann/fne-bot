const { ip, port } = require('../../config.js').config;

exports.main = async (interaction) => {
	interaction.reply(`**Minecraft Server IP:** ${ip}:${port}`);
}
