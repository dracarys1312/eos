const MongoClient = require('mongodb').MongoClient;

module.exports = function (app) {

    app.use(function (request, response, next) {
        MongoClient.connect('mongodb://admin:admin@ds137267.mlab.com:37267/quizzes', function (error, connection) {
            if (error) {
                return next(error);
            }
            app.set('mongo.connection', connection);
            return next();
        });
    });
};
