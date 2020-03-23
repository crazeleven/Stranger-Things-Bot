const Discord = require('discord.js');
const config = require("../config.js");

module.exports = {
	name: 'news-picture',
	description: `Commande permettant de définir l'image de l'embed News.`,
	aliases: ['news-image', 'nouvelle-image'],
	usage: '[Url de l\'image]',
	cooldown: 5,
    async execute(client, message, args, settings) {
    if (message.author.id !== config.OWNERID) return message.reply("Désolé, Vous n'avez pas les permissions !")
    const argsjoin = args.join(` `);
        client.updateGuild(message.guild, { news_embed_picture: argsjoin });
        const embed = new Discord.RichEmbed()
            .setColor(`${settings.colorEmbed}`)
            .setAuthor(message.author.tag, message.author.avatarURL || "")
            .setTitle(`L'image de l'embed des actualités de DiscordBot.js`)
            .setImage(`${argsjoin || ""}`)
            .setTimestamp()
            .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
            message.channel.send(embed)
    },
};