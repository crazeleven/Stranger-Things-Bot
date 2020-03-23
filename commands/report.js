const Discord = require('discord.js');

module.exports = {
	name: 'report',
	description: `Commande permettant de reporter un membre.`,
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    let reportRole = message.guild.roles.find(x => x.name === "Reported");
    let reason = args.slice(1).join(' ');
    
    if(!reportRole) {
        try{
            reportRole = await message.guild.createRole({
                name: "Reported",
                color: "#514f48",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(reportRole, {
                })
            })
        } catch(e) {
            console.log(e.stack);
        }
    }

	if(!target) return message.reply("S'il vous plait mentionné un membre valide !");
	if(!reason) reason = "Aucune Raison";

	const embed_report = new Discord.RichEmbed()
		  .setColor(`${settings.colorEmbed}`)
		  .setTitle('Logs Report')
		  .addField("Membre", `${target.user}`)
		  .addField("Membre ID", `${target.user.id}`)
		  .addField("Auteur", `${message.author}`)
		  .addField("Auteur ID", `${message.author.id}`)
		  .addField("Raison", `${reason}`)
		.setTimestamp()
		.setFooter('Report Release Version');

	const embed_report_message = new Discord.RichEmbed()
		  .setColor(`${settings.colorEmbed}`)
		  .setTitle('Vous avez était reporté !')
		  .addField("Auteur", `${message.author}`)
		  .addField("Auteur ID", `${message.author.id}`)
		  .addField("Serveur", `${message.guild.name}`)
		  .addField("Serveur ID", `${message.guild.id}`)
		  .addField("Salon", `${message.channel.name}`)
		  .addField("Salon ID", `${message.channel.id}`)
		  .addField("Raison", `${reason}`)
		  .setTimestamp()
		  .setFooter('Report Release Version');

            target.addRole(reportRole)
            if (settings.logs === true) {
	        const LogsChannel = message.guild.channels.find(channel => channel.name === "📄logs");
            const LogsChannelID = message.guild.channels.get(settings.logsChannelID)
            if (LogsChannel) {
            LogsChannel.send(embed_report)
            }
            else if(!LogsChannel) {
            if (!LogsChannelID) return message.reply("Impossible de trouver le salon Logs !");
            LogsChannelID.send(embed_report)
            }
        }
	message.channel.send(`Signalement effectué ${message.author} !`);
	target.send(embed_report_message);
    console.log(`${message.author.username}` + " a reporté " + `${target.user.username}` + " car: " + `${reason}`)
    },
};