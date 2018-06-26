function myTrim(str){
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) !== " "){
            str = str.substring(i,str.length);
            break;
        }
    }
    
    for (var j = str.length-1; j >= 0; j--){
        if(str.charAt(j) !== " "){
            str = str.substring(0,j+1);
            break;
        }
    }
    
    return str;
}

myTrim("  manavi   ") //"manavi"