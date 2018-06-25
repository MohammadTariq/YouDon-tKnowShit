//Not using built in functions
function isPalin1(str){
    for (var i = 0; i < str.length/2; i++){
        if (str[i] === str[str.length - 1 - i]){
            return true;
        }
        else {
            return false;
        }
    }
}

isPalin1("value");
isPalin1("madam");

//Using built in functions
function isPalim2(str){
    return (str === str.split('').reverse().join(''));
}

isPalim2("value");
isPalim2("madam");