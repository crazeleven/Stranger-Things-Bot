const mongoose = require("mongoose");
const config = require('../config.js')
const uri = config.URLDB;

module.exports = {
    init: () => {
        const mongOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            useFindAndModify: false,
            poolSize: 10,
            bufferMaxEntries: 0,
            connectTimeoutMS: 10000,
            family: 4
        };

        mongoose.connect(uri, mongOptions);
        mongoose.Promise = global.Promise;

        mongoose.connection.on("connected", () => console.log("Mongoose connecté !"));
        mongoose.connection.on("disconnected", () => console.log("Mongoose déconnecté !"));
    }
};
