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

function createNavItem(id, name){
    var navItemHtml = '<li class="nav-item"><a class="nav-link active" data-toggle="pill" href="#' + id +'">' + name + '</a></li>'
    var nav = document.getElementById('topNavs');
    nav.innerHTML = navItemHtml;
}

load();