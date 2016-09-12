var Part = function () {
    this.questions = [];
};

Part.prototype.$setId = function (id) {
    this.id = id;
    return this;
};

Part.prototype.getId = function () {
    return this.id;
};

Part.prototype.$setSetionId = function (sectionId) {
    this.sectionId = sectionId;
    return this;
};

Part.prototype.getSectionId = function () {
    return this.sectionId;
};

Part.prototype.$setTestId = function (testId) {
    this.testId = testId;
    return this;
};

Part.prototype.$setTestId = function (testId) {
    this.testId = testId;
    return this;
};

Part.prototype.getTestId = function () {
    return this.testId;
};

Part.prototype.$setPurpose = function (purpose) {
    this.purpose = purpose;
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

module.exports = Part;