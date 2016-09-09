var QuestionRepository = function (partCollection) {
    this.partCollection = partCollection;
};

QuestionRepository.prototype.getQuestionsByPart = function (partNo) {
    return this.partCollection.find({
        part : partNo
    }).toArray().then(function (result) {
        return result;
    })
};

module.exports = QuestionRepository;