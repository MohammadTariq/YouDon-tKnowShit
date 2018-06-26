function missingElem(arr){
    var n = arr.length+1;
    var arrSum = n*((n+1)/2);
    var actualSum = 0;
    
    for (var i = 0; i < arr.length; i++){
        actualSum += arr[i];
    }
    
    return (arrSum - actualSum);
}

missingElem([1,2,4,5,6,3,8]) //7