/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 *
 * In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 */

function uniteUnique(arr) {
    var result = [];

    for (var i = 0; i < arguments.length; i++) {
        arguments[i].forEach(function (el) {
            if (result.indexOf(el) < 0) {
                result.push(el);
            }
            console.log(el);
        });
        console.log(arguments[i])
    }

    console.log(result);
    return result;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);// should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);// should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]);// should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);// should return [1, 2, 3, 5, 4, 6, 7, 8]