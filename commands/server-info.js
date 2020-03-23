const Discord = require('discord.js');
let coma = "`"

module.exports = {
	name: 'server-info',
	description: 'Affiche les informations du serveur.',
	aliases: ['serveur-info', 'sinfo'],
	usage: '[prefix]server-info',
	cooldown: 5,
	async execute(client, message, args) {
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
        }
        var min = a.getMinutes();
        if(min <= 10) {
            min = `0${a.getMinutes()}`
        }
        var sec = a.getSeconds();
        if(sec <= 10) {
            sec = `0${a.getSeconds()}`
        }
        var time = + date + ' ' + mois + ' ' + annee + ' à ' + heure + 'h' + min + ':' + sec ;
        return time;
}
                let guilde = client.guilds.get(args[0]) || message.guild
                const settings = await client.getGuild(guilde)
                let verifLevels = ["Aucun", "Faible", "Moyen", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
            let region = {
                "brazil": `:flag_br: ${coma}Brésil${coma}`,
                "southafrica": `:flag_za: ${coma}Afrique du Sud${coma}`,
                "eu-central": `:flag_eu: ${coma}Europe Central${coma}`,
                "europe": `:flag_eu: ${coma}Europe${coma}`,
                "russia": `:flag_ru: ${coma}Russie${coma}`,
                "singapore": `:flag_sg: ${coma}Singapour${coma}`,
                "us-central": `:flag_us: ${coma}États-Unis Central${coma}`,
                "sydney": `:flag_au: ${coma}Sydney${coma}`,
                "japan": `:flag_jp: ${coma}Japon${coma}`,
                "us-east": `:flag_us: ${coma}Est des États-Unis${coma}`,
                "us-south": `:flag_us: ${coma}Sud des États-Unis${coma}`,
                "us-west": `:flag_us: ${coma}Ouest des États-Unis${coma}`,
                "eu-west": `:flag_eu: ${coma}Europe de l'Ouest${coma}`,
                "vip-us-east": `:flag_us: ${coma}VIP U.S. East ?${coma}`,
                "london": `:flag_gb: ${coma}Londres${coma}`,
                "india": `:flag_in: ${coma}Inde${coma}`,
                "amsterdam": `:flag_nl: ${coma}Amsterdam${coma}`,
                "hongkong": `:flag_hk: ${coma}Hong Kong${coma}`
            };
            var emojis;
            if (guilde.emojis.size === 0) {
                emojis = 'Aucun';
            } else {
                emojis = guilde.emojis.size;
            }
            let online = guilde.members.filter(member => member.user.presence.status !== 'offline');
            /*var verified_partnered;
            if(guilde.partnered == false && guilde.verified == false) {
                verified_partnered = "Non";
            } else {
                verified_partnered = "Oui";
            }
            var boosted;
            if(guilde.premiumTier = 0) {
                boosted = "Aucun";
            } else {
                boosted = guilde.premiumTier;
            }
            */
            var channelafkid;
            if(!guilde.afkChannelID) {
                channelafkid = `${coma}Aucun${coma}`
            } else {
                channelafkid = `<#${guilde.afkChannelID}>`
            }
            const embed = new Discord.RichEmbed()
                .setColor(`${settings.colorEmbed}`)
                .setAuthor(message.author.tag, message.author.avatarURL || "")
                if(guilde.iconURL) {
                    embed.setThumbnail(`${guilde.iconURL}`)
                }
                embed.setTitle('Serveur Info')
                embed.addField("🌍 • __Générale__", `Nom : ${coma}${guilde.name}${coma}\nID : ${coma}${guilde.id}${coma}\nRégion : ${region[guilde.region]}\nPropriétaire : ${guilde.owner}`, true)
                embed.addField("📋 • __Statistiques__", `Salons : ${coma}${guilde.channels.size}${coma}\nRôles : ${coma}${guilde.roles.size}${coma}\nTotal de membres : ${coma}${guilde.memberCount - guilde.members.filter(m => m.user.bot).size}${coma}\nBots : ${coma}${guilde.members.filter(m => m.user.bot).size}${coma}\nEn ligne : ${coma}${online.size}${coma}`, true)
                if(guilde.emojis.size < 1) {
                    embed.addField("😃 • __Emojis__", `${emojis} Emoji`, true)
                } else if(guilde.emojis.size < 15) {
                    embed.addField("😃 • __Emojis__", `${emojis} Emojis : ${guilde.emojis.map(emoji => `${emoji}`).join(' ')}`, true)
                } else if(guilde.emojis.size > 15) {
                    embed.addField("😃 • __Emojis__", `${emojis} Emojis`, true)
                }
                embed.addField(`💤 • __AFK__`, `AFK : ${channelafkid}\nID : ${coma}${guilde.afkChannelID || "Aucun"}${coma}\nDélai : ${coma}${guilde.afkTimeout / 60} minutes${coma}`, true)
                embed.addField("🛡️ • __Modération__", `Niveaux de vérification : ${coma}${verifLevels[guilde.verificationLevel]}${coma}`, true) // \nVérifié ou Partenaire : ${coma}${verified_partnered}${coma}\nNiveaux de Boost : ${coma}${boosted}${coma}
                embed.addField(`👥 • __Server invite__`, `${settings.serverInvite}`, true)
                if (args.length) {
                    embed.addField(`💡 • __Autre Informations__`, `Crée le : ${coma}${timeConverter(guilde.createdAt)}${coma}`, true)
                } else {
                    embed.addField(`💡 • __Autre Informations__`, `Crée le : ${coma}${timeConverter(guilde.createdAt)}${coma}\nVous avez rejoind le : ${coma}${timeConverter(message.member.joinedAt) || "Indisponible"}${coma}`, true)
                }
                embed.setTimestamp()
                embed.setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
            message.channel.send(embed);
	},
};