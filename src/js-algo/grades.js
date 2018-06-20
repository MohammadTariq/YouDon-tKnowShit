function gradingStudents(grades) {
    /*
     * Write your code here.
     */
    //Getting all multiples of 5
    var arr = [];
    var newArr = [];
    
    for (var i = 5; i <= 100; i+=5){
        arr.push(i);
    }
    
    function checkRange(n){
        for (var j = 0; j < arr.length; j++){
            if ((n < arr[j]) && (n > arr[j-1])){
                if ((arr[j]-n) < 3){
                    n += (arr[j]-n);
                    console.log(arr[j], n);
                }
            }
        }
        return n;
    }
    
    for (var k = 0; k < grades.length; k++){
        if (grades[k] >= 38){
            newArr.push(checkRange(grades[k]));
            //console.log(newArr);
        }
        else {
            newArr.push(grades[k]);
        } 
    }
    
    return newArr;
}
