function repeatChar(str){
    for (var i = 0; i < str.length; i++){
        for (var j = i+1; j < str.length; j++){
            if (str[i] == str[j]){
                return str[i];
            }
        }
    }
}

repeatChar("manavi") //m