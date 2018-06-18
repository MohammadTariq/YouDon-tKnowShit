function minMaxSum(a,b,c,d,e){
    var arr = [];
    arr.push(a,b,c,d,e);
    
    var maxElem = Math.max.apply(Math, arr);
    var minElem = Math.min.apply(Math, arr);
    
    var sum = arr.reduce(getSum);
        
    function getSum(total, num) {
        return total + num;
    }
    
    console.log(sum-maxElem, sum-minElem);
}

minMaxSum(1,2,3,4,5);