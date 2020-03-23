module.exports = {
	name: 'quit',
	description: `Commande permettant de simuler la sortie d'un membre sur un serveur.`,
	aliases: ['quitte'],
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return undefined;
            client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
    },
};