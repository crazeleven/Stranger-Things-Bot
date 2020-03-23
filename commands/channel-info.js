const Discord = require('discord.js');
let coma = "`"

module.exports = {
	name: 'channel-info',
	description: `Affiche les informations d'un salon.`,
	aliases: ['salon-info'],
	usage: '[#salon]',
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
        const channel = message.mentions.channels.first() || message.channel;
        const channelTypes = {
            dm: 'Message privés',
            group: 'Groupe privés',
            text: 'Salon textuel',
            voice: 'Salon vocal',
            category: 'Catégorie',
            news: `Actualités`,
            store: 'Magasins',
            unknown: 'Inconnu',
        };
            const embed = new Discord.RichEmbed()
                .setColor(`${settings.colorEmbed}`)
                .setAuthor(message.author.tag, message.author.avatarURL || "")
                .setTitle('Channel Info')
                .addField("🌍 • __Générale__", "Nom : " + `<#${channel.id}>` + "\n" + "ID : " + "`" + `${channel.id}` + "`" + "\n" + "Type : " + '`' + `${channelTypes[channel.type]}` + '`' + "", true)
                .addField("💡 • __Autre Informations__", `NSFW : ${coma}${channel.nsfw ? 'Oui' : 'Non'}${coma}\nCatégories : ${coma}${channel.parent ? channel.parent.name : 'Aucun'}${coma}\nTopic : ${coma}${channel.topic || 'Aucun'}${coma}\nCrée le : ${coma}${timeConverter(channel.createdAt)}${coma}`, true)
                .setTimestamp()
                .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
            message.channel.send(embed);
    },
};