 function bsort(arr){
    for (var i = arr.length-1; i >= 0; i--){
        for (var j = 1; j <= i; j++){
            if (arr[j-1] > arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
     return arr;
};

bsort([1,5,1,6,8,1]) //[1, 1, 1, 5, 6, 8]