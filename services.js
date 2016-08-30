const MongoClient = require('mongodb').MongoClient;

module.exports = function (app) {

    app.use(function (request, response, next) {
        MongoClient.connect('mongodb://localhost:27017/test', function (error, connection) {
            if (error) {
                return next(error);
            }
            app.set('mongo.connection', connection);
            return next();
        });
    });
};