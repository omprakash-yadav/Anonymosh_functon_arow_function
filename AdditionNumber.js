// let adition = function (num) {
//     let count = 0
//     for (let i = 0; i < num.length; i++) {
//         count += num[i];
//     }
//     return count;

// }
// console.log((adition([4, 5])));

//********* second approach ************ */
// var num = [1, 2, 3];
// var sum = num.reduce(function (a, b) {
//     return a + b;
// }, 0);
// console.log(sum);

//using Arow function
var num = [1, 2, 3];
var sum = num.reduce((a, b) => {
    return a + b;
}, 0);
console.log(sum);


