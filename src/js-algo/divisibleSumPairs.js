// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    var count = 0;
    for (var i = 0; i < ar.length; i++){
        for (var j = 0; j < ar.length; j++){
            if ((i < j) && ((ar[i] + ar[j])%k === 0)){
                count += 1;
            }
        }
    }
    return count;
}

divisibleSumPairs(6 , 3, [1, 3, 2, 6, 1, 2]) //5