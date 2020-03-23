const Discord = require('discord.js')
const config = require('../config.js')

function generateEmbedFields() {
    return config.roles.map((r, e) => {
        return {
            emoji: config.reactions[e],
            role: r
        };
    });
}

module.exports = {
	name: 'setup-server',
    description: `Commande permettant de configurer un serveur.`,
    aliases: ['setup-serveur', 'serveur-setup', 'setup'],
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
    if (!message.member.hasPermission(["ADMINISTRATOR"]))return message.reply("Désolé, Vous n'avez pas les permissions !");
    message.reply("êtes vous sur de faire ça ?\nécrivez oui pour effectuez l'action, écrivez non pour annuler");
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
    collector.on('collect', message => {
    if (message.content === "oui" && message.member.hasPermission(["ADMINISTRATOR"])) {
    let AdminRole = message.guild.roles.find(r => r.name === "Administrateur");
    let ModoRole = message.guild.roles.find(r => r.name === "Modérateur");
    let NotifRole = message.guild.roles.find(r => r.name === "Notifications");
    let BotRole = message.guild.roles.find(r => r.name === "Bot");
    let MemberRole = message.guild.roles.find(r => r.name === "Membres Vérifiés");
    let GeneraleCategory = message.guild.channels.find(c => c.name === "👥Général");
    let AccueilChannelr = message.guild.channels.find(c => c.name === "🎉accueil");
    let AnnoncesChannel = message.guild.channels.find(c => c.name === "📢annonces");
    let ProjetPubChannel = message.guild.channels.find(c => c.name === "✅projet-pub");
    let PartenariatChannel = message.guild.channels.find(c => c.name === "🤝partenariat");
    let RolesChannel = message.guild.channels.find(c => c.name === "🔗rôles");
    let ReglesChannel = message.guild.channels.find(c => c.name === "⛔règles");
    let LogsChannelr = message.guild.channels.find(c => c.name === "📄logs");
    let SalonTextuelCategory = message.guild.channels.find(c => c.name === "💬Salons textuels");
    let GénéralChannel1 = message.guild.channels.find(c => c.name === "💬général");
    let BotCommandeChannel = message.guild.channels.find(c => c.name === "🤖bot-commande");
    let MédiaChannel1 = message.guild.channels.find(c => c.name === "📸médias");
    let MusiqueCategory = message.guild.channels.find(c => c.name === "🎶Musique");
    let MicroChannel1 = message.guild.channels.find(c => c.name === "💬sans-micro");
    let MusiqueChannel1 = message.guild.channels.find(c => c.name === "📻radio");
    let SalonVocauxCategory = message.guild.channels.find(c => c.name === "🔊Salons vocaux");
    let ChatVocalChannel1 = message.guild.channels.find(c => c.name === "🔊général #1");
    let ChatVocalChannel2 = message.guild.channels.find(c => c.name === "🔊général #2");
    let SalonStaffCategory = message.guild.channels.find(c => c.name === "🔧Salon Modération");
    let GénéralChannel = message.guild.channels.find(c => c.name === "💬général-modération");
    let MicroChannel2 = message.guild.channels.find(c => c.name === "💬sans-micro-modération");
    let MédiaChannel2 = message.guild.channels.find(c => c.name === "📸médias-modération");
    let BotCommandeStaffChannel = message.guild.channels.find(c => c.name === "🤖bot-commande-modération");
    let ChatVocalChannel = message.guild.channels.find(c => c.name === "🔊général modération");
    let MusiqueChannel2 = message.guild.channels.find(c => c.name === "📻radio-modération");   
    let AFKCategory = message.guild.channels.find(c => c.name === "💤AFK");
    let AFKChannel = message.guild.channels.find(c => c.name === "💤AFK💤");
    let NewsChannel = message.guild.channels.find(c => c.name === "🔔actualités-discordbotjs");

    if (!AdminRole) {
        try {
            AdminRole = message.guild.createRole({
                name: "Administrateur",
                color: "#FF0000",
                managed: true,
                mentionable: false,
                hoist: true,
                permissions: ["CREATE_INSTANT_INVITE","KICK_MEMBERS","BAN_MEMBERS","ADD_REACTIONS","VIEW_AUDIT_LOG",
                "VIEW_CHANNEL","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY",
                "MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD",
                "PRIORITY_SPEAKER","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_WEBHOOKS","MANAGE_EMOJIS"]
            })
        } catch (e) {
            console.log(e.stack);
        }
    }

        if (!ModoRole) {
            try {
                ModoRole = message.guild.createRole({
                    name: "Modérateur",
                    color: "#FF8C00",
                    managed: true,
                    mentionable: true,
                    hoist: true,
                    permissions: ["CREATE_INSTANT_INVITE","KICK_MEMBERS","BAN_MEMBERS","ADD_REACTIONS","VIEW_CHANNEL","SEND_MESSAGES"
                    ,"SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE"
                    ,"USE_EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","MOVE_MEMBERS","USE_VAD","PRIORITY_SPEAKER"
                    ,"CHANGE_NICKNAME","MANAGE_NICKNAMES"]
                })
            } catch (e) {
                console.log(e.stack);
            }
        }

                if (!NotifRole) {
                    try {
                        NotifRole = message.guild.createRole({
                            name: "Notifications",
                            color: "#1E90FF",
                            managed: true,
                            mentionable: true,
                            hoist: false,
                            permissions: ["ADD_REACTIONS","VIEW_CHANNEL","SEND_MESSAGES","EMBED_LINKS","READ_MESSAGE_HISTORY","CONNECT"
                            ,"SPEAK","USE_VAD","USE_EXTERNAL_EMOJIS","CHANGE_NICKNAME","ATTACH_FILES"]
                        })
                    } catch (e) {
                        console.log(e.stack);
                    }
                }

                    if (!BotRole) {
                        try {
                            BotRole = message.guild.createRole({
                                name: "Bot",
                                color: "#FFD700",
                                managed: true,
                                mentionable: false,
                                hoist: true,
                                permissions: ["ADMINISTRATOR","CREATE_INSTANT_INVITE","MANAGE_ROLES","MANAGE_CHANNELS","MANAGE_GUILD","KICK_MEMBERS","BAN_MEMBERS","ADD_REACTIONS","VIEW_AUDIT_LOG",
                                "VIEW_CHANNEL","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY",
                                "MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD",
                                "PRIORITY_SPEAKER","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_WEBHOOKS","MANAGE_EMOJIS"]
                            })
                        } catch (e) {
                            console.log(e.stack);
                        }
                    }

                    if (!MemberRole) {
                        try {
                            MemberRole = message.guild.createRole({
                                name: "Membres Vérifiés",
                                color: "#00ff05",
                                managed: true,
                                mentionable: true,
                                hoist: true,
                                permissions: ["ADD_REACTIONS","VIEW_CHANNEL","SEND_MESSAGES","EMBED_LINKS","READ_MESSAGE_HISTORY","CONNECT"
                                ,"SPEAK","USE_VAD","USE_EXTERNAL_EMOJIS","CHANGE_NICKNAME","ATTACH_FILES"]
                            })
                        } catch (e) {
                            console.log(e.stack);
                        }
                    }
                    setTimeout(async function () {
                    const embedregles = new Discord.RichEmbed()
                    .setColor(`${settings.colorEmbed}`)
                    .setTitle('Règles:')
                    .setDescription(`Aucune règles ont été définie`)
                    .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
                    config.roles = ["Notifications"],
                    config.reactions = ["🔔"]
                    const roleEmbed = new Discord.RichEmbed()
                    .setDescription("Réagissez aux émoticônes correspondant au rôle que vous souhaitez recevoir.\nSi vous souhaitez supprimer le rôle, supprimez simplement votre réaction !")
                    .setFooter(`${client.user.tag}`, client.user.displayAvatarURL);
                    if (settings.colorEmbed) roleEmbed.setColor(settings.colorEmbed);
                    const fields = generateEmbedFields();
                        if (fields.length > 25) throw "Le nombre maximum de rôles pouvant être définis pour un embed est de 25!";
                    for (const { emoji, role }
                        of fields) {
                        if (!message.guild.roles.find(r => r.name === role))
                            throw `Le rôle '${role}' n'existe pas !`;
                    const customEmote = client.emojis.find(e => e.name === emoji);
                    if (!customEmote) roleEmbed.addField(emoji, role, true);
                        else roleEmbed.addField(customEmote, role, true);
                    }
                    if (!GeneraleCategory) {
                    var name1 = "👥Général";
                    message.guild.createChannel(name1, "category").then(channel => {
                        channel.setPosition("0")
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!AccueilChannelr) {
                    var name2 = "🎉accueil";
                    message.guild.createChannel(name2, "text").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "👥Général" && c.type == "category");
                        channel.setParent(category.id);
                        channel.setTopic(`Ce salon est destiné à afficher les arrivés/départs des membres de ${message.guild.name}`);
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!AnnoncesChannel) {
                    var name3 = "📢annonces";
                    message.guild.createChannel(name3, "text").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "👥Général" && c.type == "category");
                        channel.setParent(category.id);
                        channel.setTopic(`Ce salon est destiné à informer les membres des actualités de ${message.guild.name}`);
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!ProjetPubChannel) {
                    var name4 = "✅projet-pub";
                    message.guild.createChannel(name4, "text").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "👥Général" && c.type == "category");
                        channel.setParent(category.id);
                        channel.setTopic("Ce salon est destiné à afficher les pubs de serveurs certifiés par l'équipe de modération");
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!PartenariatChannel) {
                        var name10 = "🤝partenariat";
                        message.guild.createChannel(name10, "text").then(channel => {
                            let category = message.guild.channels.find(c => c.name == "👥Général" && c.type == "category");
                            channel.setParent(category.id);
                            channel.setTopic(`Ce salon est destiné à afficher les partenaires de ${message.guild.name}`);
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                                CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                                SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                                SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            })
                        }
                    if (!RolesChannel) {
                    var name5 = "🔗rôles";
                    message.guild.createChannel(name5, "text").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "👥Général" && c.type == "category");
                        channel.setParent(category.id);
                        channel.setTopic("Ce salon est destiné à afficher les rôles qui peuvent être attribués aux membres");
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.send(roleEmbed).then(async m => {
                            for (const r of config.reactions) {
                                const emoji = r;
                                const customCheck = client.emojis.find(e => e.name === emoji);
            
                                if (!customCheck) await m.react(emoji);
                                else await m.react(customCheck.id);
                            }
                        });
                        })
                    }
                    if (!ReglesChannel) {
                    var name6 = "⛔règles";
                    message.guild.createChannel(name6, "text").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "👥Général" && c.type == "category");
                        channel.setParent(category.id);
                        channel.setTopic(`Ce salon est destiné à informer les membres des règles de ${message.guild.name}`);
                        channel.send(embedregles)
                        .then(async function (message) {
                            message.react("✅");
                        })
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: true, VIEW_CHANNEL: true, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!LogsChannelr) {
                    var name7 = "📄logs";
                    message.guild.createChannel(name7, "text").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "👥Général" && c.type == "category");
                        channel.setParent(category.id);
                        channel.setTopic(`Ce salon est destiné à afficher toutes les actions de ${message.guild.name}`);
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!NewsChannel) {
                        var name21 = `🔔actualités-discordbotjs`;
                        message.guild.createChannel(name21, "text").then(channel => {
                            let category = message.guild.channels.find(c => c.name == "👥Général" && c.type == "category");
                            channel.setParent(category.id);
                            channel.setTopic(`Ce salon est destiné à afficher les actualités de ${client.user.tag}`);
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                                CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                                SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                                SEND_MESSAGES: false, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            })
                        }
                    if (!SalonTextuelCategory) {
                    var name9 = "💬Salons textuels";
                    message.guild.createChannel(name9, "category").then(channel => {
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!GénéralChannel1) {
                    var name11 = "💬général";
                    message.guild.createChannel(name11, "text").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "💬Salons textuels" && c.type == "category");
                        channel.setParent(category.id);
                        channel.setTopic("Ce salon est destiné à discuter entre membres");
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!BotCommandeChannel) {
                        var name8 = "🤖bot-commande";
                        message.guild.createChannel(name8, "text").then(channel => {
                            let category = message.guild.channels.find(c => c.name == "💬Salons textuels" && c.type == "category");
                            channel.setParent(category.id);
                            channel.setTopic(`Ce salon est destiné à rentrer des commandes du bot ${client.user.tag}`);
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                                CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            })
                    }
                    if (!MédiaChannel1) {
                        var name22 = "📸médias";
                        message.guild.createChannel(name22, "text").then(channel => {
                            let category = message.guild.channels.find(c => c.name == "💬Salons textuels" && c.type == "category");
                            channel.setParent(category.id);
                            channel.setTopic("Ce salon est destiné à envoyer des images, vidéos, gif...");
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                                CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            })
                    }
                    if (!MusiqueCategory) {
                        var name23 = "🎶Musique";
                        message.guild.createChannel(name23, "category").then(channel => {
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                                CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            })
                    }
                    if (!MicroChannel1) {
                        var name24 = "💬sans-micro";
                        message.guild.createChannel(name24, "text").then(channel => {
                            let category = message.guild.channels.find(c => c.name == "🎶Musique" && c.type == "category");
                            channel.setParent(category.id);
                            channel.setTopic("Ce salon est destiné aux membres qui n'ont pas de micro et qui veulent parler à un membre en vocal");
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                                CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            })
                    }
                    if (!MusiqueChannel1) {
                        var name25 = "📻radio";
                        message.guild.createChannel(name25, "voice").then(channel => {
                            let category = message.guild.channels.find(c => c.name == "🎶Musique" && c.type == "category");
                            channel.setParent(category.id);
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                                CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            })
                    }
                    if (!SalonVocauxCategory) {
                    var name12 = "🔊Salons vocaux";
                    message.guild.createChannel(name12, "category").then(channel => {
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!ChatVocalChannel1) {
                    var name13 = "🔊général #1";
                    message.guild.createChannel(name13, "voice").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "🔊Salons vocaux" && c.type == "category");
                        channel.setParent(category.id);
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!ChatVocalChannel2) {
                    var name14 = "🔊général #2";
                    message.guild.createChannel(name14, "voice").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "🔊Salons vocaux" && c.type == "category");
                        channel.setParent(category.id);
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!SalonStaffCategory) {
                    var name15 = "🔧Salon Modération";
                    message.guild.createChannel(name15, "category").then(channel => {
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!GénéralChannel) {
                    var name16 = "💬général-modération";
                    message.guild.createChannel(name16, "text").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "🔧Salon Modération" && c.type == "category");
                        channel.setParent(category.id);
                        channel.setTopic("Ce salon est destiné à discuter entre membres de l'équipe de modération");
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!MicroChannel2) {
                        var name26 = "💬sans-micro-modération";
                        message.guild.createChannel(name26, "text").then(channel => {
                            let category = message.guild.channels.find(c => c.name == "🔧Salon Modération" && c.type == "category");
                            channel.setParent(category.id);
                            channel.setTopic("Ce salon est destiné aux membres de l'équipe de modération qui n'ont pas de micro et qui veulent parler à un membre de l'équipe de modération en vocal");
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                                CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                                SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                                SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            })
                    }
                    if (!MédiaChannel2) {
                        var name27 = "📸médias-modération";
                        message.guild.createChannel(name27, "text").then(channel => {
                            let category = message.guild.channels.find(c => c.name == "🔧Salon Modération" && c.type == "category");
                            channel.setParent(category.id);
                            channel.setTopic("Ce salon est destiné à envoyer des images, vidéos, gif...");
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                                CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                                SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                                SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            })
                    }
                    if (!BotCommandeStaffChannel) {
                    var name17 = "🤖bot-commande-modération";
                    message.guild.createChannel(name17, "text").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "🔧Salon Modération" && c.type == "category");
                        channel.setParent(category.id);
                        channel.setTopic(`Ce salon est destiné à rentrer des commandes du bot ${client.user.tag}`);
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!ChatVocalChannel) {
                    var name18 = "🔊général modération";
                    message.guild.createChannel(name18, "voice").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "🔧Salon Modération" && c.type == "category");
                        channel.setParent(category.id);
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                        })
                    }
                    if (!MusiqueChannel2) {
                        var name28 = "📻radio-modération";
                        message.guild.createChannel(name28, "voice").then(channel => {
                            let category = message.guild.channels.find(c => c.name == "🔧Salon Modération" && c.type == "category");
                            channel.setParent(category.id);
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                                CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                                SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                                SEND_MESSAGES: false, VIEW_CHANNEL: false, CONNECT: false, SPEAK: false})
                            channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                                SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: true});
                            })
                    }
                    if (!AFKCategory) {
                    var name19 = "💤AFK";
                    message.guild.createChannel(name19, "category").then(channel => {
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                        })
                    }
                    if (!AFKChannel) {
                    var name20 = "💤AFK💤";
                    message.guild.createChannel(name20, "voice").then(channel => {
                        let category = message.guild.channels.find(c => c.name == "💤AFK" && c.type == "category");
                        channel.setParent(category.id);
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
                            CONNECT: false, VIEW_CHANNEL: false, SEND_MESSAGES: false, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Administrateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Modérateur'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Notifications'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Membres Vérifiés'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false})
                        channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bot'), {
                            SEND_MESSAGES: true, VIEW_CHANNEL: true, CONNECT: true, SPEAK: false});
                        })
                    }
                    await client.updateGuild(message.guild, { setupserver: true });
                }, 3000);
            }
            if (message.content === "non" && message.member.hasPermission(["ADMINISTRATOR"])) return message.reply("L'action Setup Server a été annulé !");
        })
    },
};