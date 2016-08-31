var Question = function () {
    this.answers = [];
    this.correctAnswers = [];
};

Question.prototype.$setId = function (id) {
    this.id = id;
    return this;
};

Question.prototype.getId = function () {
    return this.id;
};

Question.prototype.$setType = function (type) {
    this.type = type;
    return this;
};

Question.prototype.getType = function () {
    return this.type;
};

Question.prototype.$setContent = function (content) {
    this.content = content;
    return this;
};

Question.prototype.getContent = function () {
    return this.content;
};

Question.prototype.$setAnswers = function (answers) {
    this.answers = answers;
    return this;
};

Question.prototype.getAnswers = function () {
    return this.answers;
};

Question.prototype.$setPurpose = function (purpose) {
    this.purpose = purpose;
    return this;
};

Question.prototype.getPurpose = function () {
    return this.purpose;
};

Question.prototype.$setCorrectAnswers = function (correctAnswers) {
    this.correctAnswers = correctAnswers;
    return this;
} ;

Question.prototype.getCorrectAnswers = function () {
    return this.correctAnswers;
};

module.exports = Question;