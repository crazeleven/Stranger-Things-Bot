const Discord = require('discord.js');
let coma = "`"

module.exports = {
	name: 'user-info',
	description: `Afiche des informations non personnel d'un membre.`,
	aliases: ['utilisateur-info'],
	usage: '[@Utilisateur]',
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
        const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
        var botuser;
        if(member.user.bot) {
            botuser = "Oui";
        } else {
            botuser = "Non";
        };
        var roless;
        if (member.roles.size === 0) {
            roless = 'Aucun';
        } else {
            roless = member.roles.size;
        };
        var userStatus;
        if (member.user.presence.status === "offline") {
            userStatus = '⚫Hors ligne';
        } else if (member.user.presence.status === "idle") {
            userStatus = "🟠Inactif";
        } else if (member.user.presence.status === "online") {
            userStatus = "🟢En ligne";
        } else if (member.user.presence.status === "dnd") {
            userStatus = "🔴Ne pas déranger";
        };
        var clienStatuss;
        if (member.user.bot === true) {
            clienStatuss = 'Indisponible';
        } else if (member.user.presence.clientStatus.web === "online") {
            clienStatuss = 'Web';
        } else if (member.user.presence.clientStatus.mobile === "online") {
            clienStatuss = "Mobile";
        } else if (member.user.presence.clientStatus.desktop === "online") {
            clienStatuss = "Desktop";
        } else {
            clienStatuss = 'Indisponible';
        }
        var customStatus;
        if (!member.presence.game) {
            customStatus = "Aucun";
        } else if (member.presence.game) {
            customStatus = member.presence.game;
        };
        var lastmessage;
        if (member.user.bot === true) {
            lastmessage = 'Indisponible';
        } else if (!member.user.lastMessage) {
            lastmessage = 'Aucun';
        } else if (member.user.lastMessage) {
            lastmessage = member.user.lastMessage;
        }
        var lastmessageid;
        if (member.user.bot === true) {
            lastmessageid = 'Indisponible';
        } else if (!member.user.lastMessageID) {
            lastmessageid = 'Aucun';
        } else if (member.user.lastMessageID) {
            lastmessageid = member.user.lastMessageID;
        }
            const embed = new Discord.RichEmbed()
                .setColor(`${settings.colorEmbed}`)
                .setAuthor(message.author.tag, message.author.avatarURL || "")
                if(member.user.displayAvatarURL) {
                    embed.setThumbnail(`${member.user.displayAvatarURL}`)
                }
                embed.setTitle('Utilisateur Info')
                embed.addField("🌍 • __Générale__", `Pseudo : ${member}\nID : ${coma}${member.id}${coma}\nBot : ${coma}${botuser}${coma}`, true)
                embed.addField("📋 • __Statistiques__", `Dernier message : ${coma}${lastmessage}${coma}\nDernier message ID : ${coma}${lastmessageid}${coma}`, true)
                if(member.roles.size < 4) {
                    embed.addField("🔗 • __Rôles__", `${roless} Rôles: ${member.roles.map(role => `${coma}${role.name}${coma}`).join('**,** ')}`, true)
                } else if(member.roles.size > 4) {
                    embed.addField("🔗 • __Rôles__", `${roless} Rôles`, true) //Je ne sais pas pourquoi sa ne fonctionne pas alors que pour Emojis dans +server-info cela fonctionne, Bizzare ?
                }
                embed.addField(`👥 • __Status__`, `Status : ${coma}${userStatus}${coma}\nClient Status : ${coma}${clienStatuss}${coma}\nStatus Jeux/Personnalisé : ${coma}${customStatus}${coma}`, true)
                embed.addField(`💡 • __Autre Informations__`, `Crée le : ${coma}${timeConverter(member.user.createdAt)}${coma}\nRejoind le : ${coma}${timeConverter(member.joinedAt)}${coma}`, true)
                embed.setTimestamp()
                embed.setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
            message.channel.send(embed);
    },
};