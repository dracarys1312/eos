var Part = function () {
    this.questions = [];
};

Part.prototype.$setPurpose = function (purpose) {
    this.purpose = purpose
    return this;
};

Part.prototype.getPurpose = function () {
    return this.purpose;
};

Part.prototype.$setContent = function (content) {
    this.content = content;
    return this;
};

Part.prototype.getContent = function () {
    return this.content;
};

Part.prototype.$setQuestions = function (questions) {
    this.questions = questions;
    return this;
};

Part.prototype.getQuestions = function () {
    return this.questions;
};

Part.prototype.toString = function () {

};

module.exports = Part;