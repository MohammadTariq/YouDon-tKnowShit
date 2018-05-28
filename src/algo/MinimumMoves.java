package algo;

//Given a target position on infinite number line, i.e -infinity to +infinity. Starting form 0 you have to reach the target by moving as described : In ith move you can take i steps forward or backward. Find the minimum number of moves require to reach the target.
//
//Examples :
//
//Input : target = 3
//Output : 2
//Explanation:
//On the first move we step from 0 to 1.
//On the second step we step from 1 to 3.
//
//Input: target = 2
//Output: 3
//Explanation:
//On the first move we step from 0 to 1.
//On the second move we step  from 1 to -1.
//On the third move we step from -1 to 2.

public class MinimumMoves {

	public static void main(String[] args) {
		int target = 5;
		MinimumMoves minMoves = new MinimumMoves();
		int numberOfMoves = minMoves.getNumMoves(target);
		System.out.println("Minimum number of moves taken to reach the taget  : " + numberOfMoves);
	}

	private int getNumMoves(int target) {
		int steps = 0;
		int numMoves = 0;
		for (int i = 1; i <= target; i++) {
			numMoves++;
			if (steps > target) {
				steps = steps - i;
			} else {
				steps = steps + i;
			}
			System.out.println("Steps after " + i + "th move : " + steps);
		}
		return numMoves;
	}
}