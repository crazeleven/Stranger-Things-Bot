module.exports = {
	name: 'bot-server-invite',
	description: `Commande permettant d'afficher l'invitation du serveur.`,
	aliases: ['invitation-serveur'],
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
        return message.reply(`Lien d'invitation du serveur: ${settings.serverInvite}`)
    },
};