var Part            = require('./part');
var QuestionFactory = require('./../question/question-factory');

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
    return part.$setId(raw._id)
        .$setPurpose(raw.purpose)
        .$setNo(raw.no)
        .$setContent(raw.content)
        .$setQuestions(questionFactory.makeListQuestion(raw.questions));
};

module.exports = PartFactory;