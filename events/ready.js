module.exports = async (client) => {
  const wait = require('util').promisify(setTimeout);
  const { DEFAULTSETTINGS: defaults } = require("../config.js");
  const config = require('../config.js')
  wait(1000);
    let activities = [`Crée par ${config.CREATOR} !`, `${client.guilds.size} Serveurs !`, `${client.channels.size} Salons !`, `${client.users.size} Utilisateurs !`, `Faites ${defaults.prefix}help pour avoir la liste des commandes de ${client.user.username}`, `Besoin d'aide pour une commande ? Faites ${defaults.prefix}help <commande> pour avoir les informations d'une commande`, `Faites ${defaults.prefix}news pour avoir les actualités de ${client.user.username}`, `Partagez le serveur avec la commande ${defaults.prefix}bot-server-invite`, `Vous constatez un bug ? Dite-le nous en mentionnant @Développeur Bot`, `Vous voulez soutenir ${client.user.username} ? Faites ${defaults.prefix}bot-vote et votez pour ${client.user.username} !` ], i = 0;
    setInterval(() => client.user.setActivity(`Mon prefix est ${defaults.prefix} | ${activities[i++ % activities.length]}`, { type: "WATCHING" }), 15000)
		client.user.setStatus("online");
        console.log(`Connectée en tant que ${client.user.tag}`)
        console.log("Serveurs:")
        client.guilds.forEach( async (guild) => {
        console.log(" - " + guild.name)
        })
};