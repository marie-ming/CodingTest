const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");
const [N, M] = input[0]
  .split(" ")
  .map((v) => +v)
  .map(Number);
const arr = input[1]
  .split(" ")
  .map((v) => +v)
  .map(Number);

arr.sort(function (a, b) {
  return b - a;
});

let min = 0;
let mid = 0;
let max = arr[0];
let ans = 0;

while (min <= max) {
  let sum = 0;
  mid = Math.floor((max + min) / 2);

  for (let i = 0; i < N; i++) {
    if (arr[i] - mid > 0) {
      sum += arr[i] - mid;
    }
  }
  if (sum >= M) {
    if (mid > ans) {
      ans = mid;
    }
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(ans);
