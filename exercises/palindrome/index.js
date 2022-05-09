// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     for (let i = 0; i < str.length/2 ; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             console.log('false')
//             return false;
//         }
//     }
//     console.log('true')
//     return true;
// }

function palindrome(str) {
    if (str.length === 1) {
        return true;
    }

    if (str.length === 2) {
        return str[0] === str[str.length-1] ?  true : false;
    }


    return str[0] !== str[str.length-1] 
            ? false 
            : palindrome(str.slice(1, str.length-1));

}

//module.exports = palindrome("hannah");
module.exports = palindrome;
