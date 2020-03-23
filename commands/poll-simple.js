const lastChar = (str) => str.split('').reverse().join(',').replace(',', '')[str.length === str.length + 1 ? 1 : 0];
const emojiList = ['✅','❎'];
const emojiLetterList = ['🇦','🇧','🇨','🇩','🇪','🇫','🇬','🇭','🇮','🇯','🇰','🇱','🇲','🇳','🇴','🇵','🇶','🇷','🇸','🇹','🇺','🇻','🇼','🇽','🇾','🇿'];
function sleep(ms) {
  return new Promise(resolve => {
      setTimeout(resolve, ms)
  })
}

module.exports = {
	name: 'poll-simple',
    description: `Commande permettant de crée un sondage en répondant avec ✅ ou ❎.`,
    aliases: ['sondage-simple'],
	usage: '[Le temps en minutes] [La question]',
	cooldown: 5,
    async execute(client, message, args, settings) {
        let splitCommand = message.content.split(" ");
        let time = parseFloat(splitCommand.slice(1).shift());
        let question = splitCommand.slice(2) + '';
        if (lastChar(question) != "?") {
          question += "?"
        }
        if (!(isNaN(time)) && (time <= 720)) {
          if (time >= 1) {
            message.channel.send('`'+message.author.username+'`'+' a commencé le sondage `'+question.replace(/,/g, ' ')+'` le sondage prend fin dans '+time+' minutes.')
              .then(async function (message) {
                let reactionArray = [];
                reactionArray[0] = await message.react(emojiList[0]);
                reactionArray[1] = await message.react(emojiList[1]);
    
                if (time) {
                  message.channel.fetchMessage(message.id)
                    .then(async function (message) {
                      await sleep(time*60000)
                      var reactionCountsArray = [];                               
                      for (var i = 0; i < reactionArray.length; i++) {
                        reactionCountsArray[i] = message.reactions.get(emojiList[i]).count-1;
                      }
    
                      var max = -Infinity, indexMax = [];
                      for(var i = 0; i < reactionCountsArray.length; ++i)
                        if(reactionCountsArray[i] > max) max = reactionCountsArray[i], indexMax = [i];
                        else if(reactionCountsArray[i] === max) indexMax.push(i);
    
                      var winnersText = "";
                      if (reactionCountsArray[indexMax[0]] == 0) {
                        winnersText = "Aucun vote !"
                      } else {
                        for (var i = 0; i < indexMax.length; i++) {
                          winnersText += emojiList[indexMax[i]] + " : " + reactionCountsArray[indexMax[i]] + " vote(s)\n";
                        }
                      }
                      message.channel.send("**Résultat pour `"+question.replace(/,/g, ' ')+"`** \n" + winnersText);
                    });
                }
              })
          } else {
            message.channel.send(`Impossible de commencer le sondage car le sondage ne peut pas durer moins d'une minute !`);
          }
        } else {
          message.channel.send(`Impossible de commencer le sondage car le sondage ne peut pas durer plus de 12 heure !`);
        }
    },
};