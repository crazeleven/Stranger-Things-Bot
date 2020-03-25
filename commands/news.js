let coma = "`"

module.exports = {
	name: 'news',
	description: `Commande permettant de recevoir des actualités de DiscordBot.Js.`,
	aliases: ['nouvelles'],
	usage: '[#salon, ID ou rien pour crée le salon actualités-discordbotjs]',
	cooldown: 5,
    async execute(client, message, args, settings) {
        const channelexistname = message.guild.channels.find(x => x.name === "actualités-discordbotjs" || "🔔actualités-stranger-things-bot")
        const everyoneRole = client.guilds.get(message.guild.id).roles.find(x => x.name === '@everyone');
        const news_name = "🔔actualités-stranger-things-bot";
        if(channelexistname) {
            return message.reply(`Le salon existe dejà (${channelexistname}) !`)
        } else if(!channelexistname) {
        message.guild.createChannel(news_name, 'text')
        .then(r => {
        r.overwritePermissions(client.user.id, { SEND_MESSAGES: true });
        r.overwritePermissions(everyoneRole, { SEND_MESSAGES: false });
        r.send(`>>> **IMPORTANT** ne jamais supprimer ou renommer ce salon !\nSi **${client.user}** ne détecte pas un salon s'appelant ${coma}${news_name}${coma} alors il créera un nouveau salon s'appelant ${coma}${news_name}${coma} !`)
        })
    }
    },
};
