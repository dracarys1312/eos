exports.getQuestion = function (request, response, next) {
    request.app.questionService.getQuestion().then(function (part) {
        response.json(part);
    }, function (error) {
        next(error);
    })
};

exports.postAnswer = function (request, response, next) {
    request.app.questionService.answer(request.body).then(function (result) {
        //TODO
    })
};