const lastChar = (str) => str.split('').reverse().join(',').replace(',', '')[str.length === str.length + 1 ? 1 : 0];
const emojiList = ['✅','❎'];
const emojiLetterList = ['🇦','🇧','🇨','🇩','🇪','🇫','🇬','🇭','🇮','🇯','🇰','🇱','🇲','🇳','🇴','🇵','🇶','🇷','🇸','🇹','🇺','🇻','🇼','🇽','🇾','🇿'];
function sleep(ms) {
  return new Promise(resolve => {
      setTimeout(resolve, ms)
  })
}

module.exports = {
	name: 'poll-advanced',
    description: `Commande permettant de crée un sondage en répondant avec des options (Javascript;Python...).`,
    aliases: ['sondage-avancée'],
	usage: '[Le temps en minutes] [Les options en les séparant avec ;];[La question]\nRésultat: **+poll-advanced 5 Javascript:Python;Javascript ou Pyhton ?**',
	cooldown: 5,
    async execute(client, message, args, settings) {
        let splitCommand = message.content.split(" ");
                let time = parseFloat(splitCommand.slice(1).shift());
                let secondSection = (splitCommand.slice(2) + '').replace(/,/g, ' ');
                let secondSectionSplitted = secondSection.split(';');
                let question = secondSectionSplitted.slice(-1)[0]
                let options = secondSectionSplitted.slice(0, secondSectionSplitted.length-1)
                if (options.length > 20) {
                  options = options.slice(0, 20)
                }
                if (lastChar(question) != "?") {
                  question += "?"
                }
                if (!(isNaN(time)) && (time <= 720)) {
                  if (time >= 1) {
                    let optionText = ""
                    let count = 0;
                    for (var option in options) {
                      optionText += "\n"+emojiLetterList[count]+" - "+options[option]
                      count += 1
                    }
                    message.channel.send('`'+message.author.username+'`'+' a commencé le sondage `'+question+'` le sondage prend fin dans '+time+' minutes.'+optionText)
                      .then(async function (message) {
                        let reactionArray = [];
                        let count = 0;
                        for (var option in options) {
                          reactionArray[count] = await message.react(emojiLetterList[count]);
                          count += 1
                        }
            
                        if (time) {
                          message.channel.fetchMessage(message.id)
                            .then(async function (message) {
                              await sleep(time*60000)
                              var reactionCountsArray = [];                               
                              for (var i = 0; i < reactionArray.length; i++) {
                                reactionCountsArray[i] = message.reactions.get(emojiLetterList[i]).count-1;
                              }
            
                              var max = -Infinity, indexMax = [];
                              for(var i = 0; i < reactionCountsArray.length; ++i)
                                if(reactionCountsArray[i] > max) max = reactionCountsArray[i], indexMax = [i];
                                else if(reactionCountsArray[i] === max) indexMax.push(i);
            
                              var winnersText = "";
                              if (reactionCountsArray[indexMax[0]] == 0) {
                                winnersText = "Aucun Vote !"
                              } else {
                                for (var i = 0; i < indexMax.length; i++) {
                                  winnersText += emojiLetterList[indexMax[i]] + ": " + options[indexMax[i]] + " : " + reactionCountsArray[indexMax[i]] + " vote(s)\n";
                                }
                              }
                              message.channel.send("**Résultat pour `"+question+"`** \n" + winnersText);
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