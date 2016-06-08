/**
 * Where art thou
 * Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument).
 * Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
 */

function whereAreYou(collection, source) {
    var arr = [];

    var sourcePropertyCount = Object.keys(source).length;

    collection.forEach(function (el) {
        var keys = Object.keys(el);
        var matchCount = 0;
        keys.forEach(function (key) {
            // is key present in source?
            if (source.hasOwnProperty(key)) {
                // console.log(key + ": " + source[key]);
                // and is value equal to value in el?
                if (el[key] === source[key]) {
                    // arr.push(el); // add to result
                    matchCount++;
                }
            }

        });
        if(sourcePropertyCount == matchCount) {
            arr.push(el); // add to result
        }
    });
    console.log(arr);
    return arr;
}


// whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // should return [{ first: "Tybalt", last: "Capulet" }].
// whereAreYou([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }); // should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }); // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
// whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }); // should return [{ "a": 1, "b": 2, "c": 2 }]