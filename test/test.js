var assert = require("assert"),
    inflections = require("inflections");


require("../src/index");


describe("inflections_en", function() {
    it("should pluralize/singularize english words", function() {
        var inflector = inflections("en");


        assert.equal(inflector.pluralize("word"), "words");
        assert.equal(inflector.pluralize("sky"), "skies");
        assert.equal(inflector.pluralize("box"), "boxes");

        assert.equal(inflector.singularize("words"), "word");
        assert.equal(inflector.singularize("skies"), "sky");
        assert.equal(inflector.singularize("boxes"), "box");
    });
});
