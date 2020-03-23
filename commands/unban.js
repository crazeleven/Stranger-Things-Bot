const Discord = require('discord.js');

module.exports = {
	name: 'unban',
	description: `Commande permettant de débannir un membre.`,
	usage: '[ID de l\'utilisateur] [Raison]',
	cooldown: 5,
    async execute(client, message, args, settings) {
      if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Désolé, Vous n'avez pas les permissions !");
	    let target = args[0];
      if (!target) return message.reply("Vous devez spécifier l'ID de l'utilisateur !")

        message.guild.unban(target).catch(e =>{
            if(e){
              return message.channel.send(`${client.users.get(`${args[0]}`).username} n'est pas bannie`);
            } else {
                return message.channel.send(`${client.users.get(`${args[0]}`).username} n'est pas sur le serveur`);
            }
        })
        console.log(`${message.author.username}` + " a débannie " + `${target.user.username}` + " car: " + `${reason}`)
    },
};