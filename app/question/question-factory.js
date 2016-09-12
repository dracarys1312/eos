var Question = require('./question');

var QuestionFactory = function () {

};

//make list question for 1 part
QuestionFactory.prototype.makeListQuestion = function (raw) {
    var self = this;
    var questions = [];
    raw.forEach(function (question) {
        questions.push(self.make(question));
    });

    return questions;
};

//remoce correct answer from question
QuestionFactory.prototype.make = function (raw) {
    var question = new Question();
    return question.$setId(raw.questionId)
        .$setTestId(raw.test)
        .$setSectionId(raw.section)
        .$setPartId(raw.part)
        .$setAnswers(raw.answers)
        .$setContent(raw.content)
        .$setPurpose(raw.purpose)
        .$setType(raw.type)
        .$setCorrectAnswers(raw.correctAnswers);
};

module.exports = QuestionFactory;