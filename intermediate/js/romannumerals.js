/**
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided in upper-case.
 *
 * http://www.mathsisfun.com/roman-numerals.html
 */

function convertOnes(digit) {
    switch (digit) {
        case "0":
            return "";
        case "1":
            return "I";
        case "2":
            return "II";
        case "3":
            return "III";
        case "4":
            return "IV";
        case "5":
            return "V";
        case "6":
            return "VI";
        case "7":
            return "VII";
        case "8":
            return "VIII";
        case "9":
            return "IX";
    }
}

function convertTens(digit) {
    switch (digit) {
        case "0":
            return "";
        case "1":
            return "X";
        case "2":
            return "XX";
        case "3":
            return "XXX";
        case "4":
            return "XL";
        case "5":
            return "L";
        case "6":
            return "LX";
        case "7":
            return "LXX";
        case "8":
            return "LXXX";
        case "9":
            return "XC";
    }
}

function convertHundreds(digit) {
    switch (digit) {
        case "0":
            return "";
        case "1":
            return "C";
        case "2":
            return "CC";
        case "3":
            return "CCC";
        case "4":
            return "CD";
        case "5":
            return "D";
        case "6":
            return "DC";
        case "7":
            return "DCC";
        case "8":
            return "DCCC";
        case "9":
            return "CM";
    }
}

function convertThousands(digit) {
    switch (digit) {
        case "0":
            return "";
        case "1":
            return "M";
        case "2":
            return "MM";
        case "3":
            return "MMM";
    }
}

function convertToRoman(num) {

    // break down the number into decimal powers
    var digits = (""+num).split("");
    var ones="", tens="", hundreds="", thousands = "";

    if(digits.length == 1) {
        ones = convertOnes(digits[0]);
    }

    if(digits.length == 2) {
        ones = convertOnes(digits[1]);
        tens = convertTens(digits[0]);
    }

    if(digits.length == 3) {
        ones = convertOnes(digits[2]);
        tens = convertTens(digits[1]);
        hundreds = convertHundreds(digits[0]);
    }

    if(digits.length == 4) {
        ones = convertOnes(digits[3]);
        tens = convertTens(digits[2]);
        hundreds = convertHundreds(digits[1]);
        thousands = convertThousands(digits[0]);
    }

    var result = thousands + hundreds + tens +ones;

    console.log(result);
    return result;
}




convertToRoman(2); // should return "II".
convertToRoman(3); // should return "III".
convertToRoman(4); // should return "IV".
convertToRoman(5); // should return "V".
convertToRoman(9); // should return "IX".
convertToRoman(12); // should return "XII".
convertToRoman(16); // should return "XVI".
convertToRoman(29); // should return "XXIX".
convertToRoman(44); // should return "XLIV".
convertToRoman(45); // should return "XLV"
convertToRoman(68); // should return "LXVIII"
convertToRoman(83); // should return "LXXXIII"
convertToRoman(97); // should return "XCVII"
convertToRoman(99); // should return "XCIX"
convertToRoman(500); // should return "D"
convertToRoman(501); // should return "DI"
convertToRoman(649); // should return "DCXLIX"
convertToRoman(798); // should return "DCCXCVIII"
convertToRoman(891); // should return "DCCCXCI"
convertToRoman(1000); // should return "M"
convertToRoman(1004); // should return "MIV"
convertToRoman(1006); // should return "MVI"
convertToRoman(1023); // should return "MXXIII"
convertToRoman(2014); // should return "MMXIV"
convertToRoman(3999); // should return "MMMCMXCIX"