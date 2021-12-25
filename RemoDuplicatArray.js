// let arr = [4, 5, 7, 4, 5, 7, 5, 7, 44, 465, 4, 4, 9]
// let uniqu = [...new Set(arr)]
// console.log(uniqu)
let unique = function (arr) {
    return arr.filter((value, index) => arr.indexOf(value) == index);
}
let arr = [4, 5, 7, 4, 5, 7, 5, 7, 44, 465, 4, 4, 9]
console.log(unique(arr))