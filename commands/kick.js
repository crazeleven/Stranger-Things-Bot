const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	description: `Commande permettant de kicker un membre.`,
	usage: '[@Utilisateur] [Raison]',
	cooldown: 5,
    async execute(client, message, args, settings) {
if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("Désolé, Vous n'avez pas les permissions !");
        
              let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
              let reason = args.slice(1).join(' ');
        
              if(!target) return message.reply("S'il vous plait mentionné un membre valide !");
        
              if(!target.kickable) return message.reply("Je ne peut pas kicker ce membre !\nai-je les permissions pour kicker des membres ?");
        
              if(!reason) reason = "Aucune Raison";
        
              const embed_kick_message = new Discord.RichEmbed()
                  .setColor(`${settings.colorEmbed}`)
                  .setAuthor(target.user.tag, target.user.diplayAvatarURL || "")
                  .setTitle('Vous avez était kicker !')
                  .addField("Auteur", `${message.author}`)
                  .addField("Auteur ID", `${message.author.id}`)
                  .addField("Serveur", `${message.guild.name}`)
                  .addField("Serveur ID", `${message.guild.id}`)
                  .addField("Salon", `${message.channel.name}`)
                  .addField("Salon ID", `${message.channel.id}`)
                  .addField("Raison", `${reason}`)
                  .setTimestamp()
                  .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
        
              target.send(embed_kick_message);
              console.log(`${message.author.tag}` + " a kicker " + `${target.user.username}` + " car: " + `${reason}`)
              setTimeout(function(){ 
                target.kick(reason)
            }, 1000);
    },
};