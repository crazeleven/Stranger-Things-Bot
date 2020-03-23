const { version } = require('discord.js');
const Discord = require('discord.js');
let coma = "`"

module.exports = {
	name: 'role-info',
	description: `Affiche les informations d'un rôle.`,
	aliases: ['rôle-info'],
	usage: '[@rôle]',
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
        const role = message.mentions.roles.first() || message.guild.roles.get(args[0]);
            if (!role) {
                return message.reply('Veuillez rentrez un rôle !');
            }
            const embed = new Discord.RichEmbed()
                .setColor(`${settings.colorEmbed}`)
                .setAuthor(message.author.tag, message.author.avatarURL || "")
                .setTitle('Rôle Info')
                .addField("🌍 • __Générale__", "Nom : " + `${role}` + "\n" + "ID : " + "`" + `${role.id}` + "`" + "\n" + "Position : " + '`' + `${role.calculatedPosition}` + '`' + "\n" + `Epinglés : ${coma}${role.hoist ? 'Oui' : 'Non'}${coma}`, true)
                .addField("💡 • __Autre Informations__", `Mentionable : ${coma}${role.mentionable ? 'Oui' : 'Non'}${coma}\nPermissions : ${coma}${role.permissions}${coma}\nCouleur en Hexadécimal : ${coma}${role.hexColor}${coma}\nCrée le : ${coma}${timeConverter(role.createdAt)}${coma}`, true)
                .setTimestamp()
                .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
            message.channel.send(embed);
    },
};