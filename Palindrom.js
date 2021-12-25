let palindromes = function (arr) {
    return arr.filter(w => {
        let len = w.length;
        for (let i = 0; i < len; i++) {
            //w[i]==>string of first index
            //w[len-1]==>string of last index
            if (w[i] == w[len - 1]) {
                return true;
            } else {
                return false;
            }
        }
    });
}
console.log(palindromes(["foo", "racecar", "pineapple", "porcupine", "pineenip", 'pap', 'aaaa']));

//Arow function
let palindrome = (arr) => {
    return arr.filter(w => {
        let len = w.length;
        for (let i = 0; i < len; i++) {
            if (w[i] == w[len - 1]) {
                return true;
            } else {
                return false;
            }
        }
    });
}
console.log(palindrome(["foo", "racecar", "pineapple", "porcupine", "pineenip", 'pap', 'aaaa']));