//Important Array methods and their usage

//1. Slice: removes elements from array as per the indices specified in the slice args. DOES NOT change the original array
var arr = [1,2,3,4,5];
var slicedArr = arr.slice(2,4);

console.log(arr) //[1,2,3,4,5]
console.log(slicedArr) //[3,4

//2. Splice: removes and adds elements as per the arguments, returns the removed elements and CHANGES the original array
var arr2 = [1,2,3,4,5];
arr2.splice(1,2,6,7,8) //1st arg: Remove from position 1, 2nd arg: remove 2 elements, 3rd arg and beyond: add these elements at the 1st arg position. this returns [2,3]

console.log(arr2) //[1,6,7,8,4,5]

//3. forEach: It calls a function once per element, but doesn’t do anything with the results of these calls. DOES NOT return anything
var arr3 = [1,2,3,4,5,6];
arr3.forEach(function(elem, index, arr){
    arr[index] += arr[index];
})

console.log(arr3);

/* 4. .map: The map() method creates/returns a new array with the results of calling a function for every array element.
The map() method calls the provided function once for each element in an array, in order.
Note: map() does not execute the function for array elements without values.
Note: map() does not change the original array. */

//Example 1
var arr4 = [4,5,6,7,8];
var mappedArr = arr4.map(Math.sqrt); //first argument is the function call to be applied to all the elements of the ayyar that is being mapped
console.log(arr4) //[4,5,6,7,8]
console.log(mappedArr) //[2, 2.23606797749979, 2.449489742783178, 2.6457513110645907, 2.8284271247461903]

//Example 2
var animals = ["dog", "cat", "lion", "tiger"];
var lengths = animals.map(function(key){
    return key.length;
})
console.log(lengths) //[3,3,4,5]

/* 5. .reduce: The reduce() method takes two parameters: a function to apply for each element in the array, and an initial value to use for the running total.*/

//Example 1;
[1,2,3].reduce(function(total,sum){
    return total+sum;
},10) //16

//Example 2:
animals.reduce(function(sum, word){
    return sum + word.length;
},0) //15