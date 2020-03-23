const Discord = require('discord.js')
const dl = require('discord-leveling');

module.exports = {
	name: 'xp-setlevel',
    description: `Commande permettant de définir le nombre de niveaux d'un membre.`,
	usage: '[@Mentions] [Valeurs]',
	cooldown: 5,
    async execute(client, message, args, settings) {
    if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("Désolé, Vous n'avez pas les permissions !");
    let user = message.mentions.users.first() || message.author;
    var amount = args[1]
    const embedsetlevel = new Discord.RichEmbed()
        .setColor(`${settings.colorEmbed}`)
        .setAuthor(message.author.tag, message.author.avatarURL || "")
        .setTitle('Niveaux Reçue')
        .setDescription(`${user}`)
        .addField(`Niveaux Définie`, `${amount}`)
        .addField(`Auteur`, `${message.author}`)
        .setTimestamp()
        .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
    message.channel.send(embedsetlevel)
    await dl.SetLevel(user.id, amount)
    },
};