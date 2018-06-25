function isPrime(num){
    var divisor = 2;
    
    while (num > divisor){
        if (num % divisor === 0){
            return false;
        }
        divisor++
    }
    return true;
}

isPrime(4); //false
isPrime(13); //true