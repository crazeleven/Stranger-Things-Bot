module.exports = {
	name: 'join',
	description: `Commande permettant de simuler l'arrivé d'un membre sur un serveur.`,
	aliases: ['rejoint'],
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return undefined;
    client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    },
};