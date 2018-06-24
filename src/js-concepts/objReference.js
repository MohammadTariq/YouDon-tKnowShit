//Assignment by reference and by value

//By reference: Copies the actual address and change in one affects the other too
var obj = {
    a: 30,
    b: 45,
    c: {
        age : 60
    }
}

var objNew = Object.assign({},obj);

//Changing a property of the original changes the reference too
obj.c.age = 50;
console.log(obj.c.age);
console.log(objNew.c.age);

//By value: Makes another copy of the variable with no further relationship with it hence changing one does NOT affect the other
var a = 10;
var b = 30;

var x = a;
var y = b;

console.log(a,b,x,y) //10,30,10,30

a = 40;
b = 60;

//Does not affect the copy which still has the old values
console.log(a,b,x,y) //40,60,10,30