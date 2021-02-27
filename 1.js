// Palindrome

function printPalindrome(input) {
    var input = input.toString();
    var inputArr = [];
    var inputReverse = [];

    var result = "";

    for (let i = 0; i < input.length; i++) {
        inputArr.push(input[i]);
    }

    // reverse Input
    for (let i = input.length - 1; i >= 0; i--) {
        inputReverse.push(input[i]);
    }

    // check input

    for (let i = 0; i < input.length; i++) {
        if (inputArr[i] !== inputReverse[i]) {
            return result = "Input bukan Palindrome";
        }
        else {
            return result = "Input Sebuah Palindrome";
        }
    }

}

console.log(printPalindrome(1001));