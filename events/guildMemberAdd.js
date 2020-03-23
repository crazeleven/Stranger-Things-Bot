module.exports = async (client, member) => {
        const Discord = require('discord.js');
        const Canvas = require('canvas');
        const snekfetch = require('snekfetch');
        const config = require("../config.js");
        const settings = await client.getGuild(member.guild);
        let Long = require("long");
        const getDefaultChannel = (guild) => {
            if(guild.channels.has(guild.id)) return guild.channels.get(guild.id)
            const generalChannel = guild.channels.find(channel => channel.name === `${settings.welcomeChannel}`);
            if (generalChannel) return generalChannel;
            return guild.channels
             .filter(c => c.type === "text" &&
               c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
             .sort((a, b) => a.position - b.position ||
               Long.fromString(a.id).sub(Long.fromString(b.id)).toNumber())
             .first();
        }
        const channel = getDefaultChannel(member.guild)
        const name = member.displayName.length > 20 ? member.displayName.substring(0, 20) + "..." : member.displayName;
        const server = member.guild.name.length > 11 ? member.guild.name.substring(0, 11) + "..." : member.guild.name;
        const memberCount = member.guild.memberCount.length > 8 ? member.guild.memberCount.substring(0, 8) + "..." : member.guild.memberCount;
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
    
        const background = await Canvas.loadImage(settings.pictureWelcome);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
        ctx.font = '26px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`Bienvenue dans ${server},`, canvas.width / 2.5, canvas.height / 3.5);
    
        ctx.font = '26px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${name}#${member.user.discriminator}`, canvas.width / 2.5, canvas.height / 1.8);
        
        ctx.font = '26px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`On est ${memberCount} membres !`, canvas.width / 2.5, canvas.height / 1.2);
    
        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
    
        const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
        const avatar = await Canvas.loadImage(buffer);
        ctx.drawImage(avatar, 25, 25, 200, 200);
    
        const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
        
        var message_aléatoire = Math.round(Math.random()*30);
        if(message_aléatoire == 0){
            message_aléatoire = `Bienvenue ${member}. ${client.user} t'accueil avec enthousiasme !`;
        }
        if(message_aléatoire == 1){
            message_aléatoire = `Hello, mon chou ! ${member} est arrivé(e) !`;
        }
        if(message_aléatoire == 2){
            message_aléatoire = `${member} a rejoint le serveur. Restez un instant et écoutez-moi.`;
        }
        if(message_aléatoire == 3){
            message_aléatoire = `${member} vient de se glisser dans le serveur.`;
        }
        if(message_aléatoire == 4){
            message_aléatoire = `Je n'abandonnerai jamais ${member}. Je ne laisserai jamais tomber ${member}.`;
        }
        if(message_aléatoire == 5){
            message_aléatoire = `${member} a rejoint votre fine équipe.`;
        }
        if(message_aléatoire == 6){
            message_aléatoire = `${member} vient de rejoindre le serveur... enfin, je crois !`;
        }
        if(message_aléatoire == 7){
            message_aléatoire = `Bienvenue ${member}. Laissez vos armes près de la porte.`;
        }
        if(message_aléatoire == 8){
            message_aléatoire = `${member} vient d'arriver. Tenez ma bière.`;
        }
        if(message_aléatoire == 9){
            message_aléatoire = `Son altesse ${member} est arrivée !`;
        }
        if(message_aléatoire == 10){
            message_aléatoire = `J'me présente, je m'appelle ${member}.`;
        }
        if(message_aléatoire == 11){
            message_aléatoire = `${member} est arrivé(e). La fête est finie.`;
        }
        if(message_aléatoire == 12){
            message_aléatoire = `${member} a rejoint le serveur ! C'est super efficace !`;
        }
        if(message_aléatoire == 13){
            message_aléatoire = `C'est un oiseau ! C'est un avion ! Ha, non, c'est juste ${member}.`;
        }
        if(message_aléatoire == 14){
            message_aléatoire = `${member} vient d'arriver. Il est trop OP - nerf plz.`;
        }
        if(message_aléatoire == 15){
            message_aléatoire = `Oh mon dieu ! C'est ${member} ! Nous sommes sauvés !`;
        }
        if(message_aléatoire == 16){
            message_aléatoire = `Bienvenue, ${member}. On espère que vous avez apporté de la pizza.`;
        }
        if(message_aléatoire == 17){
            message_aléatoire = `${member} vient de rejoindre le serveur. Tout le monde, faites semblant d'être occupés !`;
        }
        if(message_aléatoire == 18){
            message_aléatoire = `${member} a bondi dans le serveur. Un vrai petit kangourou !`;
        }
        if(message_aléatoire == 19){
            message_aléatoire = `Un ${member} sauvage apparaît.`;
        }
        if(message_aléatoire == 20){
            message_aléatoire = `Joueur ${member} prêt.`;
        }
        if(message_aléatoire == 21){
            message_aléatoire = `Hé ! Écoutez ! ${member}. nous a rejoint !`;
        }
        if(message_aléatoire == 22){
            message_aléatoire = `${member} vient de rejoindre le serveur. Besoin de soins, s'il vous plaît !`;
        }
        if(message_aléatoire == 23){
            message_aléatoire = `Un ${member} est apparu dans le serveur.`;
        }
        if(message_aléatoire == 24){
            message_aléatoire = `${member} vient de prendre place dans le bus de combat.`;
        }
        if(message_aléatoire == 25){
            message_aléatoire = `Voici ${member} ! Loué soit le Soleil ! \[T]/`;
        }
        if(message_aléatoire == 26){
            message_aléatoire = `Tenez-vous bien. ${member} a rejoint le serveur.`;
        }
        if(message_aléatoire == 27){
            message_aléatoire = `C'est dangereux d'y aller seul, emmenez ${member} !`;
        }
        if(message_aléatoire == 28){
            message_aléatoire = `Bienvenue, ${member}. Nous vous attendions ( ͡° ͜ʖ ͡°)`;
        }
        if(message_aléatoire == 29){
            message_aléatoire = `Challenger en approche - ${member} est apparu(e) !`;
        }
        if(message_aléatoire == 30){
            message_aléatoire = `Où est ${member} ? Dans le serveur !`;
        }
        let message_bienvenue_aléatoire = message_aléatoire;
    
        if(member.id === config.OWNERID) {
            message_bienvenue_aléatoire = `Oh mon dieu ! ${member} Le créateur de ${client.user} a rejoint ${member.guild.name} !`;
        }
    
        channel.send(`${message_bienvenue_aléatoire}`, attachment);
        console.log(`${member.user.username}`, "est arrivés dans " + `${member.guild.name}`)
};