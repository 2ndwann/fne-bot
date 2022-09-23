const { channels } = require('./config.js').config;

// Send a chat message from the mc server to the discord channel
exports.sendChatMessageToChannel = (client, data) => {
	if (!data || !data.toString()) return;
	
	let chatMessage = data.toString();

	if (chatMessage[17] != '<') return;
	
	// Format the chat message text
	if (chatMessage[17] == '<' ) {
		chatMessage = chatMessage.slice(17);
		chatMessage = `\`${chatMessage}\``;
	}

	// Broadcast the output to all the channels
	channels.forEach((channelId, index) => {
		client.channels.cache.get(channelId).send(chatMessage);
	});
}

// Send a chat message from the discord channel to the server
exports.sendChatMessageToMcServer = (data, mcServer) => {
	// TODO
}
