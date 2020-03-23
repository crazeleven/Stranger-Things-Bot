let coma = "`"

module.exports = {
	name: 'say-underline',
    description: `${coma}Commande permettant de faire parler le bot avec le markdown${coma} __Souligner__`,
    aliases: ['dire-souligner'],
	usage: '[message]',
	cooldown: 5,
    async execute(client, message, args, settings) {
        const sayMessage = args.join(` `);
        if(!sayMessage) return message.reply("Veuillez spécifiez du texte")
        message.delete().catch();
        message.channel.send("__" + `${sayMessage}` + "__" + `\nMessage de ${message.author}`);
    },
};