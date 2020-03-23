const Discord = require('discord.js');
const config = require("../config.js");

module.exports = {
	name: 'news-description',
	description: `Commande permettant de définir la description de l'embed News.`,
	aliases: ['news-text', 'nouvelle-text'],
	usage: '[Message]',
	cooldown: 5,
    async execute(client, message, args, settings) {
    if (message.author.id !== config.OWNERID) return message.reply("Désolé, Vous n'avez pas les permissions !")
    const argsjoin = args.join(` `);
        client.updateGuild(message.guild, { news_embed_description: argsjoin });
        const embed = new Discord.RichEmbed()
            .setColor(`${settings.colorEmbed}`)
            .setAuthor(message.author.tag, message.author.avatarURL || "")
            .setTitle(`Description de l'embed des actualités de DiscordBot.js`)
            .setDescription(`${argsjoin || ""}`)
            .setTimestamp()
            .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
            message.channel.send(embed)
    },
};