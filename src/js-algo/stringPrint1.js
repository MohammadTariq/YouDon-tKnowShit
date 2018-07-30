//Given a string S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line.

function processData(input) {
    //Enter your code here
    var inputEven = '';
    var inputOdd = '';
    
    for (var i = 0; i < input.length; i+=2){
        inputEven += input[i];
    }
    
    for (var i = 1; i < input.length; i+=2){
        inputOdd += input[i];
    }
    console.log(inputEven,'  ', inputOdd);
} 

processData("Hacker");