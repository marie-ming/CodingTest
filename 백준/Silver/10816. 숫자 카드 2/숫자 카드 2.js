const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, num, M, arr] = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

num.sort((a, b) => a - b);

let cnt = new Map();
for (let i = 0; i < N; i++) {
  let a = cnt.get(num[i]);
  if (a > 0) {
    cnt.set(num[i], a + 1);
  } else {
    cnt.set(num[i], 1);
  }
}

let ans = [];
for (let i = 0; i < M; i++) {
  let a = cnt.get(arr[i]);
  if (a > 0) {
    ans[i] = a;
  } else {
    ans[i] = 0;
  }
}

console.log(ans.join(" "));
