module.exports = {
	name: 'rps',
	description: `Commande permettant de jouer aux chifoumi.`,
        aliases: 'chifoumi',
        usage: '',
	cooldown: 5,
    async execute(client, message, args, settings) {
        let replies = ['💎', '📰', '✂️'];
            let result = Math.floor((Math.random() * replies.length));
            message.reply(`Réagissez aux émoji :gem: ou :newspaper: ou :scissors: !`)
                message.react(`💎`)
                message.react(`📰`)
                message.react(`✂️`)
            message.awaitReactions((reaction, user) => user.id === message.author.id && (reaction.emoji.name === '💎' || reaction.emoji.name === '📰' || reaction.emoji.name === '✂️'),
                                { max: 1, time: 30000 }).then(collected => {
                                        if (collected.first().emoji.name === '💎') {
                                                if (replies[result] === '📰') return message.channel.send(`J'ai gagnés !`);
                                                else return message.channel.send('Tu as gagnés !');
                                        }
                                        if (collected.first().emoji.name === '📰') {
                                                if (replies[result] === '✂️') return message.channel.send(`J'ai gagnés !`);
                                                else return message.channel.send('Tu as gagnés !');
                                        }
                                        if (collected.first().emoji.name === '✂️') {
                                                if (replies[result] === '💎') return message.channel.send(`J'ai gagnés !`);
                                                else return message.channel.send('Tu as gagnés !');
                                        }
                                        }).catch(collected => {
                                            message.reply('Aucune réaction après 30 secondes, opération annulée');
                                    });
    },
};