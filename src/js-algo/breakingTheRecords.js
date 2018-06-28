function breakingRecords(scores) {
    var recordsBrokenMax = 0;
    var recordsBrokenMin = 0;
    var max = scores[0];
    var min = scores[0];
    
    for (var i = 1; i < scores.length; i++){
        if ((scores[i] > scores[i-1]) && (scores[i] > max)){
            recordsBrokenMax += 1;
            max = scores[i];
        }
        else if ((scores[i] < scores[i-1]) && (scores[i] < min)){
            recordsBrokenMin += 1;
            min = scores[i];
        }
    }
    
    var result = [];
    result.push(recordsBrokenMax,recordsBrokenMin)
    return result;
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]); //[2, 4]
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]); //[4, 0]