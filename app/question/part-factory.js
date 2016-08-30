var Part = require('./part');
var QuestionFactory = require('./question-factory');

var PartFactory = function () {

};

PartFactory.prototype.makeListPart = function (raw) {
    var self = this;
    var parts = [];

    raw.forEach(function (part) {
        parts.push(self.make(part));
    });

    return parts;
};

PartFactory.prototype.make = function (raw) {
    var questionFactory = new QuestionFactory();

    var part = new Part();
// console.log(raw.questions);
    return part.$setPurpose(raw.purpose)
        .$setContent(raw.content)
        .$setQuestions(questionFactory.makeListQuestion(raw.questions));
};

module.exports = PartFactory;