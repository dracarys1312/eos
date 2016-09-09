var PartService     = require('./part-service');
var PartRepository  = require('./part-repository');
var PartFactory     = require('./part-factory');

module.exports = function (request, response, next) {
    var partRepo = new PartRepository(
        request.app.get('mongo.connection').collection('part')
    );

    request.app.partService = new PartService(
        partRepo, 
        new PartFactory(),
        request.app.questionRepo
    );

    next();
};