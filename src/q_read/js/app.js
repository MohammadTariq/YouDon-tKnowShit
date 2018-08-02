function getInterests() {
    var mainCateNames = [];
    var mainCateIds = [];
    var xobj = new XMLHttpRequest();
    var uri = encodeURI("http://ec2-18-219-171-61.us-east-2.compute.amazonaws.com:8080/provider-service/api/v1/interests");
    xobj.open('GET', uri, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            //callback(xobj.responseText);
            console.log(JSON.parse(xobj.response));
            var main_categories = JSON.parse(xobj.response);
            for (var key in main_categories) {
                //console.log(main_categories[key].mainCategory);
                if (mainCateIds.indexOf(main_categories[key].id) == -1) {
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

function formFeedUrl(name, id) {
    return encodeURI("http://ec2-18-219-171-61.us-east-2.compute.amazonaws.com:8080/provider-service/api/v1/newsList?idList=" + id + '~^~' + name);
}

function createNavItem(id, name) {
    var navItemHtml = '<li class="nav-item"><a class="nav-link" data-toggle="pill" href="#' + id + '">' + name + '</a></li>'
    var nav = document.getElementById('topNavs');
    nav.innerHTML += navItemHtml;
    var idDiv = document.createElement('div');
    idDiv.id = id;
    idDiv.classList.add('container', 'tab-pane','active');
    var feedCont = document.getElementById('feedTabs');
    feedCont.appendChild(idDiv);
}

function loadFeedJSON(name, id) {
    var xobj = new XMLHttpRequest();
    var uri = formFeedUrl(name, id);
    xobj.open('GET', uri, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            //console.log(JSON.parse(xobj.response));
            var feedJson = JSON.parse(xobj.response);
            processFeedJson(feedJson);
        }
    };
    xobj.setRequestHeader('Content-Type', 'application/json');
    xobj.setRequestHeader("X-AUTH", "16f613c8-e2d9-498c-a663-797dc673f3c0");
    xobj.send();
    console.log("request sent");
}

function processFeedJson(json) {
    for (key in json) {
        console.log(JSON.parse(json[key]));
        var feedArr = JSON.parse(json[key]);
        for (var i = 0; i < feedArr.length; i++){
            populateFeed(key, feedArr[i]);
        }
    }
}

function populateFeed(key, inputData) {
    
    var feedCont = document.getElementById('feedTabs');
    //var feebTabHtml = 'feedTabHtml' + key;
    //feebTabHtml = '<div id="' + key + '" class="container tab-pane ">'
    
    var idDiv = document.getElementById(key);
    console.log(idDiv);
    
    //div for image
    var image = document.createElement('div');
    image.id = "image";
    var imgUrl = inputData.ImageUrl.XXXHDPI;
    var imageElem = document.createElement('img');
    imageElem.src = imgUrl;
    image.appendChild(imageElem);
    idDiv.appendChild(image);
    
    //div for title
    var title = document.createElement('div');
    title.id = "title";
    title.innerHTML = inputData["Title"];
    idDiv.appendChild(title);
    
    //div for summary
    var summary = document.createElement('div');
    summary.id = "summary";
    var p = document.createElement('p');
    p.innerHTML = inputData["Summary"] + '...' + '<a style="font-size: 21px; color: hsl(45, 95%, 63%); text-decoration: underline;" href="' + inputData["Link"] + '" target="_blank"></br>Read More</a>';
    summary.appendChild(p)
    idDiv.appendChild(summary);
    
    //feedCont.appendChild(idDiv);
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
