/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
 * The lowest number will not always come first.
 **/

function sumAll(arr) {

    var sum = 0;

    var min = 0;
    var max = 0;

    if (arr[0] < arr[1]) {
        min = arr[0];
        max = arr [1];
    } else {
        max = arr[0];
        min = arr [1];
    }

    for(var i= min; i <= max; i++) {
        sum +=i;
    }

    console.log(sum);
    return sum;
}


sumAll([1, 4]); // should return a number.
sumAll([1, 4]); // should return 10.
sumAll([4, 1]); // should return 10.
sumAll([5, 10]); // should return 45.
sumAll([10, 5]); // should return 45.