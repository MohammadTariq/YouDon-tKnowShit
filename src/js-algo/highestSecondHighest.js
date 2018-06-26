function high(arr){
    var highest = arr[0];
    var second = arr[1];
    
    if (highest < second){
        highest = arr[1];
        second = arr[0];
    }
    
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > highest){
            second = highest;
            highest = arr[i];
        }
        
        else if (arr[i] > second){
            second = arr[i];
        }
    }
    return highest + " " + second;
}

high([2,4,6,1,2]) //6 4