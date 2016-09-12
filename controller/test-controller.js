exports.getTest = function (request, response, next) {
    request.app.testService.getTest(request.query.testNo).then(function (part) {
        response.json(part);
    }, function (error) {
        next(error);
    })
};

exports.postAnswer = function (request, response, next) {
    request.app.testService.answer(request.body).then(function (result) {
        response.json({
            result : result
        })
    })
};