const Discord = require('discord.js')
const dl = require('discord-leveling');

module.exports = {
	name: 'xp-leaderboard',
    description: `Commande permettant d'afficher le classement d'un/des membre(s)`,
	usage: '[@mentionso rien]',
	cooldown: 5,
    async execute(client, message, args, settings) {
        if (message.mentions.users.first()) {
            var output = await dl.Leaderboard({
                search: message.mentions.users.first().id
              })
            const embedxpstats1 = new Discord.RichEmbed()
                .setColor(`${settings.colorEmbed}`)
                .setAuthor(message.author.tag, message.author.avatarURL || "")
                .setTitle('Xp Stats')
                .setDescription(`${message.mentions.users.first()}`)
                .addField(`Classement`, `${output.placement}`,)
                .addField(`Niveaux`, `${output1.level}`)
                .addField(`Xp`, `${output1.xp}`)
                .setTimestamp()
                .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
            message.channel.send(embedxpstats1)
          } else {
            dl.Leaderboard({
              limit: 10
            }).then(async users => {
              if (users[0]) var firstplace = await client.fetchUser(users[0].userid)
              if (users[1]) var secondplace = await client.fetchUser(users[1].userid)
              if (users[2]) var thirdplace = await client.fetchUser(users[2].userid)
              if (users[3]) var thirdplace = await client.fetchUser(users[3].userid)
              if (users[4]) var thirdplace = await client.fetchUser(users[4].userid)
              if (users[5]) var thirdplace = await client.fetchUser(users[5].userid)
              if (users[6]) var thirdplace = await client.fetchUser(users[6].userid)
              if (users[7]) var thirdplace = await client.fetchUser(users[7].userid)
              if (users[8]) var thirdplace = await client.fetchUser(users[8].userid)
              if (users[9]) var thirdplace = await client.fetchUser(users[9].userid)
              const embedxpstats2 = new Discord.RichEmbed()
                .setColor(`${settings.colorEmbed}`)
                .setAuthor(message.author.tag, message.author.avatarURL || "")
                .setTitle('Xp Stats')
                .setDescription(`Classement`)
                .addField(`#1 - ${firstplace && firstplace.tag || 'Personne'}`, `Niveaux ${users[0] && users[0].level || 'Aucun'}\nXp ${users[0] && users[0].xp || 'Aucun'}`)
                .addField(`#2 - ${secondplace && secondplace.tag || 'Personne'}`, `Niveaux ${users[1] && users[1].level || 'Aucun'}\nXp ${users[1] && users[1].xp || 'Aucun'}`)
                .addField(`#3 - ${thirdplace && thirdplace.tag || 'Personne'}`, `Niveaux ${users[2] && users[2].level || 'Aucun'}\nXp ${users[2] && users[2].xp || 'Aucun'}`)
                .addField(`#4 - ${thirdplace && thirdplace.tag || 'Personne'}`, `Niveaux ${users[3] && users[3].level || 'Aucun'}\nXp ${users[3] && users[3].xp || 'Aucun'}`)
                .addField(`#5 - ${thirdplace && thirdplace.tag || 'Personne'}`, `Niveaux ${users[4] && users[4].level || 'Aucun'}\nXp ${users[4] && users[4].xp || 'Aucun'}`)
                .addField(`#6 - ${thirdplace && thirdplace.tag || 'Personne'}`, `Niveaux ${users[5] && users[5].level || 'Aucun'}\nXp ${users[5] && users[5].xp || 'Aucun'}`)
                .addField(`#7 - ${thirdplace && thirdplace.tag || 'Personne'}`, `Niveaux ${users[6] && users[6].level || 'Aucun'}\nXp ${users[6] && users[6].xp || 'Aucun'}`)
                .addField(`#8 - ${thirdplace && thirdplace.tag || 'Personne'}`, `Niveaux ${users[7] && users[7].level || 'Aucun'}\nXp ${users[7] && users[7].xp || 'Aucun'}`)
                .addField(`#9 - ${thirdplace && thirdplace.tag || 'Personne'}`, `Niveaux ${users[8] && users[8].level || 'Aucun'}\nXp ${users[8] && users[8].xp || 'Aucun'}`)
                .addField(`#10 - ${thirdplace && thirdplace.tag || 'Personne'}`, `Niveaux ${users[9] && users[9].level || 'Aucun'}\nXp ${users[9] && users[9].xp || 'Aucun'}`)
                .setTimestamp()
                .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
            message.channel.send(embedxpstats2)
            })
          }
    },
};