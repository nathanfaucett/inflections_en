var tape = require("tape"),
    inflections = require("inflections");


require("..");


tape("inflections_en", function(assert) {
    var inflector = inflections("en");

    assert.equal(inflector.pluralize("word"), "words");
    assert.equal(inflector.pluralize("kiss"), "kisses");
    assert.equal(inflector.pluralize("sky"), "skies");
    assert.equal(inflector.pluralize("box"), "boxes");

    assert.equal(inflector.singularize("kisses"), "kiss");
    assert.equal(inflector.singularize("words"), "word");
    assert.equal(inflector.singularize("skies"), "sky");
    assert.equal(inflector.singularize("boxes"), "box");

    assert.end();
});
