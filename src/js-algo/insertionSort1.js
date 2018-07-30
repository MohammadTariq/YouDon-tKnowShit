//TYPE 1: Given a sorted list with an unsorted number E in the rightmost cell, can you write some simple code to insert E  into the array so that it remains sorted?

function sortArr(n,arr){
    for (var i = n; i >= 0; i--){
        if (arr[i-1] > arr[i]){
            var temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
            console.log(arr);
        }
    }
}

sortArr(5,[2,4,6,8,3]);
sortArr(14,[1, 3, 5, 9, 13, 22, 27, 35, 46, 51, 55, 83, 87, 23]);

//TYPE 2: Fully sort an array using insertion sort

function fullSort(arr){
    for (var i = 0; i < arr.length; i++){
        //current element
        var key = arr[i];
        
        //element before current element
        var j = i - 1;
        
        //while j is the 0th element or further and is greater than element on its right
        while (j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j - 1;
        }
        
        //last element remaining
        arr[j + 1] = key;
    }
    return arr;
}

fullSort([2,4,6,8,3,4,5,5,2,9,3,8,6]);