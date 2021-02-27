


function transposeArray(input, inputLength) {
    var newInput = [];
    for (var i = 0; i < input.length; i++) {
        newInput.push([]);
    };

    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < inputLength; j++) {
            newInput[j].push(input[i][j]);
        };
    };

    return newInput;
}

var input = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];

var inputLength = input.length;

console.log(transposeArray(input, inputLength));