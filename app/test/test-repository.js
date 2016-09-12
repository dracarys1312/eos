var TestRepository = function (testCollection) {
    this.testCollection = testCollection;
};

TestRepository.prototype.getTest = function () {
    return this.testCollection.find({}).limit(1).next().then(function (result) {
        return result;
    })
};

module.exports = TestRepository;