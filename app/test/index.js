var TestService     = require('./test-service');
var TestRepository  = require('./test-repository');
var TestFactory     = require('./test-factory');

module.exports = function (request, response, next) {
    var testRepo = new TestRepository(
        request.app.get('mongo.connection').collection('test')
    );

    request.app.testService = new TestService(
        testRepo,
        new TestFactory()
    );

    next();
};