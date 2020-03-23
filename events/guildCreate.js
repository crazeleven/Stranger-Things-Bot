const Discord = require('discord.js');
let coma = "`"

module.exports = async (client, guild) => {
  const settings = await client.getGuild(guild)
  const { DEFAULTSETTINGS: defaults } = require("../config");
  client.user.setActivity(`Mon prefix est ${defaults.prefix} | ${client.guilds.size} Serveurs`, {type: "WATCHING"});
  console.log(`Nouveau serveur rejoint ${guild.name} (id: ${guild.id}). Ce serveur a ${guild.memberCount} membres !`);
  const newGuild = {
    guildID: guild.id,
    guildName: guild.name
  };

  await client.createGuild(newGuild);

    const settingsguild = await client.getGuild(guild)
    let region = {
      "brazil": `:flag_br: ${coma}Brésil${coma}`,
      "southafrica": `:flag_za: ${coma}Afrique du Sud${coma}`,
      "eu-central": `:flag_eu: ${coma}Europe Central${coma}`,
      "europe": `:flag_eu: ${coma}Europe${coma}`,
      "russia": `:flag_ru: ${coma}Russie${coma}`,
      "singapore": `:flag_sg: ${coma}Singapour${coma}`,
      "us-central": `:flag_us: ${coma}États-Unis Central${coma}`,
      "sydney": `:flag_au: ${coma}Sydney${coma}`,
      "japan": `:flag_jp: ${coma}Japon${coma}`,
      "us-east": `:flag_us: ${coma}Est des États-Unis${coma}`,
      "us-south": `:flag_us: ${coma}Sud des États-Unis${coma}`,
      "us-west": `:flag_us: ${coma}Ouest des États-Unis${coma}`,
      "eu-west": `:flag_eu: ${coma}Europe de l'Ouest${coma}`,
      "vip-us-east": `:flag_us: ${coma}VIP U.S. East ?${coma}`,
      "london": `:flag_gb: ${coma}Londres${coma}`,
      "india": `:flag_in: ${coma}Inde${coma}`,
      "amsterdam": `:flag_nl: ${coma}Amsterdam${coma}`,
      "hongkong": `:flag_hk: ${coma}Hong Kong${coma}`
    };
    let online = guild.members.filter(member => member.user.presence.status !== 'offline');
    let verifLevels = ["Aucun", "Faible", "Moyen", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    const embed = new Discord.RichEmbed()
            .setColor(`${settings.colorEmbed}`)
            .setTitle('Logs Bots ajouter sur un serveur')
            .addField("🌍 • __Générale__", `Nom : ${coma}${guild.name}${coma}\nID : ${coma}${guild.id}${coma}\nRégion : ${region[guild.region]}\nPropriétaire : ${guild.owner}`, true)
            .addField("📋 • __Statistiques__", `Salons : ${coma}${guild.channels.size}${coma}\nRôles : ${coma}${guild.roles.size}${coma}\nTotal de membres : ${coma}${guild.memberCount - guild.members.filter(m => m.user.bot).size}${coma}\nBots : ${coma}${guild.members.filter(m => m.user.bot).size}${coma}\nEn ligne : ${coma}${online.size}${coma}`, true)
            .addField("🛡️ • __Modération__", `Niveaux de vérification : ${coma}${verifLevels[guild.verificationLevel]}${coma}`, true)
            .addField(`👥 • __Server invite__`, `${settingsguild.serverInvite}`, true)
            .setTimestamp()
            .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
                client.guilds.forEach(async guild => {
                  const findchannel = client.guilds.get(guild.id).channels.find(x => x.name == "📄logs");
                  const everyoneRole = client.guilds.get(guild.id).roles.find(x => x.name === '@everyone');
                  const logs_name = "📄logs";
                  if (!findchannel) {
                      guild.createChannel(logs_name, 'text')
                      .then(r => {
                      r.overwritePermissions(client.user.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true });
                      r.overwritePermissions(everyoneRole, { SEND_MESSAGES: false, VIEW_CHANNEL: false });
                      r.send(`>>> **IMPORTANT** ne jamais supprimer ou renommer ce salon !\nSi **${client.user}** ne détecte pas un salon s'appelant ${coma}${logs_name}${coma} alors il créera un nouveau salon s'appelant ${coma}${logs_name}${coma} !`);
                      r.send(embed)
                      })
                  }
                })
                await client.channels.findAll('name', '📄logs').map(channel => channel.send({embed}))
};