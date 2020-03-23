const { version } = require('discord.js');
const Discord = require('discord.js');
const config = require('../config.js')
const os = require('os');

module.exports = {
	name: 'bot-info',
	description: `Affiche les informations du bot.`,
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
        function timeConverter(timestamp)
        {
        var a = new Date(timestamp);
        var tabMois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
        var annee = a.getFullYear();
        var mois = tabMois[a.getMonth()];
        var date = a.getDate();
        var heure = a.getHours();
        if(heure <= 10) {
            heure = `0${a.getHours()}`
        };
        var min = a.getMinutes();
        if(min <= 10) {
            min = `0${a.getMinutes()}`
        };
        var sec = a.getSeconds();
        if(sec <= 10) {
            sec = `0${a.getSeconds()}`
        };
        var time = + date + ' ' + mois + ' ' + annee + ' à ' + heure + 'h' + min + ':' + sec ;
        return time;
        };
            const embed = new Discord.RichEmbed()
                .setColor(`${settings.colorEmbed}`)
                .setAuthor(message.author.tag, message.author.avatarURL || "")
                if(client.user.displayAvatarURL) {
                    embed.setThumbnail(`${client.user.displayAvatarURL}`)
                }
                embed.setTitle('Bot Info')
                embed.addField("🌍 • __Générale__", "Nom : " + `<@${client.user.id}>` + "\n" + "ID : " + "`" + `${client.user.id}` + "`" + "", true)
                embed.addField("⚗ • __Versions__", "Bot : " + "`" + `${config.VERSION}` + "`" + "\n" + "NodeJS : " + "`" + `${process.version}` + "`" + "\n" + "DiscordJS : " + "`" + `v${version}` + "`" + "", true)
                embed.addField("📋 • __Statistiques__", "Serveurs : " + "`" + `${client.guilds.size}` + "`" + "\n" + "Utilisateurs : " + "`" + `${client.users.size}` + "`" + "", true)
                embed.addField("📌 • __Développeur__", `<@${config.OWNERID}>` || "`" + `${config.CREATOR}` + "`", true)
                embed.addField("⚙ • __Système__", "Plateforme : " + "`" +  `${os.platform()}`+ "` \n Arch : " + "`" + `${os.arch()}` + "` \n CPU : " +  "`" + `${os.cpus().map(i => `${i.model}`)[0]}` + "`", true)
                embed.addField("💻 • __Processeur__", "RAM: " + "`" + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + "MB` | Latence avec l'API :" + "`" + `${Math.round(client.ping)}` + " ms`")
                embed.addField("💡 • __Autre Informations__", "En ligne depuis : "  + "`" + (Math.round(client.uptime / (1000 * 60 * 60))) + ' heures  ' + (Math.round(client.uptime / (1000 * 60)) % 60) + ' minutes ' + (Math.round(client.uptime / 1000) % 60) + ' secondes ' +  "`" + "\n" + "Crée le : " + "`" + `${timeConverter(client.user.createdAt)}` + "`" + "", true)
                embed.addField("🔗 • __Liens__", `[Invitation Serveur](${settings.serverInvite}) | [Dépôts Github](${config.GITHUB})`)
                embed.setTimestamp()
                embed.setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
            message.channel.send(embed);
    },
};