/**
 * A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. Given an integer, , rotate the array that many steps left and return the result.

Example


After  rotations, .

Function Description

Complete the rotateLeft function in the editor below.

rotateLeft has the following parameters:

int d: the amount to rotate by
int arr[n]: the array to rotate
Returns

int[n]: the rotated array
Input Format

The first line contains two space-separated integers that denote , the number of integers, and , the number of left rotations to perform.
The second line contains  space-separated integers that describe .

Constraints

Sample Input

5 4
1 2 3 4 5
Sample Output

5 1 2 3 4
Explanation

To perform  left rotations, the array undergoes the following sequence of changes:


 */

let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
const leftRotation = (d, arr) => {

  let rotate = [];
  const k = arr.length;

  const rotations = d % k;

  let i = 0;
  while (i < n) {
    let newInd = (i + rotations) % n;
    rotate[i] = arr[newInd];
    i++;
  }
  return rotate;

 
};

let [n, d] = readLine().split(" ").map(Number);
let arr = readLine().split(" ").map(Number);
// console.log(d)
console.log(leftRotation(d, arr).join(" "));
