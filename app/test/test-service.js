var _ = require('lodash');

var TestService = function (testRepository, testFactory) {
    this.testRepository = testRepository;
    this.testFactory    = testFactory;
};

TestService.prototype.getTest = function (testNo) {
    var testFactory = this.testFactory;
    return this.testRepository.getTest(testNo).then(function (test) {
        return testFactory.make(test);
    });
};

TestService.prototype.answer = function (answer) {
    var self = this;
    var questions = null;
    var correctCount = 0;
    var totalQuestionCount = 0;

    var userAnswer = this.questionsFactory(answer);
    return this.getTest(answer.id).then(function (test) {
        questions = self.questionsFactory(test);
        totalQuestionCount = questions.length;

        correctCount = self.checkAnswer(questions, userAnswer);

        return correctCount + "/" + totalQuestionCount;
    })
};

TestService.prototype.questionsFactory = function (test) {
    var questions = [];
    test.sections.forEach(function (section) {
        section.parts.forEach(function (part) {
            part.questions.forEach(function (question) {
                questions.push(question);
            })
        })
    });
    return questions;
};

TestService.prototype.checkAnswer = function (questions, answers) {
    var correctCount = 0;
    var self = this;
    questions.forEach(function (question) {
        var correct = _.find(answers, function (answer) {
            return self.compareAnswer(answer, question);
        });

        if (correct) {
            correctCount ++;
        }
    });

    return correctCount;
};

TestService.prototype.compareAnswer = function (answer, correctAnswer) {
    if (correctAnswer.id == answer.id && correctAnswer.test == answer.test && correctAnswer.section == answer.section && correctAnswer.part == answer.part) {
        return _.isEqual(correctAnswer.correctAnswers, answer.correctAnswers);
    }
};

module.exports = TestService;