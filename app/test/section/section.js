var Section = function () {
    this.parts = [];
};

Section.prototype.$setId = function (id) {
    this.id = id;
    return this;
};

Section.prototype.getId = function () {
    return this.id;
};

Section.prototype.$setContent = function (content) {
    this.content = content;
    return this;
};

Section.prototype.getContent = function () {
    return this.content;
};

Section.prototype.$setTestId = function (testId) {
    this.testId = testId;
    return this;
};

Section.prototype.getTestId = function () {
    return this.testId;
};

Section.prototype.$setParts = function (parts) {
    this.parts = parts;
    return this;
};

Section.prototype.getParts = function () {
    return this.parts;
};

module.exports = Section;
