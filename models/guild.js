const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  prefix: {
    "type": String,
    "default": defaults.prefix
  },
  welcomeChannel: {
    "type": String,
    "default": defaults.welcomeChannel
  },
  serverInvite: {
    "type": String,
    "default": defaults.serverInvite
  },
  pictureWelcome: {
    "type": String,
    "default": defaults.pictureWelcome
  },
  pictureLeave: {
    "type": String,
    "default": defaults.pictureLeave
  },
  colorEmbed: {
    "type": String,
    "default": defaults.colorEmbed
  },
  langue: {
    "type": String,
    "default": defaults.langue
  },
  news_embed_description: {
    "type": String,
    "default": defaults.news_embed_description
  },
  news_embed_thumbnail: {
    "type": String,
    "default": defaults.news_embed_thumbnail
  },
  news_embed_picture: {
    "type": String,
    "default": defaults.news_embed_picture
  },
  dbinfo: {
    "type": String,
    "default": defaults.dbinfo
  },
});

module.exports = mongoose.model("Guild", guildSchema);