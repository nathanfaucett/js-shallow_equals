var tape = require("tape"),
    shallowEquals = require("..");


tape("shallowEquals", function(assert) {

    assert.equals(shallowEquals(0, 0), true);
    assert.equals(shallowEquals(0, 1), false);

    assert.equals(shallowEquals("string", "string"), true);
    assert.equals(shallowEquals("string", "diff_string"), false);

    assert.equals(shallowEquals([0, 1, 2], [0, 1, 2]), true);
    assert.equals(shallowEquals([0, 1, 2], [0, 1, 2, 3]), false);
    assert.equals(shallowEquals([0, 1, 2], [0, 1]), false);

    assert.equals(shallowEquals({
        a: 0,
        b: 1
    }, {
        a: 0,
        b: 1
    }), true);
    assert.equals(shallowEquals({
        a: 0,
        b: 1
    }, {
        a: 0,
        b: 1,
        c: 2
    }), false);
    assert.equals(shallowEquals({
        a: 0,
        b: 1
    }, {
        a: 0
    }), false);

    assert.end();
});