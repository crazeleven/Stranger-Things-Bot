const Discord = require('discord.js');
const config = require("../config.js");
const wait = require('util').promisify(setTimeout);

module.exports = {
	name: 'db-info',
	description: `Commande permettant de montrer les informations de la base de donnée sur ce serveur.`,
	aliases: ['bd-info'],
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
        if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("Désolé, Vous n'avez pas les permissions !");
        const embed = new Discord.RichEmbed()
            .setColor(`${settings.colorEmbed}`)
            .setAuthor(message.author.tag, message.author.avatarURL || "")
            .setTitle(`DB Info`)
            .addField(`Prefix`, `${settings.prefix}`, true)
            .addField(`Salon Bienvenue`, `${settings.welcomeChannel}`, true)
            .addField(`Invitation Serveur`, `${settings.serverInvite}`, true)
            .addField(`Logs`, `${settings.logs}`, true)
            .addField(`ID`, `${settings.logsChannelID}`, true)
            .addField(`Bienvenue Image`, `${settings.pictureWelcome}`, true)
            .addField(`Au revoir Image`, `${settings.pictureLeave}`, true)
            .addField(`Couleur Embed`, `${settings.colorEmbed}`, true)
            .addField(`Langage`, `${settings.langue}`, true)
            .addField(`Actualités de ${client.user.tag}`,`${settings.news}`, true)
            .addField(`ID`, `${settings.newsChannelID}`, true)
            .addField(`Setup Serveur`, `${settings.setupserver}`, true)
            .setTimestamp()
            .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
            message.channel.send(embed)
            .then(async function (message) {
                message.react("📄");
                message.react("🔔");
                wait(3000);
            })
    },
};