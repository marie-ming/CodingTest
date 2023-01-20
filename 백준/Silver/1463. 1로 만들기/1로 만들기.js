const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let N = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim();

let d = [];
d[1] = 0;

for (let i = 2; i <= N; i++) {
  d[i] = d[i - 1] + 1;
  if (i % 2 === 0) {
    d[i] = d[i] > d[i / 2] + 1 ? d[i / 2] + 1 : d[i];
  }
  if (i % 3 === 0) {
    d[i] = d[i] > d[i / 3] + 1 ? d[i / 3] + 1 : d[i];
  }
}

console.log(d[N]);
