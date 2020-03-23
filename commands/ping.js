const Discord = require('discord.js');
let coma = '`'

module.exports = {
	name: 'ping',
	description: `Commande permettant d'afficher le ping.`,
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
            message.channel.send("Ping...").then(m => {
                let ping = m.createdTimestamp - message.createdTimestamp
                m.edit(`<@${message.author.id}> :ping_pong: Pong !\nTemps de latence avec le serveur: \`${ping}\`, Temps de latence avec l'API de Discord: \`${Math.round(client.ping)}\``)})
    },
};