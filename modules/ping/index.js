// list

// const path = require('path');
// const bytes = require('bytes');

// Wrapper for python program
/**
wrapper = () => {
	return new Promise((resolve) => {
		try {
			const spawn = require('child_process').spawn;
			var proc = spawn('python3', [
				'-u',
				path.join(__dirname, 'main.py')
			]);
			proc.stdout.on('data', (data) => {
				proc.kill('SIGINT');
				resolve(data);
			});
		} catch (err) {
			console.error(err);
		}
	});
}**/

exports.main = async (interaction) => {	
	//let data = await wrapper();
	
	//data = data.toString();
	//await interaction.reply('**Server latency (ms):** ' + data);
	await interaction.reply('**Sorry, the ping feature is currently disabled.**');
}
