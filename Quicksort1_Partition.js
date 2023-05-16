function quicksort(arr) {
  const pivot = arr[0];
  const left = []; // 3,2
  const right = []; // 5,7
  const equal = []; // 4

  let i = 0;
  while (i < arr.length) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
    i++;
  }

  return left.concat(equal, right).join(" ");
}
const arr = [4, 5, 3, 7, 2];
console.log(quicksort(arr));
