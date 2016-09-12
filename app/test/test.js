var Test = function () {
    this.sections = [];
};

Test.prototype.$setId = function (id) {
    this.id = id;
    return this;
};

Test.prototype.getId = function () {
    return this.id;
};

Test.prototype.$setContent = function (content) {
    this.content = content;
    return this;
};

Test.prototype.getContent = function () {
    return this.content;
};

Test.prototype.$setSections = function (sections) {
    this.sections = sections;
    return this;
};

Test.prototype.getSections = function () {
    return this.sections;
};

module.exports = Test;