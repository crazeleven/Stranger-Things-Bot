module.exports = {
	name: 'eval',
	description: `Commande permettant d'effectuez un code Javascript.`,
	usage: '[Code Javascript]',
	cooldown: 5,
    async execute(client, message, args, settings) {
      function clean(text) {
        if (typeof text === "string") 
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text;
      }
    
      if (message.author.id !== config.OWNERID) return message.reply("Désolé, Vous n'avez pas les permissions !");
      const code = args.join(" ");
      const evaled = eval(code);
      const cleanCode = await clean(evaled);
      message.channel.send(cleanCode, { code: "js" });
    },
};