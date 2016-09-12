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

Question.prototype.$setTestId = function (test) {
    this.test = test;
    return this;
};

Question.prototype.getTestId = function () {
    return this.test;
};

Question.prototype.$setSectionId = function (section) {
    this.section = section;
    return this;
};

Question.prototype.getSectionId = function () {
    return this.section;
};

Question.prototype.$setPartId = function (part) {
    this.part = part;
    return this;
};

Question.prototype.getPartId = function () {
    return this.part;
};

module.exports = Question;