/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 *
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
 */

function rot13(str) { // LBH QVQ VG!

    var length = str.length;
    var result = "";

    for (var i=0; i<length; i++) {

        // unicode capital letter 65 (A) - 90 (Z)
        var newChar=0;

        var charCode = str.charCodeAt(i);

        // get new char code
        // console.log(charCode);
        if((charCode <=90 && charCode >=65)) {
            // it's latin uppercase letter
            if (charCode > 77) {
                newChar = String.fromCharCode(charCode - 13);
            } else {
                newChar = String.fromCharCode(91 + (charCode - 65 - 13));
            }
        } else {
            // every other char stay the same
            newChar = String.fromCharCode(charCode);
        }
        result += newChar;
    }
    console.log(result);

    return result;
}


rot13("SERR PBQR PNZC"); // should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!"); // should decode to "FREE PIZZA!"
rot13("SERR YBIR?"); // should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."