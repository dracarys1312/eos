var Test            = require('./test');
var SectionFactory  = require('./section/section-factory');

var TestFactory = function () {

};

TestFactory.prototype.make = function (raw) {
    var sectionFactory = new SectionFactory();

    var test = new Test();
    return test.$setId(raw.id)
        .$setContent(raw.content)
        .$setSections(sectionFactory.makeListSection(raw.sections));
};

module.exports = TestFactory;