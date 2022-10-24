function openOrSenior(data){
    return data.map((arr) => {
        return arr[0]>=55&&arr[1]>7 ? 'Senior' : 'Open'
    }).concat()
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
//
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    let sum = 0
    for (let i = 0; i < number; i++) {
        if( i % 3 === 0 || i % 5 === 0) {
            sum+=i
        }
    }
return sum
}

console.log(solution(20))

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


    function duplicateEncode(word){
    const letters = word.toLowerCase().split('')
        const counts = letters.reduce((ct, ltr) => ((ct[ltr] = (ct[ltr] || 0) + 1), ct), {});
        return letters.map(letter => counts[letter] === 1 ? '(' : ')').join('');

}

console.log(duplicateEncode('din'))

// n DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
    return   dna.split('').map( l=>
        l === 'A' ? l = 'T' : l &&
        l === 'T' ? l = 'A' : l &&
        l === 'G' ? l = 'C' : l &&
        l === 'C' ? l = 'G' : l

    ).join('')

}

console.log(DNAStrand("GTAT"))

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
        return index % 2 === 0;
    });
}