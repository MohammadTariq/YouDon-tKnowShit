/*You are choreograhing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location  and moves at a rate of  meters per jump.
The second kangaroo starts at location  and moves at a rate of  meters per jump.
You have to figure out a way to get both kangaroos at the same location as part of the show.

Complete the function kangaroo which takes starting location and speed of both kangaroos as input, and return  or appropriately. Can you determine if the kangaroos will ever land at the same location at the same time? The two kangaroos must land at the same location after making the same number of jumps.

Input Format

A single line of four space-separated integers denoting the respective values of , , , and .

Output Format

Print YES if they can land on the same location at the same time; otherwise, print NO.

Note: The two kangaroos must land at the same location after making the same number of jumps.*/

function kangaroo(x1, v1, x2, v2) {
    var answer;
    if (v1 < v2){
        answer = "NO";
    }
    if ((x1 < x2) && (v1 > v2)){
        var xDiff = Math.abs(x1 - x2);
        var vDiff = Math.abs(v1 - v2);
        if (xDiff % vDiff === 0){
            answer = "YES";
        }
        else {
            answer = "NO";
        }
    }
    return answer;

}

kangaroo(0, 3, 4, 2); //YES
kangaroo(0, 2, 5, 3); //NO
