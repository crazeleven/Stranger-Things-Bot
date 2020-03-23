const Discord = require('discord.js');

module.exports = {
	name: 'ban',
	description: `Commande permettant de bannir un membre.`,
	usage: '[@Utilisateur] [Raison]',
	cooldown: 5,
    async execute(client, message, args, settings) {
      if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Désolé, Vous n'avez pas les permissions !");
    
          let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
          let reason = args.slice(1).join(' ');
    
          if(!target) return message.reply("S'il vous plait mentionné un membre valide !");
    
          if(!target.bannable) return message.reply("Je ne peut pas bannir ce membre !\nai-je les permissions pour bannir des membres ?");
    
          if(!reason) reason = "Aucune Raison";
    
          const embed_ban_message = new Discord.RichEmbed()
              .setColor(`${settings.colorembed}`)
              .setAuthor(target.user.tag, target.user.diplayAvatarURL || "")
              .setTitle('Vous avez était bannie !')
              .addField("Auteur", `${message.author}`)
              .addField("Auteur ID", `${message.author.id}`)
              .addField("Serveur", `${message.guild.name}`)
              .addField("Serveur ID", `${message.guild.id}`)
              .addField("Salon", `${message.channel.name}`)
              .addField("Salon ID", `${message.channel.id}`)
              .addField("Raison", `${reason}`)
              .setTimestamp()
              .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
    
          target.send(embed_ban_message);
          console.log(`${message.author.tag}` + " a bannie " + `${target.user.username}` + " car: " + `${reason}`)
          setTimeout(function(){ 
            target.ban(reason)
        }, 1000);
    },
};