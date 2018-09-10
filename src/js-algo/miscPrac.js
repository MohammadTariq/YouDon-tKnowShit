function ss(arr){
    for (var i = 0; i < arr.length; i++){
        var min = i;
        for (var j = i+1; j < arr.length; j++){
            if (arr[j]<arr[min]){
                min = j;
            }
        }
        if (min !== i){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

ss([1,2,4,5,2,7,5,4,1,9,8,8]);

function is(arr){
    for (var i = 0; i < arr.length; i++){
        var key = arr[i];
        var j = i - 1;
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

is([1,2,4,5,2,7,5,4,1,9,8,8]);