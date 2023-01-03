const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString();

const que = [];
let idx = 0;

for (let i = 0; i < input; i++) {
  que[i] = i + 1;
}
while (idx + 1 !== que.length) {
  que[idx] = 0;
  idx++;
  que.push(que[idx]);
  que[idx] = 0;
  idx++;
}
console.log(que[idx]);