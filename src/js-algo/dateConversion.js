function timeConversion(s) {
    /*
     * Write your code here.
     */
    var arr = s.split(":");
    if (arr[arr.length-1].includes("PM")){
        arr[0] = parseInt(arr[0])+12;    
    }
    
    arr[2] = parseInt(arr[2].replace(/\D/g,''));

    return arr.join(':');
   
}

timeConversion("07:05:45PM");