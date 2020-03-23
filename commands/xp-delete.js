const Discord = require('discord.js')
const dl = require('discord-leveling');

module.exports = {
	name: 'xp-delete',
    description: `Commande permettant de supprimer un membre de la base de donnée`,
	usage: '[@mentions]',
	cooldown: 5,
    async execute(client, message, args, settings) {
    var user = message.mentions.users.first()
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Désolé, vous n'avez pas les permissions !`);
    if (!user) return message.reply(`S'il vous plait mentionné un membre valide qui se trouve dans la base de donnée !`)
    var output = await dl.Delete(user.id)
    if (output.deleted == true) return message.reply(`<@${user.id}> a bien était éffacé de la base de donnée`)
    message.reply(`Erreur: <@${user.id}> ne se trouve pas dans la base de donnée.`)
    },
};