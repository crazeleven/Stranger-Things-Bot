let coma = "`"

module.exports = {
	name: 'logs',
	description: `Commande permettant de définir le salon Logs.`,
	usage: '[#salon, ID ou rien pour crée le salon 📄logs]',
	cooldown: 5,
    async execute(client, message, args, settings) {
    const channelexistname = message.guild.channels.find(x => x.name === "📄logs")
    const everyoneRole = client.guilds.get(message.guild.id).roles.find(x => x.name === '@everyone');
    const logs_name = "📄logs";
    const channelmention = message.mentions.channels.first();
    if (!message.member.hasPermission('VIEW_AUDIT_LOG')) return message.reply("Désolé, Vous n'avez pas les permissions !");
    if(channelmention) {
        message.reply(`Le salon Logs est maintenant ${channelmention}`);
    }
    if (!channelmention) {
    if(channelexistname) {
        return message.reply(`Le salon existe dejà (${channelexistname}) !`)
    } else if(!channelexistname) {
    message.guild.createChannel(logs_name, 'text')
    .then(r => {
    r.overwritePermissions(message.author.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true });
    r.overwritePermissions(client.user.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true });
    r.overwritePermissions(everyoneRole, { SEND_MESSAGES: false, VIEW_CHANNEL: false });
    r.send(`>>> **IMPORTANT** ne jamais supprimer ou renommer ce salon !\nSi **${client.user}** ne détecte pas un salon s'appelant ${coma}${logs_name}${coma} alors il créera un nouveau salon s'appelant ${coma}${logs_name}${coma} !`);
    })
    }
    }
    },
};