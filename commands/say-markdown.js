const Discord = require('discord.js');
let coma = "`"
let coma2 = "```"
let texteexemple = "js\n// Code Color:\nmessage.channel.send('Ping...').then(m => {\nlet ping = m.createdTimestamp - message.createdTimestamp\nm.edit(`<@${message.author.id}> :ping_pong: Pong !\nTemps de latence avec le serveur: \`${ping}\`, Temps de latence avec l'API de Discord: \`${Math.round(client.ping)}\``)})\n// Code source de la commande Ping"

module.exports = {
	name: 'say-markdown',
    description: `Commande permettant de faire parler le bot avec les markdown de discord.`,
    aliases: ['dire-markdown','markdown'],
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
        const embed = new Discord.RichEmbed()
        .setColor(`${settings.colorEmbed}`)
        .setAuthor(message.author.tag, message.author.avatarURL || "")
		.setTitle(`Markdown Help`)
		.addField(`${settings.prefix}say-italic`, `*Italic*`)
		.addField(`${settings.prefix}say-bold`, `**Gras**`)
		.addField(`${settings.prefix}say-underline`, `__Souligné__`)
		.addField(`${settings.prefix}say-strikethrough`, `~~Barré~~`)
		.addField(`${settings.prefix}say-quotes`, `>>> Citations`)
		.addField(`${settings.prefix}say-spoiler`, `||Spoiler||`)
		.addField(`${settings.prefix}say-code`, `${coma}Code${coma}`)
		.addField(`${settings.prefix}say-code-block`, `${coma2}Code Block${coma2}`)
		.addField(`${settings.prefix}say-code-color`, `Pour effectuer cette commande, vous devez sauter une ligne après la langue définie\nExemple: **${settings.prefix}say-code-color** ${coma}Js ou autre langage${coma}\n${coma}Votre code en Js ou autre langage${coma}\n${coma2}${texteexemple}${coma2}`)
		.setTimestamp()
		.setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
		message.channel.send(embed);
    },
};