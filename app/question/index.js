var QuestionService = require('./question-service');
var QuestionRepository = require('./question-repository');
var PartFactory = require('./part-factory');

module.exports = function (request, response, next) {
    var questionRepo = new QuestionRepository(request.app.get('mongo.connection').collection('question'), new PartFactory());
    request.app.questionService = new QuestionService(questionRepo);

    next();
};