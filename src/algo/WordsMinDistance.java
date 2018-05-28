package algo;

import java.util.Scanner;

//Input:The first line consists of  a integer T denoting the number of test cases .Each test case consists of three lines.
//First line consists of an integer N denoting the size of array of strings .Second line consists of N spaced strings made 
//of 'a' to 'z' .Third line consists of two spaced strings s1,s2 for which you have two find minimum distance.

//Output:The output consists of a single line for each testcase which is the minimum distance between the two given strings.

//Constraints:
//1<=T<=1000
//1<=N<=100
//1<=size of strings of array<=100
//It is given that s1 and s2 will always be present in the array

//Example:

//Input:
//1
//5
//the quick brown fox quick
//fox the

//Output:
//3
//Expected time complexity
//O(n)

public class WordsMinDistance {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int t = in.nextInt();
		int n = in.nextInt();
		String[] inputArr = new String[n];
		for (int i = 0; i < n; i++) {
			inputArr[i] = in.next();
		}
		String token1 = in.next();
		String token2 = in.next();
		while (t-- > 0) {
			System.out.println("Minimum distance between '" + token1 + "' and '" + token2 + " is = "
					+ getMinDistance(inputArr, token1, token2));
		}
		in.close();
	}

	private static int getMinDistance(String[] inputArr, String token1, String token2) {
		int index1 = -1;
		int index2 = -1;
		int tempDistance = 0;
		int minDistance = Integer.MAX_VALUE;
		for (int i = 0; i < inputArr.length; i++) {
			if (inputArr[i].equals(token1)) {
				index1 = i;
			}
			if (inputArr[i].equals(token2)) {
				index2 = i;
			}
			if (index1 != -1 && index2 != -1) {
				tempDistance = (int) Math.abs(index2 - index1);
				if (tempDistance < minDistance) {
					minDistance = tempDistance;
				}
			}
		}
		return minDistance;
	}
}