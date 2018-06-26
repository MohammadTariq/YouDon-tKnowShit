function isAnagram(str1, str2) {

    if (str1 === str2) {
        return true;
    }

    if (str1.length !== str2.length){
        return false;
    }

    var counts = {};

    for (var i = 0; i < str1.length; i++) {
        var index = str1.charCodeAt(i);
        counts[index] = (counts[index] || 0) + 1;
    }

    for (var j = 0; j < str2.length; j++) {
        var index = str2.charCodeAt(j);
        if (!counts[index]) {
            return false;
        }
        counts[index]--;
    }
    console.log(counts);

    return true;
}