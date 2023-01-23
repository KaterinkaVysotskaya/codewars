// function openOrSenior(data){
//     return data.map((arr) => {
//         return arr[0]>=55&&arr[1]>7 ? 'Senior' : 'Open'
//     }).concat()
// }
//
// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
//
// // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// //
// // Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// //
// // Note: If the number is a multiple of both 3 and 5, only count it once.
//
// function solution(number){
//     let sum = 0
//     for (let i = 0; i < number; i++) {
//         if( i % 3 === 0 || i % 5 === 0) {
//             sum+=i
//         }
//     }
// return sum
// }
//
// console.log(solution(20))
//
// // The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
//
//     function duplicateEncode(word){
//     const letters = word.toLowerCase().split('')
//         const counts = letters.reduce((ct, ltr) => ((ct[ltr] = (ct[ltr] || 0) + 1), ct), {});
//         return letters.map(letter => counts[letter] === 1 ? '(' : ')').join('');
//
// }
//
// console.log(duplicateEncode('din'))
//
// // n DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
// function DNAStrand(dna){
//     return   dna.split('').map( l=>
//         l === 'A' ? l = 'T' : l &&
//         l === 'T' ? l = 'A' : l &&
//         l === 'G' ? l = 'C' : l &&
//         l === 'C' ? l = 'G' : l
//
//     ).join('')
//
// }
//
// console.log(DNAStrand("GTAT"))
//
// function removeEveryOther(arr){
//     return arr.filter(function(elem, index) {
//         return index % 2 === 0;
//     });
// }
//
// function isAnagram(str1, str2){
//     if (str1.length !== str2.length) {
//         return false
//     }
//     const a = str1.toLowerCase().split("").sort().join("")
//     console.log(a)
//     return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
// }
//
// console.log(isAnagram("Twoo", "WooT"))
// console.log()
// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.filter(i => i === true).reduce((sum, cur) => sum + cur, 0)
// }
// var array1 = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ];
// console.log(countSheeps(array1))
//
// function sayHello(name) {
//     return 'Hello' + '' + name
// }
//
// console.log(sayHello('Mr. Spock'))
//
// function move (position, roll) {
//     return position + roll * 2
// }
//
// function check(a, x) {
//   return a.includes(x)
// }
//
// console.log(check([66, 101], 66))
//
// function sumStr(a,b) {
// return String(Number(a) + Number(b))
// }
//
// console.log(sumStr("4","5"))
//


// Time to win the lottery!
//
//     Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
//
// Example ticket:
//
//     [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

function bingo(ticket, win){
    if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
    {
        return "Winner!";
    }
    return "Loser!";
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))

function bingo(ticket, win){
    var count = 0;

    ticket.forEach(game => {
        if (game[0].includes(String.fromCharCode(game[1]))) {
            count++;
        }
    });

    return (count >= win) ? "Winner!" : "Loser!";
}

// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
//
//     Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

function solution(num, result = ''){
    const map = {
        M: 1000,
        CM: 900, D: 500, CD: 400, C: 100,
        XC: 90,  L: 50,  XL: 40,  X: 10,
        IX: 9,   V: 5,   IV: 4,   I: 1,
    };
    for (const key in map) {
        if (num >= map[key]) {
            if (num !== 0) {
                return solution(num - map[key], result + key);
            }
        }
    }
    return result;
}

//
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.


// snail = function(array) {
//     if(array.length === 0) return [];
//     if(array.length === 1) return array[0];
//     let top = array[0].slice(0,-1);
//     let right = array.map(a => a[a.length - 1]);
//     let bottom = array[array.length - 1].slice(0, -1).reverse();
//     let left = array.slice(1, -1).map(b => b[0]).reverse();
//     let inner = array.slice(1, -1).map(c => c.slice(1, -1));
//     return [].concat(top, right, bottom, left, snail(inner));
// }

// function snail(array) {
//     var vector = [];
//     while (array.length) {
//         vector.push(...array.shift());
//         array.map(row => vector.push(row.pop()));
//         array.reverse().map(row => row.reverse());
//     }
//     return vector;
// }
//
// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))

// Inspired by Square Every Digit (and by the inimitable myjinxin2015's many clever one-line kata), your goal here is precisely the same (to square every digit in the given number), in 36 or fewer characters (JavaScript), or 47 or fewer in Ruby


// sd=x=>(x).split('').map(p=>p*p).join('')
// console.log()
//
//     console.log(sd(3212))

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//
//     It should remove all values from list a, which are present in list b keeping their order.
//
// arrayDiff([1,2],[1]) == [2]

// function arrayDiff(a, b) {
//
//     return a.filter(e => !b.includes(e));
//
// }
//
// console.log(arrayDiff([], [1,2]))



// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
//     Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// function rot13(message){
//     console.log(message.split('').forEach(e=>e.replace()))
//     return
// }
//
// console.log(rot13("test"))

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:


function domainName(url){
    return    url.replace(/^https?:\/\//, "")
        .replace(/^www\./, "")
        .replace(/\..*/, '');

}

console.log(domainName("http://google.co.jp"))