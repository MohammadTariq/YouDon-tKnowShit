//Closures in JS: inner function that has access to the variables in the outer (enclosing) function’s scope chain. The closure has access to variables in three scopes; specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope, and (3) global variables.
//This is also an IIFE since it is immediately invoked
var global = "xyz";
(function outerFunc(outerArg){
    var outerVar = 'a';
    
    (function innerFunc(innerArg){
        var innerVar = 'b';
        
        console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(123);
})(456);

//The following for loop wont print the desired behaviour
for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}

//5,5,5,5,5

/* This happens because by the time console.log is executed, the for loop is already complete and the value is 5.
To display the expected output, the value of i needs captured and given to console.log at each iteration like so: */

for (var i = 0; i < 5; i++) {
	(function(x){
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}

//0 1 2 3 4

//Multipe closures example
var b = 1;
function outer(){
    var b = 2;
    function inner(){
        b++;        //Due to hoisting this will interpreted as: var b; b++ .......
        var b = 3;
        console.log(b);
    }
    inner();
}

outer() //3