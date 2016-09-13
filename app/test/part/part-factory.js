var Part            = require('./part');
var QuestionFactory = require('./../../question/question-factory');

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
    console.log(raw);
    return part.$setId(raw.partId)
        .$setTestId(raw.testId)
        .$setSetionId(raw.sectionId)
        .$setPurpose(raw.purpose)
        .$setContent(raw.tent)
        .$setQuestions(questionFactory.makeListQuestion(raw.questions));
};

module.exports = PartFactory;