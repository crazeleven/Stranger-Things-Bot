let coma = "```"
let coma2 = "`"

module.exports = {
	name: 'say-code-block',
    description: `${coma2}Commande permettant de faire parler le bot avec le markdown${coma2} ${coma}Code Block${coma}`,
    aliases: ['dire-code-block'],
	usage: '[message]',
	cooldown: 5,
    async execute(client, message, args, settings) {
        const sayMessage = args.join(` `);
        if(!sayMessage) return message.reply("Veuillez spécifiez du texte")
        message.delete().catch();
        message.channel.send("```\n" + `${sayMessage}` + "\n```" + `\nMessage de ${message.author}`);
    },
};