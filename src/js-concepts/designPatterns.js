//Contructor Pattern: Initializes the object with some default values and properties
var instance= new Object();
instance.name = "Manavi";
instance["age"] = 25;

//Object Prototypes
function Person(name, age, isDev){
    this.name = name;
    this.age = age;
    this.isDev = isDev || false;
}

Person.prototype.writesCode = function(){
    return this.isDev ? "yes writes code" : "no does not write code";
}

var me = new Person("manavi", 27, true);
var you = new Person("shravan", 30, false);

me.writesCode(); //"yes writes code"
you.writesCode(); //"no does not write code"

//Module Pattern: creating objects with private and public partsThese are called modules and are very useful whenever we want to hide certain parts of an object and only expose an interface to the user of the module
//Using Closures in the below example:

var collection = (function(){
    var objects = []; //private member, not accessible from outside the function scope
    
    //public members, accessible from outside the function scope
    return {
        addObjects: function(object){
            objects.push(object);
        },
        removeObject: function(object){
            var index = objects.indexOf(object);
            objects.splice(index,1);
        },
        getObjects: function(){
            return JSON.parse(JSON.stringify(objects));
        }
    };
})();

collection.addObjects("manavi");
collection.addObjects("singh");
collection.addObjects("troy");
collection.getObjects(); //(3) ["manavi", "singh", "troy"]
collection.removeObject("manavi"); 
collection.getObjects(); //(2) ["singh", "troy"]

//Revealing Module Pattern: This pattern is an improvement made to the module pattern as illustrated above. The main difference is that we write the entire object logic in the private scope of the module and then simply expose the parts we want to be public by returning an anonymous object. We can also change the naming of private members when mapping private members to their corresponding public members.

//The above example has been enhanced here to explai revealing module pattern
var collection2 = (function(){
    //Private members
    var objects = [];
    
    function addObjects(object){
        objects.push(object);
    }
    
    function removeObject(object){
        var index = objects.indexOf(object);
        objects.splice(index,1);
    }
    
    function getObjects(){
        return JSON.parse(JSON.stringify(objects));
    }
    
    //public members
    return {
        addName: addObjects,
        removeName: removeObject,
        getName: getObjects
    }
})()

collection2.addName("manavi"); 
collection2.addName("singh"); 
collection2.addName("troy");
collection2.addName("shravan");

collection2.getName(); //(3) ["manavi", "singh", "troy", "shravan"]
collection2.removeName("shravan");

collection2.getName(); //(3) ["manavi", "singh", "troy"]
