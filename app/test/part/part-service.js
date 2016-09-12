var _ = require('lodash');

var PartService = function (partRepository, partFactory, questionRepository) {
    this.partRepository = partRepository;
    this.partFactory    = partFactory;
    this.questionRepository = questionRepository;
};

PartService.prototype.getPart = function (partNo) {
    var self = this;

    var partFactory = this.partFactory;
    return this.partRepository.getPart(partNo).then(function (part) {
        // return partFactory.makeListPart(part);
        
        return self.questionRepository.getQuestionsByPart(part.no).then(function (questions) {
            part.questions = questions;

            return self.partFactory.make(part);
        })
    });
};

PartService.prototype.answer = function (answer) {
    var parts = [];

    this.partRepository.getPart().then(function (result) {
        parts = result;
        //TODO
    })
};

module.exports = PartService;