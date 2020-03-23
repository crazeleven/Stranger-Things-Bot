const config = require("../config.js");

module.exports = {
	name: 'role-owner',
	description: `Commande permettant d'assigner un rôle au créateur du bot.`,
	aliases: ['role-bot'],
	usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
        if(message.member.id === config.OWNERID) {
            let ownerRole = message.guild.roles.find(x => x.name === `Créateur de ${client.user.username}`);
            if (!message.member.roles.has(ownerRole)) {
              if(!ownerRole) {
                try{
                    ownerRole = await message.guild.createRole({
                        name: `Créateur de ${client.user.username}`,
                        color: "#d300ff",
                        position: "6",
                        managed: true,
                        mentionable: true,
                        hoist: true,
                        permissions: ["PRIORITY_SPEAKER"]
                    })
                } catch(e) {
                    console.log(e.stack);
                }
            }
            message.delete().catch();
            message.member.addRole(ownerRole)
        } else {
            return;
        }
        }
    },
};