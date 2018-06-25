function hcf(a,b){
    var arr = [];
    var factor = 1;
    
    while (factor <= a && factor <= b){
        if ((a % factor === 0) && (b % factor === 0)){
            arr.push(factor);
        }
        factor++;
    }
    return Math.max.apply(Math, arr);
}

hcf(20,100); //20