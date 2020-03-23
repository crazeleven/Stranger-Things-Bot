const Discord = require('discord.js')
const dl = require('discord-leveling');

module.exports = {
	name: 'xp-setxp',
    description: `Commande permettant de définir le nombre d'xp d'un membre.`,
	usage: '[@Mentions] [Valeurs]',
	cooldown: 5,
    async execute(client, message, args, settings) {
    if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("Désolé, Vous n'avez pas les permissions !");
    let user = message.mentions.users.first() || message.author;
    var amount = args[1]
    const embedsetxp = new Discord.RichEmbed()
        .setColor(`${settings.colorEmbed}`)
        .setAuthor(message.author.tag, message.author.avatarURL || "")
        .setTitle('Xp Reçue')
        .setDescription(`${user}`)
        .addField(`Xp Définie`, `${amount}`)
        .addField(`Auteur`, `${message.author}`)
        .setTimestamp()
        .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
    message.channel.send(embedsetxp)
    await dl.SetXp(user.id, amount)
    },
};