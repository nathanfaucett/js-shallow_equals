shallow_equals [![Build Status](https://travis-ci.org/nathanfaucett/js-shallow_equals.svg?branch=master)](https://travis-ci.org/nathanfaucett/js-shallow_equals)
=======

shallow check for equality

```javascript
var shallowEquals = require("@nathanfaucett/shallow_equals");


shallowEquals(0, 0) === true;
shallowEquals(0, 1) === false;

shallowEquals("string", "string") === true;
shallowEquals("string", "diff_string") === false;

shallowEquals([0, 1, 2], [0, 1, 2]) === true;
shallowEquals([0, 1, 2], [0, 1, 2, 3]) === false;
shallowEquals([0, 1, 2], [0, 1]) === false;

shallowEquals({a: 0, b: 1}, {a: 0, b: 1}) === true;
shallowEquals({a: 0, b: 1}, {a: 0, b: 1, c: 2}) === false;
shallowEquals({a: 0, b: 1}, {a: 0})
```
