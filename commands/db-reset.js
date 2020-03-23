const config = require("../config.js");

module.exports = {
	name: 'db-reset',
	description: `Commande permettant de remettre les valeurs par défauts de la base de donnée.`,
	aliases: ['bd-défaut'],
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
    const { DEFAULTSETTINGS: defaults } = require("../config");
    if (!message.member.hasPermission(["ADMINISTRATOR"]))return message.reply("Désolé, Vous n'avez pas les permissions !");
    client.updateGuild(message.guild, { 
        prefix: defaults.prefix,
        welcomeChannel: defaults.welcomeChannel,
        serverInvite: defaults.serverInvite,
        logs: defaults.logs,
        logsChannelID: defaults.logsChannelID,
        pictureWelcome: defaults.pictureWelcome,
        pictureLeave: defaults.pictureLeave,
        colorEmbed: defaults.colorEmbed,
        langue: defaults.langue,
        news: defaults.news,
        newsChannelID: defaults.newsChannelID,
        news_embed_description: defaults.news_embed_description,
        news_embed_thumbnail: defaults.news_embed_thumbnail,
        news_embed_picture: defaults.news_embed_picture,
        setupserver: defaults.setupserver,
     });
    message.reply(`Les valeurs de la base de donnée pour ${message.guild.name} à été reinitialiser`)
    },
};