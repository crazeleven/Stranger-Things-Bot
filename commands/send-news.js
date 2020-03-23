const Discord = require('discord.js');
const config = require("../config.js");
let coma = "`"

module.exports = {
	name: 'send-news',
	description: `Commande permettant d'envoyer un message sur tout les serveurs connecté au bot à l'aide d'un salon.`,
	usage: '',
	cooldown: 5,
    async execute(client, message) {
    const settings = await client.getGuild(message.guild)
    if (message.author.id !== config.OWNERID) return message.reply("Désolé, Vous n'avez pas les permissions !")
    if(!settings.news_embed_description && settings.news_embed_picture) return message.reply('Vous devez spécifiez au moins une description ou une image !')
            client.guilds.forEach(async guild => {
                const embed = new Discord.RichEmbed()
                    .setColor(`${settings.colorEmbed}`)
                    .setAuthor(message.author.tag, message.author.avatarURL || "")
                    .setTitle('Actualités DiscordBot.Js')
                    .setDescription(`${settings.news_embed_description || ""}`)
                    .setImage(`${settings.news_embed_picture || ""}`)
                    .setTimestamp()
                    .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
                const findchannel = client.guilds.get(guild.id).channels.find(x => x.name == "🔔actualités-discordbotjs");
                const everyoneRole = client.guilds.get(guild.id).roles.find(x => x.name === '@everyone');
                const news_name = "🔔actualités-discordbotjs";
                if (findchannel) {
                    findchannel.send(embed);
                } else if (!findchannel) {
                    guild.createChannel(news_name, 'text')
                    .then(r => {
                    r.overwritePermissions(client.user.id, { SEND_MESSAGES: true });
                    r.overwritePermissions(everyoneRole, { SEND_MESSAGES: false });
                    r.send(`>>> **IMPORTANT** ne jamais supprimer ou renommer ce salon !\nSi **${client.user}** ne détecte pas un salon s'appelant ${coma}${news_name}${coma} alors il créera un nouveau salon s'appelant ${coma}${news_name}${coma} !`);
                    r.send(embed);
                    })
                }
            })
    },
};