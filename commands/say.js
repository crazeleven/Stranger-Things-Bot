module.exports = {
	name: 'say',
    description: `Commande permettant de faire parler le bot.`,
    aliases: 'dire',
	usage: '[message]',
	cooldown: 5,
    async execute(client, message, args, settings) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Désolé, Vous n'avez pas les permissions !");
    const sayMessage = args.join(` `);
    if(!sayMessage) return message.reply("Veuillez spécifiez du texte")
    message.delete().catch();
    message.channel.send(sayMessage + `\nMessage de ${message.author}`);
    },
};