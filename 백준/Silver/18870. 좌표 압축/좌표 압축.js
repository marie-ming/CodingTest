const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, arr] = fs
  .readFileSync(filePath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const xarr = [...arr];

let set = new Set(arr.sort((a, b) => a - b));
let setArr = [...set];

let obj = {};
setArr.forEach((item, idx) => (obj[item] = idx));

let ans = [];
for (let i = 0; i < N; i++) {
  ans.push(obj[xarr[i]]);
}

console.log(ans.join(" "));
