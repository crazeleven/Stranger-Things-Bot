const { Client, Collection, Emoji, MessageReaction } = require("discord.js");
const { TOKEN } = require("./config");
const Discord = require('discord.js')
const config = require('./config.js')
const client = new Client({ disableEveryone: true });
const fs = require("fs");
require('discord-leveling'); // Ne pas supprimer !

require("./util/functions")(client);
client.mongoose = require("./util/mongoose");
client.commands = new Collection();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const evt = require(`./events/${file}`);
    const evtName = file.split(".")[0];
    console.log(`Loaded event '${evtName}'`);
    client.on(evtName, evt.bind(null, client));
  });
});

fs.readdir("./commands/", async (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const props = require(`./commands/${file}`);
    const cmdName = file.split(".")[0];
    console.log(`Loaded command '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
});

client.mongoose.init();
client.login(TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);

/*Reaction Role*/
function generateEmbedFields() {
  return config.roles.map((r, e) => {
      return {
          emoji: config.reactions[e],
          role: r
      };
  });
}

client.on("message", async (message) => {
    const settings = await client.getGuild(message.guild);
    if (message.content === `${settings.prefix}reaction-role`) {
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("Désolé, Vous n'avez pas les permissions !");
    if (message.author.bot) return;
    if (!message.guild) return;

        const roleEmbed = new Discord.RichEmbed()
            .setDescription("Réagissez aux émoticônes correspondant au rôle que vous souhaitez recevoir.\nSi vous souhaitez supprimer le rôle, supprimez simplement votre réaction !")
            .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);

        if (settings.colorEmbed) roleEmbed.setColor(settings.colorEmbed);

        const fields = generateEmbedFields();
        if (fields.length > 25) throw "Le nombre maximum de rôles pouvant être définis pour un embed est de 25!";

        for (const { emoji, role } of fields) {
            if (!message.guild.roles.find(r => r.name === role))
                throw `Le rôle '${role}' n'existe pas !`;

            const customEmote = client.emojis.find(e => e.name === emoji);
            
            if (!customEmote) roleEmbed.addField(emoji, role, true);
            else roleEmbed.addField(customEmote, role, true);
        }

        message.channel.send(roleEmbed).then(async m => {
            for (const r of config.reactions) {
                const emoji = r;
                const customCheck = client.emojis.find(e => e.name === emoji);
                
                if (!customCheck) await m.react(emoji);
                else await m.react(customCheck.id);
            }
        });
    }
});

const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

client.on('raw', async event => {
    if (!events.hasOwnProperty(event.t)) return;
    const { d: data } = event;
    const user = client.users.get(data.user_id);
    const channel = client.channels.get(data.channel_id);

    const message = await channel.fetchMessage(data.message_id);
    const member = message.guild.members.get(user.id);

    const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
    let reaction = message.reactions.get(emojiKey);

    if (!reaction) {
        const emoji = new Emoji(client.guilds.get(data.guild_id), data.emoji);
        reaction = new MessageReaction(message, emoji, 1, data.user_id === client.user.id);
    }

    const settings = await client.getGuild(message.guild)

    if(settings.setupserver = true) {
    const MemberRole = message.guild.roles.find(r => r.name === "Membres Vérifiés");
    const NotificationsRole = message.guild.roles.find(r => r.name === "Notifications");
    const BotRole = message.guild.roles.find(r => r.name === "Bot");
    const ModérateurRole = message.guild.roles.find(r => r.name === "Modérateur");
    const AdminRole = message.guild.roles.find(r => r.name === "Administrateur");
    if (event.t === "MESSAGE_REACTION_ADD") {
      if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
        member.addRole(MemberRole.id)
        console.log(`${member.user.tag} à accepté les règles de ${message.guild.name}`)
      }
    } else if (event.t === "MESSAGE_REACTION_REMOVE") {
      if (reaction.emoji.name === "✅" && user.id !== client.user.id) {
        member.removeRole(MemberRole.id)
        member.removeRole(NotificationsRole.id)
        member.removeRole(BotRole.id)
        member.removeRole(ModérateurRole.id)
        member.removeRole(AdminRole.id)
        console.log(`${member.user.tag} n'as pas accepté les règles de ${message.guild.name}`)
    }
    }
  }

    let embedFooterText;
    if (message.embeds[0]) embedFooterText = message.embeds[0].footer.text;
            const fields = message.embeds[0].fields; // des erreurs peuvent être commis par cette constante cela peut-être normale car d'autre fonctionnalités utilise les réactions mais cela n'arrête pas le bot !
            for (const { name, value } of fields) {
                if (member.id !== client.user.id) {
                    const guildRole = message.guild.roles.find(r => r.name === value);
                    if ((name === reaction.emoji.name) || (name === reaction.emoji.toString())) {
                        if (event.t === "MESSAGE_REACTION_ADD") {
                          member.addRole(guildRole.id);
                        }
                        else if (event.t === "MESSAGE_REACTION_REMOVE") {
                        member.removeRole(guildRole.id);
                        }
                    }
                }
            }
});
