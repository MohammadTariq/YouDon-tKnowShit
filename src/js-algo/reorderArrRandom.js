function random(arr){
    for (var i = 0; i < arr.length; i++){
        var j = Math.floor(Math.random() * (0+i));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

random([1,2,3]);