// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    var max = Math.max.apply(Math, ar);
    var maxIndices = ar.reduce(function(a, e, i) {
        if (e === max)
            a.push(i);
        return a;
        
    }, []);
    
    console.log(maxIndices);
    return maxIndices.length;   
}

birthdayCakeCandles([3,2,1,3]) //2