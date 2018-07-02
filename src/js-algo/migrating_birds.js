function findMaxRep(ar){
    var obj = {};
    var max = 0;
    var maxVal;
    for (var i = 0; i < ar.length; i++){
        if (!obj[ar[i]]){
            obj[ar[i]] = 1;
        }
        else {
            obj[ar[i]]++;
        }
    }
    
    for (var key in obj){
        if (obj[key] > max){
            max = obj[key];
            maxVal = key;
        }
    }
    return maxVal;
}

findMaxRep([1,1,3,5,3,3,6,1,1,3,3,3]) //3