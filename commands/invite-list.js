module.exports = {
	name: 'invite-list',
	description: `Cette commande a été remplacé par [prefix]server-list.`,
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
                /*let embed = new Discord.RichEmbed()
                    message.channel.send(`**Toutes les invitations des serveurs utilisant DiscordBot.Js**`)
                    client.guilds.forEach((guild) => {
                    guild.fetchInvites()
                    .then(invites => {
                    embed.setColor(`${config.colorembed}`)
                    embed.setTitle(`${guild.name}`)
                    embed.setDescription(invites.map(invite => invite).join('\n'));
                    message.channel.send(embed)})
                    .catch(console.error);
                })
                */
            message.channel.send(`Cette commande a été remplacé par ${settings.prefix}server-invite !`)
    },
};