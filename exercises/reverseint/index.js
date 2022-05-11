// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) { 
    //const rez = n < 0 
    return n < 0    
        ? - parseInt(Math.abs(n).toString().split('').reverse().join(''))
        : parseInt(n.toString().split('').reverse().join(''));
    //console.log(`n: ${n} and rez: ${rez}`)
    //return rez;
}

module.exports = reverseInt;//(-15);
