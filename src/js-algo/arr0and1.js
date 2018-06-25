function zeroOnes(arr){
    
    var i = 0;
    var n = arr.length - 1;
    
    while (i < n){
        
        while(arr[i] === 0){
            i++
        }
        
        while(arr[n]===1){
            n--;
        }
        
        if (i < n){
            arr[i] = 0;
            arr[n] = 1;
            i++;
            n--;
        }
    }
    
    return arr;
}

zeroOnes([1,0,0,1,1,1,0,1])