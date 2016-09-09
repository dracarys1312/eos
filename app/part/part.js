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

Part.prototype.$setNo = function (no) {
    this.no = no;
    return this;
};

Part.prototype.getNo = function () {
    return this.no;
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
    return {
        id          : this.getId(),
        no          : this.getNo(),
        purpose     : this.getPurpose(),
        content     : this.getContent(),
        questions   : this.getQuestions()
    }
};

module.exports = Part;