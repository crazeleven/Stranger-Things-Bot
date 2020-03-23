module.exports = async (client, message) => {
  const dl = require('discord-leveling');
  const Discord = require('discord.js');
  const settings = await client.getGuild(message.guild);
  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();
  const cooldowns = new Discord.Collection();
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    let profile = await dl.Fetch(message.author.id)
    let user = message.mentions.users.first() || message.author
    if(message.author.bot || message.channel.type === "dm") return;
    if (message.content.indexOf(settings.prefix) !== 0) return;
    dl.AddXp(message.author.id, 10)
    if (profile.xp + 10 > 100) {
      await dl.AddLevel(message.author.id, 1)
      await dl.SetXp(message.author.id, 0)
      const embednewlvl = new Discord.RichEmbed()
            .setColor(`${settings.colorEmbed}`)
            .setTitle('Xp Nouveau Niveaux !')
	        .setDescription(`${message.author}`)
            .addField(`Niveaux`, `${profile.level + 1}`)
            .setTimestamp()
            .setFooter('Xp Release Version');
        message.channel.send(embednewlvl)
    }

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${settings.prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Attendez ${timeLeft.toFixed(1)} seconde(s) pour effectuez la commande \`${command.name}\`.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(client, message, args, settings);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
};