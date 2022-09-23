console.log('Starting node.js process.');

// Start the minecraft server
const { MinecraftServer } = require('./mc-server.js')
const mcServer = new MinecraftServer();

// Start the discord bot
const { Bot } = require('./bot.js');
const bot = new Bot(mcServer);
