const Discord = require('discord.js');
let coma = "`"

module.exports = {
	name: 'help',
	description: 'Affiche toutes les commandes.',
	aliases: ['aide', 'h'],
	usage: '[Commande]',
	cooldown: 5,
	async execute(client, message, args, settings) {
		const { commands } = message.client;
		const name = args[0];
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			const embed1 = new Discord.RichEmbed()
                .setColor(`${settings.colorEmbed}`)
                .setAuthor(message.author.tag, message.author.avatarURL || "")
				.setTitle('Liste de toutes les commandes')
				.setDescription(`${coma}${commands.map(command => `${settings.prefix}${command.name}`).join(`${coma}**,** ${coma}`)}${coma}`)
                .setTimestamp()
                .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
            message.channel.send(`Vous pouvez aussi envoyer \`${settings.prefix}help [commande]\` pour avoir les informations d'une commande !`, embed1);
		} else {
		const embed2 = new Discord.RichEmbed()
                .setColor(`${settings.colorEmbed}`)
                .setAuthor(message.author.tag, message.author.avatarURL || "")
                .setTitle('Commande Info')
				.addField("• __Nom__", `${coma}${settings.prefix}${command.name}${coma}`, true)
				if(command.aliases) {
				if (command.aliases.length > 1) {
				embed2.addField("• __Aliases__", `${coma}${settings.prefix}${command.aliases.join(`${coma}**,** ${coma}+`)}${coma}`);
				}
				else {
				embed2.addField("• __Aliases__", `${coma}${settings.prefix}${command.aliases.join(`${coma}**,** ${coma}`)}${coma}`);
				}
				}
				if (command.description) {
				if (command.name === 'say-code-color') embed2.addField("• __Description__", `${command.description}`);
				else if (command.name === 'say-bold') embed2.addField("• __Description__", `${command.description}`);
				else if (command.name === 'say-code-block') embed2.addField("• __Description__", `${command.description}`);
				else if (command.name === 'say-code') embed2.addField("• __Description__", `${command.description}`);
				else if (command.name === 'say-italic') embed2.addField("• __Description__", `${command.description}`);
				else if (command.name === 'say-quotes') embed2.addField("• __Description__", `${command.description}`);
				else if (command.name === 'say-spoiler') embed2.addField("• __Description__", `${command.description}`);
				else if (command.name === 'say-strikethrough') embed2.addField("• __Description__", `${command.description}`);
				else if (command.name === 'say-underline') embed2.addField("• __Description__", `${command.description}`);
				else if (command.description) embed2.addField("• __Description__", `${coma}${command.description}${coma}`);
				}
				if (command.name === 'say-code-color' && command.usage) embed2.addField("• __Utilisation__", `${saycodecolorusage}\n${coma}${settings.prefix}${command.name} ${command.usage}${coma}`);
				else if (command.usage) embed2.addField("• __Utilisation__", `${coma}${settings.prefix}${command.name} ${command.usage}${coma}`);
				embed2.addField("• __Cooldown__", `${coma}${command.cooldown || 5} secondes${coma}`, true)
                embed2.setTimestamp()
                embed2.setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
			message.channel.send(embed2);
		}
	},
};