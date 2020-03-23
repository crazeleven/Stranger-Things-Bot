const mongoose = require("mongoose");
const { Guild } = require("../models/index");
const config = require('../config.js')

module.exports = client => {
  client.createGuild = async settings => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, settings);
    const createGuild = await new Guild(merged);
    createGuild.save().then(g => console.log(`New guild -> ${g.guildName}.`));
  };

  client.getGuild = async guild => {
    const data = await Guild.findOne({ guildID: guild.id });
    if (data) return data;
    const config = require('../config.js')
    return config.DEFAULTSETTINGS;
  };

  client.updateGuild = async (guild, settings) => {
    let data = await client.getGuild(guild);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };
};