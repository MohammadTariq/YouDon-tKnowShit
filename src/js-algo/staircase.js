// Complete the staircase function below.
function staircase(n) {
    var line = Array(n).fill(" ");
    //line[n] = "";
    
    for (var i = n - 1; i >= 0; i--){
        line[i] = "#";
        console.log(line.join(''));
    }

}

staircase(6);