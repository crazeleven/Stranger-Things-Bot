const Discord = require('discord.js');

module.exports = {
	name: 'poll-help',
    description: `Aide pour crée un sondage.`,
    aliases: ['aide-poll', 'poll'],
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
        const embedpollhelp = new Discord.RichEmbed()
            .setColor(`${settings.colorEmbed}`)
            .setAuthor(message.author.tag, message.author.avatarURL || "")
            .setTitle('Aide Sondage')
            .addField(`${settings.prefix}poll-simple`, `Commande permettant de crée un sondage en répondant avec ✅ ou ❎\nExemple: **${settings.prefix}poll-simple <Le temps en minutes> <La question>**`)
            .addField(`${settings.prefix}poll-advanced`, `Commande permettant de crée un sondage en répondant avec des options (chat, éléphant...)\nExemple: **${settings.prefix}poll-advanced <Le temps en minutes> <Les options en les séparant avec ;>;<La question>**\nRésultat: **${settings.prefix}poll-advanced 5 Javascript:Python;Javascript ou Pyhton ?**`)
            .setTimestamp()
            .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
        message.channel.send(embedpollhelp)
    },
};