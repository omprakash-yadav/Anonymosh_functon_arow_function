let charLater = function (char) {
    return char.map((word) => {
        for (let i = 0; i < word.length; i++) {
            // The slice() method returns selected elements in an array, as a new array.
            // array.slice(start, end)
            return (word.charAt(0).toUpperCase() + word.slice(1))
        }
    })
}
console.log(charLater(["omprakash", "yadav", "kumar"]))

//Using Arow function
let charLater = (char) => {
    return char.map((word) => {
        for (let i = 0; i < word.length; i++) {
            return (word.charAt(0).toUpperCase() + word.slice(1))
        }
    })
}
console.log(charLater(["omprakash", "yadav", "kumar", "guvi"]))

