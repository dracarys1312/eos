var Part = require('./part');

var PartFactory = function () {

};

PartFactory.prototype.make = function (raw) {
    var part = new Part();
    
    return part.$setPurpose(raw.purpose)
        .$setContent(raw.content)
        .$setQuestions(raw.questions);
};

module.exports = PartFactory;