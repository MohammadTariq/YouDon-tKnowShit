function findCount(arr,d,m){
    var count = 0;
    for (var i = 0; i < arr.length - m + 1; i++){
        var sum = 0;
        for (var j = i; j < i + m; j++){
            sum += arr[j];
        }
        if (sum === d){
            count += 1;
        }
    }
    return count;
}

findCount([1,2,1,3,2],3,2);