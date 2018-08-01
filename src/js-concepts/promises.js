//Creating Promises, chaining promises, calling promises

//Creating a promise.
var isHappy = false;

//Promise #1
var willGetPhone = new Promise(function(resolve, reject){
    if (isHappy){
        var phone = {
            brand: "iphone",
            color: "gold"
        }
        resolve(phone);
    }
    else {
        var errorMsg = "no phone, sorry!";
        reject(errorMsg);
    }  
});

//Promise #2
var showOff = function(phone){
    var message = "hey i got a " + phone.color + " " + phone.brand;
    return resolve(message);
}

//Calling a promise.
var findOut = function(){
    willGetPhone
    .then(showOff)
    .then(function(fulfilled){
        console.log(fulfilled);
    })
    .catch(function(error){
        console.log(error);
    })
};

findOut();