/**
 * Return true if the given string is a palindrome. Otherwise, return false.
 *
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 */

function palindrome(str) {

    // to lower
    str = str.toLowerCase();

    /*
     [^a-zA-Z0-9] - to Remove non Alpha-Numeric characters
     \s+ - match any collections of spaces
     \r?\n|\r - match all new line
     /gmi - global, multi-line, case insensitive
     */
    str = str.replace(/[^a-zA-Z0-9 \s+]/g, '').replace(/\s+/g, '');

    // create reverse string and compare
    return str == str.split('').reverse().join('');
}


// palindrome("eye");

palindrome("A man, a plan, a canal. Panama") // should return true.
// palindrome("never odd or even") //should return true.
// palindrome("nope") //should return false.
// palindrome("almostomla")// should return false.
palindrome("My age is 0, 0 si ega ym.")// should return true.
// palindrome("1 eye for of 1 eye.") //should return false.
// palindrome("0_0 (: /-\ :) 0-0") //should return true.