const Discord = require('discord.js')

module.exports = {
	name: 'xp-help',
    description: `Aide pour le système d'xp.`,
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
    const xphelp = new Discord.RichEmbed()
        .setColor(`${settings.colorEmbed}`)
        .setAuthor(message.author.tag, message.author.avatarURL || "")
        .setTitle('Aide Xp')
        .addField(`${settings.prefix}xp-info`, `Commande permettant d'afficher le nombre d'xp et de niveau que vous avez`)
        .addField(`${settings.prefix}xp-setxp`, `Commande permettant de définir le nombre d'xp d'un membre`)
        .addField(`${settings.prefix}xp-setlevel`, `Commande permettant de définir le nombre de niveaux d'un membre`)
        .addField(`${settings.prefix}xp-leaderboard`, `Commande permettant d'afficher le classement d'un/des membre(s)\nDeux façons de l'utiliser: ${settings.prefix}xp-leaderboard ou\n${settings.prefix}xp-leaderboard <@mentions>`)
        .addField(`${settings.prefix}xp-delete`, `Commande permettant de supprimer un membre de la base de donnée`)
        .setTimestamp()
        .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
    message.channel.send(xphelp)
    },
};