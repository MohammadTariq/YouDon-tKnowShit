//Get the fibonacci series
function fibo(n){
    var arr = [0,1];
    
    if (n <= 2){return 1;}
    
    for (var i = 2; i <= n; i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    
    return arr;
}

fibo(12)