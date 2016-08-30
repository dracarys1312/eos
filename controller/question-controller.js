exports.getQuestion = function (request, response, next) {
    request.app.questionService.getQuestion().then(function (part) {
        response.json(part);
    }, function (error) {
        next(error);
    })
};