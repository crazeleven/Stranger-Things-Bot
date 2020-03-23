module.exports = {
	name: 'bot-vote',
	description: `Commande permettant de voter pour Stranger Things Bot.`,
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
        return message.reply('Commande non disponible pour le moment !')
    },
};