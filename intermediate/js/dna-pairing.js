/**
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
 *
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 *
 * Return the provided character as the first element in each array.
 */


function pairElement(str) {

    var pairs = [];
    pairs["A"] = ["A", "T"];
    pairs["T"] = ["T", "A"];
    pairs["C"] = ["C", "G"];
    pairs["G"] = ["G", "C"];

    var chars = str.split("");
    var result = [];
    chars.forEach(function(c)
    {
       result.push(pairs[c]);
    });

    console.log(result);
    return result;
}



pairElement("ATCGA");// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG");// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA");// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]