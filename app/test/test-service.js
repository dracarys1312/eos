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
    //TODO
};

module.exports = TestService;