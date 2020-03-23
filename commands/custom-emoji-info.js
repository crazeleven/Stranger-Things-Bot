const Discord = require('discord.js');
const config = require('../config.js')
let coma = "`"

module.exports = {
	name: 'custom-emoji-info',
	description: `Commande permettant de savoir des informations sur un émoji personnalisé.`,
	aliases: ['emoji-perso-info'],
	usage: '[ID ou Nom de l\'émoji]',
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
        const argsemoji = args[0];
        const emojif = message.guild.emojis.get(argsemoji) || message.guild.emojis.find(emoji => emoji.name === argsemoji); // j'ai essayé les émoji de base mais j'ai pas trouvé
        var emojianimated;
        if (!emojif) {
            return message.reply(`Vous devez spécifiez un émoji personnalisé !`);
        }
        if(emojif.animated === true) {
            emojianimated = "Oui"
        } else {
            emojianimated = "Non"
        }
            const embed = new Discord.RichEmbed()
                .setColor(`${settings.colorEmbed}`)
                .setAuthor(message.author.tag, message.author.avatarURL || "")
                .setThumbnail(`${emojif.url}`)
                .setTitle('Emoji Info')
                .addField("🌍 • __Générale__", `Nom : ${coma}${emojif.name}${coma}\nID : ${coma}${emojif.id}${coma}\nAnimés : ${coma}${emojianimated}${coma}`, true)
                .addField(`💡 • __Autre Informations__`, `Crée le : ${coma}${timeConverter(emojif.createdAt)}${coma}\nURL : ${emojif.url}`, true)
                .setTimestamp()
                .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
            message.channel.send(embed);
    },
};