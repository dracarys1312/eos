var PartRepository = function (partCollection, partFactory) {
    this.partCollection = partCollection;
    this.partFactory = partFactory;
};

PartRepository.prototype.getPart = function () {
    var partFactory = this.partFactory;

    return this.partCollection.find({}).toArray().then(function (result) {
        return partFactory.makeListPart(result);
    })
};

module.exports = PartRepository;