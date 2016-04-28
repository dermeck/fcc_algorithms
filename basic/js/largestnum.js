/** Return Largest Numbers in Arrays
 * Return an array consisting of the largest number from each provided sub-array.
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 *
 * Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
 **/

function largestOfFour(arr) {
    console.log(arr);

    for (var i = 0; i < arr.length; i++) {
        var subArray = arr[i];

        var max;
        for (var j = 0; j < subArray.length; j++) {
            if (j === 0) {
                max = subArray[0];
            } else {
                if (max < subArray[j]) {
                    max = subArray[j];
                }
            }
        }
        arr[i] = max;
    }

    return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])// should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])// should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])// should return [9, 35, 97, 1000000].

