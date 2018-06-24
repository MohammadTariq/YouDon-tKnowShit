function traverseElem(elem, callback){
    callback(elem);
    var children = elem.querySelectorAll('*');
    for (var i = 0; i < children.length; i++){
        callback(children[i]);
    }
}

var cb = function(e){
    console.log(e);
}

var element = document.getElementById('question-254'); //Change the id when testing accordingly
traverseElem(element,cb);