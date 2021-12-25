let rotetArray = function (arr, k) {
    const mod = k % arr.length
    return arr.map((e, i) => {
        //console.log(e)
        //console.log(arr[(mod + i) % arr.length])
        return arr[(mod + i) % arr.length]
    })
}
let k = 5;
let array = [6, 7, 3, 5, 7, 1, 2]
console.log(rotetArray(array, k))