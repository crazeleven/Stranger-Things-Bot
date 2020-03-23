const Discord = require('discord.js')
const dl = require('discord-leveling');

module.exports = {
	name: 'xp-info',
    description: `Commande permettant d'afficher le nombre d'xp et de niveau que vous avez.`,
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
    let user = message.mentions.users.first() || message.author
    let output1 = await dl.Fetch(user.id)
    const embedxpinfo = new Discord.RichEmbed()
        .setColor(`${settings.colorEmbed}`)
        .setAuthor(message.author.tag, message.author.avatarURL || "")
        .setTitle('Xp Info')
        .setDescription(`${message.author}`)
        .addField(`Niveaux`, `${output1.level}`)
        .addField(`Xp`, `${output1.xp}`)
        .setTimestamp()
        .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
    message.channel.send(embedxpinfo)
    },
};