var QuestionRepository = require('./question-repository');

module.exports = function (request, response, next) {
    request.app.questionRepo = new QuestionRepository(request.app.get('mongo.connection').collection('question'));

    next();
};