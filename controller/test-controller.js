exports.getTest = function (request, response, next) {
    request.app.partService.getPart(request.query.part).then(function (part) {
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