let oddNumber = function (num) {
    return num.filter((n) => {
        for (let i = 0; i < n; i++) {
            return (n % 2 !== 0)
        }
    });
}
console.log(oddNumber([10, 41, 20, 44, 23,]));

//Arow function

let oddNumber = (num) => {
    return num.filter((n) => {
        for (let i = 0; i < n; i++) {
            return (n % 2 !== 0)
        }
    });
}
console.log(oddNumber([10, 41, 20, 44, 23, 47, 49, 53, 50, 97]));



// console.log(oddNumber(10))
//Return all the prime numbers in an array
//prime number is number divisible by 1 and number itself
// let prime = function (arr) {
//     return arr.filter((n) => {
//         for (let i = 2; i < n; i++) {
//             if (n % i === 0) return false;
//         }
//         return n > 1;
//     });
// };
// console.log(prime([7, 16, 9, 3]));



// //Return all the prime numbers in an array
// let primes = (arr) => {
//     return arr.filter((e) => {
//         for (let i = 2; i < e; i++) {
//             if (e % i === 0) {
//                 return false;
//             }
//         }
//         return e > 1;
//     });
// };
// console.log(primes([1, 2, 5, 16, 25, 99, 101]));