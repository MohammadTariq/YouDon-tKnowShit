//Below is an example of a javascript promise being created and called.

//Creating a promise.
var isHappy = false;

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

//Calling a promise.
var findOut = function(){
    willGetPhone
    .then(function(fulfilled){
        console.log(fulfilled);
    })
    .catch(function(error){
        console.log(error);
    })
};

findOut();