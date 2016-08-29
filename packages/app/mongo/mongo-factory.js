var MongoClient = require('mongodb').MongoClient;

module.exports = function (config, callback) {
    // var appEnv = config.configOrEnv(config.app.env);
    // var url    = config.configOrEnv(config.mongo[appEnv]);

    MongoClient.connect(url, callback);
};