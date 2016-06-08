/**
 * Translate the provided string to pig latin.
 *
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
 *
 * If a word begins with a vowel you just add "way" to the end.
 */

function isVowel(char) {
    return /[aieou]/.test(char);
}

function translatePigLatin(str) {

    // find index of first vowel
    var arr = str.split("");
    for (var i = 0; i < arr.length; i++) {
        if (isVowel(arr[i])) {
            console.log("index: " + i + " " + arr[i]);
            break;
        }
    }
    console.log(arr);

    // slice str
    var start = str.slice(0, i);
    var end = str.slice(i);

    if(i ===0){
        start = "w";
    }

    start = start + "ay";

    var result = end + start;
    console.log(result);

    return result;
}


translatePigLatin("california"); // should return "aliforniacay".
translatePigLatin("paragraphs"); // should return "aragraphspay".
translatePigLatin("glove"); // should return "oveglay".
translatePigLatin("algorithm"); // should return "algorithmway".
translatePigLatin("eight"); // should return "eightway".