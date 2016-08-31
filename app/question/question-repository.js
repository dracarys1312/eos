var PartRepository = function (partCollection) {
    this.partCollection = partCollection;
};

PartRepository.prototype.getPart = function () {
    return this.partCollection.find({}).toArray().then(function (result) {
        return result;
    })
};

module.exports = PartRepository;