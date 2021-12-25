let medArray = function (arr) {
    let n = arr.length / 2
    return arr.reduce((acc, elem, index) => {
        if (index === n || index === n - 1) {
            return acc + elem;
        }
        return acc + 0;
    }, 0)
}
let firstArray = [4, 15, 7, 9];
let secondArray = [10, 30, 25, 11];
let newArray = firstArray.concat(secondArray);
let finalArry = newArray.sort((a, b) => parseInt(a) - parseInt(b))
console.log(medArray(finalArry))