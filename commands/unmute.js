const Discord = require('discord.js');
const config = require("../config.js");

module.exports = {
	name: 'mute',
	description: `Commande permettant d'enlever sourdine d'un membre.`,
	usage: '[@Utilisateur] [Raison]',
	cooldown: 5,
    async execute(client, message, args, settings) {
    if (!message.member.hasPermission(["MANAGE_ROLES", "MUTE_MEMBERS", "MANAGE_CHANNELS"])) return message.reply("Désolé, Vous n'avez pas les permissions !");

	  let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
	  let muteRole = message.guild.roles.find(x => x.name === "Muted");
	  let reason = args.slice(1).join(' ');

	  if(!target) return message.reply("S'il vous plait mentionné un membre valide !");

	  if(!reason) reason = "Aucune Raison";

		  const embed2 = new Discord.RichEmbed()
		  .setColor(`${settings.colorEmbed}`)
		  .setAuthor(message.author.tag, message.author.avatarURL || "")
		  .setTitle(`Vous n'êtes plus mute !`)
		  .addField("Serveur", `${message.guild.name}`)
		  .addField("Serveur ID", `${message.guild.id}`)
		  .addField("Salon", `${message.channel.name}`)
		  .addField("Salon ID", `${message.channel.id}`)
		  .addField("Raison", `${reason}`)
		  .setTimestamp()
		  .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);

		  const embed4 = new Discord.RichEmbed()
		  .setColor(`${settings.colorEmbed}`)
		  .setAuthor(message.author.tag, message.author.avatarURL || "")
		  .setTitle(`Logs Unmute:`)
		  .addField("Salon", `${message.channel.name}`)
		  .addField("Salon ID", `${message.channel.id}`)
		  .addField("Raison", `${reason}`)
		  .setTimestamp()
		  .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);

		  if (target.roles.has(muteRole.id)) {
			target.removeRole(muteRole)
				target.send(embed2);
				const LogsChannel = message.guild.channels.find(channel => channel.name === "📄logs");
            			const LogsChannelID = message.guild.channels.get(settings.logsChannelID)
            				if (LogsChannel) {
                				LogsChannel.send(embed4)
            				}
            				else if(!LogsChannel) {
            					if (!LogsChannelID) return message.reply("Impossible de trouver le salon Logs !");
                					LogsChannelID.send(embed4)
            				}
				console.log(`${message.author.username}` + " a unmute " + `${target.user.username}` + " car: " + `${reason}`)
			} else {
				message.channel.send(target + ` n'as pas était mute !`);
			  }
    },
};