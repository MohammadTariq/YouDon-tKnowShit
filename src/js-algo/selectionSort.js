function ss(arr){
    //for loop 1
    for (var i = 0; i < arr.length; i++){
        //Assuming first elem is the min
        var min = i;
        //for loop 2
        for (var j = i + 1; j < arr.length; j++){
            //if left elem is greater than right, change the value of min to j
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        //if elements have been swapped and min no longer has the value of i, swap the left and right elements
        if (min !== i){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

ss([2,4,6,8,3,4,5,5,2,9,3,8,6]);