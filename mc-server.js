// Minecraft server wrapper

class MinecraftServer extends require('child_process').spawn {
	constructor() {
		const { javaBinLocation, mcServerLocation, mcServerJarBinLocation } = require('./config.js').config;

		// Spawn the minecraft server
		process.chdir(mcServerLocation);
		super(javaBinLocation, [
			'-Xmx2048M',
			'-Xms2048M',
			'-jar',
			mcServerJarBinLocation,
			'nogui'
		]);


		// Listen for events coming from the minecraft server, and log them via stdout
		function log(data) {
			process.stdout.write(data.toString());
		}
		this.stdout.on('data', log);
		this.stderr.on('data', log);


		// Read from stdin and pass input to java server
		const readLine = require('readline');

		const rl = readLine.createInterface({
			input: process.stdin,
			output: process.stdout,
			terminal: false
		});

		rl.on('line', (line) => {
			if (line == 'forcestop') { // Force-stop the process
				this.stdin.pause();
				this.kill();
				console.log('bye');
			}
			this.stdin.write(line + '\n');
		});
	
		rl.once('close', () => {
			this.console.log('End of stdin input interface.');
		});

	}
}

exports.MinecraftServer = MinecraftServer;
