/**
 * Find the missing letter in the passed letter range and return it.
 *
 * If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {


     // str.charCodeAt(index)
    var chars = str.split("");
    var charCodeArray = [];

    chars.forEach(function(c)
    {
        charCodeArray.push(c.charCodeAt(0));
    });

    var min = charCodeArray[0];
    var max = charCodeArray[charCodeArray.length - 1];

    for (var i = min; i<max; i++) {
        if(!(charCodeArray.indexOf(i) > -1)) {
          return String.fromCharCode(i);
        }
    }

    // console.log("max: " + max);
    // console.log(charCodeArray);

    return undefined;
}

fearNotLetter("abce"); // should return "d".
// fearNotLetter("abcdefghjklmno"); // should return "i".
// fearNotLetter("bcd"); // should return undefined.
// fearNotLetter("yz"); // should return undefined