let coma = "```"
let coma2 = "`"
let texteexemple = "js\n// Code Color:\nmessage.channel.send('Ping...').then(m => {\nlet ping = m.createdTimestamp - message.createdTimestamp\nm.edit(`<@${message.author.id}> :ping_pong: Pong !\nTemps de latence avec le serveur: \`${ping}\`, Temps de latence avec l'API de Discord: \`${Math.round(client.ping)}\``)})\n// Code source de la commande Ping"

module.exports = {
	name: 'say-code-color',
    description: `${coma2}Commande permettant de faire parler le bot avec le markdown${coma2}\n${coma}${texteexemple}${coma}`,
    aliases: ['dire-code-color'],
	usage: '[Js ou autre langage]\n[Votre code en Js ou autre langage]',
	cooldown: 5,
    async execute(client, message, args, settings) {
        const sayColor = args.slice(0).join(' ');
        const sayMessage = args.slice(1).join(' ');
        if(!sayMessage) return message.reply("Veuillez spécifiez du texte")
        message.delete().catch();
        message.channel.send("```" + `${sayColor}` + "\n" + `${sayMessage}` +"\n```" + `\nMessage de ${message.author}`);
    },
};