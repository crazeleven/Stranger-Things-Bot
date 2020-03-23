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
  const name = member.displayName.length > 13 ? member.displayName.substring(0, 13) + "..." : member.displayName;
  const server = member.guild.name.length > 21 ? member.guild.name.substring(0, 21) + "..." : member.guild.name;
  const memberCount = member.guild.memberCount.length > 8 ? member.guild.memberCount.substring(0, 8) + "..." : member.guild.memberCount;
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext('2d');

  const background = await Canvas.loadImage(settings.pictureLeave);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '26px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${name}#${member.user.discriminator} a quitté\n${server}`, canvas.width / 2.5, canvas.height / 2.5);
    
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

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'leave-image.png');
    if(member.id === config.OWNERID) {
        channel.send(`Oh non :sob: ${member} Le créateur de ${client.user} a quitté ${member.guild.name} !`, attachment);
    } else {
        channel.send(attachment);
    }

  console.log(`${member.user.username}` + " a quitté " + `${member.guild.name}`)
};