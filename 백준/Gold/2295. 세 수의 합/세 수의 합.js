const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map(Number);

let binarySearch = (target) => {
  let st = 0;
  let en = two.length - 1;

  while (st <= en) {
    let mid = Math.floor((st + en) / 2);
    if (two[mid] < target) {
      st = mid + 1;
    } else if (two[mid] > target) {
      en = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
arr.sort((a, b) => a - b);

let two = [];
for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    two.push(arr[i] + arr[j]);
  }
}
two.sort((a, b) => a - b);

for (let i = N - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (binarySearch(arr[i] - arr[j]) >= 0) {
      console.log(arr[i]);
      return;
    }
  }
}
