//this keyword
var hero = {
    _name : "John",
    getSecretIdentity : function(){
        return this._name;
    }
}

hero.getSecretIdentity() //John

var stoleIdentity = hero.getSecretIdentity;
stoleIdentity(); //undefined because stoleIdentity is in global scope and doesnt have a reference to this.name;
