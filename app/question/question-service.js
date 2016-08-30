var QuestionService = function (partRepository) {
    this.partRepository = partRepository;
};

QuestionService.prototype.getQuestion = function () {
    return this.partRepository.getPart().then(function (part) {
        return part;
    });
};

QuestionService.prototype.answer = function () {
    //TODO
};

module.exports = QuestionService;