let coma = "`"

module.exports = {
	name: 'say-spoiler',
    description: `${coma}Commande permettant de faire parler le bot avec le markdown${coma} ||Spoiler||`,
    aliases: ['dire-spoiler'],
	usage: '[message]',
	cooldown: 5,
    async execute(client, message, args, settings) {
        const sayMessage = args.join(` `);
        if(!sayMessage) return message.reply("Veuillez spécifiez du texte")
        message.delete().catch();
        message.channel.send("||" + `${sayMessage}` + "||" + `\nMessage de ${message.author}`);
    },
};