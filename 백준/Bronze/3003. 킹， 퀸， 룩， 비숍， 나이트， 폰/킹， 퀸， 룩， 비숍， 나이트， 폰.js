const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);

const arr = [1, 1, 2, 2, 2, 8];
let ans = [];

for (let i = 0; i < 6; i++) {
  ans[i] = arr[i] - input[i];
}
console.log(...ans);