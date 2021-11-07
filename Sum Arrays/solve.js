// Sum Numbers
function sum(numbers) {
    "use strict";
    return numbers.length > 0 ? numbers.reduce((sum, item) => item + sum, 0) : 0

};