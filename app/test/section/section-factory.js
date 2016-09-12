var Section     = require('./section');
var PartFactory = require('./../part/part-factory');

var SectionFactory = function () {

};

SectionFactory.prototype.makeListSection = function (raw) {
    var self = this;
    var sections = [];
    
    raw.forEach(function (rawSection) {
        sections.push(self.make(rawSection));
    });

    return sections;
};

SectionFactory.prototype.make = function (raw) {
    var partFactory = new PartFactory();

    var section = new Section();
    return section.$setId(raw.id)
        .$setTestId(raw.testId)
        .$setContent(raw.content)
        .$setParts(partFactory.makeListPart(raw.parts));
};

module.exports = SectionFactory;