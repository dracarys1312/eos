var _ = require('lodash');

var QuestionService = function (partRepository, partFactory) {
    this.partRepository = partRepository;
    this.partFactory    = partFactory;
};

QuestionService.prototype.getQuestion = function () {
    var partFactory = this.partFactory;
    return this.partRepository.getPart().then(function (part) {
        return partFactory.makeListPart(part);
    });
};

QuestionService.prototype.answer = function (answer) {
    var parts = [];

    this.partRepository.getPart().then(function (result) {
        parts = result;
        
        
    })
};

module.exports = QuestionService;