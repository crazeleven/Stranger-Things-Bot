module.exports = {
	name: 'add',
	description: `Commande permettant de simuler l'ajout du bot sur un serveur.`,
	aliases: ['ajouter'],
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return undefined;
        client.emit('guildCreate', message.guild);
    },
};