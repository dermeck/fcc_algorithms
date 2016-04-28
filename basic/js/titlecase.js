/** Title Case a Sentence
 *
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 *
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 */


function titleCase(str) {

    // make all words lowercase
    str = str.toLowerCase();

    // create array to acces single words
    var strArray = str.split(" ");

    for (var i=0;  i<strArray.length; i++) {
        var word = strArray[i];

        // extract first char
        var left = word.slice(0,1);
        var right = word.slice(1,word.length);

        left = left.toUpperCase();
        word = left + right;
        strArray[i] = word;
    }

    var result = strArray.join(" ");

    return result;
}



titleCase("I'm a little tea pot")// should return a string.
titleCase("I'm a little tea pot")// should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt")// should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")// should return "Here Is My Handle Here Is My Spout".
