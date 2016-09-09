var PartRepository = function (partCollection) {
    this.partCollection = partCollection;
};

PartRepository.prototype.getPart = function () {
    return this.partCollection.find({}).limit(1).next().then(function (result) {
        return result;
    })
};

module.exports = PartRepository;