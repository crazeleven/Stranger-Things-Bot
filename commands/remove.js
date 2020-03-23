module.exports = {
	name: 'remove',
	description: `Commande permettant de simuler l'enlèvement du bot sur un serveur.`,
	aliases: ['supprimer'],
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return undefined;
    client.emit('guildDelete', message.guild);
    },
};