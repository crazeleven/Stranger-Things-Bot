module.exports = {
	name: 'clear',
    description: `Commande permettant de supprimer des messsages.`,
    aliases: 'supprimer',
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Désolé, Vous n'avez pas les permissions !");

		const deleteCount = parseInt(args[0], 10);
		if(!deleteCount || deleteCount < 2 || deleteCount > 100)
		  return message.reply("S'il vous plait entrez le nombre de message que vous voulez supprimer entre 2 est 100 !");

		const fetched = await message.channel.fetchMessages({limit: deleteCount});
		message.channel.bulkDelete(fetched)
		  .catch(error => message.reply(`Je ne peut pas supprimer des messages car: ${error}`));
    },
};