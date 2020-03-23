let coma = "`"

module.exports = {
	name: 'say-quotes',
    description: `${coma}Commande permettant de faire parler le bot avec le markdown${coma}\n> Citation`,
    aliases: ['dire-citation'],
	usage: '[message]',
	cooldown: 5,
    async execute(client, message, args, settings) {
        const sayMessage = args.join(` `);
        if(!sayMessage) return message.reply("Veuillez spécifiez du texte")
        message.delete().catch();
        message.channel.send(">>> " + `${sayMessage}` + `\nMessage de ${message.author}`);
    },
};