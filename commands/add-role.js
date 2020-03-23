module.exports = {
	name: 'add-role',
	description: `Commande permettant d'ajouter un rôle à un membre.`,
	aliases: ['ajout-role'],
	usage: '[@Utilisateur] [@rôle]',
	cooldown: 5,
    async execute(client, message, args, settings) {
    const role = message.mentions.roles.first() || message.guild.roles.get(args[0]);
    const member = message.guild.member(message.mentions.users.first());
    const botRolePosition = message.guild.member(client.user).highestRole.position;
    const rolePosition = role.position;
    const userRolePossition = member.highestRole.position;
    if (!member.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply("Désolé, Vous n'avez pas les permissions !");
    if (!member) return message.reply("Le membre mentionné n'existe pas sur le serveur !");
    if (message.mentions.users.size === 0) return message.reply("S'il vous plaît mentionné un membre !`");
    if (!role) return message.reply(`Le rôle ${name} n'existe pas sur le serveur`);
    if (message.member.roles.find(r => r.name === role)) return message.reply(`Le rôle ${name} est déjà attribbué à la personne mentionnné`);
    if (userRolePossition <= rolePosition && member.id !== message.guild.ownerID) return message.channel.send("Échec de l'ajout du rôle à l'utilisateur car votre rôle est inférieur au rôle spécifié.")
    if (botRolePosition <= rolePosition) return message.channel.send("Échec de l'ajout du rôle à l'utilisateur car mon rôle est inférieur au rôle spécifié.");
    member.addRole(role);
    if(message.mentions.users.first() === message.author) {message.channel.send(`**${message.author.username}**, Vous vous êtes ajoutez le rôle **${role}**.`);} else {
    message.channel.send(`**${message.author.username}**, Vous avez ajoutez le rôle **${role}** à **${message.mentions.users.first().username}**.`);}
    },
};