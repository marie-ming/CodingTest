const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, A, M, arr] = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

A.sort((a, b) => a - b);

let ans = [];
for (let i = 0; i < M; i++) {
  let st = 0;
  let en = N - 1;
  ans[i] = 0;
  while (st <= en) {
    let mid = Math.floor((st + en) / 2);
    if (A[mid] < arr[i]) {
      st = mid + 1;
    } else if (A[mid] > arr[i]) {
      en = mid - 1;
    } else {
      ans[i] = 1;
      break;
    }
  }
}

console.log(ans.join(" "));
