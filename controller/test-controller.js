exports.getTest = function (request, response, next) {
    request.app.testService.getTest(request.query.testNo).then(function (part) {
        response.json(part);
    }, function (error) {
        next(error);
    })
};

exports.postAnswer = function (request, response, next) {
    // request.app.questionService.answer(request.body).then(function (result) {
    //     //TODO
    // })
};