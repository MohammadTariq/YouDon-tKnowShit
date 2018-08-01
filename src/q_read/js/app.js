function getInterests(){
    var mainCateNames = [];
    var mainCateIds = [];
    var xobj = new XMLHttpRequest();
    var uri = encodeURI("http://ec2-18-219-171-61.us-east-2.compute.amazonaws.com:8080/provider-service/api/v1/interests");
    xobj.open('GET', uri, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            //callback(xobj.responseText);
            console.log(JSON.parse(xobj.response));
            var main_categories = JSON.parse(xobj.response);
            for (var key in main_categories){
                //console.log(main_categories[key].mainCategory);
                if (mainCateIds.indexOf(main_categories[key].id) == -1){
                    mainCateIds.push(main_categories[key].id);
                    mainCateNames.push(main_categories[key].mainCategory);
                    createNavItem(main_categories[key].id, main_categories[key].mainCategory)
                }
                loadFeedJSON(main_categories[key].name, main_categories[key].id);
            } 
        }
    };
    xobj.setRequestHeader('Content-Type', 'application/json');
    xobj.setRequestHeader("X-AUTH", "16f613c8-e2d9-498c-a663-797dc673f3c0");
    xobj.send();
}

getInterests();

function formFeedUrl(name, id){
    return encodeURI("http://ec2-18-219-171-61.us-east-2.compute.amazonaws.com:8080/provider-service/api/v1/newsList?idList=" + id + '~^~' + name);
}

function createNavItem(id, name){
    var navItemHtml = '<li class="nav-item"><a class="nav-link" data-toggle="pill" href="#' + id +'">' + name + '</a></li>'
    var nav = document.getElementById('topNavs');
    nav.innerHTML += navItemHtml;
}

function loadFeedJSON(name, id) {
    var xobj = new XMLHttpRequest();
    var uri = formFeedUrl(name, id);
    xobj.open('GET', uri, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            console.log(JSON.parse(xobj.response));
        }
    };
    xobj.setRequestHeader('Content-Type', 'application/json');
    xobj.setRequestHeader("X-AUTH", "16f613c8-e2d9-498c-a663-797dc673f3c0");
    xobj.send();
    console.log("request sent");
}

/*
function loadJSON(file, callback) {
    var xobj = new XMLHttpRequest();
    var uri = encodeURI("http://ec2-18-219-171-61.us-east-2.compute.amazonaws.com:8080/provider-service/api/v1/newsList?idList=13~^~bikes");
    xobj.open('GET', uri, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };

    xobj.setRequestHeader('Content-Type', 'application/json');
    xobj.setRequestHeader("X-AUTH", "16f613c8-e2d9-498c-a663-797dc673f3c0");
    xobj.send();
    console.log("request sent");
}

function load() {
    loadJSON("data.json", function(response) {
        var actual_JSON = JSON.parse(response);
        console.log(actual_JSON);
        for (key in actual_JSON) {
            var bikes = JSON.parse(actual_JSON[key]);
            console.log(bikes);
            createNavItem(key, key.toUpperCase())
        }
    });
}

load();
*/



