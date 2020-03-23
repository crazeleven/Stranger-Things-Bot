module.exports = {
	name: 'server-invite',
	description: `Commande permettant de générer un lien d'invitation du serveur, Cette commande est maintenant destiner pour faire de la pub pour vos serveurs !`,
	aliases: ['invite-serveur'],
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
      if (!message.member.hasPermission('CREATE_INSTANT_INVITE')) return message.reply("Désolé, Vous n'avez pas les permissions !");
const invitation = await message.channel.createInvite({
    maxAge: 0,
    maxUses: 0
})
await client.updateGuild(message.guild, { serverInvite: invitation });
message.channel.send(`Lien d'invitation: ${invitation}`);
console.log(`${message.guild.name} (${message.guild.id}) a crée une invitation ${invitation}`)
    },
};